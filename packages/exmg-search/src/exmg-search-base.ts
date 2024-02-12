import { ExmgElement } from '@exmg/lit-base';
import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/focus/md-focus-ring.js';

export class ExmgSearchBase extends ExmgElement {
  bubbles = false;

  @state()
  _hasFocus = true;

  @property({ type: String })
  filterValue?: string | null;

  @property({ type: String })
  placeHolder = 'Search';

  @query('#searchInput')
  search?: HTMLInputElement;

  constructor() {
    super();

    // Set default tabindex to 0
    const tabindex = this.getAttribute('tabindex');
    this.setAttribute('tabindex', tabindex || '0');

    // Add focus event listener to focus input
    this.addEventListener('focus', () => {
      this.focus();
    });
  }

  protected fire<T>(eventName: string, detail?: T, bubbles?: boolean) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: bubbles || this.bubbles,
        composed: true,
        detail,
      }),
    );
  }

  focus() {
    this._hasFocus = true;
  }

  render() {
    const classMapValues = {
      search: true,
      hasFocus: this._hasFocus,
    };
    return html`
      <div class=${classMap(classMapValues)}>
        <div class="mode-input">
          <md-focus-ring for="searchInput" inward></md-focus-ring>
          <md-icon class="search">search</md-icon>
          <input
            id="searchInput"
            placeholder=${this.placeHolder}
            value=${this.filterValue ? this.filterValue : ''}
            onfocus="let value = this.value; this.value = null; this.value = value"
            @keyup=${this._handleKeyUp}
            @blur=${this._handleInputBlur}
          />
          ${this.filterValue
            ? html`
                <md-icon-button class="clear" @click=${this._handleClear}><md-icon>clear</md-icon></md-icon-button>
              `
            : nothing}
        </div>
        <div class="mode-default" @click=${() => (this._hasFocus = true)}>
          <md-icon class="search">search</md-icon>
          <span class="interactive-content">${this._getValue()}</span>
          ${this.filterValue
            ? html`
                <md-icon-button class="clear" @click=${this._handleClear}><md-icon>clear</md-icon></md-icon-button>
              `
            : nothing}
        </div>
      </div>
    `;
  }

  _getValue() {
    return this.filterValue || this.placeHolder;
  }

  _notifyChange() {
    this.fire('search-value-change', { value: this.filterValue }, this.bubbles);
  }

  _handleClear(e: CustomEvent) {
    e.preventDefault();
    this.filterValue = null;
    if (this.search) {
      this.search.value = '';
    }
    this._notifyChange();
  }

  _handleKeyUp(e: KeyboardEvent) {
    const input: HTMLInputElement = e.target as HTMLInputElement;

    if (this.filterValue !== input.value) {
      this.filterValue = input.value;
      this._notifyChange();
    }

    if (e.key === 'Escape') {
      this._hasFocus = false;
    }
  }

  _handleInputBlur() {
    this._hasFocus = false;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('_hasFocus')) {
      // after _hasFocus changed to true, focus the input
      if (this._hasFocus) {
        this.shadowRoot!.querySelector<HTMLInputElement>('#searchInput')!.focus();
      }
    }
  }
}
