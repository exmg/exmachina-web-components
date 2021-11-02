import {customElement} from 'lit/decorators';
import {style} from './styles/exmg-sidemenu-badge-styles-css.js';
import {ExmgSidemenuBadgeBase} from './exmg-sidemenu-badge-base.js';

@customElement('exmg-sidemenu-badge')
export class ExmgSidemenuBadge extends ExmgSidemenuBadgeBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-sidemenu-badge': ExmgSidemenuBadge;
  }
}
