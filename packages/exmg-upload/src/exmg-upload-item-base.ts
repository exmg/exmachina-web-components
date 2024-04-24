import { html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/progress/linear-progress.js';

import { FileData } from './types.js';
import { formatBytes, isImage } from './utils.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { UploadService } from './upload/index.js';
import { ExmgElement } from '@exmg/lit-base';
import { UploadConfig } from './upload/types.js';

export class ExmgUploadItemBase extends ExmgElement {
  /**
   * Optional property. If not set it will look for the window.emconfig.backendHost
   */
  @property({ type: String })
  uploadUrl?: string;

  @property({ type: String })
  customAdapterPath?: string;

  /**
   * The upload response type
   */
  @property({ type: String })
  serverType: 'xhr' | 'local' | 'custom' = 'xhr';

  /**
   * The upload response type
   */
  @property({ type: String })
  responseType?: '' | 'json' | 'text' | 'blob' | 'arraybuffer';

  @property({ type: Object })
  uploadService?: UploadService;

  @property({ type: Object })
  item?: FileData;

  @property({ type: Boolean })
  allowCropping?: boolean;

  @property({ type: Number })
  aspectRatio?: number;

  async firstUpdated() {
    // @ts-ignore
    const uploadUrl = this.uploadUrl;
    const headers = window.uploadDefaults ? window.uploadDefaults.headers || {} : {};

    const payload: UploadConfig = {
      uploadUrl: uploadUrl || window.uploadDefaults?.uploadUrl || undefined,
      headers,
      responseType: this.responseType,
    };

    if (this.customAdapterPath) {
      payload.customAdapterPath = this.customAdapterPath || window.uploadDefaults.customAdapterPath;
    }

    this.uploadService = await UploadService.create(this.serverType!, payload);

    this.handleFileUpload();
  }

  private _handleEditClick() {
    this.fire('edit-image', this.item, true);
  }

  private _handleRemoveClick() {
    this.uploadService?.abort();
    this.fire('remove-item', this.item?.id, true);
  }

  /**
   * Error handling helper function used for all validation
   * @param message
   * @param item
   */
  handleError(message: string) {
    this.item!.invalid = true;
    this.item!.status = 'INVALID';
    this.item!.error = message;
    this.requestUpdate('item');
  }

  /**
   * Handle upload from added files
   */
  async handleFileUpload() {
    if (!this.item) {
      return;
    }
    // Check if file is valid before attempting the upload
    if (!this.item.invalid) {
      try {
        const url = await this.uploadService?.upload(this.item.file, (progress: number) => {
          this.item!.progress = progress;
          this.requestUpdate('item');
        });

        this.item.url = url;
        this.item.status = 'UPLOADED';
        this.requestUpdate('item');
        this.fire('upload-success', this.item, true);
      } catch (error) {
        this.handleError(error as string);
        throw new Error(error as string);
      }
    }
  }

  private renderStatus() {
    const { status } = this.item!;
    switch (status) {
      case 'UPLOADING':
        return this.renderUploading();
      case 'UPLOADED':
        return this.renderUploaded();
      case 'INVALID':
        return this.renderInvalid();
      case 'WARNING':
        return this._renderWarning();

      default:
        return nothing;
    }
  }

  private renderActions() {
    const { item, allowCropping } = this;
    const { status } = item!;
    return html`${status === 'UPLOADED' && isImage(item!.file) && allowCropping
        ? html`<md-icon-button @click=${this._handleEditClick}>
            <md-icon>edit</md-icon>
          </md-icon-button>`
        : nothing}
      <md-icon-button @click=${this._handleRemoveClick}>
        <md-icon>delete</md-icon>
      </md-icon-button>`;
  }

  private _renderWarning() {
    return html`<md-icon class="warning-icon">warning</md-icon>`;
  }

  private renderUploading() {
    return html`<span class="loader"></span> `;
  }

  private renderUploaded() {
    return html`<md-icon class="success-icon">check</md-icon>`;
  }

  private renderInvalid() {
    return html`<md-icon class="error-icon">error</md-icon>`;
  }

  render() {
    const file = this.item?.file;
    const { progress, status } = this.item!;
    const originalName = file?.name!;
    const fileName = originalName.substring(0, originalName.lastIndexOf('.'));
    const fileType = originalName.substring(originalName.lastIndexOf('.') + 1, originalName.length);

    return html`
      <div class="item">
        <div class="status vertical-center">${this.renderStatus()}</div>
        <div class="name-container">
          <span class="file-name">${fileName}</span>
          ${status !== 'INVALID' && status !== 'WARNING'
            ? html` <md-linear-progress
                max="100"
                class="progress"
                value="${ifDefined(progress || 0)}"
              ></md-linear-progress>`
            : nothing}
          ${this.item?.error
            ? html` <span class="file-error">${this.item?.error}</span> `
            : html` <div class="file-details vertical-center">
                <div class="vertical-center">
                  <span class="file-size badge">${fileType.toUpperCase()}</span>
                  <span class="file-type badge">${formatBytes(file?.size!)}</span>
                </div>
                <span class="progress">${Math.round((progress || 0) * 10) / 10}%</span>
              </div>`}
        </div>
        <div class="actions vertical-center">${this.renderActions()}</div>
      </div>
    `;
  }
}
