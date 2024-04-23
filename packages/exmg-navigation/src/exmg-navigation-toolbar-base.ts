import { ExmgElement } from '@exmg/lit-base';
import { html } from 'lit';

import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/mwc-top-app-bar-fixed';

export class ExmgNavigationToolbarBase extends ExmgElement {
  protected firstUpdated() {
    const appToolbar = this.shadowRoot!.querySelector('mwc-top-app-bar-fixed');

    if (appToolbar) {
      const observer = new MutationObserver((_, obs) => {
        const shadowRoot = appToolbar.shadowRoot;
        const header = shadowRoot ? shadowRoot.querySelector('header') : null;

        if (header) {
          header.style.left = '0px';
          header.style.right = '0px';
          obs.disconnect(); // Stop observing once we have made the changes
        }
      });

      observer.observe(appToolbar.shadowRoot!, {
        childList: true,
        subtree: true,
      });
    }
  }
  render() {
    return html`<mwc-top-app-bar-fixed>
      <slot name="navigationIcon" slot="navigationIcon"></slot>
      <slot name="title" slot="title"></slot>
      <slot name="actionItems" slot="actionItems"></slot>
    </mwc-top-app-bar-fixed>`;
  }
}
