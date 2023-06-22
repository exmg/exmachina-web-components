import { ExmgDialogConfirmV2Base } from '@exmg/exmg-dialogs/exmg-dialog-confirm-v2-base.js';
import { styles } from '@material/web/dialog/lib/dialog-styles.css.js';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('item-delete-confirm-dialog')
export class ItemDeleteConfirmDialog extends ExmgDialogConfirmV2Base {
  static override styles = [
    styles,
    css`
      .description {
        color: var(--md-sys-color-on-surface);
        opacity: 0.67;
      }
    `,
  ];

  async doAction() {
    // Simulate slow connection
    await sleep(1000);

    console.log('Item deleted');
  }
}
