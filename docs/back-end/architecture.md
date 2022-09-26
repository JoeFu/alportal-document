# Architecture / Project Structure

The backend is composed of 3 projects and 1 test project. The details of these and the folders within them are detailed below.

## ALP.Data

This is the "Data" layer of the application and contains the definitions for the database models, the relationships between them and the migrations required to build the database for these models.

### EntityTypeConfigurations

This contains the definitions for the restrictions and relationships for the database models. These are written using the Fluent API approach.

### Migrations

This contains the migrations that are used to build the database.

### Models

This contains the definitions for the database models.

## ALP.Service

This is the "Service" layer of the application. It handles all communications to the database and any external services. It is intended to be used by the Web layer and any other application that requires access to the functions.

The folders in the project represent the various resources. These may be consolidated into more cohesive contexts as the application develops.

## ALP

This is the "Web" layer of the application. It handles all of the web related functions - authentication, authorisation, REST API, serving the front end.

Where reasonable, it does not interact directly with the database and/or external services. It delegates these to the Service Layer (ALP.Service).

### App

This contains the front end application, which is currently a Vue.js application.

While in production, the front end application is served by the ALP web layer, but in development it is recommended to run this separtely via command line.

### Controllers

This contains the API controllers for the application. They controllers are categorised into folders based on their function.

### Hubs

This contains the SignalR hubs used to communicate in real time with any listening clients.

### Middleware

This contains any middleware that may be defined for the application.

### Swagger

This contains any helpers for generating the Swagger documentation for the API.

## ALP.Tests