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
        width: 100%;
      }

      exmg-upload a {
        color: #0071dc;
        text-decoration: none;
      }

      exmg-upload svg {
        fill: #0071dc;
      }

      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #999;
        border-radius: 4px;
      }
    `,
  ];

  render() {
    return html`
      <exmg-upload-input>
        <input slot="input" label="imageUrl" name="imageUrl" />
        <exmg-upload slot="upload" for="imageUrl" maxSize="10mb" serverType="local"> </exmg-upload>
      </exmg-upload-input>
    `;
  }
}
