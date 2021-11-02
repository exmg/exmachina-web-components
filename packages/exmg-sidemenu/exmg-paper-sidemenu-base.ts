import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import {observer} from '@material/mwc-base/observer.js';
import '@polymer/paper-listbox/paper-listbox.js';

export const chevronLeftIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
`;

export const settingsIcon = html`
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path
      d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
    ></path>
  </svg>
`;

/**
 * The `exmg-paper-sidemenu` displays a vertical sidemenu that can be collapsed.
 *
 *  ### Styling
 *
 * `<exmg-paper-sidemenu>` provides the following custom properties and mixins
 *  for styling:
 *
 *  Custom property | Description | Default
 *  ----------------|-------------|----------
 *  `--exmg-paper-sidemenu-background` | Sidemenu background color | `white`
 *  `--exmg-paper-sidemenu-width` | Sidemenu bwidth | `256px`
 *  `--exmg-paper-sidemenu-collapsed-width` | Sidemenu collapsed width | `white`
 *  `--exmg-paper-sidemenu-group-text-color` | Group titletext color | `54% black`
 *  `--exmg-paper-sidemenu-item-text-color` | Item text color | `54% black`
 *  `--exmg-paper-sidemenu-menu-footer-background-color` | Footer background color | `#F9FAF9`
 *  `--exmg-paper-sidemenu-menu-border-color` | Border color of menu | '#DDD'
 *  `--exmg-paper-sidemenu-icon-color` | Sidemenu icon color | `54% black`
 *  `--exmg-paper-sidemenu-hover-background-color` | Item hover background color | `--paper-grey-200`
 *  `--exmg-paper-sidemenu-selected-text-color` | Item selected text color | `--primary-color`
 *  `--exmg-paper-sidemenu-badge-background-color` | Badge background color | #ff6978
 *  `--exmg-paper-sidemenu-badge-color | Badge font color | #fff
 *
 *  @customElement
 *  @demo demo/index.html
 */

export class ExmgPaperSidemenuBase extends LitElement {
  @property({type: Boolean, reflect: true})
  @observer(function (this: LitElement, collapsed: boolean) {
    this.dispatchEvent(new CustomEvent('collapsed', {bubbles: false, composed: true, detail: collapsed}));
  })
  collapsed = false;

  /**
   * Contains the path of the selected menu item
   */
  @property({type: String})
  @observer(function (this: LitElement, selected: string) {
    this.dispatchEvent(new CustomEvent('selected-changed', {bubbles: false, composed: true, detail: selected}));
  })
  selected!: string;

  /**
   *  Disable collapse functionailty
   */
  @property({type: Boolean, reflect: true, attribute: 'disable-collapse'})
  disableCollapse = false;

  /**
   *  Menu has footer item
   */
  @property({type: Boolean, reflect: true, attribute: 'footer-item'})
  footerItem = false;

  firstUpdated() {
    // Check if footer slot contains data
    const slotEl = this.shadowRoot!.querySelector('slot[name="footer"]');
    if (slotEl) {
      this.footerItem = true;
      return;
    }
  }

  render() {
    return html`
      <!-- Sidemenu Header -->
      <slot name="header"></slot>

      <!-- Sidemenu body -->
      <div class="menu-body" role="navigation">
        <!-- Menu Items -->
        <paper-listbox
          attr-for-selected="data-path"
          selected="${this.selected}"
          selectable="a"
          @selected-changed=${this._handleSelectionChange}
        >
          <slot></slot>
        </paper-listbox>
      </div>

      ${this.disableCollapse
        ? html``
        : html`
            <!-- Sidemenu Footer -->
            <div class="menu-footer">
              <slot name="footer"></slot>
              <button aria-label="Collapse side menu" aria-hidden="true" aria-pressed="true" @click=${this._handleCollapse}>
                ${chevronLeftIcon}
              </button>
            </div>
          `}
    `;
  }

  /**
   *  Update the selected value
   */
  _handleSelectionChange(e: CustomEvent<{value: string}>) {
    this.selected = e.detail.value;
  }

  /**
   *  On resize of initially set collapsed state of the menu automaticly based on screen size
   */
  _handleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
