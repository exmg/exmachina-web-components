import { html } from 'lit';
import { toolbarActions } from './actions.js';
import { ToolbarIcons, ToolbarItem } from './types.js';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import { toolbarIcons } from './icons.js';
import { ExmgElement } from '@exmg/lit-base';

export class MarkdownEditorToolbarBase extends ExmgElement {
  toolbarActions: ToolbarItem[] = toolbarActions;
  toolbarIcons: ToolbarIcons = toolbarIcons;

  renderActionButtons() {
    const buttons = this.toolbarActions.map((button) => {
      const displayedName = button.name.replace('_', '').toLocaleUpperCase();
      return html` <md-icon-button
        aria-label=${displayedName}
        title=${displayedName}
        @click=${(e: CustomEvent) => {
          e.preventDefault();
          this.action(button.name)
        }}
      >
        <md-icon>
          ${toolbarIcons[button.icon] ? toolbarIcons[button.icon] : button.icon}
        </md-icon>
      </md-icon-button>`;
    });
    return buttons;
  }

  action(action: string) {
    this.fire('action', action, true);
  }

  protected render() {
    return html` <div class="toolbar-container">${this.renderActionButtons()}</div> `;
  }
}
