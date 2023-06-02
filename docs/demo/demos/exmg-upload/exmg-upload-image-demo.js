import{i as t,_ as e,a as i,s as o,x as r,e as s,E as n,D as a,t as l}from"../gestures-5d82c3ec.js";import{P as d,l as h,t as c,o as m,i as p,a as u}from"../exmg-upload-dialog-6ad0cc09.js";import{ifDefined as g}from"lit/directives/if-defined";import"./file-image-upload-form.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const b={properties:{animationTiming:{type:Object,value:function(){return{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"both"}}}},isNeonAnimation:!0,created:function(){document.body.animate||console.warn("No web animations detected. This element will not function without a web animations polyfill.")},timingFromConfig:function(t){if(t.timing)for(var e in t.timing)this.animationTiming[e]=t.timing[e];return this.animationTiming},setPrefixedProperty:function(t,e,i){for(var o,r={transform:["webkitTransform"],transformOrigin:["mozTransformOrigin","webkitTransformOrigin"]}[e],s=0;o=r[s];s++)t.style[o]=i;t.style[e]=i},complete:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/d({is:"slide-from-right-animation",behaviors:[b],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"translateX(100%)"},{transform:"none"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}}),
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
d({is:"slide-right-animation",behaviors:[b],configure:function(t){var e=t.node;return this._effect=new KeyframeEffect(e,[{transform:"none"},{transform:"translateX(100%)"}],this.timingFromConfig(t)),t.transformOrigin?this.setPrefixedProperty(e,"transformOrigin",t.transformOrigin):this.setPrefixedProperty(e,"transformOrigin","0 50%"),this._effect}});const f=t`:host paper-dialog{margin:0;padding:0;position:fixed;top:0;right:0;bottom:0;width:100%;box-shadow:none;overflow:scroll;color:var(--exmg-drawer-color, var(--mdc-theme-on-surface, #02182b));background-color:var(--exmg-drawer-bg-color, var(--mdc-theme-surface, #ffffff))}`;let y=class extends o{constructor(){super(...arguments),this.opened=!1,this.noCancelOnOutsideClick=!1}handleOpenedChanged(t){this.opened=t.detail.value,this.dispatchEvent(new CustomEvent("exmg-drawer-opened-changed",{bubbles:!0,composed:!0,detail:{value:t.detail.value}}))}openDialog(){this.opened=!0}render(){return r`
      <style>
        paper-dialog {
          max-width: var(--exmg-drawer-max-width, ${this.style.maxWidth||"547px"});
        }
      </style>
      <paper-dialog
        scroll-action=${h(this.scrollAction)}
        ?opened="${this.opened}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        @opened-changed="${this.handleOpenedChanged}"
        entry-animation="slide-from-right-animation"
        exit-animation="slide-right-animation"
        with-backdrop
      >
        <slot></slot>
      </paper-dialog>
    `}};y.styles=[f],e([i({type:Boolean})],y.prototype,"opened",void 0),e([i({type:Boolean,attribute:"no-cancel-on-outside-click"})],y.prototype,"noCancelOnOutsideClick",void 0),e([i({type:String,attribute:"scroll-action"})],y.prototype,"scrollAction",void 0),y=e([s("exmg-drawer")],y);const v=t`:host{display:flex;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-font-family, Roboto, sans-serif)}:host .header{display:flex;flex-direction:row;align-items:center;margin:0;padding:20px;border-bottom:1px solid var(--exmg-form-drawer-header-separator-color, var(--mdc-theme-on-surface, rgba(2, 24, 43, 0.1)))}:host .header .title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit)}:host .header .header-buttons{display:flex;flex-direction:row;flex:1;justify-content:flex-end}:host .header .header-buttons exmg-button{margin-left:20px}:host .form-elements{padding:0 20px}:host(:not([disable-sticky-header])) .header{position:sticky;top:0;background:var(--exmg-drawer-bg-color, var(--mdc-theme-surface, #ffffff));z-index:1}`,x=r`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
  </svg>
`;class w extends n{constructor(){super(...arguments),this.hideSubmitButton=!1,this.hideResetButton=!1,this.submitButtonCopy="Submit",this.resetButtonCopy="Reset",this.disableSubmitNoChanges=!1,this.dirty=!1,this.bubbles=!1,this.errorMessage="",this.submitting=!1,this._defaults=new WeakMap}get isDirty(){return this.dirty}done(){this.submitting=!1}addInput(t,e=!1){if(!this._defaults.has(t)||e){const e={value:void 0===t.value||null===t.value?"":t.value};("_hasIronCheckedElementBehavior"in t||t.type&&"checkbox"===t.type)&&(e.checked=t.checked),this._defaults.set(t,e)}}saveDefaults(t=!1){const e=Array.from(this.querySelectorAll("*")||[]).filter((t=>!!t.name));for(let i=0;i<e.length;i++){const o=e[i];this.addInput(o,t)}}firstUpdated(){this.saveDefaults()}error(t){this.submitting=!1,this.errorMessage=t}handleError(t){this.submitting=!1,this.errorMessage=t}submit(){this.ironFormElem&&this.ironFormElem.validate()&&(this.submitting=!0,this.errorMessage="",this.dispatchEvent(new CustomEvent("submit",{bubbles:this.bubbles,composed:!0,detail:this.ironFormElem.serializeForm()})))}validate(){return this.ironFormElem&&this.ironFormElem.validate()}resetRegisteredCustomElements(){this.getResetRegisteredElements(this).forEach((t=>t.reset()))}_isRegisteredForSubmitElement(t){return!t.disabled&&t.hasAttribute("register-for-reset")}_searchSubmittable(t,e){this._isRegisteredForSubmitElement(e)?t.push(e):e.root&&this.getResetRegisteredElements(e.root,t)}_searchSubmittableInSlot(t,e){const i=e.assignedNodes();for(let e=0;e<i.length;e++){if(i[e].nodeType===Node.TEXT_NODE)continue;this._searchSubmittable(t,i[e]);const o=i[e].querySelectorAll("*");for(let e=0;e<o.length;e++)this._searchSubmittable(t,o[e])}}getResetRegisteredElements(t,e=[]){const i=t.querySelectorAll("*");for(let t=0;t<i.length;t++){const o=i[t];"slot"===o.localName||"content"===o.localName?this._searchSubmittableInSlot(e,o):this._searchSubmittable(e,o)}return e}reset(){this.ironFormElem&&this.ironFormElem.reset(),this.resetRegisteredCustomElements(),this.submitting=!1,this.errorMessage="",this.dispatchEvent(new CustomEvent("form-reset",{bubbles:this.bubbles,composed:!0})),this.checkDirty()}serializeForm(){return this.ironFormElem&&this.ironFormElem.serializeForm()}_onSubmitBtnClick(){this.submit()}onResetBtnClick(){this.reset()}checkDirty(){this._debouncer=a.debounce(this._debouncer,l.after(200),(()=>{let t=!1;const e=Array.from(this.querySelectorAll("*")||[]).filter((t=>!!t.name&&!t.disabled));try{for(const i of e){const e=this._defaults.get(i);if(!e)throw Error("Unable to check dirty due to missing default");if("EXMG-PAPER-TOKEN-INPUT"===i.tagName){if(!Array.isArray(i.value)||!Array.isArray(e.value))throw Error("Expected value of token input not an array");e.value.sort().join(",")!==[...i.value].sort().join(",")&&(t=!0)}else("checked"in e&&e.checked!==i.checked||e.value!==(void 0===i.value||null===i.value?"":i.value))&&(t=!0)}}catch(t){console.warn(t)}finally{this.dirty=t}}))}_onKeyUp(t){switch(t.code||t.keyCode){case 13:case"Enter":case"NumpadEnter":t.stopPropagation(),this.submit();break;default:this.checkDirty()}}connectedCallback(){super.connectedCallback();this.observer=new MutationObserver((t=>{for(const e of t)"childList"===e.type&&e.addedNodes.forEach((t=>{t.name&&this.addInput(t)}))})),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("change",this._handleOnChange)}disconnectedCallback(){this.removeEventListener("keyup",this._onKeyUp),this.removeEventListener("change",this._handleOnChange),this.observer&&this.observer.disconnect(),super.disconnectedCallback()}_handleOnChange(){this.checkDirty()}_renderResetButton(){return this.hideResetButton?"":r` <exmg-button class="reset" @click="${this.onResetBtnClick}">${this.resetButtonCopy}</exmg-button> `}renderSubmitButton(){return this.hideSubmitButton?"":r`
          <exmg-button
            unelevated
            @click="${this._onSubmitBtnClick}"
            ?disabled="${this.submitting||this.disableSubmitNoChanges&&!this.dirty}"
            ?loading=${this.submitting}
            >${this.submitButtonCopy}</exmg-button
          >
        `}renderActions(){return this.hideSubmitButton&&this.hideResetButton?"":r` <div class="actions">${this._renderResetButton()} ${this.renderSubmitButton()}</div> `}render(){const t={showError:!!this.errorMessage};return r`
      <div class="error ${u(t)}">
        <span class="body">
          <span class="body-content">
            ${x}
            <span class="msg">${this.errorMessage}</span>
          </span>
        </span>
      </div>
      <iron-form id="ironForm">
        <form id="form">
          <slot></slot>
        </form>
      </iron-form>
      ${this.renderActions()}
    `}}e([i({type:Boolean,attribute:"hide-submit-button"})],w.prototype,"hideSubmitButton",void 0),e([i({type:Boolean,attribute:"hide-reset-button"})],w.prototype,"hideResetButton",void 0),e([i({type:String,attribute:"submit-button-copy"})],w.prototype,"submitButtonCopy",void 0),e([i({type:String,attribute:"reset-button-copy"})],w.prototype,"resetButtonCopy",void 0),e([i({type:Boolean,reflect:!0,attribute:"disable-submit-no-changes"})],w.prototype,"disableSubmitNoChanges",void 0),e([c(),m((function(t){this.dispatchEvent(new CustomEvent("dirty-change",{bubbles:this.bubbles,composed:!0,detail:{dirty:t}}))}))],w.prototype,"dirty",void 0),e([i({type:Boolean})],w.prototype,"bubbles",void 0),e([c()],w.prototype,"errorMessage",void 0),e([c()],w.prototype,"submitting",void 0),e([p("#ironForm")],w.prototype,"ironFormElem",void 0);const C=t`:host{font-family:"Roboto","Noto",sans-serif}:host iron-form,:host form{height:var(--exmg-form-internal-height, auto);padding-right:var(--exmg-form-internal-padding-right, 0rem);overflow-y:auto}.actions{margin:1rem 0 0;text-align:right;padding-right:var(--exmg-form-actions-padding-right, 0rem);padding-bottom:var(--exmg-form-actions-padding-bottom, 0rem)}.actions .reset{margin-right:.5rem}.error{display:none;font-size:.875rem;line-height:1.25rem;color:rgba(0,0,0,.54);-webkit-box-flex:0 0 auto;-webkit-flex:0 0 auto;flex:0 0 auto;padding:0}.error>.body{background-color:#fbe9e7;color:#ff5252;display:flex;flex-direction:row;flex-wrap:wrap;padding:0 0 0 1.5rem;margin:0 0 .75rem;min-height:3rem}.error>.body>.body-content{margin-right:1.5rem;position:relative;line-height:1.5rem;font-size:.875rem;white-space:normal;font-weight:500;vertical-align:middle;fill:#ff5252;display:flex;flex:1;align-items:center}.error>.body>.body-content>svg{margin-right:.75rem}.error.showError{display:block}`;let k=class extends w{};k.styles=[C],k=e([s("exmg-form")],k);let S=class extends o{constructor(){super(...arguments),this.opened=!1,this.submitBtnTitle="Submit",this.submitBtnHidden=!1,this.cancelBtnTitle="Cancel",this.keepOpenedOnSubmitSuccess=!1,this.resetFormOnSubmitSuccess=!1,this.autofocusOnOpen=!1,this.noCancelOnOutsideClick=!1,this.disableStickyHeader=!1,this.submitting=!1}done(){this.submitting=!1,this.keepOpenedOnSubmitSuccess||(this.opened=!1),this.resetFormOnSubmitSuccess&&this.form.reset(),this.form.done()}close(){this.opened=!1}submit(){this.form&&this.form.validate()&&this.form.submit()}validate(){this.form&&this.form.validate()}serializeForm(){if(this.form)return this.form.serializeForm()}reset(){this.form&&this.form.reset(),this.submitting=!1}error(t){this.submitting=!1,this.form.error(t)}handleError(t){this.submitting=!1,this.form.error(t)}_handleOpenChanged(t){setTimeout((()=>{if(t.detail.value&&this.autofocusOnOpen){const t=this.querySelector("*[name]");t&&t.focus()}}),150)}handleSubmitBtnClick(){this.form.submit()}handleCancelBtnClick(){this.form.reset(),this.close()}render(){return r`
      <exmg-drawer
        ?opened="${this.opened}"
        ?no-cancel-on-outside-click="${this.noCancelOnOutsideClick}"
        scroll-action=${h(this.scrollAction)}
        @exmg-drawer-opened-changed=${this._handleOpenChanged}
        style="max-width: ${this.style.maxWidth||"547px"}"
      >
        <div class="header">
          <slot name="title" class="title"></slot>
          <div class="header-buttons">
            <exmg-button title="${this.cancelBtnTitle}" @click="${this.handleCancelBtnClick}">
              ${this.cancelBtnTitle}
            </exmg-button>
            ${this.submitBtnHidden?"":r`
                  <exmg-button
                    unelevated
                    ?loading="${this.submitting}"
                    ?disabled="${this.submitting}"
                    title="${this.submitBtnTitle}"
                    @click="${this.handleSubmitBtnClick}"
                  >
                    ${this.submitBtnTitle}
                  </exmg-button>
                `}
          </div>
        </div>
        <div class="form-elements">
          <exmg-form @submit="${()=>this.submitting=!0}" hide-submit-button hide-reset-button bubbles>
            <slot></slot>
          </exmg-form>
        </div>
      </exmg-drawer>
    `}};S.styles=[v],e([i({type:Boolean})],S.prototype,"opened",void 0),e([i({type:String,attribute:"submit-btn-title"})],S.prototype,"submitBtnTitle",void 0),e([i({type:Boolean,attribute:"submit-btn-hidden"})],S.prototype,"submitBtnHidden",void 0),e([i({type:String,attribute:"cancel-btn-title"})],S.prototype,"cancelBtnTitle",void 0),e([i({type:Boolean,attribute:"keep-opened-on-submit-success"})],S.prototype,"keepOpenedOnSubmitSuccess",void 0),e([i({type:Boolean,attribute:"reset-form-on-submit-success"})],S.prototype,"resetFormOnSubmitSuccess",void 0),e([i({type:Boolean,attribute:"autofocus-on-open"})],S.prototype,"autofocusOnOpen",void 0),e([i({type:Boolean,attribute:"no-cancel-on-outside-click"})],S.prototype,"noCancelOnOutsideClick",void 0),e([i({type:Boolean,attribute:"disable-sticky-header"})],S.prototype,"disableStickyHeader",void 0),e([i({type:Boolean,reflect:!0})],S.prototype,"submitting",void 0),e([i({type:String,attribute:"scroll-action"})],S.prototype,"scrollAction",void 0),e([p("exmg-form")],S.prototype,"form",void 0),S=e([s("exmg-form-drawer")],S);const B=t`
  .description {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
    display: block;
    margin-right: 4rem;
    margin-top: 0.4rem;
  }

  .horizontal {
    display: flex;
    flex-direction: row;
  }

  .horizontal > *:not(:first-child) {
    margin-left: 0.5rem;
  }

  .horizontal > * {
    flex: 1;
  }

  paper-input {
    min-width: 160px;
  }

  paper-checkbox {
    margin-top: 1rem;
    display: block;
  }

  section {
    margin-bottom: 1.2rem;
  }
`;class E extends o{constructor(){super(...arguments),this.bubbles=!1}fire(t,e,i){this.dispatchEvent(new CustomEvent(t,{bubbles:i||this.bubbles,composed:!0,detail:e}))}}const O=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)};class $ extends E{constructor(){super(...arguments),this.opened=!1,this.updateTitle="Update",this.addTitle="Add",this.updateButton="Update",this.addButton="Add"}_handleFormDrawerToggle(t){this.opened=t.detail.value,this.openChanged&&this.openChanged(this.opened)}open(t){this.item=t||null,this.opened=!0}close(){this.opened=!1}renderDrawer(t){return r`
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
        ${this.item?r` <span slot="title">${this.updateTitle}</span> `:r` <span slot="title">${this.addTitle}</span> `}
        ${this.opened?t:r``}
      </exmg-form-drawer>
    `}}$.styles=[B],e([i({type:Object}),O((function(t,e){t.itemChanged&&t.itemChanged(e)}))],$.prototype,"item",void 0),e([i({type:Boolean})],$.prototype,"opened",void 0),e([i({type:String,attribute:"update-title"})],$.prototype,"updateTitle",void 0),e([i({type:String,attribute:"add-title"})],$.prototype,"addTitle",void 0),e([i({type:String,attribute:"update-button"})],$.prototype,"updateButton",void 0),e([i({type:String,attribute:"add-button"})],$.prototype,"addButton",void 0);window.uploadDefaults={headers:{"Allow-Access-Control-Origin":"*"}};let _=class extends o{constructor(){super(...arguments),this.accept=".png,.jpg,.jpeg",this.maxSize="256kb",this.fixedResolution="1200x677",this.allowCropping=!0,this.aspectRatio="16/9",this.cropperConfig={}}_handlePropertyChange(t){const{name:e,value:i}=t.detail;this[e]=i}render(){return r`
      <exmg-upload
        fixedResolution=${g(this.fixedResolution)}
        aspectRatio=${g(this.aspectRatio)}
        accept=${g(this.accept)}
        ?allowCropping=${this.allowCropping}
        maxSize=${this.maxSize}
        multiple
        serverType="local"
        .cropperConfig=${this.cropperConfig}
      >
      </exmg-upload>

      <file-image-upload-form
        accept=${g(this.accept)}
        maxSize=${this.maxSize}
        fixedResolution=${g(this.fixedResolution)}
        aspectRatio=${g(this.aspectRatio)}
        ?allowCropping=${this.allowCropping}
        @property-changed=${this._handlePropertyChange}
      ></file-image-upload-form>
    `}};_.styles=[t`
      :host {
        display: block;
      }
    `],e([p("exmg-upload")],_.prototype,"upload",void 0),e([i({type:String})],_.prototype,"accept",void 0),e([i({type:String})],_.prototype,"maxSize",void 0),e([i({type:String})],_.prototype,"fixedResolution",void 0),e([i({type:Boolean})],_.prototype,"allowCropping",void 0),e([i({type:String}),O((function(t){const e=(t=>{const e=t.split("/");if(2!==e.length)return null;const i=parseInt(e[0],10),o=parseInt(e[1],10);return isNaN(i)||isNaN(o)||0===o?null:i/o})(t);this.cropperConfig=e?{aspectRatio:e}:{}}))],_.prototype,"aspectRatio",void 0),e([i({type:Number})],_.prototype,"cropperConfig",void 0),_=e([s("exmg-upload-image-demo")],_);export{_ as ExmgUploadImageDemo};
