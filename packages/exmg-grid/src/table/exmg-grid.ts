import {html} from 'lit';
import {ExmgElement} from '@exmg/exmg-base';
import {property, customElement, state} from 'lit/decorators.js';
import {cache} from 'lit/directives/cache.js';
import '@exmg/exmg-sortable/exmg-sortable.js';
import {style as exmgGridTableStyles} from '../styles/exmg-grid-styles-css.js';
import {ExmgRowSelectable} from './featrues/exmg-row-selectable.js';
import {ExmgQuerySelectors} from './utils/exmg-query-selectors.js';
import {ExmgRowExpandable} from './featrues/exmg-row-expandable.js';
import {ExmgColumnSortable} from './featrues/exmg-column-sortable.js';
import {ExmgRowSortable} from './featrues/exmg-row-sortable.js';
import {EventDetailRowsOrderChanged, EventDetailRowsOrderUpdated, SORT_DIRECTION} from './types/exmg-grid-types.js';

type GenericPropertyValues<T, V = unknown> = Map<T, V>;
type Props = Exclude<keyof ExmgGrid, number | symbol>;

type SmartPropertyValue = GenericPropertyValues<Props>;

/**
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exmg-arrow-upward-url` | Url to icon that is used for soring direction indicator | `url('/assets/arrow-upward.svg');`
 * `--exmg-table-card-width` | table card width | `100%;`
 * `--exmg-table-card-margin-bottom` | table bottom margin  | `5px;`
 * `--exmg-table-color` | table text color | `#02182b;`
 * `--exmg-table-background-color` | table background color | `#ffffff;`
 * `--exmg-table-box-shadow` | table box shadow | `#{0px 1px 5px 0px rgba($onSurface, .2), 0px 2px 2px 0px rgba($onSurface, .14), 0px 3px 1px -2px rgba($onSurface, .12)},`
 * `--exmg-table-row-divider-color` | table rows separator color | `#dbdbdb;`
 * `--exmg-table-row-selected-color` | selected row text color | `#02182b;`
 * `--exmg-table-row-selected-background-color` | selected row background color | `#e2f1fe;`
 * `--exmg-table-row-hover-color` | row hover text color | `#02182b;`
 * `--exmg-table-row-hover-background-color` | row hover background color | `#f1f1f1;`
 * `--exmg-table-row-dragged-background-color` | sortable row background color when dragged | `#f1f1f1;`
 * `--exmg-table-rows-expanded-divider-border` | border between row and expanded row detail | `none;`
 * `--exmg-table-rows-expanded-border` | border around row and expanded row detail | `1px solid #dbdbdb;`
 * `--exmg-table-rows-expanded-background-color` | background color of row and expanded row detail | `#e2f1fe;`
 * `--exmg-table-rows-expanded-color` | text color of row and expanded row detail | `#02182b;`
 * `--exmg-table-th-color` | header text color | `#0071dc;`
 * `--exmg-table-columns-background-color` | header background color | `#ffffff;`
 * `--exmg-table-th-sortable-hover-color` | sortable header hover text color | `#02182b;`
 * `--exmg-table-th-height` | header height | `48px;`
 * `--exmg-table-th-sort-margin-left` | header margin after text but before icon | `0px;`
 * `--exmg-table-td-height` | row cell height | `48px;`
 * `--exmg-table-th-sort-icon-height` | sort icon height | `1em;`
 * `--exmg-table-th-sort-icon-width` | sort icon width | `1em;`
 * `--exmg-table-col-number-padding-right` | right padding of number column | `10px;`
 * `--exmg-table-checkbox-cell-width` | width of cell with checkbox | `24px;`
 */
@customElement('exmg-grid')
export class ExmgGrid extends ExmgElement {
  static styles = [exmgGridTableStyles];

  /**
   * Array of data which mapped to rows
   */
  @property({type: Array})
  items: unknown[] = [];

  /**
   * Feature that turn on sort by column
   */
  @property({type: Boolean, reflect: true})
  sortable = false;

  /**
   * Name of sort column which should be sorted by default
   */
  @property({type: String, attribute: 'default-sort-column'})
  defaultSortColumn?: string;

  /**
   * Default sort direction
   */
  @property({type: String, attribute: 'default-sort-direction'})
  defaultSortDirection?: SORT_DIRECTION;

  /**
   * Feature that allow sort rows
   * If table has turn on feature `selectable` then it takes precedence and `rowSelectable` will be ignored
   */
  @property({type: Boolean, reflect: true, attribute: 'rows-sortable'})
  rowsSortable = false;

  /**
   * Feature that allow select rows
   */
  @property({type: Boolean, attribute: 'rows-selectable'})
  rowsSelectable = false;

  /**
   * By default a ros is also selactable by clicking anywhere inside the row when the rowSElectable option is enabled
   */
  @property({type: Boolean, attribute: 'disable-row-click-selection'})
  disableRowClickSelection = false;

  /**
   * If rows are selectable you can also pass selector to checkboxes.
   * We can have checkboxes in thead or / and tbody.
   */
  @property({type: String, attribute: 'selectable-checkbox-selector'})
  selectableCheckboxSelector?: string;

  /**
   * Map of column names that should be hidden
   */
  @property({type: Object})
  hiddenColumnNames: Record<string, string> = {};

  /**
   * Map of row id and selection state
   * Useful for setup default selection or manipulating programmatically
   */
  @property({type: Object})
  selectedRowIds: Record<string, boolean> = {};

  /**
   * Map of row id and expandable row state
   * Useful for setup default expanded rows or manipulating programmatically
   */
  @property({type: Object})
  expandedRowIds: Record<string, boolean> = {};

  /**
   * Selector to element inside row which will trigger expand / collapse action on related row detail
   */
  @property({type: String, attribute: 'expandable-toggle-selector', reflect: true})
  expandableToggleSelector?: string;

  /**
   * Set table layout. If fixed then text overflow will be hidden and ellipsis added.
   */
  @property({type: String, attribute: 'table-layout', reflect: true})
  tableLayout: 'fixed' | 'auto' = 'auto';

  @state()
  private querySelectors?: ExmgQuerySelectors;

  @property({type: Boolean, reflect: true, attribute: 'data-with-toolbar'})
  withToolbar = false;

  private rowSelectableFeature?: ExmgRowSelectable;

  private rowExpandableFeature?: ExmgRowExpandable;

  private rowSortableFeature?: ExmgRowSortable;

  private columnSortableFeature?: ExmgColumnSortable;

  private componentReady = false;

  private getQuerySelectors(): ExmgQuerySelectors {
    if (!this.querySelectors) {
      throw new Error('ExmgQuerySelector not initialized yet');
    }
    return this.querySelectors;
  }

  private getTable(): HTMLTableElement {
    return this.getQuerySelectors().getTable();
  }

  private getTableBody() {
    return this.getQuerySelectors().getTableBody();
  }

  private findTableBody() {
    if (this.querySelectors) {
      return this.getTableBody() || undefined;
    }
    return undefined;
  }

  private getColumns(selector = 'th'): NodeListOf<HTMLElement> {
    return this.getQuerySelectors().getColumns(selector);
  }

  private getBodyRowSelector(selector = '') {
    return this.getQuerySelectors().getBodyRowSelector(selector);
  }

  private canSortRows() {
    return !this.sortable && this.rowsSortable;
  }

  private rowsOrderChange(e: CustomEvent) {
    setTimeout(() => {
      const {sourceIndex, targetIndex} = e.detail;
      const items = [...this.items];
      const movedElement = items[sourceIndex];

      items.splice(sourceIndex, 1);
      items.splice(targetIndex, 0, movedElement);

      this.dispatchEvent(
        new CustomEvent<EventDetailRowsOrderUpdated>('exmg-grid-rows-order-updated', {
          composed: true,
          bubbles: true,
          detail: {sourceIndex, targetIndex},
        }),
      );
      this.dispatchEvent(
        new CustomEvent<EventDetailRowsOrderChanged<any>>('exmg-grid-rows-order-changed', {
          composed: true,
          bubbles: true,
          detail: {items},
        }),
      );
    }, 0);
  }

  private updateColumnVisibility(previousHiddenColumnNames: Record<string, string> = {}) {
    let visibleColumns = 0;
    this.getColumns().forEach((column, index) => {
      const columnKey = column.getAttribute('data-column-key');
      visibleColumns += this.hiddenColumnNames[columnKey || ''] ? 0 : 1;
      if (columnKey && previousHiddenColumnNames[columnKey] !== this.hiddenColumnNames[columnKey]) {
        const nextDisplayValue = this.hiddenColumnNames[columnKey] ? 'none' : 'table-cell';
        column.style.display = nextDisplayValue;
        this.getTable()
          .querySelectorAll<HTMLInputElement>(`tbody.grid-data tr:not(.grid-row-detail) td:nth-child(${index + 1})`)
          .forEach((cell) => {
            cell.style.display = nextDisplayValue;
          });
      }
    });
    this.updateAutoColspan(visibleColumns);
  }

  private updateAutoColspan(visibleColumns: number) {
    this.getTable()
      .querySelectorAll('[data-auto-colspan]')
      .forEach((element) => {
        const offset = Number.parseInt(element.getAttribute('data-auto-span') || '0', 10);
        element.setAttribute('colspan', (visibleColumns - offset).toString());
      });
  }

  private observeExpandedRowIds(changedProps: SmartPropertyValue) {
    if (changedProps.has('expandedRowIds')) {
      Object.entries(this.expandedRowIds).forEach(([rowId, nextExpandedState]) => {
        const expendableToggle = this.getTableBody().querySelector<HTMLElement>(
          this.getBodyRowSelector(`[data-row-key="${rowId}"] ${this.expandableToggleSelector}`),
        );

        if (expendableToggle) {
          const isExpanded = expendableToggle.hasAttribute('data-is-expanded');
          if (isExpanded !== nextExpandedState) {
            expendableToggle.dispatchEvent(new MouseEvent('click'));
          }
        }
      });
    }
  }

  private observeSelectedRowIds(changedProps: SmartPropertyValue) {
    if (changedProps.has('selectedRowIds')) {
      Object.entries(this.selectedRowIds).forEach(([rowId, nextSelectionState]) => {
        const row = this.getTableBody().querySelector<HTMLTableRowElement>(this.getBodyRowSelector(`[data-row-key="${rowId}"]`));

        if (row) {
          const isSelected = row.hasAttribute('data-selected');
          if (isSelected !== nextSelectionState) {
            row.dispatchEvent(new MouseEvent('click'));
          }
        }
      });
    }
  }

  private observeItems(changedProps: SmartPropertyValue) {
    if (changedProps.has('items') && this.rowSelectableFeature) {
      this.rowSelectableFeature.syncSelectedItems();
    }
  }

  private async initGridAttributes(): Promise<void> {
    await this.updateComplete;
    const toolbarSlot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="toolbar"]');
    if (toolbarSlot && toolbarSlot.assignedNodes && toolbarSlot.assignedNodes().length) {
      // make TS happy - this.withToolbar is declared but never read
      this.withToolbar = this.withToolbar || true;
    }
  }

  protected async firstUpdated(): Promise<void> {
    const table = this.shadowRoot!.host.querySelector<HTMLTableElement>('table')!;
    const tableBody = table.querySelector<HTMLTableSectionElement>('tbody.grid-data')!;

    this.querySelectors = new ExmgQuerySelectors(table, tableBody);

    this.initGridAttributes();

    const bodyRows = this.querySelectors.getBodyRows();

    if (this.sortable) {
      this.columnSortableFeature = new ExmgColumnSortable(
        this.querySelectors,
        (event: Event) => this.dispatchEvent(event),
        this.defaultSortColumn,
        this.defaultSortDirection,
      );
      this.columnSortableFeature.initFeature();
    }

    if (this.canSortRows()) {
      this.rowSortableFeature = new ExmgRowSortable(this.querySelectors);
      this.rowSortableFeature.initFeature();
    }

    if (this.rowsSelectable) {
      this.rowSelectableFeature = new ExmgRowSelectable(
        this.querySelectors,
        (event: Event) => this.dispatchEvent(event),
        this.disableRowClickSelection,
        this.selectableCheckboxSelector,
      );
      this.rowSelectableFeature.initFeature(bodyRows);
    }

    if (this.expandableToggleSelector) {
      this.rowExpandableFeature = new ExmgRowExpandable(this.querySelectors, this.expandableToggleSelector);
      this.rowExpandableFeature.initFeature();
    }

    this.updateColumnVisibility();

    bodyRows.forEach((row) => row.setAttribute('data-initialized', ''));

    this.querySelectors.getColumns('th:not([title])').forEach((col) => col.setAttribute('title', col.innerText));

    this.querySelectors.getTable().setAttribute('data-table-layout', this.tableLayout);

    await this.updateComplete;
    this.componentReady = true;
  }

  protected updated(changedProps: SmartPropertyValue) {
    if (changedProps.has('hiddenColumnNames') || changedProps.has('items')) {
      this.updateColumnVisibility(changedProps.get('hiddenColumnNames') as Record<string, string>);
    }

    this.observeItems(changedProps);
    this.observeExpandedRowIds(changedProps);
    this.observeSelectedRowIds(changedProps);

    if (this.componentReady && changedProps.has('items')) {
      const bodyRows = this.querySelectors!.getBodyRowsNotInitialized();

      if (this.rowSelectableFeature) {
        this.rowSelectableFeature.updateFeature(bodyRows);
      }

      if (this.rowExpandableFeature) {
        this.rowExpandableFeature.updateFeature();
      }

      if (this.rowSortableFeature) {
        this.rowSortableFeature.updateFeature();
      }

      bodyRows.forEach((row) => row.setAttribute('data-initialized', ''));
    }
  }

  private renderWithoutSortable() {
    return html` <slot></slot> `;
  }

  private renderWithSortable() {
    return html`
      <exmg-sortable
        orientation="${'vertical'}"
        animation-enabled
        item-selector="tbody.grid-data &gt; tr:not(.grid-row-detail)"
        handle-selector=".grid-row-drag-handler"
        .sortableHostNode="${this.findTableBody()}"
        @dom-order-change="${this.rowsOrderChange}"
      >
        <slot></slot>
      </exmg-sortable>
    `;
  }

  protected render() {
    return html`
      <div class="table-card-container">
        <slot name="toolbar"></slot>
        <div class="table-card">
          <div class="table-container">${cache(this.canSortRows() ? this.renderWithSortable() : this.renderWithoutSortable())}</div>
          <slot name="pagination"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-grid': ExmgGrid;
  }
}