import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@exmg/exmg-grid/src/table/exmg-grid-toolbar-filters.js';
import '@exmg/exmg-grid/src/table/exmg-grid-base-toolbar.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

@customElement('exmg-grid-base-toolbar-demo')
export class ExmgGridBaseToolbarDemo extends LitElement {
  @state()
  private actions: any[] = [
    {
      id: 'export',
      text: '',
      tooltip: 'Export',
      icon: 'get_app',
    },
    {
      id: 'merge',
      text: '',
      tooltip: 'Merge',
      icon: 'merge_type',
    },
    {
      id: 'delete',
      text: '',
      tooltip: 'Delete',
      icon: 'delete',
    },
  ];

  private description = 'Table 1';

  private filters: any[] = [
    {
      id: 'status',
      name: 'Status',
      config: {
        data: [
          {
            id: 'active',
            title: 'Active',
          },
          {
            id: 'inactive',
            title: 'Inactive',
          },
          {
            id: 'archived',
            title: 'Archived',
          },
        ],
      },
      selected: 'active',
    },
  ];

  private onActionExecuted(action: any) {
    return (event: Event) => {
      // eslint-disable-next-line no-console
      console.log('onActionExecuted', action, event);
    };
  }

  private onFilterChanged(filter: any) {
    return (event: Event) => {
      // eslint-disable-next-line no-console
      console.log('onFilterChanged', filter, event);
    };
  }

  render() {
    return html`
      <style>
        :host {
          padding: 10px;
          display: block;
        }
      </style>
      <exmg-grid-base-toolbar>
        <div slot="actions">
          ${repeat(this.actions, (action) => {
            return html`
              <md-icon-button
                class="action"
                label="${action.text}"
                title="${action.tooltip}"
                @click="${this.onActionExecuted(action)}"
                ><md-icon>${action.icon}</md-icon></md-icon-button
              >
            `;
          })}
        </div>
        <div slot="description">${this.description}</div>
        <div slot="filters">
          ${repeat(this.filters, (filter) => {
            const items = (filter.config.data || []).map((item: any) => ({ label: item.title, value: item.id }));
            return html`
              <exmg-grid-toolbar-filters
                id="pageSizeOptions"
                selected="${filter.selected}"
                .items=${items}
                @exmg-grid-toolbar-filter-changed="${this.onFilterChanged(filter)}"
              ></exmg-grid-toolbar-filters>
            `;
          })}
        </div>
      </exmg-grid-base-toolbar>
    `;
  }
}
