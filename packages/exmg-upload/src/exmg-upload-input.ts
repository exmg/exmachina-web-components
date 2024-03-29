import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@exmg/exmg-collapsed';
import { style } from './styles/exmg-upload-input-css.js';
import { ExmgUpload } from './exmg-upload.js';

@customElement('exmg-upload-input')
export class ExmgUploadInput extends LitElement {
  @property({ type: Boolean })
  opened = false;

  @property({ type: Number })
  closeDelay = 400;

  static styles = [style];

  getUploadElement() {
    return this.querySelector('exmg-upload') as ExmgUpload;
  }

  getInputElement() {
    return this.querySelector('[slot="input"]') as HTMLInputElement;
  }

  protected firstUpdated() {
    const upload = this.getUploadElement();
    if (upload) {
      if (upload.multiple) {
        console.warn('exmg-upload-input: multiple is not supported, forcing to false');
        upload.multiple = false;
      }
    }
  }

  _uploadSuccess() {
    const upload = this.getUploadElement();
    const input = this.getInputElement();

    if (!input || !upload) {
      return;
    }

    input.value = upload.getValues()[0]!;

    setTimeout(() => {
      upload.reset();
      this.opened = false;
    }, this.closeDelay);
  }

  render() {
    return html`
      <div class="input" aria-expanded=${this.opened} aria-controls="collapsed">
        <slot name="input"></slot>
        <span class="icon" @click=${() => (this.opened = !this.opened)}
          ><slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"
              /></svg></slot
        ></span>
      </div>
      <exmg-collapsed id="collapsed" ?opened=${this.opened}>
        <slot name="upload" @upload-success=${this._uploadSuccess}></slot>
      </exmg-collapsed>
    `;
  }
}
