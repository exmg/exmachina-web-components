import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-upload-drop-area-styles-css.js';
import { ExmgUploadDropAreaBase } from './exmg-upload-drop-area-base.js';

@customElement('exmg-upload-drop-area')
export class ExmgUploadDropArea extends ExmgUploadDropAreaBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-upload-drop-area': ExmgUploadDropArea;
  }
}
