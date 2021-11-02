import {customElement} from 'lit/decorators';
import {SortableElementBase} from './exmg-sortable-base.js';

/**
 * The `<exmg-sortable>` element Enables drag and drop sorting of nodes in a list, table or any other set of
 * elements.
 *
 * !!! You should always handle @dom-order-change to update your local .items property to update sorted list properly
 *
 * ```html
 * <exmg-sortable item-selector="li" @dom-order-change="${this.myChangeHandler}">
 *  <ul>
 *     ${this.items.map((item) => {
 *       return html`
 *         <li>${item}</li>
 *       `;
 *     })}
 *  </ul>
 * </exmg-sortable>
 * ```
 */

@customElement('exmg-sortable')
export class SortableElement extends SortableElementBase {
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-sortable': SortableElement;
  }
}
