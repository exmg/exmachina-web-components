# `<exmg-sortable>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-sortable.svg)](https://www.npmjs.com/package/@exmg/exmg-sortable)

# @exmg/exmg-sortable

Enables drag and drop sorting of items in a list or table

!!! You should always handle @dom-order-change to update your local .items property to update sorted list properly

## Installation

```sh
npm install @exmg/exmg-sortable
```

## Example Usage

### Standard

```html
<exmg-sortable item-selector="div.box" @dom-order-change="${this.orderChange}">
  <div class="boxes">
    ${this.users.map((user) => { return html`
    <div class="box">${user.firstName}</div>
    `; })}
  </div>
</exmg-sortable>
```

## API

### Slots

| Name      | Description      |
| --------- | ---------------- |
| _default_ | Elements to sort |

### Properties/Attributes

| Name               | Type      | Default                                 | Description                                                               |
| ------------------ | --------- | --------------------------------------- | ------------------------------------------------------------------------- |
| `handleSelector`   | `string`  | _None_                                  | Selector of the 'handle' to sort                                          |
| `itemSelector`     | `string`  | _`li`_                                  | Selector of the items                                                     |
| `animationEnabled` | `boolean` | _false_                                 | The value that gets copied and displayed                                  |
| `clonedClass`      | `string`  | _None_                                  | Class of the cloned element                                               |
| `draggedClass`     | `string`  | _None_                                  | Class of the dragged element                                              |
| `animationTiming`  | `object`  | _`{duration: 200, easing: 'ease-out'}`_ | The timing of the animation                                               |
| `orientation`      | `string`  | _None_                                  | Whether or not to display the sortable element horizontally or vertically |

### Methods

_None_

### Styling

_None_

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgSortable.html)
