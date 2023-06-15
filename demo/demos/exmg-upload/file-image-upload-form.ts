import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ExmgElement } from '@exmg/lit-base';

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
    this.fire('property-changed', { name, value: e.target.value });
  }

  _handleChange(e, name: string) {
    // @ts-ignore
    this.fire('property-changed', { name, value: e.target.checked });
  }

  render() {
    return html`
      <div>
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
        <label for="uploadUrl">fixedResolution</label><br />
        <input
          id="fixedResolution"
          type="text"
          value=${this.fixedResolution}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'fixedResolution')}
        /><br />
        <label for="maxSize">Allow Cropping</label><br />
        <input
          id="allowCropping"
          type="checkbox"
          ?disabled=${!!this.fixedResolution}
          name="allowCropping"
          ?checked=${!!this.allowCropping}
          @change=${(e: Event) => this._handleChange(e, 'allowCropping')}
        /><br />
        <label for="maxAmount">Aspect Ratio</label><br />
        <input
          id="aspectRatio"
          type="text"
          ?disabled=${!!this.fixedResolution}
          value=${ifDefined(this.aspectRatio)}
          @blur=${(e: FocusEvent) => this._handleBlur(e, 'aspectRatio')}
        /><br />
      </div>
    `;
  }
}
