import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { query, property, state } from 'lit/decorators.js';
import { Editor, EditorConfiguration } from 'codemirror';
import { defaultConfiguration } from './utils/configurations.js';
import { ExmgElement, observer } from '@exmg/lit-base';

import './exmg-markdown-editor-toolbar.js';
import { markdownActions } from './actions.js';
import { MarkdownActions } from './types.js';
import { classMap } from 'lit/directives/class-map.js';

export class MarkdownEditorElementBase extends ExmgElement {
  @property() markdown?: string;
  @property() html?: string;
  @property({type: Number}) height: number = 400;
  @property({type: Boolean}) upload = false;
  @query('#editor') editorElement?: HTMLDivElement;
  @state() previewElement?: Element | null;
  

  @state()
  @observer(function (this: MarkdownEditorElementBase, preview: boolean) {
    if (preview === false) {
      this.codeMirrorEditor?.focus();
    }
  })
  preview = false;

  editorConfiguration: EditorConfiguration = defaultConfiguration;
  editorActions: MarkdownActions = markdownActions;
  codeMirrorEditor?: Editor;
  blurHandlerBinding: any;
  insertLinkHandlerBinding: any;
  internalTextareaField?: HTMLTextAreaElement;
  heightStyleMap?: any;

  protected firstUpdated() {
    this.codeMirrorSetup();
    this.previewElement = this.getPreviewElement();

    /* Height */
    if(this.previewElement!.hasAttribute('slot')) {
      this.shadowRoot!.querySelector('#preview')?.remove();
      this.previewElement!.setAttribute('style', `height: ${this.height}px;`);
    }
    this.heightStyleMap = styleMap({height: `${this.height}px`});
    this.codeMirrorEditor!.getWrapperElement().style.height = `${this.height}px`;
    /** Blur global handling */
    this.blurHandlerBinding = this.handleBlur.bind(this);
    this.addEventListener('blur', this.handleBlur);
    /** Insert custom link handler */
    this.insertLinkHandlerBinding = this.handleInsertLink.bind(this);
    this.addEventListener('insert-link', this.insertLinkHandlerBinding);
  }

  protected disconectedCallback() {
    this.removeEventListener('blur', this.handleBlur);
    this.removeEventListener('insert-link', this.insertLinkHandlerBinding);
  }

  protected getPreviewElement() {
    return this.shadowRoot!.querySelector('#preview');
  }

  codeMirrorSetup() {
    if (!this.editorElement) {
      console.log('Error');
      return;
    }

    if (this.markdown) {
      this.updateValue(this.markdown);
    }

    // eslint-disable-next-line
    this.codeMirrorEditor = window.CodeMirror(this.editorElement, {
      ...this.editorConfiguration,
      value: this.markdown || '',
    });
    this.codeMirrorEditor.on('change', (editor: Editor) => {
      this.updateValue(editor.getValue());
    });
    this.codeMirrorEditor.on('focus', (editor: Editor) => {
      this.handleFocus(editor);
    });
    this.internalTextareaField = this.codeMirrorEditor.getInputField();
    if (this.internalTextareaField) {
      // Add textarea accessibility?
    }
  }

  handleFocus(_editor: Editor) {
    
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

  handleInsertLink(_e: CustomEvent) {
    console.log('link');
  }

  updateValue(newValue?: string) {
    // @ts-ignore
    // eslint-disable-next-line
    this.html = marked.parse(newValue!);
    if (newValue === this.markdown) {
      return;
    }
    this.markdown = newValue;

    /* Fire update event */
  }

  disablePreview() {
    this.preview = false;
  }

  protected render() {
    const visibleClassMap = classMap({
      preview: this.preview,
    })
    return html`
      <div class="container ${visibleClassMap}" @click=${this.disablePreview}>
        <exmg-markdown-editor-toolbar ?upload=${this.upload} @action=${this.handleAction}></exmg-markdown-editor-toolbar>
        <div id="editor" class=${visibleClassMap} style=${this.heightStyleMap} ></div>
        <div id="preview" class=${visibleClassMap} style=${this.heightStyleMap}></div>
        <slot name="preview" class=${visibleClassMap}></slot>
      </div>
    `;
  }
}
