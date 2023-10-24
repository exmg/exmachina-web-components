import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ExmgBaseGridDemo } from './exmg-grid-base.js';

import '@exmg/exmg-grid/src/table/exmg-grid-smart-toolbar.js';
import '@exmg/exmg-grid/src/table/exmg-grid.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';

import { style as tableStyles } from '@exmg/exmg-grid/src/styles/exmg-grid-styles-css.js';
import { style as demoStyles } from './demo-common-css.js';

@customElement('search-toolbar-demo')
export class SearchToolbarDemo extends ExmgBaseGridDemo {
  static styles = [demoStyles, tableStyles];

  private description = 'Table 1';

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

  render() {
    return html`
      <style>
        :host {
          padding: 10px;
          display: block;
        }
      </style>
      <exmg-grid .items="${this.items}" .hiddenColumnNames="${this.hiddenColumns}">
        <exmg-grid-smart-toolbar
          searchEnabled
          searchPlaceholder="Search for income by month or year"
          description="${this.description}"
          .filters="${this.filters}"
          show-column-filter
          .columnFilterColumns="${this.columns}"
          @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
          @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
          @exmg-grid-toolbar-setting-changed="${this.onSettingChanged}"
          @exmg-grid-toolbar-search-changed="${this.onSearchChanged}"
        ></exmg-grid-smart-toolbar>
        <table>
          <thead>
            <tr class="grid-columns">
              <th><span>ID</span></th>
              <th data-column-key="month"><span>Month</span></th>
              <th data-column-key="year" class="grid-col-number"><span>Year</span></th>
              <th data-column-key="amount" class="grid-col-number"><span>Income</span></th>
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
