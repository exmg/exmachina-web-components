import { customElement } from 'lit/decorators.js';
import { style } from '@exmg/exmg-dialogs/styles/exmg-dialog-styles-css.js';
import { ExmgUploadDialogBase } from './exmg-upload-dialog-base.js';

@customElement('exmg-upload-dialog')
export class ExmgUploadDialog extends ExmgUploadDialogBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-upload-dialog': ExmgUploadDialog;
  }
}
