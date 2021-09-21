import { __decorate } from "tslib";
import { customElement, html, LitElement, property, query } from "lit-element";
import "@polymer/paper-dialog";
import "@polymer/paper-dialog-scrollable";
import "@exmg/exmg-button/exmg-button";
import "@polymer/iron-form";
import "@material/mwc-icon-button";
import { style } from "./styles/exmg-dialog-styles-css";
import { closeIcon } from "./exmg-dialog-icons";
let ExmgInfoDialog = class ExmgInfoDialog extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Title of the dialog
         */
        this.title = "";
        /**
         * Copy for done button
         */
        this.buttonCopy = "";
        /**
         * Hide close button ?
         */
        this.hideCloseButton = false;
        /**
         * Show close button as unelevated
         */
        this.buttonUnelevated = false;
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
    done() {
        // dispatch event 'done'
        this.dispatchEvent(new CustomEvent("done"));
    }
    renderHeader() {
        return html `
      ${!!this.title
            ? html `
            <header>
              <h2 class="title">${this.title}</h2>
            </header>
          `
            : html ` <div class="top-margin">&nbsp;</div> `}
    `;
    }
    render() {
        return html `
      <paper-dialog id="dialog" with-backdrop no-cancel-on-outside-click>
        ${this.hideCloseButton
            ? html ` ${this.renderHeader()} `
            : html `
              <mwc-icon-button @click=${this.close} class="close-button"
                >${closeIcon}</mwc-icon-button
              >
              ${this.renderHeader()}
            `}

        <paper-dialog-scrollable>
          <slot></slot>
        </paper-dialog-scrollable>
        <div class="actions">
          <exmg-button
            id="doneBtn"
            @click=${this.done}
            ?unelevated=${this.buttonUnelevated}
            >${this.buttonCopy}</exmg-button
          >
        </div>
      </paper-dialog>
    `;
    }
};
ExmgInfoDialog.styles = [style];
__decorate([
    property({ type: String })
], ExmgInfoDialog.prototype, "title", void 0);
__decorate([
    property({ type: String, attribute: "button-copy" })
], ExmgInfoDialog.prototype, "buttonCopy", void 0);
__decorate([
    property({ type: Boolean, attribute: "hide-close-button" })
], ExmgInfoDialog.prototype, "hideCloseButton", void 0);
__decorate([
    property({ type: Boolean, attribute: "button-unelevated" })
], ExmgInfoDialog.prototype, "buttonUnelevated", void 0);
__decorate([
    query("#dialog")
], ExmgInfoDialog.prototype, "dialogNode", void 0);
ExmgInfoDialog = __decorate([
    customElement("exmg-dialog-info")
], ExmgInfoDialog);
export { ExmgInfoDialog };
//# sourceMappingURL=exmg-dialog-info.js.map