import { customElement } from 'lit/decorators/custom-element.js';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/text-button.js';
import '@material/web/chips/input-chip.js';
import '@material/web/icon/icon.js';
import '@material/web/menu/menu.js';
import './dropdown/dropdown-container.js';

import { ChipSet } from '@material/web/chips/internal/chip-set.js';

import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { style } from './styles/exmg-chip-input-dropdown-css.js';
import { ExmgChip } from './exmg-chip.js';
import { Chip } from '@material/web/chips/internal/chip.js';

declare global {
  interface HTMLElementTagNameMap {
    'exmg-chip-input-dropdown': ExmgChipInputDropdown;
  }
}

/**
 *
 * @final
 * @suppress {visibility}
 */
@customElement('exmg-chip-input-dropdown')
export class ExmgChipInputDropdown extends ChipSet {
  @property({ type: String }) label = '';
  @property({ type: String }) dropdownTitle = 'Select items';
  @property({ type: String }) btnAddText = 'Add items';

  @property({ type: Array }) selectedChips?: ExmgChip[];

  @state() private menuOpen = false;

  static override styles = [style];

  constructor() {
    super();

    // Add event listeners in the constructor
    this.addEventListener('click', this._onSelect);
  }

  private _onSelect(e: Event) {
    const clickedElement = e.target as Element;
    const elementType = clickedElement.tagName;

    if (elementType === 'EXMG-CHIP') {
      // @ts-ignore
      this.selectedChips = this.chips.filter((chip) => chip.selected);
    }
  }

  private onOpenClick() {
    this.menuOpen = true;
  }

  private onMenuClosed() {
    this.menuOpen = false;
  }

  private _removeSelected(val: string) {
    const index = (this.selectedChips || []).findIndex((el: ExmgChip) => el.value === val);
    if (index > -1) {
      (this.selectedChips || []).splice(index, 1); // 2nd parameter means remove one item only
      // @ts-ignore
      const chip = this.chips.find((el: Chip) => el.value === val);
      if (chip) {
        // @ts-ignore
        chip.selected = false;
        setTimeout(() => chip.dispatchEvent(new CustomEvent('blur', { bubbles: true, composed: true })), 0);
      }
    }
  }

  private onKeydown(e: KeyboardEvent) {
    if (!e.defaultPrevented && e.key === 'Escape') {
      e.preventDefault();
      this.menuOpen = false;
    }
  }

  protected override render() {
    return html`<div class="container">
      <div class="label">${this.label}</div>
      <div class="input-container">
        <div class="selected-chips">
          ${repeat(
            this.selectedChips || [],
            (c) => c.value,
            (c) =>
              html`<md-input-chip
                label="${c.label}"
                data-value=${c.value}
                selected
                @remove=${() => this._removeSelected(c.value)}
              ></md-input-chip>`,
          )}
        </div>
        <div class="add">
          <md-text-button
            id="button"
            @click="${this.onOpenClick}"
            title="${this.dropdownTitle} controls"
            aria-label="${this.dropdownTitle} controls"
            aria-haspopup="dialog"
            aria-expanded=${this.menuOpen ? 'true' : 'false'}
          >
            ${this.btnAddText}
            <md-icon slot="icon">add</md-icon>
          </md-text-button>
        </div>
        <md-menu
          anchor="button"
          menu-corner="start-start"
          anchor-corner="end-start"
          default-focus="none"
          role="dialog"
          aria-label="${this.dropdownTitle} controls"
          .open=${this.menuOpen}
          @closed=${this.onMenuClosed}
          @keydown=${this.onKeydown}
        >
          <dropdown-container .dropdownTitle=${this.dropdownTitle}
            ><slot @slotchange=${this.updateTabIndicesOverride}></slot
          ></dropdown-container>
        </md-menu>
      </div>
    </div>`;
  }

  private updateTabIndicesOverride() {
    // The chip that should be focusable is either the chip that currently has
    // focus or the first chip that can be focused.
    const { chips } = this;

    // update selected array after dom change
    // @ts-ignore
    this.selectedChips = this.chips.filter((chip) => chip.selected);

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
