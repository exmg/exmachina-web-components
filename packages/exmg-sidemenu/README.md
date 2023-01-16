# `<exmg-sidemenu>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-sidemenu.svg)](https://www.npmjs.com/package/@exmg/exmg-sidemenu)

# @exmg/exmg-sidemenu

WARNING: This element is not compatible with Polymer 1.0

`<exmg-sidemenu>` Is a collapsible sidemenu.

## Installation

```sh
npm install @exmg/exmg-sidemenu
```

## Example Usage

```html
<exmg-sidemenu
  selected="rooms/"
  ?collapsed="${this.collapsed}"
  @collapsed="${this._handleCollapsed}"
  @selected-changed="${this._handleSelectedChanged}"
  ?narrow="${this.narrow}"
>
  <exmg-sidemenu-header slot="header" ?collapsed="${this.collapsed}"></exmg-sidemenu-header>
  ${this.renderMenu()} ${this.renderFooterButton()}
</exmg-sidemenu>
```

## API

### Slots

| Name      | Description                  |
| --------- | ---------------------------- |
| _default_ | Menu items of the side-menu  |
| `footer`  | Footer item of the side-menu |

### Properties/Attributes

| Name              | Type      | Default | Description                                 |
| ----------------- | --------- | ------- | ------------------------------------------- |
| `collapsed`       | `boolean` | _false_ | Whether the side-menu is collapsed or not   |
| `selected`        | `string`  | _None_  | Contains the path of the selected menu item |
| `disableCollapse` | `boolean` | _false_ | Disable collapse functionailty              |
| `footerItem`      | `boolean` | _false_ | Whether the side-menu has a footer-item     |

### Methods

_None_

### Events

| Name               | Description                               |
| ------------------ | ----------------------------------------- |
| `collapsed`        | Fired when the side-menu collapse toggles |
| `selected-changed` | Fired when the selected menu item changes |

### CSS Custom Properties

| Name                                           | Default            | Description                 |
| ---------------------------------------------- | ------------------ | --------------------------- |
| `--exmg-sidemenu-background`                   | `white`            | Sidemenu background color   |
| `--exmg-sidemenu-width`                        | `256px`            | Sidemenu width              |
| `--exmg-sidemenu-collapsed-width`              | `white`            | Sidemenu collapsed width    |
| `--exmg-sidemenu-group-text-color`             | `54% black`        | Group titletext color       |
| `--exmg-sidemenu-item-text-color`              | `54% black`        | Item text color             |
| `--exmg-sidemenu-menu-footer-background-color` | `#F9FAF9`          | Footer background color     |
| `--exmg-sidemenu-menu-border-color`            | `#DDD`             | Border color of menu        |
| `--exmg-sidemenu-icon-color`                   | `54% black`        | Sidemenu icon color         |
| `--exmg-sidemenu-hover-background-color`       | `--paper-grey-200` | Item hover background color |
| `--exmg-sidemenu-selected-text-color`          | `--primary-color`  | Item selected text color    |
| `--exmg-sidemenu-badge-background-color`       | `#ff6978`          | Badge background color      |
| `--exmg-sidemenu-badge-color`                  | `#fff`             | Badge font color            |

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgSidemenu.html)
