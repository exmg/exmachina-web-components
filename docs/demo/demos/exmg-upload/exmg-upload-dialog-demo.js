import{i as o,_ as l,s as i,x as e,e as a}from"../gestures-5d82c3ec.js";import{i as d}from"../exmg-upload-dialog-6ad0cc09.js";import"./file-upload-dialog.js";import"@exmg/exmg-upload/src/exmg-upload-dialog.js";window.uploadDefaults={headers:{"Allow-Access-Control-Origin":"*"}};let t=class extends i{render(){return e` <h2>Dialog Example (including copy and icon customization)</h2>
      <button unelevated @click=${()=>{var o;return null===(o=this.fileUploadDialog)||void 0===o?void 0:o.open()}}>Open Dialog</button>
      <file-upload-dialog></file-upload-dialog>`}};t.styles=[o`
      :host {
        display: block;
      }
    `],l([d("file-upload-dialog")],t.prototype,"fileUploadDialog",void 0),t=l([a("exmg-upload-dialog-demo")],t);export{t as ExmgUploadDialogDemo};
