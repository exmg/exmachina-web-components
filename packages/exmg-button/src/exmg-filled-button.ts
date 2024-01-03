import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/progress/circular-progress.js';
import { ExmgFilledButtonBase } from './exmg-filled-button-base.js';

import { style } from './styles/exmg-filled-button-styles-css.js';

/**
 * exmg-filled-button
 *
 * Material button including loading (spinner) animation when loading attribute is set to element.
 * This button extends the material @material/web filled button.
 *
 * @customElement exmg-filledbutton
 * @extends ButtonFilledBase
 */
@customElement('exmg-filled-button')
export class ExmgFilledButton extends ExmgFilledButtonBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-filled-button': ExmgFilledButton;
  }
}
