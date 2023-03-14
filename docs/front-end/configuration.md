# Configuration

The front-end of the app can make use of several configuration variables to control its behavior. These variables specify information that may change depending on the deployment scenario, e.g. **urls** and **keys**, to access different APIs.

Read more about the usage of environment variable and mode in ***Vite*** [here](https://vitejs.dev/guide/env-and-mode.html).

## Current Variables

###  `VITE_APP_API_ROOT`

This variable specifies the location of the back-end REST API. It is mainly used during development, when the front-end and back-end are run separately, it allows the front-end to make network requests to the back-end for enable easier tooling. 

In production, the front-end and back-end are hosted at the same location and this variable can be left blank, allowing network requests to be made to a relative location.

### `VITE_APP_AUTHORITY_URL`, `VITE_APP_AUTHORITY_CLIENT_ID`, `VITE_APP_CLIENT_BASE_URL`

These variables define the credentials necessary for the user to request access via Microsoft.

### `VITE_APP_GOOGLE_API_KEY`

This variable specifies the Google API Key that is used for accessing Google related services on the front end, specifically the Places API for searching and auto completing address details.

### `VITE_SYNTAQ_URL`, `VITE_SYNTAQ_TOKEN`

These variables define the credentials necessary for any SYNTAQ-related requests made from the front-end, currently used only for polling and downloading of SYNTAQ submissions.

## Package.json

This is a configuration file used for Node.js packages. It provides information about the package, such as its name, version, and dependencies.

The `name` field specifies the name of the package. The `version` field specifies the version number of the package. The `private` field, if set to true, prevents the package from being accidentally published to a public repository.

### Scripts

The `scripts` field defines commands that can be run with the package. 

For example,
> - `serve` script starts a development server on `port 8080` using the **Vite** build tool. 
> - `build` script creates a production build of the package, 
> - `test` script runs tests using the `vitest` command.

### Dependencies

The `dependencies` field lists the packages that the current package depends on. Each dependency has a name and a version range. 

For example, 

> `@vueuse/core`: `^9.3.0` specifies that the package depends on version 9.3.0 or higher.

### DevDependencies

The `devDependencies` field lists packages that are only needed for development, such as testing and build tools. These packages are not included in the production build of the package. 

For example, 

> `jest`: `^29.1.2` is a testing framework used only during development.

## tsconfig

This file specifies the compiler options and file inclusion/exclusion rules for **ALP**. 

Here is a breakdown of the configuration options:

1. `compilerOptions`: an object specifying compiler options such as the target output version of JavaScript, whether to emit source maps, and whether to allow certain experimental language features.

2. `include`: Specifies the files or patterns to include in the compilation. In this case, it includes all .ts, .tsx, and .vue files in the src and tests directories.

3. `exclude`: Specifies the files or patterns to exclude from compilation.
