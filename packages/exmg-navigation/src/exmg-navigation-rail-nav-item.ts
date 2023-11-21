import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-navigation-rail-nav-item-css.js';
import { ExmgNavigationRailNavItemBase } from './exmg-navigation-rail-nav-item-base.js';

@customElement('exmg-navigation-rail-nav-item')
export class ExmgNavigationRailNavItem extends ExmgNavigationRailNavItemBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-navigation-rail-nav-item': ExmgNavigationRailNavItem;
  }
}
