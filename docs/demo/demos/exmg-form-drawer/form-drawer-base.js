import{_ as t,e}from"../exmg-form-drawer-d21b21bf.js";import{x as o}from"../lit-element-775ec931.js";import{style as s}from"./form-drawer-base-styles.js";import{BaseElement as r}from"./base-element.js";const i=t=>(e,o)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,o)=>e.constructor._observers.set(o,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const o=this.constructor._observers.get(e);void 0!==o&&o.call(this,this[e],t)}))}}e.constructor._observers.set(o,t)};class n extends r{constructor(){super(...arguments),this.opened=!1,this.updateTitle="Update",this.addTitle="Add",this.updateButton="Update",this.addButton="Add"}_handleFormDrawerToggle(t){this.opened=t.detail.value,this.openChanged&&this.openChanged(this.opened)}open(t){this.item=t||null,this.opened=!0}close(){this.opened=!1}renderDrawer(t){return o`
      <exmg-form-drawer
        autofocus-on-open
        no-cancel-on-outside-click
        ?opened="${this.opened}"
        reset-form-on-submit-success
        scroll-action="lock"
        @exmg-drawer-opened-changed="${this._handleFormDrawerToggle}"
        submit-btn-title=${this.item?this.updateButton:this.addButton}
        @submit=${this.item?this.updateItem:this.createItem}
      >
        ${this.item?o` <span slot="title">${this.updateTitle}</span> `:o` <span slot="title">${this.addTitle}</span> `}
        ${this.opened?t:o``}
      </exmg-form-drawer>
    `}}n.styles=[s],t([e({type:Object}),i((function(t,e){t.itemChanged&&t.itemChanged(e)}))],n.prototype,"item",void 0),t([e({type:Boolean})],n.prototype,"opened",void 0),t([e({type:String,attribute:"update-title"})],n.prototype,"updateTitle",void 0),t([e({type:String,attribute:"add-title"})],n.prototype,"addTitle",void 0),t([e({type:String,attribute:"update-button"})],n.prototype,"updateButton",void 0),t([e({type:String,attribute:"add-button"})],n.prototype,"addButton",void 0);export{n as FormDrawerBase,i as observer};
