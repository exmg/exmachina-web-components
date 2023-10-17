import { LitElement, html } from 'lit';
import './exmg-icons.js';
import '@exmg/exmg-radio-group/exmg-radio-group.js';
import '@exmg/exmg-radio-group/exmg-radio-group-item.js';
import { customElement, property } from 'lit/decorators.js';

@customElement('exmg-radio-group-demo')
export class ExmgRadioGroupDemo extends LitElement {
  @property({ type: String })
  selected = 'option2';

  constructor() {
    super();
    this.selected = 'option2';
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keyup', this.handleKeyUp);
  }
  disconnectedCallback() {
    this.removeEventListener('keyup', this.handleKeyUp);
    super.disconnectedCallback();
  }

  handleKeyUp() {
    // console.log('KEYUP');
  }

  onPaperRadioGroupChanged(e: CustomEvent) {
    this.selected = e.detail.selected;
  }

  render() {
    return html`
      <style>
        :host {
          font-family: var(
            --mdc-typography-headline3-font-family,
            var(--mdc-typography-font-family, Roboto, sans-serif)
          );
          font-size: 15px;
          display: block;
          width: 100%;
          padding: 1rem;
          box-sizing: border-box;
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
          padding-bottom: 1rem;
        }
        .g6 {
          flex-basis: calc(50% - 1rem);
          max-width: calc(50% - 1rem);
        }
        h1 {
          color: var(--md-sys-color-on-surface);
          padding-top: 1.5rem;
        }
        .center {
          text-align: center;
        }
        /* exmg-radio-group-item {
        min-height: 100px;
      } */
        .horizontal > figure {
          margin-left: 1rem;
          margin-right: 2rem;
        }
        .large {
          font-size: 29px;
          line-height: 1;
          font-weight: 400;
        }
      </style>

      <div class="main">
        <div>
          <h1>Flex wrap example</h1>

          <exmg-radio-group name="license" wrap>
            <exmg-radio-group-item value="option1" class="g6">
              <div slot="title"><span class="large">128</span>GB</div>
              <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option2" class="g6">
              <div slot="title"><span class="large">256</span>GB</div>
              <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option3" class="g6">
              <div slot="title"><span class="large">512</span>GB</div>
              <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option4" class="g6">
              <div slot="title"><span class="large">1</span>TB</div>
              <div slot="body">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-group-item>
          </exmg-radio-group>
        </div>

        <div>
          <h1>Clean yes/no example</h1>

          <exmg-radio-group class="custom-style" name="YesNo">
            <exmg-radio-group-item value="option1" class="g6">
              <div class="center">Yes</div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option2" class="g6">
              <div class="center">No</div>
            </exmg-radio-group-item>
          </exmg-radio-group>
        </div>

        <div>
          <h1>Image horizontal</h1>

          <exmg-radio-group class="custom-style" name="Choice">
            <exmg-radio-group-item value="option1" class="g6">
              <div class="figure">
                <figure>
                  <img src="/demo/demos/exmg-radio-group/logo-att-2x.png" alt="test1" width="74" height="34" />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option2" class="g6">
              <div class="figure">
                <figure>
                  <img src="/demo/demos/exmg-radio-group/logo-sprint-2x.png" alt="test2" width="71" height="34" />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
          </exmg-radio-group>
        </div>

        <div>
          <h1>Image vertical</h1>

          <exmg-radio-group class="custom-style" name="Choice" vertical>
            <exmg-radio-group-item value="option1">
              <div class="figure horizontal">
                <figure>
                  <img src="/demo/demos/exmg-radio-group/logo-att-2x.png" alt="test1" width="74" height="34" />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option2" disabled>
              <div class="figure horizontal">
                <figure>
                  <img
                    src="/demo/demos/exmg-radio-group/logo-sprint-2x.png"
                    alt="test2"
                    width="71"
                    height="34"
                    style="margin-right:3px;"
                  />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
          </exmg-radio-group>
        </div>

        <div>
          <h1>Image vertical</h1>

          <exmg-radio-group class="custom-style" name="Choice" vertical>
            <exmg-radio-group-item value="option1" enable-radio-button>
              <div class="figure horizontal">
                <figure>
                  <img src="/demo/demos/exmg-radio-group/logo-att-2x.png" alt="test1" width="74" height="34" />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
            <exmg-radio-group-item value="option2" enable-radio-button>
              <div class="figure horizontal">
                <figure>
                  <img
                    src="/demo/demos/exmg-radio-group/logo-sprint-2x.png"
                    alt="test2"
                    width="71"
                    height="34"
                    style="margin-right:3px;"
                  />
                </figure>
                <label>$1,399.00 or $58.29/mo.per month for 24 mo.monthsFootnote* before trade-in</label>
              </div>
            </exmg-radio-group-item>
          </exmg-radio-group>
        </div>
      </div>
    `;
  }
}
