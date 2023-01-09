import {customElement} from 'lit/decorators.js';
import {ExmgCollapsedBase} from './exmg-collapsed-base.js';
import {style} from './styles/exmg-collapsed-styles-css.js';

/**
 * `ExmgCollapsed` is a class for custom collapsible element (`<exmg-collapsed>` web component).
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
