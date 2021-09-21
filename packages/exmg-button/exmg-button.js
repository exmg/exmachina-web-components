import { __decorate } from "tslib";
import { html, property, customElement, eventOptions } from 'lit-element';
import '@material/mwc-ripple/mwc-ripple';
import { classMap } from 'lit-html/directives/class-map.js';
import { ButtonBase } from '@material/mwc-button/mwc-button-base.js';
import { style } from '@material/mwc-button/mwc-button-css.js';
import { style as newStyles } from './styles/exmg-button-styles-css.js';
import './exmg-spinner.js';
let ExmgButton = class ExmgButton extends ButtonBase {
    constructor() {
        super(...arguments);
        this.loading = false;
    }
    render() {
        const classes = {
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense,
        };
        const loadingClass = {
            'exmg-loading': this.loading,
            'exmg-button-content': true,
        };
        const mdcButtonIcon = html `
      <span class="material-icons mdc-button__icon">${this.icon}</span>
    `;
        return html `
      <button
        id="button"
        class="mdc-button ${classMap(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label || this.icon}"
        @focus="${this.handleRippleFocusA}"
        @blur="${this.handleRippleBlurA}"
        @mousedown="${this.handleRippleActivateA}"
        @mouseenter="${this.handleRippleMouseEnterA}"
        @mouseleave="${this.handleRippleMouseLeaveA}"
        @touchstart="${this.handleRippleActivateA}"
        @touchend="${this.handleRippleDeactivateA}"
        @touchcancel="${this.handleRippleDeactivateA}"
      >
        ${this.renderRipple()}
        <span class="${classMap(loadingClass)}">
          ${this.icon && !this.trailingIcon ? mdcButtonIcon : ''}
          <span class="mdc-button__label">${this.label}</span>
          ${this.icon && this.trailingIcon ? mdcButtonIcon : ''}
          <slot></slot>
        </span>
        ${this.loading
            ? html ` <exmg-button-spinner active></exmg-button-spinner> `
            : ''}
        ${this.progress
            ? html `
              <div class="progress-holder">
                <progress max="100" value=${this.progress}></progress>
              </div>
            `
            : ''}
      </button>
    `;
    }
    handleRippleActivateA(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivateA();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivateA() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnterA() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeaveA() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocusA() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlurA() {
        this.rippleHandlers.endFocus();
    }
};
ExmgButton.styles = [style, newStyles];
__decorate([
    property({ type: Boolean })
], ExmgButton.prototype, "loading", void 0);
__decorate([
    property({ type: Number })
], ExmgButton.prototype, "progress", void 0);
__decorate([
    eventOptions({ passive: true })
], ExmgButton.prototype, "handleRippleActivateA", null);
ExmgButton = __decorate([
    customElement('exmg-button')
], ExmgButton);
export { ExmgButton };
//# sourceMappingURL=exmg-button.js.map