import{i as e,_ as t,a as o,s as p,x as i,e as r}from"../gestures-5d82c3ec.js";import{i as a,l}from"../exmg-upload-dialog-6ad0cc09.js";import"./file-upload-form.js";import"lit/directives/if-defined";let s=class extends p{constructor(){super(...arguments),this.files=[],this.maxSize="1gb",this.multiple=!0,this.disabled=!1,this.uploadUrl="http://localhost:3000/upload",this.serverType="local",this.hideImageUpload=!1,this.cropperConfig={aspectRatio:16/9}}_handlePropertyChange(e){const{name:t,value:o}=e.detail;this[t]=o}render(){return i`
      <exmg-upload
        accept=${l(this.accept)}
        maxSize=${this.maxSize}
        maxAmount=${l(this.maxAmount)}
        ?disabled=${this.disabled}
        ?multiple=${this.multiple}
        uploadUrl=${l(this.uploadUrl)}
        serverType=${this.serverType}
        .cropperConfig=${this.cropperConfig}
      >
      </exmg-upload>

      <hr />
      <file-upload-form
        accept=${l(this.accept)}
        maxSize=${this.maxSize}
        maxAmount=${l(this.maxAmount)}
        ?disabled=${this.disabled}
        ?multiple=${this.multiple}
        serverType=${this.serverType}
        @property-changed=${this._handlePropertyChange}
      ></file-upload-form>
    `}};s.styles=[e`
      :host {
        display: block;
      }

      hr,
      exmg-upload {
        margin-bottom: 48px;
      }
    `],t([a("exmg-upload")],s.prototype,"exmgUpload",void 0),t([o({type:Array})],s.prototype,"files",void 0),t([o({type:String})],s.prototype,"accept",void 0),t([o({type:String})],s.prototype,"maxSize",void 0),t([o({type:Boolean})],s.prototype,"multiple",void 0),t([o({type:Number})],s.prototype,"maxAmount",void 0),t([o({type:Boolean})],s.prototype,"disabled",void 0),t([o({type:String})],s.prototype,"uploadUrl",void 0),t([o({type:String})],s.prototype,"serverType",void 0),t([o({type:Boolean})],s.prototype,"hideImageUpload",void 0),t([o({type:Object})],s.prototype,"cropperConfig",void 0),s=t([r("file-upload-section")],s);export{s as FileUploadSection};
