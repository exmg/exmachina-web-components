import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Radio } from '@material/web/radio/internal/radio.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from '@material/web/radio/internal/radio-styles.css.js';
import radioStyle from './styles/exmg-radio-item-css.js';

let maskId = 0;

/**
 * exmg-radio-item
 * Material 3 radio item
 */
@customElement('exmg-radio-item')
export class ExmgRadioItem extends Radio {
  // Unique maskId is required because of a Safari bug that fail to persist
  // reference to the mask. This should be removed once the bug is fixed.
  private readonly maskIdOverride = `cutout${++maskId}`;

  static override styles = [styles, radioStyle];

  @property({ type: Boolean }) radio = false;

  protected override render() {
    const classes = { checked: this.checked, disabled: this.disabled };
    const showRadioMap = classMap({ 'show-radio': this.radio, icon: true });
    return html`
      <div class="container ${classMap(classes)}" aria-hidden="true">
        <md-ripple part="ripple" .control=${this} ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <div class="radio-container">
          <svg class=${showRadioMap} viewBox="0 0 20 20">
            <mask id="${this.maskIdOverride}">
              <rect width="100%" height="100%" fill="white" />
              <circle cx="10" cy="10" r="8" fill="black" />
            </mask>
            <circle class="outer circle" cx="10" cy="10" r="10" mask="url(#${this.maskIdOverride})" />
            <circle class="inner circle" cx="10" cy="10" r="5" />
          </svg>
        </div>
        <div class="content-container">
          <div class="image-container">
            <slot name="image"></slot>
          </div>
          <div class="content">
            <slot name="title"></slot>
            <slot name="content"></slot>
          </div>
        </div>
        <input
          id="input"
          type="radio"
          tabindex="-1"
          .checked=${this.checked}
          .value=${this.value}
          ?disabled=${this.disabled}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-item': ExmgRadioItem;
  }
}
