import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@exmg/exmg-upload/exmg-upload.js';
import '@exmg/exmg-upload/exmg-upload-input.js';
import { ExmgUploadInput } from '@exmg/exmg-upload/exmg-upload-input.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

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

      md-filled-text-field,
      exmg-upload-input {
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
      <exmg-upload-input>
        <md-filled-text-field slot="input" label="imageUrl" name="imageUrl"
          ><md-icon-button slot="trailing-icon"><md-icon>upload</md-icon></md-icon-button></md-filled-text-field
        >
        <exmg-upload slot="upload" for="imageUrl" maxSize="10mb" serverType="local"> </exmg-upload>
      </exmg-upload-input>
    `;
  }
}
