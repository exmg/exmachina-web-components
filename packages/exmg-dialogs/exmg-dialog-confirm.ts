import { html, LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@material/mwc-icon-button';
import { PaperDialogElement } from '@polymer/paper-dialog';
import '@polymer/paper-dialog';
import '@exmg/exmg-button/exmg-button.js';
import '@polymer/iron-form';
import { style } from './styles/exmg-dialog-styles-css.js';
import { closeIcon, warningIcon } from './exmg-dialog-icons.js';

/**
 * exmg-dialog-confirm
 *
 * Dialog element useful for confirmation prompts.
 *
 * @customElement exmg-dialog-confirm
 * @extends LitElement
 */
@customElement('exmg-dialog-confirm')
export class ExmgConfirmDialog extends LitElement {
  /**
   * Title of the dialog
   * @type {String}
   */
  @property({ type: String })
  title = '';

  /**
   * Dialog message to display as confirmation question. Alternative would be to just add a slot body including a message.
   * @type {String}
   */
  @property({ type: String })
  message = '';

  /**
   * Hide close button ?
   * @type {Boolean}
   */
  @property({ type: Boolean, attribute: 'hide-close-button' })
  hideCloseButton = false;

  /**
   * Copy for submit button
   * @type {String}
   */
  @property({ type: String, attribute: 'button-copy' })
  buttonCopy = '';

  /**
   * Indicator if submit is in progress This boolean will display the progress
   * bar at the bottom of the dialog
   * @type {Boolean}
   */
  @property({ type: Boolean, reflect: true })
  submitting = false;

  /**
   * When set this will be shown in the error section of the dialog
   * @type {String}
   */
  @property({ type: String, attribute: 'error-message' })
  errorMessage?: string;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  @query('#submitBtn')
  private submitBtnNode?: PaperDialogElement;

  /**
   * Determine if a slot needs to be used or show the message
   * @type {Boolean}
   */
  @property({ type: Boolean })
  hasSlotContent = false;

  /**
   * Sets the action for scroll behaviour within the dialog
   * @type {String}
   */
  @property({ type: String, attribute: 'scroll-action' })
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  private observer?: MutationObserver;

  static styles = [style];

  constructor() {
    super();

    this.onCloseDialog = this.onCloseDialog.bind(this);
    this.submit = this.submit.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // Options for the observer (which mutations to observe)
    const config = { attributes: false, childList: true, subtree: false };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver((list: MutationRecord[]) => {
      for (const mutation of list) {
        if (mutation.type === 'childList') {
          this.hasSlotContent = this.children.length > 0;
        }
      }
    });

    // Start observing the target node for configured mutations
    this.observer.observe(this, config);

    // Set initial slot state
    this.hasSlotContent = this.children.length > 0;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Clean observer if needed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private onCloseDialog() {
    this.reset();
  }

  /**
   * Opens the dialog node
   * @public
   */
  open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  /**
   * Closes the dialog node
   * @public
   */
  close() {
    if (this.dialogNode) {
      this.dialogNode.close();
    }
  }

  /**
   * @private
   */
  private reset() {
    this.submitting = false;
    this.errorMessage = undefined;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  /**
   * @deprecated handleError method should be used
   */
  error(error: Error) {
    this.submitting = false;
    this.errorMessage = error.message;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  /**
   * Dialog error handler
   * @param errorMessage
   */
  handleError(errorMessage: string) {
    this.submitting = false;
    this.errorMessage = errorMessage;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  /**
   * Reset and close the dialog
   */
  done() {
    // Reset properties when submit is finished
    this.submitting = false;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }

    // Close dialog
    this.close();
  }

  /**
   * @private
   */
  private cancel() {
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: false, composed: true }));
  }

  /**
   * @private
   */
  private submit() {
    // reset error message on new submit
    this.errorMessage = undefined;

    // Disabled submit button + display progress bar
    this.submitting = true;

    if (this.submitBtnNode) {
      this.submitBtnNode.setAttribute('disabled', 'disabled');
    }

    // dispatch event
    this.dispatchEvent(new CustomEvent('submit', { bubbles: false, composed: true }));
  }

  /**
   * @protected
   */
  protected render() {
    return html`
      <paper-dialog
        id="dialog"
        scroll-action=${ifDefined(this.scrollAction)}
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this.onCloseDialog}"
      >
        ${this.hideCloseButton
          ? ''
          : html` <mwc-icon-button @click=${this.close} class="close-button">${closeIcon}</mwc-icon-button> `}
        <header>${this.title ? html` <h2 class="title">${this.title}</h2> ` : ''}</header>
        <div class="body">
          <div class="error ${this.errorMessage ? 'show' : ''}">
            <span class="body">
              ${warningIcon}
              <span class="msg">${this.errorMessage}</span>
            </span>
          </div>
          ${this.hasSlotContent ? html` <slot></slot> ` : html` <p>${this.message}</p> `}
        </div>
        <div class="actions">
          <exmg-button dialog-dismiss @click=${this.cancel}>Cancel</exmg-button>
          <exmg-button id="submitBtn" @click=${this.submit} ?loading="${this.submitting}"
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-dialog-confirm': ExmgConfirmDialog;
  }
}
