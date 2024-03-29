import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-copy-to-clipboard/exmg-copy-to-clipboard.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';

@customElement('exmg-copy-to-clipboard-demo')
export class ExmgCopyToClipboardDemo extends LitElement {
  render() {
    return html`
      <div class="main">
        <h3>Copy using a button element</h3>
        <div>
          <demo-snippet>
            <template>
              <exmg-copy-to-clipboard value="copied content 1">
                <button>⎘ Copy to clipboard 1</button>
              </exmg-copy-to-clipboard>
            </template>
          </demo-snippet>
        </div>
        <h3>Copy using a normal html element</h3>
        <div>
          <demo-snippet>
            <template>
              <exmg-copy-to-clipboard value="copied content 2">
                <span style="cursor:pointer;">⎘ Copy to clipboard 2</span>
              </exmg-copy-to-clipboard>
            </template>
          </demo-snippet>
        </div>
      </div>
    `;
  }
}
