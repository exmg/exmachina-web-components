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

@customElement('settings-example-item-1')
export class SettingsExampleItem1 extends LitElement {
  @property({ type: Boolean })
  opened = false;

  static styles = [
    exmgFormStyles,
    css`
      :host {
        display: block;
        background: var(--md-sys-color-surface-container);
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

      .button-body {
        display: flex;
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

      exmg-form {
        --exmg-form-content-margin-left: 180px;
      }
    `,
  ];

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
        <exmg-form>
          <form>
            <div class="section-title" role="heading" aria-level="4">Primary contact</div>
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
              <md-filled-text-field
                name="email"
                label="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                value="rick.novak@example.com"
                required
              ></md-filled-text-field>
            </div>
            <div class="row">
              <md-filled-text-field name="phone" value="+3161234567890" label="Phone" required></md-filled-text-field>
            </div>
            <div class="section-title extra-margin" role="heading" aria-level="4">Data protection officer</div>
            <div>
              <label class="checkbox">
                <md-checkbox name="dpo" touch-target="wrapper">Same as primary contact</md-checkbox>
                Same as primary contact
              </label>
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
