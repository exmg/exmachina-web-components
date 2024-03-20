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

      form {
        width: 100%;
      }
    `,
  ];

  submit(e: CustomEvent) {
    console.log('Form submitted', e.detail);
  }

  render() {
    return html` <exmg-form @form-submit=${this.submit}>
      <form>
        <exmg-markdown-editor
          name="markdown"
          label="Exmg Markdown Demo"
          value="${markdown}"
          required
        ></exmg-markdown-editor>
      </form>
    </exmg-form>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-simple-demo': ExmgMarkdownEditorSimpleDemo;
  }
}
