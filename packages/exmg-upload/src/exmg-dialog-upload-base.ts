import { html } from 'lit';

import '@material/web/dialog/dialog.js';
import { MdDialog } from '@material/web/dialog/dialog.js';
import '@material/web/button/tonal-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';

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
   * Setting fullscreen displays the dialog fullscreen on small screens.
   * This can be customized via the `fullscreenBreakpoint` property.
   * When showing fullscreen, the header will take up less vertical space, and
   * the dialog will have a `showing-fullscreen`attribute, allowing content to
   * be styled in this state.
   *
   * Dialogs can be sized by setting:
   *
   * * --md-dialog-container-min-block-size
   * * --md-dialog-container-max-block-size
   * * --md-dialog-container-min-inline-size
   * * --md-dialog-container-max-inline-size
   *
   * These are typically configured via media queries and are independent of the
   * fullscreen setting.
   */
  @property({ type: Boolean }) fullscreen = true;

  /**
   * A media query string specifying the breakpoint at which the dialog
   * should be shown fullscreen. Note, this only applies when the `fullscreen`
   * property is set.
   *
   * By default, the dialog is shown fullscreen on screens less than 600px wide
   * or 400px tall.
   */
  @property() fullscreenBreakpoint = '(max-width: 600px), (max-height: 400px)';

  /**
   * Renders footer content in a vertically stacked alignment rather than the
   * normal horizontal alignment.
   */
  @property({ type: Boolean }) stacked = false;

  /**
   * When opened, the dialog is displayed modeless or non-modal. This
   * allows users to interact with content outside the dialog without
   * closing the dialog and does not display the scrim around the dialog.
   */
  @property({ type: Boolean, reflect: true }) modeless = false;

  /**
   * Set to make the dialog position draggable.
   */
  @property({ type: Boolean }) override draggable = false;

  /**
   * Title of the dialog
   */
  @property({ type: String }) title = 'Upload files';

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
   * Transition kind. Supported options include: grow, shrink, grow-down,
   * grow-up, grow-left, and grow-right.
   *
   * Defaults to grow-down.
   */
  @property({ reflect: true }) transition = 'grow-down';

  /**
   * Internall used to show button spinner.
   */
  @property({ type: Boolean }) public submitting = false;

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
  public show() {
    this.open = true;
  }

  /**
   * Closes the dialog. This is equivalent to setting the `open`
   * property to false.
   */
  public close() {
    this.open = false;
  }

  /**
   * Opens and shows the dialog if it is closed; otherwise closes it.
   */
  public toggleShow() {
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
        <md-tonal-button slot="footer" @click=${this._saveActiveCrop}>${this.buttonCropDoneCopy}</md-tonal-button>
      `;
    }
    return html`
      <md-text-button slot="footer" dialogFocus @click=${() => this.close()}>${this.cancelBtn}</md-text-button>
      <md-tonal-button slot="footer" @click=${this._handleSubmit} ?disabled=${!this._hasItems || this.submitting}
        >${this.buttonSaveCopy}</md-tonal-button
      >
    `;
  }

  protected render() {
    const { fullscreen, modeless, stacked, draggable, transition } = this;
    return html` <md-dialog
      .fullscreen=${fullscreen}
      .fullscreenBreakpoint=${this.fullscreenBreakpoint}
      .modeless=${modeless}
      .stacked=${stacked}
      .draggable=${draggable}
      .transition=${transition!}
      .open=${this.open}
    >
      <span slot="header">
        <md-standard-icon-button @click=${() => this.close()}><md-icon>close</md-icon></md-standard-icon-button>
        <span class="headline">${this.title}</span>
      </span>
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
      ${this.renderActions()}
    </md-dialog>`;
  }
}
