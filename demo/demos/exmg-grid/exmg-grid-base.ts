/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {LitElement} from 'lit';
import {property, state} from 'lit/decorators.js';
import '@material/mwc-checkbox';
import '@exmg/exmg-grid/src/table/exmg-grid.js';
import '@exmg/exmg-grid/src/table/exmg-grid-pagination.js';
import '@exmg/exmg-grid/src/table/exmg-grid-smart-toolbar.js';
import {
  ActionAmountSelectedItemsCondition,
  ActionConditionType,
  ActionWithCondition,
} from '@exmg/exmg-grid/src/table/types/exmg-grid-smart-toolbar-types.js';
import {
  EventDetailGridToolbarSettingChanged,
  Filter,
  FilterConfigType,
  FilterSingleSelectConfig,
  SettingConfigId,
  SettingSelectionListItem,
} from '@exmg/exmg-grid/src/table/types/exmg-grid-toolbar-types.js';
import {EventDetailRowsOrderChanged, EventDetailSelectedRowsChange, EventDetailSortChange} from '@exmg/exmg-grid/src/table/types/exmg-grid-types.js';
import {EventSelectPayload} from '@exmg/exmg-grid/src/table/exmg-grid-toolbar-combobox.js';

function isString(x: any): x is string {
  return typeof x === 'string';
}
export interface Income {
  id: number;
  month: string;
  amount: number;
  year: number;
  test: string;
}

const generateRows = (length = 50, startId = 1): Income[] => {
  const randomAmount = () => Number.parseFloat((Math.random() * 1000).toFixed(2));
  const source: Income[] = [
    {id: 1, month: 'January', amount: randomAmount(), year: 2000, test: '1'},
    {id: 2, month: 'February', amount: randomAmount(), year: 2000, test: '1'},
    {id: 3, month: 'March', amount: randomAmount(), year: 2000, test: '1'},
  ];

  const rows: Income[] = [];
  let id: number = startId - 1;
  while (rows.length < length) {
    const items = source.map((it) => {
      id = id + 1;
      return {...it, id, amount: randomAmount()};
    });
    rows.push(...items);
  }

  return rows.slice(0, length);
};

let allItems: Income[] = generateRows(10000);
let filteredItems: Income[] = [...allItems];

export const DEFAULT_SORT_COLUMN = 'amount';
export const DEFAULT_SORT_DIRECTION = 'ASC';

const getItemByPage = (pageIndex: number, pageSize: number): Income[] => {
  const startIndex: number = pageIndex * pageSize;
  const endIndex: number = Math.min(startIndex + pageSize, filteredItems.length);
  return filteredItems.slice(startIndex, endIndex);
};

export abstract class ExmgBaseGridDemo extends LitElement {
  @property({type: Array})
  items: Income[];

  @property({type: Boolean})
  dark = false;

  @state()
  pageIndex = 0;

  @state()
  protected pageSize = 10;

  protected searchValue: string | null = null;

  @state()
  protected hiddenColumns: Record<string, string> = {};

  @state()
  protected selectedRows: HTMLTableRowElement[] = [];

  @state()
  protected expandedRowIds: Record<string, boolean> = {};

  @state()
  protected selectedRowIds: Record<string, boolean> = {};

  @state()
  protected theme = 'dark';

  constructor() {
    super();
    this.sortItems(DEFAULT_SORT_COLUMN, DEFAULT_SORT_DIRECTION);
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected actions: ActionWithCondition<ActionAmountSelectedItemsCondition>[] = [
    {
      id: 'export',
      text: '',
      tooltip: 'Export',
      icon: 'get_app',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 1,
      },
    },
    {
      id: 'merge',
      text: '',
      tooltip: 'Merge',
      icon: 'merge_type',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 2,
      },
    },
    {
      id: 'delete',
      text: '',
      tooltip: 'Delete',
      icon: 'delete',
      condition: {
        type: ActionConditionType.AmountOfSelectedItemsRange,
        min: 1,
        max: 10,
      },
    },
  ];

  protected searchProperties = ['month', 'income'];

  protected filters: Filter<FilterSingleSelectConfig>[] = [
    {
      id: 'month',
      name: 'Month',
      config: {
        type: FilterConfigType.SingleSelect,
        data: [
          {
            id: 'all',
            title: 'All',
          },
          {
            id: 'january',
            title: 'January',
          },
          {
            id: 'february',
            title: 'February',
          },
          {
            id: 'march',
            title: 'March',
          },
        ],
      },
    },
  ];

  protected columns: SettingSelectionListItem[] = [
    {id: 'month', title: 'Month', selected: true},
    {id: 'year', title: 'Year', selected: true},
    {id: 'amount', title: 'Amount', selected: true},
  ];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected onActionExecuted(e: CustomEvent<{id: string}>) {
    this.handleAction(e.detail.id);
  }

  protected onActionDelegate(actionId: string) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return () => this.handleAction(actionId);
  }

  private handleAction(actionId: string) {
    switch (actionId) {
      case 'delete': {
        const rowIds = this.selectedRows.map((row) => row.getAttribute('data-row-key'));
        allItems = allItems.filter(({id}) => !rowIds.includes(id.toString()));
        filteredItems = filteredItems.filter(({id}) => !rowIds.includes(id.toString()));
        this.selectedRows = [];
        this.items = getItemByPage(this.pageIndex, this.pageSize);
        break;
      }
      case 'merge': {
        const rowIds = this.selectedRows.map((row) => row.getAttribute('data-row-key'));
        const [idToReplace, ...idsToRemove] = rowIds;
        const mergedRow = allItems
          .filter(({id}) => rowIds.includes(id.toString()))
          .reduce((acc: Income | void, item) => {
            if (acc) {
              return {...acc, amount: acc.amount + item.amount};
            }

            return {...item};
          }, undefined)! as Income;

        allItems = allItems
          .filter(({id}) => !idsToRemove.includes(id.toString()))
          .map((it) => {
            if (it.id.toString() === idToReplace) {
              return {...mergedRow};
            }
            return it;
          });

        filteredItems = filteredItems
          .filter(({id}) => !idsToRemove.includes(id.toString()))
          .map((it) => {
            if (it.id.toString() === idToReplace) {
              return {...mergedRow};
            }
            return it;
          });
        this.items = getItemByPage(this.pageIndex, this.pageSize);
        break;
      }
    }
  }

  updateSearchItems() {
    const fi: any[] = [];
    allItems.forEach((i: any) => {
      this.searchProperties!.some((prop: any) => {
        if (isString(i[prop])) {
          const v = i[prop].toUpperCase();
          const s = (this.searchValue || '').toUpperCase();
          return v.indexOf(s) !== -1;
        }
        return false;
      }) && fi.push(i);
    });

    filteredItems = [...fi];
    this.pageIndex = 0;
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected onSearchChanged(e: CustomEvent<{value: string}>) {
    this.searchValue = e.detail.value;
    this.updateSearchItems();
  }

  protected onFilterChanged(e: CustomEvent<{id: string; value: string}>) {
    const {id, value} = e.detail;
    this.handleFilterChanged(id, value);
  }

  protected onFilterChangedComboboxDelegate(filterId: string) {
    return (e: CustomEvent<EventSelectPayload>) => {
      const filterValue = e.detail.value as string;
      this.handleFilterChanged(filterId, filterValue);
    };
  }

  private handleFilterChanged(id: string, value: string) {
    const filterId = value !== 'all' ? id : null;
    switch (filterId) {
      case 'month':
        filteredItems = allItems.filter(({month}) => month.toLowerCase() === value);
        break;
      default:
        filteredItems = [...allItems];
    }
    this.pageIndex = 0;
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected onSettingChanged(e: CustomEvent<EventDetailGridToolbarSettingChanged>) {
    const {id, value} = e.detail;
    if (id === SettingConfigId.ColumnSelector) {
      this.hiddenColumns = value
        .filter((it: SettingSelectionListItem) => !it.selected)
        .reduce((acc: Record<string, string>, item: SettingSelectionListItem) => {
          return {...acc, [item.id]: item.id};
        }, {});
    }
  }

  protected toggleMonthColumn(event: Event) {
    event.preventDefault();
    const {month, ...rest} = this.hiddenColumns;
    this.hiddenColumns = month ? {...rest} : {...rest, month: 'month'};
  }

  protected toggleYearColumn(event: Event) {
    event.preventDefault();
    const {year, ...rest} = this.hiddenColumns;
    this.hiddenColumns = year ? {...rest} : {...rest, year: 'year'};
  }

  protected refreshTable() {
    const copy = [...this.items];
    this.items = [];
    setTimeout(() => {
      this.items = copy;
    });
  }

  private createRowIdToStateMap(state: boolean, start = 0, end = 3): Record<string, boolean> {
    return this.items.slice(start, end).reduce((acc, it) => ({...acc, [it.id.toString()]: state}), {});
  }

  protected collapseRow(rowId: string) {
    this.expandedRowIds = {[rowId]: false};
  }

  protected expandFirstRows() {
    this.expandedRowIds = this.createRowIdToStateMap(true);
  }

  protected collapseFirstRows() {
    this.expandedRowIds = this.createRowIdToStateMap(false);
  }

  protected selectFirstRows() {
    this.selectedRowIds = this.createRowIdToStateMap(true);
  }

  protected unSelectFirstRows() {
    this.selectedRowIds = this.createRowIdToStateMap(false);
  }

  protected onRowsOrderChanged(event: CustomEvent<EventDetailRowsOrderChanged>) {
    this.items = [...event.detail.items];
  }

  protected onSelectedRowsChange(event: CustomEvent<EventDetailSelectedRowsChange>) {
    this.selectedRows = event.detail.rows;
  }

  protected sortItems(column: string, sortDirection?: 'ASC' | 'DESC') {
    if (!sortDirection) {
      // reset - sort by ID
      filteredItems.sort(({id: xId}, {id: yId}) => (xId > yId ? 1 : xId < yId ? -1 : 0));
    } else {
      const comparisonValue = sortDirection === 'ASC' ? 1 : -1;
      filteredItems.sort((x: Record<string, any>, y: Record<string, any>) => {
        const xValue = x[column];
        const yValue = y[column];
        return xValue > yValue ? comparisonValue : xValue < yValue ? comparisonValue * -1 : 0;
      });
    }
  }

  protected onSortChange(event: CustomEvent<EventDetailSortChange>) {
    const {column, sortDirection} = event.detail;
    this.sortItems(column, sortDirection);
    this.pageIndex = 0;
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected onPageChange(event: CustomEvent) {
    this.pageIndex = event.detail.page;
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected onPageSizeChange(event: CustomEvent) {
    this.pageIndex = 0;
    this.pageSize = event.detail.pageSize;
    this.items = getItemByPage(this.pageIndex, this.pageSize);
  }

  protected getTotalCount(): number {
    return filteredItems.length;
  }
}
