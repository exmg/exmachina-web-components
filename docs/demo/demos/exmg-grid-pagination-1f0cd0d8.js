import{_ as e,b as t,E as a,c as i,e as o}from"./exmg-grid-toolbar-combobox-baa33540.js";import{i as r,x as n}from"./lit-element-88bb347a.js";const p=r`.wrapper{display:flex;flex:1;flex-direction:row;align-items:center;justify-content:flex-end;padding:8px 10px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-font-family, Roboto, sans-serif);background-color:var(--exmg-theme-table-pagination-bg-color, var(--mdc-theme-surface, #ffffff));color:var(--exmg-theme-table-pagination-color, var(--mdc-theme-on-surface, #02182b));overflow-x:auto;white-space:nowrap}.wrapper .page-size{display:flex;flex-direction:row;margin-right:26px;align-items:center}.wrapper .page-size .page-size-label{margin-right:10px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.wrapper .page-range{display:flex;flex-direction:row;align-items:center}.wrapper .page-range .page-range-label{margin-right:44px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.wrapper .page-range .page-range-actions{user-select:none}mwc-icon-button{color:var(--mdc-theme-primary)}mwc-icon-button[disabled]{color:var(--exmg-theme-table-on-surface-disabled, var(--mdc-theme-disabled, rgba(2, 24, 43, 0.38)))}@media(max-width: 600px){.page-size-label{display:none}}@media(max-width: 500px){.wrapper .page-size{display:none}}@media(max-width: 450px){.wrapper{overflow-x:auto;white-space:nowrap}.wrapper .page-range{min-width:1px}}`;let g=class extends a{constructor(){super(...arguments),this.pageSizeLabel="Rows per page:",this.pageSizeOptions=[10,20,30],this.pageSize=this.pageSizeOptions[0],this.pageIndex=0,this.itemCount=0}renderPageSizeLabel(){return n` ${this.pageSizeLabel} `}renderPageSizeOptions(){return n`
      <exmg-grid-toolbar-combobox
        id="pageSizeOptions"
        attr-for-selected="data-id"
        selected="${this.pageSize}"
        @exmg-combobox-select="${this.handleOnPageSizeChanged}"
        style="display: inline-block;min-width: 0;"
      >
        ${i(this.pageSizeOptions,(e=>e),(e=>n` <paper-item data-id="${e}">${e}</paper-item> `))}
      </exmg-grid-toolbar-combobox>
    `}renderPageRangeLabel(){return this.itemCount>0?n`
        <span>
          ${this.pageIndex*this.pageSize+1}- ${Math.min((this.pageIndex+1)*this.pageSize,this.itemCount)} of
          ${this.itemCount}
        </span>
      `:n` <span>${this.pageIndex*this.pageSize+1}-${(this.pageIndex+1)*this.pageSize}</span> `}renderPageRangeActions(){return n` ${this.renderPrevPage()} ${this.renderNextPage()} `}renderPrevPage(){const e=this.pageIndex>0;return n`
      <mwc-icon-button
        icon="navigate_before"
        id="prevPageBtn"
        ?disabled="${!e}"
        class="actions"
        title="Previous page"
        @click="${e?this.handleOnClickPrev:void 0}"
      ></mwc-icon-button>
    `}renderNextPage(){const e=this.itemCount&&this.itemCount>(this.pageIndex+1)*this.pageSize;return n`
      <mwc-icon-button
        icon="navigate_next"
        id="nextPageBtn"
        ?disabled="${!e}"
        class="actions"
        title="Next page"
        @click="${e?this.handleOnClickNext:void 0}"
      ></mwc-icon-button>
    `}fireEventPageChanged(e){this.dispatchEvent(new CustomEvent("exmg-grid-pagination-page-changed",{bubbles:!0,composed:!0,detail:{page:e}}))}handleOnClickPrev(e){return e.preventDefault(),this.pageIndex=this.pageIndex-1,this.fireEventPageChanged(this.pageIndex),!1}handleOnClickNext(e){return e.preventDefault(),this.pageIndex=this.pageIndex+1,this.fireEventPageChanged(this.pageIndex),!1}handleOnPageSizeChanged(e){const{value:t}=e.detail;void 0!==t&&(this.pageSize=parseInt(t,10),this.pageIndex=0,this.dispatchEvent(new CustomEvent("exmg-grid-pagination-page-size-changed",{bubbles:!0,composed:!0,detail:{pageSize:this.pageSize,page:this.pageIndex}})))}render(){return n`
      <style>
        :host {
          --paper-item-focused: {
            background-color: var(
              --exmg-theme-table-toolbar-filter-item-active-bg-color,
              var(--exmg-theme-table-on-surface-low, var(--mdc-theme-surface))
            );
          }
          --paper-item-selected: {
            background-color: var(
              --exmg-theme-table-toolbar-filter-item-active-bg-color,
              var(--exmg-theme-table-on-surface-low, var(--mdc-theme-surface))
            );
          }
          --paper-button-ink-color: var(
            --exmg-theme-table-toolbar-filter-item-active-bg-color,
            var(--mdc-theme-surface)
          );

          --exmg-paper-combobox-selected-item-color: var(
            --exmg-theme-table-pagination-color,
            var(--mdc-theme-on-surface)
          );
          --exmg-paper-combobox-selected-item-bg-color: var(--exmg-theme-table-pagination-bg-color, transparent);
          --exmg-paper-combobox-dropdown-button-color: var(
            --exmg-theme-table-pagination-color,
            var(--mdc-theme-on-surface)
          );
          --exmg-paper-combobox-dropdown-button-bg-color: var(--exmg-theme-table-pagination-bg-color, transparent);
          --exmg-paper-combobox-dropdown-list-color: var(
            --exmg-theme-table-pagination-color,
            var(--mdc-theme-on-surface)
          );
          --exmg-paper-combobox-dropdown-list-bg-color: var(
            --exmg-theme-table-pagination-bg-color,
            var(--mdc-theme-surface)
          );

          exmg-grid-toolbar-combobox {
            --exmg-paper-combobox-background-color: var(--exmg-theme-table-pagination-bg-color);
          }
        }
      </style>
      <div class="wrapper">
        <div class="page-size">
          <div class="page-size-label">${this.renderPageSizeLabel()}</div>
          <div class="page-size-options">${this.renderPageSizeOptions()}</div>
        </div>
        <div class="page-range">
          <div class="page-range-label">${this.renderPageRangeLabel()}</div>
          <div class="page-range-actions">${this.renderPageRangeActions()}</div>
        </div>
        <div></div>
      </div>
    `}};g.styles=[p],e([t({type:String,attribute:"page-size-label"})],g.prototype,"pageSizeLabel",void 0),e([t({type:Array,attribute:"page-size-options"})],g.prototype,"pageSizeOptions",void 0),e([t({type:Number,attribute:"page-size"})],g.prototype,"pageSize",void 0),e([t({type:Number,attribute:"page-index"})],g.prototype,"pageIndex",void 0),e([t({type:Number,attribute:"item-count"})],g.prototype,"itemCount",void 0),g=e([o("exmg-grid-pagination")],g);
