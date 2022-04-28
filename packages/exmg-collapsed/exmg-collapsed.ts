import {customElement} from 'lit/decorators.js';
import {ExmgCollapsedBase} from './exmg-collapsed-base.js';
import {style} from './styles/exmg-collapsed-styles-css.js';

/**
 * Exmg Collapsed element
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
