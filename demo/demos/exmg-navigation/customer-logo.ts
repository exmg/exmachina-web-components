import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('customer-logo')
export class CustomerLogo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />`;
  }
}
