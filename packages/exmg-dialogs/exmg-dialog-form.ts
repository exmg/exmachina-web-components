import {html} from 'lit';
import {property} from 'lit/decorators/property.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {query} from 'lit/decorators/query.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
import '@polymer/paper-dialog';
import '@material/mwc-icon-button';
import {PaperDialogElement} from '@polymer/paper-dialog';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import {IronFormElement} from '@polymer/iron-form';
import {style} from './styles/exmg-dialog-styles-css.js';
import {ExmgButton} from '@exmg/exmg-button/exmg-button.js';
import {closeIcon, warningIcon} from './exmg-dialog-icons';

interface ExmgCustomEvent extends CustomEvent {
  path: HTMLElement[];
}

@customElement('exmg-dialog-form')
export class ExmgFormDialog extends ExmgElement {
  /**
   * Title of the dialog
   */
  @property({type: String})
  title = '';

  /**
   * Copy for submit button
   */
  @property({type: String, attribute: 'button-copy'})
  buttonCopy = '';

  /**
   * Hide close button ?
   */
  @property({type: Boolean, attribute: 'hide-close-button'})
  hideCloseButton = false;

  /**
   * Indicator if submit is in progress This boolean will display the progress
   * bar at the bottom of the dialog
   */
  @property({type: Boolean, reflect: true})
  submitting = false;

  /**
   * When set this will be shown in the error section of the dialog
   */
  @property({type: String, attribute: 'error-message'})
  errorMessage?: string;

  @query('#dialog')
  private dialogNode?: PaperDialogElement;

  @query('#form')
  private formNode?: IronFormElement;

  @query('#submitBtn')
  private submitBtnNode?: ExmgButton;

  @property({type: String, attribute: 'scroll-action'})
  scrollAction?: 'lock' | 'refit' | 'cancel' | undefined;

  static styles = [style];

  constructor() {
    super();
    this.onCloseDialog = this.onCloseDialog.bind(this);
    this.submit = this.submit.bind(this);
  }

  private onCloseDialog(e: ExmgCustomEvent) {
    /* only reset form if close event originates from dialog */
    const eventPath: EventTarget[] = (e as any).path ? (e as any).path : e.composedPath();
    if (eventPath[0] instanceof Element && eventPath[0].tagName === 'PAPER-DIALOG') {
      this.reset();
    }
  }

  open() {
    if (this.dialogNode) {
      this.dialogNode.open();
    }
  }

  close() {
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

    if (this.formNode) {
      this.formNode.reset();
    }
  }

  /**
   *
   * @deprecated handleError method should be used
   */
  error(error: Error) {
    this.submitting = false;
    this.errorMessage = error.message;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  handleError(errorMessage: string) {
    this.submitting = false;
    this.errorMessage = errorMessage;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }
  }

  done() {
    // Reset properties when submit is finished
    this.submitting = false;

    if (this.submitBtnNode) {
      this.submitBtnNode.removeAttribute('disabled');
    }

    // Close dialog
    this.close();
  }

  private cancel() {
    this.dispatchEvent(new CustomEvent('cancel', {bubbles: false, composed: true}));
  }

  submit() {
    // reset error message on new submit
    this.errorMessage = undefined;

    // Validate form elements
    if (!this.formNode!.validate()) {
      return;
    }

    // Disabled submit button + display progress bar
    this.submitting = true;

    if (this.submitBtnNode) {
      this.submitBtnNode.setAttribute('disabled', 'disabled');
    }

    // dispatch event containing the serialized form data
    this.dispatchEvent(
      new CustomEvent('submit', {
        bubbles: false,
        composed: true,
        detail: this.formNode!.serializeForm(),
      }),
    );
  }

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
        <paper-dialog-scrollable>
          <div class="body">
            <div class="error ${this.errorMessage ? 'show' : ''}">
              <span class="body">
                ${warningIcon}
                <span class="msg">${this.errorMessage}</span>
              </span>
            </div>
            <iron-form id="form">
              <form>
                <slot></slot>
              </form>
            </iron-form>
          </div>
        </paper-dialog-scrollable>
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
    'exmg-dialog-form': ExmgFormDialog;
  }
}
