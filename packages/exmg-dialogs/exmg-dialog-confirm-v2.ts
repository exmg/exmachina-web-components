import { customElement } from 'lit/decorators.js';

import { ExmgDialogConfirmV2Base } from './exmg-dialog-confirm-v2-base.js';
import { style } from './styles/exmg-dialog-confirm-css.js';

@customElement('exmg-dialog-confirm-v2')
export class ExmgDialogConfirmV2 extends ExmgDialogConfirmV2Base {
  static override styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-confirm-v2': ExmgDialogConfirmV2;
  }
}
