import{_ as t,t as e,c as i,e as o}from"../exmg-grid-toolbar-combobox-baa33540.js";import{s as c,x as a}from"../lit-element-88bb347a.js";import"../exmg-grid-base-toolbar-c8af6158.js";let r=class extends c{constructor(){super(...arguments),this.actions=[{id:"export",text:"",tooltip:"Export",icon:"get_app"},{id:"merge",text:"",tooltip:"Merge",icon:"merge_type"},{id:"delete",text:"",tooltip:"Delete",icon:"delete"}],this.description="Table 1",this.filters=[{id:"status",name:"Status",config:{data:[{id:"active",title:"Active"},{id:"inactive",title:"Inactive"},{id:"archived",title:"Archived"}]},selected:"active"}]}onActionExecuted(t){return t=>{}}onFilterChanged(t){return t=>{}}removeOneAction(){this.actions.shift(),this.actions=[...this.actions]}render(){return a`
      <style>
        :host {
          --mdc-theme-primary: #0071dc;
          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <h1>With actions</h1>
      <button @click=${this.removeOneAction}>Remove one action</button>
      <hr />
      <exmg-grid-base-toolbar>
        <div slot="actions">
          ${i(this.actions,(t=>a`
              <mwc-icon-button
                class="action"
                icon="${t.icon}"
                label="${t.text}"
                title="${t.tooltip}"
                @click="${this.onActionExecuted(t)}"
              ></mwc-icon-button>
            `))}
        </div>
        <div slot="description">${this.description}</div>
        <div slot="filters">
          ${i(this.filters,(t=>a`
              <exmg-grid-toolbar-combobox
                id="pageSizeOptions"
                attr-for-selected="data-id"
                selected="${t.selected}"
                @exmg-combobox-select="${this.onFilterChanged(t)}"
              >
                ${i(t.config.data,(t=>t),(e=>a` <paper-item data-id="${e.id}">${t.name}: ${e.title}</paper-item> `))}
              </exmg-grid-toolbar-combobox>
            `))}
        </div>
      </exmg-grid-base-toolbar>
    `}};t([e()],r.prototype,"actions",void 0),r=t([o("exmg-grid-base-toolbar-demo")],r);export{r as ExmgGridBaseToolbarDemo};
