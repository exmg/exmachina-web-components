import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined';
import {ExmgElement} from '@exmg/lit-base';

@customElement('file-upload-form')
export class FileUploadForm extends ExmgElement {
  @property({type: String}) accept?: string;
  @property({type: String}) maxSize: string = '1gb';
  @property({type: Boolean}) multiple = true;
  @property({type: Number}) maxAmount?: number;
  @property({type: Boolean}) disabled = false;
  @property({type: String}) uploadUrl = 'http://localhost:3000/upload';
  @property({type: String}) serverType = 'local';

  static styles = [
    css`
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
    `,
  ];

  _handleBlur(e: FocusEvent, name: string) {
    // @ts-ignore
    this.fire('property-changed', {name, value: e.target.value});
  }

  _handleChange(e, name: string) {
    // @ts-ignore
    this.fire('property-changed', {name, value: e.target.checked});
  }

  _handleRadio() {
    // @ts-ignore
    const value = this.shadowRoot?.querySelector('input[name="serverType"]:checked')?.value;
    this.fire('property-changed', {name: 'serverType', value});
  }

  render() {
    return html`
      <div>
        <fieldset>
          <legend>Select adapter type</legend>
          <div>
            <input
              type="radio"
              id="xhr"
              name="serverType"
              value="xhr"
              ?checked=${this.serverType === 'xhr'}
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
              ?checked=${this.serverType === 'local'}
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
          value=${ifDefined(this.uploadUrl)}
          ?disabled=${this.serverType === 'local'}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'uploadUrl')}
        /><br />
        <label for="accept">Accept</label><br />
        <input
          id="accept"
          type="text"
          value=${ifDefined(this.accept)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'accept')}
        /><br />
        <label for="maxSize">Max Size</label><br />
        <input
          id="maxSize"
          type="text"
          value=${ifDefined(this.maxSize)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'maxSize')}
        /><br />
        <label for="maxAmount">Max Amount</label><br />
        <input
          id="maxAmount"
          type="text"
          value=${ifDefined(this.maxAmount)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'maxAmount')}
        /><br />
        <label for="multiple">Multiple</label><br />
        <input
          id="multiple"
          type="checkbox"
          name="multiple"
          ?checked=${!!this.multiple}
          @blur=${(e: FocusEvent) => this._handleChange(e, 'multiple')}
        /><br />
        <label for="disabled">Disabled</label><br />
        <input
          id="disabled"
          type="checkbox"
          name="disabled"
          ?checked=${!!this.disabled}
          @change=${(e: Event) => this._handleChange(e, 'disabled')}
        /><br />
      </div>
    `;
  }
}
