# Key Libraries

::: warning Note
Please note that Vue 3 is relatively new and while the code is largely backwards compatible, it features breaking changes compared to Vue 2. As a result, the majority of libraries in the ecosystem may not be compatible with the application as of the time of writing.

Efforts are being made by many of the popular libraries to support Vue 3.
:::

## TypeScript

TypeScript is used in this application, and helps avoid certain categories of errors. You can read more about TypeScript [here](https://www.typescriptlang.org/).

Vue historically has not had the best support for TypeScript. This has improved significantly as of Vue 3, but still has limitations.

## Vue Router

Vue Router is the standard routing library for projects that need it. Document can be found [here](https://router.vuejs.org/)

## Vuex

Vuex is the state management library used in this application. Document can be found [here](https://vuex.vuejs.org/).

::: tip Note

Currently TypeScript support in Vuex is limited. This is expected to improve in future versions.

[This issue](https://github.com/vuejs/vuex/issues/1831) is of particular interest in this context.

:::

## Tailwind CSS

We use Tailwind CSS for styling. Tailwind provides a collection of utilities exposed via classes that facilitates the rapid development of designs. Document can be found [here](https://tailwindcss.com/)

::: tip Note

As of the time of writing, we are still on v1 of Tailwind CSS due to built-in limitations of the Vue CLI configuration of Vue. Dependency upgrades to support this are tracked in this [issue](https://github.com/vuejs/vue-cli/issues/6064).

:::

## Luxon

This is the library being used to handle date related operations. Document can be found [here](https://moment.github.io/luxon/).

::: tip Note

Luxon does not support TypeScript typings as a first class citizen and relies on community contributions to keep these up to date. It is also not built to be modular and therefore it does not support tree shaking.

We may migrate to something else such as date-fns in the future which support these out of the box.

:::

## VeeValidate

This is used for front end form validation. Document can be found [here](https://vee-validate.logaretm.com/v4/).
