import{i as o,_ as e,a as l,s as a,x as d,e as t}from"../gestures-5d82c3ec.js";import{i,l as r}from"../exmg-upload-dialog-6ad0cc09.js";import"@exmg/exmg-upload/src/exmg-upload-dialog.js";let p=class extends a{constructor(){super(...arguments),this.uploadUrl="http://localhost:3000/upload",this.cropperConfig={modal:!0,center:!0,dragMode:"move",movable:!0,scalable:!0,guides:!0,zoomOnWheel:!0,cropBoxMovable:!0,wheelZoomRatio:.1}}open(){this.dialog.open()}close(){this.dialog&&this.dialog.done()}_save(o){var e;null===(e=this.dialog)||void 0===e||e.close()}render(){return d`
      <exmg-upload-dialog
        id="dialog"
        title="Upload Bestanden"
        buttonSaveCopy="Opslaan"
        hideCloseButton
        @upload-save=${this._save}
      >
        <exmg-upload
          maxSize="1mb"
          maxAmount="2"
          multiple
          serverType="local"
          uploadUrl=${r(this.uploadUrl)}
          .cropperConfig=${this.cropperConfig}
        >
          <div slot="drop-text">
            Drag and drop, of
            <a href="#" @click=${()=>{var o,e;return null===(e=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelector("exmg-upload"))||void 0===e?void 0:e.openFileSelector()}}
              >browse</a
            >
            je bestanden
          </div>
        </exmg-upload>
      </exmg-upload-dialog>
    `}};p.styles=[o`
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
    `],e([i("#dialog")],p.prototype,"dialog",void 0),e([l({type:String})],p.prototype,"uploadUrl",void 0),p=e([t("file-upload-dialog")],p);export{p as FileUploadDialog};
