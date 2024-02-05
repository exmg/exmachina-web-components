import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ExmgElement } from '@exmg/lit-base';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/checkbox/checkbox.js';

@customElement('file-image-upload-form')
export class FileImageUploadForm extends ExmgElement {
  @property({ type: String }) accept?: string;
  @property({ type: String }) maxSize?: string;
  @property({ type: String }) fixedResolution?: string;
  @property({ type: Boolean }) allowCropping?: boolean;
  @property({ type: String }) aspectRatio?: string;

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

  render() {
    return html`
      <div class="row">
        <md-outlined-text-field
          id="accept"
          type="text"
          label="Accept"
          value=${ifDefined(this.accept)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'accept')}
        ></md-outlined-text-field>
        <md-outlined-text-field
          id="maxSize"
          type="text"
          label="Max Size"
          value=${ifDefined(this.maxSize)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'maxSize')}
        ></md-outlined-text-field>
        </div>
        <div class="row">
        <md-outlined-text-field
          id="fixedResolution"
          type="text"
          label="Fixed Resolution"
          value=${this.fixedResolution}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'fixedResolution')}
        ></md-outlined-text-field>
        <label>
          Allow Cropping
          <md-checkbox
            id="allowCropping"
            ?disabled=${!!this.fixedResolution}
            name="allowCropping"
            ?checked=${!!this.allowCropping}
            @change=${(e: Event) => this._handleChange(e, 'allowCropping')}
          ></md-checkbox
        ></label>
        </div>
        <div class="row">
        <md-outlined-text-field
          id="aspectRatio"
          type="text"
          label="Aspect Ratio"
          ?disabled=${!!this.fixedResolution}
          value=${ifDefined(this.aspectRatio)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'aspectRatio')}
        ></md-outlined-text-field
        ></div>
      </div>
    `;
  }
}
