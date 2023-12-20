import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-navigation-toolbar-css.js';
import { ExmgNavigationToolbarBase } from './exmg-navigation-toolbar-base.js';

@customElement('exmg-navigation-toolbar')
export class ExmgNavigationToolbar extends ExmgNavigationToolbarBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-navigation-toolbar': ExmgNavigationToolbar;
  }
}
