import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base/index.js';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import { SettingSelectionListItem } from './types/exmg-grid-toolbar-types.js';
import { style } from '../styles/exmg-grid-setting-selection-list-styles-css.js';
import { Menu } from '@material/mwc-menu';

@customElement('exmg-grid-setting-selection-list')
export class ExmgGridSettingSelectionList extends ExmgElement {
  @property({ type: String })
  tooltip = '';

  @property({ type: String })
  icon = 'filter_list';

  @property({ type: Array })
  settingData: SettingSelectionListItem[] = [];

  @query('#menu')
  private menu?: Menu;

  private toggleMenuOpenState(e: Event) {
    e.stopPropagation();
    if (!this.menu) {
      return;
    }
    this.menu.anchor = e.target as HTMLElement;
    this.menu.open = true;
  }

  private dispatchSettingsChanged() {
    this.dispatchEvent(
      new CustomEvent<{ value: SettingSelectionListItem[] }>('exmg-grid-setting-changed', {
        bubbles: true,
        composed: true,
        detail: {
          value: [...this.settingData],
        },
      }),
    );
  }

  private handleListAction(e: CustomEvent) {
    e.stopPropagation();
    const index = e.detail.index;
    this.settingData[index].selected = !this.settingData[index].selected;
    this.settingData = [...this.settingData];
    this.saveSettingsListToLocalStorage();

    this.dispatchSettingsChanged();
  }

  static styles = [style];

  protected async firstUpdated(): Promise<void> {
    await this.updateComplete;
    this.getSettingsListFromLocalStorage();
  }

  private saveSettingsListToLocalStorage() {
    const key = `columnSettingsV2:${window.location.pathname}`;
    const value = this.settingData;
    // .filter((d) => d.selected)
    // .map((d) => d.id)
    // .join(',');
    localStorage.setItem(key, JSON.stringify(value));
    return JSON.stringify(value);
  }

  private getSettingsListFromLocalStorage() {
    const key = `columnSettingsV2:${window.location.pathname}`;
    let value = localStorage.getItem(key);
    if (!value) {
      value = this.saveSettingsListToLocalStorage();
    }

    const storageSettings: SettingSelectionListItem[] | null = JSON.parse(value);

    for (const setting of this.settingData) {
      const ss = storageSettings?.find((s: SettingSelectionListItem) => s.id === setting.id);
      // setting not found in storage add
      if (!ss) {
        storageSettings?.push(setting);
      }
      // do not update checked state from settingsData if exists in storage
    }

    const toBeDeleted: string[] = [];
    for (const storageSetting of storageSettings || []) {
      const ss = this.settingData.find((s: SettingSelectionListItem) => s.id === storageSetting.id);
      // setting not found in settingdate -> remove entry from storage
      if (!ss) {
        toBeDeleted.push(storageSetting.id);
      }
    }

    for (const id of toBeDeleted) {
      const index = storageSettings?.findIndex((s) => s.id === id);
      if (index && index > -1) {
        storageSettings?.splice(index, 1);
      }
    }

    this.settingData = [...(storageSettings || [])];
    this.saveSettingsListToLocalStorage();
    this.dispatchSettingsChanged();
  }

  render() {
    return html`
      <md-icon-button
        @click="${this.toggleMenuOpenState}"
        class="mdc-icon-button material-icons action"
        title="${this.tooltip}"
        data-mdc-ripple-is-unbounded="true"
        ><md-icon>${this.icon}</md-icon></md-icon-button
      >

      <mwc-menu id="menu" absolute activatable multi @action="${this.handleListAction}">
        ${this.settingData.map(
          (item) =>
            html` <mwc-list-item ?selected=${item.selected} ?activated=${item.selected}>
              ${item.title}
            </mwc-list-item>`,
        )}
      </mwc-menu>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-grid-setting-selection-list': ExmgGridSettingSelectionList;
  }
}
