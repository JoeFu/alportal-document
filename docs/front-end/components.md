# Components

This is a brief summary of some of the key components being used in the system today.


## Globally Registered Components

::: danger 
These may be transitioned to locally registered components down the line.
:::

### AlpIcon

This leverages the [Iconify](https://iconify.design/) framework to allow for the selection of any of the available icons in the framework.

This can be used as follows:

```html
<alp-icon icon="icon-name" :size="24" />
```

Where:

- `icon-name` is the icon name as defined by Iconify. This is required.
- `size` is the height/width of the icon. This is optional and defaults to 18.

### AlpButton

This is a generic button component that supports several variants. This allows for consistent of styling throughout the system.

This can be used as follows:

```html
<alp-button variant="default" :active="false" :small="false" />
```

Where:

- `variant` determines the theme of the button. This is optional and will default to `default`. Valid options include:
  - `default`
  - `plain`
  - `inverse`
  - `success`
  - `danger`
- `active` indicates that the button is active and will visually highlight the button. The highlighting style is the same or similar to the hovering an inactive button. This is `false` by default.
- `small` indicates that the button should have slightly reduced padding. This is `false` by default.

### AlpCan / AlpCanAll / AlpCanAny

These are a helper component for checking against the permissions that have been loaded for the current user. In effect, it acts as a `v-if`, hiding or showing based on whether or not the current user has the defined permission.

These can be used as follows:

```html
<alp-can permission="Access.This">
  <some-other-component />
</alp-can>
```

```html
<alp-can-all :permission="['Access.This', 'Access.That']">
  <some-other-component />
</alp-can-all>
```

```html
<alp-can-any :permission="['Access.This', 'Access.That']">
  <some-other-component />
</alp-can-any>
```

Where:

- `permission` is a string or array of strings representing the requested permission. This corresponds directly to the permissions defined on the back end.

`AlpCan` will check a single permission.

`AlpCanAll` will check that the user has all of the requested permissions.

`AlpCanAny` will check that the user has at least one of the requested permissions.

All other attributes placed on the component will be forwarded to the child component. That is:

```html
<alp-can permission="Access.This" class="some-class">
  <some-other-component />
</alp-can>
```

is equivalent to:

```html
<alp-can permission="Access.This">
  <some-other-component class="some-class" />
</alp-can>
```

### AlpFocusInput

This is an input that will automatically focus / blur an input when specific keys are pressed.

This can be used as follows:

```html
<alp-focus-input focus-on="/" blur-on="Escape" />
```

Where:

- `focus-on` is the key that should trigger the focusing of the input. This defaults to `/`
- `blur-on` is the key that should trigger the un-focusing of the input. This defaults to `Escape`

Keys should correspond the key values as defined [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values).

This input supports being of values, and can be used as follows:

```html
<alp-focus-input v-model="state.value" />
```

### AlpTable

This is a component for displaying a table. It automatically displays data from a provided array of objects.

This can be used as follows:

```html
<alp-table
  :headers="['A', 'B', 'D']"
  :fields="['a', 'b', 'c.d']"
  identifier="id"
  :loading="loading"
  :values="items"
  @selected="onSelected"
/>
```

#### Props

- `headers` indicates the header cells that should be used for the table
- `fields` indicates the fields that should be used for the table. These line up with the header cells.
- `items` is an array of objects that should be rendered for the tbale
- `loading` indicates the loading status of the data. A loading wheel is displayed when this is true.
- `identifier` is the unique key that will be used as the `key` for the elements in the table. This defaults to `id`

#### Events

- `selected` this is emitted when a row in the table is clicked. The event is emitted with the value of the object in the corresponding row

::: tip Fields
By default fields will correspond to properties on the objects passed in via `values`. These also accept dot notation for traversing the nested properties of the objects. That is, for an object:

```
{
  a: "value",
  b: {
    c: "nested"
  }
}
```

the value of `c` can be displayed using the field definition `b.c`.

Alternatively, named slots may be used to provide a custom implementation of the table cell. An example of this will be shown below.
::: 

```html
<alp-table
  :headers="['A', 'B', 'D']"
  :fields="['a', 'b', 'c.d']"
  identifier="id"
  :loading="loading"
  :values="items"
  @selected="onSelected"
>
  <template v-slot:a="{ value }">
    <div>
      Custom rendering of {{value}}
    </div>
  </template>
</alp-table>
```

This will provide a custom renderer for the field `a` which will override the default property rendering.

### AlpInfiniteTable

This is similar to `AlpTable` but provides events for automatically loading the next set of data, allowing for a simplistic "infinite scroll" approach to the table.

```html
<alp-infinite-table
  :headers="['A', 'B', 'D']"
  :fields="['a', 'b', 'c.d']"
  identifier="id"
  :loading="loading"
  :values="items"
  @selected="onSelected"
  @load-more="fetch"
>
  <template v-slot:a="{ value }">
    <div>
      Custom rendering of {{value}}
    </div>
  </template>
</alp-infinite-table>
```

`AlpInfiniteTable` introduces the `load-more` event which will automatically be triggered when scrolling to the end of the table. This should be used to load the next set of data.

### AlpChart

This is a simple wrapper for rendering Chart.js based charts / graphs. It renders a simple label and a canvas containing the chart.

This component does not include any logic for managing the chart definitions. It simply relays the provided chart definitions, and handles the creation of the chart instance and the updating of the canvas if the definition changes.

For more details regarding the definition of charts, please refer to the [official documentation](https://www.chartjs.org/). 

### AlpLoader

This is a wrapper for an SVG representing a loading wheel. It features a few basic props for managing the appearance of the loading wheel. It is expected to be animated separately, for example using the tailwind animation class `animate-spin`.

- `size`: The size of the loading wheel. This controls both the height and width of the SVG image.

The colour of the loader has been configured to be `currentColor`; that is, the colour may be changed by changing the `color`.