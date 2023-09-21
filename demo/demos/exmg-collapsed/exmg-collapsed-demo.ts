import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@exmg/exmg-collapsed/exmg-collapsed.js';

export const downArrowIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
`;

@customElement('exmg-collapsed-demo')
export class CollapsedDemo extends LitElement {
  @property({ type: Boolean })
  opened = false;

  static styles = [
    css`
      .main {
        box-sizing: border-box;
        padding: 1rem;
        width: 400px;
      }
      .button {
        display: flex;
        align-items: center;

        padding: 1rem;
        cursor: pointer;
        justify-content: space-between;
      }
      .button:hover {
        background: #ececec;
      }
      .button > * {
        margin-right: 1rem;
      }
      .button[aria-expanded='true'] .icon {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: transform 150ms ease;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
      p {
        padding: 0 1rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="main">
        <div
          role="button"
          tabindex="0"
          class="button"
          aria-expanded=${this.opened}
          @click=${() => (this.opened = !this.opened)}
          aria-controls="collapsed"
        >
          See more
          <span class="icon">${downArrowIcon}</span>
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
      </div>
    `;
  }
}
