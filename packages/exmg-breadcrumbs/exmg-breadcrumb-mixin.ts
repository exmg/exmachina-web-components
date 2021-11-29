import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';
import {Constructor} from '@exmg/exmg-base/mixins/types.js';
import {ExmgBreadcrumbs} from './exmg-breadcrumbs.js';
import {BreadcrumbItem} from './types.js';

export abstract class BreadcrumbsClass extends ExmgElement {
    breadcrumbs?: ExmgBreadcrumbs;
}

export interface BreadcrumbsInterface {
    emitSetBreadcrumbs(items: BreadcrumbItem[]): void;
    emitResetBreadcrumbs(): void;
}

export const breadcrumbsMixin = <T extends Constructor<ExmgElement & BreadcrumbsClass>>(base: T) => {
  class BreadcrumbsState extends base {
    setBreadcrumbsBind: (e: CustomEvent<{ items: BreadcrumbItem[]; }>) => void;
    resetBreadcrumbsBind: () => void;

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
        this.breadcrumbs && (this.breadcrumbs.items = []);
    }

    setBreadcrumbs(e: CustomEvent<{items: BreadcrumbItem[]}>) {
        this.breadcrumbs && (this.breadcrumbs.items = e.detail.items);
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
