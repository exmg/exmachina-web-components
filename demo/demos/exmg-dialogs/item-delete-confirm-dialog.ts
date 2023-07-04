import { ExmgDialogConfirmBase, exmgDialogConfirmStyles } from '@exmg/exmg-dialogs';

import { customElement } from 'lit/decorators.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('item-delete-confirm-dialog')
export class ItemDeleteConfirmDialog extends ExmgDialogConfirmBase {
  static override styles = [exmgDialogConfirmStyles];

  async doAction() {
    // Simulate slow connection
    await sleep(1000);

    console.log('Item deleted');
  }
}
