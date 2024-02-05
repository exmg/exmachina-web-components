import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { navigationRailHidden, navigationRailActive } from './exmg-navigation-signals.js';
import { SignalWatcher } from '@lit-labs/preact-signals';

import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import { ExmgElement } from '@exmg/lit-base';

@customElement('exmg-navigation-drawer-nav')
// eslint-disable-next-line
export class ExmgNavigationDrawerNav extends SignalWatcher(ExmgElement) {
  static styles = [
    css`
      :host {
        display: block;
      }

      .nav {
        margin: 8px 0 auto;
      }

      .header md-icon-button {
        margin: 4px 12px 8px 16px;
      }
    `,
  ];

  render() {
    return navigationRailHidden.value
      ? html`<div class="nav">
          <div class="header">
            <md-icon-button @click=${() => this.fire('drawer-close', null, true)}
              ><md-icon>menu_open</md-icon></md-icon-button
            >
          </div>
          <div class="navigation">
            ${navigationRailActive.value === null
              ? html`<div class="nav top-level"><slot name="topLevel"></slot></div>`
              : html`<div class="nav"><slot name="navTop"></slot><slot></slot></div>`}
          </div>
        </div>`
      : html`<slot></slot>`;
  }
}
