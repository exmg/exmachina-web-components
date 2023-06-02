import{_ as t,t as o,b as e,E as r,e as a}from"./exmg-grid-toolbar-combobox-baa33540.js";import{i,x as s}from"./lit-element-88bb347a.js";const l=i`:host{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-font-family, Roboto, sans-serif);--toolbar-bg-color: var(--exmg-theme-table-toolbar-background-color, #ffffff);--toolbar-color: var(--exmg-theme-table-toolbar-color, #02182b);background-color:var(--toolbar-bg-color);color:var(--toolbar-color);border-radius:var(--exmg-theme-table-toolbar-border-top-radius, 0) var(--exmg-theme-table-toolbar-border-top-radius, 0) var(--exmg-theme-table-toolbar-border-bottom-radius, 0) var(--exmg-theme-table-toolbar-border-bottom-radius, 0)}.wrapper{display:flex;flex:1;flex-direction:row;align-items:center;padding:10px 16px 10px 0;overflow-x:var(--exmg-theme-table-toolbar-overflow-x, initial);white-space:nowrap}.wrapper.active{--active-toolbar-bg-color: var(--exmg-theme-table-toolbar-active-bg-color);--active-toolbar-color: var(--exmg-theme-table-toolbar-active-color, #000000);background-color:var(--active-toolbar-bg-color);color:var(--active-toolbar-color)}.wrapper.active .seperator.with-action-separator{border-left:1px solid var(--active-toolbar-color)}.wrapper.active .description{color:var(--active-toolbar-color);flex:1}.wrapper .seperator{min-height:32px}.wrapper .seperator.with-action-separator{border-left:1px solid var(--active-toolbar-color)}.wrapper .description{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit);color:var(--toolbar-color);padding:0 16px;height:48px;flex:1}.actions{padding:0 16px 0 16px;color:var(--mdc-theme-primary)}.filters{display:flex;flex-direction:row;justify-content:flex-end}.settings{display:flex;flex-direction:row;justify-content:flex-end}@media(max-width: 500px){.wrapper .description{display:none}}`;let n=class extends r{constructor(){super(...arguments),this.actionsCount=0,this.settingsCount=0,this.active=!1,this.disableSeperator=!1}getChildElementCount(t){const o=this.querySelector(t);return o?o.childElementCount:0}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver((t=>{setTimeout((()=>{for(const o of t)"childList"===o.type&&(this.actionsCount=this.getChildElementCount("div[slot=actions]"),this.settingsCount=this.getChildElementCount("div[slot=settings]"),this.active=this.actionsCount>0)}),60)})),this.actionsCount=this.getChildElementCount("div[slot=actions]"),this.settingsCount=this.getChildElementCount("div[slot=settings]"),this.active=this.actionsCount>0,this.observer.observe(this,{attributes:!1,childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}render(){return s`
      <div class="wrapper ${this.active?"active":""}">
        ${this.actionsCount>0?s`
              <div class="actions">
                <slot name="actions"></slot>
              </div>
            `:""}
        <div class="seperator ${this.actionsCount>0&&!this.disableSeperator?"with-action-separator":""}">
          &nbsp;
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
        <div class="filters">
          <slot name="filters"></slot>
        </div>
        <div class="settings ${this.settingsCount>0?"has-settings":""}">
          <slot name="settings"></slot>
        </div>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    `}};n.styles=[l],t([o()],n.prototype,"actionsCount",void 0),t([o()],n.prototype,"settingsCount",void 0),t([o()],n.prototype,"active",void 0),t([e({type:Boolean})],n.prototype,"disableSeperator",void 0),n=t([a("exmg-grid-base-toolbar")],n);
