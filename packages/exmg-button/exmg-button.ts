import { html, property, customElement, eventOptions } from "lit-element";
import "@material/mwc-ripple/mwc-ripple";

import { classMap } from "lit-html/directives/class-map.js";
import { ButtonBase } from "@material/mwc-button/mwc-button-base.js";
import { style } from "@material/mwc-button/mwc-button-css.js";
import { style as newStyles } from "./styles/exmg-button-styles-css.js";
import "./exmg-spinner.js";

@customElement("exmg-button")
export class ExmgButton extends ButtonBase {
  @property({ type: Boolean })
  public loading = false;

  @property({ type: Number })
  public progress?: number;

  static styles = [style, newStyles];

  protected render() {
    const classes = {
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense,
    };
    const loadingClass = {
      "exmg-loading": this.loading,
      "exmg-button-content": true,
    };
    const mdcButtonIcon = html`
      <span class="material-icons mdc-button__icon">${this.icon}</span>
    `;
    return html`
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
          ${this.icon && !this.trailingIcon ? mdcButtonIcon : ""}
          <span class="mdc-button__label">${this.label}</span>
          ${this.icon && this.trailingIcon ? mdcButtonIcon : ""}
          <slot></slot>
        </span>
        ${this.loading
          ? html` <exmg-button-spinner active></exmg-button-spinner> `
          : ""}
        ${this.progress
          ? html`
              <div class="progress-holder">
                <progress max="100" value=${this.progress}></progress>
              </div>
            `
          : ""}
      </button>
    `;
  }

  @eventOptions({ passive: true })
  private handleRippleActivateA(evt?: Event) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);

      this.handleRippleDeactivateA();
    };

    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(evt);
  }

  private handleRippleDeactivateA() {
    this.rippleHandlers.endPress();
  }

  private handleRippleMouseEnterA() {
    this.rippleHandlers.startHover();
  }

  private handleRippleMouseLeaveA() {
    this.rippleHandlers.endHover();
  }

  private handleRippleFocusA() {
    this.rippleHandlers.startFocus();
  }

  private handleRippleBlurA() {
    this.rippleHandlers.endFocus();
  }
}
