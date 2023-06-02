import{_ as t,c as e,o,e as s}from"../exmg-grid-toolbar-combobox-baa33540.js";import{i as a,x as i}from"../lit-element-88bb347a.js";import{s as l,E as r}from"../exmg-grid-demo-7d9a615b.js";import"../exmg-grid-pagination-1f0cd0d8.js";import{dragIcon as d,expandIcon as n}from"./exmg-icons.js";import"../exmg-grid-smart-toolbar-81c2118a.js";import{style as c}from"./demo-common-css.js";import"../exmg-grid-toolbar-c5491d70.js";import"../exmg-grid-base-toolbar-c8af6158.js";let g=class extends r{constructor(){super()}renderTableBody(){return e(this.items,(({id:t})=>t),(t=>i`
          <tr data-row-key="${t.id}">
            <td class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></td>
            <td><span class="grid-row-drag-handler">${d}</span></td>
            <td>#${t.id}</td>
            <td>${t.month}</td>
            <td class="grid-col-number">${t.year}</td>
            <td class="grid-col-number">${t.amount}</td>
            <td class="grid-cell-visible-on-hover">
              <span class="expandable-toggle grid-icon-rotate">${n}</span>
            </td>
          </tr>
          <tr class="grid-row-detail" data-row-detail-key="${t.id}">
            <td data-auto-colspan>
              <p>Here is expanded content for row id <b>${t.id}</b></p>
              <button class="demo-button" @click="${()=>this.collapseRow(t.id.toString())}">Done</button>
            </td>
          </tr>
        `))}render(){return i`
      <div>
        <button class="demo-button" @click="${this.toggleMonthColumn}">Toggle Month</button>
        <button class="demo-button" @click="${this.toggleYearColumn}">Toggle Year</button>
        <button class="demo-button" @click="${this.refreshTable}">Refresh Table</button>
        <button class="demo-button" @click="${this.expandFirstRows}">Expand first Rows</button>
        <button class="demo-button" @click="${this.collapseFirstRows}">Collapse first Rows</button>
        <button class="demo-button" @click="${this.selectFirstRows}">Select first rows</button>
        <button class="demo-button" @click="${this.unSelectFirstRows}">Unselect first rows</button>
        <button class="demo-button" @click="${()=>this.dark=!this.dark}">Toggle Dark Theme</button>
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
        ?rows-sortable="${!0}"
        selectable-checkbox-selector=".selectable-checkbox"
        ?rows-selectable="${!0}"
        expandable-toggle-selector=".expandable-toggle"
        table-layout="auto"
        class=${o({dark:this.dark})}
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
          .pageSizeOptions="${[10,20,30,50,100]}"
          item-count="${this.getTotalCount()}"
          @exmg-grid-pagination-page-changed="${this.onPageChange}"
          @exmg-grid-pagination-page-size-changed="${this.onPageSizeChange}"
        ></exmg-grid-pagination>
      </exmg-grid>
    `}};g.styles=[l,c,a`
      exmg-grid {
        --exmg-table-card-width: 500px;
      }

      table th {
        min-width: 100px;
      }
    `],g=t([s("demo-complex-grid-sortable")],g);export{g as ExmgComplexGridWithSortableRows};
