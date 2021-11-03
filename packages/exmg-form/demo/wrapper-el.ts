import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '../exmg-form.js';
import {ExmgForm} from '../exmg-form.js';

@customElement('wrapper-el')
export class WrapperEl extends LitElement {
  @property({type: String})
  selectedValue = '';

  render() {
    return html`
      <exmg-form @submit="${this.onSubmit}" @cancel="${this.onCancel}" disable-submit-no-changes>
        <slot></slot>
      </exmg-form>
    `;
  }

  _addInputElement() {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'test33';
    input.value = 'tes111';
    this.shadowRoot!.querySelector('exmg-form')!.appendChild(input);
  }
  onSubmit() {
    setTimeout(() => {
      this.resetForm1();
      // event.path[0].error('User does not have permission to save data');
    }, 1500);
  }

  onCancel(event: any) {
    console.log('cancel', event);
  }

  validateForm1() {
    (this.shadowRoot!.querySelector('#form1') as ExmgForm).validate();
  }

  resetForm1() {
    (this.shadowRoot!.querySelector('#form1') as ExmgForm).reset();
  }
}
