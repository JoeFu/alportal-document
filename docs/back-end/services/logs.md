# Logs
## Logger Service
### LoggerService
This class implements the `ILoggerService` interface, which likely defines additional methods for logging operations (not provided in this code snippet). The `LoggerService` class has two main dependencies injected, `IMapper` and `ALPDbContext`, used for mapping log input models to log entity models and accessing the database, respectively.

### GetAlpLogs
This method retrieves ALP logs based on the provided `LogFilterInput` filters. It first constructs the initial query using the `ALPDbContext.AlpLogs` entity set. Then, it applies filtering conditions based on the search string, start date, end date, service name, and log level provided in the `filters` parameter. The logs are paginated using `ToPaginatedDtoAsync` method from the `_mapper` instance, which maps the log entity models to `AlpLogsDto` DTO (Data Transfer Object) models that can be returned to the API consumer.

### CreateLogs
This method is responsible for creating a new ALP log based on the `AlpLogsInput` input model. It calculates the duration of the previous log (if any) and saves the log's entity to the database using the `_context.AlpLogs.AddAsync(logs)` and `_context.SaveChangesAsync()` calls. Before saving the log, it performs some checks and transformations on the `input` data, such as handling unrecognized binary file uploads and truncating the exception message if it exceeds 30 characters.

### AlpLogGetById
This method retrieves an individual ALP log based on the provided `id`. It maps the retrieved log entity model to an `AlpLogsDto` DTO model and returns it to the API consumer.



## Request Response Log Model
### IRequestResponseLogModelCreator
This interface defines a contract for creating a log model and obtaining the log string.

### IRequestResponseLogger
This interface defines a contract for a request-response logger, specifying a method to log the request-response log model.

### RequestResponseLogModelCreator
This class implements the `IRequestResponseLogModelCreator` interface and is responsible for creating an instance of `RequestResponseLogModel` and obtaining its JSON representation as a log string.

### RequestResponseLogger
This class implements the `IRequestResponseLogger` interface and provides the functionality to log the request-response log model using an `ILogger` instance. It allows logging at different log levels like LogTrace, LogInformation, LogWarning, and LogCritical.

### RequestResponseLoggerOption
This class holds configuration options for the `RequestResponseLogger`. It includes properties like `IsEnabled` (to enable or disable the logger), `Name` (a string identifier for the logger), and `DateTimeFormat` (a format string for formatting date and time in logs).


