import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@polymer/paper-input/paper-input.js';
import '@exmg/exmg-markdown-editor/exmg-markdown-editor.js';

import '../exmg-form.js';
import {ExmgForm} from '../exmg-form.js';

@customElement('tab-3')
export class Tab3El extends LitElement {
  static styles = [
    css`
      #controlledHeight {
        --exmg-form-internal-height: 150px;
      }

      #horizontal {
        display: flex;
        flex-direction: column;
      }
      #horizontal > * {
        flex: 1;
      }
    `,
  ];

  render() {
    return html`
      <h1>Controlled height</h1>
      <exmg-form id="controlledHeight" @submit="${this.onSubmit}" @cancel="${this.onCancel}">
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
        <paper-input label="text input" required></paper-input>
        <paper-input label="text input" value="pre-filled"></paper-input>
      </exmg-form>
    `;
  }

  onSubmit(event: any) {
    console.log('submit', event);
    setTimeout(() => {
      this.resetForm1();
      // event.path[0].error('User does not have permission to save data');
    }, 1500);
  }

  onCancel(event: any) {
    console.log('cancel', event);
  }

  displayFormDirty(e: CustomEvent) {
    const form = e.target as ExmgForm;
    form.error(`You changed a value, form is dirty: ${form.isDirty}`);
  }

  validateForm1() {
    (this.shadowRoot!.querySelector('#form1') as ExmgForm).validate();
  }

  resetForm1() {
    (this.shadowRoot!.querySelector('#form1') as ExmgForm).reset();
  }
}
