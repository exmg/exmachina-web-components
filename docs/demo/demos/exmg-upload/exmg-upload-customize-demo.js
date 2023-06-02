import{i as e,_ as o,s as l,x as d,e as t}from"../gestures-5d82c3ec.js";import"../exmg-upload-dialog-6ad0cc09.js";let a=class extends l{render(){return d` <exmg-upload maxSize="1mb" maxAmount="2" multiple serverType="local">
      <div slot="drop-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"
          />
        </svg>
      </div>
      <div slot="drop-text">
        Drag and drop, of
        <a href="#" @click=${()=>{var e,o;return null===(o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("exmg-upload"))||void 0===o?void 0:o.openFileSelector()}}
          >browse</a
        >
        je bestanden
      </div>
    </exmg-upload>`}};a.styles=[e`
      :host {
        display: block;
      }
      exmg-upload a {
        color: #0071dc;
        text-decoration: none;
      }
      exmg-upload svg {
        fill: #0071dc;
      }
    `],a=o([t("exmg-upload-customize-demo")],a);export{a as ExmgUploadCustomizeDemo};
