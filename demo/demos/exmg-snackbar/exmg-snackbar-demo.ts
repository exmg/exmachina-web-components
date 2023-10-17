import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import '@exmg/exmg-snackbar/exmg-snackbar.js';
<<<<<<< HEAD
import '@exmg/exmg-button/exmg-button.js';
import '@material/mwc-icon-button/mwc-icon-button.js';
import { ExmgSnackbar } from '@exmg/exmg-snackbar/exmg-snackbar.js';
=======
import '@material/web/button/text-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/standard-icon-button.js';
import { ExmgSnackbar } from '@exmg/exmg-snackbar';
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

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
<<<<<<< HEAD
          <h4>Default auto close</h4>
          <exmg-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#default-snackbar')?.show()}
          >
=======
          <h1>Default auto close</h1>
          <md-filled-button @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#default-snackbar')?.show()}>
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            Open default
          </md-filled-button>
          <exmg-snackbar id="default-snackbar" labelText="Default auto close"></exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Default leading</h4>
          <exmg-button
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#leading-snackbar')?.show()}
          >
=======
          <h1>Default leading</h1>
          <md-filled-button @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#leading-snackbar')?.show()}>
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            Open leading
          </md-filled-button>
          <exmg-snackbar id="leading-snackbar" leading labelText="Default leading"></exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Auto close with custom timing (10 sec)</h4>
          <exmg-button
=======
          <h1>Auto close with custom timing (10 sec)</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#custom-time-snackbar')?.show()}
          >
            Open custom timing
          </md-filled-button>
          <exmg-snackbar
            id="custom-time-snackbar"
            leading
            timeoutMs="10000"
            labelText="This will close in 10 seconds"
          ></exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Stacked</h4>
          <exmg-button
=======
          <h1>Stacked</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#stacked-snackbar')?.show()}
          >
            Open stacked
          </md-filled-button>
          <exmg-snackbar
            id="stacked-snackbar"
            leading
            stacked
            labelText="This is a very long text, we can stack the snackbar to make more room! (this only works with an action)"
          >
            <md-text-button slot="action">Close</md-text-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Manual close</h4>
          <exmg-button
=======
          <h1>Manual close</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#manual-snackbar')?.show()}
          >
            Open manual close
          </md-filled-button>
          <exmg-snackbar
            id="manual-snackbar"
            leading
            timeoutMs="-1"
            labelText="This will only close when pressing the 'retry' button"
          >
            <md-text-button slot="action">Retry</md-text-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Dismiss button</h4>
          <exmg-button
=======
          <h1>Dismiss button</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#dismiss-snackbar')?.show()}
          >
            Open dismiss
          </md-filled-button>
          <exmg-snackbar
            id="dismiss-snackbar"
            leading
            timeoutMs="-1"
            labelText="This will only close when pressing the dismiss button"
          >
            <md-standard-icon-button slot="dismiss"><md-icon>close</md-icon></md-standard-icon-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Positive snackbar</h4>
          <exmg-button
=======
          <h1>Positive snackbar</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#positive-snackbar')?.show()}
          >
            Open positive
          </md-filled-button>
          <exmg-snackbar
            id="positive-snackbar"
            variant="positive"
            timeoutMs="-1"
            leading
            labelText="This will only close when pressing the dismiss button"
          >
            <md-icon slot="icon">check_circle</md-icon>
            <md-standard-icon-button slot="dismiss"><md-icon>close</md-icon></md-standard-icon-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Negative snackbar</h4>
          <exmg-button
=======
          <h1>Negative snackbar</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#negative-snackbar')?.show()}
          >
            Open negative
          </md-filled-button>
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
<<<<<<< HEAD
          <h4>Info snackbar</h4>
          <exmg-button
=======
          <h1>Info snackbar</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#info-snackbar')?.show()}
          >
            Open info
          </md-filled-button>
          <exmg-snackbar
            id="info-snackbar"
            variant="info"
            timeoutMs="-1"
            leading
            labelText="INFO: This will only close when pressing the dismiss button"
          >
            <md-icon slot="icon">info</md-icon>
            <md-standard-icon-button slot="dismiss"><md-icon>close</md-icon></md-standard-icon-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Snackbar with custom offset</h4>
          <exmg-button
=======
          <h1>Snackbar with custom offset</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#offset-snackbar')?.show()}
          >
            Open custom offset
          </md-filled-button>
          <exmg-snackbar
            id="offset-snackbar"
            leading
            timeoutMs="-1"
            labelText="This has a custom offset"
            xOffset="300"
            yOffset="300"
          >
            <md-icon slot="icon">info</md-icon>
            <md-standard-icon-button slot="dismiss"><md-icon>close</md-icon></md-standard-icon-button>
          </exmg-snackbar>
        </div>
        <div>
<<<<<<< HEAD
          <h4>Custom color snackbar</h4>
          <exmg-button
=======
          <h1>Custom color snackbar</h1>
          <md-filled-button
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
            unelevated
            @click=${() => this.shadowRoot?.querySelector<ExmgSnackbar>('#custom-snackbar')?.show()}
          >
            Open custom
          </md-filled-button>
          <exmg-snackbar
            id="custom-snackbar"
            variant="info"
            timeoutMs="-1"
            leading
            labelText="INFO: This will only close when pressing the dismiss button"
          >
            <md-icon slot="icon">shopping_cart</md-icon>
            <md-standard-icon-button slot="dismiss"><md-icon>close</md-icon></md-standard-icon-button>
          </exmg-snackbar>
        </div>
      </div>
    `;
  }
}
