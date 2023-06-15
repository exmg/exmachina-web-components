import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-upload-item-styles-css.js';
import { ExmgUploadItemBase } from './exmg-upload-item-base.js';

@customElement('exmg-upload-item')
export class ExmgUploadItem extends ExmgUploadItemBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-upload-item': ExmgUploadItem;
  }
}
