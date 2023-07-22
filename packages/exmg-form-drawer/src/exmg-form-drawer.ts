import { customElement } from 'lit/decorators.js';

import { style } from './styles/exmg-form-drawer-styles-css.js';
import { ExmgFormDrawerBase } from './exmg-form-drawer-base.js';

@customElement('exmg-form-drawer')
export class ExmgFormDrawer extends ExmgFormDrawerBase {
  static override styles = [style];
  override getForm() {
    return this.querySelector('form');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-form-drawer': ExmgFormDrawer;
  }
}
