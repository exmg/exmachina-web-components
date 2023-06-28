import { html } from 'lit';

import '@material/web/dialog/dialog.js';
import { MdDialog } from '@material/web/dialog/dialog.js';
import '@material/web/button/tonal-button.js';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/icon/icon.js';

import { property, query, state } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base';

export const CLOSE_ACTION = 'close';

const serializeForm = (form) => {
  var obj = {};
  var formData = new FormData(form);
  for (var key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return obj;
};

export class ExmgDialogFormBase extends ExmgElement {
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
  @property({ type: String }) title = 'Create entry';

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

  @state() private formValid = false;

  @query('md-dialog') protected dialog!: MdDialog;

  boundHandleBlur?: (e: Event) => void;

  protected getForm() {
    return this.shadowRoot!.querySelector('form');
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

  protected _handleBlur(e: Event) {
    // @ts-ignore
    typeof e.target.reportValidity === 'function' && e.target.reportValidity();

    this._checkFormValidity();
  }

  protected firstUpdated() {
    const form = this.getForm();

    this.boundHandleBlur = this._handleBlur.bind(this);
    form!.addEventListener('blur', this.boundHandleBlur, true);
  }

  disconnectedCallback() {
    const form = this.getForm();
    this.boundHandleBlur && form!.addEventListener('blur', this.boundHandleBlur, true);
    super.disconnectedCallback();
  }

  protected _checkFormValidity() {
    const form = this.getForm();

    const formElements = form?.elements;
    let allValid = true;

    for (const el of formElements || []) {
      // @ts-ignore
      const isValid = typeof el.reportValidity === 'function' && el.checkValidity();
      if (!isValid) {
        allValid = false;
      }
    }

    this.formValid = allValid;
  }

  /**
   * Action method that needs to be implemented
   * @param {CustomEvent} e
   */
  doAction?(formData: unknown): Promise<void> | void;

  protected async handleSubmit() {
    const form = this.getForm();

    // Return when there are invalid fields
    if (!this.formValid) {
      return;
    }

    // Serialize form data
    const data = serializeForm(form!);

    if (this.doAction) {
      try {
        this.submitting = true;
        await this.doAction(data);
      } catch (error) {
        this.fire('dialog-error', { message: error instanceof Error ? error.message : 'Unkbnown error' }, true);
      } finally {
        this.submitting = false;
        this.open = false;
      }
    } else {
      this.fire('dialog-submit', data, true);
    }
  }

  /**
   * Method should be overriden to render form content
   */
  protected renderFormContent() {
    return html`<slot></slot>`;
  }

  protected render() {
    const { fullscreen, modeless, stacked, draggable, transition } = this;
    return html` <md-dialog
      .fullscreen=${fullscreen}
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
      <div class="content">${this.renderFormContent()}</div>
      <md-text-button slot="footer" dialogFocus @click=${() => this.close()}>${this.cancelBtn}</md-text-button>
      <md-tonal-button slot="footer" @click=${this.handleSubmit} ?disabled=${this.submitting || !this.formValid}
        >${this.submitBtn}</md-tonal-button
      >
    </md-dialog>`;
  }
}
