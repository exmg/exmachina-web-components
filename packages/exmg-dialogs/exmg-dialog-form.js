import { __decorate } from "tslib";
import { customElement, html, LitElement, property, query } from 'lit-element';
import '@polymer/paper-dialog';
import '@material/mwc-icon-button';
import '@polymer/paper-dialog-scrollable';
import '@exmg/exmg-button/exmg-button';
import '@polymer/iron-form';
import { style } from './styles/exmg-dialog-styles-css';
import { closeIcon, warningIcon } from './exmg-dialog-icons';
let ExmgFormDialog = class ExmgFormDialog extends LitElement {
    constructor() {
        super();
        /**
         * Title of the dialog
         */
        this.title = '';
        /**
         * Copy for submit button
         */
        this.buttonCopy = '';
        /**
         * Hide close button ?
         */
        this.hideCloseButton = false;
        /**
         * Indicator if submit is in progress This boolean will display the progress
         * bar at the bottom of the dialog
         */
        this.submitting = false;
        this.onCloseDialog = this.onCloseDialog.bind(this);
        this.submit = this.submit.bind(this);
    }
    onCloseDialog(e) {
        /* only reset form if close event originates from dialog */
        const eventPath = e.path
            ? e.path
            : e.composedPath();
        if (eventPath[0] instanceof Element &&
            eventPath[0].tagName === 'PAPER-DIALOG') {
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
    reset() {
        this.submitting = false;
        this.errorMessage = undefined;
        if (this.submitBtnNode) {
            this.submitBtnNode.removeAttribute('disabled');
        }
        if (this.formNode) {
            this.formNode.reset();
        }
    }
    error(error) {
        this.submitting = false;
        this.errorMessage = error.message;
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
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: false, composed: true }));
    }
    submit() {
        // reset error message on new submit
        this.errorMessage = undefined;
        // Validate form elements
        if (!this.formNode.validate()) {
            return;
        }
        // Disabled submit button + display progress bar
        this.submitting = true;
        if (this.submitBtnNode) {
            this.submitBtnNode.setAttribute('disabled', 'disabled');
        }
        // dispatch event containing the serialized form data
        this.dispatchEvent(new CustomEvent('submit', {
            bubbles: false,
            composed: true,
            detail: this.formNode.serializeForm(),
        }));
    }
    render() {
        return html `
      <paper-dialog
        id="dialog"
        with-backdrop
        no-cancel-on-outside-click
        @iron-overlay-closed="${this.onCloseDialog}"
      >
        ${this.hideCloseButton
            ? ''
            : html `
              <mwc-icon-button @click=${this.close} class="close-button"
                >${closeIcon}</mwc-icon-button
              >
            `}
        <header>
          ${!!this.title ? html ` <h2 class="title">${this.title}</h2> ` : ''}
        </header>
        <paper-dialog-scrollable>
          <div class="body">
            <div class="error ${!!this.errorMessage ? 'show' : ''}">
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
};
ExmgFormDialog.styles = [style];
__decorate([
    property({ type: String })
], ExmgFormDialog.prototype, "title", void 0);
__decorate([
    property({ type: String, attribute: 'button-copy' })
], ExmgFormDialog.prototype, "buttonCopy", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-close-button' })
], ExmgFormDialog.prototype, "hideCloseButton", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ExmgFormDialog.prototype, "submitting", void 0);
__decorate([
    property({ type: String, attribute: 'error-message' })
], ExmgFormDialog.prototype, "errorMessage", void 0);
__decorate([
    query('#dialog')
], ExmgFormDialog.prototype, "dialogNode", void 0);
__decorate([
    query('#form')
], ExmgFormDialog.prototype, "formNode", void 0);
__decorate([
    query('#submitBtn')
], ExmgFormDialog.prototype, "submitBtnNode", void 0);
ExmgFormDialog = __decorate([
    customElement('exmg-dialog-form')
], ExmgFormDialog);
export { ExmgFormDialog };
//# sourceMappingURL=exmg-dialog-form.js.map