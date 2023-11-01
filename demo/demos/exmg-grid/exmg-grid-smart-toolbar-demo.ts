import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';
import {
  Filter,
  FilterSingleSelectConfig,
  FilterConfigType,
  SettingSelectionListItem,
} from '@exmg/exmg-grid/src/table/types/exmg-grid-toolbar-types.js';
import {
  ActionAmountSelectedItemsCondition,
  ActionWithCondition,
  ActionConditionType,
} from '@exmg/exmg-grid/src/table/types/exmg-grid-smart-toolbar-types.js';
import '@exmg/exmg-grid/src/table/exmg-grid-smart-toolbar.js';

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

  @state()
  private amountOfSelectedItems = 0;

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

  private onActionExecuted() {
    // console.log('onActionExecuted', e.detail);
  }

  private onFilterChanged() {
    // console.log('onFilterChanged', e.detail);
  }

  private onSettingChanged() {
    // console.log('onSettingChanged', e.detail);
  }

  private updateSelectedItems() {
    this.amountOfSelectedItems = parseInt(
      this.shadowRoot!.querySelector<HTMLInputElement>('#amount-of-selected-items')!.value,
      10,
    );
  }

  render() {
    return html`
      <style>
        :host {
          padding: 10px;
          display: block;
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
        <md-filled-button slot="extra">+ Add User</md-filled-button>
      </exmg-grid-smart-toolbar>
    `;
  }
}
