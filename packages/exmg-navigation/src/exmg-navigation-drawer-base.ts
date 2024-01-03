import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';

import '@material/mwc-drawer';
import { Drawer } from '@material/mwc-drawer';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';

import {
  navigationDrawerHover,
  navigationItemHover,
  navigationDrawerOpen,
  navigationRailHidden,
  navigationDrawerPersistent,
  navigationActiveHasSubmenu,
} from './exmg-navigation-signals.js';
import { SignalWatcher } from '@lit-labs/preact-signals';
import { observer } from '@exmg/lit-base';

export class ExmgNavigationDrawerBase extends SignalWatcher(LitElement) {
  @property({ type: Boolean })
  @observer(function (this: ExmgNavigationDrawerBase, value: boolean) {
    navigationDrawerOpen.value = value;
    this.updateInlineStyles();
  })
  open = false;

  @query('mwc-drawer')
  drawer?: Drawer;

  @property({ type: Boolean })
  @observer(function (this: ExmgNavigationDrawerBase, value: boolean) {
    navigationDrawerPersistent.value = value;
  })
  persistent = false;

  hoverIn: () => void;
  handleClose: () => void;
  hoverOut: () => void;

  private _itemHover = false;
  private _drawerHover = false;

  private _asideElement?: HTMLElement;

  // @ts-ignore
  private _observer = new ResizeController(this, {
    target: window.document.body,
    callback: (entries: ResizeObserverEntry[]) => {
      const entry = entries.pop();
      if (!entry || !entry.contentRect) return;
      const width = entry!.contentRect!.width;
      const persistentWidth = width > 1560;

      let activeHasSubMenu = this.hasActiveSubmenu();

      // If root nav item set and has submenu and persistent width meets the criteria
      const persistent = activeHasSubMenu && persistentWidth;
      if (this.persistent !== persistent) {
        if (!persistent) {
          this.open = false;
        } else {
          this.open = true;
        }
        this.persistent = persistent;
      }

      navigationRailHidden.value = width < 961;
      this.updateInlineStyles();
    },
  });

  hasActiveSubmenu() {
    let activeHasSubMenu = false;

    for (const key in navigationActiveHasSubmenu.value) {
      if (navigationActiveHasSubmenu.value.hasOwnProperty(key) && navigationActiveHasSubmenu.value[key]) {
        activeHasSubMenu = true;
      }
    }

    return activeHasSubMenu;
  }

  updateInlineStyles() {
    const drawer = this.drawer;
    if (drawer) {
      const shadowRoot = drawer.shadowRoot;
      const asideElement = shadowRoot!.querySelector('aside');
      if (asideElement) {
        asideElement.style.left = navigationRailHidden.value ? '0px' : 'var(--_exmg-navigation-rail-nav-width)';
      }
      const contentElement = shadowRoot!.querySelector('div.mdc-drawer-app-content');
      if (contentElement) {
        // @ts-ignore
        contentElement.style.marginLeft = navigationRailHidden.value
          ? '0px'
          : this.open
          ? 'var(--mdc-drawer-width, 256px)'
          : '0px';
      }
    }
  }

  constructor() {
    super();

    // Bind methods to ensure the correct 'this' context
    this.hoverIn = this._hoverIn.bind(this);
    this.hoverOut = this._hoverOut.bind(this);
    this.handleClose = this._handleClose.bind(this);
  }

  disconnectedCallback() {
    // Clean up listeners
    this._asideElement!.removeEventListener('mouseenter', this.hoverIn);
    this._asideElement!.removeEventListener('mouseleave', this.hoverOut);
    this.removeEventListener('drawer-close', this.handleClose);
  }

  toggle() {
    this.open = !this.open;
  }
  _handleClose() {
    this.open = false;
  }

  _hoverIn() {
    navigationDrawerHover.value = true;
  }

  _hoverOut() {
    navigationDrawerHover.value = false;
  }

  hidemenu() {
    // Hide submenu when drawer is not persistent when mouse leaves the drawer or menu items
    if (!this._itemHover && !this._drawerHover && !(this.persistent && this.hasActiveSubmenu())) {
      this.open = false;
    }
  }

  protected updated() {
    if (this._itemHover !== navigationItemHover.value) {
      this._itemHover = navigationItemHover.value;
      if (this._itemHover) {
        this.open = true;
      }
      if (!this._itemHover) {
        // Timeout to allow for mouse transition to the content element
        setTimeout(this.hidemenu.bind(this), 100);
      } else {
        this.hidemenu();
      }
    }

    if (this._drawerHover !== navigationDrawerHover.value) {
      this._drawerHover = navigationDrawerHover.value;
      this.hidemenu();
    }
  }

  protected async firstUpdated() {
    await this.updateComplete;
    const drawer = this.drawer;

    if (drawer) {
      const shadowRoot = drawer.shadowRoot;
      if (shadowRoot) {
        const asideElement = shadowRoot.querySelector('aside');
        if (asideElement) {
          // Hack custom styles in the aside element
          asideElement.style.borderRightWidth = '0px';
          asideElement.style.borderRadius = '0px 16px 16px 0px';
          asideElement.style.top = '0px';
          asideElement.style.bottom = '0px';
          asideElement.style.height = 'unset';
          asideElement.style.transitionProperty = 'transform, box-shadow';
          asideElement.style.transitionDuration = '300ms';
          asideElement.style.transitionTimingFunction = 'cubic-bezier(0.2, 0, 0, 1)';
          asideElement.style.background = `var(--md-sys-color-surface-container)`;
          asideElement.style.borderLeft = '1px solid var(--md-sys-color-outline-variant)';
          asideElement.style.left = 'var(--_exmg-navigation-rail-nav-width)';

          // Add event listeners to the aside element
          asideElement.addEventListener('mouseenter', this.hoverIn);
          asideElement.addEventListener('mouseleave', this.hoverOut);

          this._asideElement = asideElement;
        }
      }
    }

    this.addEventListener('drawer-close', this.handleClose);
  }

  render() {
    return html`<mwc-drawer type="dismissible" ?open=${this.open}>
      <div class="content">
        <slot></slot>
      </div>
      <slot name="appContent" slot="appContent"></slot>
    </mwc-drawer>`;
  }
}
