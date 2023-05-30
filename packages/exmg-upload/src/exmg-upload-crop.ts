import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-upload-crop-styles-css.js';
import { ExmgUploadCropBase } from './exmg-upload-crop-base.js';

@customElement('exmg-upload-crop')
export class ExmgUploadCrop extends ExmgUploadCropBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-upload-crop': ExmgUploadCrop;
  }
}
