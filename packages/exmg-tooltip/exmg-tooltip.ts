import {customElement} from 'lit/decorators/custom-element.js';

import {style} from './styles/exmg-tooltip-styles-css.js';
import {ExmgTooltipBase} from './exmg-tooltip-base.js';

/**
 * `exmg-tooltip`
 * Example:
 * ```html
 *  <div style="position:relative;">
 *    <button id="styledBtn">Test</button>
 *    <exmg-tooltip for="styledBtn">the name means "different lizard"</exmg-tooltip>
 *  </div>
 * ```
 *
 * ### Styling
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exmg-tooltip-font-size` | Font size of tooltip text | 10px
 * `--exmg-tooltip-line-height` | Text line height | 1
 * `--exmg-tooltip-background` | Background color | #616161
 * `--exmg-tooltip-opacity` | Tooltip opacity | 0.9
 * `--exmg-tooltip-text-color` | Font color | white
 * `--exmg-tooltip-padding` | Container padding | 8px
 * `--exmg-tooltip-border-radius` | Container border radius | 2px
 * `--exmg-tooltip-min-width` | Breadcrumb container background color | initial
 */

@customElement('exmg-tooltip')
export class ExmgTooltip extends ExmgTooltipBase {
  static styles = style; 
}
