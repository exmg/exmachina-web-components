import {LitElement, html, css} from 'lit';
import {customElement, query} from 'lit/decorators.js';

import './file-upload-dialog.js';
import {FileUploadDialog} from './file-upload-dialog.js';
import './file-upload-section.js';

@customElement('exmg-upload-demo')
export class ExmgUploadDemo extends LitElement {
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
    return html` <button unelevated @click=${() => this.fileUploadDialog?.open()}>Open Dialog</button>
      <file-upload-dialog></file-upload-dialog><file-upload-section></file-upload-section>`;
  }
}
