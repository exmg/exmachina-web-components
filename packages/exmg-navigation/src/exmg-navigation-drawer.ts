import { customElement } from 'lit/decorators.js';
import { ExmgNavigationDrawerBase } from './exmg-navigation-drawer-base.js';

import { style } from './styles/exmg-navigation-drawer-css.js';

@customElement('exmg-navigation-drawer')
export class ExmgNavigationDrawer extends ExmgNavigationDrawerBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-navigation-drawer': ExmgNavigationDrawer;
  }
}
