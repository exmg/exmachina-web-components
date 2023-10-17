import { html, nothing } from 'lit';
import { query, property, state } from 'lit/decorators.js';

import '@material/web/button/filled-button.js';

import { FileData } from './types.js';
import { ExmgElement } from '@exmg/lit-base';

import Cropper from 'cropperjs';

export class ExmgUploadCropBase extends ExmgElement {
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
    this.fire('crop-start', {}, true);
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
    this.fire('crop-cancel', {}, true);
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
      this.fire('crop-done', this._item);
    }, this._item?.file.type);
  }

  renderActions() {
    return html`
      <div class="actions">
        <md-filled-button @click=${this._cancel}>Cancel</md-filled-button>
        <md-filled-button @click=${this.saveCropArea}>Crop</md-filled-button>
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
