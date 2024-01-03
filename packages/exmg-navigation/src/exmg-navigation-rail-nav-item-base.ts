import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { navigationItemHover, navigationRailActive, navigationActiveHasSubmenu } from './exmg-navigation-signals.js';

import '@material/web/focus/md-focus-ring.js';
import { observer } from '@exmg/lit-base';

export class ExmgNavigationRailNavItemBase extends LitElement {
  @property({ type: String })
  icon = '';

  @property({ type: String })
  itemId?: string;

  @property({ type: String })
  label?: string;

  @property({ type: Boolean, reflect: true })
  @observer(function (this: ExmgNavigationRailNavItemBase, value: boolean) {
    if (this.itemId) {
      navigationActiveHasSubmenu.value[this.itemId] = value && this.hasSubMenu;
      if (navigationActiveHasSubmenu.value[this.itemId] && value) {
        this.deselectOtherOptions(this.itemId);
      }
    }
  })
  selected: boolean = false;

  @property({ type: Boolean })
  hasSubMenu = false;

  constructor() {
    super();
    this.setAttribute('role', 'link');

    // Bind methods to ensure the correct 'this' context
    this.hoverIn = this.hoverIn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);

    // Add event listeners in the constructor
    this.addEventListener('mouseenter', this.hoverIn);
    this.addEventListener('mouseleave', this.hoverOut);
  }

  deselectOtherOptions(id: string) {
    for (const key in navigationActiveHasSubmenu.value) {
      if (navigationActiveHasSubmenu.value.hasOwnProperty(key) && key !== id) {
        navigationActiveHasSubmenu.value[key] = false;
      }
    }
  }

  hoverIn() {
    if (this.hasSubMenu) {
      navigationItemHover.value = true;
      navigationRailActive.value = this.itemId!;
    }
  }

  hoverOut() {
    navigationItemHover.value = false;
  }

  render() {
    return html` <button>
      <md-focus-ring></md-focus-ring><span class="symbols">${this.icon}</span>
      <div class="label">${this.label}</div>
    </button>`;
  }
}
