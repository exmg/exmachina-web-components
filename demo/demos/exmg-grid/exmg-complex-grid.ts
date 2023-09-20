import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import '@material/mwc-checkbox';
import '@material/mwc-icon-button';

import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/iron-dropdown/iron-dropdown.js';

import '@exmg/exmg-grid/src/table/exmg-grid.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';
import '@exmg/exmg-grid/src/table/exmg-grid-smart-toolbar.js';
import { style as tableStyles } from '@exmg/exmg-grid/src/styles/exmg-grid-styles-css.js';
import { style as demoStyles } from './demo-common-css.js';

import { createIcon } from './exmg-icons.js';
import { DEFAULT_SORT_COLUMN, DEFAULT_SORT_DIRECTION, ExmgBaseGridDemo } from './exmg-grid-demo.js';

@customElement('demo-complex-grid')
export class ExmgComplexGrid extends ExmgBaseGridDemo {
  // language=CSS
  static styles = [
    tableStyles,
    demoStyles,
    css`
      .expandable-toggle {
        cursor: pointer;
      }
    `,
  ];

  constructor() {
    super();
    this.selectedRowIds = this.items
      .slice(0, 3)
      .map(({ id }) => id.toString())
      .reduce((acc, item: string) => ({ ...acc, [item]: true }), {});
    this.expandedRowIds = this.items
      .slice(3, 5)
      .map(({ id }) => id.toString())
      .reduce((acc, item: string) => ({ ...acc, [item]: true }), {});
  }

  // get more menu items for row
  moreMenu() {
    return html`
      <paper-menu-button dynamic-align>
        <mwc-icon-button class="ignore-select" icon="more_vert" slot="dropdown-trigger"></mwc-icon-button>
        <paper-listbox slot="dropdown-content">
          <paper-item>Edit 1</paper-item>
          <paper-item>Edit 2</paper-item>
        </paper-listbox>
      </paper-menu-button>
    `;
  }

  private renderTableBody() {
    return repeat(
      this.items,
      ({ id }) => id,
      (i) => {
        return html`
          <tr data-row-key="${i.id}">
            <td class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></td>
            <td>#${i.id}</td>
            <td>${i.month}</td>
            <td class="grid-col-number">${i.year}</td>
            <td class="grid-col-number">${i.amount}</td>
            <td class="grid-cell-visible-on-hover"><span class="expandable-toggle">${createIcon}</span></td>
            <td class="grid-col no-ellipsis">${this.moreMenu()}</td>
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
      <h1>Complex table with sortable columns</h1>
      <h2>Current theme ${this.theme}</h2>
      <ul>
        <li>default sort column</li>
        <li>preselected rows</li>
        <li>expanded rows</li>
        <li>fixed table layout - squeeze content and ellipsis overflow</li>
      </ul>
      <exmg-grid
        data-theme="${this.theme}"
        .items="${this.items}"
        .hiddenColumnNames="${this.hiddenColumns}"
        .expandedRowIds="${this.expandedRowIds}"
        .selectedRowIds="${this.selectedRowIds}"
        selectable-checkbox-selector=".selectable-checkbox"
        rows-selectable
        disable-row-click-selection
        expandable-toggle-selector=".expandable-toggle"
        @exmg-grid-selected-rows-change="${this.onSelectedRowsChange}"
        default-sort-column="${DEFAULT_SORT_COLUMN}"
        default-sort-direction="${DEFAULT_SORT_DIRECTION}"
        ?sortable="${true}"
        @exmg-grid-sort-change="${this.onSortChange}"
        table-layout="fixed"
        class=${classMap({ dark: this.dark })}
      >
        <exmg-grid-smart-toolbar
          slot="toolbar"
          amount-of-selected-items="${this.selectedRows.length}"
          .actions="${this.actions}"
          description="Income table"
          .filters="${this.filters}"
          ?show-column-filter="${true}"
          .columnFilterColumns="${this.columns}"
          @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
          @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
          @exmg-grid-toolbar-setting-changed="${this.onSettingChanged}"
        ></exmg-grid-smart-toolbar>
        <table>
          <thead>
            <tr class="grid-columns">
              <th class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></th>
              <th><span>ID</span></th>
              <th style="width: 60%" data-column-key="month" data-sort>
                <span>Month with quite long name which should stay on one line</span>
              </th>
              <th class="grid-col-number" data-column-key="year" data-sort>
                <span>Year with quite short name with one line inside inside span tag</span>
              </th>
              <th class="grid-col-number" data-column-key="amount" data-sort=""><span>Income</span></th>
              <th></th>
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
        >
        </exmg-grid-pagination>
      </exmg-grid>
    `;
  }
}
