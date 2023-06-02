import{_ as t,e}from"../exmg-grid-toolbar-combobox-baa33540.js";import{s as i,x as o}from"../lit-element-88bb347a.js";import{F as r}from"../exmg-grid-toolbar-c5491d70.js";import"../exmg-grid-base-toolbar-c8af6158.js";let d=class extends i{constructor(){super(...arguments),this.actions=[{id:"export",text:"",tooltip:"Export",icon:"get_app"},{id:"merge",text:"",tooltip:"Merge",icon:"merge_type"},{id:"delete",text:"",tooltip:"Delete",icon:"delete"}],this.description="Table 1",this.filters=[{id:"status",name:"Status",config:{type:r.SingleSelect,data:[{id:"active",title:"Active"},{id:"inactive",title:"Inactive"},{id:"archived",title:"Archived"}]}}]}onActionExecuted(){}onFilterChanged(){}render(){return o`
      <style>
        :host {
          --mdc-theme-primary: #0071dc;

          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <h1>With actions</h1>
      <exmg-grid-toolbar
        .actions="${this.actions}"
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
      <h1>Without actions</h1>
      <exmg-grid-toolbar
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
      <h1>Without actions with search</h1>
      <exmg-grid-toolbar
        searchEnabled
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
    `}};d=t([e("exmg-grid-toolbar-demo")],d);export{d as ExmgGridToolbarDemo};
