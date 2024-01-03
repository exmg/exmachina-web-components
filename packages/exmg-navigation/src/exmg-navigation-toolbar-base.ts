import { ExmgElement } from '@exmg/lit-base';
import { html } from 'lit';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/mwc-top-app-bar-fixed';

export class ExmgNavigationToolbarBase extends ExmgElement {
  render() {
    return html`<mwc-top-app-bar-fixed>
      <slot name="navigationIcon" slot="navigationIcon"></slot>
      <slot name="title" slot="title"></slot>
      <slot name="actionItems" slot="actionItems"></slot>
    </mwc-top-app-bar-fixed>`;
  }
}
