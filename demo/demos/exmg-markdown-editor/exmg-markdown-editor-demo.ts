import {html, LitElement} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
import 'marked/lib/marked.esm.js';

@customElement('exmg-markdown-editor-demo')
export class ExmgMarkdownEditorDemo extends LitElement {
  firstUpdated() {
    const editor = this.shadowRoot?.querySelector('#test');
    const md = '#test';
    editor.markdown = md;
  }
  render() {
    return html`
      <div class="centered">
        <ul class="horizontal-section">
          <demo-snippet>
            <template>
              <exmg-markdown-editor id="test" height="300" split-view show-helper-label class="markdown-body">
              </exmg-markdown-editor>
            </template>
          </demo-snippet>
          <h2>Markdown (label + split-view) unstyled output</h2>
          <demo-snippet>
            <template>
              <exmg-markdown-editor height="300" split-view show-helper-label markdown="# Hello Word!">
              </exmg-markdown-editor>
            </template>
          </demo-snippet>
          <h2>Markdown (split-view) styled output</h2>
          <demo-snippet>
            <template>
              <exmg-markdown-editor height="300" split-view markdown="# Hello Word!" class="markdown-body">
              </exmg-markdown-editor>
            </template>
          </demo-snippet>

          <h2>Markdown styled output</h2>
          <demo-snippet>
            <template>
              <exmg-markdown-editor height="300" markdown="# Hello Word!" class="markdown-body"> </exmg-markdown-editor>
            </template>
          </demo-snippet>

          <h2>Markdown (auto-focus) styled output</h2>
          <demo-snippet>
            <template>
              <exmg-markdown-editor height="300" auto-focus markdown="# Hello Word!" class="markdown-body">
              </exmg-markdown-editor>
            </template>
          </demo-snippet>
        </ul>
      </div>
    `;
  }
}
