import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';

import '@exmg/exmg-dialogs/exmg-dialog-confirm';
import '@exmg/exmg-dialogs/exmg-dialog-form';
import '@exmg/exmg-dialogs/exmg-dialog-info';
import {ExmgConfirmDialog} from '@exmg/exmg-dialogs/exmg-dialog-confirm.js';

@customElement('exmg-dialogs-demo')
export class DialogDemo extends LitElement {
  getElementBySelector(selector: string): ExmgConfirmDialog | null {
    return this.shadowRoot ? this.shadowRoot.querySelector(selector) : null;
  }
  _delete(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    // Trigger done after 1s
    setTimeout(() => {
      // finished
      target.done();
    }, 1000);
  }
  _saveData(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    // Trigger done after 1s
    setTimeout(() => {
      // finished
      target.done();
    }, 1000);
  }
  _saveDataTicket(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    // Trigger done after 1s
    setTimeout(() => {
      // finished
      target.done();
    }, 1000);
  }

  _done(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    target.close();
  }

  _cancelCallback(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    target.close();
  }

  _saveDataError(e: CustomEvent) {
    const target = e.target as ExmgConfirmDialog;
    // Trigger done after 1s
    setTimeout(() => {
      try {
        // Throw error to simulate error
        if (true) {
          throw Error('User does not have permission to save data');
        }
      } catch (err) {
        target.handleError(err instanceof Error ? err.message : 'Unknown Error');
      }
    }, 1000);
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
          border-bottom: 1px solid #666;
        }
        div > * {
          padding: 8px;
        }
      </style>
      <div class="main">
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog0')!.open()}
            >Dialog Confirm</exmg-button
          >
          <exmg-dialog-confirm
            id="dialog0"
            class="dark"
            title="Confirmation"
            message="Are you sure you want to delete this item [message]?"
            button-copy="Delete account"
            @cancel=${this._cancelCallback}
            @submit=${this._saveDataError}
          ></exmg-dialog-confirm>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog00')!.open()}
            >Dialog Confirm (Using slot)</exmg-button
          >
          <exmg-dialog-confirm
            id="dialog00"
            title="Confirmation"
            message="Are you sure you want to delete this item [message]?"
            button-copy="Delete account"
            @cancel=${this._cancelCallback}
            @submit="${this._delete}"
          >
            <p>Are you sure you want to delete this item [slot]?</p>
          </exmg-dialog-confirm>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog1')!.open()}
            >Dialog Normal</exmg-button
          >
          <exmg-dialog-form
            class="dark"
            id="dialog1"
            title="Create account"
            button-copy="Save"
            @cancel=${this._cancelCallback}
            @submit="${this._saveData}"
          >
            <paper-input name="name" label="Name" required></paper-input>
            <paper-input name="test" label="Test"></paper-input>
          </exmg-dialog-form>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog2')!.open()}
            >Dialog Error</exmg-button
          >
          <exmg-dialog-form
            id="dialog2"
            class="dark"
            title="Create account"
            button-copy="Save"
            @cancel=${this._cancelCallback}
            @submit="${this._saveDataError}"
          >
            <p>
              This setting either prevents or allows users to create multiple
              accounts using the same email address if they sign in to your app
              using different authentication providers.
            </p>
            <paper-input name="name" label="Name" required></paper-input>
            <paper-input
              name="password"
              label="Password"
              required
            ></paper-input>
          </exmg-dialog-form>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog4a')!.open()}
            >Dialog Info with scroll and normal title</exmg-button
          >
          <exmg-dialog-info
            class="dark"
            id="dialog4a"
            title="Title"
            button-copy="Close"
            @done="${this._done}"
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
            </div>
          </exmg-dialog-info>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog4b')!.open()}
            >Dialog Info without close btn</exmg-button
          >
          <exmg-dialog-info
            id="dialog4b"
            title="Test"
            hide-close-button
            button-copy="Close"
            @done="${this._done}"
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
                amet pharetra turpis. Nullam tincidunt aliquet condimentum.
              </p>
            </div>
          </exmg-dialog-info>
        </div>
        <div>
          <exmg-button
            @click=${() => this.getElementBySelector('#dialog3')!.open()}
            >Dialog Large</exmg-button
          >
          <exmg-dialog-form
            id="dialog3"
            title="Create Ticket"
            button-copy="Create"
            @cancel=${this._cancelCallback}
            @submit="${this._saveDataTicket}"
            large
          >
            <exmg-paper-combobox
              label="Project"
              style="max-width:280px;"
              always-float-label
              required
            >
              <paper-item>PlayToTV</paper-item>
              <paper-item>Website</paper-item>
            </exmg-paper-combobox>
            <exmg-paper-combobox
              label="Issue Type"
              style="max-width:280px;"
              always-float-label
              required
            >
              <paper-item>Story</paper-item>
              <paper-item>Bug</paper-item>
            </exmg-paper-combobox>
            <p class="help">
              Some issue types are unavailable due to incompatible field
              configuration and/or workflow associations.
            </p>
            <hr />
            <paper-input
              name="name"
              label="Summary"
              required
              always-float-label
            ></paper-input>
            <paper-input
              name="reporter"
              label="Reporter"
              required
              always-float-label
            ></paper-input>
            <p class="help">Start typing to get a list of possible matches.</p>
            <exmg-paper-token-input
              name="components"
              label="Components"
              always-float-label
            >
              <paper-item>javascript</paper-item>
              <paper-item>css</paper-item>
            </exmg-paper-token-input>
            <p class="help">
              Start typing to get a list of possible matches or press down to
              select.
            </p>
            <paper-input
              name="estimate"
              label="Estimates"
              type="number"
              always-float-label
              style="max-width:180px;"
            ></paper-input>
            <p class="help">
              Estimated time needed to resolve this issue in hours.
            </p>
            <label>Message</label>
            <exmg-markdown-editor>
              <marked-element markdown="# Hello Word!">
                <div slot="markdown-html"></div>
              </marked-element>
            </exmg-markdown-editor>
            <paper-input
              name="test"
              label="Test"
              type="number"
              always-float-label
            ></paper-input>
          </exmg-dialog-form>
        </div>
      </div>
    `;
  }
}
