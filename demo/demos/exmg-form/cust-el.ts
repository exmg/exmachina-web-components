import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cust-el')
export class CustEl extends LitElement {
  @property({type: Boolean, attribute: 'register-for-reset', reflect: true})
  // @ts-ignore
  private registerForReset?: boolean;

  constructor() {
    super();
    this.registerForReset = true;
  }
  reset() {
    console.log('RESET EL');
  }
  render() {
    return html` <main>Test El</main> `;
  }
}
