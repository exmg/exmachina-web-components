import {html, nothing} from 'lit';
import {property} from 'lit/decorators.js';
import {FileData} from './types';
import '@material/mwc-icon-button';
import {formatBytes, isImage} from './utils';
import {ifDefined} from 'lit/directives/if-defined.js';
import {UploadService} from './upload';
import {ExmgElement} from '@exmg/lit-base';
import {checkIcon, closeIcon, editIcon, errorIcon} from './exmg-upload-icons';

export class ExmgUploadItemBase extends ExmgElement {
  /**
   * Optional property. If not set it will look for the window.emconfig.backendHost
   */
  @property({type: String})
  uploadUrl?: string;

  @property({type: String})
  customAdapterPath?: string;

  /**
   * The upload response type
   */
  @property({type: String})
  serverType: 'xhr' | 'local' | 'custom' = 'xhr';

  /**
   * The upload response type
   */
  @property({type: String})
  responseType?: '' | 'json' | 'text' | 'blob' | 'arraybuffer';

  @property({type: Object})
  uploadService?: UploadService;

  @property({type: Object})
  item?: FileData;

  async firstUpdated() {
    // @ts-ignore
    const uploadUrl = this.uploadUrl;
    const headers = window.uploadDefaults.headers;

    this.uploadService = await UploadService.create(this.serverType!, {
      customAdapterPath: this.customAdapterPath || window.uploadDefaults.customAdapterPath,
      uploadUrl: uploadUrl || window.uploadDefaults.uploadUrl,
      headers,
      responseType: this.responseType,
    });

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
      } catch (error) {
        this.handleError(error as string);
        throw new Error(error as string);
      }
    }
  }

  private renderStatus() {
    const {status} = this.item!;
    switch (status) {
      case 'UPLOADING':
        return this.renderUploading();
      case 'UPLOADED':
        return this.renderUploaded();
      case 'INVALID':
        return this.renderInvalid();
      default:
        return nothing;
    }
  }

  private renderActions() {
    return html`${this.item!.status === 'UPLOADED' && isImage(this.item!.file)
        ? html`<mwc-icon-button @click=${this._handleEditClick}>${editIcon}</mwc-icon-button>`
        : nothing} <mwc-icon-button @click=${this._handleRemoveClick}>${closeIcon}</mwc-icon-button>`;
  }

  private renderUploading() {
    return html`<span class="loader"></span> `;
  }

  private renderUploaded() {
    return html`<span class="success-icon">${checkIcon}</span>`;
  }

  private renderInvalid() {
    return html`<span class="error-icon">${errorIcon}</span>`;
  }

  render() {
    const file = this.item?.file;
    const {progress} = this.item!;
    const originalName = file?.name!;
    const fileName = originalName.substring(0, originalName.lastIndexOf('.'));
    const fileType = originalName.substring(originalName.lastIndexOf('.') + 1, originalName.length);

    return html`
      <div class="item">
        <div class="status vertical-center">${this.renderStatus()}</div>
        <div class="name-container">
          <span class="file-name">${fileName}</span>
          ${this.item?.status !== 'INVALID'
            ? html` <progress id="file" max="100" value=${ifDefined(progress || 0)}></progress>`
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
