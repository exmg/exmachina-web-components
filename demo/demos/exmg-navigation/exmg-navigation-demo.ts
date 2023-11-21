import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@exmg/exmg-navigation/exmg-navigation-rail.js';
import '@exmg/exmg-navigation/exmg-navigation-rail-nav.js';
import '@exmg/exmg-navigation/exmg-navigation-rail-nav-item.js';
import '@exmg/exmg-navigation/exmg-navigation-drawer.js';

import { itemHover, drawerHover, SignalWatcher } from '@exmg/exmg-navigation';

interface MenuItem {
  id?: string;
  label: string;
  url?: string;
  icon?: string;
  items?: MenuItem[];
}

const menu: MenuItem[] = [
  {
    id: 'mail',
    label: 'Mail',
    icon: 'mail',
  },
  {
    id: 'chat',
    label: 'Chat',
    icon: 'chat',
  },
  {
    id: 'spaces',
    label: 'Spaces',
    icon: 'groups',
    items: [
      {
        id: 'space1',
        label: 'Space 1',
      },
      {
        id: 'space2',
        label: 'Space 2',
      },
    ],
  },
  {
    id: 'meet',
    label: 'Meet',
    icon: 'videocam',
  },
];

@customElement('exmg-navigation-demo')
export class ExmgNavigationDemo extends SignalWatcher(LitElement) {
  @property({ type: Boolean })
  open = false;

  static styles = [
    css`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }

      .page-content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        min-height: calc(100vh - 64px);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .card {
        margin: 1rem 0;
        padding: 1rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="main">
        <exmg-navigation-rail>
          <exmg-navigation-rail-nav>
            ${menu.map(
              (i) =>
                html`<exmg-navigation-rail-nav-item
                  label=${i.label}
                  icon=${i.icon!}
                  ?hasSubMenu=${(i.items || []).length > 0}
                ></exmg-navigation-rail-nav-item>`,
            )}
          </exmg-navigation-rail-nav>
        </exmg-navigation-rail>

        <exmg-navigation-drawer ?open=${this.open}>
          <div slot="appContent" class="page-content">
            <div class="card">
              Drawer open: ${this.open}<br />
              Item hover: ${itemHover.value}<br />
              Drawer hover: ${drawerHover.value}
            </div>
          </div>
        </exmg-navigation-drawer>
      </div>
    `;
  }
}
