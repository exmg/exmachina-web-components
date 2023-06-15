import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@exmg/exmg-breadcrumbs/exmg-breadcrumbs.js';
import './page-example.js';

@customElement('exmg-breadcrumbs-demo')
export class BreadcrumbsDemo extends LitElement {
  static styles = [
    css`
      :host {
        font-family: Roboto;
        --mdc-theme-surface: var(--md-sys-color-primary);
      }
      h1 {
        color: var(--md-sys-color-on-surface);
        padding-top: 1.5rem;
      }
      exmg-breadcrumbs {
        font-family: Roboto;
        font-size: 1rem;
      }
      .toolbar {
        padding: 0.8em 1em;
        border: 1 px solid hsl(0, 0%, 90%);
        border-radius: 4px;
        background-color: var(--md-sys-color-surface-variant);
      }
      .toolbar.theme {
        background-color: var(--md-sys-color-primary);
      }
      .theme exmg-breadcrumbs {
        --mdc-theme-primary: var(--md-sys-color-primary);
        --mdc-theme-on-primary: var(--md-sys-color-on-primary);
        --mdc-theme-surface: var(--md-sys-color-on-primary);
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
        <h1>Default</h1>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}"></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h1>Arrow separator</h1>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h1>Themed</h1>
        <div class="toolbar theme">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h1>Page Example Mixin</h1>
        <page-example></page-example>
      </div>
    `;
  }
}
