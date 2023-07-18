# Swagger

## API Explorer Group Convention
### Apply
Applies the API versioning convention to the specified `ControllerModel`, setting the `ApiExplorer.GroupName` property based on the API version extracted from the controller's namespace.

## JSON Patch Document Filter
### Apply
Applies a filter to the `OpenAPI` document, updating the schema definitions for `JsonPatchDocument` and `Operation`, and ensuring that the correct references are set for `application/json-patch+json` request bodies in PATCH operations.

## Swagger Enum Parameter Filter
### Apply
Applies a filter to the `OpenAPI` parameter, updating the schema and adding `enum` information if the parameter type is an `enum` or an `enumerable` of `enums`.

### AddEnumSpec
Adds the `enum` schema and `enum` names as extensions to the `OpenAPI` parameter for an `enumerable` of `enum` types.

### AddEnumParamSpec
Adds the `enum` schema and `enum` names as extensions to the `OpenAPI` parameter for a single `enum` type.

## Swagger Enum Schema Filter
### Apply
Applies a filter to the `OpenAPI` schema, adding the `enum` names as an extension if the schema type is an `enum` and the extension does not already exist.

## Swagger Operation Filter
### Apply
Applies a filter to the `OpenAPI` operation, updating the schema for parameters with `enum` types, ensuring correct handling of `enums` in API operations.

## Swagger Operation ID Filter
### Apply
Applies a filter to the `OpenAPI` operation, setting a friendly and standardized operation `ID` based on the HTTP method and the parameters of the API endpoint.`