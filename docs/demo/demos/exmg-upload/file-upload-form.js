import{i as e,_ as t,a as l,E as a,x as i,e as r}from"../gestures-5d82c3ec.js";import{ifDefined as p}from"lit/directives/if-defined";let d=class extends a{constructor(){super(...arguments),this.maxSize="1gb",this.multiple=!0,this.disabled=!1,this.uploadUrl="http://localhost:3000/upload",this.serverType="local"}_handleBlur(e,t){this.fire("property-changed",{name:t,value:e.target.value})}_handleChange(e,t){this.fire("property-changed",{name:t,value:e.target.checked})}_handleRadio(){var e,t;const l=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('input[name="serverType"]:checked'))||void 0===t?void 0:t.value;this.fire("property-changed",{name:"serverType",value:l})}render(){return i`
      <div>
        <fieldset>
          <legend>Select adapter type</legend>
          <div>
            <input
              type="radio"
              id="xhr"
              name="serverType"
              value="xhr"
              ?checked=${"xhr"===this.serverType}
              @change=${this._handleRadio}
            />
            <label for="xhr">XHR</label>
          </div>
          <div>
            <input
              type="radio"
              id="local"
              name="serverType"
              value="local"
              ?checked=${"local"===this.serverType}
              @change=${this._handleRadio}
            />
            <label for="local">Local Storage</label>
          </div>
        </fieldset>
        <br />
        <label for="uploadUrl">Upload Url</label><br />
        <input
          id="uploadUrl"
          type="text"
          value=${p(this.uploadUrl)}
          ?disabled=${"local"===this.serverType}
          @blur=${e=>this._handleBlur(e,"uploadUrl")}
        /><br />
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
        <label for="maxAmount">Max Amount</label><br />
        <input
          id="maxAmount"
          type="text"
          value=${p(this.maxAmount)}
          @blur=${e=>this._handleBlur(e,"maxAmount")}
        /><br />
        <label for="multiple">Multiple</label><br />
        <input
          id="multiple"
          type="checkbox"
          name="multiple"
          ?checked=${!!this.multiple}
          @blur=${e=>this._handleChange(e,"multiple")}
        /><br />
        <label for="disabled">Disabled</label><br />
        <input
          id="disabled"
          type="checkbox"
          name="disabled"
          ?checked=${!!this.disabled}
          @change=${e=>this._handleChange(e,"disabled")}
        /><br />
      </div>
    `}};d.styles=[e`
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
    `],t([l({type:String})],d.prototype,"accept",void 0),t([l({type:String})],d.prototype,"maxSize",void 0),t([l({type:Boolean})],d.prototype,"multiple",void 0),t([l({type:Number})],d.prototype,"maxAmount",void 0),t([l({type:Boolean})],d.prototype,"disabled",void 0),t([l({type:String})],d.prototype,"uploadUrl",void 0),t([l({type:String})],d.prototype,"serverType",void 0),d=t([r("file-upload-form")],d);export{d as FileUploadForm};
