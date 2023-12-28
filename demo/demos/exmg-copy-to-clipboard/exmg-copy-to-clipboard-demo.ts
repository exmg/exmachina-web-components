import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@material/web/button/filled-button.js';
import '@exmg/exmg-copy-to-clipboard/exmg-copy-to-clipboard.js';
import { style } from '../demo-page-styles-css.js';

@customElement('exmg-copy-to-clipboard-demo')
export class ExmgCopyToClipboardDemo extends LitElement {
  static styles = [style];
  render() {
    return html`
      <div class="main centered">
        <div>
          <h1>Copy using a button element</h1>
          <div>
            <exmg-copy-to-clipboard value="copied content 1">
              <button>⎘ Copy to clipboard 1</button>
            </exmg-copy-to-clipboard>
          </div>
          <h1>Copy using a normal html element</h1>
          <div>
            <exmg-copy-to-clipboard value="copied content 2">
              <span style="cursor:pointer; color: var(--md-sys-color-on-background);">⎘ Copy to clipboard 2</span>
            </exmg-copy-to-clipboard>
          </div>
          <h1>Copy using a normal html element</h1>
          <div>
            <exmg-copy-to-clipboard value="copied content 3">
              <md-filled-button>Copy to clipboard 3</md-filled-button>
            </exmg-copy-to-clipboard>
          </div>
        </div>
      </div>
    `;
  }
}
