import{_ as e,t as i,e as t}from"../exmg-grid-toolbar-combobox-baa33540.js";import{s as a,x as o}from"../lit-element-88bb347a.js";import"../exmg-grid-pagination-1f0cd0d8.js";let g=class extends a{constructor(){super(...arguments),this.pageIndex=0,this.pageSize=20,this.itemCount=50}onGridPageSizeChanged(){}onGridPageChanged(){}render(){return o`
      <style>
        :host {
          --mdc-theme-primary: #0070db;
          --mdc-theme-surface: #fff;
          --mdc-theme-on-surface: #091e2e;

          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <exmg-grid-pagination
        page-index=${this.pageIndex}
        page-size=${this.pageSize}
        item-count="${this.itemCount}"
        @exmg-grid-pagination-page-size-changed="${this.onGridPageSizeChanged}"
        @exmg-grid-pagination-page-changed="${this.onGridPageChanged}"
      >
      </exmg-grid-pagination>
    `}};e([i()],g.prototype,"pageIndex",void 0),e([i()],g.prototype,"pageSize",void 0),e([i()],g.prototype,"itemCount",void 0),g=e([t("exmg-grid-pagination-demo")],g);export{g as ExmgGridSmartToolbarDemo};
