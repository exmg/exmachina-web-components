import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {sidemenuStyles} from '../index.js';
import '../index.js';
import '@material/mwc-drawer/mwc-drawer.js';
import '@material/mwc-icon-button/mwc-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import {menu} from './menu.js';
import {isItemGroup, MenuItem, MenuGroupItem, MenuItemOrGroupItem} from '../exmg-paper-sidemenu-types.js';

export const installMediaQueryWatcher = (mediaQuery: string, layoutChangedCallback: (mediaQueryMatches: boolean) => void) => {
  const mql = window.matchMedia(mediaQuery);
  mql.addListener((e) => layoutChangedCallback(e.matches));
  layoutChangedCallback(mql.matches);
};

@customElement('x-demo')
export class XDemo extends LitElement {
  @property({type: Array})
  menu: [] | undefined;

  @property({type: Boolean})
  debug = true;

  @property({type: Boolean, reflect: true})
  narrow = false;

  @property({type: Boolean})
  collapsed = false;

  @property({type: Boolean})
  drawerOpened = true;

  static styles = [
    sidemenuStyles,
    css`
      :host {
        display: inline-block;
        height: 100vh;
        width: 100%;
      }

      app-toolbar {
        background: blue;
      }

      .main-content p {
        padding: 1rem 2rem;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();

    // Update narrow state
    installMediaQueryWatcher('(min-width: 840px)', (wide) => {
      this.narrow = !wide;
      this.drawerOpened = !this.narrow;

      if (!wide) {
        this.collapsed = !this.narrow;
      }
    });
  }

  private renderGroupItem(i: MenuGroupItem) {
    return html`
      <div class="menu-group-title">${i.title}</div>
      ${i.items?.map(
        (subitem: MenuItem) =>
          html`
            <a href=${this.debug ? '#' : subitem.path} data-path=${subitem.path} tabindex="-1" class="menu-item">
              <paper-item data-path="${subitem.path}" role="menuitem">
                <svg height="24" viewBox="0 0 24 24" width="24"><path d=${subitem.iconPath}></path></svg>
                <span class="title"> ${subitem.title} </span>
              </paper-item>
              <paper-tooltip position="right">${subitem.title}</paper-tooltip>
            </a>
          `,
      )}
      <hr />
    `;
  }

  private renderItem(i: MenuItem) {
    return html`
      <a href=${this.debug ? '#' : i.path} data-path=${i.path} tabindex="-1" class="menu-item solo">
        <paper-item data-path=${i.path} role="menuitem">
          <svg height="24" viewBox="0 0 24 24" width="24"><path d=${i.iconPath}></path></svg>
          <span class="title">${i.title}</span>
        </paper-item>
        <paper-tooltip position="right">${i.title}</paper-tooltip>
      </a>
      <hr />
    `;
  }

  private renderMenu() {
    return html` ${menu.map((i: MenuItemOrGroupItem) => (isItemGroup(i) ? this.renderGroupItem(i) : this.renderItem(i)))} `;
  }

  private openChanged(e: CustomEvent) {
    this.drawerOpened = e.detail.value;
  }

  private _handleSelectedChanged() {
    if (this.narrow) {
      this.drawerOpened = false;
    }
  }

  private _handleCollapsed(e: CustomEvent) {
    this.collapsed = e.detail;
  }

  private _handleMenuClick() {
    this.drawerOpened = !this.drawerOpened;
  }

  render() {
    const classes = {collapsed: this.collapsed, narrow: this.narrow};

    return html`
      <app-drawer
        swipe-open
        position="left"
        class=${classMap(classes)}
        collapsed=${this.collapsed}
        ?persistent=${!this.narrow}
        ?opened=${this.drawerOpened}
        @opened-changed="${this.openChanged}"
      >
        <exmg-paper-sidemenu
          selected="rooms/"
          ?collapsed=${this.collapsed}
          @collapsed=${this._handleCollapsed}
          @selected-changed=${this._handleSelectedChanged}
          ?narrow=${this.narrow}
        >
          <exmg-paper-sidemenu-header slot="header" ?collapsed=${this.collapsed}></exmg-paper-sidemenu-header>
          ${this.renderMenu()}
        </exmg-paper-sidemenu>
      </app-drawer>

      <article class="main-content ${classMap(classes)}">
        <app-toolbar>
          <mwc-icon-button icon="menu" ?hidden=${!this.narrow} @click=${this._handleMenuClick}></mwc-icon-button>
        </app-toolbar>
        <main role="main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </main>
      </article>
    `;
  }
}
