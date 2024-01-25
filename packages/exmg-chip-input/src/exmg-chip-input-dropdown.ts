import { customElement } from 'lit/decorators/custom-element.js';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/text-button.js';
import '@material/web/menu/menu.js';
import './dropdown/dropdown-container.js';

import { ChipSet } from '@material/web/chips/internal/chip-set.js';

import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Chip } from '@material/web/chips/internal/chip.js';

import { style } from './styles/exmg-chip-input-dropdown-css.js';

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

  @property({ type: Array }) selectedChips?: Chip[];

  @state() private menuOpen = false;

  static override styles = [style];

  constructor() {
    super();

    // Add event listeners in the constructor
    this.addEventListener('click', this._onSelect);
  }

  private _onSelect(e: Event) {
    var clickedElement = e.target as Element;
    var elementType = clickedElement.tagName;

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

  private onMenuOpened() {
    // this.themeChanger.focus();
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
          ${this.selectedChips?.map((c) => html`<md-input-chip label="${c.label}"></md-input-chip>`)}
        </div>
        <div class="add">
          <md-text-button
            id="button"
            @click="${this.onOpenClick}"
            title="Page theme controls"
            aria-label="Page theme controls"
            aria-haspopup="dialog"
            aria-expanded=${this.menuOpen ? 'true' : 'false'}
          >
            Add candy
            <md-icon slot="icon">add</md-icon>
          </md-text-button>
        </div>
        <md-menu
          anchor="button"
          menu-corner="start-start"
          anchor-corner="end-start"
          default-focus="none"
          role="dialog"
          aria-label="Page color theme controls"
          .open=${this.menuOpen}
          @opened=${this.onMenuOpened}
          @closed=${this.onMenuClosed}
          @keydown=${this.onKeydown}
        >
          <dropdown-container .dropdownTitle=${this.dropdownTitle}><slot></slot></dropdown-container>
        </md-menu>
      </div>
    </div>`;
  }
}
