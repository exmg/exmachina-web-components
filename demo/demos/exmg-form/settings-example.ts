import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@exmg/exmg-collapsed/exmg-collapsed.js';
import '@exmg/exmg-form/exmg-form.js';
import { exmgFormStyles } from '@exmg/exmg-form';

import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/divider/divider.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/checkbox/checkbox.js';
import '@exmg/exmg-radio/exmg-radio-item.js';

@customElement('settings-example')
export class SettingsExample extends LitElement {
  @property({ type: Boolean })
  opened = false;

  static styles = [
    exmgFormStyles,
    css`
      :host {
        display: block;
      }

      .button {
        display: flex;
        align-items: center;
        color: var(--md-sys-color-on-surface);
        font-size: 1rem;
        padding: 1rem;
        cursor: pointer;
        justify-content: space-between;
      }

      .button > * {
        margin-right: 1rem;
      }

      .button[aria-expanded='true'] .icon {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: transform 150ms ease;
      }
      .radio-group {
        display: flex;
        gap: 16px;
      }

      .label {
        line-height: 1.5rem;
        font-size: 1rem;
        letter-spacing: 0.00625em;
        font-weight: 500;
        color: var(--md-sys-color-on-surface);
        width: 180px;
        padding-right: 16px;
        display: flex;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      .button-body {
        display: flex;
      }

      exmg-form {
        --exmg-form-content-margin-left: 80px;
        form {
          width: 100%;
        }
      }
    `,
  ];

  doFormAction(e: CustomEvent<unknown>) {
    console.log('Form data', e.detail);
  }

  render() {
    return html`
      <div
        role="button"
        tabindex="0"
        class="button"
        aria-expanded=${this.opened}
        @click=${() => (this.opened = !this.opened)}
        aria-controls="collapsed"
      >
        <div class="button-body">
          <div class="label">Data protection contact</div>
          <div class="summary">${this.opened ? nothing : html`Rick Novak `}</div>
        </div>
        <md-icon class="icon">expand_more</md-icon>
      </div>
      <exmg-collapsed id="collapsed" ?opened=${this.opened}>
        <exmg-form @form-submit=${this.doFormAction}>
          <form>
            <div class="row">
              <md-filled-text-field
                name="firstname"
                dialogFocus
                label="First Name"
                value="Rick"
                required
              ></md-filled-text-field>
              <md-filled-text-field name="lastname" label="Last Name" value="Novak" required></md-filled-text-field>
            </div>
            <div class="row">
              <md-filled-text-field name="company" label="Company"></md-filled-text-field>
              <md-filled-text-field name="amount" label="Amount" type="number" min="0" max="10"></md-filled-text-field>
            </div>
            <div class="row">
              <md-filled-text-field
                name="email"
                label="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                required
              ></md-filled-text-field>
            </div>
            <div class="row">
              <md-filled-text-field name="phone" label="Phone" required></md-filled-text-field>
            </div>
            <div class="row radio-group">
              <exmg-radio-item name="contact" required>
                <div slot="content">I want to be contacted for commercial purpose</div>
              </exmg-radio-item>
              <exmg-radio-item name="contact" required>
                <div slot="content">I do not want to be contacted for commercial purpose</div>
              </exmg-radio-item>
            </div>
          </form>
          <div slot="aside">
            Ex Machina will send notices about the Data <a href="#">Processing Terms</a> and EU General Data Protection
            Regulation to your primary contact. If your organization has a data protection officer or an EU
            representative, add their contact information.
          </div>
        </exmg-form>
      </exmg-collapsed>
    `;
  }
}
