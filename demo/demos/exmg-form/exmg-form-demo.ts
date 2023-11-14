import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@exmg/exmg-form/exmg-form.js';
import { ExmgForm, exmgFormStyles } from '@exmg/exmg-form';

import './form-base-example.js';
import './settings-example.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@customElement('exmg-form-demo')
export class ExmgFormDemo extends LitElement {
  static styles = [
    exmgFormStyles,
    css`
      :host {
        display: block;
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
      }

      .card {
        background: var(--md-sys-color-surface-container);
        max-width: 800px;
        padding: 0rem;
        margin-top: 2rem;
      }
    `,
  ];

  async handleSubmit(e: Event) {
    const dialog = e.target as ExmgForm;
    try {
      dialog.submitting = true;

      await sleep(1000);
      console.log('Delete item');
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      dialog.submitting = false;
    }
  }

  async doFormAction(e: CustomEvent<unknown>) {
    const formDialog = e.target as ExmgForm;
    try {
      formDialog.submitting = true;

      await sleep(1000);
      console.log('Save ', e.detail);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      formDialog.submitting = false;
    }
  }

  renderForm1() {
    return html`
      <div class="card">
        <exmg-form class="has-aside" @dialog-submit=${this.doFormAction}>
          <div slot="toolbar" class="toolbar"><div class="title">Create contact</div></div>
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
          <div slot="aside">
            Ex Machina will send notices about the Data <a href="#">Processing Terms</a> and EU General Data Protection
            Regulation to your primary contact. If your organization has a data protection officer or an EU
            representative, add their contact information.
          </div>
        </exmg-form>
      </div>
    `;
  }

  renderForm2() {
    return html`
      <div class="card">
        <exmg-form @dialog-submit=${this.doFormAction}>
          <div slot="toolbar" class="toolbar"><div class="title">Create contact</div></div>
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
        </exmg-form>
      </div>
    `;
  }

  renderForm3() {
    return html` <div class="card"><form-base-example></form-base-example></div> `;
  }

  renderForm4() {
    return html` <div class="card"><settings-example></settings-example></div> `;
  }

  render() {
    return html`
      <div class="main">${this.renderForm4()}${this.renderForm1()}${this.renderForm2()}${this.renderForm3()}</div>
    `;
  }
}
