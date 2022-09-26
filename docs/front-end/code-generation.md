# Code Generation

## NSwag

NSwag is a tool for generating code based on the Swagger definition of an API. The backend has been configured to provide this definition already.

The tools generates the boilerplate code required to query the endpoint and helps ensure that the API is called correctly.

The tool can be run using the `refresh.sh` script located in `ALP/App/nswag`. Running this will run the NSwag toolchain to regenerate the `service-proxies.ts` file in `ALP/App/network`.

::: tip
The script needs to be run with in a bash environment. This is available on Windows via Git bash or via WSL 2.
:::

::: tip Note
The script will also make some minor adjustments to the generated code to change how dates are handled by the service proxies. NSwag does not currently provide the ability to modify this via the available configurations.
:::

The backend has been configured to declare multiple Swagger definitions. As of the time of writing:

- Accounts
- CRM
- Documents
- Matters
- Offerings
- Projects
- Common

This groups similar functionality within separate Swagger documents. 

However, the primary reason for this is to reduce the size of the generated front-end service proxies by allowing for multiple files to be generated. Given the number of service endpoints, and the current lack of support for creating separate files by NSwag, the service proxies file was becoming prohibitively large. This significantly impacted compilation performance whenever a minor change to the service proxies was required.