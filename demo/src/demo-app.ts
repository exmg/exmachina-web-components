<<<<<<< HEAD
import { html, LitElement, nothing, PropertyValueMap } from 'lit';
=======
import { html, LitElement, nothing } from 'lit';
import { html as staticHtml } from 'lit/static-html.js';
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
import { query, state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { elements } from './elements.js';
import { style } from './styles/demo-app-css.js';
<<<<<<< HEAD
=======
import '@material/web/switch/switch.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/button/filled-button.js';
import { Switch } from '@material/web/switch/lib/switch.js';
import { demos } from '../demos/demos.js';
import { repeat } from 'lit/directives/repeat.js';
import { setupTheme, applyTheme } from './theme-module.js';

const darkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
setupTheme(darkMode);
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

@customElement('demo-app')
export class DemoApp extends LitElement {
  static styles = [style];

  @state()
  private selectedElement?: any;

<<<<<<< HEAD
  @state()
  darkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

  @query('#darkSwitch')
  darkSwitch?: HTMLInputElement;
=======
  @query('#darkModeSwitch')
  private darkModeSwitch?: Switch;

  @state()
  darkMode = darkMode;
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878

  boundLocationChanged?: any;

  constructor() {
    super();
    this.boundLocationChanged = this._handleLocationChanged.bind(this);
  }

  private _handleLocationChanged() {
    this._updateFromUrl();
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.handleDarkMode();
  }

  _updateFromUrl() {
    /* Url Search params */
    const searchParams = new URLSearchParams(window.location.search.slice(1));
    const elementName = searchParams.get('el');

    if (elementName) {
      this.selectedElement = elements.find((e) => e.name === `@exmg/${elementName}`);
    } else {
      this.selectedElement = elements[0];
      const url = new URL(window.location.href);
      url.searchParams.set('el', this.selectedElement.name.substr(6));
      // @ts-ignore
      window.history.pushState({}, '', url);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    /* Add listener for search params changed */
    window.addEventListener('search-property-changed', this.boundLocationChanged);
    window.addEventListener('popstate', this.boundLocationChanged);

    this._updateFromUrl();
  }

  disconnectedCallback() {
    window.removeEventListener('search-property-changed', this.boundLocationChanged);
    window.removeEventListener('popstate', this.boundLocationChanged);

    super.disconnectedCallback();
  }

  handleDarkMode() {
<<<<<<< HEAD
    this.darkMode = this.darkSwitch?.checked ?? false;
    this.setDarkMode();
  }

  setDarkMode() {
    this.darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
=======
    this.darkMode = this.darkModeSwitch?.selected!;
    applyTheme(!!this.darkMode);
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
  }

  private renderElements() {
    return repeat(elements, (element) => {
      const active = this.selectedElement && this.selectedElement.name === element.name;
      const elementHref = element.name.replace('@exmg/', '');
      return html`
        <md-list-item
          @click=${() => this.handleNavigation(elementHref)}
          headline=${element.name.substr(11).replaceAll('-', ' ')}
          class=${`element ${active ? 'active' : ''}`}
        >
        </md-list-item>
      `;
    });
  }

  handleNavigation(elementName: string) {
    this.selectedElement = elements.find((e) => e.name === `@exmg/${elementName}`);
    const url = new URL(window.location.href);
    url.searchParams.set('el', elementName);
    //@ts-ignore
    window.history.pushState({}, '', url);
  }

  protected render() {
    if (!this.selectedElement) return nothing;
    const elementHref = this.selectedElement.name.replace('@exmg/', '');
    console.log('href', elementHref);
    console.log('element', demos[`${elementHref}-demo`]);
    return html`
      <main>
        <section>
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.6 90">
              <defs>
                <style>
                  .a {
                    fill: var(--md-sys-color-primary);
                  }
                  .b {
                    fill: var(--md-sys-color-primary);
                  }
                </style>
              </defs>
              <title>Ex Machina Logo</title>
              <path
                class="a"
                d="M109.1,11.1H0v62a5.8,5.8,0,0,0,5.8,5.8H57.9V69H9.9V21H105V78.9h9.9v-62a5.8,5.8,0,0,0-5.8-5.8h0"
              />
              <rect class="b" x="27" y="38.3" width="13.5" height="13.6" />
              <rect class="b" x="74.5" y="38.3" width="13.5" height="13.6" />
              <polygon
                class="b"
                points="158.8 29 141.6 29 141.6 40.3 157.8 40.3 157.8 48.2 141.6 48.2 141.6 61.1 159.4 61.1 159.4 69 131.9 69 131.9 21 158.8 21 158.8 29"
              />
              <polygon
                class="b"
                points="172.1 21 178.3 36.6 184.4 21 195 21 183.8 44.8 195.8 69 184.9 69 178 52.8 171.1 69 160.5 69 172.5 44.8 161.4 21 172.1 21"
              />
              <polygon
                class="a"
                points="215.6 21 222.4 54.9 222.5 54.9 229.5 21 243.8 21 243.8 69 234.9 69 234.9 30.7 234.8 30.7 226.2 69 218.7 69 210.2 30.7 210.1 30.7 210.1 69 201.2 69 201.2 21 215.6 21"
              />
              <path
                class="a"
                d="M302.3,29.6q-1.2-2.4-4.5-2.4a4.36,4.36,0,0,0-3,1,5.76,5.76,0,0,0-1.8,3.2,21.2,21.2,0,0,0-.9,5.7c-.2,2.3-.3,5.2-.3,8.6a69.88,69.88,0,0,0,.4,8.8,18.85,18.85,0,0,0,1.1,5.2,5.18,5.18,0,0,0,1.9,2.5,6,6,0,0,0,2.7.6,6.34,6.34,0,0,0,2.4-.4,4.34,4.34,0,0,0,1.9-1.7,12.08,12.08,0,0,0,1.3-3.7,35,35,0,0,0,.5-6.3h9.7a43.72,43.72,0,0,1-.6,7.4,16.5,16.5,0,0,1-2.3,6.1,11.45,11.45,0,0,1-4.6,4.1,17.44,17.44,0,0,1-7.8,1.5,19.45,19.45,0,0,1-8.7-1.7,11.28,11.28,0,0,1-4.9-5,22.19,22.19,0,0,1-2.2-7.9c-.3-3-.5-6.4-.5-10.1s.2-7,.5-10.1a22.19,22.19,0,0,1,2.2-7.9,12.05,12.05,0,0,1,4.9-5.1q3.15-1.8,8.7-1.8a17.21,17.21,0,0,1,8.2,1.7,11,11,0,0,1,4.5,4.3,13.67,13.67,0,0,1,1.8,5.6c.2,2,.4,3.9.4,5.6h-9.7c0-3.7-.4-6.2-1.3-7.8"
              />
              <polygon
                class="a"
                points="326.8 21 326.8 39.4 338.1 39.4 338.1 21 347.8 21 347.8 69 338.1 69 338.1 47.7 326.8 47.7 326.8 69 317.1 69 317.1 21 326.8 21"
              />
              <rect class="a" x="353.3" y="21" width="9.7" height="48" />
              <polygon
                class="a"
                points="391.8 53.9 392 53.9 392 21 400.8 21 400.8 69 389.8 69 378 35.4 377.9 35.4 377.9 69 369 69 369 21 380.1 21 391.8 53.9"
              />
              <path
                class="a"
                d="M269.7,21l12.7,48H272.3l-2.2-10.1H257.3L255.1,69H245l12.7-48Zm-1.3,30-4.7-21.6h-.1L259,51Z"
              />
              <path
                class="a"
                d="M426.9,21l12.7,48H429.5l-2.2-10.1H414.5L412.3,69H402.2l12.7-48Zm-1.3,30L421,29.4h-.1L416.3,51Z"
              />
            </svg>
          </div>
          <div class="info">
            <div class="element">
              <div class="name">${this.selectedElement.name}</div>
              <div class="version">v${this.selectedElement.version}</div>
            </div>
            <div class="actions">
              <a href=${this.selectedElement.url} target="_blank">
                <md-filled-button class="npm" raised>NPMJS</md-filled-button>
              </a>
<<<<<<< HEAD
              <input id="darkSwitch" type="checkbox" ?checked=${this.darkMode} @change=${this.handleDarkMode} />
=======
              <md-switch id="darkModeSwitch" ?selected=${this.darkMode} @click=${this.handleDarkMode} icons></md-switch>
>>>>>>> b54177a7db768d67ead57029569f09caa50d0878
              <div class="version">Dark mode</div>
            </div>
          </div>
        </section>
        <div class="content">
          <aside class="sidemenu">
            <md-list class="sidemenu-elements"> ${this.renderElements()} </md-list>
          </aside>
          <main class="main">
            ${staticHtml`<${demos[`${elementHref}-demo`].tag}></${demos[`${elementHref}-demo`].tag}>`}
          </main>
        </div>
      </main>
    `;
  }
}
