# Radio Group

This package provides radio group functionality.

Components included:
1. **exmg-radio-group** - parent component
2. **exmg-radio-group-item** - each children

## Components
### \<exmg-radio-group>

Can contain many **exmg-radio-group-item** components as it's children. Children of other 
types are not supported.

Events:
1. **exmg-radio-group-changed** - when selected radio group item changed. 

Attributes:
1. **name**
2. **selected** - selected value. Should be value of one of **value** attributes of children nodes.
3. **required** - boolean, used for form validation 
4. **vertical** - boolean, if you want to have vertical layout 


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
