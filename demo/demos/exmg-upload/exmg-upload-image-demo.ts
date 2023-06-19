import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@exmg/exmg-upload';
import { ExmgUpload } from '@exmg/exmg-upload';
import { ifDefined } from 'lit/directives/if-defined.js';
import './file-image-upload-form.js';
import { observer } from '../exmg-form-drawer/form-drawer-base.js';

const convertStringToRatio = (ratioString: string) => {
  const ratioParts = ratioString.split('/');

  // Ensure there are exactly two parts after splitting
  if (ratioParts.length !== 2) {
    return null;
  }

  // Convert the parts to numbers
  const numerator = parseInt(ratioParts[0], 10);
  const denominator = parseInt(ratioParts[1], 10);

  // Check if the conversion was successful
  if (isNaN(numerator) || isNaN(denominator)) {
    return null;
  }

  // Check if denominator is not zero
  if (denominator === 0) {
    return null;
  }

  return numerator / denominator;
};

window.uploadDefaults = {
  headers: {
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-image-demo')
export class ExmgUploadImageDemo extends LitElement {
  @query('exmg-upload')
  upload?: ExmgUpload;

  @property({ type: String }) accept? = '.png,.jpg,.jpeg';
  @property({ type: String }) maxSize? = '256kb';
  @property({ type: String }) fixedResolution? = '1200x677';
  @property({ type: Boolean }) allowCropping = true;
  @property({ type: String })
  @observer(function (this: ExmgUploadImageDemo, value: string) {
    const aspectRatio = convertStringToRatio(value);
    this.cropperConfig = aspectRatio
      ? {
          aspectRatio,
        }
      : {};
  })
  aspectRatio = '16/9';

  @property({ type: Number })
  cropperConfig: any = {};

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  _handlePropertyChange(e: CustomEvent<{ name: string; value: string }>) {
    const { name, value } = e.detail;
    this[name] = value;
  }

  render() {
    return html`
      <exmg-upload
        fixedResolution=${ifDefined(this.fixedResolution)}
        aspectRatio=${ifDefined(this.aspectRatio)}
        accept=${ifDefined(this.accept)}
        ?allowCropping=${this.allowCropping}
        maxSize=${this.maxSize}
        multiple
        serverType="local"
        .cropperConfig=${this.cropperConfig}
      >
      </exmg-upload>

      <file-image-upload-form
        accept=${ifDefined(this.accept)}
        maxSize=${this.maxSize}
        fixedResolution=${ifDefined(this.fixedResolution)}
        aspectRatio=${ifDefined(this.aspectRatio)}
        ?allowCropping=${this.allowCropping}
        @property-changed=${this._handlePropertyChange}
      ></file-image-upload-form>
    `;
  }
}
