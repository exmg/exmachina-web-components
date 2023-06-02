import{_ as e,c as t,e as o}from"../exmg-grid-toolbar-combobox-baa33540.js";import{x as i}from"../lit-element-88bb347a.js";import{A as a}from"../exmg-grid-smart-toolbar-81c2118a.js";import{s as n,E as r}from"../exmg-grid-demo-7d9a615b.js";import"../exmg-grid-pagination-1f0cd0d8.js";import{style as s}from"./demo-common-css.js";import"../exmg-grid-toolbar-c5491d70.js";import"../exmg-grid-base-toolbar-c8af6158.js";let d=class extends r{constructor(){super(...arguments),this.actions=[{id:"export",text:"",tooltip:"Export",icon:"get_app",condition:{type:a.AmountOfSelectedItemsRange,min:0}},{id:"merge",text:"",tooltip:"Merge",icon:"merge_type",condition:{type:a.AmountOfSelectedItemsRange,min:1}},{id:"delete",text:"",tooltip:"Delete",icon:"delete",condition:{type:a.AmountOfSelectedItemsRange,min:2}}],this.description="Table 1"}renderTableBody(){return t(this.items,(({id:e})=>e),(e=>i`
          <tr data-row-key="${e.id}">
            <td>#${e.id}</td>
            <td>${e.month}</td>
            <td class="grid-col-number">${e.year}</td>
            <td class="grid-col-number">${e.amount}</td>
          </tr>
        `))}render(){return i`
      <style>
        :host {
          --mdc-theme-primary: #0071dc;
          --exmg-theme-grid-setting-checkbox-bg-color: #0071dc;
          --exmg-theme-table-toolbar-setting-list-item-active-bg-color: #0071dc;
          --exmg-theme-table-toolbar-background-color: none;
          --exmg-theme-table-surface: none;
          --exmg-theme-table-pagination-bg-color: none;

          padding: 10px;
          display: block;
          background-color: #f6f6f6;
          height: 100vh;
        }

        table {
          background: white;
        }
      </style>
      <button class="demo-button" @click="${this.toggleMonthColumn}">Toggle Month</button>
      <h1>With search</h1>

      <br /><br /><br />
      <exmg-grid .items="${this.items}" .hiddenColumnNames="${this.hiddenColumns}">
        <exmg-grid-smart-toolbar
          searchEnabled
          searchPlaceholder="Search for income by month or year"
          .actions="${this.actions}"
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
    `}};d.styles=[s,n],d=e([o("search-toolbar-demo")],d);export{d as SearchToolbarDemo};
