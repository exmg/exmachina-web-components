import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-search/exmg-search.js';

@customElement('exmg-search-demo')
export class SearchDemo extends LitElement {
  static styles = [
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
    `,
  ];

  render() {
    return html`
      <div class="main">
        <div>
          <h1>Search Bar</h1>
          <div class="card">
            <exmg-search></exmg-search>
          </div>
          <h1>Search Bar (disable tab focus)</h1>
          <div class="card">
            <exmg-search tabindex="-1"></exmg-search>
          </div>
        </div>
      </div>
    `;
  }
}
