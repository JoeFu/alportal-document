# Architecture / Project Structure

The application is built with ***Vue.js*** and follows a reasonably standard approach. 

While we use our customised Components, we do uses the standard ***Vue Router*** and ***Vuex*** libraries.

The following are file structure of the main folders and files that will be explained next.

```
📦src
 ┣   📂components
 ┣   📂composable
 ┣   📂network
 ┣   📂router
 ┣   📂store
 ┗   📂views
```

## Components

Components are the fundamental building blocks of a ***Vue.js*** application, and many other modern Single-Page Application (***SPA***) frameworks. They encapsulate the view, logic, and state required to operate a specific part of the page, making them reusable and modular.

```
📦src
 ┣   📂components
 ┃   ┣   📂common
 ┃   ┣   📂forms
 ┃   ┣   📂inputs
 ┗   ┗   📂ui
```

Components can be categorized into several types, including:

#### [Common components](./components-common.md)

> These are basic components that is frequently used in the system and by other components.

#### [Forms components](./components-form.md)

> These components are specifically designed to be used in the context of a `form`. In the current application, this means that these components are capable of managing state correctly for a [VeeValidate](https://vee-validate.logaretm.com/v4/) form context.

#### [Inputs components](./components-input.md)

> These components handle input from the user and may include text fields, dropdowns, or other forms of input. They often have custom styling and/or logic.

#### UI components
> - [Admin](./components-ui-admin.md)
> - [User](./components-ui-user.md)

> These components are designed for specific views and may be reused within similar views, or simply extracted to improve the code structure.

Further details about these can be found in the code files and under the components section that follows.

## Composable

The composition API is a new feature that was introduced in ***Vue 3***. This allows for logic to be encapsulated in a function that can subsequently be reused throughout the system rather than being constrained to a single component.

We have a few composable functions extracted, and they can be found in the `/App/src/composable` folder. 

```
📦src
 ┣   📂composable
 ┗   ┗   ...
```

Further details about these can be found in the code files and [here](/front-end/composable).

## Network

Network is an **important** part of the application, it is the communication layer between the *front-end application* and the *back-end server*. It involves the handling of `HTTP requests` and `responses`, `APIs`, and any other protocol that allows the exchange of data between the front-end and back-end.

It deals with the management of the flow of data and ensuring that the application remains responsive and scalable in the face of varying network conditions.

```
📦src
 ┣   📂network
 ┗   ┗   ...
```

The folder includes files incharge of the network requests for internal APIs and 3rd party APIs such as [activeCampaingn](../back-end/external-services.md#active-campaign), [Xero](../back-end/external-services.md#xero) etc.

#### Example:

> For a `CalendarServiceProcy` in the `accounts-service-proxies.ts`, it is responsible for handling `requests` to a specific `URL`. 

> It has 4 methods called `getCalendarEvents`, `createCalendarEvent`, `updateCalendarEvent` and `deleteCalendarEvent`, which make `HTTP` `GET`, `POST`, `PUT` and `DELETE` requests respectively.

> The methods would parse contents according to the format expected by the API.

Further details about these can be found in the code files `/App/src/network`.

## Router

The router is a crucial aspect of the frontend architecture that manages and implements navigation between different pages and components within the application. 

Its main responsibility is to map URLs to specific components or pages, and to determine which component or page should be displayed based on the current URL. With the router, navigation within the application is made easier, allowing for navigation through history, or navigation to different pages and components.

In ***Vue.js***, the ***Vue Router*** library provides a convenient way to handle routing within the application, with a straightforward API for defining and managing routes.

The router includes a **verification process** for each routing request. This verification checks for both the user's permission and authentication status, ensuring secure navigation within the application.

**In addition**, the router in this application also includes handling for when a requested URL is [`notfound`](./components-common.md#notfound). In such cases, the router can redirect the user to a default "404 not found" page, providing a better user experience.

```
📦src
 ┣   📂router
 ┗   ┗   📜index.ts
```

For more information on the router in this application, refer to the `/App/src/router/index.ts` file as well as the official ***Vue Router*** documentation  [here](https://router.vuejs.org/).

::: danger TODO
Document common pitfalls and patterns for handling nested routes.
:::

## Vuex Store

The ***Vuex Store*** is a centralized state management tool for Vue.js applications. It allows for the management of application-level state and ensures that data is shared across all components of the application in a predictable manner.

The ***Vuex Store*** can be thought of as a global data store for the application, where data can be stored, retrieved, and updated. It is particularly useful for complex applications with multiple components, where data needs to be shared between different parts of the application.

The ***Vuex Store*** is also designed to be highly modular and extensible, so you can easily split up your store into multiple modules, each managing its own piece of state. This makes it easier to manage and maintain the store, especially as the application grows.

```
📦src
 ┣   📂store
 ┃   ┣   📜index.ts
 ┗   ┗   ...
```

For more information on ***Vuex Store*** in this application, you can refer to the `/App/src/store/index.ts` file as well as the official documentation of Vuex [here](https://vuex.vuejs.org/guide/).

::: danger TODO
Investigate approaches to simplifying store definitions.
:::

## Views

Views are the visual representations of the components in the application. They display the data that users interact with and provide the user interface.

These are the actual pages of the system that are presented to the user when navigating to and from different routes managed by the router. 

A view is usually composed of several of the [UI](#ui-components), [Forms](#forms-components) and [Inputs](#inputs-components) components, combined to create the complete representation of a page.

```
📦src
 ┣   📂views
 ┃   ┣   📂admin
 ┃   ┣   📂clients
 ┃   ┣   📂contacts
 ┃   ┣   📂emails
 ┗   ┗   ...
```

For more information on views in this application, you can refer to the `/App/src/views` directory.