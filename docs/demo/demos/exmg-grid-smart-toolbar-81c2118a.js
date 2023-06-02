import{_ as t,b as e,E as o,e as i}from"./exmg-grid-toolbar-combobox-baa33540.js";import{i as s,x as r}from"./lit-element-88bb347a.js";import{S as l,a as n}from"./exmg-grid-toolbar-c5491d70.js";var a;!function(t){t.AmountOfSelectedItemsRange="amount_of_items_range"}(a||(a={}));let c=class extends o{constructor(){super(...arguments),this.description="",this.actions=[],this.filters=[],this.settings=[],this.amountOfSelectedItems=0,this.showColumnFilter=!1,this.columnFilterButtonTooltip="Column selection",this.columnFilterDialogTitle="Select columns",this.columnFilterColumns=[],this.searchEnabled=!1,this.searchPlaceholder="Search",this.disableSeperator=!1}getActions(){return this.actions.filter((t=>this.shouldActionBeVisible(t)))}shouldActionBeVisible(t){return!this.isActionAmountSelectedItemsCondition(t)||this.checkAmountOfSelectedItemsRangeCondition(t)}isActionAmountSelectedItemsCondition(t){return!!t.condition&&t.condition.type===a.AmountOfSelectedItemsRange}checkAmountOfSelectedItemsRangeCondition(t){const e=t.condition,o=e.min;if(void 0!==o&&this.amountOfSelectedItems<o)return!1;const i=e.max;return!(void 0!==i&&this.amountOfSelectedItems>i)}getFilters(){return this.filters.map((t=>Object.assign(Object.assign({},t),{disabled:this.amountOfSelectedItems>0})))}getSettings(){return this.showColumnFilter?[{id:l.ColumnSelector,dialogTitle:this.columnFilterDialogTitle,tooltip:this.columnFilterButtonTooltip,icon:"filter_list",config:{type:n.SelectionList,data:this.columnFilterColumns}}]:[]}render(){return r`
      <exmg-grid-toolbar
        searchPlaceholder=${this.searchPlaceholder}
        .searchEnabled=${this.searchEnabled}
        .actions="${this.getActions()}"
        description="${this.description}"
        .filters="${this.getFilters()}"
        .settings="${this.getSettings()}"
        ?disableSeperator=${this.disableSeperator}
      >
        <slot name="extra" slot="extra"></slot>
      </exmg-grid-toolbar>
    `}};c.styles=[s`
      :host {
        display: block;
      }
    `],t([e({type:String})],c.prototype,"description",void 0),t([e({type:Array})],c.prototype,"actions",void 0),t([e({type:Array})],c.prototype,"filters",void 0),t([e({type:Array})],c.prototype,"settings",void 0),t([e({type:Number,attribute:"amount-of-selected-items"})],c.prototype,"amountOfSelectedItems",void 0),t([e({type:Boolean,attribute:"show-column-filter"})],c.prototype,"showColumnFilter",void 0),t([e({type:String,attribute:"column-filter-button-tooltip"})],c.prototype,"columnFilterButtonTooltip",void 0),t([e({type:String,attribute:"column-filter-dialog-title"})],c.prototype,"columnFilterDialogTitle",void 0),t([e({type:Array,attribute:"column-filter-columns"})],c.prototype,"columnFilterColumns",void 0),t([e({type:Boolean})],c.prototype,"searchEnabled",void 0),t([e({type:String})],c.prototype,"searchPlaceholder",void 0),t([e({type:Boolean})],c.prototype,"disableSeperator",void 0),c=t([i("exmg-grid-smart-toolbar")],c);export{a as A};
