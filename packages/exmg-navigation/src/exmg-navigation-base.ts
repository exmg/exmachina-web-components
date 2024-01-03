import { SignalWatcher } from '@lit-labs/preact-signals';
import { LitElement, html } from 'lit';
import {
  navigationDrawerHover,
  navigationDrawerPersistent,
  navigationItemHover,
  navigationRailActive,
  navigationRailSelected,
  navigationSubSelected,
} from './exmg-navigation-signals.js';
import { property, query } from 'lit/decorators.js';
import { ExmgNavigationDrawer } from './exmg-navigation-drawer.js';

export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  url?: string;
  icon?: string;
  items?: MenuItem[];
}

export class ExmgNavigationBase extends SignalWatcher(LitElement) {
  @property({ type: String })
  pageId = 'chat';

  @query('#drawer')
  drawer?: ExmgNavigationDrawer;

  menu: MenuItem[] = [];
  expandedItems: { [k: string]: boolean } = {};

  connectedCallback() {
    super.connectedCallback();
    navigationRailSelected.value = this.pageId;
    navigationRailActive.value = this.pageId;
  }

  isSubMenuExpanded(id: string) {
    return !!this.expandedItems[id];
  }

  toggleExpanded(id: string) {
    const expanded = this.isSubMenuExpanded(id);
    this.expandedItems[id] = !expanded;
    this.requestUpdate();
  }

  getItemsFromParentId(id: string) {
    return this.menu.find((i) => i.id === id)?.items || [];
  }

  getActiveSubmenuParent() {
    // On hover show howver content and otherwise show the selected submenu
    const parentId =
      !navigationItemHover.value && !navigationDrawerHover.value
        ? navigationRailSelected.value
        : navigationRailActive.value;
    if (parentId === null) {
      return null;
    }
    return parentId;
  }

  loadPage(id: string) {
    this.pageId = id;
  }

  handlSubMenuBackClick() {
    navigationRailActive.value = null;
  }

  handleNavigationSubClicked(i: MenuItem, parentId: string) {
    navigationRailSelected.value = parentId;
    if ((i.items || []).length > 0) {
      this.toggleExpanded(i.id);
    } else {
      navigationSubSelected.value = i.id;
      this.loadPage(navigationSubSelected.value);
    }
  }

  handleRailClick(id: string) {
    if (navigationRailSelected.value !== id) {
      // Set new selected rail item
      navigationRailSelected.value = id;

      // Reset selected sub menu item
      navigationSubSelected.value = null;

      const items = this.menu.find((i) => i.id === id)?.items || [];
      if (items.length > 0) {
        navigationRailActive.value = id;
      }
      // If persistent menu close the drawer when a item is clicked and does not has children items
      if (navigationDrawerPersistent.value) {
        this.drawer!.open = items.length > 0 ? true : false;
      }
      this.loadPage(navigationRailSelected.value);
    }
  }

  render() {
    return html``;
  }
}
