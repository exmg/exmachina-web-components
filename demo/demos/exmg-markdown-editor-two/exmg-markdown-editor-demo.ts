import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
@customElement('exmg-mardkwon-editor-demo')
export class DemoSimpleGridTable extends LitElement {
  protected render() {
    return html`
      <div class="centered">
        <ul class="horizontal-section">
          <li><a href="init.html">Setup editor markdown</a></li>
          <li><a href="style.html">Fullscreen and Restyled</a></li>
          <li><a href="toolbar.html">Toolbar</a></li>
          <li><a href="styling.html">Css styled preview</a></li>
          <li><a href="custom-renderer.html">Custom renderer</a></li>
        </ul>
      </div>
    `;
  }
}
