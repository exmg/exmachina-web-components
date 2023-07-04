import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators.js';

import '@exmg/exmg-button/exmg-filled-button.js';

@customElement('exmg-button-demo')
export class ButtonDemo extends LitElement {
  @property({ type: Boolean })
  loading = false;

  static styles = [
    css`
      h1 {
        color: var(--md-sys-color-on-surface);
        padding-top: 1.5rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="main">
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
      </div>
    `;
  }
}
