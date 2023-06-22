import { customElement } from 'lit/decorators.js';

import { ExmgDialogConfirmV2Base } from './exmg-dialog-confirm-v2-base.js';
import { styles } from '@material/web/dialog/lib/dialog-styles.css.js';
import { css } from 'lit';

@customElement('exmg-dialog-confirm-v2')
export class ExmgDialogConfirmV2 extends ExmgDialogConfirmV2Base {
  static override styles = [
    styles,
    css`
      .description {
        color: var(--md-sys-color-on-surface);
        opacity: 0.67;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-confirm-v2': ExmgDialogConfirmV2;
  }
}
