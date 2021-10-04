import {html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators';
import {Action, Filter, FilterSingleSelectConfig, FilterConfigType} from '../src/table/types/exmg-grid-toolbar-types';

@customElement('exmg-grid-toolbar-demo')
export class ExmgGridToolbarDemo extends LitElement {
  private actions: Action[] = [
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

  private filters: Filter<FilterSingleSelectConfig>[] = [
    {
      id: 'status',
      name: 'Status',
      config: {
        type: FilterConfigType.SingleSelect,
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
    },
  ];

  private onActionExecuted(e: CustomEvent) {
    console.log('onActionExecuted', e.detail);
  }

  private onFilterChanged(e: CustomEvent) {
    console.log('onFilterChanged', e.detail);
  }

  render(): TemplateResult {
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
      <exmg-grid-toolbar
        .actions="${this.actions}"
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
      <h1>Without actions</h1>
      <exmg-grid-toolbar
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
      <h1>Without actions with search</h1>
      <exmg-grid-toolbar
        searchEnabled
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-toolbar>
    `;
  }
}
