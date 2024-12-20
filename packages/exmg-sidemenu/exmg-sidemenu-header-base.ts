import { html, LitElement } from 'lit';
import { observer } from '@exmg/lit-base/index.js';
import { property } from 'lit/decorators.js';
import '@polymer/paper-listbox';
import '@polymer/paper-item/paper-item';
import '@exmg/exmg-tooltip/exmg-tooltip.js';

const dashboardIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
  </svg>
`;
const settingsIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path
      d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    ></path>
  </svg>
`;

export class ExmgSidemenuHeaderBase extends LitElement {
  /**
   *  Fakes urls on debug true
   */
  @property({ type: Boolean, reflect: true })
  debug = false;

  /**
   *  Home/Dashboard url
   */
  @property({ type: String, reflect: true })
  homeUrl = '/';

  /**
   *  Settings url
   */
  @property({ type: String, reflect: true })
  settingsUrl = '/settings';

  /**
   *  Settings label
   */
  @property({ type: String, reflect: true })
  settingsLabel = 'Settings';

  /**
   *  Collapsed state
   */
  @property({ type: Boolean, reflect: true })
  collapsed = false;

  /**
   *  Home/Hashboard label
   */
  @property({ type: String, reflect: true })
  homeLabel = 'Dashboard';

  /**
   * Contains the path of the selected menu item
   */
  @property({ type: String })
  @observer(function (this: LitElement, selected: string) {
    this.dispatchEvent(new CustomEvent('selected-changed', { bubbles: false, composed: true, detail: selected }));
  })
  selected!: string;

  render() {
    return html`
      <paper-listbox
        class="menu-header"
        slot="header"
        attr-for-selected="data-path"
        selected="${this.selected}"
        selectable="a"
      >
        <a href=${this.debug ? '#' : this.homeUrl} data-path="[[homeUrl]]" tabindex="-1" class="menu-item">
          <paper-item role="menuitem">
            ${dashboardIcon}
            <span class="title">${this.homeLabel}</span>
          </paper-item>
          <exmg-tooltip position="right">${this.homeLabel}</exmg-tooltip>
        </a>
        <a href=${this.debug ? '#' : this.settingsUrl} tabindex="-1" class="menu-item">
          <paper-item role="menuitem" aria-label=${this.settingsLabel}> ${settingsIcon} </paper-item>
          <exmg-tooltip position="right">${this.settingsLabel}</exmg-tooltip>
        </a>
      </paper-listbox>
    `;
  }

  /*
   * Disable links in debug mode
   */
  _getHref(path: string): string {
    return this.debug ? '#' : path;
  }

  _observeSelected(selected: string) {
    this.dispatchEvent(new CustomEvent('selected-change', { bubbles: false, composed: true, detail: selected }));
  }
}
