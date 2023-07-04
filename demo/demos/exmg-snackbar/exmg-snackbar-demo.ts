import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-snackbar/exmg-snackbar.js';
import '@exmg/exmg-button/exmg-filled-button.js';
import '@material/mwc-icon-button/mwc-icon-button.js';
import { ExmgSnackbar } from '@exmg/exmg-snackbar/exmg-snackbar.js';

@customElement('exmg-snackbar-demo')
export class SnackbarDemo extends LitElement {
  @property({ type: Boolean })
  loading = false;

  static styles = [
    css`
      :host {
        font-family: var(--mdc-typography-headline3-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 15px;
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
      }
      h1 {
        color: var(--md-sys-color-on-surface);
        padding-top: 1.5rem;
      }
      div > * {
      }
      #custom-snackbar {
        --exmg-snackbar-info-background-color: pink;
      }
    `,
  ];

  changeHandler(e: any) {
    this.loading = !e.target.checked;
  }

  render() {
    return html`
      <div class="main">
        <div>
          <h1>Default auto close</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#default-snackbar')?.show()}
          >
            Open default
          </exmg-filled-button>
          <exmg-snackbar id="default-snackbar" labelText="Default auto close"></exmg-snackbar>
        </div>
        <div>
          <h1>Default leading</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#leading-snackbar')?.show()}
          >
            Open leading
          </exmg-filled-button>
          <exmg-snackbar id="leading-snackbar" leading labelText="Default leading"></exmg-snackbar>
        </div>
        <div>
          <h1>Auto close with custom timing (10 sec)</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#custom-time-snackbar')?.show()}
          >
            Open custom timing
          </exmg-filled-button>
          <exmg-snackbar
            id="custom-time-snackbar"
            leading
            timeoutMs="10000"
            labelText="This will close in 10 seconds"
          ></exmg-snackbar>
        </div>
        <div>
          <h1>Stacked</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#stacked-snackbar')?.show()}
          >
            Open stacked
          </exmg-filled-button>
          <exmg-snackbar
            id="stacked-snackbar"
            leading
            stacked
            labelText="This is a very long text, we can stack the snackbar to make more room! (this only works with an action)"
          >
            <exmg-filled-button slot="action">Close</exmg-filled-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Manual close</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#manual-snackbar')?.show()}
          >
            Open manual close
          </exmg-filled-button>
          <exmg-snackbar
            id="manual-snackbar"
            leading
            timeoutMs="-1"
            labelText="This will only close when pressing the 'retry' button"
          >
            <exmg-filled-button slot="action">Retry</exmg-filled-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Dismiss button</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#dismiss-snackbar')?.show()}
          >
            Open dismiss
          </exmg-filled-button>
          <exmg-snackbar
            id="dismiss-snackbar"
            leading
            timeoutMs="-1"
            labelText="This will only close when pressing the dismiss button"
          >
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Positive snackbar</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#positive-snackbar')?.show()}
          >
            Open positive
          </exmg-filled-button>
          <exmg-snackbar
            id="positive-snackbar"
            variant="positive"
            timeoutMs="-1"
            leading
            labelText="This will only close when pressing the dismiss button"
          >
            <mwc-icon slot="icon">check_circle</mwc-icon>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Negative snackbar</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#negative-snackbar')?.show()}
          >
            Open negative
          </exmg-filled-button>
          <exmg-snackbar
            id="negative-snackbar"
            variant="negative"
            timeoutMs="-1"
            leading
            labelText="WARNING: This will only close when pressing the dismiss button"
          >
            <mwc-icon slot="icon">warning</mwc-icon>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Info snackbar</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#info-snackbar')?.show()}
          >
            Open info
          </exmg-filled-button>
          <exmg-snackbar
            id="info-snackbar"
            variant="info"
            timeoutMs="-1"
            leading
            labelText="INFO: This will only close when pressing the dismiss button"
          >
            <mwc-icon slot="icon">info</mwc-icon>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Snackbar with custom offset</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#offset-snackbar')?.show()}
          >
            Open custom offset
          </exmg-filled-button>
          <exmg-snackbar
            id="offset-snackbar"
            leading
            timeoutMs="-1"
            labelText="This has a custom offset"
            xOffset="300"
            yOffset="300"
          >
            <mwc-icon slot="icon">info</mwc-icon>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
        <div>
          <h1>Custom color snackbar</h1>
          <exmg-filled-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#custom-snackbar')?.show()}
          >
            Open custom
          </exmg-filled-button>
          <exmg-snackbar
            id="custom-snackbar"
            variant="info"
            timeoutMs="-1"
            leading
            labelText="INFO: This will only close when pressing the dismiss button"
          >
            <mwc-icon slot="icon">shopping_cart</mwc-icon>
            <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
          </exmg-snackbar>
        </div>
      </div>
    `;
  }
}
