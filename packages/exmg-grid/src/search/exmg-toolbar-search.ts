import {html, css} from 'lit';
import {property, customElement, query, state} from 'lit/decorators.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
import {classMap} from 'lit/directives/class-map.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import {Debouncer} from '@exmg/exmg-base/utils/debounce/debounce.js';
import {timeOut} from '@exmg/exmg-base/utils/debounce/async.js';

export const searchIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    />
  </svg>
`;

export const clearIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
`;

@customElement('exmg-toolbar-search')
export class ToolbarSearch extends ExmgElement {
  @state()
  _isSearch = false;

  @property({type: String})
  filterValue?: string | null;

  @property({type: String})
  placeHolder = 'Search';

  @query('#searchInput')
  search?: HTMLInputElement;

  static styles = [
    css`
      :host {
        display: block;
      }
      :host > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 48px;
      }
      h2 {
        max-width: 936px;
        width: 100%;
        margin: 20px auto;
      }
      input {
        width: 100%;
      }
      svg {
        margin: 0 0 0 16px;
        fill: rgba(0, 0, 0, 0.38);
        cursor: pointer;
      }
      :host > div > svg {
        margin-right: 10px;
      }
      ::slotted(*) {
        margin: 14px 12px;
      }
      span.interactive-content {

        white-space: nowrap;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.38);
        font-size: 14px;

        text-overflow: ellipsis;
        letter-spacing: 0.005em;
        box-sizing: border-box;

        font-weight: 400;
        cursor: pointer;
        flex: 1;
        @apply --layout-flex;
      }
      .search {
        display: absolute:
        background: none;
        outline-color: rgb(77, 144, 254);
        outline-offset: -2px;
        outline-style: auto;
        outline-width: 4px;
      }
      .search input {
        font-size: 14px;
        margin: 15px 0px;
        padding: 2px;
        border: 0px;
        width: 100%;
        outline: none;
        background: none;
        box-sizing: border-box;
      }
      .clear-button {
        position: relative;
        background: transparent;
        border: none !important;
        font-size: 0;
        margin-right: 1rem;
      }
    `,
  ];
  private _debouncer: any;

  render() {
    const classMapValues = {
      search: this._isSearch,
    };
    return html`
      <div class=${classMap(classMapValues)} @click=${this._showSearch}>
        ${this._isSearch
          ? html`
              ${searchIcon}
              <input
                id="searchInput"
                placeholder=${this.placeHolder}
                value=${this.filterValue ? this.filterValue : ''}
                onfocus="let value = this.value; this.value = null; this.value = value"
                @keyup=${this._handleKeyUp}
                @blur=${this._handleInputBlur}
              />
              ${this.filterValue
                ? html` <button class="clear-button" @mousedown=${this._handleClear}>${clearIcon}</button> `
                : html``}
            `
          : html`
              ${searchIcon}
              <span class="interactive-content">${this._getValue()}</span>
              <slot></slot>
            `}
      </div>
    `;
  }
  _getValue() {
    return this.filterValue || this.placeHolder;
  }

  _handleClear(e: CustomEvent) {
    e.preventDefault();
    this.filterValue = null;
    this.search!.value = '';
    this._notifyChange();
  }

  _handleKeyUp(e: KeyboardEvent) {
    const input: HTMLInputElement = e.target as HTMLInputElement;

    if (this.filterValue !== input.value) {
      this.filterValue = input.value;
      this._notifyChange();
    }

    if (e.keyCode === 27) {
      this._hideSearch();
    }
  }

  _notifyChange() {
    this._debouncer = Debouncer.debounce(this._debouncer, timeOut.after(200), () => {
      this.dispatchEvent(
        new CustomEvent('exmg-grid-toolbar-search-changed', {
          bubbles: false,
          composed: true,
          detail: {value: this.filterValue},
        }),
      );
    });
  }

  _handleInputBlur() {
    this._hideSearch();
  }
  _hideSearch() {
    this._isSearch = false;
  }
  _showSearch() {
    if (this._isSearch) return;
    this._isSearch = true;
    setTimeout(() => this.shadowRoot!.querySelector<HTMLInputElement>('#searchInput')!.focus(), 200);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-toolbar-search': ToolbarSearch;
  }
}
