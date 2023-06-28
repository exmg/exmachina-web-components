import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/button/filled-button.js';

import '@exmg/exmg-dialogs/exmg-dialog-confirm.js';
import { ExmgDialogConfirm } from '@exmg/exmg-dialogs/exmg-dialog-confirm.js';
import '@exmg/exmg-dialogs/exmg-dialog-form.js';
import { ExmgDialogForm } from '@exmg/exmg-dialogs/exmg-dialog-form.js';
import '@material/web/textfield/filled-text-field.js';

import './item-delete-confirm-dialog.js';
import './item-create-form-dialog.js';

function clickHandler(e: Event) {
  ((e.target as Element).nextElementSibling as ExmgDialogConfirm | ExmgDialogForm)?.show();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('exmg-dialogs-demo')
export class DialogDemo extends LitElement {
  async handleSubmit(e: Event) {
    const dialog = e.target as ExmgDialogConfirm;
    try {
      dialog.submitting = true;

      await sleep(1000);
      console.log('Delete item');
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      dialog.submitting = false;
      dialog.close();
    }
  }

  async doFormAction(e: CustomEvent<unknown>) {
    const formDialog = e.target as ExmgDialogForm;
    try {
      formDialog.submitting = true;

      await sleep(1000);
      console.log('Save ', e.detail);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      formDialog.submitting = false;
      formDialog.close();
    }
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
        .example > * {
          padding: 8px;
        }

        form .row {
          display: flex;
          gap: 8px;
        }

        form .row > * {
          flex: 1;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        form > * {
          display: contents;
        }
      </style>
      <div class="main">
        <div class="example">
          <md-filled-button @click=${clickHandler}>Open Confirm</md-filled-button>
          <exmg-dialog-confirm
            message="Deleting the selected users"
            @dialog-confirmed=${this.handleSubmit}
          ></exmg-dialog-confirm>
        </div>

        <div class="example">
          <md-filled-button @click=${clickHandler}>Open Confirm (Custom)</md-filled-button>
          <item-delete-confirm-dialog></item-delete-confirm-dialog>
        </div>

        <div class="example">
          <md-filled-button @click=${clickHandler}>Open Form</md-filled-button>
          <exmg-dialog-form title="Create contact" @dialog-submit=${this.doFormAction}>
            <form>
              <div class="row">
                <md-filled-text-field name="firstname" dialogFocus label="First Name" required></md-filled-text-field>
                <md-filled-text-field name="lastname" label="Last Name" required></md-filled-text-field>
              </div>
              <div class="row">
                <md-filled-text-field name="company" label="Company"></md-filled-text-field>
                <md-filled-text-field
                  name="amount"
                  label="Amount"
                  type="number"
                  min="0"
                  max="10"
                ></md-filled-text-field>
              </div>
              <md-filled-text-field
                name="email"
                label="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                required
              ></md-filled-text-field>
              <md-filled-text-field name="phone" label="Phone" required></md-filled-text-field>
            </form>
          </exmg-dialog-form>
        </div>

        <div class="example">
          <md-filled-button @click=${clickHandler}>Open Form (Custom)</md-filled-button>
          <item-create-form-dialog></item-create-form-dialog>
        </div>
      </div>
    `;
  }
}
