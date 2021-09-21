import { __decorate } from "tslib";
import { html, property, customElement, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { observer } from '@material/mwc-base/observer.js';
import { style } from './styles/exmg-spinner-styles-css';
let ExmgSpinner = class ExmgSpinner extends LitElement {
    constructor() {
        super(...arguments);
        this.coolingDown = false;
        this.active = false;
    }
    resetAnimation() {
        this.active = false;
        this.coolingDown = false;
    }
    setAriaHidden(hidden) {
        const attr = 'aria-hidden';
        if (hidden) {
            this.setAttribute(attr, 'true');
        }
        else {
            this.removeAttribute(attr);
        }
    }
    render() {
        const classes = {
            'exmg-active': this.active || this.coolingDown,
            'exmg-cooldown': this.coolingDown,
        };
        return html `
      <div
        id="spinnerContainer"
        class="${classMap(classes)}"
        @animationend="${() => this.resetAnimation}"
        @webkitAnimationEnd="${() => this.resetAnimation}"
      >
        <div class="spinner-layer">
          <div class="circle-clipper left"><div class="circle"></div></div>
          <div class="circle-clipper right"><div class="circle"></div></div>
        </div>
      </div>
    `;
    }
};
ExmgSpinner.styles = style;
__decorate([
    property({ type: Boolean })
], ExmgSpinner.prototype, "coolingDown", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        this.setAriaHidden(!value);
        this.coolingDown = !value;
    })
], ExmgSpinner.prototype, "active", void 0);
ExmgSpinner = __decorate([
    customElement('exmg-button-spinner')
], ExmgSpinner);
export { ExmgSpinner };
//# sourceMappingURL=exmg-spinner.js.map