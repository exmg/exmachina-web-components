import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-sidemenu-base-styles-css.js';
import { ExmgSidemenuBase } from './exmg-sidemenu-base.js';

/**
 * The `exmg-sidemenu` displays a vertical sidemenu that can be collapsed.
 *
 *  ### Styling
 *
 * `<exmg-sidemenu>` provides the following custom properties and mixins
 *  for styling:
 *
 *  Custom property | Description | Default
 *  ----------------|-------------|----------
 *  `--exmg-sidemenu-background` | Sidemenu background color | `white`
 *  `--exmg-sidemenu-width` | Sidemenu bwidth | `256px`
 *  `--exmg-sidemenu-collapsed-width` | Sidemenu collapsed width | `white`
 *  `--exmg-sidemenu-group-text-color` | Group titletext color | `54% black`
 *  `--exmg-sidemenu-item-text-color` | Item text color | `54% black`
 *  `--exmg-sidemenu-menu-footer-background-color` | Footer background color | `#F9FAF9`
 *  `--exmg-sidemenu-menu-border-color` | Border color of menu | '#DDD'
 *  `--exmg-sidemenu-icon-color` | Sidemenu icon color | `54% black`
 *  `--exmg-sidemenu-hover-background-color` | Item hover background color | `--paper-grey-200`
 *  `--exmg-sidemenu-selected-text-color` | Item selected text color | `--primary-color`
 *  `--exmg-sidemenu-badge-background-color` | Badge background color | #ff6978
 *  `--exmg-sidemenu-badge-color | Badge font color | #fff
 *
 *  @customElement
 *  @demo demo/index.html
 */

@customElement('exmg-sidemenu')
export class ExmgSidemenu extends ExmgSidemenuBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-sidemenu': ExmgSidemenu;
  }
}
