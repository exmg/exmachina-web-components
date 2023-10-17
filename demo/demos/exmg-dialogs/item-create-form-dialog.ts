import { ExmgDialogFormBase, exmgDialogFormStyles } from '@exmg/exmg-dialogs';
import { html } from 'lit';

import '@material/web/textfield/filled-text-field.js';
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
          <md-outlined-text-field name="firstname" dialogFocus label="First Name" required></md-outlined-text-field>
          <md-outlined-text-field name="lastname" label="Last Name" required></md-outlined-text-field>
        </div>
        <div class="row">
          <md-outlined-text-field name="company" label="Company"></md-outlined-text-field>
          <md-outlined-text-field name="amount" label="Amount" type="number" min="0" max="10"></md-outlined-text-field>
        </div>
        <md-outlined-text-field
          name="email"
          label="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          required
        ></md-outlined-text-field>
        <md-outlined-text-field name="phone" label="Phone" required></md-outlined-text-field>
      </form>
    `;
  }
}
