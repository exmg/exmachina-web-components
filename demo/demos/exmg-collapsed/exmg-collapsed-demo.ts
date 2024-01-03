import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@exmg/exmg-collapsed/exmg-collapsed.js';
import '@material/web/button/outlined-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/icon/icon.js';
import './settings-example-list.js';
//import '@material/web/labs/'

export const downArrowIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <defs>
      <style>
        .a {
          fill: var(--md-sys-color-primary);
        }
      </style>
    </defs>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path class="a" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
`;

@customElement('exmg-collapsed-demo')
export class CollapsedDemo extends LitElement {
  @property({ type: Boolean })
  opened = false;

  @property({ type: Boolean })
  openedMaterial = false;

  @property({ type: Array })
  faqs = [
    { id: 1, title: 'How does this work?', opened: false },
    { id: 2, title: 'Why does this work?', opened: false },
    { id: 3, title: 'When does this take place?', opened: false },
  ];

  static styles = [
    css`
      md-outlined-button {
        width: 100%;
      }
      .main {
        box-sizing: border-box;
        padding: 1rem;
      }
      h1 {
        color: var(--md-sys-color-on-surface);
        padding-top: 1.5rem;
      }
      .button {
        display: flex;
        align-items: center;
        color: var(--md-sys-color-on-surface);
        font-size: 1rem;
        padding: 1rem;
        cursor: pointer;
        justify-content: space-between;
      }
      .button > * {
        margin-right: 1rem;
      }
      .button[aria-expanded='true'] .icon {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: transform 150ms ease;
      }

      md-outlined-button[aria-expanded='true'] .icon {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: transform 150ms ease;
      }

      md-list-item[aria-expanded='true'] .icon {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: transform 150ms ease;
      }

      .icon {
        color: var(--md-sys-color-on-surface);
      }
      p {
        color: var(--md-sys-color-on-surface);
        padding: 0 1rem;
      }
    `,
  ];

  handleOpen(id: number) {
    const faq = this.faqs.find((x) => x.id === id);
    if (!faq) return;
    faq.opened = !faq.opened;
    this.faqs = [...this.faqs];
  }

  render() {
    return html`
      <div class="main">
        <settings-example-list></settings-example-list>
        <h1>Standard</h1>
        <div
          role="button"
          tabindex="0"
          class="button"
          aria-expanded=${this.opened}
          @click=${() => (this.opened = !this.opened)}
          aria-controls="collapsed"
        >
          See more
          <md-icon class="icon">expand_more</md-icon>
        </div>
        <exmg-collapsed id="collapsed" ?opened=${this.opened}
          ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </exmg-collapsed>

        <h1>Material</h1>
        <md-outlined-button
          role="button"
          tabindex="0"
          aria-expanded=${this.openedMaterial}
          @click=${() => (this.openedMaterial = !this.openedMaterial)}
          aria-controls="collapsed"
        >
          See more
          <md-icon slot="icon" class="icon">expand_more</md-icon>
        </md-outlined-button>
        <exmg-collapsed id="collapsed" ?opened=${this.openedMaterial}
          ><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </exmg-collapsed>

        <h1>FAQ</h1>
        <md-list>
          ${this.faqs.map((faq) => {
            return html`
              <md-list-item
                role="button"
                tabindex="0"
                aria-expanded=${faq.opened}
                @click=${() => this.handleOpen(faq.id)}
                aria-controls="collapsed"
              >
                ${faq.title}
                <md-icon slot="end" class="icon">expand_more</md-icon>
              </md-list-item>
              <exmg-collapsed id="collapsed" ?opened=${faq.opened}
                ><p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </exmg-collapsed>
            `;
          })}
        </md-list>
      </div>
    `;
  }
}
