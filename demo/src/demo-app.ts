import {customElement, html, LitElement, property} from 'lit-element';
import {elements, Element} from './elements.js';
import demoAppStyles from './styles/demo-app-css.js';

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
    const elementIndex = url.indexOf('exmg');
    const elementName = url.substring(elementIndex, url.length - 1);
    this.selectedElement = elements.find((e) => e.name === `@exmg/${elementName}`);
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
        const elementHref = element.name.replace('@exmg/', '');
        const url = this.selectedElement ? `../${elementHref}/` : `./demos/${elementHref}/`;
        console.log('URL', url);
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
              <h3>BITES.</h3>
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
              <a href=${this.getSelectedElementStorybookUrl()} target="_blank">
                <button class="storybook" raised>STORYBOOK</button>
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
