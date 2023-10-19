import { html, LitElement } from 'lit';

export class MarkdownEditorElementBase extends LitElement {
  protected render() {
    return html`
      <div class="container">
        <div id="editor">
          MD EDITOR
        </div>
      </div>
    `;
  }
}
