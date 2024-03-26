import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { markdown } from './markdown.js';
import { ExmgDialogUpload } from '@exmg/exmg-upload/exmg-dialog-upload.js';
import { MarkdownEditorElement } from '@exmg/exmg-markdown-editor';
import '@exmg/exmg-markdown-editor';

@customElement('exmg-markdown-editor-image-upload-demo')
export class ExmgMarkdownEditorImageUploadDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @query('exmg-dialog-upload') imageUploadDialog?: ExmgDialogUpload;
  @query('#upload') uploadImageMarkdown?: MarkdownEditorElement;

  handleImageUpload() {
    if (this.imageUploadDialog) {
      this.imageUploadDialog.toggleShow();
    }
  }
  handleDialogSubmit(e: CustomEvent) {
    this.uploadImageMarkdown && this.uploadImageMarkdown.handleInsertImage(e.detail.url);
    this.imageUploadDialog && this.imageUploadDialog.toggleShow();
  }

  render() {
    return html`
      <exmg-markdown-editor id="upload" upload value=${markdown} @insert-image=${this.handleImageUpload}>
      </exmg-markdown-editor>
      <exmg-dialog-upload @dialog-submit=${this.handleDialogSubmit}>
        <exmg-upload maxSize="1mb" accept=".jpg,.jpeg,.png,.webp,.svg" serverType="local" allowCropping></exmg-upload>
      </exmg-dialog-upload>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-image-upload-demo': ExmgMarkdownEditorImageUploadDemo;
  }
}
