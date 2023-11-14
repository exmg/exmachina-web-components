import { ExmgBreadcrumbs } from './exmg-breadcrumbs.js';
import { observer, ExmgElement, Constructor } from '@exmg/lit-base/index.js';
import { BreadcrumbItem } from './types.js';
import { property } from 'lit/decorators.js';

/**
 * @class
 * @abstract
 * @extends ExmgElement
 * @property {ExmgBreadcrumbs|undefined} breadcrumbsElement - Reference to the breadcrumbs element.
 * @property {BreadcrumbItem[]|undefined} breadcrumbs - The breadcrumbs array.
 */
export abstract class BreadcrumbsClass extends ExmgElement {
  breadcrumbsElement?: ExmgBreadcrumbs;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * @interface
 * @extends BreadcrumbsClass
 * @method emitSetBreadcrumbs - Emit a custom event to set breadcrumbs.
 * @method emitResetBreadcrumbs - Emit a custom event to reset breadcrumbs.
 */
export interface BreadcrumbsInterface {
  emitSetBreadcrumbs(items: BreadcrumbItem[]): void;
  emitResetBreadcrumbs(): void;
}

/**
 * @function
 * @template T
 * @param {T} base - The base class.
 * @returns {Constructor<BreadcrumbsInterface> & T} - The BreadcrumbsMixin class.
 */
export const BreadcrumbsMixin = <T extends Constructor<ExmgElement & BreadcrumbsClass>>(base: T) => {
  /**
   * @class
   * @extends base
   * @implements BreadcrumbsInterface
   * @property {function} setBreadcrumbsBind - The binded setBreadcrumbs function.
   * @property {function} resetBreadcrumbsBind - The binded resetBreadcrumbs function.
   * @property {BreadcrumbItem[]|undefined} breadcrumbs - The breadcrumbs array.
   */
  class BreadcrumbsState extends base {
    setBreadcrumbsBind: (e: CustomEvent<{ items: BreadcrumbItem[] }>) => void;
    resetBreadcrumbsBind: () => void;

    @property({ type: Array })
    @observer(function (this: any, breadcrumbs: BreadcrumbItem[]) {
      this.emitSetBreadcrumbs(breadcrumbs);
    })
    breadcrumbs?: BreadcrumbItem[] = [];

    /**
     * Emit a custom event to set breadcrumbs from anywhere in the application.
     * @param {BreadcrumbItem[]} items - The breadcrumbs array.
     * @returns {void}
     */
    emitSetBreadcrumbs(items: BreadcrumbItem[]) {
      window.dispatchEvent(
        new CustomEvent('breadcrumbs-set', {
          bubbles: true,
          composed: true,
          detail: { items },
        }),
      );
    }

    /**
     * Emit a custom event to reset breadcrumbs.
     * @returns {void}
     */
    emitResetBreadcrumbs() {
      window.dispatchEvent(
        new CustomEvent('breadcrumbs-reset', {
          bubbles: true,
          composed: true,
          detail: false,
        }),
      );
    }

    /**
     * Reset the breadcrumbs element.
     * @returns {void}
     */
    resetBreadcrumbs() {
      this.breadcrumbsElement && (this.breadcrumbsElement.items = []);
    }

    /**
     * Set the breadcrumbs element.
     * @param {CustomEvent<{ items: BreadcrumbItem[] }>} e - The custom event.
     * @returns {void}
     */
    setBreadcrumbs(e: CustomEvent<{ items: BreadcrumbItem[] }>) {
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
