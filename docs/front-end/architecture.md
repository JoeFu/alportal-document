# Architecture / Project Structure

The application is built with Vue.js and follows a reasonably standard approach. It uses the standard Vue Router and Vuex libraries.

## Components

Components are the building blocks of a Vue.js application, or most modern SPA frameworks for that matter. We won't go into detail here, but essentially a component is a reusable piece of the page. It encapsulates the view, logic and state required to operate that piece of the page.

Components are loosely categorised into categories:

- Common components
  - These are components that may be frequently used in the system and perhaps even by other components.
- Input components
  - These are components that accept or handle some input. Typically these are text fields, dropdowns or other forms of input. These typically have custom styling, or have custom logic, or a combination of both.
- Form components
  - These are components that are expected to be used in the context of a `form`. In the current application, this means that these components are capable of managing state correctly for a [VeeValidate](https://vee-validate.logaretm.com/v4/) form context.
- UI components
  - These are components for specific views; these may be reused within similar views, or simply needed to be extracted to improve the code.

## Composable

The composition API is a new feature that was introduced in Vue 3. This allows for logic to be encapsulated in a function that can subsequently be reused throughout the system rather than being constrained to a single component.

We have a few composable functions extracted, and they can be found in the `composable` folder. Further details about these can be found in the code files and [here](/front-end/composable)

## Router

This contains the router definitions.

::: danger TODO
Document common pitfalls and patterns for handling nested routes.
:::

## Store

This contains the store definitions.

::: danger TODO
Investigate approaches to simplifying store definitions.
:::

## Views

This contains the pages of the system that are routed to/from by the router. These are typically comprised of several components each.
