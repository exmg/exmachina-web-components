import { customElement } from 'lit/decorators.js';
import { ExmgRadioItemBase } from './exmg-radio-item-base.js';
import radioItemStyles from './styles/exmg-radio-item-css.js';
import { styles } from '@material/web/radio/internal/radio-styles.css.js';

@customElement('exmg-radio-item')
export class ExmgRadioItem extends ExmgRadioItemBase {
  static styles = [radioItemStyles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-radio-item': ExmgRadioItem;
  }
}
