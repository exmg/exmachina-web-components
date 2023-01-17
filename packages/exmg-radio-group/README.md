# `<exmg-radio-group>` [![Published on npm](https://img.shields.io/npm/v/@exmg/exmg-radio-group.svg)](https://www.npmjs.com/package/@exmg/exmg-radio-group)

# @exmg/exmg-radio-group

This package provides radio group functionality.

Components included:

1. **exmg-radio-group** - parent component
2. **exmg-radio-group-item** - each children

## Components

### \<exmg-radio-group>

Can contain many **exmg-radio-group-item** components as it's children. Children of other
types are not supported.

## API

### Slots

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| _default_ | Slot to display anything within the item                                 |
| `title`   | Title of the description of the _exmg-radio-group-item_                  |
| `body`    | Body to render additional information within the _exmg-radio-group-item_ |

### Events

| Name                       | Description                             |
| -------------------------- | --------------------------------------- |
| `exmg-radio-group-changed` | when selected radio group item changed. |

### Properties/Attributes

| Name       | Type      | Default | Description                                                                       |
| ---------- | --------- | ------- | --------------------------------------------------------------------------------- |
| `name`     | `string`  | _None_  | Name of the exmg-radio-group                                                      |
| `selected` | `string`  | _None_  | Selected value. Should be value of one of **value** attributes of children nodes. |
| `required` | `boolean` | _None_  | Used for form validation                                                          |
| `vertical` | `string`  | _None_  | If you want to have vertical layout                                               |

### \<exmg-radio-group-item>

Can be used only as children of **exmg-radio-group**.

Attributes:

1. **value** - value of particular item.
2. **disabled** - boolean, should value be selectable or not (still possible
   to select programmatically, even if disabled)
3. **hide-radio-button** - boolean, should circle radio buttons be hidden or not

Each **exmg-radio-group-item** can have defined content in one of following ways:

1. Define slots with names "title" and "body"
2. Just put any content without defining slot.

## Usage

### With slots

```
  <exmg-radio-group name="license" selected="${this.selected}" @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}">
    <exmg-radio-group-item value="option1">
        <div slot="title">Option 1</div>
        <div slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </exmg-radio-group-item>
    <exmg-radio-group-item value="option2">
        <div slot="title">Option 2</div>
        <div slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </exmg-radio-group-item>
    <exmg-radio-group-item value="option3" disabled>
        <div slot="title">Option 3</div>
        <div slot="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </exmg-radio-group-item>
  </exmg-radio-group>

```

### Without slots

```
  <exmg-radio-group name="license" selected="${this.selected}" @exmg-radio-group-changed="${this.onPaperRadioGroupChanged}">
    <exmg-radio-group-item value="option1">
        Option 1
    </exmg-radio-group-item>
    <exmg-radio-group-item value="option2">
        Option 2
    </exmg-radio-group-item>
  </exmg-radio-group>
```

## Additional references

- [Additional Documentation](https://exmg.github.io/exmachina-web-components/ExmgRadioGroup.html)

- [Demo](https://exmg.github.io/exmachina-web-components/demo/?el=exmg-radio-group)
