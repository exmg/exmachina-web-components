import { customElement } from 'lit/decorators/custom-element.js';
import { style } from './styles/exmg-chip-input-css.js';

import { ChipSet } from '@material/web/chips/internal/chip-set.js';
import { styles } from '@material/web/chips/internal/chip-set-styles.js';
import { Chip } from '@material/web/chips/internal/chip.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'exmg-chip-input': ExmgChipInput;
  }
}

/**
 *
 * @final
 * @suppress {visibility}
 */
@customElement('exmg-chip-input')
export class ExmgChipInput extends ChipSet {
  @property({ type: String }) label = '';

  static override styles = [styles, style];

  protected override render() {
    return html`<div class="container">
      <div class="label">${this.label}</div>
      <slot @slotchange=${this.updateTabIndicesOverride}></slot>
    </div>`;
  }

  private updateTabIndicesOverride() {
    // The chip that should be focusable is either the chip that currently has
    // focus or the first chip that can be focused.
    const { chips } = this;
    let chipToFocus: Chip | undefined;
    for (const chip of chips) {
      const isChipFocusable = chip.alwaysFocusable || !chip.disabled;
      const chipIsFocused = chip.matches(':focus-within');
      if (chipIsFocused && isChipFocusable) {
        // Found the first chip that is actively focused. This overrides the
        // first focusable chip found.
        chipToFocus = chip;
        continue;
      }

      if (isChipFocusable && !chipToFocus) {
        chipToFocus = chip;
      }

      // Disable non-focused chips. If we disable all of them, we'll grant focus
      // to the first focusable child that was found.
      chip.tabIndex = -1;
    }

    if (chipToFocus) {
      chipToFocus.tabIndex = 0;
    }
  }
}
