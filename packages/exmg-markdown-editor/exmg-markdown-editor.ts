import {LitElement, html, TemplateResult} from 'lit';
import {customElement, query, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {classMap} from 'lit/directives/class-map.js';
import {observer} from '@material/mwc-base/observer.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import './exmg-import-helper.js';

import './exmg-markdown-editor-icons.js';
import {style as codeMirrorStylesText} from './styles/exmg-markdown-codemirror-styles-css.js';
import {
  ToolBarOption,
  ToolBarConfigItem,
  isToolBarConfigItem,
  AvailableMarkdownExtension,
  availableMarkdownExtensions,
  Position,
  ChangedProps,
} from './exmg-custom-types.js';

import Editor = CodeMirror.Editor;
import {
  convertShortcut,
  debounce,
  DEFAULT_TOOLBAR_OPTIONS,
  ENTER_KEY_CODE,
  insertBlocks,
  KEY_MAPS,
  SHORTCUTS,
} from './exmg-markdown-utils.js';
import {EditorConfiguration} from 'codemirror';
import {MarkedOptions, Renderer} from 'marked';
// import * as marked from 'marked';

/**
 * Markdown WYSIWYG editor element.
 * This editor element is a wrapper element for the markdown-element which will enable editing
 * the markdown data. See [marked-element](https://www.webcomponents.org/element/PolymerElements/marked-element/)
 * for more details on how to use this element.
 *
 * ```
 * <exmg-markdown-editor markdown="# Header 1"></exmg-markdown-editor>
 * ```
 *
 * ## Custom Toolbar
 * Add attribute toolbar-buttons to adjust the toolbar buttons. The array values should match
 * the _toolbarButtons item name values.
 *
 * ```html
 * <exmg-markdown-editor toolbar-buttons='["strong","italic","strikethrough","|","quote","hr","table"]'></exmg-markdown-editor>
 * ```
 *
 * ### Styling
 *
 * The preview panel markdown output can be styled from outside th element. See the demo/styling.html example
 * on how to do this. In this demo the github-markdown-css project is used for styling the html output.
 *
 * The HTML output will we inserted into the element slot and will have a container div arround it
 * with the class preview-html:
 *
 * ```
 * <exmg-markdown-editor markdown="# Header 1">
 *  <div class="preview-body"><h1>Header 1</h1></div>
 * </exmg-markdown-editor>
 * ```
 *
 * `<exmg-markdown-editor>` provides the following custom properties and mixins
 *  for styling:
 *
 *  Custom property | Description | Default
 *  ----------------|-------------|----------
 *  `--exmg-markdown-editor-border` | Border Color | `#ddd`
 *  `--exmg-markdown-editor-background-color` | Editor Background Color | `white`
 *  `--exmg-markdown-editor-fullscreen-top-offset` | Top offset in fullscreen mode | `0px`
 *  `--exmg-markdown-editor-toolbar-background` | Toolbar background color | `#fafafa`
 *  `--exmg-markdown-editor-toolbar-label-background` | Toolbar label background color | `#fafafa`
 *  `--exmg-markdown-editor-label-color` | Toolbar text color | `54% black`
 *  `--exmg-markdown-editor-toolbar-color` | Toolbar text color | `87% black`
 *  `--exmg-markdown-editor-toolbar-color-disabled` | Toolbar text color disabled | `54% black`
 *  `--exmg-markdown-editor-preview-background` | Preview background color | `white`
 *  `--exmg-markdown-editor-toolbar-button-background-hover` | Toolbar icon border color | `#fafafa`
 *  `--exmg-markdown-editor-toolbar-seperator-color` | Toolbar seperator color | `#ddd`
 *  `--exmg-markdown-editor-code-hover` | Editor code part hover background color | `white`
 *
 *  # Events:
 *  - value-change - where detail is current markdown value
 *  - exmg-markdown-editor-fullscreen where detail is boolean with current fullscreen state
 *  - exmg-markdown-editor-paste-table thrown when app should display a dialog to paste Excel Table
 *  - exmg-markdown-editor-image-open when image-ext button is clicked. Can be used to insert external images
 *
 * @customElement
 * @group Exmg Core Elements
 * @element exmg-markdown-editor
 * @demo demo/index.html
 * @memberof Exmg
 * @extends LitElement
 * @summary Markdown editor element
 */
@customElement('exmg-markdown-editor')
export class EditorElement extends LitElement {
  @property({type: Boolean, attribute: 'auto-focus'})
  autoFocus = false;

  @property({type: Number, attribute: 'height'})
  height?: number = undefined;

  @property({type: Boolean, attribute: 'line-numbers'})
  lineNumbers = false;

  @property({type: Boolean, attribute: 'indent-with-tabs'})
  indentWithTabs = true;

  @property({type: String})
  @observer(function (this: EditorElement, markdown: string) {
    if (this.codeMirrorEditor && this.codeMirrorEditor.getValue() !== markdown) {
      this.codeMirrorEditor.setValue(markdown || '');
    }
    this.dispatchMarkdownUpdatedDebounce(() => {
      this.fire('value-change', this.value);
      this.fire('change', this.value);
    });
    this.renderHTML();
    this.updateDocHistory();
  })
  markdown?: string;

  @property({type: Boolean, attribute: 'show-helper-label'})
  showHelperLabel = false;

  @property({type: Boolean, reflect: true, attribute: 'split-view'})
  splitView = false;

  @property({type: Boolean, reflect: true, attribute: 'fullscreen'})
  @observer(function (this: EditorElement, fullscreen: boolean) {
    if (!this.codeMirrorEditor) {
      return;
    }
    // @ts-ignore
    this.codeMirrorEditor.setOption('fullScreen', fullscreen);

    if (this.isElementInitialized) {
      this.fire('exmg-markdown-editor-fullscreen', !!fullscreen);
    }
  })
  fullscreen = false;

  @property({type: Array, attribute: 'toolbar-buttons'})
  toolbarButtons: ToolBarOption[] = DEFAULT_TOOLBAR_OPTIONS;

  @property({type: String})
  public name?: string;

  @property({type: Boolean, attribute: 'required'})
  public required = false;

  @property({type: Boolean, reflect: true, attribute: 'invalid'})
  private invalid = false;

  bubbles = false;

  static styles = [codeMirrorStylesText];

  public validate(): boolean {
    this.invalid = this.required && !this.markdown;

    return !this.invalid;
  }

  @property({type: Array})
  private toolbarButtonsConfig: ToolBarConfigItem[] = [
    {
      name: 'undo',
      icon: 'exmg-markdown-editor-icons:undo',
      action: this.undo,
      className: 'btn-undo',
      title: 'Undo',
    },
    {
      name: 'redo',
      icon: 'exmg-markdown-editor-icons:redo',
      action: this.redo,
      className: 'btn-redo',
      title: 'Redo',
    },
    {
      name: 'header_one',
      icon: 'exmg-markdown-editor-icons:header-one',
      action: this.toggleHeaderOne,
      className: 'btn-header',
      title: 'Header 1',
    },
    {
      name: 'header_two',
      icon: 'exmg-markdown-editor-icons:header-two',
      action: this.toggleHeaderTwo,
      className: 'btn-header',
      title: 'Header 2',
    },
    {
      name: 'header_three',
      icon: 'exmg-markdown-editor-icons:header-three',
      action: this.toggleHeaderThree,
      className: 'btn-header',
      title: 'Header 3',
    },
    {
      name: 'strong',
      icon: 'exmg-markdown-editor-icons:format-bold',
      action: this.toggleBold,
      className: 'btn-bold',
      title: 'Bold',
    },
    {
      name: 'italic',
      icon: 'exmg-markdown-editor-icons:format-italic',
      action: this.toggleItalic,
      className: 'btn-italic',
      title: 'Italic',
    },
    {
      name: 'strikethrough',
      icon: 'exmg-markdown-editor-icons:format-strikethrough',
      action: this.toggleStrikethrough,
      className: 'btn-strikethrough',
      title: 'Strikethrough',
    },
    {
      name: 'indent-in',
      icon: 'exmg-markdown-editor-icons:format-indent-in',
      action: this.increaseIndentation,
      className: 'btn-indent-in',
      title: 'Indent increase',
    },
    {
      name: 'indent-out',
      icon: 'exmg-markdown-editor-icons:format-indent-out',
      action: this.decreaseIndentation,
      className: 'btn-indent-out',
      title: 'Indent decrease',
    },
    {
      name: 'quote',
      icon: 'exmg-markdown-editor-icons:format-quote',
      action: this.toggleBlockquote,
      className: 'btn-quote-left',
      title: 'Quote',
    },
    {
      name: 'hr',
      icon: 'exmg-markdown-editor-icons:trending-flat',
      action: this.toggleHorizontalRule,
      className: 'btn-horizontal-rule',
      title: 'Horizontal Rule',
    },
    {
      name: 'code',
      icon: 'exmg-markdown-editor-icons:code',
      action: this.toggleCode,
      className: 'btn-code',
      title: 'Code',
    },
    {
      name: 'table',
      icon: 'exmg-markdown-editor-icons:grid-on',
      action: this.insertTable,
      className: 'btn-table',
      title: 'Table',
    },
    {
      name: 'table-paste',
      icon: 'exmg-markdown-editor-icons:paste-table',
      action: this.pasteTable,
      className: 'btn-table-paste',
      title: 'Paste Table',
    },
    {
      name: 'link',
      icon: 'exmg-markdown-editor-icons:link',
      action: this.insertLink,
      className: 'btn-link',
      title: 'Link',
    },
    {
      name: 'image',
      icon: 'exmg-markdown-editor-icons:image',
      action: this.insertImage,
      className: 'btn-image',
      title: 'Image',
    },
    {
      name: 'image-ext',
      icon: 'exmg-markdown-editor-icons:image',
      action: this.insertImageExt,
      className: 'btn-image',
      title: 'Image',
    },
    {
      name: 'unordered-list',
      icon: 'exmg-markdown-editor-icons:format-list-bulleted',
      action: this.toggleUnorderedList,
      className: 'btn-list-ul',
      title: 'Generic List',
    },
    {
      name: 'ordered-list',
      icon: 'exmg-markdown-editor-icons:format-list-numbered',
      action: this.toggleOrderedList,
      className: 'btn-list-ol',
      title: 'Numbered List',
    },
    {
      name: 'fullscreen',
      icon: 'exmg-markdown-editor-icons:fullscreen',
      action: this.toggleFullscreen,
      className: 'btn-fullscreen',
      title: 'Fullscreen',
    },
    {
      name: 'split-view',
      icon: 'exmg-markdown-editor-icons:chrome-reader-mode',
      action: this.toggleSplitView,
      className: 'btn-split-view',
      title: 'Split View',
    },
  ];

  @property({type: Object, attribute: 'shortcuts'})
  shortcuts: Record<string, string> = SHORTCUTS;

  @property({type: Array})
  private enabledExtensions: AvailableMarkdownExtension[] = [];

  @query('#editor')
  editorElement?: HTMLElement;

  private codeMirrorEditor?: Editor;
  private _onKeyPressed: any;

  private normalizedToolBarConfig: Map<ToolBarOption, ToolBarConfigItem> = new Map();

  private dispatchMarkdownUpdatedDebounce: (cb?: unknown) => void = debounce(300);

  private isElementInitialized = false;

  get value(): string {
    return (this.markdown || '').replace(/([^\r]|^)\n/g, '$1\n');
  }

  focus(): void {
    if (!this.codeMirrorEditor) return;
    this.refresh();
    this.codeMirrorEditor!.focus();
  }

  refresh(): void {
    if (!this.codeMirrorEditor) return;
    this.codeMirrorEditor!.refresh();
  }

  constructor() {
    super();
    this._onKeyPressed = this.onKeyPressed.bind(this);

    // Cancel enter propogation
    this.addEventListener('keyup', this._onKeyPressed);
  }

  protected update(changedProperties: ChangedProps): void {
    if (changedProperties.has('toolbarButtonsConfig')) {
      const normalizedToolBartConfig: Map<ToolBarOption, ToolBarConfigItem> = new Map();
      (this.toolbarButtonsConfig || []).forEach((it) => normalizedToolBartConfig.set(it.name, it));
      this.normalizedToolBarConfig = normalizedToolBartConfig;
    }

    super.update(changedProperties);
  }

  protected async firstUpdated(): Promise<void> {
    await this.updateComplete;
    this.setupEditor();
    this.setupToolbarExtensions();
    this.isElementInitialized = true;
    this.renderHTML();
  }

  protected fire<T>(eventName: string, detail?: T, bubbles?: boolean): boolean {
    return this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: bubbles || this.bubbles,
        composed: true,
        detail,
      }),
    );
  }

  /**
   * Fired when the content is being processed and before it is rendered.
   * Provides an opportunity to highlight code blocks based on the programming
   * language used. This is also known as syntax highlighting. One example would
   * be to use a prebuilt syntax highlighting library, e.g with
   * [highlightjs](https://highlightjs.org/).
   *
   * @param {string} code
   * @param {string} lang
   * @return {string}
   * @event syntax-highlight
   */
  _highlight(code: string, lang: string): string {
    this.fire<{code: string; lang: string}>('syntax-highlight', {code: code, lang: lang});
    return code;
  }

  renderHTML(): void {
    if (!this.markdown) {
      this.innerHTML = '';
      return;
    }

    const opts: MarkedOptions = {
      highlight: this._highlight.bind(this),
      breaks: false,
      sanitize: false,
      pedantic: false,
      smartypants: false,
    };

    let customRenderer;
    if (window.markdownEditorConfig && window.markdownEditorConfig.renderer) {
      customRenderer = window.markdownEditorConfig.renderer as Renderer;
    }
    window.marked.use({renderer: customRenderer});

    this.innerHTML = `<div class="preview-body">${window.marked(this.markdown, opts)}</div>`;
    this.focus();
    this.fire('html-render-complete', {});
  }
  /**
   * Helper method that creates button array from toolbar config property
   * @param {Array} toolBarOptions
   * @return {Array}
   */
  private getToolbar(toolBarOptions: ToolBarOption[] = []): (ToolBarConfigItem | Record<string, any>)[] {
    return toolBarOptions.map((optionName: ToolBarOption) => {
      if (optionName === '|') {
        return {};
      }

      return this.normalizedToolBarConfig.get(optionName) || {};
    });
  }
  /**
   * Updates the Toolbar to take out disabled extensions that are active on the toolbar
   */

  private setupToolbarExtensions(): void {
    const fetchedConfig = window.markdownEditorConfig;
    if (fetchedConfig) {
      this.enabledExtensions = fetchedConfig.extensions;
    }
    const baseToolbarButtons = this.toolbarButtons;
    availableMarkdownExtensions.forEach((extension) => {
      if (baseToolbarButtons.includes(extension) && !this.enabledExtensions.includes(extension)) {
        console.warn(`The extension ${extension} is not enabled on your markdownEditorConfig object, it was removed from the toolbar.`);
        baseToolbarButtons.splice(baseToolbarButtons.indexOf(extension), 1);
      }
    });
    this.toolbarButtons = baseToolbarButtons;
    this.requestUpdate();
  }

  /**
   * Manages the undo/redo disabled state based upon the available history in code mirror
   */
  private updateDocHistory(): void {
    if (!this.codeMirrorEditor) {
      return;
    }
    const {undo, redo} = this.codeMirrorEditor.getDoc().historySize();

    const undoEl = this.shadowRoot!.querySelector('.btn-undo');
    if (undoEl) {
      if (undo > 0) {
        undoEl.removeAttribute('disabled');
      } else {
        undoEl.setAttribute('disabled', 'disabled');
      }
    }

    const redoEl = this.shadowRoot!.querySelector('.btn-redo');
    if (redoEl) {
      if (redo > 0) {
        redoEl.removeAttribute('disabled');
      } else {
        redoEl.setAttribute('disabled', 'disabled');
      }
    }
  }

  /********* TOOL BAR HANDLERS *************/
  private toggleFullscreen(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.fullscreen = !this.fullscreen;
  }

  private toggleSplitView(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.splitView = !this.splitView;
  }

  setupEditor(): Editor {
    const extraKeys = {
      ...KEY_MAPS,
      Esc: (codeMirror: Editor) => {
        // @ts-ignore
        if (codeMirror!.getOption('fullScreen')) {
          this.fullscreen = false;
        }
      },
    };

    Object.keys(this.shortcuts).forEach((shortcut) => {
      const actionBtn = this.normalizedToolBarConfig.get(shortcut as ToolBarOption);
      if (actionBtn && !!this.shortcuts[shortcut]) {
        // @ts-ignore
        extraKeys[convertShortcut(this.shortcuts[shortcut])] = () => actionBtn.action.bind(this)();
      }
    });

    /* initialize code mirror */
    const editorConfig: EditorConfiguration = {
      mode: 'markdown',
      value: this.markdown || '',
      tabSize: 2,
      indentUnit: 2,
      indentWithTabs: this.indentWithTabs,
      lineNumbers: this.lineNumbers,
      autofocus: this.autoFocus,
      extraKeys,
      lineWrapping: true,
    };

    const codeMirrorEditor: Editor = window.CodeMirror(this.editorElement!, editorConfig);

    /* Update markdown property with latest changes */
    codeMirrorEditor.on('change', (editor: Editor) => {
      if (this.markdown === editor.getValue()) {
        return;
      }
      this.markdown = editor.getValue();
    });

    afterNextRender(this, () => this.updateDocHistory());

    this.codeMirrorEditor = codeMirrorEditor;

    return codeMirrorEditor;
  }

  private replaceRangeLine(text: string, lineNumber: number): void {
    this.codeMirrorEditor!.getDoc().replaceRange(text, {line: lineNumber, ch: 0}, {line: lineNumber, ch: 99999999999999});
  }

  private insertAtCursor(text: string, selectionOffset?: number, selectionLength?: number): void {
    this.codeMirrorEditor!.getDoc().replaceSelection(text, 'start');

    const cursorStart = this.codeMirrorEditor!.getDoc().getCursor();
    cursorStart.ch += selectionOffset || 0;
    this.codeMirrorEditor!.getDoc().setSelection(cursorStart, {
      line: cursorStart.line,
      ch: cursorStart.ch + (selectionLength || text.length),
    });
    this.codeMirrorEditor!.focus();
  }

  private hasType(states: string[], type: string): boolean {
    const mappings = [
      {
        key: 'code',
        value: 'comment',
      },
      {
        key: 'inline-code',
        value: 'comment',
      },
    ];

    if (states.includes(type)) {
      return true;
    }

    const result = mappings.find((m) => {
      return m.key === type;
    });
    return result ? states.includes(result.value) : false;
  }

  private processBlock(type: string, newLine = false): void {
    const codeMirror = this.codeMirrorEditor!;
    const states = this.getStates();
    const blockStyles: Record<string, string> = {
      strong: '**',
      'inline-code': '`',
      code: '```',
      em: '*',
      strikethrough: '~~',
    };

    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');
    const multiLineSelection = cursorStart.line !== cursorEnd.line;
    const selectionText = codeMirror.getDoc().getSelection();
    const emptySelection = selectionText === '';
    if (this.hasType(states, type)) {
      const start = {
        ...cursorStart,
        ch: cursorStart.ch - blockStyles[type].length,
      };
      const end = {
        ...cursorEnd,
        ch: cursorEnd.ch + blockStyles[type].length,
      };
      codeMirror.getDoc().setSelection(start, end);
      codeMirror.getDoc().replaceSelection(selectionText);
      cursorStart.ch = start.ch;
    } else {
      const text =
        blockStyles[type] +
        (type === 'code' ? '\n' : '') +
        (emptySelection ? `${type} text` : selectionText) +
        (type === 'code' ? '\n' : '') +
        blockStyles[type];
      codeMirror.getDoc().replaceSelection(text);
      if (newLine) {
        cursorStart.line += 1;
        cursorEnd.line += 1;
      } else {
        cursorStart.ch += blockStyles[type].length;
        if (!multiLineSelection) {
          cursorEnd.ch += emptySelection ? `${type} text`.length + blockStyles[type].length : blockStyles[type].length;
        }
      }
    }

    codeMirror.getDoc().setSelection(cursorStart, cursorEnd);
    codeMirror.focus();
  }

  private processLine(type: string, symbol?: string): void {
    const codeMirror = this.codeMirrorEditor!;
    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');

    let lineCount = 0;
    for (let i = cursorStart.line; i <= cursorEnd.line; i += 1) {
      const lineStart = Object.assign(Object.assign({}, cursorStart), {line: i, ch: 0, sticky: 'after'});
      const states = this.getStates(lineStart);
      let text = codeMirror.getDoc().getLine(i);
      const stateFound = states.includes(type);
      switch (type) {
        case 'header': {
          const result = /(^[\#]+)/.exec(text);
          if (result === null) {
            text = `${symbol} ${text}`;
            const offset = symbol!.length + 1; // +1 is space.
            if (cursorStart.ch !== cursorEnd.ch) {
              cursorEnd.ch += offset;
            } else {
              cursorStart.ch += offset;
              cursorEnd.ch += offset;
            }
          } else if (symbol && result[0] === symbol) {
            text = text.substring(symbol.length + 1);
          } else if (symbol && result[0].length !== symbol.length) {
            text = text.substring(result[0].length + 1);
            text = `${symbol} ${text}`;
          }
          break;
        }
        case 'quote':
        case 'indent-in':
        case 'unordered-list':
          text = stateFound ? text.substring(2) : `${symbol} ${text}`;
          cursorStart.ch += stateFound ? -2 : 2;
          cursorEnd.ch += stateFound ? -2 : 2;
          break;
        case 'indent-out':
          text = states.includes('quote') ? text.substring(2) : `${symbol} ${text}`;
          cursorStart.ch += stateFound ? -2 : 2;
          cursorEnd.ch += stateFound ? -2 : 2;
          break;
        case 'ordered-list':
          text = stateFound ? text.substring(3) : `${lineCount + 1}. ${text}`;
          cursorStart.ch += stateFound ? -3 : 3;
          cursorEnd.ch += stateFound ? -3 : 3;
          break;
      }
      this.replaceRangeLine(text, i);
      lineCount += 1;
    }

    codeMirror.getDoc().setSelection(cursorStart, cursorEnd);
    codeMirror.focus();
  }

  private isSelectionInline(): boolean {
    const codeMirror = this.codeMirrorEditor!;
    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');
    const lineLength = codeMirror.getDoc().getLine(cursorStart.line).length;
    return cursorStart.line === cursorEnd.line && cursorEnd.ch - cursorStart.ch !== lineLength;
  }

  private getSelectedText(): string {
    const codeMirror = this.codeMirrorEditor;
    const doc = codeMirror!.getDoc()!;
    return doc.getSelection();
  }

  private getStates(position?: Position): string[] {
    const codeMirror = this.codeMirrorEditor!;
    const pos: Position = position || {...codeMirror.getDoc().getCursor('start')};
    if (pos.sticky === 'after') {
      pos.ch = +1;
    }

    const cursor = codeMirror.getTokenAt(pos);
    cursor.string === '~' ? (cursor.type = 'strikethrough') : '';
    if (!cursor.type) {
      return [];
    }

    const states = cursor.type.split(' ');

    if (states.includes('variable-2')) {
      const text = codeMirror.getDoc().getLine(pos.line);
      const index = states.indexOf('variable-2');
      states[index] = /^\s*\d+\.\s/.test(text) ? 'ordered-list' : 'unordered-list';
    }
    return states;
  }

  private toggleHorizontalRule(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const codeMirrorEditor = this.codeMirrorEditor!;
    const cursorStart = codeMirrorEditor.getDoc().getCursor('start');
    const lineLength = codeMirrorEditor.getDoc().getLine(cursorStart.line).trim().length;
    const newLine = cursorStart.ch === 0 && lineLength === 0;
    const appendStr = newLine ? '\n' : '\n\n';
    this.insertAtCursor(appendStr + insertBlocks.hr + appendStr);
    cursorStart.line += newLine ? 1 : 2;
    codeMirrorEditor.getDoc().setSelection(cursorStart, cursorStart);
    codeMirrorEditor.focus();
  }

  private toggleStrikethrough(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processBlock('strikethrough');
  }

  private toggleBold(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processBlock('strong');
  }

  private toggleItalic(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processBlock('em');
  }

  private toggleBlockquote(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processLine('quote', '>');
  }

  private toggleUnorderedList(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.processLine('unordered-list', '*');
  }

  private toggleOrderedList(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processLine('ordered-list');
  }

  private toggleHeaderOne(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processLine('header', '#');
  }

  private toggleHeaderTwo(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processLine('header', '##');
  }

  private toggleHeaderThree(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.processLine('header', '###');
  }

  private increaseIndentation(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.processLine('indent-in', '>');
  }
  private decreaseIndentation(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.processLine('indent-out', '>');
  }

  private insertLink(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const selection = this.getSelectedText();
    this.insertAtCursor(insertBlocks.link(selection), 2, 8);
  }

  private insertImageExt(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.fire('exmg-markdown-editor-image-open');
  }

  private insertImage(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const selection = this.getSelectedText();
    this.insertAtCursor(insertBlocks.image(selection), 2, 8);
  }

  private insertTable(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.insertAtCursor(insertBlocks.table, 2, 8);
  }

  private pasteTable(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.fire('exmg-markdown-editor-paste-table');
  }

  public insertMarkdown(data: string): void {
    this.insertAtCursor(data);
  }

  public insertTableAtCursor(data: string): void {
    const columnWidth = (rows: string[][], columnIndex: number) => {
      return Math.max.apply(
        null,
        rows.map(function (row) {
          return row[columnIndex].length;
        }),
      );
    };

    const rows = data.split(/[\n\u0085\u2028\u2029]|\r\n?/g).map(function (row) {
      return row.split('\t');
    });
    const columnWidths = rows[0].map(function (_column, columnIndex) {
      return columnWidth(rows, columnIndex);
    });
    const markdownRows = rows.map(function (row) {
      return (
        '| ' +
        row
          .map(function (column, index) {
            return column + Array(columnWidths[index] - column.length + 1).join(' ');
          })
          .join(' | ') +
        ' |'
      );
      row.map;
    });
    markdownRows.splice(
      1,
      0,
      '|' +
        columnWidths
          .map(function (_width, index) {
            return Array(columnWidths[index] + 3).join('-');
          })
          .join('|') +
        '|',
    );
    const result = markdownRows.join('\n');
    this.insertAtCursor(result);
  }

  private toggleCode(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (this.isSelectionInline()) {
      this.processBlock('inline-code');
    } else {
      this.processBlock('code', true);
    }
  }

  private undo(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.codeMirrorEditor!.getDoc().undo();
    this.codeMirrorEditor!.focus();
  }

  private redo(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.codeMirrorEditor!.getDoc().redo();
    this.codeMirrorEditor!.focus();
  }

  private onKeyPressed(e: KeyboardEvent) {
    switch (e.code || e.keyCode) {
      case ENTER_KEY_CODE:
      case 'Enter':
      case 'NumpadEnter':
        if (!e.ctrlKey) {
          e.stopPropagation();
        }
        break;
    }
  }

  protected render(): TemplateResult {
    const classes = {fullscreen: this.fullscreen, labels: true};
    return html`
      <div id="toolbar" class="toolbar">
        <div class="items">
          ${repeat<ToolBarConfigItem | Record<string, any>>(
            this.getToolbar(this.toolbarButtons),
            (it, index: number) => (isToolBarConfigItem(it) ? it.name : `empty_${index}`),
            (it) => {
              if (isToolBarConfigItem(it)) {
                return html`
                  <a href="#" title="${it.name}" class="${it.className}" @click="${it.action}">
                    <iron-icon icon="${it.icon}"></iron-icon>
                  </a>
                `;
              }
              return html` <span class="seperator"></span> `;
            },
          )}
        </div>
        <div class=${classMap(classes)}>
          ${this.showHelperLabel
            ? html`
                <div>EDITOR</div>
                ${this.splitView ? html` <div class="preview">PREVIEW</div> ` : ''}
              `
            : ''}
        </div>
      </div>
      <div class="container" style="height: ${this.height && !this.fullscreen ? `${this.height}px` : 'inherit'};">
        <div id="editor"></div>
        <div id="preview" class="preview-html"><slot></slot></div>
      </div>
    `;
  }
}
