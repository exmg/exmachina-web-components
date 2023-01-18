# `<exmg-tooltip>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-tooltip.svg)](https://www.npmjs.com/package/@exmg/exmg-tooltip)

# @exmg/exmg-tooltip

Tooltip element to display small amounts of information bound to an element.

[Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-tooltip)

## Installation

```sh
npm install @exmg/exmg-tooltip
```

## Example Usage

### Standard

```html
<div style="position:relative;">
  <button id="styledBtn">Test</button>
  <exmg-tooltip for="styledBtn">the name means "different lizard"</exmg-tooltip>
</div>
```

## API

### Slots

| Name      | Description                        |
| --------- | ---------------------------------- |
| _default_ | Button to handle copy to clipboard |

### Properties/Attributes

| Name                 | Type      | Default    | Description                                                                                           |
| -------------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------- |
| `for`                | `string`  | _None_     | The id of the element that the tooltip is anchored to. This element must be a sibling of the tooltip. |
| `position`           | `string`  | _`bottom`_ | Positions the tooltip to the top, right, bottom, left of its content.                                 |
| `fitToVisibleBounds` | `boolean` | _None_     | The id of the element that the tooltip is anchored to. This element must be a sibling of the tooltip. |
| `xOffset`            | `number`  | _None_     | X axis offset from the parent's center.                                                               |
| `yOffset`            | `number`  | _None_     | Y axis offset from the parent's center.                                                               |

### Methods

_None_

### Events

_None_

### CSS Custom Properties

| Name                           | Default   | Description               |
| ------------------------------ | --------- | ------------------------- |
| `--exmg-tooltip-font-size`     | `10px`    | Font size of tooltip text |
| `--exmg-tooltip-line-height`   | `1`       | Text line height          |
| `--exmg-tooltip-background`    | `#616161` | Background color          |
| `--exmg-tooltip-opacity`       | `0.9`     | Tooltip opacity           |
| `--exmg-tooltip-text-color`    | `white`   | Font color                |
| `--exmg-tooltip-padding`       | `8px`     | Container padding         |
| `--exmg-tooltip-border-radius` | `2px`     | Container border radius   |
| `--exmg-tooltip-min-width`     | `initial` | Min width of the tooltip  |

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgTooltip.html)

- [Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-tooltip)
