export class ExmgQuerySelectors {
  private table: HTMLTableElement;
  private tableBody: HTMLElement;
  constructor(t: HTMLTableElement, tb: HTMLTableSectionElement) {
    this.table = t;
    this.tableBody = tb;
  }

  getTable() {
    if (!this.table) {
      throw new Error('Element table not found. Slot hast to define <table>');
    }
    return this.table!;
  }

  getTableBody() {
    if (!this.tableBody) {
      throw new Error('Element tbody not found. Slot hast to define <tbody class="grid-data">');
    }

    return this.tableBody!;
  }
  // eslint-disable-next-line
  getColumns(selector = 'th'): NodeListOf<HTMLElement> {
    return this.getTable().querySelectorAll<HTMLElement>(`.grid-columns ${selector}`);
  }

  getColumn<T extends HTMLElement>(selector = 'th'): T | undefined {
    return this.getTable().querySelector<T>(`.grid-columns ${selector}`) || undefined;
  }

  getBodyRowSelector(selector = ''): string {
    return `tr:not(.grid-row-detail)${selector}`;
  }
  // eslint-disable-next-line
  getBodyRows(): NodeListOf<HTMLTableRowElement> {
    return this.getTableBody().querySelectorAll<HTMLTableRowElement>(this.getBodyRowSelector());
  }
  // eslint-disable-next-line
  getBodyRowsNotInitialized(): NodeListOf<HTMLTableRowElement> {
    return this.getTableBody().querySelectorAll<HTMLTableRowElement>(
      this.getBodyRowSelector(':not([data-initialized])'),
    );
  }
}
