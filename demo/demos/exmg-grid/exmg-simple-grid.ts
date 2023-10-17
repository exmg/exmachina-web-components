import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import '@exmg/exmg-grid/src/table/exmg-grid.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';
import { style as tableStyles } from '@exmg/exmg-grid/src/styles/exmg-grid-styles-css.js';
import { style as demoStyles } from './demo-common-css.js';

<<<<<<< HEAD
import { ExmgBaseGridDemo } from './exmg-grid-demo.js';
=======
import {ExmgBaseGridDemo} from './exmg-grid-base.js';
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

@customElement('demo-simple-grid')
export class DemoSimpleGridTable extends ExmgBaseGridDemo {
  static styles = [demoStyles, tableStyles];

  private renderTableBody() {
    return repeat(
      this.items,
      ({ id }) => id,
      (i) => {
        return html`
          <tr data-row-key="${i.id}">
            <td>#${i.id}</td>
            <td>${i.month}</td>
            <td class="grid-col-number">${i.year}</td>
            <td class="grid-col-number">${i.amount}</td>
          </tr>
        `;
      },
    );
  }

  protected render() {
    return html`
      <div>
        <button class="demo-button" @click="${() => (this.dark = !this.dark)}">Toggle Dark Theme</button>
      </div>
      <h1>Simple table</h1>
      <h2>Exmg Theme</h2>
      <exmg-grid .items="${this.items}" class=${classMap({ dark: this.dark })}>
        <table>
          <thead>
            <tr class="grid-columns">
              <th><span>ID</span></th>
              <th><span>Month</span></th>
              <th class="grid-col-number"><span>Year</span></th>
              <th class="grid-col-number"><span>Income</span></th>
            </tr>
          </thead>
          <tbody class="grid-data">
            ${this.renderTableBody()}
          </tbody>
        </table>
        <exmg-grid-pagination
          slot="pagination"
          page-index=${this.pageIndex}
          page-size=${this.pageSize}
          item-count="${this.getTotalCount()}"
          @exmg-grid-pagination-page-changed="${this.onPageChange}"
          @exmg-grid-pagination-page-size-changed="${this.onPageSizeChange}"
        >
        </exmg-grid-pagination>
      </exmg-grid>
    `;
  }
}
