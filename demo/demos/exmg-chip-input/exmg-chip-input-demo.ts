import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@exmg/exmg-chip-input/exmg-chip-input-dropdown.js';
import '@exmg/exmg-chip-input/exmg-chip-input.js';
import '@exmg/exmg-chip-input/exmg-chip.js';
import '@exmg/exmg-form/exmg-form.js';
import { ExmgForm } from '@exmg/exmg-form/exmg-form.js';

import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/input-chip.js';
import '@material/web/chips/suggestion-chip.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/radio/radio.js';
import '@material/web/labs/card/outlined-card.js';
import { candies } from './data.js';

import './test-chip.js';

@customElement('exmg-chip-input-demo')
export class ExmgChipInputDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .main {
        max-width: 700px;
        margin: 3rem auto;
      }

      form {
        width: 100%;
        margin: 1rem;
      }
    `,
  ];

  async doFormAction(e: CustomEvent<unknown>) {
    const formDialog = e.target as ExmgForm;
    try {
      formDialog.submitting = true;
      console.log('e', e);
    } catch (error) {
      formDialog.showError(error instanceof Error ? error.message : 'Unknown error');
      console.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      formDialog.submitting = false;
    }
  }

  render() {
    return html`Demo badge input <exmg-chip-input></exmg-chip-input><br /><br />
      <div class="main">
        <md-outlined-card>
          <exmg-form @dialog-submit=${this.doFormAction}>
            <form>
              <div class="row">
                <exmg-chip-input label="Dates" aria-labelledby="dates-label">
                  <exmg-chip name="date" value="Mon" label="Mon" aria-label="Monday"></exmg-chip>
                  <exmg-chip name="date" value="Tue" label="Tue" aria-label="Tuesday"></exmg-chip>
                  <exmg-chip name="date" value="Wed" label="Wed" aria-label="Wednesday"></exmg-chip>
                </exmg-chip-input>
              </div>
              <div class="row">
                <exmg-chip-input-dropdown
                  label="Preferred Candy"
                  aria-labelledby="candies-label"
                  dropdown-title="Select candies"
                >
                  ${candies.map(
                    (c) =>
                      html`<exmg-chip name="candy" value="${c}" label="${c}" aria-label="${c}" required></exmg-chip>`,
                  )}
                </exmg-chip-input-dropdown>
              </div>
            </form>
          </exmg-form></md-outlined-card
        >
      </div> `;
  }
}
