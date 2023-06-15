import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@exmg/exmg-upload/exmg-upload.js';
import '@exmg/exmg-upload/exmg-upload-input.js';
import { ExmgUploadInput } from '@exmg/exmg-upload/exmg-upload-input.js';

@customElement('exmg-input-demo')
export class ExmgInputDemo extends LitElement {
  @query('exmg-upload-input')
  input?: ExmgUploadInput;

  static styles = [
    css`
      :host {
        display: block;
      }
      exmg-upload a {
        color: #0071dc;
        text-decoration: none;
      }
      exmg-upload svg {
        fill: #0071dc;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <input label="imageUrl" id="imageUrl" />
        <exmg-upload for="imageUrl" maxSize="1mb" serverType="local"> </exmg-upload>
      </div>

      <exmg-upload-input>
        <input slot="input" label="imageUrl" name="imageUrl" />
        <exmg-upload slot="upload" for="imageUrl" maxSize="1mb" serverType="local"> </exmg-upload>
      </exmg-upload-input>
    `;
  }
}
