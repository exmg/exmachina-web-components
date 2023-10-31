import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';

@customElement('exmg-markdown-editor-old-demo')
export class DemoSimpleGridTable extends LitElement {
  protected render() {
    return html`
      <div class="centered">
        <label> Markdown Editor </label>
        <exmg-markdown-editor-old height="800" split-view show-helper-label class="markdown-body">
        </exmg-markdown-editor-old>
      </div>
    `;
  }
}
