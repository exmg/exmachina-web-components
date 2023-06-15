import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';

import { ExmgUploadCrop } from './exmg-upload-crop.js';
import { FileData, FileUploadError } from './types.js';

// File upload imports
import './exmg-upload-item.js';
import './exmg-upload-crop.js';
import './exmg-upload-drop-area.js';

import { isCorrectResolution, isImage, isSizeValid, isTypeValidExtension } from './utils.js';
import { classMap } from 'lit/directives/class-map.js';
import { ExmgElement, observer } from '@exmg/lit-base';

import Cropper from 'cropperjs';

export class ExmgUploadBase extends ExmgElement {
  /**
   * The id of the element that the upload is anchored to. This element
   * must be a sibling of the upload.
   */
  @property({ type: String })
  for?: string;
  /**
   * Files addded to component
   */
  @property({ type: Array })
  files: FileData[] = [];

  /**
   * Accepted file types seperated by comma
   */
  @property({ type: String })
  accept? = '';

  /**
   * The max file size allowed to upload e.g. '20mb'
   */
  @property({ type: String })
  maxSize: string = '100mb';

  /**
   * Determines if multiple files can be selected. When false maxAmount is set to 1 automatically
   */
  @property({ type: Boolean })
  multiple = false;

  /**
   * The max amount of items allowed to upload when in multiple mode
   */
  @property({ type: Number })
  maxAmount?: number;

  /**
   * Disable the upload component useful for forms
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Admin User session will be set on request header for authentication
   */
  @property({ type: String })
  customAdapterPath?: string;

  /**
   * Optional property. If not set it will look for the window.emconfig.backendHost
   */
  @property({ type: String })
  uploadUrl?: string;

  /**
   * The upload response type
   */
  @property({ type: String })
  responseType: '' | 'json' | 'text' | 'blob' | 'arraybuffer' = 'json';

  /**
   * The upload response type
   */
  @property({ type: String })
  serverType: 'xhr' | 'custom' | 'local' = 'xhr';

  /**
   * The CropperJS config see: https://github.com/fengyuanchen/cropperjs#options
   */
  @property({ type: Object })
  @observer(function (this: ExmgUploadBase, value: Cropper.Options) {
    this._cropperConfig = { ...this._cropperConfig, ...value };
  })
  cropperConfig: Cropper.Options = {};

  @state()
  _cropperConfig: Cropper.Options = {
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

  @property({ type: Boolean })
  isModeDialog = false;

  /**
   * Internal state to check if file is uploaded or not
   */
  @state()
  _uploaded = false;

  @query('#crop-dialog')
  cropSection?: ExmgUploadCrop;

  /**
   * Allow cropping can only be used when fixedResolution is not set
   */
  @property({ type: Boolean })
  allowCropping: boolean = false;

  /**
   * when set the image must be exactly the given resolution (for example 600x400)
   */
  @property({ type: String })
  fixedResolution?: string;

  @query('#file')
  fileElement?: HTMLInputElement;

  @query('.item-container')
  itemContainer?: ExmgUploadCrop;

  getValues() {
    return this.files.filter((file) => file.status === 'UPLOADED').map((file) => file.url);
  }

  /**
   * Returns the target element that this upload is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the upload.
   */
  get target() {
    const parentNode = this.parentNode;
    // If the parentNode is a document fragment, then we need to use the host.
    const ownerRoot = parentNode!.getRootNode();

    let target;
    if (this.for) {
      target = (ownerRoot as HTMLElement).querySelector<HTMLElement>('#' + this.for);
    } else {
      // @ts-ignore
      target = parentNode!.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? ownerRoot.host : parentNode;
    }

    return target;
  }

  /**
   * Extract files from either file input or drop event
   * @param event
   * @returns FileList[] | []
   */
  private _getFiles(event: Event | DragEvent) {
    const { files } =
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

  _updateTarget() {
    const target = this.target;
    if (target) {
      if (!this.multiple && this.getValues().length > 0) {
        target.value = this.getValues()[0];
      } else {
        target.value = '';
      }
    }
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

    this.fire('files-changed', { files: this.files }, true);

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
  private async _validateFile(item: FileData) {
    if (!isSizeValid(item.file.size, this.maxSize)) {
      this._handleError(FileUploadError.INVALID_SIZE, item);
    }
    if (!isTypeValidExtension(item.file, this.accept || '')) {
      this._handleError(FileUploadError.INVALID_TYPE, item);
    }
    if (this.maxAmount && this.files.length >= this.maxAmount) {
      this._handleError(FileUploadError.INVALID_AMOUNT, item);
    }
    if (!this.multiple && this.files.length >= 1) {
      this._handleError(FileUploadError.INVALID_MULTIPLE, item);
    }

    const _isImage = isImage(item.file);
    if (_isImage && this.fixedResolution) {
      const isCorrect = await isCorrectResolution(item.file, this.fixedResolution);
      if (!isCorrect) {
        this._handleError(FileUploadError.INVALID_RESOLUTION, item);
      }
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

  /**
   * Removes file from files array
   * @param id
   */
  private removeFile(id: string) {
    this.files = this.files.filter((item) => {
      return item.id !== id;
    });

    this.fire('file-removed', id);
    this.fire('files-changed', { files: this.files }, true);
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
    const { accept, maxSize, fixedResolution } = this;
    return `Only ${accept ? accept.replace(/,/g, ' ') : ''} files${
      fixedResolution ? ` of resolution ${fixedResolution} px` : ''
    } that do not exceed ${maxSize} in size`;
  }

  /**
   * Renders the file items
   */
  renderFileItems() {
    return repeat(
      this.files || [],
      (file) => file.id,
      (item: FileData) =>
        html`<exmg-upload-item
          class="item"
          id=${item.id}
          @upload-success=${this._updateTarget}
          @edit-image=${this._handleCropping}
          @remove-item=${this._handleRemove}
          uploadUrl=${ifDefined(this.uploadUrl)}
          customAdapterPath=${ifDefined(this.customAdapterPath)}
          serverType=${this.serverType}
          responseType=${this.responseType}
          ?allowCropping=${!this.fixedResolution && this.allowCropping}
          .item=${item}
        ></exmg-upload-item>`,
    );
  }

  renderUploadCrop() {
    const { _cropperConfig } = this;
    return html`
      <exmg-upload-crop
        id="crop-dialog"
        ?hideActions=${this.isModeDialog}
        @crop-done=${this._handleCropDone}
        @crop-cancel=${this.cancelActiveCrop}
        .cropperConfig=${_cropperConfig}
      ></exmg-upload-crop>
    `;
  }

  renderUploadDropArea() {
    const { disabled } = this;
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
    const { _isCropping, accept, disabled } = this;

    if (_isCropping) {
      return this.renderUploadCrop();
    }

    return html`
      <div class="image-upload-wrapper ${classMap({ disabled: !!this.disabled })}">
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
