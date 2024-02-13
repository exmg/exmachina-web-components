/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactiveController } from 'lit';

/**
 * An element that supports single-selection with `SelectionController`.
 */
export interface SelectionElement extends HTMLElement {
  /**
   * Whether or not the element is selected.
   */
  checked: boolean;
}

/**
 * A `ReactiveController` that provides root node-scoped selection for
 * elements, similar to native `<input type="radio">` selection.
 *
 * @example
 * const CHECKED = Symbol('checked');
 *
 * class MyChip extends LitElement {
 *   @property({ type: Boolean }) removable = false;
 *
 *    @property({ type: Boolean, reflect: true })
 *    @observer(function (this: ExmgChip, selected: boolean) {
 *      this.checked = selected;
 *    })
 *    selected = false;
 *
 *    @property({ type: Boolean })
 *    get checked() {
 *      return this[CHECKED];
 *    }
 *    set checked(checked: boolean) {
 *      const wasChecked = this.checked;
 *      if (wasChecked === checked) {
 *        return;
 *      }
 *      console.log('checked', checked);
 *
 *      this[CHECKED] = checked;
 *      this.requestUpdate('checked', wasChecked);
 *    }
 *
 *    [CHECKED] = false;
 *
 *    private selectionController = new SelectionController(this);
 *
 *    constructor() {
 *      super();
 *      this.addController(this.selectionController);
 *    }
 * }
 */
export class SelectionController implements ReactiveController {
  /**
   * All selection elements in the host element's root with the same
   * `name` attribute, including the host element.
   */
  get controls(): [SelectionElement, ...SelectionElement[]] {
    const name = this.host.getAttribute('name');
    if (!name || !this.root || !this.host.isConnected) {
      return [this.host];
    }

    // Cast as unknown since there is not enough information for typescript to
    // know that there is always at least one element (the host).
    return Array.from(this.root.querySelectorAll<SelectionElement>(`[name="${name}"]`)) as unknown as [
      SelectionElement,
      ...SelectionElement[],
    ];
  }

  // eslint-disable-next-line no-undef
  private root: ParentNode | null = null;

  constructor(private readonly host: SelectionElement) {}

  hostConnected() {
    // eslint-disable-next-line no-undef
    this.root = this.host.getRootNode() as ParentNode;
  }

  hostDisconnected() {
    this.root = null;
  }
}
