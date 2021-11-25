import {customElement} from 'lit/decorators.js';
import {style} from './styles/exmg-breadcrumbs-styles-css.js';
import {ExmgBreadcrumbsBase} from './exmg-breadcrumbs-base.js';

@customElement('exmg-breadcrumbs')
export class ExmgBreadcrumbs extends ExmgBreadcrumbsBase {
  static styles = style;
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-breadcrumbs': ExmgBreadcrumbs;
  }
}
