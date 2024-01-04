import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { markdown } from './markdown.js';
import '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';

@customElement('exmg-markdown-editor-simple-demo')
export class ExmgMarkdownEditorSimpleDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <exmg-markdown-editor label="Exmg Markdown Demo" markdown=${markdown}></exmg-markdown-editor>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-simple-demo': ExmgMarkdownEditorSimpleDemo;
  }
}
