import {ReactiveControllerHost} from 'lit';
import {observer} from '@exmg/lit-base/index.js';
import {BreadcrumbItem} from './types.js';
import {ExmgBreadcrumbs} from './exmg-breadcrumbs.js';

export interface BreadcrumbsControllerConfig {
  breadcrumbsElement?: ExmgBreadcrumbs;
}

export class BreadcrumbsController {
  _host: ReactiveControllerHost;
  breadcrumbsElement?: ExmgBreadcrumbs;

  setBreadcrumbsBind: (e: CustomEvent<{items: BreadcrumbItem[]}>) => void;
  resetBreadcrumbsBind: () => void;

  @observer(function (this: BreadcrumbsController, breadcrumbs: BreadcrumbItem[]) {
    this.emitSetBreadcrumbs(breadcrumbs);
  })
  breadcrumbs?: BreadcrumbItem[] = [];

  constructor(host: ReactiveControllerHost, {breadcrumbsElement}: BreadcrumbsControllerConfig) {
    (this._host = host).addController(this);
    this.breadcrumbsElement = breadcrumbsElement;
    this.setBreadcrumbsBind = this.setBreadcrumbs.bind(this);
    this.resetBreadcrumbsBind = this.resetBreadcrumbs.bind(this);

    // @ts-ignore
    window.addEventListener('breadcrumbs-set', this.setBreadcrumbsBind);
    window.addEventListener('breadcrumbs-reset', this.resetBreadcrumbsBind);
  }

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
    console.log('BONJOUR', this.breadcrumbsElement);
    this.breadcrumbsElement && (this.breadcrumbsElement.items = e.detail.items);
  }

  hostDisconnected() {
    this.emitResetBreadcrumbs();
    // @ts-ignore
    window.removeEventListener('breadcrumbs-set', this.setBreadcrumbsBind);
    window.removeEventListener('breadcrumbs-reset', this.resetBreadcrumbsBind);
  }
}
