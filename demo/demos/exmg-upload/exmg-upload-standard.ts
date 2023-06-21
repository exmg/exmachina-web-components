import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './file-upload-section.js';

window.uploadDefaults = {
  headers: {
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-standard')
export class ExmgUploadStandard extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
      }
    `,
  ];

  render() {
    return html`<h2>Configurable Example</h2>
      <file-upload-section></file-upload-section>`;
  }
}
