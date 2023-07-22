import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@exmg/exmg-upload/exmg-upload.js';
import '@exmg/exmg-upload/exmg-upload-input.js';
import { ExmgUploadInput } from '@exmg/exmg-upload/exmg-upload-input.js';
import '@material/web/textfield/outlined-text-field.js';

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

      md-outlined-text-field {
        width: 100%;
      }
    `,
  ];

  render() {
    return html`
      <exmg-upload-input>
        <md-outlined-text-field slot="input" label="imageUrl" name="imageUrl"></md-outlined-text-field>
        <exmg-upload slot="upload" for="imageUrl" maxSize="10mb" serverType="local"> </exmg-upload>
      </exmg-upload-input>
    `;
  }
}
