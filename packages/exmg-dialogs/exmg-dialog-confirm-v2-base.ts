import { html } from 'lit';

import '@material/web/dialog/dialog.js';
import { MdDialog } from '@material/web/dialog/dialog.js';
import '@material/web/button/tonal-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';

import { property, query, state } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base';

export const CLOSE_ACTION = 'close';

export class ExmgDialogConfirmV2Base extends ExmgElement {
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
   * When the dialog is closed it disptaches `closing` and `closed` events.
   * These events have an action property which has a default value of
   * the value of this property. Specific actions have explicit values but when
   * a value is not specified, the default is used. For example, clicking the
   * scrim, pressing escape, or clicking a button with an action attribute set
   * produce an explicit action.
   *
   * Defaults to `close`.
   */
  @property() defaultAction = CLOSE_ACTION;

  /**
   * Clicking on the scrim surrounding the dialog closes the dialog.
   * The `closing` and `closed` events this produces have an `action` property
   * which is the value of this property and defaults to `close`.
   */
  @property() scrimClickAction = CLOSE_ACTION;

  /**
   * Pressing the `escape` key while the dialog is open closes the dialog.
   * The `closing` and `closed` events this produces have an `action` property
   * which is the value of this property and defaults to `close`.
   */
  @property() escapeKeyAction = CLOSE_ACTION;

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
  message = `The selected item will be permantly removed from the system. Are you sure you want to delete`;

  /**
   * Title of the dialog
   */
  @property({ type: String }) title = 'Permantly delete?';

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
  @state() private submitting = false;

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

  private async handleDelete() {
    let errorOccured = false;
    if (this.doAction) {
      try {
        this.submitting = true;
        await this.doAction();
      } catch (error) {
        console.error(error instanceof Error ? error.message : 'Unkbnown error');
        errorOccured = false;
      } finally {
        this.submitting = false;
        if (!errorOccured) {
          this.open = false;
        }
      }
    } else {
      this.fire('confirmed', {}, true);
    }
  }

  protected override render() {
    const { fullscreen, modeless, stacked, draggable, transition } = this;
    return html` <md-dialog
      style="--md-dialog-container-max-inline-size: 320px;"
      .fullscreen=${fullscreen}
      .modeless=${modeless}
      .stacked=${stacked}
      .draggable=${draggable}
      .transition=${transition!}
      .open=${this.open}
    >
      <md-icon slot="headline-prefix">delete</md-icon>
      <span slot="headline">Permanently delete?</span>
      <span class="description">${this.message}</span>
      <md-text-button slot="footer" dialogFocus @click=${() => this.close()}>Cancel</md-text-button>
      <md-tonal-button slot="footer" @click=${this.handleDelete} ?disabled=${this.submitting}>Delete</md-tonal-button>
    </md-dialog>`;
  }
}
