import { html, LitElement, TemplateResult } from 'lit';
import { observer } from '@exmg/lit-base/index.js';
import { customElement, query, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@material/mwc-icon/mwc-icon.js';

import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

import './exmg-markdown-editor-icons.js';
import { style as codeMirrorStylesText } from './styles/exmg-markdown-codemirror-styles-css.js';
import { ToolBarOption, ToolBarConfigItem, Position, ChangedProps } from './exmg-custom-types.js';

// eslint-disable-next-line no-undef
import Editor = CodeMirror.Editor;
import {
  convertShortcut,
  debounce,
  defaultToolBarConfig,
  DEFAULT_TOOLBAR_OPTIONS,
  ENTER_KEY_CODE,
  insertBlocks,
  KEY_MAPS,
  SHORTCUTS,
} from './exmg-markdown-utils.js';
import { EditorConfiguration } from 'codemirror';
import { Renderer, marked } from 'marked';
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
 *  `--exmg-markdown-editor-code-color` | Editor code color | `black`
 *  `--exmg-markdown-editor-code-background` | Editor code background | `white`
 *  `--exmg-markdown-editor-code-cursor-color` | Editor cursor color | `black`
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
  @property({ type: Boolean, attribute: 'auto-focus' })
  autoFocus = false;

  @property({ type: Number, attribute: 'height' })
  height?: number = undefined;

  @property({ type: Boolean, attribute: 'line-numbers' })
  lineNumbers = false;

  @property({ type: Boolean, attribute: 'indent-with-tabs' })
  indentWithTabs = true;

  @property({ type: String })
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

  @property({ type: Boolean, attribute: 'show-helper-label' })
  showHelperLabel = false;

  @property({ type: Boolean, reflect: true, attribute: 'split-view' })
  splitView = false;

  @property({ type: Boolean, reflect: true, attribute: 'fullscreen' })
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

  @property({ type: Array, attribute: 'toolbar-buttons' })
  toolbarButtons: ToolBarOption[] = DEFAULT_TOOLBAR_OPTIONS;

  @property({ type: String })
  name?: string;

  @property({ type: Boolean, attribute: 'required' })
  required = false;

  @property({ type: Boolean, reflect: true, attribute: 'invalid' })
  invalid = false;

  bubbles = false;

  static styles = [codeMirrorStylesText];

  validate(): boolean {
    this.invalid = this.required && !this.markdown;

    return !this.invalid;
  }

  @state()
  private toolbarButtonsConfig: ToolBarConfigItem[] = defaultToolBarConfig;

  @property({ type: Object, attribute: 'shortcuts' })
  shortcuts: Record<string, string> = SHORTCUTS;

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

  focus() {
    if (!this.codeMirrorEditor) return;
    this.refresh();
    this.codeMirrorEditor!.focus();
  }

  refresh() {
    if (!this.codeMirrorEditor) return;
    this.codeMirrorEditor!.refresh();
  }

  constructor() {
    super();
    this._onKeyPressed = this.onKeyPressed.bind(this);
    // Cancel enter propogation
    this.addEventListener('keyup', this._onKeyPressed);
  }

  protected update(changedProperties: ChangedProps) {
    if (changedProperties.has('toolbarButtonsConfig')) {
      const normalizedToolBartConfig: Map<ToolBarOption, ToolBarConfigItem> = new Map();
      const customToolbarConfig = window.markdownEditorConfig?.customToolBarButtons ?? [];
      const toolbarConfigWithCustoms = [...this.toolbarButtonsConfig, ...customToolbarConfig];
      (toolbarConfigWithCustoms || []).forEach((it) => normalizedToolBartConfig.set(it.name, it));
      this.normalizedToolBarConfig = normalizedToolBartConfig;
    }

    super.update(changedProperties);
  }

  protected async firstUpdated(): Promise<void> {
    await this.updateComplete;
    this.setupEditor();
    this.isElementInitialized = true;
    this.renderHTML();
  }

  protected fire<T>(eventName: string, detail?: T, bubbles?: boolean) {
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
    this.fire<{ code: string; lang: string }>('syntax-highlight', { code: code, lang: lang });
    return code;
  }

  renderHTML() {
    if (!this.markdown) {
      this.innerHTML = '';
      return;
    }

    const customRenderer = (window.markdownEditorConfig?.renderer as Renderer) || undefined;
    const extensions = window.markdownEditorConfig?.extensions || [];
    marked.use({ renderer: customRenderer, extensions });

    this.innerHTML = `<div class="preview-body">${marked.parse(this.markdown)}</div>`;
    this.focus();
    this.fire('html-render-complete', {});
  }
  /**
   * Helper method that creates button array from toolbar config property
   * @param {Array} toolBarOptions
   * @return {Array}
   */
  private getToolbar(toolBarOptions: ToolBarOption[] = []): (ToolBarConfigItem | Record<string, any>)[] {
    return [...toolBarOptions].map((optionName: ToolBarOption) => {
      if (optionName === '|') {
        return {};
      }

      return this.normalizedToolBarConfig.get(optionName) || {};
    });
  }

  /**
   * Manages the undo/redo disabled state based upon the available history in code mirror
   */
  private updateDocHistory() {
    if (!this.codeMirrorEditor) {
      return;
    }
    const { undo, redo } = this.codeMirrorEditor.getDoc().historySize();

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

  // ********* TOOL BAR HANDLERS *************/
  private toggleFullscreen(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.fullscreen = !this.fullscreen;
  }

  private toggleSplitView(event?: Event) {
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
        extraKeys[convertShortcut(this.shortcuts[shortcut])] = () => this.action(actionBtn);
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
    // eslint-disable-next-line
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

  private replaceRangeLine(text: string, lineNumber: number) {
    this.codeMirrorEditor!.getDoc().replaceRange(
      text,
      { line: lineNumber, ch: 0 },
      { line: lineNumber, ch: 99999999999999 },
    );
  }

  private insertAtCursor(text: string, selectionOffset?: number, selectionLength?: number) {
    this.codeMirrorEditor!.getDoc().replaceSelection(text, 'start');

    const cursorStart = this.codeMirrorEditor!.getDoc().getCursor();
    cursorStart.ch += selectionOffset || 0;
    this.codeMirrorEditor!.getDoc().setSelection(cursorStart, {
      line: cursorStart.line,
      ch: cursorStart.ch + (selectionLength || text.length),
    });
    this.codeMirrorEditor!.focus();
  }

  private hasType(states: string[], type: string) {
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

  private processBlock(type: string, token: string, newLine = false) {
    const codeMirror = this.codeMirrorEditor!;
    const states = this.getStates();

    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');
    const multiLineSelection = cursorStart.line !== cursorEnd.line;
    const selectionText = codeMirror.getDoc().getSelection();
    const emptySelection = selectionText === '';
    if (this.hasType(states, type)) {
      const start = {
        ...cursorStart,
        ch: cursorStart.ch - token.length,
      };
      const end = {
        ...cursorEnd,
        ch: cursorEnd.ch + token.length,
      };
      codeMirror.getDoc().setSelection(start, end);
      codeMirror.getDoc().replaceSelection(selectionText);
      cursorStart.ch = start.ch;
    } else {
      const text =
        token +
        (type === 'code' ? '\n' : '') +
        (emptySelection ? `${type} text` : selectionText) +
        (type === 'code' ? '\n' : '') +
        token;
      codeMirror.getDoc().replaceSelection(text);
      if (newLine) {
        cursorStart.line += 1;
        cursorEnd.line += 1;
      } else {
        cursorStart.ch += token.length;
        if (!multiLineSelection) {
          cursorEnd.ch += emptySelection ? `${type} text`.length + token.length : token.length;
        }
      }
    }

    codeMirror.getDoc().setSelection(cursorStart, cursorEnd);
    codeMirror.focus();
  }

  private processLine(type: string, symbol?: string) {
    const codeMirror = this.codeMirrorEditor!;
    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');

    let lineCount = 0;
    for (let i = cursorStart.line; i <= cursorEnd.line; i += 1) {
      const lineStart = Object.assign(Object.assign({}, cursorStart), { line: i, ch: 0, sticky: 'after' });
      const states = this.getStates(lineStart);
      let text = codeMirror.getDoc().getLine(i);
      const stateFound = states.includes(type);
      switch (type) {
        case 'header_one':
        case 'header_two':
        case 'header_three': {
          const result = /(^[#]+)/.exec(text);
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

  private isSelectionInline() {
    const codeMirror = this.codeMirrorEditor!;
    const cursorStart = codeMirror.getDoc().getCursor('start');
    const cursorEnd = codeMirror.getDoc().getCursor('end');
    const lineLength = codeMirror.getDoc().getLine(cursorStart.line).length;
    return cursorStart.line === cursorEnd.line && cursorEnd.ch - cursorStart.ch !== lineLength;
  }

  private getSelectedText() {
    const codeMirror = this.codeMirrorEditor;
    const doc = codeMirror!.getDoc()!;
    return doc.getSelection();
  }

  private getStates(position?: Position) {
    const codeMirror = this.codeMirrorEditor!;
    const pos: Position = position || { ...codeMirror.getDoc().getCursor('start') };
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

  private action(option: ToolBarConfigItem) {
    if (!option.type) {
      switch (option.name) {
        case 'undo':
          return this.undo();
        case 'redo':
          return this.redo();
        case 'code':
          return this.toggleCode();
        case 'table':
          return this.insertTable();
        case 'table-paste':
          return this.pasteTable();
        case 'link':
          return this.insertLink();
        case 'image':
          return this.insertImage();
        case 'hr':
          return this.toggleHorizontalRule();
        case 'image-ext':
          return this.insertImageExt();
        case 'fullscreen':
          return this.toggleFullscreen();
        case 'split-view':
          return this.toggleSplitView();
        case 'ordered-list':
          return this.processLine('ordered-list');
        default:
          // eslint-disable-next-line
          return console.error(
            `A custom option - ${option.name} - for the ExmgMarkdownEditor is set without a type.`,
            option,
          );
      }
    } else {
      if (!option.token) {
        // eslint-disable-next-line
        return console.error(
          `A custom option - ${option.name} - for the ExmgMarkdownEditor is set without a token.`,
          option,
        );
      }
      switch (option.type) {
        case 'block':
          return this.processBlock(option.name, option.token);
        case 'line':
          return this.processLine(option.name, option.token);
      }
    }
  }

  private toggleHorizontalRule() {
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

  private insertLink() {
    const selection = this.getSelectedText();
    this.insertAtCursor(insertBlocks.link(selection), 2, 8);
  }

  private insertImageExt() {
    this.fire('exmg-markdown-editor-image-open');
  }

  private insertImage() {
    const selection = this.getSelectedText();
    this.insertAtCursor(insertBlocks.image(selection), 2, 8);
  }

  private insertTable() {
    this.insertAtCursor(insertBlocks.table, 2, 8);
  }

  private pasteTable() {
    this.fire('exmg-markdown-editor-paste-table');
  }

  insertMarkdown(data: string) {
    this.insertAtCursor(data);
  }

  insertTableAtCursor(data: string) {
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

  private toggleCode(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (this.isSelectionInline()) {
      this.processBlock('inline-code', '');
    } else {
      this.processBlock('code', '', true);
    }
  }

  private undo(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    this.codeMirrorEditor!.getDoc().undo();
    this.codeMirrorEditor!.focus();
  }

  private redo(event?: Event) {
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
    const classes = { fullscreen: this.fullscreen, labels: true };
    return html`
      <div id="toolbar" class="toolbar">
        <div class="items">
          ${repeat<ToolBarConfigItem | Record<string, any>>(
            this.getToolbar(this.toolbarButtons),
            (it, index: number) => (it.name ? it.name : `empty_${index}`),
            (it) => {
              if (it.name) {
                const hasMaterialIcon = it.icon.indexOf('exmg-markdown-editor-icons:') < 0;
                return html`
                  <a
                    href="#"
                    title=${it.title}
                    class=${it.className ?? ''}
                    @click=${(e: CustomEvent) => {
                      e.preventDefault();
                      this.action(it as ToolBarConfigItem);
                    }}
                  >
                    ${hasMaterialIcon
                      ? html`<mwc-icon>${it.icon}</mwc-icon>`
                      : html`<iron-icon icon="${it.icon}"></iron-icon>`}
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

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor': EditorElement;
  }
}
