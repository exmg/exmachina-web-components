import { __decorate } from "tslib";
import { html, LitElement, customElement, property } from "lit-element";
let TestForm = class TestForm extends LitElement {
    render() {
        return html `RIRE ? -> <b>${this.test ? this.test : "No message"}</b>`;
    }
};
__decorate([
    property({ type: String })
], TestForm.prototype, "test", void 0);
TestForm = __decorate([
    customElement("test-form")
], TestForm);
export { TestForm };
//# sourceMappingURL=exmg-form-base.js.map