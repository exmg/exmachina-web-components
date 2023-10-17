import { customElement } from 'lit/decorators.js';

import { style } from './styles/exmg-dialog-form-css.js';
import { ExmgDialogFormBase } from './exmg-dialog-form-base.js';

@customElement('exmg-dialog-form')
export class ExmgDialogForm extends ExmgDialogFormBase {
  static override styles = [style];

  override getForm() {
    return this.querySelector('form');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-form': ExmgDialogForm;
  }
}
