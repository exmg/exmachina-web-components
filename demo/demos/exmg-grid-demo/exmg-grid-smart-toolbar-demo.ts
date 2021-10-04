import {html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators';
import '@material/mwc-button';
import {Filter, FilterSingleSelectConfig, FilterConfigType, SettingSelectionListItem} from '../src/table/types/exmg-grid-toolbar-types';
import {
  ActionAmountSelectedItemsCondition,
  ActionWithCondition,
  ActionConditionType,
} from '../src/table/types/exmg-grid-smart-toolbar-types';

@customElement('exmg-grid-smart-toolbar-demo')
export class ExmgGridSmartToolbarDemo extends LitElement {
  private actions: ActionWithCondition<ActionAmountSelectedItemsCondition>[] = [
    {
      id: 'export',
      text: '',
      tooltip: 'Export',
      icon: 'get_app',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 0,
      },
    },
    {
      id: 'merge',
      text: '',
      tooltip: 'Merge',
      icon: 'merge_type',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 1,
      },
    },
    {
      id: 'delete',
      text: '',
      tooltip: 'Delete',
      icon: 'delete',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 2,
      },
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

  @property({type: Number})
  private amountOfSelectedItems = 1;

  private columns: SettingSelectionListItem[] = [
    {
      id: 'col1',
      title: 'column 1',
    },
    {
      id: 'col2',
      title: 'column 2',
      selected: true,
    },
    {
      id: 'col3',
      title: 'column 3',
    },
  ];

  private onActionExecuted(e: CustomEvent) {
    console.log('onActionExecuted', e.detail);
  }

  private onFilterChanged(e: CustomEvent) {
    console.log('onFilterChanged', e.detail);
  }

  private onSettingChanged(e: CustomEvent) {
    console.log('onSettingChanged', e.detail);
  }

  private updateSelectedItems() {
    this.amountOfSelectedItems = parseInt(this.shadowRoot!.querySelector<HTMLInputElement>('#amount-of-selected-items')!.value, 10);
  }

  render(): TemplateResult {
    return html`
      <style>
        :host {
          --mdc-theme-primary: #0071dc;
          --exmg-theme-grid-setting-checkbox-bg-color: #0071dc;
          --exmg-theme-table-toolbar-setting-list-item-active-bg-color: #0071dc;

          padding: 10px;
          display: block;
          background-color: #f6f6f6;
        }
      </style>
      <h1>With actions</h1>
      <input id="amount-of-selected-items" value="${this.amountOfSelectedItems}" />
      <button @click="${this.updateSelectedItems}">Update selected items</button>
      <hr />
      <exmg-grid-smart-toolbar
        amount-of-selected-items="${this.amountOfSelectedItems}"
        .actions="${this.actions}"
        description="${this.description}"
        .filters="${this.filters}"
        ?show-column-filter="${true}"
        .columnFilterColumns="${this.columns}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
        @exmg-grid-toolbar-setting-changed="${this.onSettingChanged}"
      ></exmg-grid-smart-toolbar>
      <h1>Without actions</h1>
      <exmg-grid-smart-toolbar
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      ></exmg-grid-smart-toolbar>

      <h1>With extra</h1>
      <exmg-grid-smart-toolbar
        description="${this.description}"
        .filters="${this.filters}"
        @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
        @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
      >
        <mwc-button slot="extra">+ Add User</mwc-button>
      </exmg-grid-smart-toolbar>
    `;
  }
}
