import {ExmgQuerySelectors} from '../utils/exmg-query-selectors.js';

export class ExmgRowSortable {
  private querySelectors: ExmgQuerySelectors;

  constructor(qs: ExmgQuerySelectors) {
    this.querySelectors = qs;
  }

  initFeature(): void {
    this.querySelectors
      .getTableBody()
      .querySelectorAll<HTMLElement>('tr:not([data-initialized]) .grid-row-drag-handler, tr:not([data-initialized]).grid-row-drag-handler')
      .forEach((element: HTMLElement) => {
        this.registerMouseListenersHideDetailOnStartDragging(element);
      });
  }

  updateFeature(): void {
    this.initFeature();
  }

  private getRowDetailQuerySelectorFactory(element: HTMLElement): () => HTMLTableRowElement | void {
    const row = element.closest('tr');
    const rowId = row && row.getAttribute('data-row-key');
    if (rowId) {
      return () =>
        this.querySelectors!.getTableBody().querySelector<HTMLTableRowElement>(`tr[data-row-detail-key="${rowId}"]`) || undefined;
    }

    return () => undefined;
  }

  private registerMouseListenersHideDetailOnStartDragging(element: HTMLElement): void {
    const getRowDetail = this.getRowDetailQuerySelectorFactory(element);

    if (element.closest('td')) {
      // ignore click (won't eventually select row) when trigger is element embedded in table cell
      element.addEventListener('click', (event: Event) => event.stopPropagation());
    }

    element.addEventListener('mousedown', (event: Event) => {
      event.preventDefault();
      const rowDetail = getRowDetail();
      if (rowDetail && rowDetail.hasAttribute('data-is-row-expanded')) {
        rowDetail.style.display = 'none';

        const handlerMouseUp = () => {
          const rowDetailToRevert = getRowDetail();
          if (rowDetailToRevert && rowDetailToRevert.hasAttribute('data-is-row-expanded')) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            rowDetailToRevert.style.display = null;
          }

          this.querySelectors!.getTableBody().removeEventListener('mouseup', handlerMouseUp);
        };

        this.querySelectors!.getTableBody().addEventListener('mouseup', handlerMouseUp);
      }
    });
  }
}
