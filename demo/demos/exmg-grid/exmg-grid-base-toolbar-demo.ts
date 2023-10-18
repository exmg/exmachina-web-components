import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@exmg/exmg-grid/src/table/exmg-grid-toolbar-combobox.js';
import '@exmg/exmg-grid/src/table/exmg-grid-base-toolbar.js';
import '@polymer/paper-item/paper-item.js';
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

  private removeOneAction() {
    this.actions.shift();
    this.actions = [...this.actions];
  }

  render() {
    return html`
      <style>
        :host {
          --mdc-theme-primary: #0071dc;
          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <h1>With actions</h1>
      <button @click=${this.removeOneAction}>Remove one action</button>
      <hr />
      <exmg-grid-base-toolbar>
        <div slot="actions">
          ${repeat(this.actions, (action) => {
            return html`
              <md-icon-button
                class="action"
                icon="${action.icon}"
                label="${action.text}"
                title="${action.tooltip}"
                @click="${this.onActionExecuted(action)}"
              ></md-icon-button>
            `;
          })}
        </div>
        <div slot="description">${this.description}</div>
        <div slot="filters">
          ${repeat(this.filters, (filter) => {
            return html`
              <exmg-grid-toolbar-combobox
                id="pageSizeOptions"
                attr-for-selected="data-id"
                selected="${filter.selected}"
                @exmg-combobox-select="${this.onFilterChanged(filter)}"
              >
                ${repeat(
                  filter.config.data,
                  (item: any) => item,
                  (item) => html` <paper-item data-id="${item.id}">${filter.name}: ${item.title}</paper-item> `,
                )}
              </exmg-grid-toolbar-combobox>
            `;
          })}
        </div>
      </exmg-grid-base-toolbar>
    `;
  }
}
