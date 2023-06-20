import { style } from './styles/exmg-upload-styles-css.js';
import { ExmgUploadBase } from './exmg-upload-base.js';
import { customElement } from 'lit/decorators.js';

/**
 * `exmg-upload`
 * Example:
 * ```html
 *  <div>
 *    <input id="imageUpload" name="imageUrl" />
 *    <exmg-upload for="imageUpload"> </exmg-upload>
 *  </div>
 * ```
 */

@customElement('exmg-upload')
export class ExmgUpload extends ExmgUploadBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-upload': ExmgUpload;
  }
}
