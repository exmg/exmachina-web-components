import{P as e,h as t,a as o,_ as a,c as l,o as s,e as i}from"../exmg-grid-toolbar-combobox-baa33540.js";import{i as r,x as d}from"../lit-element-88bb347a.js";import{s as c,E as n,D as m,a as b}from"../exmg-grid-demo-7d9a615b.js";import"../exmg-grid-pagination-1f0cd0d8.js";import"../exmg-grid-base-toolbar-c8af6158.js";import{style as g}from"./demo-common-css.js";import{createIcon as p}from"./exmg-icons.js";import"../exmg-grid-smart-toolbar-81c2118a.js";import"../exmg-grid-toolbar-c5491d70.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/e({_template:t`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
e({_template:t`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[o]});let h=class extends n{renderTableBody(){return l(this.items,(({id:e})=>e),(e=>d`
          <tr data-row-key="${e.id}">
            <td class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></td>
            <td>#${e.id}</td>
            <td>${e.month}</td>
            <td class="grid-col-number">${e.year}</td>
            <td class="grid-col-number">${e.amount}</td>
            <td class="grid-cell-visible-on-hover"><span class="expandable-toggle">${p}</span></td>
          </tr>
          <tr class="grid-row-detail" data-row-detail-key="${e.id}">
            <td data-auto-colspan>
              <p>Here is expanded content for row id <b>${e.id}</b></p>
              <button class="demo-button" @click="${()=>this.collapseRow(e.id.toString())}">Done</button>
            </td>
          </tr>
        `))}render(){return d`
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
      <h1>Complex table with slotted toolbar and custom styles</h1>
      <ul>
        <li>Some custom styles</li>
        <li>Implemented toolbar with slots exmg-grid-base-toolbar</li>
        <li>auto table layout</li>
      </ul>
      <exmg-grid
        table-layout="auto"
        .items="${this.items}"
        .hiddenColumnNames="${this.hiddenColumns}"
        .expandedRowIds="${this.expandedRowIds}"
        .selectedRowIds="${this.selectedRowIds}"
        selectable-checkbox-selector=".selectable-checkbox"
        ?rows-selectable="${!0}"
        expandable-toggle-selector=".expandable-toggle"
        @exmg-grid-selected-rows-change="${this.onSelectedRowsChange}"
        default-sort-column="${m}"
        default-sort-direction="${b}"
        ?sortable="${!0}"
        class=${s({dark:this.dark})}
        @exmg-grid-sort-change="${this.onSortChange}"
      >
        <exmg-grid-base-toolbar slot="toolbar">
          <div slot="actions">
            ${this.selectedRows.length?d`
                  <mwc-icon-button
                    class="action"
                    icon="merge_type"
                    title="Merge"
                    @click="${this.onActionDelegate("merge")}"
                  ></mwc-icon-button>
                `:null}
          </div>
          <div slot="description">Income table</div>
          <div slot="filters">
            <exmg-grid-toolbar-combobox
              attr-for-selected="data-id"
              selected="all"
              @exmg-combobox-select="${this.onFilterChangedComboboxDelegate("month")}"
            >
              <paper-item data-id="all">Month: All</paper-item>
              <paper-item data-id="january">Month: January</paper-item>
              <paper-item data-id="february">Month: February</paper-item>
              <paper-item data-id="march">Month: March</paper-item>
            </exmg-grid-toolbar-combobox>
          </div>
        </exmg-grid-base-toolbar>
        <table>
          <thead>
            <tr class="grid-columns">
              <th class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></th>
              <th><span>ID</span></th>
              <th data-column-key="month" data-sort><span>Month</span></th>
              <th class="grid-col-number" data-column-key="year" data-sort><span>Year</span></th>
              <th class="grid-col-number" data-column-key="amount" data-sort=""><span>Income</span></th>
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
        >
        </exmg-grid-pagination>
      </exmg-grid>
    `}};h.styles=[c,g,r`
      :host {
        --mdc-theme-primary: #0070db;
        --mdc-theme-on-surface: #091e2e;
        --exmg-grid-toolbar-active-bg-color: #e1f0fe;
        --exmg-theme-table-toolbar-filter-item-active-bg-color: #b8ddfe;
        --exmg-theme-table-pagination-bg-color: #4a4a4a;
        --exmg-theme-table-pagination-color: #ffffff;
      }
      table {
        --exmg-table-color: #000;
        --exmg-table-card-background-color: #4a4a4a;
        --exmg-table-row-divider-color: white;
        --exmg-table-row-selected-color: white;
        --exmg-table-row-selected-background-color: #850e13;
        --exmg-table-row-hover-color: white;
        --exmg-table-row-hover-background-color: #b42636;
        --exmg-table-row-dragged-background-color: #f1f1f1;
        --exmg-table-th-color: #0071dc;
        --exmg-table-columns-background-color: #4a4a4a;
        --exmg-table-th-sortable-hover-color: #0092ff;
      }
      table .expandable-toggle > svg {
        fill: white;
      }
    `],h=a([i("demo-complex-grid-with-slotted-toolbar")],h);export{h as ExmgComplexGridWithSlottedToolbar};
