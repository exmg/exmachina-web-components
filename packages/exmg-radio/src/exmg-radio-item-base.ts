import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { MdRadio } from '@material/web/radio/radio.js';

import '@material/web/focus/md-focus-ring.js';
import '@material/web/ripple/ripple.js';
import { classMap } from 'lit/directives/class-map.js';

let maskIdOverride = 0;

export class ExmgRadioItemBase extends MdRadio {
  // Unique maskId is required because of a Safari bug that fail to persist
  // reference to the mask. This should be removed once the bug is fixed.
  // Named is changed from MdRadio because of the initial property is readonly
  private readonly maskIdOverride = `cutout${++maskIdOverride}`;

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
