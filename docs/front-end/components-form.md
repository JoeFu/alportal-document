# Forms Components

This is a brief summary of some of forms components being used in the system today.
:::tip Note
Updated Q1 2023
:::

## Selectors

This is a group of `selectorField` components that utilises the group of [`selector`](components-input.md#xxxxxselectors) components to provide a *dropdown list* to select an ***option***, and bind the selected ***option*** to a form field. Which is to autocomplete forms after selecting an ***option***.

It uses `useField` function from the [veevalidate](key-libraries.md#veevalidate) library to handle form validation before emitting the selected ***option*** object to the parent component when the field value changes.

The following is an example of using one of the `selectorField`, which is of the `userSelectorField`:

```html
<user-selector-field name="staff" rules="required" />
```

#### Props:

`name` (`string`) : The name of the field, used for validation and identifying the form data. ***Required***
`rules` (`string` or `object`) : The validation rules for the field, using VeeValidate syntax.
`placeholder` (`string`) : The placeholder text to display in the field.

#### Events:

`selected`: Emits when an ***option*** is selected from the dropdown, with the selected ***option*** as the only argument.
`close`: Emits when the dropdown is closed, without any arguments.


<!-- The main difference between userSelector and userSelectorField components is their purpose and usage context.

userSelector is an input component that provides a search interface to select a user from a list. It uses the SearchSelector component and allows users to search and select a user from a list of users fetched from a server. It emits the selected event when a user is selected, and it also emits the fetch event when the user types in the search box. The userSelector component is used as a standalone component to select a user.

On the other hand, userSelectorField is a form component that uses the UserSelector component to select a user and bind the selected user to a form field. It uses the useField hook from the vee-validate library to manage the form field's state and validation. When a user is selected, it emits the selected event and updates the form field's value using the handleChange function returned by the useField hook. The userSelectorField component is used as part of a form to bind the selected user to a form field and validate its value. -->

## AlpFormContainer

This component is a simple container component to *wrap* around form fields to provide a consistent *layout* and *styling*.

It supports rendering its `slot` content.

This can be used as follows:

```html
<alp-form-container>
    form content
</alp-form-container>
```

## AlpFormDivider

This component is a simple *divider* used to separate *sections* in a form. 

It accepts a single `prop` : `name` which is used to display the *name of the section*.

This can be used as follows:

```html
<alp-form-divider name="Create Contact" />
```

## DateField

This component is a reusable input field component that allows users to select a date using a *date picker*. This component integrates with [VeeValidate](key-libraries.md#veevalidate) for form validation purposes.

This can be used as follows:

```html
<date-field
    placeholder="Received Date"
    name="receivedDate"
    rules="required"
/>
```

#### Props:
- `name` (`string`) : The name of the input field. ***Required***
- `placeholder` (`string`) : The placeholder text for the input field.
- `rules` (`string` or `object`) : Validation rules for the input field using [VeeValidate](key-libraries.md#veevalidate).

#### Events:
- `create`: Triggered when the user selects a date.
- `cancel`: Triggered when the user cancels the date selection.

## EditorField
This component is a custom input field that uses the [`Editor`](components-input.md#editor) component to provide a rich text editing experience. It allows the user to enter and edit formatted text, such as `headings`, `lists`, `bold` and `italic` text, and more.

The `editorField` component can be used anywhere in the application where a text input is required. It can be used in forms for creating or editing content, as well as in other areas where formatted text input is required.

```html
<editor-field name="description" rules="required" />
```
#### Props:

- `name` (`String`) : The name of the field. ***Required***
- `rules` (`String` or `Object`) : The validation rules for the field.
- `editable` (`Boolean`) : Whether the field is editable or read-only. Default: `true`

#### Events:

- `create`: Event emitted when the user creates new content.
- `cancel`: Event emitted when the user cancels the operation.

## FieldLabel

This component is a label component that can be used with form input fields. It can display the `name` of the field, a `label` and an *optional* `icon button`. 

The fieldLabel component is used by placing it before an input field that needs a label. 

:::danger Pending
Insert User View screen shot
:::

This can be used as follows:

```html
<field-label name="Email" :isRequired="true">
    <v-field
        type="text"
        placeholder="Email"
        name="email"
        rules="email|required"
      />
    <error-message class="error-message" name="email" />
</field-label>
```

#### Props:

- `name` (`string`) : The name of the field. ***Required***
- `label` (`string`) : Additional label to display alongside the field name.
- `labelColor` (`string`) : The color of the label.
- `isShowButton` (`boolean`) : If an icon button is shown or not. Default : `false`.
- `iconName` (`string`) : The name of the icon to display on the icon button. Using [`iconButton`](components-common.md#iconbutton) component.
- `iconSize` (`string`) : The size of the icon button. *Supported values*: `xs`, `sm`, `md`, `lg`, `xl`.
- `isRequired` (`boolean`) : Whether the field is required or not. Default : `false`.

## MultiInputField

This component is a wrapper around the [`MultiInput`](components-input.md#multiinput) component and provides a form field that allows the user to input multiple values in a single input field. This component is particularly useful for handling inputs such as email addresses, tags, or keywords.

This can be used as follows:

```html
<multi-input-field
  name="emails"
  :value-rules="{ email: true }"
  placeholder="Enter an email address"
/>
```

#### Props:

- `name` (`string`) : name of the input field required
- `rules` (`string` or `object`) : *validation rules* for the input field
- `valueRules` (`string` or `object`) : *validation rules* for each value entered in the input field
- `placeholder` (`string`) : placeholder text for the input field
- `unique` (`boolean`) : whether duplicate values are allowed in the input field. Default: `true`

#### Event:
`update:modelValue` : emits when the input value changes.
