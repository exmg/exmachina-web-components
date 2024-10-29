import { html, nothing, LitElement } from 'lit';
import { query, property, state } from 'lit/decorators.js';

import '@exmg/exmg-button';

import { FileData } from './types.js';

import Cropper from 'cropperjs';

export class ExmgUploadCropBase extends LitElement {
  @property({ type: Object })
  cropperConfig: any = {};

  @query('#image')
  cropArea?: HTMLImageElement;

  @property({ type: Boolean })
  hideActions = false;

  @state()
  _item?: FileData;

  private cropper?: Cropper;

  protected firstUpdated() {
    this.dispatchEvent(new CustomEvent('exmg-upload-crop-ready', { bubbles: true, composed: true }));
  }

  async crop(item: FileData) {
    this._item = item;
    const reader = new FileReader();
    reader.onload = () => {
      if (this.cropArea) {
        this.cropArea.src = reader.result as string;
      }
      this.cropper = new Cropper(this.cropArea!, this.cropperConfig);
    };
    if (item.file) {
      reader.readAsDataURL(item.file);
    }
  }

  _cancel() {
    this.dispatchEvent(new CustomEvent('crop-cancel', { bubbles: true, composed: true }));
  }

  saveCropArea() {
    const canvas = this.cropper?.getCroppedCanvas();
    if (!canvas) {
      throw new Error('Cropper canvas not found');
    }
    canvas?.toBlob((blob) => {
      if (!this._item || !blob) {
        return;
      }
      const file = new File([blob], `cropped-${this._item.file.name}`, { type: this._item.file.type });
      this._item.file = file;
      this.dispatchEvent(new CustomEvent('crop-done', { detail: this._item, bubbles: true, composed: true }));
    }, this._item?.file.type);
  }

  renderActions() {
    return html`
      <div class="actions">
        <exmg-button @click=${this._cancel}>Cancel</exmg-button>
        <exmg-button @click=${this.saveCropArea}>Crop</exmg-button>
      </div>
    `;
  }

  render() {
    return html`
      <div class="image-container">
        <img id="image" />
      </div>
      ${this.hideActions ? nothing : this.renderActions()}
    `;
  }
}
