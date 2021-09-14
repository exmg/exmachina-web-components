# exmg-button

Material button including loading (spinner) animation when loading attribute is set to element. This button extends the material @material/mwc-button.

## Loading

To show loading; add loading property to exmg-button element.

```
  <exmg-button loading>This button is in loading state</exmg-button>
```

## Progress

To show progress; add progress property with a number value from '0' to '100' to exmg-button element.

```
  <exmg-button progress="45">This button is showing progress</exmg-button>
```

## Styling

|        Target        |           Variable               |  Value  |
|:--------------------:|:--------------------------------:|:-------:|
| Spinner Size         | --exmg-spinner-size              | 28px    |
| Spinner Color        | --exmg-spinner-color             | grey    |
| Spinner Stroke Width | --exmg-spinner-stroke-width      | 3px     |
| Progress Color       | --exmg-button-progress-color     | #89c8ff |
| Progress Direction   | --exmg-button-progress-direciton | rtl     |
