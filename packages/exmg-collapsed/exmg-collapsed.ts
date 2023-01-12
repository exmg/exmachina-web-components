import {customElement} from 'lit/decorators.js';
import {ExmgCollapsedBase} from './exmg-collapsed-base.js';
import {style} from './styles/exmg-collapsed-styles-css.js';

/**
 * 'exmg-collapsed' element contains a slot that can be expanded or collapsed to reveal additional content or information.
 *
 * @customElement exmg-collapsed
 * @extends ExmgCollapsedBase
 */
@customElement('exmg-collapsed')
export class ExmgCollapsed extends ExmgCollapsedBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-collapsed': ExmgCollapsed;
  }
}
