import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/button/filled-button.js';

import '@exmg/exmg-dialogs/exmg-dialog-confirm-v2.js';
import { ExmgDialogConfirmV2 } from '@exmg/exmg-dialogs/exmg-dialog-confirm-v2.js';

import './item-delete-confirm-dialog.js';

function clickHandler(e: Event) {
  ((e.target as Element).nextElementSibling as ExmgDialogConfirmV2)?.show();
}

@customElement('exmg-dialogs-demo')
export class DialogDemo extends LitElement {
  handleSubmit(e: Event) {
    (e.target as ExmgDialogConfirmV2).close();
  }

  render() {
    return html`
      <style>
        :host {
          font-family: var(
            --mdc-typography-headline3-font-family,
            var(--mdc-typography-font-family, Roboto, sans-serif)
          );
          font-size: 15px;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .main > div {
          width: 100%;
          border-bottom: 1px solid #aaa;
        }
        div > * {
          padding: 8px;
        }
      </style>
      <div class="main">
        <div>
          <md-filled-button @click=${clickHandler}>Open Confirm</md-filled-button>
          <exmg-dialog-confirm-v2
            message="Deleting the selected users"
            @delete=${this.handleSubmit}
          ></exmg-dialog-confirm-v2>
        </div>

        <div>
          <md-filled-button @click=${clickHandler}>Open Confirm (Custom)</md-filled-button>
          <item-delete-confirm-dialog></item-delete-confirm-dialog>
        </div>
      </div>
    `;
  }
}
