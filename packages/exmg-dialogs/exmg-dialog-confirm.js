import { __decorate } from "tslib";
import { customElement, html, LitElement, property, query } from "lit-element";
import "@material/mwc-icon-button";
import "@polymer/paper-dialog";
import "@exmg/exmg-button/exmg-button.js";
import "@polymer/iron-form";
import { style } from "./styles/exmg-dialog-styles-css";
import { closeIcon, warningIcon } from "./exmg-dialog-icons";
let ExmgConfirmDialog = class ExmgConfirmDialog extends LitElement {
    constructor() {
        super();
        /**
         * Title of the dialog
         */
        this.title = "";
        /**
         * Dialog message to display as confirmation question. Alternative would be to just add a slot body including a message.
         */
        this.message = "";
        /**
         * Hide close button ?
         */
        this.hideCloseButton = false;
        /**
         * Copy for submit button
         */
        this.buttonCopy = "";
        /**
         * Indicator if submit is in progress This boolean will display the progress
         * bar at the bottom of the dialog
         */
        this.submitting = false;
        this.hasSlotContent = false;
        this.onCloseDialog = this.onCloseDialog.bind(this);
        this.submit = this.submit.bind(this);
    }
    connectedCallback() {
        super.connectedCallback();
        // Options for the observer (which mutations to observe)
        const config = { attributes: false, childList: true, subtree: false };
        // Create an observer instance linked to the callback function
        this.observer = new MutationObserver((list) => {
            for (const mutation of list) {
                if (mutation.type === "childList") {
                    console.log("A child node has been added or removed.");
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
    onCloseDialog() {
        this.reset();
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
            this.submitBtnNode.removeAttribute("disabled");
        }
    }
    error(error) {
        this.submitting = false;
        this.errorMessage = error.message;
        if (this.submitBtnNode) {
            this.submitBtnNode.removeAttribute("disabled");
        }
    }
    done() {
        // Reset properties when submit is finished
        this.submitting = false;
        if (this.submitBtnNode) {
            this.submitBtnNode.removeAttribute("disabled");
        }
        // Close dialog
        this.close();
    }
    cancel() {
        this.dispatchEvent(new CustomEvent("cancel", { bubbles: false, composed: true }));
    }
    submit() {
        // reset error message on new submit
        this.errorMessage = undefined;
        // Disabled submit button + display progress bar
        this.submitting = true;
        if (this.submitBtnNode) {
            this.submitBtnNode.setAttribute("disabled", "disabled");
        }
        // dispatch event
        this.dispatchEvent(new CustomEvent("submit", { bubbles: false, composed: true }));
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
            ? ""
            : html `
              <mwc-icon-button @click=${this.close} class="close-button"
                >${closeIcon}</mwc-icon-button
              >
            `}
        <header>
          ${!!this.title ? html ` <h2 class="title">${this.title}</h2> ` : ""}
        </header>
        <div class="body">
          <div class="error ${!!this.errorMessage ? "show" : ""}">
            <span class="body">
              ${warningIcon}
              <span class="msg">${this.errorMessage}</span>
            </span>
          </div>
          ${this.hasSlotContent
            ? html ` <slot></slot> `
            : html ` <p>${this.message}</p> `}
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
};
ExmgConfirmDialog.styles = [style];
__decorate([
    property({ type: String })
], ExmgConfirmDialog.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ExmgConfirmDialog.prototype, "message", void 0);
__decorate([
    property({ type: Boolean, attribute: "hide-close-button" })
], ExmgConfirmDialog.prototype, "hideCloseButton", void 0);
__decorate([
    property({ type: String, attribute: "button-copy" })
], ExmgConfirmDialog.prototype, "buttonCopy", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ExmgConfirmDialog.prototype, "submitting", void 0);
__decorate([
    property({ type: String, attribute: "error-message" })
], ExmgConfirmDialog.prototype, "errorMessage", void 0);
__decorate([
    query("#dialog")
], ExmgConfirmDialog.prototype, "dialogNode", void 0);
__decorate([
    query("#submitBtn")
], ExmgConfirmDialog.prototype, "submitBtnNode", void 0);
__decorate([
    property({ type: Boolean })
], ExmgConfirmDialog.prototype, "hasSlotContent", void 0);
ExmgConfirmDialog = __decorate([
    customElement("exmg-dialog-confirm")
], ExmgConfirmDialog);
export { ExmgConfirmDialog };
//# sourceMappingURL=exmg-dialog-confirm.js.map