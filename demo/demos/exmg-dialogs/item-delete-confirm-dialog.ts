import { ExmgDialogConfirmV2Base } from '@exmg/exmg-dialogs/exmg-dialog-confirm-v2-base.js';
import { style } from '@exmg/exmg-dialogs/styles/exmg-dialog-confirm-css.js';

import { customElement } from 'lit/decorators.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('item-delete-confirm-dialog')
export class ItemDeleteConfirmDialog extends ExmgDialogConfirmV2Base {
  static override styles = [style];

  async doAction() {
    // Simulate slow connection
    await sleep(1000);

    console.log('Item deleted');
  }
}
