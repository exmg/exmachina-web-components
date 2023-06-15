import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import '@exmg/exmg-button/exmg-button.js';
import '@polymer/iron-demo-helpers/demo-snippet.js';
@customElement('exmg-button-demo')
export class ButtonDemo extends LitElement {
  static styles = [
    css`
      :host {
        font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 15px;
        --mdc-theme-primary: var(--md-sys-color-primary);
        --mdc-theme-on-primary: var(--md-sys-color-on-primary);
      }
      exmg-button[unelevated] {
        --exmg-spinner-stroke-width: 2px;
        --exmg-spinner-color: '#eee';
      }
      h3 {
        color: var(--md-sys-color-on-surface);
      }
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .main > div {
        width: 100%;
        border-bottom: 1px solid #666;
      }
      div > * {
        padding: 8px;
      }

      exmg-button[progress] {
        --exmg-button-progress-color: red;
        --exmg-button-progress-direction: ltr;
      }
    `,
  ];

  render() {
    return html`
      <div class="main">
        <div>
          <h3>Dense & Unelevated</h3>
          <demo-snippet>
            <template>
              <exmg-button unelevated dense">BUTTON</exmg-button>
            </template>
          </demo-snippet>
        </div>
        <div>
          <h3>Loading (click it!)</h3>
          <demo-snippet>
            <template>
              <exmg-button loading>LOADING</exmg-button>
            </template>
          </demo-snippet>
        </div>
        <div>
          <h3>Disabled</h3>
          <demo-snippet>
            <template>
              <exmg-button class="dark" unelevated disabled>Disabled</exmg-button>
            </template>
          </demo-snippet>
        </div>
        <div>
          <h3>With icon</h3>
          <demo-snippet>
            <template>
              <exmg-button class="dark" unelevated"
                ><mwc-icon>merge_type</mwc-icon>ICON</exmg-button
              >
            </template>
          </demo-snippet>
        </div>
        <div>
          <h3>With progress</h3>
          <demo-snippet>
            <template>
              <exmg-button class="progress-button" unelevated progress="50"
                >PROGRESS</exmg-button
              >
            </template>
          </demo-snippet>
        </div>
      </div>
    `;
  }
}
