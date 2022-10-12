# Key Libraries

::: warning Note

Updated at 2022 Q4

The main libraries basically support Vue3. In the selection of future libraries, we tend to choose a stable version that supports Vue3.
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

Updated at 2022 Q4

As of the time of writing, we are now using on v3.x of Tailwind CSS. If any issue with Tailwind, please check [Tailwind Blog](https://tailwindcss.com/blog) .

:::

## Luxon

This is the library being used to handle date related operations. Document can be found [here](https://moment.github.io/luxon/).

::: tip Note

Luxon does not support TypeScript typings as a first class citizen and relies on community contributions to keep these up to date. It is also not built to be modular and therefore it does not support tree shaking.

We may migrate to something else such as date-fns in the future which support these out of the box.

:::

## VeeValidate

This is used for front end form validation. Document can be found [here](https://vee-validate.logaretm.com/v4/).

## Tiny


TinyMCE gives you total control over your rich text editing. Either create a fully customized experience via the APIs or take advantage of the out-of-the-box enterprise-grade editor to build your next generation web app. The document can be found [here](https://www.tiny.cloud/).




