import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './file-upload-section.js';

window.uploadDefaults = {
  headers: {
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-demo')
export class ExmgUploadDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<h2>Configurable Example</h2>
      <file-upload-section></file-upload-section>`;
  }
}
