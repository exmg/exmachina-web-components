import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { markdown } from './markdown.js';
import '@exmg/exmg-markdown-editor/src/exmg-markdown-editor.js';
import '@material/web/textfield/filled-text-field.js';
import '../../src/theme/color-pallet.js';

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
    return html` <exmg-markdown-editor label="Exmg Markdown Demo" markdown=${markdown}></exmg-markdown-editor> <br /> <md-filled-text-field type="textarea" label="Text Label"></md-filled-text-field> <br/> <color-pallet></color-pallet>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-simple-demo': ExmgMarkdownEditorSimpleDemo;
  }
}
