# `<exmg-button>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-button.svg)](https://www.npmjs.com/package/@exmg/exmg-button)

# exmg-button

Material button including loading (spinner) animation when loading attribute is set to element. This button extends the material @material/mwc-button.

## Installation

```sh
npm install @exmg/exmg-button
```

## Example Usage

### Disabled

```html
<exmg-button disabled>This button is disabled</exmg-button>
```

### Outlined

```html
<exmg-button outlined>This button is outlined</exmg-button>
```

### Dense

```html
<exmg-button dense>This button is dense</exmg-button>
```

### Unelevated

```html
<exmg-button unelevated>This button is unelevated</exmg-button>
```

### Loading

```html
<exmg-button loading>This button is in loading state</exmg-button>
```

### Progress

```html
<exmg-button progress="45">This button is showing progress</exmg-button>
```

## API

### Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| _default_ | Element to show within the button |

### Properties/Attributes

| Name         | Type      | Default     | Description                                                                       |
| ------------ | --------- | ----------- | --------------------------------------------------------------------------------- |
| `loading`    | `boolean` | _false_     | Whether or not the button is in loading state                                     |
| `progress`   | `number`  | _undefined_ | Whether or not the button displays progress                                       |
| `unelevated` | `boolean` | _false_     | Creates a contained button that is flush with the surface.                        |
| `outlined`   | `boolean` | _false_     | Creates an outlined button that is flush with the surface.                        |
| `dense`      | `boolean` | _false_     | Makes the button text and container slightly smaller.                             |
| `disabled`   | `boolean` | _false_     | Disabled buttons cannot be interacted with and have no visual interaction effect. |
| `fullwidth`  | `boolean` | _false_     | When true, the button is expanded to fit the entire available space.              |
| `icon`       | `string`  | _''_        | Icon to display, and aria-label value when label is not defined.                  |
| `label`      | `string`  | _''_        | Label to display for the button, and aria-label.                                  |

### Methods

_None_

### Events

_None_

### CSS Custom Properties

|        Target        |             Variable             |  Value  |
| :------------------: | :------------------------------: | :-----: |
|     Spinner Size     |       --exmg-spinner-size        |  28px   |
|    Spinner Color     |       --exmg-spinner-color       |  grey   |
| Spinner Stroke Width |   --exmg-spinner-stroke-width    |   3px   |
|    Progress Color    |   --exmg-button-progress-color   | #89c8ff |
|  Progress Direction  | --exmg-button-progress-direction |   rtl   |

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgButton.html)

- [Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-button)
