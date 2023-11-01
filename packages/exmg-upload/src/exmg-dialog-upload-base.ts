import { html } from 'lit';

import '@material/web/dialog/dialog.js';
import { MdDialog } from '@material/web/dialog/dialog.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

import { property, query, state } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base';
import { ExmgUpload } from './exmg-upload.js';
import { FileData } from './types.js';

export const CLOSE_ACTION = 'close';

export class ExmgDialogUploadBase extends ExmgElement {
  /**
   * Opens the dialog when set to `true` and closes it when set to `false`.
   */
  @property({ type: Boolean }) open = false;

  /**
   * Set to make the dialog position draggable.
   */
  @property({ type: Boolean }) override draggable = false;

  /**
   * Title of the dialog
   */
  @property({ type: String }) title = 'Upload files';

  @property({ type: String }) type?: 'alert' | undefined = 'alert';

  /**
   * Submit button copy
   */
  @property({ type: String }) submitBtn = 'Save';

  /**
   * Cancel button copy
   */
  @property({ type: String }) cancelBtn = 'Cancel';

  /**
   * Icon of the dialog
   */
  @property({ type: String }) icon = 'close';

  /**
   * Internall used to show button spinner.
   */
  @property({ type: Boolean }) submitting = false;

  @query('md-dialog') protected dialog!: MdDialog;

  @state()
  _cropMode = false;

  @state()
  _hasItems = false;

  protected getUploadElement() {
    return this.shadowRoot!.querySelector('exmg-upload') as ExmgUpload;
  }

  /**
   * Copy for done button
   */
  @property({ type: String })
  buttonSaveCopy = 'Save';

  /**
   * Copy for image crop done button
   */
  @property({ type: String })
  buttonCropDoneCopy = 'Done';

  firstUpdated() {
    const uploadElement = this.getUploadElement();
    if (uploadElement) {
      uploadElement.isModeDialog = true;
    }
  }

  _startCrop() {
    this._cropMode = true;
  }

  _stopCrop() {
    this._cropMode = false;
  }

  /**
   * Opens and shows the dialog. This is equivalent to setting the `open`
   * property to true.
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the dialog. This is equivalent to setting the `open`
   * property to false.
   */
  close() {
    this.open = false;
  }

  /**
   * Opens and shows the dialog if it is closed; otherwise closes it.
   */
  toggleShow() {
    if (this.open) {
      this.close();
    } else {
      this.show();
    }
  }

  _getImageUploadElement() {
    return this.querySelector('exmg-upload');
  }

  _handleSuccess() {
    this._hasItems = true;
  }

  _handleClose() {
    this.open = false;
  }

  _handleFilesChanged(e: CustomEvent<{ files: FileData[] }>) {
    const hasFiles = (e.detail.files || []).filter((f) => f.status === 'UPLOADED').length > 0;
    this._hasItems = hasFiles;
  }

  /**
   * Action method that needs to be implemented
   * @param {CustomEvent} e
   */
  doAction?(url?: string): Promise<void> | void;

  protected async _handleSubmit() {
    const uploadElement = this.getUploadElement();
    const [url] = uploadElement.getValues() || [];

    if (this.doAction) {
      try {
        this.submitting = true;
        await this.doAction(url);
      } catch (error) {
        this.fire('dialog-error', { message: error instanceof Error ? error.message : 'Unkbnown error' }, true);
      } finally {
        this.submitting = false;
        this.close();
      }
    } else {
      this.fire('dialog-submit', { url }, true);
    }
  }

  _cancelActiveCrop() {
    const uploadElement = this.getUploadElement();
    if (uploadElement) {
      uploadElement.cancelActiveCrop();
    }
  }

  _saveActiveCrop() {
    const uploadElement = this.getUploadElement();
    if (uploadElement) {
      uploadElement.saveActiveCrop();
    }
  }

  /**
   * Method should be overriden to render upload element
   */
  protected renderContent() {
    return html`<slot></slot>`;
  }

  renderActions() {
    if (this._cropMode) {
      return html`
        <md-text-button slot="footer" dialogFocus @click=${this._cancelActiveCrop}>Back</md-text-button>
        <md-filled-button slot="footer" @click=${this._saveActiveCrop}>${this.buttonCropDoneCopy}</md-filled-button>
      `;
    }
    return html`
      <md-text-button slot="footer" dialogFocus @click=${() => this.close()}>${this.cancelBtn}</md-text-button>
      <md-filled-button slot="footer" @click=${this._handleSubmit} ?disabled=${!this._hasItems || this.submitting}
        >${this.buttonSaveCopy}</md-filled-button
      >
    `;
  }

  protected override render() {
    const { type, draggable } = this;
    return html` <md-dialog .draggable=${draggable} .type=${type} .open=${this.open} @close=${this._handleClose}>
      <span slot="headline">
        <md-icon-button @click=${() => this.close()}><md-icon>close</md-icon></md-icon-button>
        <span class="headline">${this.title}</span>
      </span>
      <div slot="content">
        <div class="content">
          <span
            @files-changed=${this._handleFilesChanged}
            @upload-success=${this._handleSuccess}
            @crop-cancel=${this._stopCrop}
            @crop-done=${this._stopCrop}
            @crop-start=${this._startCrop}
            >${this.renderContent()}</span
          >
        </div>
      </div>
      <div slot="actions">${this.renderActions()}</div>
    </md-dialog>`;
  }
}
