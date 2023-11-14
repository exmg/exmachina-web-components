import { customElement } from 'lit/decorators.js';

import { style } from './styles/exmg-form-base-css.js';
import { ExmgFormBase } from './exmg-form-base.js';

@customElement('exmg-form')
export class ExmgForm extends ExmgFormBase {
  static override styles = [style];

  override getForm() {
    return this.querySelector('form');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-form': ExmgForm;
  }
}
