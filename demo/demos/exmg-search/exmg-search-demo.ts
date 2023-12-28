import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-search/exmg-search.js';

import { style } from '../demo-page-styles-css.js';

@customElement('exmg-search-demo')
export class SearchDemo extends LitElement {
  static styles = [style];

  render() {
    return html`
      <div class="main centered">
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
