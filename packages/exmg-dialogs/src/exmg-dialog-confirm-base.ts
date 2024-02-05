import { html } from 'lit';

import '@material/web/dialog/dialog.js';
import { MdDialog } from '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
import '@exmg/exmg-button/exmg-filled-button.js';
import '@material/web/icon/icon.js';

import { property, query } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base';

export const CLOSE_ACTION = 'close';

export class ExmgDialogConfirmBase extends ExmgElement {
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
  @property({ type: Boolean }) fullscreen = false;

  /**
   * A media query string specifying the breakpoint at which the dialog
   * should be shown fullscreen. Note, this only applies when the `fullscreen`
   * property is set.
   *
   * By default, the dialog is shown fullscreen on screens less than 600px wide
   * or 400px tall.
   */
  @property() fullscreenBreakpoint = '(max-width: 600px), (max-height: 400px)';

  @property({ type: String }) type?: 'alert' | undefined = 'alert';

  /**
   * Hides the dialog footer, making any content slotted into the footer
   * inaccessible.
   */
  @property({ type: Boolean }) footerHidden = false;

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
   * Set to make the dialog position draggable.
   */
  @property({ type: String })
  message = `The selected item will be permanently removed from the system. Are you sure you want to delete`;

  /**
   * Title of the dialog
   */
  @property({ type: String }) title = 'Permanently delete?';

  /**
   * Submit button copy
   */
  @property({ type: String }) submitBtn = 'Delete';

  /**
   * Cancel button copy
   */
  @property({ type: String }) cancelBtn = 'Cancel';

  /**
   * Icon of the dialog
   */
  @property({ type: String }) icon = 'delete';

  /**
   * Transition kind. Supported options include: grow, shrink, grow-down,
   * grow-up, grow-left, and grow-right.
   *
   * Defaults to grow-down.
   */
  @property({ reflect: true }) transition = 'grow-down';

  /**
   * Used to show button spinner.
   */
  @property({ type: Boolean }) submitting = false;

  @query('md-dialog') protected dialog!: MdDialog;

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

  /**
   * Action method that needs to be implemented
   * @param {CustomEvent} e
   */
  doAction?(): Promise<void> | void;

  private async handleSubmit() {
    if (this.doAction) {
      try {
        this.submitting = true;
        await this.doAction();
      } catch (error) {
        this.fire('dialog-error', { message: error instanceof Error ? error.message : 'Unknown error' }, true);
      } finally {
        this.submitting = false;
      }
    } else {
      this.fire('dialog-confirmed', {}, true);
    }
  }

  protected override render() {
    const { type, draggable } = this;
    return html` <md-dialog
      .type=${type}
      .draggable=${draggable}
      .open=${this.open}
      @closed=${() => (this.open = false)}
    >
      <md-icon slot="headline-prefix">${this.icon}</md-icon>
      <span slot="headline">${this.title}</span>
      <div slot="content"><span class="description">${this.message}</span></div>
      <div slot="actions">
        <md-text-button dialogFocus @click=${() => this.close()}>${this.cancelBtn}</md-text-button>
        <exmg-filled-button @click=${this.handleSubmit} ?disabled=${this.submitting} ?loading=${this.submitting}
          >${this.submitBtn}</exmg-filled-button
        >
      </div>
    </md-dialog>`;
  }
}
