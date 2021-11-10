import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {repeat} from 'lit/directives/repeat.js';
import '@material/mwc-checkbox';
import '@exmg/exmg-grid/src/table/exmg-grid.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';
import {dragIcon, expandIcon} from './exmg-icons.js';
import '@exmg/exmg-grid/src/table/exmg-grid-smart-toolbar.js';
import {ExmgBaseGridDemo} from './exmg-base-grid-demo.js';

import {style as tableStyles} from '@exmg/exmg-grid/src/styles/exmg-grid-styles-css.js';
import {style as demoStyles} from './demo-common-css.js';

@customElement('demo-complex-grid-sortable')
export class ExmgComplexGridWithSortableRows extends ExmgBaseGridDemo {
  static styles = [
    tableStyles,
    demoStyles,
    // language=CSS
    css`
      exmg-grid {
        --exmg-table-card-width: 500px;
      }

      table th {
        min-width: 100px;
      }
    `,
  ];

  constructor() {
    super();
  }

  private renderTableBody() {
    return repeat(
      this.items,
      ({id}) => id,
      (i) => {
        return html`
          <tr data-row-key="${i.id}">
            <td class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></td>
            <td><span class="grid-row-drag-handler">${dragIcon}</span></td>
            <td>#${i.id}</td>
            <td>${i.month}</td>
            <td class="grid-col-number">${i.year}</td>
            <td class="grid-col-number">${i.amount}</td>
            <td class="grid-cell-visible-on-hover">
              <span class="expandable-toggle grid-icon-rotate">${expandIcon}</span>
            </td>
          </tr>
          <tr class="grid-row-detail" data-row-detail-key="${i.id}">
            <td data-auto-colspan>
              <p>Here is expanded content for row id <b>${i.id}</b></p>
              <button class="demo-button" @click="${() => this.collapseRow(i.id.toString())}">Done</button>
            </td>
          </tr>
        `;
      },
    );
  }

  protected render() {
    return html`
      <div>
        <button class="demo-button" @click="${this.toggleMonthColumn}">Toggle Month</button>
        <button class="demo-button" @click="${this.toggleYearColumn}">Toggle Year</button>
        <button class="demo-button" @click="${this.refreshTable}">Refresh Table</button>
        <button class="demo-button" @click="${this.expandFirstRows}">Expand first Rows</button>
        <button class="demo-button" @click="${this.collapseFirstRows}">Collapse first Rows</button>
        <button class="demo-button" @click="${this.selectFirstRows}">Select first rows</button>
        <button class="demo-button" @click="${this.unSelectFirstRows}">Unselect first rows</button>
        <button class="demo-button" @click="${() => (this.dark = !this.dark)}">Toggle Dark Theme</button>
      </div>
      <h1>Complex table with sortable rows</h1>
      <h2>Current theme ${this.theme}</h2>
      <ul>
        <li>Sortable rows</li>
        <li>Implemented toolbar with slots exmg-grid-smart-toolbar</li>
        <li>auto table layout</li>
        <li>fixed table width</li>
      </ul>
      <exmg-grid
        data-theme="${this.theme}"
        .items="${this.items}"
        .hiddenColumnNames="${this.hiddenColumns}"
        .expandedRowIds="${this.expandedRowIds}"
        .selectedRowIds="${this.selectedRowIds}"
        ?rows-sortable="${true}"
        selectable-checkbox-selector=".selectable-checkbox"
        ?rows-selectable="${true}"
        expandable-toggle-selector=".expandable-toggle"
        table-layout="auto"
        class=${classMap({dark: this.dark})}
        @exmg-grid-rows-order-changed="${this.onRowsOrderChanged}"
        @exmg-grid-selected-rows-change="${this.onSelectedRowsChange}"
      >
        <exmg-grid-smart-toolbar
          slot="toolbar"
          amount-of-selected-items="${this.selectedRows.length}"
          .actions="${this.actions}"
          description="Income table"
          .filters="${this.filters}"
          @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
          @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
        ></exmg-grid-smart-toolbar>
        <table>
          <thead>
            <tr class="grid-columns">
              <th width="5%"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></th>
              <th width="5%"></th>
              <th title="ID"><span>ID</span></th>
              <th title="Month" data-column-key="month"><span>Month</span></th>
              <th class="grid-col-number" title="Year" data-column-key="year"><span>Year</span></th>
              <th class="grid-col-number" title="Income"><span>Income</span></th>
              <th></th>
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
          .pageSizeOptions="${[10, 20, 30, 50, 100]}"
          item-count="${this.getTotalCount()}"
          @exmg-grid-pagination-page-changed="${this.onPageChange}"
          @exmg-grid-pagination-page-size-changed="${this.onPageSizeChange}"
        ></exmg-grid-pagination>
      </exmg-grid>
    `;
  }
}
