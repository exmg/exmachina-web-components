import {customElement} from 'lit/decorators.js';
import {style} from './styles/exmg-sidemenu-header-styles-css.js';
import {ExmgSidemenuHeaderBase} from './exmg-sidemenu-header-base.js';

/**
 * `exmg-sidemenu-header` default sidemenu header including a home and settings link.
 *
 * ### Menu data model
 * Menu items need to have the following structure:
 * ```html
 *  <exmg-sidemenu
 *    selected="rooms/"
 *    ?collapsed=${this.collapsed}
 *    @collapsed=${this._handleCollapsed}
 *    @selected-changed=${this._handleSelectedChanged}
 *    ?narrow=${this.narrow}
 *     >
 *    <exmg-sidemenu-header slot="header" ?collapsed=${this.collapsed}></exmg-sidemenu-header>
 *      ${this.renderMenu()}
 *  </exmg-sidemenu>
 * ```
 *
 * Please note not to forget to bind the collpapsed attribute. Otherwise the header will
 * not change layout mode when menu is collapsing.
 *
 * ### Styling
 *
 * `<exmg-sidemenu-header>` provides the following custom properties and mixins
 * for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exmg-sidemenu-group-text-color` | Item text color | `54% black`
 * `--exmg-sidemenu-menu-header-background-color` | Header background color | `#F9FAF9`
 * `--exmg-sidemenu-hover-background-color` | Item hiover background color | `--paper-grey-200`
 * `--exmg-sidemenu-selected-text-color` | Selected item text color | `--primary-color`
 *
 * @customElement
 * @polymer
 * @element exmg-sidemenu-header
 */

@customElement('exmg-sidemenu-header')
export class ExmgSidemenuHeader extends ExmgSidemenuHeaderBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-sidemenu-header': ExmgSidemenuHeader;
  }
}
