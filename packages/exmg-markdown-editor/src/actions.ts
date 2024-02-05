import { Editor } from 'codemirror';
import { MarkdownActions } from './types.js';

export const toolbarActions = [
  {
    name: 'undo',
    icon: 'undo',
  },
  {
    name: 'redo',
    icon: 'redo',
  },
  {
    name: 'header_one',
    icon: 'headerone',
  },
  {
    name: 'header_two',
    icon: 'headertwo',
  },
  {
    name: 'header_three',
    icon: 'headerthree',
  },
  {
    name: 'unordered_list',
    icon: 'format_list_bulleted',
  },
  {
    name: 'ordered_list',
    icon: 'format_list_numbered',
  },
  {
    name: 'bold',
    icon: 'format_bold',
  },
  {
    name: 'italic',
    icon: 'format_italic',
  },
  {
    name: 'strikethrough',
    icon: 'format_strikethrough',
  },
  {
    name: 'quote',
    icon: 'format_quote',
  },
  {
    name: 'code',
    icon: 'data_object',
  },
  {
    name: 'link',
    icon: 'insert_link',
  },
  {
    name: 'image',
    icon: 'insert_photo',
  },
  {
    name: 'hr',
    icon: 'hr',
  },
  {
    name: 'table',
    icon: 'table_chart',
  },
];

export const markdownActions: MarkdownActions = {
  undo: (editor: Editor) => {
    editor.getDoc().undo();
    editor.focus();
  },
  redo: (editor: Editor) => {
    editor.getDoc().redo();
    editor.focus();
  },
  header_one: (editor: Editor) => header(editor, '#'),
  header_two: (editor: Editor) => header(editor, '##'),
  header_three: (editor: Editor) => header(editor, '###'),
  bold: (editor: Editor) => emphasis(editor, ['**', '__']),
  italic: (editor: Editor) => emphasis(editor, ['*', '_']),
  strikethrough: (editor: Editor) => emphasis(editor, ['~~']),
  quote: (editor: Editor) => emphasis(editor, ['`']),
  link: (editor: Editor) => insertLink(editor),
  image: (editor: Editor, url?: string) => insertImage(editor, url),
  code: (editor: Editor) => insertCode(editor),
  hr: (editor: Editor) => insertHr(editor),
  table: (editor: Editor) => insertTable(editor),
  ordered_list: (editor: Editor) => insertList(editor, '#'),
  unordered_list: (editor: Editor) => insertList(editor, '*'),
};

const header = (editor: Editor, symbol: string) => {
  const selection = editor.getDoc().getSelection().trim();
  let text = selection;
  const regex = new RegExp(`(?<sa>[#]{1,3})(?<text>.*)`, 'g');
  text = processText(text, regex, symbol);
  if (text === selection) {
    text = `${symbol} ${text.length > 0 ? text : 'header'}`;
    editor.getDoc().replaceSelection(text);
  } else {
    editor.getDoc().replaceSelection(text);
    text.startsWith(symbol) &&
      editor.getDoc().setCursor({
        line: editor.getDoc().getCursor().line + 1,
        ch: editor.getDoc().getCursor().ch,
      });
  }
};

const emphasis = (editor: Editor, symbols: string[]) => {
  const selection = editor.getDoc().getSelection();
  let text = selection;
  symbols.forEach((symbol) => {
    const regex = new RegExp(
      `(?<sa>[\\${symbol.slice(0, 1)}]{${symbol.length}})(?<text>.*?)(?<sb>[\\${symbol.slice(0, 1)}]{1,${
        symbol.length
      }})`,
      'g',
    );
    text = processText(text, regex, symbol);
  });
  if (text === selection) {
    text = `${symbols[0]}${text.length > 0 ? text : symbols[0] === '`' ? 'quote' : 'emphasis'}${symbols[0]}`;
  }
  editor.getDoc().replaceSelection(text);
};

const insertLink = (editor: Editor) => {
  const selection = editor.getSelection();
  let text = selection;
  if (text) {
    text = `[${text}]()`;
  } else {
    text = `[Markdown Live Preview](Your link here)`;
  }
  editor.getDoc().replaceSelection(text);
  const cursor = editor.getDoc().getCursor();
  if (text.split('')[text.length - 2] === 'e') {
    editor.setSelection(
      {
        line: cursor.line,
        ch: cursor.ch - 15,
      },
      { ...cursor, ch: cursor.ch - 1 },
    );
  } else {
    editor.setCursor({ ...cursor, ch: cursor.ch - 1 });
  }
};

const insertImage = (editor: Editor, url?: string) => {
  const selection = editor.getSelection();
  let text = selection;
  if (text) {
    text = `![Alternative ${text}](${url ? url : 'Your link here'} "${text}")`;
  } else {
    text = `![This is an alt text.](${url ? url : 'http://placekitten.com/g/200/300'} "This is a sample image.")`;
  }
  editor.getDoc().replaceSelection(text);
  const cursor = editor.getDoc().getCursor();
  if (text.startsWith('![A')) {
    editor.setSelection(
      {
        line: cursor.line,
        ch: cursor.ch - 4 - text.length,
      },
      {
        line: cursor.line,
        ch: cursor.ch - 18 - text.length,
      },
    );
  } else {
    editor.setSelection(
      {
        line: cursor.line,
        ch: cursor.ch - 25,
      },
      {
        line: cursor.line,
        ch: cursor.ch - 2,
      },
    );
  }
};

const insertCode = (editor: Editor) => {
  const selection = editor.getSelection();
  let text = selection;
  if (text.trim().startsWith('```')) {
    const textArray = text.split('```');
    textArray.pop();
    textArray.reverse().pop();
    text = textArray.reverse().join('');
  } else {
    text = `\`\`\`${text}\n\`\`\``;
  }
  editor.replaceSelection(text);
};

const insertHr = (editor: Editor) => {
  const selection = editor.getSelection();
  editor.replaceSelection(`${selection}\n___\n`);
};

const insertTable = (editor: Editor) => {
  const selection = editor.getSelection();
  editor.replaceSelection(`${selection}
| Left columns  | Center columns | Right columns |
| ------------- |:-------------: |--------------:|
| left foo      | right foo      | right foo     |
| left bar      | right bar      | right foo     |
| left baz      | right baz      | right foo     |
\n`);
};

const insertList = (editor: Editor, symbol: '*' | '#') => {
  const selection = editor.getSelection();
  let text = '';
  for (let i = 0; i < 3; i++) {
    const bullet = `${symbol === '*' ? symbol : `${i + 1}.`}`;
    const item = i === 0 && selection.length > 0 ? selection : `Item ${i + 1}`;
    text += `${bullet} ${item}\n`;
  }
  editor.replaceSelection(`${text}\n`);
  editor.setSelection(
    {
      ch: symbol === '*' ? 2 : 3,
      line: editor.getCursor().line - 4,
    },
    {
      ch: selection.length > 0 ? (selection.length + symbol === '*' ? 2 : 3) : 8,
      line: editor.getCursor().line - 4,
    },
  );
};

const processText = (text: string, regex: RegExp, symbol: string) => {
  const matchList = regex.exec(text);
  if (matchList) {
    text = text
      .split(regex)
      .filter((v) => v !== symbol)
      .join('');
  }
  return text.trim();
};
