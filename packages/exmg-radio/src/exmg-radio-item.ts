import { customElement } from 'lit/decorators.js';
import { ExmgRadioItemBase } from './exmg-radio-item-base.js';
import { style } from './styles/exmg-radio-item-css.js';

/**
 * exmg-radio-item
 * Material 3 radio item with
 */
@customElement('exmg-radio-item')
export class ExmgRadioItem extends ExmgRadioItemBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-item': ExmgRadioItem;
  }
}
