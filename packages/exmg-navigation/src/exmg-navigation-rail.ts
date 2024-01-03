import { customElement } from 'lit/decorators/custom-element.js';
import { ExmgNavigationRailBase } from './exmg-navigation-rail-base.js';

import { style } from './styles/exmg-navigation-rail-css.js';

@customElement('exmg-navigation-rail')
export class ExmgNavigationRail extends ExmgNavigationRailBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-navigation-rail': ExmgNavigationRail;
  }
}
