import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@material/web/iconbutton/icon-button.js';

import '@exmg/exmg-navigation/exmg-navigation-toolbar.js';
import '@exmg/exmg-navigation/exmg-navigation-rail.js';
import '@exmg/exmg-navigation/exmg-navigation-rail-nav.js';
import '@exmg/exmg-navigation/exmg-navigation-rail-nav-item.js';
import '@exmg/exmg-navigation/exmg-navigation-drawer.js';
import '@exmg/exmg-navigation/exmg-navigation-drawer-nav.js';
import '@exmg/exmg-collapsed/exmg-collapsed.js';

import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

import {
  navigationItemHover,
  navigationDrawerHover,
  navigationDrawerOpen,
  navigationRailSelected,
  navigationRailHidden,
  navigationRailActive,
  navigationActiveHasSubmenu,
  navigationDrawerPersistent,
  navigationSubSelected,
  ExmgNavigationBase,
  exmgNavigationDrawerStyles,
} from '@exmg/exmg-navigation';
import { style } from './exmg-navigation-demo-styles-css.js';
import { MenuItem, menu as MENU } from './menu.js';

@customElement('exmg-navigation-demo')
export class ExmgNavigationDemo extends ExmgNavigationBase {
  static styles = [style, exmgNavigationDrawerStyles];

  menu = MENU;

  pageId = 'chat';

  renderInfoCard() {
    return html`
      <div class="card">
        Drawer open: ${navigationDrawerOpen.value}<br />
        Item hover: ${navigationItemHover.value}<br />
        Nav Active item: ${navigationRailActive.value}<br />
        Drawer hover: ${navigationDrawerHover.value} <br />
        Nav selected: ${navigationRailSelected.value} <br />
        Nav sub selected: ${navigationSubSelected.value} <br />
        Nav hidden: ${navigationRailHidden.value} <br />
        Drawer Persistent: ${navigationDrawerPersistent.value} <br />
        navigationActiveHasSubmenu: ${JSON.stringify(navigationActiveHasSubmenu.value, null, '\t')} <br />
      </div>
    `;
  }

  /**
   * Render page content based on the selected navigation item
   */
  renderPage() {
    return html`<main>${this.renderInfoCard()}</main>`;
  }

  renderToolbar() {
    return html`
      <exmg-navigation-toolbar>
        <!-- Menu button will automatically be hidden when the rail bar is visible -->
        <md-icon-button @click=${() => this.drawer!.toggle()} slot="navigationIcon"
          ><md-icon>menu</md-icon></md-icon-button
        >
        <div slot="title">${this.pageId || 'home'}</div>
      </exmg-navigation-toolbar>
    `;
  }

  renderSubMenu() {
    const parentId = this.getActiveSubmenuParent();
    if (parentId === null) {
      return nothing;
    }
    const items = this.getItemsFromParentId(parentId);
    return html`
        <md-list>
        ${items.map((i) =>
          (i.items || []).length > 0
            ? html`
                <md-list-item
                  type="button"
                  ?selected=${navigationSubSelected.value === i.id}
                  class="has-submenu"
                  @click=${() => this.handleNavigationSubClicked(i, parentId)}
                  >${i.label}
                  <md-icon slot="end"
                    >${this.isSubMenuExpanded(i.id) ? 'expand_less' : 'expand_more'}</md-icon
                  ></md-list-item
                >
                <exmg-collapsed id="collapsed" ?opened=${this.isSubMenuExpanded(i.id)}>
                  <div class="sub-menu">
                    <md-list>
                      ${(i.items || []).map(
                        (i) =>
                          html`<md-list-item
                            class="collapsed-item"
                            type="button"
                            @click=${() => this.handleNavigationSubClicked(i, parentId)}
                            ?selected=${this.pageId === i.id}
                            >${i.label}</md-list-item
                          >`,
                      )}
                    </md-list>
                  </div>
                </exmg-collapsed>
              `
            : html`
                <md-list-item
                  type="button"
                  ?selected=${navigationSubSelected.value === i.id}
                  @click=${() => this.handleNavigationSubClicked(i, parentId)}
                  >${i.label}</md-list-item
                >
              `,
        )}</md-list>
      </div>
    `;
  }

  render() {
    return html`
      <div class="main">
        <!--
          Navigation rail component. This will be visible on desktop and tablet(> 960px) and auto hide on smaller resolutions
        -->
        <exmg-navigation-rail>
          <exmg-navigation-rail-nav>
            ${this.menu.map(
              (i: MenuItem) =>
                html`<exmg-navigation-rail-nav-item
                  @click=${() => this.handleRailClick(i.id)}
                  label=${i.label}
                  icon=${i.icon!}
                  itemId=${i.id!}
                  .selected=${navigationRailSelected.value === i.id}
                  ?hasSubMenu=${(i.items || []).length > 0}
                ></exmg-navigation-rail-nav-item>`,
            )}
          </exmg-navigation-rail-nav>
        </exmg-navigation-rail>

        <!--
          Navigation drawer component. This will be permanently visible on screens bigger (> 1560px) and auto hide on smaller resolutions
        -->
        <exmg-navigation-drawer id="drawer">
          <!--
            Navigation drawer content. This will contain the (optionaly) the toolbar and the page content for the selected page.
          -->
          <div slot="appContent" class="page-content">${this.renderToolbar()}${this.renderPage()}</div>

          <!--
            Navigation drawer navigation. This will contain the navigation items for the drawer and consists of 2 parts:
            - Top level items which will be similar as the items displayed in the rail
            - Sub level items which will be displayed when a top level item is selected (default slot)
          -->
          <exmg-navigation-drawer-nav>
            <!-- Top level items -->
            <md-list slot="topLevel">
              ${this.menu.map(
                (i) =>
                  html`
                    <md-list-item
                      type="button"
                      ?selected=${navigationRailSelected.value === i.id}
                      @click=${() => this.handleRailClick(i.id)}
                      ><md-icon slot="start">${i.icon!}</md-icon> ${i.label}
                      ${(i.items || []).length > 0
                        ? html`<md-icon slot="end">arrow_forward</md-icon>`
                        : nothing}</md-list-item
                    >
                  `,
              )}
            </md-list>

            <!-- Sub level items -->
            <div class="nav">
              ${navigationRailHidden.value
                ? html`
                    <md-list slot="navTop">
                      <md-list-item type="button" @click=${this.handlSubMenuBackClick}
                        ><md-icon slot="start">arrow_back</md-icon> Main menu
                      </md-list-item></md-list
                    >
                    <div class="left-margin">${this.renderSubMenu()}</div>
                  `
                : html` <div>${this.renderSubMenu()}</div> `}
            </div>
          </exmg-navigation-drawer-nav>
        </exmg-navigation-drawer>
      </div>
    `;
  }
}
