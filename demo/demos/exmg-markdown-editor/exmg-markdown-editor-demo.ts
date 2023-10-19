import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// import '@exmg/exmg-markdown-editor-two/src/exmg-markdown-editor.js';

@customElement('exmg-markdown-editor-demo')
export class DemoSimpleGridTable extends LitElement {
  protected render() {
    return html`
      <div class="centered">
        <label>Markdown Editor refactor</label>

      </div>
    `;
  }
}
