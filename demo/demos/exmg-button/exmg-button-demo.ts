import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-button/exmg-button.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import '@material/web/icon/icon.js';
import { property } from 'lit/decorators.js';
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
      exmg-button {
        width: 50px;
      }
    `,
  ];

  render() {
    return html`
      <div class="main">
        <div>
          <h1>Loading (click it!)</h1>
          <exmg-button @click=${() => (this.loading = !this.loading)} ?loading=${this.loading}>LOADING</exmg-button>
        </div>
        <div>
          <h1>Loading disabled</h1>
          <exmg-button disabled loading>LOADING</exmg-button>
        </div>
      </div>
    `;
  }
}
