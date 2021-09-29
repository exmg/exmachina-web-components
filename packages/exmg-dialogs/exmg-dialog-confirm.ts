import {html, LitElement} from 'lit';
import {property, customElement, query} from 'lit/decorators'
import '@material/mwc-icon-button';
import {PaperDialogElement} from '@polymer/paper-dialog';
import '@polymer/paper-dialog';
import '@exmg/exmg-button/exmg-button.js';
import '@polymer/iron-form';
import {style} from './styles/exmg-dialog-styles-css';
import {closeIcon, warningIcon} from './exmg-dialog-icons';

@customElement('exmg-dialog-confirm')
export class ExmgConfirmDialog extends LitElement {
  /**
   * Title of the dialog
   */
  @property({type: String})
  public title = '';

  /**
   * Dialog message to display as confirmation question. Alternative would be to just add a slot body including a message.
   */
  @property({type: String})
  private message = '';

  /**
   * Hide close button ?
   */
  @property({type: Boolean, attribute: 'hide-close-button'})
  private hideCloseButton = false;

  /**
   * Copy for submit button
   */
  @property({type: String, attribute: 'button-copy'})
  private buttonCopy = '';

  /**
   * Indicator if submit is in progress This boolean will display the progress
   * bar at the bottom of the dialog
   */
  @property({type: Boolean, reflect: true})
  private submitting = false;

  /**
   * When set this will be shown in the error section of the dialog
   */
  @property({type: String, attribute: 'error-message'})
  private errorMessage?: string;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  @query('#submitBtn')
  private submitBtnNode?: PaperDialogElement;

  @property({type: Boolean})
  private hasSlotContent = false;

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
    const config = {attributes: false, childList: true, subtree: false};

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver((list: MutationRecord[]) => {
      for (const mutation of list) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
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

  public open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  public close() {
    if (this.dialogNode) {
      this.dialogNode.close();
    }
  }

  private reset() {
    this.submitting = false;
    this.errorMessage = undefined;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  public error(error: Error) {
    this.submitting = false;
    this.errorMessage = error.message;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  public done() {
    // Reset properties when submit is finished
    this.submitting = false;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }

    // Close dialog
    this.close();
  }

  private cancel() {
    this.dispatchEvent(
      new CustomEvent('cancel', {bubbles: false, composed: true})
    );
  }

  private submit() {
    // reset error message on new submit
    this.errorMessage = undefined;

    // Disabled submit button + display progress bar
    this.submitting = true;

    if (this.submitBtnNode) {
      this.submitBtnNode.setAttribute('disabled', 'disabled');
    }

    // dispatch event
    this.dispatchEvent(
      new CustomEvent('submit', {bubbles: false, composed: true})
    );
  }

  protected render() {
    return html`
      <paper-dialog
        id="dialog"
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this.onCloseDialog}"
      >
        ${this.hideCloseButton
          ? ''
          : html`
              <mwc-icon-button @click=${this.close} class="close-button"
                >${closeIcon}</mwc-icon-button
              >
            `}
        <header>
          ${!!this.title ? html` <h2 class="title">${this.title}</h2> ` : ''}
        </header>
        <div class="body">
          <div class="error ${!!this.errorMessage ? 'show' : ''}">
            <span class="body">
              ${warningIcon}
              <span class="msg">${this.errorMessage}</span>
            </span>
          </div>
          ${this.hasSlotContent
            ? html` <slot></slot> `
            : html` <p>${this.message}</p> `}
        </div>
        <div class="actions">
          <exmg-button dialog-dismiss @click=${this.cancel}>Cancel</exmg-button>
          <exmg-button
            id="submitBtn"
            @click=${this.submit}
            ?loading="${this.submitting}"
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `;
  }
}
