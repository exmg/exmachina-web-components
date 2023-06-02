import{_ as e,i as r,b as t}from"../exmg-form-drawer-d21b21bf.js";import{s as a,x as s}from"../lit-element-775ec931.js";import"./user-update-drawer.js";import"../exmg-markdown-editor-4b80a91a.js";import"../paper-input-9a5ebbc3.js";import"./form-drawer-base.js";import"./form-drawer-base-styles.js";import"./base-element.js";let o=class extends a{render(){return s`
        <exmg-button
          @click=${()=>this.userDrawer.open({from:"1111",fromName:"222222",replyTo:"33333",subject:"4444",contentHtml:"5555",contentPlain:"6666"})}
          >Open User Drawer</exmg-button
        >
      </div>

      <user-update-drawer id="userDrawer"></user-update-drawer>
    `}};e([r("#userDrawer")],o.prototype,"userDrawer",void 0),o=e([t("exmg-base-drawer-demo")],o);export{o as BaseDrawer};
