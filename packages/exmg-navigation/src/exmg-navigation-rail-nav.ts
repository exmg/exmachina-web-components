import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-navigation-rail-nav-css.js';
import { ExmgNavigationRailNavBase } from './exmg-navigation-rail-nav-base.js';

@customElement('exmg-navigation-rail-nav')
export class ExmgNavigationRailNav extends ExmgNavigationRailNavBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-navigation-rail-nav': ExmgNavigationRailNav;
  }
}
