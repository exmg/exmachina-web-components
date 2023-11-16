import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/progress/circular-progress.js';
import { ExmgSearchBase } from './exmg-search-base.js';

import { style } from './styles/exmg-search-css.js';

@customElement('exmg-search')
export class ExmgSearch extends ExmgSearchBase {
  static styles = [style];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-search': ExmgSearch;
  }
}
