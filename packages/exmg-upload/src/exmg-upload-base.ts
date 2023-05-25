import {html} from 'lit';
import {property, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {repeat} from 'lit/directives/repeat.js';

import {ExmgUploadCrop} from './exmg-upload-crop.js';
import {FileData, FileUploadError} from './types.js';
import '@exmg/exmg-button';

// File upload imports
import './exmg-upload-item.js';
import './exmg-upload-crop.js';
import './exmg-upload-drop-area.js';

import {isSizeValid, isTypeValid} from './utils.js';
import {classMap} from 'lit/directives/class-map.js';
import {ExmgElement} from '@exmg/lit-base';

export class ExmgUploadBase extends ExmgElement {
  /**
   * Files addded to component
   */
  @property({type: Array})
  files: FileData[] = [];

  /**
   * Accepted file types seperated by comma
   */
  @property({type: String})
  accept? = '';

  /**
   * The max file size allowed to upload e.g. '20mb'
   */
  @property({type: String})
  maxSize: string = '100mb';

  /**
   * Determines if multiple files can be selected. When false maxAmount is set to 1 automatically
   */
  @property({type: Boolean})
  multiple = false;

  /**
   * The max amount of items allowed to upload when in multiple mode
   */
  @property({type: Number})
  maxAmount?: number;

  /**
   * Disable the upload component useful for forms
   */
  @property({type: Boolean})
  disabled = false;

  /**
   * Admin User session will be set on request header for authentication
   */
  @property({type: String})
  adminSession?: string;

  /**
   * Optional property. If not set it will look for the window.emconfig.backendHost
   */
  @property({type: String})
  uploadUrl?: string;

  /**
   * The upload response type
   */
  @property({type: String})
  responseType: '' | 'json' | 'text' | 'blob' | 'arraybuffer' = 'json';

  /**
   * The upload response type
   */
  @property({type: String})
  serverType: 'xhr' | 'xhr-json' | 'local' = 'xhr';

  /**
   * The CropperJS config see: https://github.com/fengyuanchen/cropperjs#options
   */
  @property({type: Object})
  cropperConfig = {
    aspectRatio: 16 / 9,
    modal: true,
    center: true,
    dragMode: 'move',
    movable: true,
    scalable: true,
    guides: true,
    zoomOnWheel: true,
    cropBoxMovable: true,
    wheelZoomRatio: 0.1,
  };

  /**
   * Internal state to check if user is cropping or not
   */
  @state()
  _isCropping = false;

  @property({type: Boolean})
  isModeDialog = false;

  /**
   * Internal state to check if file is uploaded or not
   */
  @state()
  _uploaded = false;

  @query('#crop-dialog')
  cropSection?: ExmgUploadCrop;

  @query('#file')
  fileElement?: HTMLInputElement;

  @query('.item-container')
  itemContainer?: ExmgUploadCrop;

  getValues() {
    return this.files.filter((file) => file.status === 'UPLOADED').map((file) => file.url);
  }

  /**
   * Extract files from either file input or drop event
   * @param event
   * @returns FileList[] | []
   */
  private _getFiles(event: Event | DragEvent) {
    const {files} =
      (event.type === 'drop' ? (event as DragEvent).dataTransfer : (event.target as HTMLInputElement)) ?? {};
    return Array.from(files ?? []);
  }

  /**
   * Resets the upload component
   * @public
   */
  reset() {
    this._uploaded = false;
    this.files = [];
    this.cancelActiveCrop();
  }

  private prepareFiles(addedFiles: File[]) {
    // Loop through files and assign unique id
    const newFiles: FileData[] = addedFiles.map(
      (item) =>
        ({
          id: (Date.now() + Math.random()).toString(36),
          file: item,
          status: 'UPLOADING',
        } as FileData),
    );

    for (const file of newFiles) {
      this._validateFile(file);
      this.files = [...this.files, file];
    }

    this.fire('files-changed', {files: this.files}, true);

    this._uploaded = true;

    if (this.fileElement) {
      this.fileElement.value = '';
    }
  }

  /**
   * Handles file change which also validates
   * @param event
   * @fires files-changed
   */
  private async _handleChange(event: Event | DragEvent) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    const addedFiles = this._getFiles(event);

    this.prepareFiles(addedFiles);
  }

  /**
   * Validator function to check file before upload to server
   * @param FileData
   */
  private _validateFile(item: FileData) {
    if (!isSizeValid(item.file.size, this.maxSize)) {
      this._handleError(FileUploadError.INVALID_SIZE, item);
    }
    if (this.accept && !isTypeValid(item.file, this.accept)) {
      this._handleError(FileUploadError.INVALID_TYPE, item);
    }
    if (this.maxAmount && this.files.length >= this.maxAmount) {
      this._handleError(FileUploadError.INVALID_AMOUNT, item);
    }
    if (!this.multiple && this.files.length >= 1) {
      this._handleError(FileUploadError.INVALID_MULTIPLE, item);
    }
  }

  /**
   * Enable cropping mode
   * @param e
   */
  _handleCropping(e: CustomEvent) {
    const file = e.detail;
    this._isCropping = true;
    setTimeout(() => this.cropSection?.crop(file));
  }

  private removeFile(id: string) {
    this.files = this.files.filter((item) => {
      return item.id !== id;
    });

    this.fire('file-removed', id);
    this.fire('files-changed', {files: this.files}, true);
  }

  /**
   * Removes the file out of the files array.
   * @fires file-removed
   * @param e
   * @param id
   */
  _handleRemove(e: CustomEvent) {
    const idToRemove = e.detail;
    this.removeFile(idToRemove);
  }

  /**
   * Handles crop done and toggles cropping state
   * @fires crop-done
   * @param e
   */
  async _handleCropDone(e: CustomEvent) {
    this._isCropping = false;
    const item = e.detail;

    this.removeFile(item?.id);
    this.prepareFiles([item.file]);

    this.fire('crop-done', e.detail);
  }

  /**
   * Handles crop cancel and toggles cropping state
   * @fires crop-cancel
   */
  cancelActiveCrop() {
    this._isCropping = false;
    this.fire('crop-cancel', {}, true);
  }

  saveActiveCrop() {
    this.cropSection?.saveCropArea();
  }

  /**
   * Error handling helper function used for all validation
   * @param message
   * @param item
   */
  _handleError(message: string, item: FileData) {
    item.invalid = true;
    item.status = 'INVALID';
    item.error = message;
  }

  openFileSelector() {
    const fileInput = this?.shadowRoot?.querySelector('#file');
    if (fileInput) {
      (fileInput as HTMLInputElement).click();
    }
  }

  renderDescription() {
    const {accept, maxSize} = this;
    return `Only ${accept ? accept.replace(/,/g, ' ') : ''} files that not exceed ${maxSize} in size`;
  }

  /**
   * Renders the file items when in 'multiple' mode
   * @returns
   */
  renderFileItems() {
    return repeat(
      this.files || [],
      (file) => file.id,
      (item: FileData) =>
        html`<exmg-upload-item
          class="item"
          id=${item.id}
          @edit-image=${this._handleCropping}
          @remove-item=${this._handleRemove}
          uploadUrl=${ifDefined(this.uploadUrl)}
          serverType=${this.serverType}
          responseType=${this.responseType}
          adminSession=${ifDefined(this.adminSession)}
          .item=${item}
        ></exmg-upload-item>`,
    );
  }

  renderUploadCrop() {
    const {cropperConfig} = this;
    return html`
      <exmg-upload-crop
        id="crop-dialog"
        ?hideActions=${this.isModeDialog}
        @crop-done=${this._handleCropDone}
        @crop-cancel=${this.cancelActiveCrop}
        .cropperConfig=${cropperConfig}
      ></exmg-upload-crop>
    `;
  }

  renderUploadDropArea() {
    const {disabled} = this;
    return html`
      <exmg-upload-drop-area
        description=${this.renderDescription()}
        ?disabled=${disabled}
        @browse-files=${this.openFileSelector}
        @remove-file=${this._handleRemove}
        @drop=${this._handleChange}
      >
        <slot slot="drop-icon" name="drop-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24">
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <path
                d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"
              />
            </g>
          </svg>
        </slot>
        <slot slot="drop-text" name="drop-text"
          >Drag and drop, or <a href="#" @click=${this.openFileSelector}>browse</a> your files</slot
        >
      </exmg-upload-drop-area>
    `;
  }

  render() {
    const {_isCropping, accept, disabled} = this;

    if (_isCropping) {
      return this.renderUploadCrop();
    }

    return html`
      <div class="image-upload-wrapper ${classMap({disabled: !!this.disabled})}">
        ${this.renderUploadDropArea()}

        <form id="form-upload" enctype="multipart/form-data">
          <input
            id="file"
            type="file"
            name="file"
            tabindex="-1"
            accept=${ifDefined(accept)}
            ?disabled=${disabled}
            @change=${this._handleChange}
            ?multiple=${this.multiple}
            hidden
          />
        </form>
      </div>

      <!-- Upload Items list -->
      <div class="item-container">${this.renderFileItems()}</div>
    `;
  }
}
