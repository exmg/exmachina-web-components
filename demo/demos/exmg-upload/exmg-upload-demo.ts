import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/outlined-button.js';
import './file-upload-section.js';

import './exmg-upload-standard.js';
import './exmg-upload-dialog-demo.js';
import './exmg-upload-custom-demo.js';
import './exmg-upload-image-demo.js';
import './exmg-upload-customize-demo.js';
import './exmg-input-demo.js';

window.uploadDefaults = {
  headers: {
    'Allow-Access-Control-Origin': '*',
  },
};

@customElement('exmg-upload-demo')
export class ExmgUploadDemo extends LitElement {
  @property({ type: String })
  selected?: string;

  static styles = [
    css`
      .centered {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .nav {
        margin-top: 1rem;
        width: 500px;
      }
      .back {
        align-self: flex-start;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
    `,
  ];

  handleSelect(demo: string) {
    this.selected = demo;
  }

  handleBack() {
    this.selected = undefined;
  }

  renderDemo() {
    switch (this.selected) {
      case 'CONFIGURABLE':
        return html`<exmg-upload-standard></exmg-upload-standard>`;
      case 'DIALOG':
        return html`<exmg-upload-dialog-demo></exmg-upload-dialog-demo>`;
      case 'ADAPTER':
        return html` <exmg-upload-custom-demo></exmg-upload-custom-demo> `;
      case 'IMAGE':
        return html` <exmg-upload-image-demo></exmg-upload-image-demo> `;
      case 'CUSTOM':
        return html` <exmg-upload-customize-demo></exmg-upload-customize-demo> `;
      case 'INPUT':
        return html` <exmg-input-demo></exmg-input-demo> `;
      default:
        return nothing;
    }
  }

  render() {
    return html` <div class="centered">
      ${this.selected
        ? html`<md-outlined-button class="back" @click=${this.handleBack}
              >Back
              <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
              </svg>
            </md-outlined-button>
            ${this.renderDemo()}`
        : html` <md-outlined-button class="nav" @click=${() => this.handleSelect('CONFIGURABLE')} raised
              >Configurable upload</md-outlined-button
            >
            <md-outlined-button class="nav" @click=${() => this.handleSelect('DIALOG')} raised
              >Dialog example</md-outlined-button
            >
            <md-outlined-button class="nav" @click=${() => this.handleSelect('ADAPTER')} raised
              >Custom upload adapter</md-outlined-button
            >
            <md-outlined-button class="nav" @click=${() => this.handleSelect('IMAGE')} raised
              >Image features</md-outlined-button
            >
            <md-outlined-button class="nav" @click=${() => this.handleSelect('CUSTOM')} raised
              >Customize upload</md-outlined-button
            >
            <md-outlined-button class="nav" @click=${() => this.handleSelect('INPUT')} raised
              >Input upload</md-outlined-button
            >`}
    </div>`;
  }
}
