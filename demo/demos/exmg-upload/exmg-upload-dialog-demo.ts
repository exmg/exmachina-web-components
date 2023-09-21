import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './file-upload-dialog.js';
import { FileUploadDialog } from './file-upload-dialog.js';

window.uploadDefaults = {
  headers: {
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-dialog-demo')
export class ExmgUploadDialogDemo extends LitElement {
  @query('file-upload-dialog')
  fileUploadDialog?: FileUploadDialog;

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h2>Dialog Example (including copy and icon customization)</h2>
      <button unelevated @click=${() => this.fileUploadDialog?.open()}>Open Dialog</button>
      <file-upload-dialog></file-upload-dialog>`;
  }
}
