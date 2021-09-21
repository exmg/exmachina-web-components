import {customElement, html, LitElement, property} from 'lit-element';
import {elements, Element} from './elements.js';
import demoAppStyles from './styles/demo-app-css.js';
import '@exmg/exmg-button/exmg-button.js';

@customElement('demo-app')
export class DemoApp extends LitElement {
  static styles = [demoAppStyles];

  @property({type: Object})
  private selectedElement?: Element;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this.updateElementFromUrl);
    this.updateElementFromUrl();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.updateElementFromUrl);
  }

  private updateElementFromUrl() {
    const url = window.location.pathname;
    const elementName = `@exmg/${url
      .replace('/demo/demos/', '')
      .replace('/', '')}`;
    this.selectedElement = elements.find((e) => e.name === elementName);
  }

  private getSelectedElementStorybookUrl() {
    if (!this.selectedElement) {
      return 'http://localhost:6006';
    }
    const name = this.selectedElement.name.replace('@exmg/', '');
    return `http://localhost:6006/?path=/story/${name}`;
  }

  private renderElements() {
    return elements.map((element) => {
      const active =
        this.selectedElement && this.selectedElement.name === element.name;
      const url = window.location.href;
      const href = element.name.replace('@exmg/', '');
      return html`
        <a
          href=${url.replace(window.location.pathname, `/demo/demos/${href}/`)}
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
            <h3>EXMACHINA WEB COMPONENTS.</h3>
          </div>
          <div class="elements">${this.renderElements()}</div>
        </section>
      `;
    } else {
      return html`
        <section class="demos">
          <div class="sidemenu">
            <div class="sidemenu-header">
              <h3>EXMACHINA WEB COMPONENTS.</h3>
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
                <exmg-button class="npm" raised>NPMJS</exmg-button>
              </a>
              <a href=${this.getSelectedElementStorybookUrl()} target="_blank">
                <exmg-button class="storybook" raised>STORYBOOK</exmg-button>
              </a>
            </div>
          </div>
          <div class="main">
            <slot></slot>
          </div>
        </section>
      `;
    }
  }
}
