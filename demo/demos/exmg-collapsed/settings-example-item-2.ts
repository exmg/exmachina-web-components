import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@exmg/exmg-collapsed/exmg-collapsed.js';
import '@exmg/exmg-form/exmg-form.js';
import { exmgFormStyles } from '@exmg/exmg-form';

import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/divider/divider.js';
import '@material/web/textfield/filled-text-field.js';

@customElement('settings-example-item-2')
export class SettingsExampleItem2 extends LitElement {
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
          <div class="label">Account Name</div>
          <div class="summary">${this.opened ? nothing : html`Ex machina B.V.`}</div>
        </div>
        <md-icon class="icon">expand_more</md-icon>
      </div>
      <exmg-collapsed id="collapsed" ?opened=${this.opened}>
        <exmg-form>
          <form>
            <div class="row">
              <md-filled-text-field
                name="name"
                dialogFocus
                label="Account name"
                value="Ex machina B.V."
                required
              ></md-filled-text-field>
            </div>
          </form>
          <div slot="aside">This is the name that everyone who has access to this account will see.</div>
        </exmg-form>
      </exmg-collapsed>
    `;
  }
}
