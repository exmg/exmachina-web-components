import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { markdown } from './markdown.js';
import './exmg-markdown-editor-custom-demo.js';

@customElement('exmg-markdown-editor-custom-renderer-demo')
export class ExmgMarkdownEditorCustomRendererDemo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <exmg-markdown-editor-custom-demo value=${`-- Underline ! --\n${markdown}`}></exmg-markdown-editor-custom-demo>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-custom-renderer-demo': ExmgMarkdownEditorCustomRendererDemo;
  }
}
