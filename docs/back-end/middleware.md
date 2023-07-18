# Middleware

## Authenticated User Middleware
Extracts the authenticated user's ID from claims and stores it in the AuthenticatedUser instance, allowing access to the user's ID across the application.
### AuthenticatedUserMiddleware
Constructor for the `AuthenticatedUserMiddleware` class, initializes the middleware with the next delegate in the pipeline.

### UserIdFromClaims
Extracts the user ID from the claims of the given `ClaimsPrincipal` object, returning it as a nullable integer.

### InvokeAsync
Main method of the middleware, sets the user ID extracted from claims into the `AuthenticatedUser` instance and calls the next middleware in the pipeline.

## Requested Response Logger Middleware
Logs incoming HTTP requests and outgoing responses, capturing request and response details, including headers, body, and exception information for debugging and monitoring purposes.
### RequestResponseLoggerMiddleware
Constructor for the `RequestResponseLoggerMiddleware` class, initializes the middleware with the next delegate, options, and a logger.

### InvokeAsync
Main method of the middleware, responsible for logging incoming requests and outgoing responses, as well as handling exceptions if any occur.

### LogError
Helper method to log error details (message and stack trace) in the provided `RequestResponseLogModel`.

### FormatHeaders
Formats the HTTP headers from the `IHeaderDictionary` object into a dictionary of key-value pairs.

### FormatQueries
Formats the HTTP query string into a list of key-value pairs.

### ReadBodyFromRequest
Reads and returns the body content of the incoming HTTP request as a string. It ensures that the request's body can be read multiple times (for subsequent middleware) and resets the stream position for further reading.