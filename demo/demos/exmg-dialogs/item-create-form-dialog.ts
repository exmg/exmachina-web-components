import { ExmgDialogFormBase, exmgDialogFormStyles } from '@exmg/exmg-dialogs';
import { html } from 'lit';

import { customElement } from 'lit/decorators.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('item-create-form-dialog')
export class ItemCreateFormDialog extends ExmgDialogFormBase {
  static override styles = [exmgDialogFormStyles];

  async doAction(formData: unknown) {
    // Simulate slow connection
    await sleep(1000);

    console.log('Item created', formData);
  }

  protected override renderFormContent() {
    return html`
      <form>
        <div class="row">
          <md-filled-text-field name="firstname" dialogFocus label="First Name" required></md-filled-text-field>
          <md-filled-text-field name="lastname" label="Last Name" required></md-filled-text-field>
        </div>
        <div class="row">
          <md-filled-text-field name="company" label="Company"></md-filled-text-field>
          <md-filled-text-field name="amount" label="Amount" type="number" min="0" max="10"></md-filled-text-field>
        </div>
        <md-filled-text-field
          name="email"
          label="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          required
        ></md-filled-text-field>
        <md-filled-text-field name="phone" label="Phone" required></md-filled-text-field>
      </form>
    `;
  }
}
