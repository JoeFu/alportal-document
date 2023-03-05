# Inputs Components

This is a brief summary of some of the inputs components being used in the system today.
:::tip Note
Updated Q1 2023
:::

## Selectors
### SearchSelector

This component provides a searchable dropdown list for selecting an item from a list of values. 

This can be used as follows:

```html
<search-selector
    placeholder="Select an item"
    :values="items"
    v-model="selectedItem"
    @selected="handleItemSelected"
    @create="handleItemCreate"
>
    <template #selected="{ value }">
        {{ value.name }}
    </template>
    <template #item="{ value }">
        {{ value.name }}
    </template>
  </search-selector>
```

#### Props:

The component is customizable with several `props` that allow for customizing the behavior and appearance of the component. 

> - `placeholder` (`String`): text to display when no item is selected.
> - `value` (`Object`): currently selected item.
> - `values` ( `Array`): list of values to display in the dropdown.
> - `canCreate` (`Boolean`): If user is allowed to create a new item by typing in the search field.
> - `disabled` (`Boolean`): If the component is disabled.
> - `canClear` (`Boolean`): If a "clear" button is displayed next to the selected item to allow clearing the selection.
> - `parentElementSelected` (`Number`): `ID` of the parent element, if any, that the selected item belongs to.
> - `removeBorder` (`Boolean`): Whether to remove the border from the dropdown selector.

#### Events:

The component `emits` several events that allow for handling changes to the selected `value`, the `list of values`, and the `state` of the component.

> - `fetch` (search: `String`): Emitted when the user types in the search field, with the current search text as the argument.
> - `selected` (value: `Object`): Emitted when the user selects an item from the dropdown, with the selected item as the argument.
> - `create`: Emitted when the user creates a new item.
> - `close`: Emitted when the dropdown is closed.
> - `elementSelected` (element: `Object`): Emitted when an element is selected from the dropdown, with the selected element as the argument.
> - `fetchmore` (search: `String`): Emitted when more items need to be fetched due to infinite scrolling, with the current search text as the argument.

#### Slots:

> - `selected` (value: `Object`): The template for displaying the currently selected item.
> - `item` (value: `Object`): The template for displaying each item in the dropdown list.
> - `additional`: Additional content to display above the list of items in the dropdown.

### XxxxxSelectors

The different selectors in the `/App/src/components/inputs/selectors` folder makes use of the root component `searchSelector` and customises it for their requirement.

Example of `searchSelector` in use within the `userSelector` component is as follows:

```html
<search-selector
    :placeholder="placeholder || 'Select a user'"
    :values="state.users"
    :value="modelValue"
    :disabled="disabled"
    :can-clear="canClear"
    @fetch="fetchUsers($event)"
    @selected="selectUser($event)"
>
    <template v-slot:selected="{ value }">
        <span> {{ value.firstName }} {{ value.lastName }} </span>
    </template>
    <template v-slot:item="{ value }">
        <span class="text-xs font-medium">
            {{ value.firstName }} {{ value.lastName }}
        </span>
        <span class="text-xs">{{ value.email }}</span>
    </template>
</search-selector>
```


## DateInput

This component provides an input field for entering dates. It uses the `flatpickr` library to display a calendar for selecting a date and provides a formatted `string` representation of the selected date.

This can be used as follows:

```html
<date-input
    placeholder="Start Date"
    name="startDate"
    v-model="project.StartDate"
/>
```

#### Props:

- `modelValue` (`String`): initial value of the date input field.
- `placeholder` (`String`): placeholder text to display in the input field.
- `minDate` (`String`): minimum selectable date for the calendar.
- `maxDate` (`String`): maximum selectable date for the calendar.

#### Events:

- `update:modelValue` : Emits when the date is changed by the user. The event payload is the selected date as an ISO-formatted string.
- `triggerFilter` : Emits when the date is changed by **the user** or **programatically**. This event can be used to trigger a filter or search action based on the selected date.

## GooglePlacesAutocomplete

This component allows users to search for and select a location using the `Google Places API`. The component consists of an input field where the user can type in their *location*, and a *dropdown list* of suggested locations based on the user's input.

This can be used as follows:

```html
<google-places-autocomplete
    class="w-full"
    placeholder="Address Lookup"
    @selected="setAddress(values.address, $event)"
/>
```

#### Events:

- `selected`: emitted when the user selects a location from the *dropdown list*. The event payload is an object containing the selected location's *address*, *suburb*, *state*, *country*, and *postal code*.



## DynamicComboBox

This component renders a single-select combo box input element with options dynamically generated based on the parameter passed as a `prop`. This is used in the `dynamicInput` component.

This can be used as follows:

```html
<dynamic-combo-box
    v-if="parameter.parameterType == DynamicParameterType.SingleSelect"
    :parameter="parameter"
    :entity-id="id"
    :update-value="updateValue"
/>
```

#### Props:

- `parameter` (`object`): parameter to be displayed in the select element. ***Required***.
- `entityId` (`number`): `id` of the entity that the parameter belongs to. ***Required***.
- `updateValue` (`function`): called whenever the user selects an option from the select element. ***Required***.

## DynamicTextInput

This component is a simple form input component that allows the user to enter a `text` value for a dynamic parameter. The component displays the parameter name as a `label` and a `text` input field for the user to enter the parameter value.

This can be used as follows:

```html
<dynamic-text-input
    v-else-if="parameter.parameterType == DynamicParameterType.TextInput"
    :parameter="parameter"
    :entity-id="id"
    :update-value="updateValue"
/>
```
#### Props:

- `parameter` (`object`): dynamic parameter data. The object has the following properties:
  - `id` (`number`): A unique identifier for the parameter.
  - `parameterName` (`string`): The `name` of the parameter.
  - `values` (`array`): `EntityDynamicParameterValuesDto` objects, which represent the current values of the parameter.
- `entityId` (`number`): The `ID` of the entity that the parameter is associated with.
- `updateValue` (`function`): update the value of the parameter. 
> The function takes two arguments: 
    > - the `ID` of the parameter 
    > - the `new value`.

#### Events:

- `create`: Emitted when the user enters a new value for the parameter. 

## DynamicMultiSelectCombobox

This is a versatile and useful component that renders a **multi-select** **combo box** `input` element with **dropdown** functionality with search capabilities for selecting `values` from a list. The component is primarily designed to be used in `dynamicInput` where users can select multiple values for a specific field.

This can be used as follows:

```html
<dynamic-multi-select-combo-box
    v-else-if="parameter.parameterType == DynamicParameterType.MultiSelect"
    :parameter="parameter"
    :entity-id="id"
    :add-value="addValue"
    :remove-value="removeValue"
/>
```

#### Props:

- `parameter` (`object`): **Required** parameter to be displayed in the component. 
> It should have the following properties:
  >  - `parameterName` (`string`): name of the parameter.
  >  - `values` (`array`): selected values for the parameter. 
  >  - `parameterValues`(`array`): available values for the parameter. 
- `entityId` (`number`): **Required**, entity ID that the parameter belongs to.
- `addValue` (`function`): **Required**, adds a value to the selected values for the parameter. 
> It takes two parameters: 
    >  - `parameterId` (`number`) ID of the parameter
    >  - `value` (`string`) value to be added
- `removeValue` (`function`): **Required**, removes a value from the selected values for the parameter. 
> It takes one parameter: 
    >  - `id` (`number`): ID of the value to be removed

This component has a template that includes a `label`, a `selected values` area, and a `dropdown` area. The selected values area displays the selected values for the parameter in a list format. Each selected value is displayed in a box with an 'x' icon for removing it. Clicking on the box triggers the removal of the corresponding value from the selected values.

The `dropdown` area displays the available `values` for the parameter in a multi-select `dropdown` with search capabilities. Clicking on the dropdown selector displays the `dropdown`, and clicking on an `item` in the `dropdown` adds it to the `selected values` for the parameter.

The component also uses the [`@popperjs/core`](./key-libraries.md#popper) library to create a `popper` instance that is used to position the dropdown relative to the `dropdown` selector. The `clickOutside` function is used to close the dropdown when the user clicks outside of the component.



## DynamicInput

This component is a dynamic input element used to render an input field based on the type of parameter specified. The component contains three sub-components, namely [DynamicCombobox](#dynamiccombobox), [DynamicTextInput](#dynamictextinput), and [DynamicMultiSelectCombobox](#dynamicmultiselectcombobox).

`DynamicInput` component involves passing in a `parameter` object, an `entityId`, and various update and add/remove functions as `props`. 
- The `parameter` object specifies the *type* of input to render
- The `entityId` is used to uniquely identify the input element. 
- The `update` and `add`/`remove` functions are used to `update` the input element with new values.

This can be used as follows:

```html
<dynamic-input
    class="w-1/2"
    :parameter="parameter"
    :entityId="id"
    :update-value="updateDynamicValue"
    :add-value="addDynamicValue"
    :remove-value="removeDynamicValue"
/>
```

#### Props:

- `parameter` (`object`): An `object` of type `EntityDynamicParameterValuesDto` that specifies the type of input to render.
- `entityId` (`number`): `id` of the input element.
- `updateValue` (`function`): used to update the input element with a `new value`. 
> Takes in two arguments, 
> - `parameterId` 
> - `value`
- `addValue` (`function`): used to add a `new value` to the input element. 
> Takes in two arguments, 
> - `parameterId` 
> - `value`.
- `removeValue` (`function`): A  used to `remove` a `value` from the input element. 
> Takes in one argument, 
> - `id`.

## InlineInput

This component provides an inline editable input field. It allows users to edit a single line of text, and emits events when the value of the input changes.

This can be used as follows:

```html
<inline-input
    v-model="value"
    type="type"
    placeholder="Enter some text"
    autofocus
    :disabled="disabled"
    rules="required"
    @create="onCreate"
    @cancel="onCancel"
    @triggerFilter="onTriggerFilter"
    @handleKeyPressed="onHandleKeyPressed"
/>
```

#### Props:
| Prop                                                                                                                                                                        | Default |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `modelValue`(`string` or `number`): current value of the input field. This is a two-way binding property that is used to *set* and *retrieve* the value of the input field. | `""`    |
| `type`: type of input field to display. **One** of "text", "number", "email", "password"                                                                                    | "text"  |
| `placeholder` (`string`):  placeholder text to display in the input field when it is empty. **Required**                                                                    |         |
| `autofocus` (`boolean`): if input field should be focused automatically when the component is mounted.                                                                      | `false` |
| `disabled`(`boolean`): if input field should be disabled.                                                                                                                   | `false` |
| `rules`(`string`):validation rules to apply to the input field. See the [VeeValidate ](key-libraries.md#veevalidate) for more information.                                  | `""`    |
| `keepFocus`(`boolean`): if input field should maintain focus after editing.                                                                                                 | `false` |
| `removeboder`(`boolean`): Whether or not to remove the border of the input field when not editing.                                                                          | `false` |
| `valueChanged`(`number`): force the component to update the value when it changes.                                                                                          |    0    |

<!-- - `modelValue`(`string` or `number`): The current value of the input field. This is a two-way binding property that is used to set and retrieve the value of the input field. 
>  - *Default*: `""`
- `type`: The type of input field to display. 
>  - One of "text", "number", "email", "password". 
>  - *Default*: "text".
- `placeholder` (`string`): **Required** The placeholder text to display in the input field when it is empty.
- `autofocus` (`boolean`): if input field should be focused automatically when the component is mounted. 
>  - *Default*: false.
- `disabled`(`boolean`): if input field should be disabled. 
>  - *Default*: false.
- `rules`(`string`):validation rules to apply to the input field. See the [VeeValidate ](key-libraries.md#veevalidate) for more information. 
>  - *Default*: `""`.
- `keepFocus`(`boolean`): if input field should maintain focus after editing. 
>  - *Default*: false.
- `removeboder`(`boolean`): Whether or not to remove the border of the input field when not editing. 
>  - *Default*: false.
- `valueChanged`(`number`): force the component to update the value when it changes. 
>  - *Default*: 0. -->

#### Events:

- `update:modelValue`: Emitted when the value of the input field changes. 
- `create`: Emitted when the user creates a new value by pressing the Enter key or clicking the checkmark button. 
- `cancel`: Emitted when the user cancels editing by pressing the `Esc` key or clicking the `X` button.
- `triggerFilter`: Emitted when the input value is updated, which can be used to trigger a filter function.
- `handleKeyPressed`: Emitted when any key is pressed in the input field, which can be used to handle special cases for certain key presses. 



## EditInlineInput

This component is a custom *input* component used for *inline editing* within a larger component. It can be used in various scenarios where the user needs to *input* a *value* in a specific location on the page without leaving the page.

This can be used as follows:

```html
<edit-inline-input
    v-model="name"
    placeholder="Enter your name"
    type="text"
    rules="required|min:2|max:50"
    @update:modelValue="updateName"
    @selected="showName"
    @valueUpdated="handleNameUpdate"
/>
```

#### Props:

- `modelValue` (`string` or `number`): value to be displayed in the *input* field
- `type` (`string`): the *type* of the *input* field (e.g. "*text*", "*number*", "*password*", etc.)
- `placeholder` (`string`): the *text* to display when the *input* field is empty
- `to` (`string`): `URL` to redirect to if the *input* value is valid 
- `selectable` (`Boolean`): whether the input field should be selectable
- `rules` (`string`): validation *rules* for the *input* value

#### Events:

- `update:modelValue`: emitted when the *input value* is *updated*
- `selected`: emitted when the *input* field is *selected*
- `valueUpdated`: emitted when the *input* value is successfully *validated* and *updated*

## EditInlineTextArea

This component is a reusable component used for **inline editing of text** in this application. 

It can be used to edit text on a page by clicking on the text, which then transforms into an editable input field. 

Once the user has made their edits and either clicks away from the field or presses enter, the new text value is saved and the input field transforms back into the text display format.

This can be used as follows:

```html
<edit-inline-text-area
    v-model="myText"
    type="text"
    placeholder="Enter your text here"
    :selectable="true"
    :rules="'required|min:3|max:100'"
    @update:modelValue="onUpdate"
    @selected="onSelected"
    @valueUpdated="onValueUpdated"
/>
```

#### Props:

- `modelValue` (`string` or `number`): value to be displayed in the *input* field
- `type` (`string`): the *type* of the *input* field (e.g. "*text*", "*number*", "*password*", etc.)
- `placeholder` (`string`): the *text* to display when the *input* field is empty
- `to` (`string`): `URL` to redirect to if the *input* value is valid 
- `selectable` (`Boolean`): whether the input field should be selectable
- `rules` (`string`): validation *rules* for the *input* value

#### Events:

- `update:modelValue`: emitted when the *input value* is *updated*
- `selected`: emitted when the *input* field is *selected*
- `valueUpdated`: emitted when the *input* value is successfully *validated* and *updated*

## Editor

This component contains a text editor using the `TinyMCE` editor library. It is a simple way to add a rich text editor. 

This can be used as follows:

```html
<editor
    class="flex-1 h-64 mx-3"
    v-model="body"
    v-on:keydown="onKeyDown"
    :isShowThreeDots="threadEmailContent != ''"
    :fixedHTML="threadEmailContent"
/>
```

#### Props:

- `modelValue` (`String`): current value of the editor's content.
- `editable` (`Boolean`): Whether the editor is editable or not. 
> Default : `true`.
- `editorContainerClass` (`String`): A CSS class name to be applied to the *container element of the editor*.
- `editorClass` (`String`): A CSS class name to be applied to the *editor element*.
- `isShowThreeDots` (`Boolean`): Whether to show a button that toggles an additional section of the component. 
> Default : `false`.
- `fixedHTML` (`String`): HTML content to be displayed in the additional section if `isShowThreeDots` is `true`. 
> Default : `""`.

#### Events:

- `update:modelValue`: Emitted when the content of the editor is changed. The new content is passed as the event payload.



## InlineEditor

This component is used to provide a simple way to *edit a value inline* within a text element. It utilizes the [`Editor`](#editor) component, which allows for editing and validation of input values.

This can be used as follows:

```html
<inline-editor name="description" v-model="state.description" />
```

#### Props:
- `modelValue` (`string` or `number`): the initial value to display within the element
- `editable` (`boolean`): whether the element is editable or not. 
> Default: `true`
- `rules` (`string`): *validation rules* to apply to the input value, 
> *optional*

> Default: `""`

#### Events:
- `update:modelValue`: emitted when the input value has been successfully validated and updated
- `create`: emitted when the "check" icon is clicked to apply the changes and update the value
- `cancel`: emitted when the "x" icon is clicked to cancel the editing process and revert back to the original value

## InlineTextArea

This component allows the user to edit a text string in place, directly in the page. 
The inlineTextarea component uses the [VeeValidate](../front-end/key-libraries.md#veevalidate) library to validate the input text. When the user finishes editing and clicks the checkmark button, the input text is validated against the `rules` `prop`. 
- If the text is valid, the `create` and `update:modelValue` events are emmited, the updated value is passed as an argument, and the textarea is hidden. 
- If the text is invalid, an `error` message is displayed and the user is prompted to correct the input. 
- If the user cancels editing or the input is invalid, the `cancel` event is emmited and the textarea is hidden.

This can be used as follows:

```html
<inline-text-area
    class="w-full"
    :type="type"
    :placeholder="placeholder"
    :model-value="modelValue"
    @create="endEdit($event)"
    @cancel="cancelEdit"
    autofocus
/>
```

#### Props:

- `modelValue` (`string` or `number`): The current value of the text string being edited.
- `placeholder` (`string`): The placeholder text to display in the textarea.
- `autofocus` (`boolean`): Whether to automatically focus the textarea when it is displayed. 
> Default: `false`.
- `disabled` (`boolean`): Whether the textarea should be disabled. 
> Default: `false`.
- `rules` (`string`): *validation rules* that can be used to validate the input text. 
> Default: `""`.
- `keepFocus` (`boolean`): Whether to keep the focus on the textarea after the user finishes editing. 
> Default: `false`.

#### Events:

`update:modelValue`: Fired when the user finishes editing and the input is valid. The updated value is passed as an argument.
`create`: Fired when the user finishes editing and the input is valid. The updated value is passed as an argument.
`cancel`: Fired when the user cancels editing or the input is invalid.

## MultiInput

This component allows users to input multiple values by creating tags from their input. 

It consists of an *input field*, where users can type in *values*, and a *list of tags* representing the *inputted values*. 

The component *validates* the input values based on the `rules` specified in the props and emits the `update:modelValue` event whenever a value is *added* or *removed*.

This component is used in [MultiInputField](components-form.md#multiinputfield).

This can be used as follows:

```html
<multi-input
    v-model="myValues"
    @update:modelValue="handleChange"
    placeholder="Type here..."
    :rules="{ required: true }"
    :unique="true"
    :removeborder="false"
    :showInputAfterSelection="false"
/>
```
#### Props:

- `modelValue` (`array`): An array of strings representing the inputted values. **Required** and should be passed as a `v-model`.
- `rules` (`string` or `object`): specifying the validation rules for the input values. Using [veevalidate](../front-end/key-libraries.md#veevalidate) library for validation.
- `placeholder` (`string`): placeholder text in the input field.
- `unique` (`boolean`): If duplicate values are allowed.
- `onKeyDown` (`function`): executed when a key is pressed in the input field.
- `removeborder` (`boolean`): If the input field should have a border.
- `showInputAfterSelection` (`boolean`): If the input field should be shown after a value has been selected.

#### Events:

- `update:modelValue`: An event emitted whenever a value is added or removed from the list of tags.