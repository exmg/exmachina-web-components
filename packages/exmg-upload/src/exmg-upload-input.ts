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

  toggle() {
    this.opened = !this.opened;
  }

  _uploadSuccess() {
    const upload = this.getUploadElement();
    const input = this.getInputElement();

    if (!input || !upload) {
      return;
    }

    const response = upload.getValues()[0]!;
    let value = '';
    try {
      const d = JSON.parse(response);
      // @ts-ignore
      value = d.url ? d.url : response;
    } catch (error) {
      value = response;
    }

    input.value = value;

    setTimeout(() => {
      upload.reset();
      this.opened = false;
    }, this.closeDelay);
  }

  handleClick(e: CustomEvent) {
    e.preventDefault();
    const el = e.target as HTMLElement;
    const slotValue = el.getAttribute('slot');
    if (el.tagName.toLowerCase() === 'md-icon-button' && slotValue === 'trailing-icon') {
      this.toggle();
    }
  }

  render() {
    return html`
      <div class="input-wrapper">
        <div class="input" aria-expanded=${this.opened} aria-controls="collapsed">
          <slot name="input" @click=${this.handleClick}></slot>
        </div>
        <exmg-collapsed id="collapsed" ?opened=${this.opened}>
          <slot name="upload" @upload-success=${this._uploadSuccess}></slot>
        </exmg-collapsed>
      </div>
    `;
  }
}
