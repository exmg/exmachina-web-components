import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { ExmgElement } from '@exmg/lit-base/src/exmg-element.js';
import { PaperDialogElement } from '@polymer/paper-dialog';

import '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import '@material/mwc-icon-button';

import { closeIcon } from '@exmg/exmg-dialogs/exmg-dialog-icons.js';

export class ExmgUploadDialogBase extends ExmgElement {
  /**
   * Title of the dialog
   */
  @property({ type: String })
  title = '';

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

  /**
   * Hide close button ?
   */
  @property({ type: Boolean })
  hideCloseButton = false;

  @property({ type: String, attribute: 'scroll-action' })
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  @query('#dialog')
  _dialogNode?: PaperDialogElement;

  @state()
  _cropMode = false;

  @state()
  _hasItems = false;

  _getImageUploadElement() {
    return this.querySelector('exmg-upload');
  }

  firstUpdated() {
    const uploadElement = this._getImageUploadElement();
    if (uploadElement) {
      uploadElement.isModeDialog = true;
    }
  }

  open() {
    if (this._dialogNode) {
      this._dialogNode.open();
    }
  }

  close() {
    if (this._dialogNode) {
      this._dialogNode.close();
    }
  }

  _save() {
    const uploadElement = this._getImageUploadElement();
    if (uploadElement) {
      const urls = uploadElement.getValues();
      this.fire('upload-save', { urls }, true);
    }
  }

  renderHeader() {
    return html`
      ${this.title
        ? html`
            <header>
              <h2 class="title">${this.title}</h2>
            </header>
          `
        : html` <div class="top-margin">&nbsp;</div> `}
    `;
  }

  center() {
    setTimeout(() => this._dialogNode?.center(), 10);
  }

  _onCloseDialog() {
    const uploadElement = this._getImageUploadElement();
    if (uploadElement) {
      uploadElement.reset();
    }
    this._cropMode = false;
  }

  _startCrop() {
    this._cropMode = true;
    this.center();
  }

  _stopCrop() {
    this._cropMode = false;
    this.center();
  }

  _cancelActiveCrop() {
    const uploadElement = this._getImageUploadElement();
    if (uploadElement) {
      uploadElement.cancelActiveCrop();
    }
  }

  _saveActiveCrop() {
    const uploadElement = this._getImageUploadElement();
    if (uploadElement) {
      uploadElement.saveActiveCrop();
    }
  }

  renderActions() {
    if (this._cropMode) {
      return html`
        <div class="actions">
          <exmg-button @click=${this._cancelActiveCrop}>Back</exmg-button>
          <exmg-button @click=${this._saveActiveCrop}>${this.buttonCropDoneCopy}</exmg-button>
        </div>
      `;
    }
    return html`
      <div class="actions">
        <exmg-button dialog-dismiss @click=${this.close}>Cancel</exmg-button>
        <exmg-button @click=${this._save} ?disabled=${!this._hasItems}>${this.buttonSaveCopy}</exmg-button>
      </div>
    `;
  }

  _handleFilesChanged(e: CustomEvent) {
    this._hasItems = e.detail.files.length > 0;
    this.center();
  }

  render() {
    return html`
      <paper-dialog
        id="dialog"
        scroll-action=${ifDefined(this.scrollAction)}
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this._onCloseDialog}"
      >
        ${this.hideCloseButton
          ? html` ${this.renderHeader()} `
          : html`
              <mwc-icon-button @click=${this.close} class="close-button">${closeIcon}</mwc-icon-button>
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot
            @files-changed=${this._handleFilesChanged}
            @crop-cancel=${this._stopCrop}
            @crop-start=${this._startCrop}
          ></slot>
        </paper-dialog-scrollable>

        ${this.renderActions()}
      </paper-dialog>
    `;
  }
}
