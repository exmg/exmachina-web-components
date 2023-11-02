import { customElement } from 'lit/decorators.js';
import { MarkdownEditorToolbarBase } from './exmg-markdown-editor-toolbar-base.js';
import { style as toolbarStyles } from './styles/exmg-markdown-editor-toolbar-css.js';

@customElement('exmg-markdown-editor-toolbar')
export class MarkdownEditorToolbar extends MarkdownEditorToolbarBase {
  static styles = [toolbarStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-toolbar': MarkdownEditorToolbar;
  }
}
