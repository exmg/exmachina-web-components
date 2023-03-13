import {customElement} from 'lit/decorators.js';
import {ExmgFormBase} from './exmg-form-base.js';
import {style} from './styles/exmg-form-styles-css.js';

/**
 * Emxg form element that serialize data to json and also facilitates dirty data detection.
 *
 * It is also possible to let the form reset custom elements when the form resets. Sometimes a element is
 * not a form element but still needs a reset. This can be done by adding a attribute register-for-reset
 * to the custom element.
 *
 *  * Example:
 * ```html
 * <exmg-form @submit="${this.onSubmit}" @cancel="${this.onCancel}" @dirty-change=${this._handleDirty}>
 *  <paper-input name="pass" label="password input" type="password"></paper-input>
 *  <paper-input name="test" label="disabled input" ></paper-input>
 *  <exmg-upload register-for-reset>
 *   <paper-input name="imageUrl" label="Image Url"></paper-input>
 *  </exmg-upload
 * </exmg-form>
 * ```
 *
 */
@customElement('exmg-form')
export class ExmgForm extends ExmgFormBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-form': ExmgForm;
  }
}
