import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@exmg/exmg-breadcrumbs/exmg-breadcrumbs.js';

@customElement('exmg-breadcrumbs-demo')
export class BreadcrumbsDemo extends LitElement {
    @state()
    private items = [
        {href: '/home', content: 'Home page', selected: false},
        {href: '/users', content: 'User List', selected: true},
    ];

    render() {
        return html`
        <div class="main">
            <exmg-breadcrumbs .items="${this.items}"></exmg-breadcrumbs>
        </div>
        `;
    }
}
