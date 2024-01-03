import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/progress/circular-progress.js';
import { ExmgTextButtonBase } from './exmg-text-button-base.js';

import { style } from './styles/exmg-text-button-styles-css.js';

/**
 * exmg-text-button
 *
 * Material button including loading (spinner) animation when loading attribute is set to element.
 * This button extends the material @material/web filled button.
 *
 * @customElement exmg-text-button
 * @extends ButtonFilledBase
 */
@customElement('exmg-text-button')
export class ExmgTextButton extends ExmgTextButtonBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-text-button': ExmgTextButton;
  }
}
