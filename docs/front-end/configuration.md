# Configuration

We can define variables that can be used when building the front end. Typically this is information that can change depending on a variety of different factors, e.g. urls and keys.

- `VUE_APP_API_ROOT`

The location of the back end REST API. This currently mainly used for the development scenario, where the front-end is run separately from the back end so that tooling can be used more easily. For the current production scenario, the front end and back end are hosted at the same location and this can be left blank, i.e. network requests can be made to a relative location.

- `VUE_APP_AUTHORITY_URL`, `VUE_APP_AUTHORITY_CLIENT_ID`, `VUE_APP_CLIENT_BASE_URL`

This defines the variables that are used for the user to request access via Microsoft.

- `VUE_APP_GOOGLE_API_KEY`

This defines the Google API Key that is used for accessing Google related services on the front end. Currently this only includes accessing the Places API to search and auto fill address details.

- `VUE_APP_SYNTAQ_URL`, `VUE_APP_SYNTAQ_TOKEN`

This defines the SYNTAQ details for any SYNTAQ related requests made from the front end. Currently this is only used for handling the polling and downloading of SYNTAQ submissions.