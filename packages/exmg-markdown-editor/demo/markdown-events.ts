import {EditorElement} from '../exmg-markdown-editor.js';
import {ExmgFormDialog} from '@exmg/exmg-dialogs/exmg-dialog-form.js';

const writeToEventList = (e: CustomEvent) => {
  console.log(e);
  const eList = document.body.querySelector<HTMLElement>('#event-list>code>ul')!;
  const node = document.createElement('li');
  node.textContent = `'${e.type}' with value : ${e.detail}`;
  eList.prepend(node);
};

const loadMarkdown = () => {
  const mdEditor = document.body.querySelector<EditorElement>('exmg-markdown-editor')!;
  mdEditor.markdown = `# Text
  Lorem **ipsum** dolor sit amet, ~~consectetur adipiscing~~ elit, sed do *eiusmod* tempor incididunt
  ut labore et dolore magna aliqua. `;
};

const insertImage = () => {
  const mdEditor = document.body.querySelector<EditorElement>('exmg-markdown-editor')!;
  mdEditor.insertMarkdown(
    '![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)',
  );
};

const resetMarkdown = () => {
  const mdEditor = document.body.querySelector<EditorElement>('exmg-markdown-editor')!;
  mdEditor.markdown = undefined;
};

const tablePaste = () => {
  const tableDialog = document.body.querySelector<ExmgFormDialog>('#tableDialog')!;
  tableDialog.open();
};

const submitTableToEditor = (e: CustomEvent<{data: string}>) => {
  const mdEditor = document.body.querySelector<EditorElement>('exmg-markdown-editor')!;
  mdEditor.insertTableAtCursor(e.detail.data);
  const tableDialog = document.body.querySelector<ExmgFormDialog>('#tableDialog')!;
  tableDialog.done();
};

export default function () {
  const mdEditor = document.body.querySelector<EditorElement>('exmg-markdown-editor')!;
  const loadBtn = document.body.querySelector<HTMLButtonElement>('#load-md')!;
  const resetBtn = document.body.querySelector<HTMLButtonElement>('#reset-md')!;
  const tableDialog = document.body.querySelector<ExmgFormDialog>('#tableDialog')!;

  const imageBtn = document.body.querySelector<HTMLButtonElement>('#image-md')!;

  tableDialog.addEventListener('submit', submitTableToEditor as EventListener);
  tableDialog.addEventListener('cancel', () => {
    tableDialog.close();
  });

  mdEditor.addEventListener('change', writeToEventList as EventListener);
  mdEditor.addEventListener('exmg-markdown-editor-paste-table', tablePaste);
  loadBtn.onclick = loadMarkdown;
  resetBtn.onclick = resetMarkdown;
  imageBtn.onclick = insertImage;
}
