import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { query, property, state } from 'lit/decorators.js';
import { Editor, EditorConfiguration } from 'codemirror';
import { defaultConfiguration } from './utils/configurations.js';
import { ExmgElement, observer } from '@exmg/lit-base';
import { markdownActions } from './actions.js';
import { MarkdownActions, ToolbarIcons, ToolbarItem } from './types.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TokenizerAndRendererExtension, marked } from 'marked';

import './exmg-markdown-editor-toolbar.js';

/**
 * Markdown editor element.
 * An out of the box customizable Markdown Editor for Exmachina
 *
 * ```
 * <exmg-markdown-editor markdown="# Header 1"></exmg-markdown-editor>
 * ```
 * ### Styling
 *
 *  Custom property | Description | Default
 *  ----------------|-------------|----------
 * `--exmg-markdown-editor-code-color` | Editor's text color | --md-sys-color-on-surface
 * `--exmg-markdown-editor-code-cursor-color` | Editor's cursor color | --md-sys-color-on-surface
 * `--exmg-markdown-editor-code-header-color` | H1 color in editor | #4a8fc0;
 * `--exmg-markdown-editor-code-inline-code-color` | Inline code color | #ea881f
 * `--exmg-markdown-editor-code-list-color` | Lists color | rgb(25, 165, 28)
 * `--exmg-markdown-editor-selected-code-color` | Selected text color | rgb(140, 140, 140)
 * `--exmg-markdown-editor-border-color` | Editor's border color | --md-sys-color-primary
 * `--exmg-markdown-editor-background-color` | Toolbar and default preview background | --md-sys-color-surface-container-high
 * `--exmg-markdown-editor-code-background-color` | Editor's background color when focused | --md-sys-color-surface-container-high
 *
 *  # Events:
 *  - change - where detail is current markdown value
 *  - insert-image - if the Editor is set to upload, it will trigger this event when the insert-image is clicked
 *
 * @customElement
 * @element exmg-markdown-editor
 * @memberof Exmg
 * @extends ExmgElement
 * @summary Markdown editor element
 */
export class MarkdownEditorElementBase extends ExmgElement {
  @property() markdown?: string;
  @property() html?: string;
  @property({ type: Number }) height: number = 400;
  @property({ type: Boolean }) upload = false;
  @property({ type: Array }) toolbarActions?: ToolbarItem[];
  @property({ type: Object }) toolbarIcons?: ToolbarIcons;
  @property({ type: Array }) markedExtension?: TokenizerAndRendererExtension[];
  @query('#editor') editorElement?: HTMLDivElement;
  @state() previewElement?: Element | null;

  @state()
  @observer(function (this: MarkdownEditorElementBase, preview: boolean) {
    if (preview === false) {
      this.codeMirrorEditor?.focus();
    }
  })
  preview = true;

  editorConfiguration: EditorConfiguration = defaultConfiguration;
  editorActions: MarkdownActions = markdownActions;
  codeMirrorEditor?: Editor;
  blurHandlerBinding: any;
  internalTextareaField?: HTMLTextAreaElement;
  heightStyleMap?: any;

  protected firstUpdated() {
    this.codeMirrorSetup();
    this.previewElement = this.getPreviewElement();

    /* Height */
    if (this.previewElement!.hasAttribute('slot')) {
      this.shadowRoot!.querySelector('#preview')?.remove();
      this.previewElement!.setAttribute('style', `height: ${this.height}px;`);
    }
    this.heightStyleMap = styleMap({ height: `${this.height}px` });
    this.codeMirrorEditor!.getWrapperElement().style.height = `${this.height}px`;
    /** Blur global handling */
    this.blurHandlerBinding = this.handleBlur.bind(this);
    this.addEventListener('blur', this.handleBlur);

    if (this.markdown) {
      this.updateValue(this.markdown);
      this.codeMirrorEditor!.refresh();
    }
  }

  protected disconectedCallback() {
    this.removeEventListener('blur', this.handleBlur);
  }

  protected getPreviewElement() {
    return this.shadowRoot!.querySelector('#preview');
  }

  codeMirrorSetup() {
    if (!this.editorElement) {
      console.log('Error');
      return;
    }

    if (this.markedExtension) {
      marked.use({ extensions: this.markedExtension });
    }

    // eslint-disable-next-line
    this.codeMirrorEditor = window.CodeMirror(this.editorElement, {
      ...this.editorConfiguration,
      value: this.markdown || '',
    });
    this.codeMirrorEditor.on('focus', (_editor: Editor) => {
      this.handleFocus();
    });
    this.codeMirrorEditor.on('change', (editor: Editor) => {
      this.updateValue(editor.getValue());
    });

    this.internalTextareaField = this.codeMirrorEditor.getInputField();
    if (this.internalTextareaField) {
      //
    }
  }

  handleFocus() {
    this.codeMirrorEditor!.refresh();
  }

  handleBlur() {
    this.previewElement!.innerHTML = `
      <main class="preview-content">
        ${this.html}
      </main>
    `;
    this.preview = true;
  }

  handleAction(e: CustomEvent) {
    const actionName = e.detail;
    if (!this.editorActions[actionName]) {
      return;
    }
    this.editorActions[actionName](this.codeMirrorEditor);
    this.preview = false;
    this.codeMirrorEditor?.focus();
  }

  handleInsertImage(url: string) {
    this.editorActions['image'](this.codeMirrorEditor, url);
  }

  updateValue(newValue?: string) {
    this.html = marked.parse(newValue ?? '');
    if (this.previewElement) {
      this.previewElement.innerHTML = `
      <main class="preview-content">
        ${this.html}
      </main>
    `;
    }
    if (newValue === this.markdown) {
      return;
    }
    this.markdown = newValue;

    /* Fire update event */
    this.fire('change', this.markdown);
  }

  disablePreview() {
    this.preview = false;
  }

  protected render() {
    const visibleClassMap = classMap({
      preview: this.preview,
    });
    return html`
      <div id="markdowdEditorContainer" class="container ${visibleClassMap}" @click=${this.disablePreview}>
        <exmg-markdown-editor-toolbar
          ?upload=${this.upload}
          @action=${this.handleAction}
          .actions=${ifDefined(this.toolbarActions)}
          .icons=${ifDefined(this.toolbarIcons)}
        ></exmg-markdown-editor-toolbar>
        <div id="editor" class=${visibleClassMap} style=${this.heightStyleMap}></div>
        <div id="preview" class=${visibleClassMap} style=${this.heightStyleMap}></div>
        <slot name="preview" class=${visibleClassMap}></slot>
      </div>
    `;
  }
}
