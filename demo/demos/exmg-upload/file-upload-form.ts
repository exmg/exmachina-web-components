import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ExmgElement } from '@exmg/lit-base';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/radio/radio.js';

@customElement('file-upload-form')
export class FileUploadForm extends ExmgElement {
  @property({ type: String }) accept?: string;
  @property({ type: String }) maxSize: string = '1gb';
  @property({ type: Boolean }) multiple = true;
  @property({ type: Number }) maxAmount?: number;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) uploadUrl = 'http://localhost:3000/upload';
  @property({ type: String }) serverType = 'local';

  static styles = [
    css`
      :host {
        display: block;
      }

      .row {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
      }

      .row > * {
        margin-right: 1rem;
      }

      label {
        display: flex;
        align-items: center;
      }
    `,
  ];

  _handleBlur(e: FocusEvent, name: string) {
    // @ts-ignore
    this.fire('property-changed', { name, value: e.target.value });
  }

  _handleChange(e, name: string) {
    // @ts-ignore
    this.fire('property-changed', { name, value: e.target.checked });
  }

  _handleRadio() {
    // @ts-ignore
    const value = this.shadowRoot?.querySelector('input[name="serverType"]:checked')?.value;
    this.fire('property-changed', { name: 'serverType', value });
  }

  render() {
    return html`
      <div class="row">
        <label>
          XHR
          <md-radio
            id="xhr"
            name="serverType"
            value="xhr"
            ?checked=${this.serverType === 'xhr'}
            @change=${this._handleRadio}
          >
          </md-radio>
        </label>
        <label>
          Local Storage
          <md-radio
            id="local"
            name="serverType"
            value="local"
            ?checked=${this.serverType === 'local'}
            @change=${this._handleRadio}
          >
          </md-radio>
        </label>
      </div>
      <div class="row">
        <md-outlined-text-field
          id="uploadUrl"
          type="text"
          label="Upload Url"
          value=${ifDefined(this.uploadUrl)}
          ?disabled=${this.serverType === 'local'}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'uploadUrl')}
        ></md-outlined-text-field>

        <md-outlined-text-field
          id="accept"
          type="text"
          label="Accept"
          value=${ifDefined(this.accept)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'accept')}
        ></md-outlined-text-field>
      </div>
      <div class="row">
        <md-outlined-text-field
          id="maxSize"
          type="text"
          label="Max Size"
          value=${ifDefined(this.maxSize)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'maxSize')}
        ></md-outlined-text-field>

        <md-outlined-text-field
          id="maxAmount"
          label="Max Amount"
          type="number"
          min="1"
          value=${ifDefined(this.maxAmount)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'maxAmount')}
        ></md-outlined-text-field>
      </div>

      <div class="row">
        <label for="multiple"
          >Multiple
          <md-checkbox
            id="multiple"
            name="multiple"
            ?checked=${!!this.multiple}
            @blur=${(e: FocusEvent) => this._handleChange(e, 'multiple')}
          ></md-checkbox
        ></label>

        <label for="disabled"
          >Disabled
          <md-checkbox
            id="disabled"
            name="disabled"
            ?checked=${!!this.disabled}
            @change=${(e: Event) => this._handleChange(e, 'disabled')}
          ></md-checkbox
        ></label>
      </div>
    `;
  }
}
