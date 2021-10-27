import {html, LitElement} from 'lit';
import {state} from 'lit/decorators.js';
import {customElement} from 'lit/decorators/custom-element.js';
import {elements} from './elements.js';
import {style} from './styles/demo-app-css.js';

@customElement('demo-app')
export class DemoApp extends LitElement {
  static styles = [style];

  @state()
  private selectedElement?: any;

  boundLocationChanged?: any;

  constructor() {
    super();
    this.boundLocationChanged = this._handleLocationChanged.bind(this);
  }

  private _handleLocationChanged() {
    this._updateFromUrl();
  }

  _updateFromUrl() {
    /* Url Search params */
    const searchParams = new URLSearchParams(window.location.search.slice(1));
    const elementName = searchParams.get('el');
    this.selectedElement = elements.find((e) => e.name === `@exmg/${elementName}`);
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

  private renderElements() {
    return elements.map((element) => {
      const active = this.selectedElement && this.selectedElement.name === element.name;
      const elementHref = element.name.replace('@exmg/', '');
      const url = `/demo/?el=${elementHref}`;
      return html`
        <a
          href=${url}
        >
          <div class=${`element ${active ? 'active' : ''}`}>
            <h3>${element.name}</h3>
            ${this.selectedElement ? '' : html`<p>${element.version}</p>`}
          </div>
        </a>
      `;
    });
  }

  protected render() {
    if (!this.selectedElement) {
      return html`
        <section class="landing">
          <div class="header">
            <h3>EXMACHINA WEB COMPONENTS</h3>
          </div>
          <div class="elements">${this.renderElements()}</div>
        </section>
      `;
    } else {
      const elementHref = this.selectedElement.name.replace('@exmg/', '');
      return html`
        <section class="demos">
          <div class="sidemenu">
            <div class="sidemenu-header">
              <h3>EXMACHINA WEB COMPONENTS</h3>
            </div>
            <div class="sidemenu-elements">${this.renderElements()}</div>
          </div>
          <div class="header">
            <div class="infos">
              <h3>${this.selectedElement.name}</h3>
              <p>v${this.selectedElement.version}</p>
            </div>
            <div class="actions">
              <a href=${this.selectedElement.url} target="_blank">
                <button class="npm" raised>NPMJS</button>
              </a>
            </div>
          </div>
          <div class="main">
            <iframe src="./demos/${elementHref}/index.html"></iframe>
          </div>
        </section>
      `;
    }
  }
}
