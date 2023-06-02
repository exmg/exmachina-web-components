import{i as e,_ as t,a as i,E as a,x as l,e as o}from"../gestures-5d82c3ec.js";import{ifDefined as p}from"lit/directives/if-defined";let r=class extends a{_handleBlur(e,t){this.fire("property-changed",{name:t,value:e.target.value})}_handleChange(e,t){this.fire("property-changed",{name:t,value:e.target.checked})}render(){return l`
      <div>
        <label for="accept">Accept</label><br />
        <input
          id="accept"
          type="text"
          value=${p(this.accept)}
          @blur=${e=>this._handleBlur(e,"accept")}
        /><br />
        <label for="maxSize">Max Size</label><br />
        <input
          id="maxSize"
          type="text"
          value=${p(this.maxSize)}
          @blur=${e=>this._handleBlur(e,"maxSize")}
        /><br />
        <label for="uploadUrl">fixedResolution</label><br />
        <input
          id="fixedResolution"
          type="text"
          value=${this.fixedResolution}
          @blur=${e=>this._handleBlur(e,"fixedResolution")}
        /><br />
        <label for="maxSize">Allow Cropping</label><br />
        <input
          id="allowCropping"
          type="checkbox"
          ?disabled=${!!this.fixedResolution}
          name="allowCropping"
          ?checked=${!!this.allowCropping}
          @change=${e=>this._handleChange(e,"allowCropping")}
        /><br />
        <label for="maxAmount">Aspect Ratio</label><br />
        <input
          id="aspectRatio"
          type="text"
          ?disabled=${!!this.fixedResolution}
          value=${p(this.aspectRatio)}
          @blur=${e=>this._handleBlur(e,"aspectRatio")}
        /><br />
      </div>
    `}};r.styles=[e`
      :host {
        display: block;
      }

      input[type='text'] {
        width: 300px;
        padding: 6px;
      }

      input[type='text'],
      input[type='checkbox'] {
        margin-bottom: 8px;
      }
    `],t([i({type:String})],r.prototype,"accept",void 0),t([i({type:String})],r.prototype,"maxSize",void 0),t([i({type:String})],r.prototype,"fixedResolution",void 0),t([i({type:Boolean})],r.prototype,"allowCropping",void 0),t([i({type:String})],r.prototype,"aspectRatio",void 0),r=t([o("file-image-upload-form")],r);export{r as FileImageUploadForm};
