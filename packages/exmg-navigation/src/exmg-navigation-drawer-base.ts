import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';

import '@material/mwc-drawer';
import { Drawer } from '@material/mwc-drawer';

import { drawerHover, itemHover } from './exmg-navigation-signals.js';
import { SignalWatcher } from '@lit-labs/preact-signals';

export class ExmgNavigationDrawerBase extends SignalWatcher(LitElement) {
  @property({ type: Boolean })
  open = false;

  @query('mwc-drawer')
  drawer?: Drawer;

  private _itemHover = false;
  private _drawerHover = false;

  private _asideElement?: HTMLElement;

  constructor() {
    super();

    // Bind methods to ensure the correct 'this' context
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  disconnectedCallback() {
    // Clean up listeners
    this._asideElement!.removeEventListener('mouseenter', this.hoverIn);
    this._asideElement!.removeEventListener('mouseleave', this.hoverOut);
  }

  hoverIn() {
    drawerHover.value = true;
  }

  hoverOut() {
    drawerHover.value = false;
  }

  hidemenu() {
    if (!this._itemHover && !this._drawerHover) {
      this.open = false;
    }
  }

  protected updated(): void {
    if (this._itemHover !== itemHover.value) {
      this._itemHover = itemHover.value;
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

    if (this._drawerHover !== drawerHover.value) {
      this._drawerHover = drawerHover.value;
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
          asideElement.style.left = '88px';

          // Add event listeners to the aside element
          asideElement.addEventListener('mouseenter', this.hoverIn);
          asideElement.addEventListener('mouseleave', this.hoverOut);

          this._asideElement = asideElement;
        }
      }
    }
  }

  render() {
    return html`<mwc-drawer type="dismissible" ?open=${this.open}>
      <div class="">
        <p>Drawer Content!</p>
      </div>
      <slot name="appContent" slot="appContent"></slot>
    </mwc-drawer>`;
  }
}
