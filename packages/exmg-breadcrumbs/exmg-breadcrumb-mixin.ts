import {ExmgBreadcrumbs} from './exmg-breadcrumbs.js';
import {observer, ExmgElement, Constructor} from '@exmg/lit-base/index.js';
import {BreadcrumbItem} from './types.js';
import {property} from 'lit/decorators.js';

export abstract class BreadcrumbsClass extends ExmgElement {
  breadcrumbsElement?: ExmgBreadcrumbs;
  breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbsInterface {
  emitSetBreadcrumbs(items: BreadcrumbItem[]): void;
  emitResetBreadcrumbs(): void;
}

export const BreadcrumbsMixin = <T extends Constructor<ExmgElement & BreadcrumbsClass>>(base: T) => {
  class BreadcrumbsState extends base {
    setBreadcrumbsBind: (e: CustomEvent<{items: BreadcrumbItem[]}>) => void;
    resetBreadcrumbsBind: () => void;

    @property({type: Array})
    @observer(function (this: any, breadcrumbs: BreadcrumbItem[]) {
      this.emitSetBreadcrumbs(breadcrumbs);
    })
    breadcrumbs?: BreadcrumbItem[] = [];

    emitSetBreadcrumbs(items: BreadcrumbItem[]) {
      window.dispatchEvent(
        new CustomEvent('breadcrumbs-set', {
          bubbles: true,
          composed: true,
          detail: {items},
        }),
      );
    }

    emitResetBreadcrumbs() {
      window.dispatchEvent(
        new CustomEvent('breadcrumbs-reset', {
          bubbles: true,
          composed: true,
          detail: false,
        }),
      );
    }

    resetBreadcrumbs() {
      this.breadcrumbsElement && (this.breadcrumbsElement.items = []);
    }

    setBreadcrumbs(e: CustomEvent<{items: BreadcrumbItem[]}>) {
      this.breadcrumbsElement && (this.breadcrumbsElement.items = e.detail.items);
    }

    constructor(...args) {
      super(args);

      this.setBreadcrumbsBind = this.setBreadcrumbs.bind(this);
      this.resetBreadcrumbsBind = this.resetBreadcrumbs.bind(this);

      // @ts-ignore
      window.addEventListener('breadcrumbs-set', this.setBreadcrumbsBind);
      window.addEventListener('breadcrumbs-reset', this.resetBreadcrumbsBind);
    }

    disconnectedCallback() {
      this.emitResetBreadcrumbs();
      // @ts-ignore
      window.removeEventListener('breadcrumbs-set', this.setBreadcrumbsBind);
      window.removeEventListener('breadcrumbs-reset', this.resetBreadcrumbsBind);
      super.disconnectedCallback();
    }
  }

  return BreadcrumbsState as Constructor<BreadcrumbsInterface> & T;
};
