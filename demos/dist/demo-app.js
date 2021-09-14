import { __decorate } from "tslib";
import { customElement, html, LitElement } from "lit-element";
import demoAppStyles from "./styles/demo-app-css.js";
let DemoApp = class DemoApp extends LitElement {
    render() {
        return html `RODRIGUEZ`;
    }
};
DemoApp.styles = [demoAppStyles];
DemoApp = __decorate([
    customElement("demo-app")
], DemoApp);
export { DemoApp };
//# sourceMappingURL=demo-app.js.map