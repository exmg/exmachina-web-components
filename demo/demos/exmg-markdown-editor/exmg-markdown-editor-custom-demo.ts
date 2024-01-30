import {
  MarkdownEditorElement,
  MarkdownActions,
  markdownActions,
  toolbarActions,
  ToolbarItem,
} from '@exmg/exmg-markdown-editor/index.js';
import { Editor } from 'codemirror';
import { customElement } from 'lit/decorators.js';

@customElement('exmg-markdown-editor-custom-demo')
export class ExmgMarkdownEditorCustomDemo extends MarkdownEditorElement {
  editorActions: MarkdownActions = {
    ...markdownActions,
    underline: (editor: Editor) => {
      const symbol = '--';
      const selection = editor.getDoc().getSelection();
      let text = selection;
      const regex = new RegExp(
        `(?<sa>[\\${symbol.slice(0, 1)}]{${symbol.length}})(?<text>.*?)(?<sb>[\\${symbol.slice(0, 1)}]{1,${
          symbol.length
        }})`,
        'g',
      );
      const matchList = regex.exec(text);
      if (matchList) {
        text = text
          .split(regex)
          .filter((v) => v !== symbol)
          .join('');
      }
      text = text.trim();
      if (text === selection) {
        text = `${symbol}${text.length > 0 ? text : 'underline'}${symbol}`;
      }
      editor.getDoc().replaceSelection(text);
    },
  };

  toolbarActions: ToolbarItem[] = [
    ...toolbarActions,
    {
      icon: 'format_underlined',
      name: 'underline',
    },
  ];

  markedExtension: any[] = [
    {
      name: 'underline',
      level: 'inline',
      start(src: string) {
        return src.match(/-{2}/)?.index;
      },
      tokenizer(src: string, _tokens) {
        const rule = /^-{2}([^-\n]+)-{2}/;
        const match = rule.exec(src);
        if (match) {
          return {
            type: 'underline',
            raw: match[0],
            u: match[1].trim(),
          };
        }
        return;
      },
      renderer(token) {
        return `\n<u>${token.u}</u>`;
      },
      childTokens: ['u'],
    },
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-markdown-editor-custom-demo': ExmgMarkdownEditorCustomDemo;
  }
}
