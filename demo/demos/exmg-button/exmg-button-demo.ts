import {LitElement, html, css} from 'lit';
import {property} from 'lit/decorators/property.js';
import {customElement} from 'lit/decorators/custom-element.js';
import '@exmg/exmg-button/exmg-button.js';

@customElement('exmg-button-demo')
export class ButtonDemo extends LitElement {
  @property({type: Boolean})
  loading = false;

  static styles = [css`
   :host {
      font-family: var(
        --mdc-typography-headline3-font-family,
        var(--mdc-typography-font-family, Roboto, sans-serif)
      );
      font-size: 15px;
    }
    exmg-button[unelevated] {
      --exmg-spinner-stroke-width: 2px;
      --exmg-spinner-color: "#eee";
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
  `];

  changeHandler(e: any) {
    this.loading = !e.target.checked;
  }

  render() {
    return html`
      <div class="main">
        <div>
          <h4>Dense & Unelevated</h4>
          <exmg-button unelevated dense ?loading="${this.loading}"
            >BUTTON</exmg-button
          >
        </div>
        <div>
          <h4>Loading (click it!)</h4>
          <exmg-button
            ?loading="${this.loading}"
            @click=${() => (this.loading = !this.loading)}
            >LOADING</exmg-button
          >
        </div>
        <div>
          <h4>Disabled</h4>
          <exmg-button
            class="dark"
            unelevated
            ?loading="${this.loading}"
            disabled
            >Disabled</exmg-button
          >
        </div>
        <div>
          <h4>With icon</h4>
          <exmg-button class="dark" unelevated ?loading="${this.loading}"
            ><mwc-icon>merge_type</mwc-icon>ICON</exmg-button
          >
        </div>
        <div>
          <h4>With progress</h4>
          <exmg-button
            class="progress-button"
            unelevated
            progress="50"
            ?loading="${this.loading}"
            >PROGRESS</exmg-button
          >
        </div>
      </div>
    `;
  }
}
