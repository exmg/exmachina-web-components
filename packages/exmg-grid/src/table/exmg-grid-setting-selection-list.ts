import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ExmgElement } from '@exmg/lit-base/index.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import { SettingSelectionListItem } from './types/exmg-grid-toolbar-types.js';
import { style } from '../styles/exmg-grid-setting-selection-list-styles-css.js';
import { Menu } from '@material/web/menu/menu.js';

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

  private handleListAction(id: string) {
    const index = this.settingData.findIndex((d) => d.id === id);
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
        id="filterBtn"
        @click=${() => this.menu!.show()}
        aria-controls="menu"
        class="mdc-icon-button material-icons action"
        title="${this.tooltip}"
        data-mdc-ripple-is-unbounded="true"
        ><md-icon>${this.icon}</md-icon></md-icon-button
      >

      <md-menu
        id="menu"
        menu-corner="start-end"
        anchor="filterBtn"
        role="listbox"
        aria-label="Column filter options"
        multi
        @action="${this.handleListAction}"
      >
        ${this.settingData.map(
          (item) =>
            html` <md-menu-item type="option" keep-open ?selected=${item.selected}>
              <div slot="headline" @click=${() => this.handleListAction(item.id)}>${item.title}</div>
            </md-menu-item>`,
        )}
      </md-menu>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'exmg-grid-setting-selection-list': ExmgGridSettingSelectionList;
  }
}
