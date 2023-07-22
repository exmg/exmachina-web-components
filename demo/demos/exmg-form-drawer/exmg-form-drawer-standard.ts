import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@exmg/exmg-form-drawer/exmg-form-drawer.js';
import '@material/web/button/text-button.js';
import { ExmgFormDrawer, formDrawerStyles } from '@exmg/exmg-form-drawer';

export const regexEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('exmg-form-drawer-standard')
export class Drawer extends LitElement {
  static styles = [formDrawerStyles];

  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean })
  shouldFail = false;

  @property({ type: Boolean })
  keepOpenedOnSubmitSuccess = false;

  @property({ type: Boolean })
  resetFormOnSubmitSuccess = false;

  @property({ type: Boolean })
  noCancelOnOutsideClick = false;

  @property({ type: Boolean })
  submitBtnHidden = false;

  @property({ type: Boolean })
  disableStickyHeader = false;

  @query('exmg-form-drawer')
  form?: ExmgFormDrawer;

  handleOpenedChanged(e: CustomEvent) {
    this.opened = e.detail.value;
  }

  handleShouldFailChange(e: CustomEvent) {
    this.shouldFail = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleKeepOpenedOnSubmitSuccess(e: CustomEvent) {
    this.keepOpenedOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleResetFormOnSubmitSuccess(e: CustomEvent) {
    this.resetFormOnSubmitSuccess = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleNoCancelOnOutsideClick(e: CustomEvent) {
    this.noCancelOnOutsideClick = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  handleDisableStickyHeaderClick(e: CustomEvent) {
    this.disableStickyHeader = (e.composedPath()[0] as HTMLInputElement).checked;
  }

  async doFormAction(e: CustomEvent) {
    const formDialog = e.target as ExmgFormDrawer;
    try {
      formDialog.submitting = true;

      await sleep(1000);

      if (this.shouldFail) {
        throw Error('Internal error occurred');
      }

      console.log('Save ', e.detail);

      formDialog.close();
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
      formDialog.showError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      formDialog.submitting = false;
    }
  }

  onCancel(event: CustomEvent) {
    // eslint-disable-next-line no-console
    console.log('cancel', event);
  }

  render() {
    return html`
      <style>
        exmg-form-drawer {
          --mdc-theme-primary: #0071dc;
        }
      </style>
      <div style="padding: 20px">
        <md-text-button @click="${() => this.form?.show()}">Open Create</md-text-button>

        <br /><br />
        <label>
          <input
            type="checkbox"
            name="shouldFail"
            ?checked="${this.shouldFail}"
            @change="${this.handleShouldFailChange}"
          />
          Should Fail
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="keepOpenedOnSubmitSuccess"
            ?checked="${this.keepOpenedOnSubmitSuccess}"
            @change="${this.handleKeepOpenedOnSubmitSuccess}"
          />
          Keep opened on submit success
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            ?checked="${this.noCancelOnOutsideClick}"
            @change="${this.handleNoCancelOnOutsideClick}"
          />
          No cancel on outside click
        </label>

        <br /><br />
        <label>
          <input
            type="checkbox"
            name="hodeSubmitButton"
            @change="${() => (this.submitBtnHidden = !this.submitBtnHidden)}"
          />
          Hide submit button
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="noCancelOnOutsideClick"
            ?checked="${this.disableStickyHeader}"
            @change="${this.handleDisableStickyHeaderClick}"
          />
          Disable sticky header
        </label>
      </div>
      <exmg-form-drawer
        @exmg-drawer-opened-changed="${this.handleOpenedChanged}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        submit-btn-title="Create"
        ?submit-btn-hidden=${this.submitBtnHidden}
        ?disable-sticky-header=${this.disableStickyHeader}
        @dialog-submit=${this.doFormAction}
      >
        <div slot="title">Create User</div>
        <form>
          <div class="row">
            <md-outlined-text-field name="firstname" dialogFocus label="First Name" required></md-outlined-text-field>
            <md-outlined-text-field name="lastname" label="Last Name" required></md-outlined-text-field>
          </div>
          <div class="row">
            <md-outlined-text-field name="company" label="Company"></md-outlined-text-field>
            <md-outlined-text-field
              name="amount"
              label="Amount"
              type="number"
              min="0"
              max="10"
            ></md-outlined-text-field>
          </div>
          <div class="row">
            <md-outlined-text-field
              name="email"
              label="Email"
              pattern="${regexEmail}"
              required
            ></md-outlined-text-field>
          </div>
          <div class="row">
            <md-outlined-text-field name="phone" label="Phone" required></md-outlined-text-field>
          </div>
        </form>
      </exmg-form-drawer>
    `;
  }
}
