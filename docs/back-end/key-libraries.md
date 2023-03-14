# Key Libraries

## Entity Framework Core / Npgsql

[Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/) is being used as the ORM for the application, leveraging the [Npgsql](https://www.npgsql.org/) project to add support for PostgreSQL.

## AutoMapper

Automapper is being used to map from database models to Data Transfer Objects (DTOs).

## Quartz .NET

[Quartz .NET](https://www.quartz-scheduler.net/) is being use to schedule and run background jobs.

The "industry standard" is HangFire, however, we experienced issues with jobs indefinitely stalling when used with PostgreSQL.

## SignalR

[SignalR](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr) is used to handle realtime communications.