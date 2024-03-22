import { html } from 'lit';
import { toolbarActions } from './actions.js';
import { ToolbarIcons, ToolbarItem } from './types.js';
import { toolbarIcons } from './icons.js';
import { ExmgElement } from '@exmg/lit-base/index.js';
import { property } from 'lit/decorators.js';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

export class MarkdownEditorToolbarBase extends ExmgElement {
  @property({ type: Boolean }) upload = false;
  @property({ type: Array }) actions: ToolbarItem[] = toolbarActions;
  @property({ type: Object }) icons: ToolbarIcons = toolbarIcons;

  renderActionButtons() {
    const buttons = this.actions.map((button) => {
      const displayedName = button.name.replace('_', '').toLocaleUpperCase();
      return html` <md-icon-button
        aria-label=${displayedName}
        title=${displayedName}
        @click=${(e: CustomEvent) => {
          e.preventDefault();
          this.action(button.name);
        }}
      >
        <md-icon> ${this.icons[button.icon] ? this.icons[button.icon] : button.icon} </md-icon>
      </md-icon-button>`;
    });
    return buttons;
  }

  action(action: string) {
    if (action === 'image' && this.upload) {
      this.fire('insert-image', undefined, true);
      return;
    }
    this.fire('action', action, true);
  }

  protected render() {
    return html` <div class="toolbar-container">${this.renderActionButtons()}</div> `;
  }
}
