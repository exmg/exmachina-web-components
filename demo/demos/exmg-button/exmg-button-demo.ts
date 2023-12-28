import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators.js';

import '@exmg/exmg-button/exmg-filled-button.js';
import '@exmg/exmg-button/exmg-text-button.js';

import { style } from '../demo-page-styles-css.js';

@customElement('exmg-button-demo')
export class ButtonDemo extends LitElement {
  @property({ type: Boolean })
  loading = false;

  static styles = [style];

  render() {
    return html`
      <div class="main centered">
        <div>
          <h1>Loading (click it!)</h1>
          <exmg-filled-button @click=${() => (this.loading = !this.loading)} ?loading=${this.loading}
            >LOADING</exmg-filled-button
          >
        </div>
        <div>
          <h1>Loading disabled</h1>
          <exmg-filled-button disabled loading>LOADING</exmg-filled-button>
        </div>

        <div>
          <h1>Loading (click it!)</h1>
          <exmg-text-button @click=${() => (this.loading = !this.loading)} ?loading=${this.loading}
            >LOADING</exmg-text-button
          >
        </div>
        <div>
          <h1>Loading disabled</h1>
          <exmg-text-button disabled loading>LOADING</exmg-text-button>
        </div>
      </div>
    `;
  }
}
