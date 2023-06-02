import{_ as t,c as e,o as a,e as i}from"../exmg-grid-toolbar-combobox-baa33540.js";import{x as s}from"../lit-element-88bb347a.js";import{s as r,E as d}from"../exmg-grid-demo-7d9a615b.js";import"../exmg-grid-pagination-1f0cd0d8.js";import{style as o}from"./demo-common-css.js";import"../exmg-grid-smart-toolbar-81c2118a.js";import"../exmg-grid-toolbar-c5491d70.js";import"../exmg-grid-base-toolbar-c8af6158.js";let g=class extends d{renderTableBody(){return e(this.items,(({id:t})=>t),(t=>s`
          <tr data-row-key="${t.id}">
            <td>#${t.id}</td>
            <td>${t.month}</td>
            <td class="grid-col-number">${t.year}</td>
            <td class="grid-col-number">${t.amount}</td>
          </tr>
        `))}render(){return s`
      <div>
        <button class="demo-button" @click="${()=>this.dark=!this.dark}">Toggle Dark Theme</button>
      </div>
      <h1>Simple table</h1>
      <h2>Exmg Theme</h2>
      <exmg-grid .items="${this.items}" class=${a({dark:this.dark})}>
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
    `}};g.styles=[o,r],g=t([i("demo-simple-grid")],g);export{g as DemoSimpleGridTable};
