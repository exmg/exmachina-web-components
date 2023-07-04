import { customElement } from 'lit/decorators.js';
import { style } from './styles/exmg-breadcrumbs-styles-css.js';
import { ExmgBreadcrumbsBase } from './exmg-breadcrumbs-base.js';

/**
 * exmg-breadcrumbs
 *
 * Component to render breadcrumbs within a page or component with the option to enable / disable arrow seperator
 *
 *  * Example:
 * ```js
 * @state()
 * private items = [
 *    {href: '/home', content: 'Home page'},
 *    {href: '/users', content: 'User List'},
 *    {href: '/users/1234', content: 'Mark'},
 *    {href: '/users/1234/details', content: 'Details'},
 *  ];
 * ```
 *
 * ```html
 *  <exmg-breadcrumbs .items="${this.items}"></exmg-breadcrumbs>
 * ```
 *
 */
@customElement('exmg-breadcrumbs')
export class ExmgBreadcrumbs extends ExmgBreadcrumbsBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-breadcrumbs': ExmgBreadcrumbs;
  }
}
