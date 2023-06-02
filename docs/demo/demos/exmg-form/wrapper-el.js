import{_ as e,s as t,x as o,e as s,a as r}from"../query-assigned-elements-3c47ed19.js";import"../exmg-form-6b163fa7.js";let a=class extends t{constructor(){super(...arguments),this.selectedValue=""}render(){return o`
      <exmg-form @submit="${this.onSubmit}" @cancel="${this.onCancel}" disable-submit-no-changes>
        <slot></slot>
      </exmg-form>
    `}_addInputElement(){const e=document.createElement("input");e.type="text",e.name="test33",e.value="tes111",this.shadowRoot.querySelector("exmg-form").appendChild(e)}onSubmit(){setTimeout((()=>{this.resetForm1()}),1500)}onCancel(e){}validateForm1(){this.shadowRoot.querySelector("#form1").validate()}resetForm1(){this.shadowRoot.querySelector("#form1").reset()}};e([s({type:String})],a.prototype,"selectedValue",void 0),a=e([r("wrapper-el")],a);export{a as WrapperEl};
