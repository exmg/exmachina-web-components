import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { markdown } from './markdown.js';

import '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';

@customElement('exmg-markdown-editor-custom-preview-demo')
export class ExmgMarkdownEditorCustomPreviewDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .preview-content {
        padding-left: 0.3rem;
      }
      .preview-content > h1 {
        color: green;
      }
    `,
  ];

  render() {
    return html`
      <exmg-markdown-editor markdown=${markdown}>
        <div slot="preview"></div>
      </exmg-markdown-editor>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-custom-preview-demo': ExmgMarkdownEditorCustomPreviewDemo;
  }
}
