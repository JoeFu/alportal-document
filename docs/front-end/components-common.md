# Common Components

The following will talk about some of the common components implemented for use in the system.

## AlpHeading

This is a component that creates a heading with a slot for adding additional elements next to it.

The component has a single prop, `heading`, which accepts a `string` to be used as the main heading text. The heading text is rendered using an `h1` tag with classes that apply styles for font type, font weight, and text size.

The component also contains a slot, which allows you to add additional elements next to the heading.

This can be used as follows:

```html
<alp-heading :heading="My Page Title">
  <button>Add</button>
</alp-heading>
```


## AlpContainer

This defines a container with a `flexible layout` and an **optional** `background color`. 

The background color can be either *gray* or *white*, based on the value of the `isUseWhitebg` prop.

This can be used as follows:

```html
<alp-container class="more tags" :isUseWhitebg="true/false">
  Contents
</alp-container>
```

Where:

- `isUseWhitebg` is to set the background. This is *optional* and defaults to false.

## AlpInfiniteContainer

This component is an implementation of an infinitely scrolling list. It displays a list of `items` passed as `values` props. 

When the user scrolls to the bottom of the list, the component triggers an event load-more to indicate that it needs to load more items.

This can be used as follows:

```html
<alp-infinite-container
  :loading="loading"
  :values="items"
  @load-more="fetch"
  @selected="selecteItem"
>
  <template v-slot="{ value }">
  </template>
</alp-infinite-container>
```
#### Props:

- `loading`: a boolean value that indicates whether more items are being loaded
- `values`: an array of items to display in the list

#### Events:

- `selected`: emitted when an item in the list is selected by the user. The selected item is passed as an argument.
- `load-more`: emitted when the user has scrolled to the bottom of the list, it would be triggered to load the next set of data.

The component uses the `useInfiniteTrigger` hook from `@/composable/infinite-list` to detect when the user has scrolled to the bottom of the list and trigger the `load-more` event. The hook returns a `container` and `sentinel` ref that are used to handle the scroll event and determine when the bottom of the list has been reached.

Similar functionality is applied to a table in the [`AlpInfiniteTable`](#alpinfinitetable).

## AlpMenuContainer

This component is a menu container to displays a menu div with a slot where other content can be inserted.

This can be used as follows:

```html
<alp-menu-container wide="false" isRemoveWide="false">
  ...
</alp-menu-container>
```

#### Props:

- `wide`: a boolean that determines if the component should have the class '`wide`'.
- `isRemoveWide`: a boolean that determines if the class '`wide`' should not be applied.

## AlpDivider

This defines a divider with default **BOLD** text and margins and paddings.

The component has a single prop, `name`, which accepts a string to be used as the content.

This can be used as follows:

```html
<alp-divider name='Contents'>More Content</alp-divider>

OR

<alp-divider>Contents</alp-divider>

OR

<alp-divider>{{state.contents}}</alp-divider>
```

## AlpSection

This is a basic component that creates a white background and rounded corners with a large shadow effect. It improves the *distinction between sections* for enhanced user experience.

This can be used as follows:

```html
<alp-section>
  Section 1
</alp-section>
<alp-section>
  Section 2
</alp-section>
```

## AlpInnerSection

:::danger Deprecate
:::

## NavLink

This is used for navigation links in a web application. It uses the `router-link` component provided by `Vue Router` to navigate to different routes in the application.

This can be used as follows:

```html
<nav-link
  :hidden="hideMenu"
  name="Back"
  to="/app/dashboard"
  icon="fa-solid fa-chevron-left"
  @navigated="$emit('handleDashboardClick')"
/>
```

#### Props:

- `to`: ***Required*** and specifies the target route of the navigation link. It can be a string or an object.
- `name`: It specifies the name of the link that is displayed to the user. If it is not specified, the component will try to display the name of the route that the link is pointing to.
- `exact`: Boolean that specifies whether the navigation link should match the exact path of the target route.
- `Url`: It specifies the URL of the link that is displayed to the user.
- `icon`: It specifies the icon that is displayed next to the link name.
- `hidden`: Boolean that specifies whether the link should be hidden.
- `customClass`: It specifies a custom CSS class for the link.
- `isHideNameOnSmallDevice`: Boolean that specifies whether the link name should be hidden on small devices.
- `isExpanded`: Boolean that specifies whether the accordion that is associated with the link should be expanded.

The component also emits a `navigated` event when the link is clicked.

The `navLink` component uses a `router-link` component to render the link. It also includes an accordion that can be expanded or collapsed when the user clicks on it.

The component exposes a few functions that can be used to customize the behavior of the component:

- `navigateTo`: This function is called when the link is clicked and is used to navigate to the target route.

- `handleAccordionClick`: This function is called when the accordion is clicked and is used to expand or collapse the accordion.

## NavSeparator
This component is a simple component that renders a separator in a navigation bar. It contains a single slot where the content to be displayed inside the separator can be passed in.

This can be used as follows:

```html
<nav-link  to="/app/dashboard" />
    <nav-separator>Categories</nav-separator>
    <nav-link to="/category/1"/>
```

## NotFound

This component that displays a "404 not found" error page.

The template contains HTML markup to display the error message and a button that links back to the homepage.

```typescript
createRouter({
  routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
})
```

## AlpCan / AlpCanAll / AlpCanAny

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

## FadeInRouterView

This component is used to render the component matched by the current route, and to provide a transition effect when switching between different routes.

This can be used as follows:

```html
<fade-in-router-view
  class="flex-1 min-h-0 min-w-0"
  :class="{
    'hidden md:flex': state.msg != true
  }"
/>
```

## AlpButton

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

#### Props:
- `variant`: This sets the visual style of the button.
- `small`: A Boolean indicating whether to use a smaller button size.
- `active`: A Boolean indicating whether the button is currently active.
- `icon`: The name of an icon to display on the button.
- `text`: The text to display on the button.
- `hasAlert`: A Boolean indicating whether to display an alert icon next to the button.

## AlpButtonWithText

:::danger
Similar to [AlpButton](#alpbutton) but nolonger need to call font-awesome icon when using as it is called internally

is this similar to the fontawesomeiconbutton, alpiconbutton, actionbutton?
:::

This component renders an icon with an optional context, and when the user hovers over it, a tooltip appears with the description of the component. The tooltip is positioned using the [Popper.js](./key-libraries.md#popper) library. The color of the component can be customized using the `color` prop.

This can be used as follows:

```html
<alp-button-with-text
  context="Delete"
  :color="'red'"
  icon-name="fa-solid fa-trash fa-2xl"
  @click.stop="deleteDocument"
/>
```

#### Props:

- `context`: A string that represents the context of the component. This prop is optional.
- `description`: A required string that represents the description of the component.
- `iconName`: A required string that represents the name of the icon to be displayed.
- `iconClass`: A string that represents the CSS classes to be applied to the icon. This prop is optional.
- `iconSize`: A number that represents the size of the icon in pixels. This prop is optional and defaults to 18.
- `color`: A string that represents the color of the component. This prop is optional and can be one of the following values: "`blue`", "`gray`", "`red`", "`green`", "`yellow`", "`indigo`", "`purple`", or "`pink`".

## ActionButton

This component displays a button with a font-awesome icon, and shows a description when the user hovers over the button. It uses the [Popper.js](./key-libraries.md#popper) library to position the description.

This can be used as follows:

```html
<action-button
  description="Finish Editing"
  icon-name="according-to-font-awesome-icon"
  icon-class="Optional"
  @click.stop="finishEditing()"
/>
```

#### Props:

- `description`: The text to display in the tooltip when hover to button.
- `iconName`: The name of the font-awesome icon to display in the button.
- `iconClass`: (Optional) A class to apply to the font-awesome icon.


## FontAwesomeIconButton

:::danger
Seems like same as alpiconbutton, and this is only used once
:::

This is a reusable component that renders a clickable icon button with an optional label. It supports different states such as `active`, `highlighted`, `pending` and `alert`. It uses [Font Awesome](key-libraries.md#font-awesome) icon library to display icons.

This can be used as follows:

```html
<font-awesome-icon-button
	icon-name="fa-solid fa-trash-can"
	@click="removeDocument(download)"
/>
```

#### Props:

- `active`: a Boolean prop that controls whether the button is in an active state or not. Default value is false.
- `highlight`: a Boolean prop that controls whether the button is highlighted or not. Default value is false.
- `hasPending`: a Boolean prop that controls whether the button has a pending state or not. Default value is false.
- `hasAlert`: a Boolean prop that controls whether the button has an alert state or not. Default value is false.
- `iconName`: a required String prop that specifies the name of the Font Awesome icon to display.
- `size`: a Number or String prop that specifies the size of the icon. Default value is 15.

This component is similar to that of [AlpIconButton](#alpiconbutton), but making use of the [Font Awesome](key-libraries.md#font-awesome) Icons Library.

## IconButton

This is a reusable component that renders a clickable icon button with an optional label. It supports different states such as `active`, `highlighted`, `pending` and `alert`. It uses [Font Awesome](key-libraries.md#font-awesome) icon library to display icons.

This can be used as follows:

```html
<icon-button
  icon-name = "fa-solid fa-chevron-left"
  @click="previousCalendar"
/>
```

#### Props:

- `active`: a Boolean prop that controls whether the button is in an active state or not. Default value is false.
- `highlight`: a Boolean prop that controls whether the button is highlighted or not. Default value is false.
- `hasPending`: a Boolean prop that controls whether the button has a pending state or not. Default value is false.
- `hasAlert`: a Boolean prop that controls whether the button has an alert state or not. Default value is false.
- `iconName`: a required String prop that specifies the name of the Font Awesome icon to display.
- `size`: a Number or String prop that specifies the size of the icon. Default value is 15.

<!-- This component is similar to that of [AlpIconButton](#alpiconbutton), but making use of the [Font Awesome](key-libraries.md#font-awesome) Icons Library. -->

## AlpIcon

:::danger Deprecate
Switched to font-awesome-icon from external font awesome icons
:::

## AlpIconButton

:::danger Pending
this component is currently not using font awesome, pending confirmation
:::

This component renders a customizable and reusable icon button with optional alerts and loaders with several props that control its behavior and appearance.

This can be used as follows:

```html
<alp-icon-button
	v-if="download.allowWord"
	icon-name="Word.svg"
	:style="{ color: '#2B579A' }"
	@click="downloadDocument(download, document.Word)"
/>
```

#### Props:

- `active`: Boolean defaulting to false. It determines whether the button is active or not.
- `highlight`: Boolean defaulting to false. It determines whether the button is highlighted or not.
- `hasPending`: Boolean defaulting to false. It determines whether the button has a pending state or not.
- `hasAlert`: Boolean defaulting to false. It determines whether the button has an alert or not.
- `iconName`: A required String that specifies the name of the icon to be displayed on the button.
- `size`: A Number or String prop that defaults to 15 pixels. It specifies the size of the icon to be displayed on the button.

This component doesn't have any custom events, but it can emit standard events such as `click` when the button is clicked.

## DocumentIcon

This component takes in a file extension and displays an appropriate icon for that extension. The component uses a computed property to determine the icon to display based on the file extension provided as a prop.

This can be used as follows:

```html
<document-icon :extension="resource.resourceDocument.fileExtension" class="mr-3"/>

```

#### Props:
- `extension`: a ***required*** prop that takes in a string representing the file extension of the document to be displayed.
- `width`: an *optional* prop that specifies the width of the icon to be displayed.
- `height`: an *optional* prop that specifies the height of the icon to be displayed.
- `iconColor`: an *optional* prop that specifies the color of the icon to be displayed. By default, it is set to 'currentColor'.


## AlpLoader

This component is for displaying a spinning animation to indicate that some content is being loaded.

The loader is displayed as a circular SVG representing a loading wheel.

It is expected to be animated separately, for example using the tailwind animation class `animate-spin`.

This can be used as follows:

```html
<alp-loader
  v-if="hasPending"
  class="absolute animate-spin-slow text-blue-600"
  size="30"
/>
```

#### Props
- `size`: The size of the loader in pixels. This prop can be either a number or a string representing a valid CSS length value (e.g. "2rem").
- `color`: The color of the loader. This prop can be any valid CSS color value.


## AlpTable
This is a component for displaying a table with resizable headers and allow for selection of rows. It includes pagination, sorting, and filtering functionality to allow easy navigation. It automatically displays data from a provided array of objects.

This can be used as follows:

```html
<alp-table
  :headers="['A', 'B', 'D']"
  :fields="['a', 'b', 'c.d']"
  identifier="id"
  :loading="loading"
  :values="items"
  :issorting="true"
  :isResizableColumns="true"
  :isMultiSelection="true"
  :deSelectCheckBoxCount="state.deSelectCheckBoxCount"
  pageName="resourceDocuments"
  @selected="onSelected"
>
  <template v-slot:status="{ value }">
    <td v-if="value.status == 1">
    </td>
    <td v-if="value.status == 2">
    </td>
  </template>
</alp-table>
```

#### Props
- `headers`: (`array`) indicates the header cells that should be used for the table
- `fields`: (`array`) indicates the fields that should be used for the table. This lines up with the header cells.
- `values` is an array of objects that should be rendered for the table
- `loading`: (`boolean`) indicates the loading status of the data. A loading wheel is displayed when this is true.
- `identifier`: (`string`) is the unique key that will be used as the `key` for the elements in the table. This defaults to `id`
- `isMultiSelection`: (`boolean`) to decide if muiltiSelection is allowed 
> Default value: `false`
- `deSelectCheckBoxCount`: (`number`) 
> Default value: `0`
- `issorting`: (`boolean`)
> Default value: `false`
- `isResizableColumns`: (`boolean`) 
> Default value: `false`
- `pageName`: (`string`) 
> Default value: `""`

#### Events

- `selected`: emitted when a row in the table is clicked. The event is emitted with the value of the object in the corresponding row.
- `select-all`: emitted when `selectAll` function is called by checking the "*select all*" checkbox, the event selects all **displayed** rows in the table.
- `clicked`: emitted when the table is clicked.


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

The value of `c` can be displayed using the field definition `b.c`.

Alternatively, named slots may be used to provide a custom implementation of the table cell. An example of this will be shown below.


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
::: 



## AlpInfiniteTable

This component is similar to the [`AlpTable`](#alptable), with an added feature that creates an **infinite scrolling table**, with support for selecting and sorting rows and columns for all current displaying items in the table.

When the user scrolls to the bottom of the table, the component triggers an event `load-more` to indicate that it needs to load more items.

This can be used as follows:

```html
<alp-infinite-table
  :headers="['A', 'B', 'D']"
  :fields="['a', 'b', 'c.d']"
  identifier="id"
  :loading="loading"
  :values="items"
  :issorting="true"
  :isResizableColumns="true"
  :isMultiSelection="true"
  :deSelectCheckBoxCount="state.deSelectCheckBoxCount"
  pageName="resourceDocuments"
  @selected="onSelected"
  @load-more="fetch"
  :wrapperDivClass="'w-full'"
>
  <template v-slot:status="{ value }">
    <td v-if="value.status == 1">
    </td>
    <td v-if="value.status == 2">
    </td>
  </template>
</alp-infinite-table>
```
`AlpInfiniteTable` introduces the `load-more` event, similar to that from the [`AlpInfiniteContainer`](#alpinfinitecontainer), which will automatically be triggered when scrolling to the end of the table. This would be used to load the next set of data.





## AlpPaginator

This component implements a pagination functionality. 

It defines a template that displays a navigation bar that allows the user to change the current page by clicking on buttons. The buttons consist of `Previous` and `Next` buttons, and a series of page buttons that are dynamically generated based on the current page. 

The component uses a composable from `@/composable/pagination` named `usePagination` to handle the logic of pagination.

This can be used as follows:

```html
<alp-paginator
	class="text-sm"
	v-model:limit="state.limit"
	v-model:offset="state.offset"
	:item-count="pagesData.length"
	:total="pagesDataCount"
/>
```

#### Props:

- `limit`: The number of items displayed on each page. This is a **required** prop of type `Number`.
- `total`: The total number of items in the list. This is a **required** prop of type `Number`.
- `offset`: The starting number of items displayed on each page. This is an *optional* prop of type `Number`.
- `itemCount`:  The total number of items displayed on each page. This is an *optional* prop of type `Number`.
- `CurrentPageNumber`: The current page number. This is an *optional* prop of type `Number` with a default value of `1`.

#### Methods from composable usePagination:

- `prev`: Navigates to the previous page.
- `next`: Navigates to the next page.
- `set`: Navigates to a specific page.



## Modal

This code is for a modal component that is displayed as a full-screen overlay on top of the main content, and it includes a close button in the top-right corner.

The component ***emits*** a close event when either of the following happens: 
- the close button is clicked 
- the user presses the escape key
- the user has clicked outside of the modal (checkClick)

This can be used as follows:

```html
<modal @close="$emit('close')">
  Contents, most commonly, a ModalForm
</modal>
```

#### Props:

- `flexWidth`: This is a Boolean prop that indicates whether the modal should have a fixed width or flex width.

## ModalForm

This component is for creating a form within a [`modal`](#modal). It is built using the [`vee-validate`](./key-libraries.md#veevalidate) library to provide form validation.

This can be used as follows:

```html
<modal @close="$emit('close')">
  <modal-form @cancel="$emit('close')" @submit="createFormAction">
    <alp-form-container>
      Refer to AlpFormContainer
    </alp-form-container>
  </modal-form>
</modal>
```

#### Props:

- `initialValues`: An object containing the initial values for the form fields.
- `confirmText`: The text to display on the confirm button. The default value is "Confirm".
- `cancelText`: The text to display on the cancel button. The default value is "Cancel".
- `confirmButtonLoading`: A boolean value indicating whether the confirm button should show a loading spinner. The default value is false.

#### Events:

- `submit`: Triggered when the form is submitted. It passes the form data as an argument.
- `cancel`: Triggered when the cancel button is clicked.

Further usage please refer to [`AlpFormContainer`](./components-form.md#alpformcontainer)




## AlpChart

This is a simple wrapper for rendering Chart.js based charts / graphs. It renders a simple label and a canvas containing the chart.

This component does not include any logic for managing the chart definitions. It simply relays the provided chart definitions, and handles the creation of the chart instance and the updating of the canvas if the definition changes.

This can be used as follows:

```html
<chart
  :label="'Chart Title'"
  :data="chartData"
  :options="chartType"
/>
```

#### Props:

- `label`: a string that is used as the chart's title
- `data`: an object containing the chart's data and type. The data property should be an array containing the data to be plotted and the type property should be a string indicating the chart type (e.g. "bar", "line", "pie").
- `options`: an object that contains additional options to customize the chart (e.g. color, font, legend position, etc.).

For more details regarding the Chart.js, please refer to the [official documentation](https://www.chartjs.org/). 

## AlpDraggable

This component is a kanban board component that can be used to display and manage a set of tasks organized by columns. The component uses the `vuedraggable` library to drag and drop tasks between columns.

This can be used as follows:

```html
<alp-draggable
  :values="[
    {
      title: "To Do",
      tasks: [
        { id: 1, task: "Task 1" },
        { id: 2, task: "Task 2" }
      ],
      typeId: 1
    },
    {
      title: "In Progress",
      tasks: [
        { id: 3, task: "Task 3" },
        { id: 4, task: "Task 4" }
      ],
      typeId: 2
    }
  ]"
  :isFullWidth="false"
  :isGaryBackground="true"
  :disabled="false"
  @OnAdd="onAdd"
  @cardClicked="onCardClick"
  @NewCardAdd="onNewCardAdd"
  @OnMove="onMove"
>
  <template #card="{ value }">
    <div class="flex items-center">
      {{ value.task }}
    </div>
  </template>
</alp-draggable>
```

#### Props:

- `values`: an array of objects representing the columns and tasks to display
- `isFullWidth`: a boolean indicating whether each column should take up the full width of the component
- `isGaryBackground`: a boolean indicating whether the background of each column should be gray
- `disabled`: a boolean indicating whether drag and drop functionality should be disabled

#### Events

- `OnAdd`: emitted when a task is added to a column
- `cardClicked`: emitted when a task card is clicked
- `NewCardAdd`: emitted when the "Add new card" button is clicked for a column
- `OnMove`: emitted when a task is moved between columns


## AlpDefaultBadge
This component defines a badge with customizable text, color, and text size. 

This can be used as follows:

```html
<alp-default-badge :text=item.id :color="decideColor(item.status)"> 
</alp-default-badge>
```

#### Props:

- `text`: A string or number representing the text that will be displayed inside the badge.
- `color`: A string representing the color of the badge. It can be one of the following: "`blue`", "`gray`", "`red`", "`green`", "`yellow`", "`indigo`", "`purple`", or "`pink`". The `default` value is "`blue`".
- `textSize`: A string representing the font size of the text inside the badge. The default value is undefined.

## AlpDefaultRating

This component provides a simple and reusable way to display star ratings in the ALP web application.

It uses SVG icons to display five stars, and the number of filled stars depends on the `rating` value passed as a prop.

This can be used as follows:

```html
<td>
  <alp-default-rating :rating="value.precedentValue">
  </alp-default-rating>
</td>
```

The above is used inside a table.

This component only has 1 prop, `rating`, it is a number representing the rating value to be displayed. It determines the number of filled stars. It is passed from the parent component.



## AlpEmpty

This is a component that renders an empty content message with an image and a text. It is used when there is **no content** to display in a specific section, for example, an **empty folder** or an **empty search result**.

The component takes a single `prop` called `content`, which is a string representing the message to display.

This can be used as follows with `v-if`:

```html
<alp-empty
  :content="'No notification to review'"
  v-if="items.length == 0"
>
</alp-empty>
```

When the `content` prop is **provided**, the text is displayed below the image. If the `content` prop is **not provided**, the text is not displayed.

## AlpFocusInput

This is a component that renders an input field with a **clear button** and an *optional* **ellipsis button** using the Font Awesome icon library and a CSS transition. 

This can be used as follows:

```html
<alp-focus-input
  class="text-sm rounded-lg w-full h-10"
  placeholder="Search (Press 'Ctrl + /' to focus)"
  v-model="viewState.search"
/>
```

#### Props:

- `focusOn`: A string representing the keyboard key to focus on the input field (default is `/`).
- `blurOn`: A string representing the keyboard key to blur the input field (default is `Escape`).
- `modelValue`: A string or number representing the input field's value (required).
- `isMultiSelection`: A boolean indicating whether to display an ellipsis button for multi-selection (default is false).
- `pageName`: A string representing the page name (default is an empty string).

The component emits an `update:modelValue` **event** when the input field's value changes.

The setup function sets up the component's behavior by defining several functions:

- `focusHandler`: A function that handles the focus and blur behavior of the input field.
- `parser`: A function that formats the input field's value and emits the update:modelValue event.
- `clearInput`: A function that clears the input field's value and emits the update:modelValue event.
- `showActiveModal`: A function that dispatches a modal action to the Vuex store.

## AlpHtmlVIewer

:::danger Deprecate
:::

## FieldDisplay

This component is a reusable component designed to display the content of a field with a corresponding label. It renders the label and content in a flexbox column layout.

This can be used as follows:

```html
<field-display
  class="w-full"
  label="What we will do"
  :content="state.whatWeDo"
/>
```

#### Props:

- `label`: a string representing the label of the field to display. This prop is required.
- `content`: a string representing the content of the field to display. This prop is also required.

## FilePreview

This component displays a preview of a file, in a modal, based on its extension. It can show a `PDF` preview using the `PdfPreview` component or an image preview using the `ImagePreview` component.

This can be used as follows:

```html
<file-preview
  v-if="state.showPreview"
  :extension="document.fileExtension"
  :get-url="getDocumentUrl"
  :get-file="getDocumentFile"
  @close="state.showPreview = false"
/>
```

#### Props:

- `extension`: The file extension to determine the type of preview to display. If it's a `PDF` file, it will show the `PdfPreview` component. Otherwise, it will show the `ImagePreview` component.
- `getUrl`: A function that returns a Promise that resolves to a `URL` of the file. This prop is used by the `ImagePreview` component to load the file's image.
- `getFile`: A function that returns a Promise that resolves to an `ArrayBuffer` of the file. This prop is used by the `PdfPreview` component to load the `PDF` file.

## ImagePreview

This is a useful and customizable component for displaying and zooming in on images.
It takes in a `getUrl` prop which is a function that returns a Promise that resolves to the `URL` of the image to display.

The component renders a container div that centers the image within the component. The image itself is an <img> element with a maximum width of 4xl (which can be styled with a CSS framework such as Tailwind CSS).

On mounting, the component calls the getUrl function to retrieve the URL of the image to display. When the image is clicked, the toggleZoom function is called, which initializes a mediumZoom instance on the image element and toggles the zoom in/out.

The component is designed to be reactive, so changes to the URL or other props will be automatically reflected in the rendered image.

This can be used as follows:

```html
<image-preview v-else :get-url="getUrl" />
```

## PdfPreview

This component is for displaying a `PDF` document in a web application. It renders a canvas element that displays the `PDF` document, and provides controls for navigating through the pages of the document.

This can be used as follows:

```html
<pdf-preview v-if="extension.includes('pdf')" :get-file="getFile" />
```

#### Props:
- `getFile` ***Required*** A function that returns a Promise that resolves to an `ArrayBuffer` containing the `PDF` document data.

#### Data:
`state`: A reactive object that holds the state of the component. It contains the following properties:
- `buffer`: The `ArrayBuffer` containing the `PDF` document data.
- `pageNum`: The current page number being displayed.
- `numPages`: The total number of pages in the `PDF` document.
- `pageRendering`: A boolean indicating whether a page is currently being rendered.
- `pageNumPending`: The page number that is pending rendering, if any.
- `scale`: The scale at which to render the `PDF` document. The default value is 2.


## Timer

This component provides a UI for displaying and interacting with a timer. The component displays the accumulated time and provides buttons to start, pause, stop, and delete the timer. The component also includes an input field for entering a description of the timer.

The component receives a `timer` prop, which is an object that represents the `timer` being tracked. The `timer` object contains various properties such as the `id`, `type`, `startTime`, `description`, and `accumulatedTime`. The `type` property determines the category of the `timer`, such as work, break, or meeting.

This can be used as follows:

```html
<timer
  v-for="timer in timers"
  :key="timer.id"
  class="mx-1"
  :timer="timer"
/>
```

The Timer component emits a submit ***event*** when the user clicks the stop button to indicate that the `timer` should be submitted.

The component makes use of several other components such as InlineTextArea and [AlpButton](#alpbutton) for rendering certain elements. It also uses some utility functions such as `fmtSecondsToTime` and `toDateTime` for formatting the timer's accumulated time.

## InlineTimer

This component provides a timer interface with `start`, `pause`, and `stop` functionality. It also displays the accumulated time and allows submitting the time entry.

When the timer is started, it displays the accumulated time, which updates every half a second using the `useIntervalFn` function from the `@vueuse/core` library. When the timer is paused, it stops updating, and when it is stopped, it allows submitting the timer entry.

The component uses the `TimeEntryStore` and `ModalStore` stores from [Vuex](key-libraries.md#vuex) to dispatch actions that start, pause, and submit the timer entry. It also emits events when the timer is updated or submitted.

This can be used as follows:

```html
<inline-timer
  v-if="activeTimer"
  :timer="activeTimer"
  @updated="$emit('updated')"
  :is-added-in-card="true"
/>
```

#### Props:

- `timer`: an object representing the timer, which is required.
- `isAddedInCard`: a boolean indicating if the component is added in a card, which defaults to false.

#### Events:

- `updated`: emitted when the timer is updated, which could be started, paused, or submitted.
- `submit`: emitted when the timer is submitted.



## ProgressBar

The ProgressBar component is a visual element that displays the progress of a task. It consists of a colored bar that fills up over time to indicate how much of the task has been completed.

The ProgressBar component has one prop called `percentage`, which is a number that represents the progress of the task as a `percentage`. This prop is required and must be provided by the parent component.

In the template, the ProgressBar component uses two nested span elements. The outer span has a gray background and a rounded border, while the inner span has a blue background and is positioned relative to the outer span. The width of the inner span is set using the percentage prop, and the percentage value is displayed inside the inner span using a nested span with a blue background and white text.


This can be used as follows:

```html
<progress-bar
  v-if="state.percentageComplete"
  :percentage="state.percentageComplete"
/>
```

## AlpDropdown

This component creates a dropdown menu. It consists of a clickable selector element that toggles the visibility of a descriptor element containing the options.

The component uses the "usePopper" composable from "@/composable/popper" to manage the positioning and visibility of the descriptor element.

This can be used as follows:

:::danger Deprecate
:::

```html

```

#### Props:

- `label`: a required string prop that represents the label of the selector element.

## AlpOptions

This component provides a dropdown menu functionality. It consists of a trigger element, which can be customized with a font-awesome icon, and a hidden options menu that appears when the trigger is clicked.

This can be used as follows:

```html
<alp-options :customIcon="'fa-solid fa-ellipsis'">
  <ul class="py-2">
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
  </ul>
</alp-options>
```

#### Props:

- `customIcon` (type: String, default: null): specifies the font-awesome icon to use for the trigger element.

#### Events:

- `click`: emitted when the trigger element is clicked.

The component uses the `usePopper` composable to position the options menu relative to the trigger element. The state of the component is managed using reactive, and the `toggleOptions` function is used to show/hide the options menu and update the positioning using the `usePopper` `forceUpdate` function.

The component is intended to be used as a dropdown menu trigger that can be customized with different font-awesome icons, and it can contain any content in its options menu.


## Selector
This is a dropdown selector that allows the user to select options from a list of choices.


This can be used as follows:

```html
<selector
  class="mx-6"
  name="Roles"
  :options="roles"
  :selected="userRoles"
  @selected="addUserRole($event)"
  @removed="removeUserRole($event)"
/>
```

#### Props:
- `name`: String (required) - The name of the selector
- `options`: Array of objects (required) - An array of all available options. Each option object should have an `id` and `name` property.
- `selected`: Array of objects (optional) - An array of currently selected options. Each option object should have an `id` and `name` property.

#### Events

- `selected`: Emitted when an option is selected from the dropdown. The selected option ID is passed as the event payload.
- `removed`: Emitted when an already selected option is removed from the selector. The removed option ID is passed as the event payload.



## UpDownSwitch

This is a simple component that displays two icons (chevron up and chevron down) and `emits` events when they are clicked. The purpose of this component is to allow the user to switch between up and down values, usually pages.

This can be used as follows:

```html
<up-down-switch @up="moveUp" @down="moveDown" />
```

This component uses the `emits` option to declare the two events: "up" and "down". When the user clicks on the up or down icon, the component `emits` the corresponding event using `$emit()`, which can be used to trigger a method or update data in the parent component.

The component uses Font Awesome icons to display the chevron up and down icons.




# others
<!-- ## AlpIcon

This leverages the [Font Awesome](https://fontawesome.com/) framework to allow for the selection of any of the available icons in the framework.
https://fontawesome.com/search?o=r&m=free
This can be used as follows:

```html
<alp-icon icon="icon-name" :size="24" />
```

Where:

- `icon-name` is the icon name as defined by Iconify. This is required.s
- `size` is the height/width of the icon. This is optional and defaults to 18. -->

<!-- ## AlpButton

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

 -->

<!-- ## AlpFocusInput

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
``` -->


<!-- ## AlpChart

This is a simple wrapper for rendering Chart.js based charts / graphs. It renders a simple label and a canvas containing the chart.

This component does not include any logic for managing the chart definitions. It simply relays the provided chart definitions, and handles the creation of the chart instance and the updating of the canvas if the definition changes.

For more details regarding the definition of charts, please refer to the [official documentation](https://www.chartjs.org/).  -->

<!-- ## AlpLoader

This is a wrapper for an SVG representing a loading wheel. It features a few basic props for managing the appearance of the loading wheel. It is expected to be animated separately, for example using the tailwind animation class `animate-spin`.

- `size`: The size of the loading wheel. This controls both the height and width of the SVG image.

The colour of the loader has been configured to be `currentColor`; that is, the colour may be changed by changing the `color`. -->