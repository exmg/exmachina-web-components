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
      h3 {
        color: var(--md-sys-color-on-surface);
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
        <h3>Default</h3>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}"></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h3>Arrow separator</h3>
        <div class="toolbar">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h3>Themed</h3>
        <div class="toolbar theme">
          <exmg-breadcrumbs .items="${this.items}" arrow-separator></exmg-breadcrumbs>
        </div>
      </div>
      <div class="main">
        <h3>Page Example Mixin</h3>
        <page-example></page-example>
      </div>
    `;
  }
}
