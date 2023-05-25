import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@exmg/exmg-upload';

window.uploadDefaults = {
  customAdapterPath: '/demo/demos/exmg-upload/xhr-json-adapter.js',
  uploadUrl: 'http://localhost:3000/upload',
  headers: {
    'x-adminSession': 'sessionid',
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-custom-demo')
export class ExmgUploadCustomDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h2>Custom Upload Adpater Example</h2>
      <pre>
window.uploadDefaults = {
    customAdapterPath: '/demo/demos/exmg-upload/xhr-json-adapter.js',
    uploadUrl: 'http://localhost:3000/upload',
    headers: {
        'x-adminSession': 'sessionid',
        'Allow-Access-Control-Origin': '*',
    },
};
    </pre
      >
      <exmg-upload multiple serverType="custom"> </exmg-upload>`;
  }
}
