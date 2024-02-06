import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { style } from '../demo-page-styles-css.js';

import '@exmg/exmg-radio/src/exmg-radio-item.js';
import '@exmg/exmg-form/exmg-form.js';
import '@material/web/icon/icon.js';

@customElement('exmg-radio-demo')
export class ExmgRadioDemo extends LitElement {
  static styles = [
    style,
    css`
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
      .horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & > *:first-child {
          margin-right: 1rem;
        }
      }
      .vertical {
        display: flex;
        flex-direction: column;
        & > *:not(:last-child) {
          margin-bottom: 1rem;
        }
        &.wrapped {
          flex-direction: row;
          flex-wrap: wrap;
          & > * {
            flex-basis: 100%;
            max-width: calc(50% - 1rem);
            &:nth-child(odd) {
              margin-right: 1rem;
            }
          }
        }
        &.fixed {
          div[slot='content'] {
            width: 250px;
          }
          md-icon {
            --md-icon-size: 50px;
          }
        }
      }
      .large {
        font-size: 29px;
        line-height: 1;
        font-weight: 400;
      }
    `,
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  handleHorizontalChange(e: CustomEvent) {
    console.log('handleHorizontalChange', e.detail);
  }

  doFormAction(e: CustomEvent) {
    console.log('doFormAction', e.detail);
  }

  render() {
    return html`
      <div class="main centered">
        <div>
          <h1>Only title example</h1>
          <div class="horizontal">
            <exmg-radio-item @change=${this.handleHorizontalChange} name="title" value="yes" radio>
              <div slot="title">Yes</div>
            </exmg-radio-item>
            <exmg-radio-item @change=${this.handleHorizontalChange} name="title" value="no" radio>
              <div slot="title">No</div>
            </exmg-radio-item>
          </div>
        </div>

        <div>
          <h1>Title and description example</h1>
          <div class="vertical">
            <exmg-radio-item value="128GB" name="description" radio>
              <div slot="title">128GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="256GB" name="description" radio>
              <div slot="title">256GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="512GB" name="description" radio>
              <div slot="title">512GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="1024GB" name="description" radio>
              <div slot="title">1024GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
          </div>
        </div>
        <div>
          <h1>Title, description and image example, wrapped</h1>
          <div class="vertical wrapped">
            <exmg-radio-item value="128GB" name="wrapped">
              <img slot="image" src="https://via.placeholder.com/100" alt="128GB" />
              <div slot="title">128GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="256GB" name="wrapped">
              <img slot="image" src="https://via.placeholder.com/100" alt="256GB" />
              <div slot="title">256GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="512GB" name="wrapped">
              <img slot="image" src="https://via.placeholder.com/100" alt="512GB" />
              <div slot="title">512GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
            <exmg-radio-item value="1024GB" name="wrapped">
              <img slot="image" src="https://via.placeholder.com/100" alt="1024GB" />
              <div slot="title">1024GB</div>
              <div slot="content">From $1099 or $45.79/mo.per month for 24 mo. *months before trade-in</div>
            </exmg-radio-item>
          </div>
        </div>

        <div>
          <h1>Title, icon and description example</h1>
          <div class="vertical fixed">
            <exmg-radio-item value="yes" name="icon" radio>
              <md-icon slot="image">done</md-icon>
              <div slot="title">Yes</div>
              <div slot="content">I agree to the terms and conditions</div>
            </exmg-radio-item>
            <exmg-radio-item value="no" name="icon" radio>
              <md-icon slot="image">highlight_off</md-icon>
              <div slot="title">No</div>
              <div slot="content">I do not agree to terms and conditions</div>
            </exmg-radio-item>
          </div>
        </div>
        <div>
          <h1>Title, icon and description example, in form</h1>
          <exmg-form @dialog-submit=${this.doFormAction}>
            <div slot="toolbar" class="toolbar"><div class="title">Accept terms and conditions</div></div>
            <form>
              <div class="vertical fixed">
                <exmg-radio-item name="radio-form">
                  <md-icon slot="image">done</md-icon>
                  <div slot="title">Yes</div>
                  <div slot="content">I agree to the terms and conditions</div>
                </exmg-radio-item>
                <exmg-radio-item name="radio-form">
                  <md-icon slot="image">highlight_off</md-icon>
                  <div slot="title">No</div>
                  <div slot="content">I do not agree to terms and conditions</div>
                </exmg-radio-item>
              </div>
            </form>
          </exmg-form>
        </div>
      </div>
    `;
  }
}
