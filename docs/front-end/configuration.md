# Configuration

The front-end of the app can make use of several configuration variables to control its behavior. These variables specify information that may change depending on the deployment scenario, e.g. **urls** and **keys**, to access different APIs.

Read more about the usage of environment variable and mode in ***Vite*** [here](https://vitejs.dev/guide/env-and-mode.html).

## Currenet Variables

###  `VITE_APP_API_ROOT`

This variable specifies the location of the back-end REST API. It is mainly used during development, when the front-end and back-end are run separately, it allows the front-end to make network requests to the back-end for enable easier tooling. 

In production, the front-end and back-end are hosted at the same location and this variable can be left blank, allowing network requests to be made to a relative location.

### `VITE_APP_AUTHORITY_URL`, `VITE_APP_AUTHORITY_CLIENT_ID`, `VITE_APP_CLIENT_BASE_URL`

These variables define the credentials necessary for the user to request access via Microsoft.

### `VITE_APP_GOOGLE_API_KEY`

This variable specifies the Google API Key that is used for accessing Google related services on the front end, specifically the Places API for searching and autocompleting address details.

### `VITE_SYNTAQ_URL`, `VITE_SYNTAQ_TOKEN`

These variables define the credentials necessary for any SYNTAQ-related requests made from the front-end, currently used only for polling and downloading of SYNTAQ submissions.


