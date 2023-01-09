import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@exmg/exmg-breadcrumbs/exmg-breadcrumbs.js';
import './page-example.js';

@customElement('exmg-breadcrumbs-demo')
export class BreadcrumbsDemo extends LitElement {
  static styles = [
    css`
      :host {
        --mdc-theme-surface: #0071dc;
      }
      exmg-breadcrumbs {
        font-family: Roboto;
        font-size: 1rem;
      }
      .toolbar {
        padding: 0.8em 1em;
        border: 1 px solid hsl(0, 0%, 90%);
        background-color: hsl(300, 14%, 97%);
      }
      .toolbar.theme {
        background-color: var(--mdc-theme-primary);
      }
      .theme exmg-breadcrumbs {
        --mdc-theme-primary: #cecece;
        --mdc-theme-on-primary: var(--mdc-theme-primary);
        --mdc-theme-surface: white;
      }
    `,
  ];

  @state()
  private items = [
    {href: '/home', content: 'Home page'},
    {href: '/users', content: 'User List'},
    {href: '/users/1234', content: 'Mark'},
    {href: '/users/1234/details', content: 'Details'},
  ];

  render() {
    return html`
      <div class="main">
        <h4>Default</h4>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}"></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h4>Arrow separator</h4>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h4>Themed</h4>
        <div class="toolbar theme">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h4>Page Example Mixin</h4>
        <page-example></page-example>
      </div>
    `;
  }
}
