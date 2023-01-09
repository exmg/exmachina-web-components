# `<exmg-collapsed>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-collapsed.svg)](https://www.npmjs.com/package/@exmg/exmg-collapsed)

Collapsed element contains a slot that can be expanded or collapsed to reveal additional content or information.

[Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-collapsed)

## Installation

```sh
npm install @exmg/exmg-collapsed
```

## Example Usage

### Standard

```js
@property({type:  Boolean})
opened = false;
```

```html
<exmg-button @click=${() => (this.opened = !this.opened)}>Open</exmg-button>

<exmg-collapsed  ?opened=${this.opened}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.
</exmg-collapsed>
```

## API

### Slots

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| _default_ | Default content to display within the collapsible element |

### Properties/Attributes

| Name     | Type      | Default | Description                       |
| -------- | --------- | ------- | --------------------------------- |
| `opened` | `boolean` | `false` | The opened state of the component |

### Methods

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| `toggle` | Toggles the opened state of the component         |
| `show`   | Sets the opened state of the component to _true_  |
| `hide`   | Sets the opened state of the component to _false_ |

### Events

_None_

### CSS Custom Properties

_None_

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgCollapsed.html)
