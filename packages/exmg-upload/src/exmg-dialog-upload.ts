import { customElement } from 'lit/decorators.js';

import { style } from './styles/exmg-dialog-upload-css.js';
import { ExmgDialogUploadBase } from './exmg-dialog-upload-base.js';
import { ExmgUpload } from './exmg-upload.js';

@customElement('exmg-dialog-upload')
export class ExmgDialogUpload extends ExmgDialogUploadBase {
  static override styles = [style];

  protected getUploadElement() {
    return this.querySelector('exmg-upload') as ExmgUpload;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-upload': ExmgDialogUpload;
  }
}
