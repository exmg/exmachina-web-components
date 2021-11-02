export type SORT_DIRECTION = 'ASC' | 'DESC';

export interface EventDetailSortChange {
  column: string;
  sortDirection?: SORT_DIRECTION;
}

export interface EventDetailSelectedRowsChange {
  rows: HTMLTableRowElement[];
}

export interface EventDetailRowsOrderChanged<T extends any = any> {
  items: T[];
}
export interface EventDetailRowsOrderUpdated {
  sourceIndex: number;
  targetIndex: number;
}
