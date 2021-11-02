# <exmg-grid /\>

## Install

```bash
npm install @exmg/exmg-grid
```

Before start ensure that you have installed `web-animation-js`. It is required by `@exmg/exmg-paper-combobox`.

```bash
npm install web-animation-js
```

Load this script in index.html

```html
<!-- Ensure Web Animations polyfill is loaded -->
<script src="../node_modules/web-animations-js/web-animations-next-lite.min.js"></script>
```

Some dependencies `@plymer/paper-item` use `@apply` to apply css mixins.
This require to load script in index.html

```html
<script src="../node_modules/@webcomponents/shadycss/apply-shim.min.js"></script>
```

## Anatomy

This library contains following components:

1. Grid (main component)
2. Toolbar (optional)
3. Pagination (optional)

Conceptual usage:

```html
<exmg-grid ...params>
  <table>
    <thead>
      <tr class="grid-columns">
        ...column definitions
      </tr>
    </thead>
    <tbody class="grid-data">
      ...table rows
    </tbody>
  </table>
  <exmg-grid-smart-toolbar slot="toolbar" ...params></exmg-grid-smart-toolbar>
  <exmg-grid-pagination slot="pagination" ...params></exmg-grid-pagination>
</exmg-grid>
```

### Grid Card

`<exmg-grid>` is main grid component. All other params/data/components should be put inside it as properties or children elements
GridElement accept slots:

- default - this jus table (required)
- toolbar - slot for toolbar placed above table
- pagination - slot for pagination placed below table

```html
<div class="table-card">
  <slot name="toolbar"></slot>
  <div class="table-container"><slot></slot></div>
  <slot name="pagination"></slot>
</div>
```

```html
<exmg-grid>
  <table></table>
  <exmg-grid-smart-toolbar slot="toolbar" ...params></exmg-grid-smart-toolbar>
  <exmg-grid-pagination slot="pagination" ...params></exmg-grid-pagination>
</exmg-grid>
```

`exmg-grid-pagination` can be also embedded inside table

### Toolbars

There are 3 toolbars available out of the box:

1. exmg-grid-base-toolbar
2. exmg-grid-toolbar
3. exmg-grid-smart-toolbar

#### Grid base toolbar

The most base toolbar.

Do you want to use it? **Least likely**.

Base toolbar is most context agnostic from toolbars available. It serves only as container for
various visual section (actions, description, filters) and only behavior it has - it can change its
background color depending on if there are any child elements in "filters" section.

```
<exmg-grid-base-toolbar>
  <div slot="actions">
    ...render anything here
  </div>
  <div slot="description">...render anything here (prefer plain text)</div>
  <div slot="filters">
    ...render anything here
  </div>
</exmg-grid-base-toolbar>
```

#### Grid toolbar

Wraps around **grid base toolbar**.

Do you want to use it? **Probably in some cases where you want more control than smart toolbar gives you**.

This toolbar accepts actions, description and filters via props and fires events `exmg-grid-toolbar-action-executed`
and `exmg-grid-toolbar-filter-changed`.

Please read the docs to see how actions and filters should look like to pass them into toolbar.

```
<exmg-grid-toolbar
    .actions="${this.actions}"
    description="${this.description}"
    .filters="${this.filters}"
    @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
    @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
></exmg-grid-toolbar>
```

#### Grid smart toolbar

Wraps around **grid toolbar**.

Do you want to use it? **Most likely**.

**In most cases you will want to use exactly grid smart toolbar.**

This toolbar accepts actions, description, filters and amount-of-selected-items via props and fires events `exmg-grid-toolbar-action-executed`
and `exmg-grid-toolbar-filter-changed`.

This toolbar is most context dependent from toolbars available. It automates some logic, but needs additional
information to be passed: amount-of-selected-items. Actions passed into this toolbar should contain
additional information when action should be displayed.

Please read the docs to see how actions and filters should look like to pass them into toolbar.

```
<exmg-grid-smart-toolbar
    amount-of-selected-items="${this.amountOfSelectedItems}"
    .actions="${this.actions}"
    description="${this.description}"
    .filters="${this.filters}"
    @exmg-grid-toolbar-action-executed="${this.onActionExecuted}"
    @exmg-grid-toolbar-filter-changed="${this.onFilterChanged}"
></exmg-grid-smart-toolbar>
```

### Pagination

Simple pagination component that gives you all features described in material design specification.

```
<exmg-grid-pagination
  page-index=${this.pageIndex}
  page-size=${this.pageSize}
  item-count=${this.itemCount}
  @exmg-grid-pagination-page-size-changed="${this.onGridPageSizeChanged}"
  @exmg-grid-pagination-page-changed="${this.onGridPageChanged}"
>
</exmg-grid-pagination>
```

## Grid requirements

- Columns has be added to `table > thead > tr.grid.columns`

- Body has to be added to `table > tbody.grid-data`

- You should use `import {repeat} from 'lit/directives/repeat';` function to map you items to rows.

- Each row inside `tbody.grid-data` should have attribute `data-row-key` with unique value

- If table is expandable then for each row you have to add related row `table > tbody.grid-data tr.grid-row-detail`
  This row must have attribute `data-row-detail-key` with same value as its relative row

- Element `exmg-grid` require property `.items` - needed to detect any changes on data

## Optional

- toolbar should be placed in `table > thead > tr.grid-toolbar`

- when amount of columns may change you may use attribute `data-auto-colspan` on both `th and td` elements

- if column has number values then you can use class `grid-col-number`

- if cell should be visible only on hover then you can use class `grid-cell-visible-on-hover`

- if icon which trigger expanding / collapsing row-detail has to rotate then add class `grid-icon-rotate`

- if table has fixed layout then add class `grid-checkbox-cell` to `td and th` containing checkboxes

Example how should looks most minimal markup to meet with requirements:

```html
<exmg-grid .itmes="${items}">
  <table>
    <thead>
      <tr class="grid-columns">
        <th><span>Col1</span></th>
        <th><span>Col2</span></th>
      </tr>
    </thead>
    <tbody class="grid-data">
      ${repeat( this.items, ({id}) => id, (i) => { return html`
      <tr data-row-key="${i.id}">
        <td>#${i.id}</td>
        <td>${i.value}</td>
      </tr>
      `; } ); }
    </tbody>
  </table>
</exmg-grid>
```

## Features

### Column sortable

- You should add attribute `sortable` attribute on `exmg-grid`

- You must have defined columns and on `th` element you should add `data-sort` attribute with unique name of column.
  You can also omit name in `data-sort` attribute but then you should setup `data-column-key`
  both configuration are fine

```html
<th data-column-key="month" data-sort><span>Month</span></th>
<th data-column-key="year" data-sort="year-column"><span>Year</span></th>
```

- To handle sort changing you should add listener `@exmg-grid-sort-change` on `exmg-grid`. You will receive `CustomEvent<EventDetailSortChange>`

```typescript
export type EventDetailSortChange = {
  column: string;
  sortDirection?: 'ASC' | 'DESC';
};
```

- To setup default sorting you should setup attributes `default-sort-column` and `default-sort-direction` on `exmg-grid`

Example:

---

```html
<exmg-grid
  .items="${this.items}"
  default-sort-column="year-column"
  default-sort-direction="DESC"
  ?sortable="${true}"
  @exmg-grid-sort-change="${this.onSortChange}"
>
  <table>
    <thead>
      <tr class="grid-columns">
        <th data-column-key="month" data-sort><span>Month</span></th>
        <th data-column-key="year" data-sort="year-column"><span>Year</span></th>
      </tr>
    </thead>
  </table>
</exmg-grid>
```

### Expandable rows

- You should pass attribute `expandable-toggle-selector` to `exmg-grid`

```html
<exmg-grid .items="${this.items}" expandable-toggle-selector=".expandable-trigger">
  <tbody class="grid-data">
    ${ repeat( items, item => items.id, item => html`
    <tr data-row-key="${i.id}">
      <td>First</td>
      <td>Second</td>
      <td class="grid-cell-visible-on-hover">
        <span class="expandable-trigger grid-icon-rotate">${arrowIcon}</span>
      </td>
    </tr>
    <tr class="grid-row-detail" data-row-detail-key="${i.id}">
      <td data-auto-colspan>Here goes row detail...</td>
    </tr>
    ` ) }
  </tbody>
</exmg-grid>
```

- If you want to programmatically expand / collapse row with detail you can pass property `.expandedRowIds` to `exmg-grid` element
  Where type of `expandedRowIds` looks

```typescript
const expandedRowIds: Record<string, boolean> = {
  '1': true,
  '2': false,
};
```

Key is just id which you pass by attributes `data-row-key` and `data-row-detail-key` and value is just flag what will expand when true otherwise collapse

- When row detail is being expanded then to element which trigger action will be added attribute `data-is-expanded`.
  Row with trigger will have attribute `data-has-expanded-detail`,
  To row detail is added attribute `data-is-row-expanded`. When collapsed both attributes are removed.

### Selectable rows

To turn on this feature attribute `rows-selectable` has to be set on `exmg-grid` element

- If you want to programmatically select / unselect row you may pass property `.selectedRowIds` to `exmg-grid` element
  Where type of `selectedRowIds` looks

```typescript
const selectedRowIds: Record<string, boolean> = {
  '1': true,
  '2': false,
};
```

Key is just id which you pass by attributes `data-row-key` and `data-row-detail-key` and value is just flag perhaps makr row as selected when true otherwise unselect

#### Checkboxes

It is optional. You can add checkbox to header and/or rows. There is needed 2 things to do to be checkbox works with
row selection:

- on `exmg-grid` element set attribute`selectable-checkbox-selector=".selectable-checkbox"`

- checkbox component needs to implement event `change` and property `checked`.

- If your checkbox component implements `indeterminate` property it will be take into account for the main checkbox selector

- Optionally cells `th td` can have class `grid-checkbox-cell`

```html
<exmg-grid .items="${this.items}" selectable-checkbox-selector=".selectable-checkbox" ?rows-selectable="${true}">
  <table>
    <thead>
      <tr class="grid-columns">
        <th class="grid-checkbox-cell"><mwc-checkbox class="selectable-checkbox"></mwc-checkbox></th>
      </tr>
    </thead>
    <tbody class="grid-data">
      <tr>
        <td class="grid-checkbox-cell"><input type="checkbox" class="selection-checkbox"</td>
      </tr>
    </tbody>
  </table>
</exmg-grid>
```

### Rows sortable

To turn on this feature attribute `rows-sortable` has to be set on `exmg-grid`. Element `tr` or any descend `tr` element
must have class `grid-row-drag-handler`.

Each time order will be changed event `exmg-grid-rows-order-changed` and `exmg-grid-rows-order-updated` is triggered and has o be handled.
Handling this event `must to trigger` update property `items` otherwise it won't take effect.

Event details of `CustomEvent<EventDetailRowsOrderChanged>` has such structure:

```typescript
export type EventDetailRowsOrderChanged<T extends object = any> = {
  items: T[];
};
```

Event details of `CustomEvent<EventDetailRowsOrderUpdated>` has such structure:

```typescript
export interface EventDetailRowsOrderUpdated {
  sourceIndex: number;
  targetIndex: number;
}
```

`Items are sorted as it is done in UI.`

```
  onRowsOrderChanged(event: CustomEvent<EventDetailRowsOrderChanged>): void {
    // store current order and update items
    this.items = [...event.detail.items];
  }
```

```html
<exmg-grid .items="${this.items}" ?rows-sortable="${true}" @exmg-grid-rows-order-changed="${this.onRowsOrderChanged}">
  <table>
    <thead>
      <tr class="grid-columns">
        <th></th>
        <th><span>ID</span></th>
      </tr>
    </thead>
    <tbody class="grid-data">
      <tr>
        <td><span class="grid-row-drag-handler">${dragIcon}</span></td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</exmg-grid>
```

### Columns visibility management

To hide / show columns you can use property `hiddenColumnNames` of `exmg-grid`

```typescript
const hiddenColumnNames: Record<string, string> = {};
```

whenever you want to change column visibility update property `hiddenColumnNames`

```html
<exmg-grid .items="${this.items}" .hiddenColumnNames="${{col1: 'col1', col2: 'col2'}}"></exmg-grid>
```

## Styles

You should import table styles

```
import {style as tableStyles} from '../src/table/exmg-grid-styles';

export class DemoSimpleGridTable extends LitELement {
  static styles = [
    tableStyles,
  ];
}
```

It is also possible to compose custom theme.

Example of dark theme:

```scss
exmg-grid.dark {
  --mdc-theme-primary: rgba(0, 112, 219, 1);
  --mdc-theme-secondary: rgba(0, 112, 219, 1);
  --mdc-theme-surface: black;
  --mdc-theme-on-surface: white;

  --exmg-theme-table-on-surface: var(--mdc-theme-on-surface);
  --exmg-theme-table-surface: var(--mdc-theme-surface);
  --exmg-theme-table-row-divider-color: #333;
  --exmg-theme-table-row-selected-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-row-selected-background-color: rgba(0, 112, 219, 0.4);
  --exmg-theme-table-row-hover-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-row-hover-background-color: rgba(0, 112, 219, 0.2);
  --exmg-theme-table-row-dragged-background-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-rows-expanded-divider-border: none;
  --exmg-theme-table-rows-expanded-border: none;
  --exmg-theme-table-rows-expanded-background-color: var(--mdc-theme-surface);
  --exmg-theme-table-rows-expanded-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-th-on-surface: var(--mdc-theme-on-surface);
  --exmg-theme-table-th-surface: var(--mdc-theme-surface);
  --exmg-theme-table-th-sortable-hover-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-columns-background-color: var(--mdc-theme-surface);

  // Toolbar
  --exmg-theme-table-toolbar-color: var(--mdc-theme-on-surface);
  --exmg-theme-table-toolbar-background-color: var(--mdc-theme-surface);
  --exmg-theme-table-toolbar-border-top-radius: 1rem;
  --exmg-theme-table-toolbar-border-bottom-radius: 0rem;
  --exmg-theme-table-toolbar-active-bg-color: rgba(0, 112, 219, 0.2);
  --exmg-theme-table-toolbar-active-color: white;
}

exmg-grid.dark .selectable-checkbox {
  --mdc-checkbox-unchecked-color: white;
  --mdc-checkbox-disabled-color: #adadad;
  --mdc-checkbox-ink-color: #363636;
}
```

Additionally you cna also override css variables:

| Custom property                                                | Description                                             | Default                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| `--exmg-arrow-upward-url`                                      | Url to icon that is used for soring direction indicator | `url('/node_modules/@exmg/exmg-grid/assets/arrow-upward.svg');` |
| `--exmg-theme-table-card-width`                                | table card width                                        | `100%;`                                                         |
| `--exmg-theme-table-card-margin-bottom`                        | table bottom margin                                     | `5px;`                                                          |
| `--exmg-theme-table-on-surface`                                | table text color                                        | `#02182b;`                                                      |
| `--exmg-theme-table-surface`                                   | table background color                                  | `#ffffff;`                                                      |
| `--exmg-theme-table-box-shadow`                                | table box shadow                                        | `none`                                                          |
| `--exmg-theme-table-row-divider-color`                         | table rows separator color                              | `#02182b; 0.14`                                                 |
| `--exmg-theme-table-row-selected-color`                        | selected row text color                                 | `#02182b;`                                                      |
| `--exmg-theme-table-row-selected-background-color`             | selected row background color                           | `#e2f1fe;`                                                      |
| `--exmg-theme-table-row-hover-color`                           | row hover text color                                    | `#02182b;`                                                      |
| `--exmg-theme-table-row-hover-background-color`                | row hover background color                              | `#f1f1f1;`                                                      |
| `--exmg-theme-table-row-dragged-background-color`              | sortable row background color when dragged              | `#f1f1f1;`                                                      |
| `--exmg-theme-table-rows-expanded-divider-border`              | border between row and expanded row detail              | `none;`                                                         |
| `--exmg-theme-table-rows-expanded-border`                      | border around row and expanded row detail               | `1px solid #dbdbdb;`                                            |
| `--exmg-theme-table-rows-expanded-background-color`            | background color of row and expanded row detail         | `#e2f1fe;`                                                      |
| `--exmg-theme-table-rows-expanded-color`                       | text color of row and expanded row detail               | `#02182b;`                                                      |
| `--exmg-theme-table-th-color`                                  | header text color                                       | `#0071dc;`                                                      |
| `--exmg-theme-table-columns-background-color`                  | header background color                                 | `#ffffff;`                                                      |
| `--exmg-theme-table-th-sortable-hover-color`                   | sortable header hover text color                        | `#02182b;`                                                      |
| `--exmg-theme-table-th-height`                                 | header height                                           | `48px;`                                                         |
| `--exmg-theme-table-th-sort-margin-left`                       | header margin after text but before icon                | `0px;`                                                          |
| `--exmg-theme-table-td-height`                                 | row cell height                                         | `48px;`                                                         |
| `--exmg-theme-table-th-sort-icon-height`                       | sort icon height                                        | `1em;`                                                          |
| `--exmg-theme-table-th-sort-icon-width`                        | sort icon width                                         | `1em;`                                                          |
| `--exmg-theme-table-toolbar-background-color`                  | Toolbar background color                                | `$background;`                                                  |
| `--exmg-theme-table-toolbar-color`                             | Toolbar text color                                      | `$onBackground`                                                 |
| `--exmg-theme-table-toolbar-active-bg-color`                   | Toolbar background color when any action available      | `$background;`                                                  |
| `--exmg-theme-table-toolbar-active-color`                      | Toolbar text color when any action available            | `$onBackground`                                                 |
| `--exmg-theme-table-pagination-bg-color`                       | Pagination background color                             | `--mdc-theme-surface`                                           |
| `--exmg-theme-table-pagination-color`                          | Pagination text color                                   | `--mdc-theme-on-surface`                                        |
| `--exmg-theme-table-on-surface-disabled`                       | Disabled color                                          | `--mdc-theme-on-surface with filter .38`                        |
| `--exmg-theme-table-toolbar-filter-item-active-bg-color`       | Background color for combobox                           | `--mdc-theme-surface`                                           |
| `--exmg-theme-grid-setting-checkbox-bg-color`                  | Background color of setting checkbox                    | `$mdcThemeSecondary`                                            |
| `--exmg-theme-table-toolbar-setting-list-item-active-bg-color` | Background color of active list item color              | `$mdcThemeSecondary`                                            |

## Responsiveness

By default grid has `table-layout` set to `auto` It can be changed to `fixed`

```html
<exmg-grid .items="${this.items}" table-layout="fixed"></exmg-grid>
```

- auto - table will shrink as much as possible. If content will overflow then scroll will be added.

- fixed - table has layout set to fixed. If content will overflow then ellipsis will be added to text
