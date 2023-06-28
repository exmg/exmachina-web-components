import { customElement } from 'lit/decorators.js';

import { ExmgDialogConfirmBase } from './exmg-dialog-confirm-base.js';
import { style } from './styles/exmg-dialog-confirm-css.js';

@customElement('exmg-dialog-confirm')
export class ExmgDialogConfirm extends ExmgDialogConfirmBase {
  static override styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-confirm': ExmgDialogConfirm;
  }
}
