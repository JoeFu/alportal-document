# Deployment

## Where

Currently the application is hosted on Azure. There are several components:

- The ALP application is deployed as an Azure Web App by way of the Azure App Service platform. 
- The database is deployed on Azure using the Azure Database for PostgreSQL service.
- The Apache Tika instance is deployed as an Azure Web App by way of the Azure App Service platform

## Process

A number of workflows have been set up using GitHub actions.

- Automatic provisioning of "Release Notes" using the GitHub release feature 
  - When Pull Requests are successfully merged
- Automatic running of tests 
  - When Pull Requests are created
  - When commits are made that further contribute to an existing Pull Request
  - When commits are made to the Master branch
- Automatic deployment of latest changes
  - When a "Release" is published via GitHub
  - When a tag conforming to the format `v*` is pushed to the repository (`*` represents a wildcard value in this context)
- Automatic deployment of the latest documentation changes


Although there aren't any strict limitations, the currently development process is as follows:

- All changes should be made on a separate branch.
- Once changes are considered complete, they should be submitted as part of a pull request for review
- When a pull request is accepted and merged, they automatically form part of the release notes that are drafted on GitHub
  - Release notes can be categorised based on tags that are attached to pull requests. See the configuration defined at `.github/release-drafter.yml` and the documentation available [here](https://github.com/release-drafter/release-drafter) for more details.
- Release notes can then be published via the GitHub interface. This will automatically trigger a deployment cycle which will push the build to the Azure App Service.
  - This will also trigger a deployment of the documentation 

## Variables for Deployment

There two types of variables that can be define for the deployment:

### Build Variables

These will either be defined statically within the GitHub action definition, computed based on some state, or stored as a "Secret" that is accessible to GitHub actions.

As of the time of writing, the GitHub secrets include:

- ALP_AZURE_WEBAPP_PUBLISH_PROFILE
  - The profile provided by Azure that defines where and how the ASP.NET Core application should be deployed
- AUTHORITY_CLIENT_ID, AUTHORITY_URL, CLIENT_BASE_URL
  - Used by the front end. These are the variables for defining the endpoints and key for the user to request access via Microsoft.
- DOCS_AZURE_WEBAPP_PUBLISH_PROFILE
  - The profile provided by Azure for deploying the documentation (Currently using VuePress)
- GOOGLE_API_KEY
  - This is the key for accessing Google related services on the front end. Currently this is only used for requesting details from the Google Places API for searching and autofilling address details.
- SYNTAQ_TOKEN, SYNTAQ_URL
  - These are the URL and keys for accessing the Syntaq API

Generally these are the variables that are required by the front end to be available at build time as these are baked into the front end build. As can be seen in the GitHub actions definition, these will need to be loaded into the configuration as Environment Variables in order for them to be accessible to the build(s).

### Runtime Variables

These can be defined using the various methods explained [here](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0). For most cases, we are currently using the "Application Settings" option available for Azure Web Apps. This effectively makes the defined variables available to the application via Environment Variables, which the configuration automatically picks up.

Generally these are the configuration variables that are explained [here](/back-end/configuration), and have not already been defined as a build variable.

(Note that the configuration variables defined in Azure Application settings need to use `__` instead of `:` when defining the variable names, e.g. `Syntaq:Url` should be entered as `Syntaq__Url`)

## Running Database Migrations

Database migrations are not currently run via the Gitub action process. Database migrations should be run from a local machine by setting the appsettings to point to the production server.


# Migration from old AL Portal

The "ALP.Import" project is intended to facilitate the migration of data from the old AL Portal to the new version.

Essentially:

- It has a dependency on the ALP.Data project in order to access the database context for the new Portal
  - This correspondings to the "Default" connection string in the appsettings
- It has a scaffolded database context for the old Portal 
  - Details for scaffolding operation can be found [here](https://docs.microsoft.com/en-us/ef/core/managing-schemas/scaffolding)
  - This corresponds to the "Import" connection string in the appsettings

The import is generally intended to be run on a "fresh" database, however, some consideration has been made for re-running the migration should any issues occur (connection issues etc). (Note that currently the import of Offerings may present some challenges when re-running due to some conflicts with keys in Entity Framework.)

## Settings InsertedBy and InsertedAt

Currently in ALPDbContext there is a section of code that prevents the updating of the `InsertedById` and the `InsertedAt` fields as it either prevents or overwrites them. During normal operation this makes sense, however, for migrations, this is troublesome. 

See the `OnBeforeSaving` method in ALPDbContext for more details.

This code should be either commented out or otherwise disabled in order to allow for these fields to be updated.

## Local vs Remote

Due to latency and other factors, running the migration on a remote database may be rather time consuming. As such, it may make sense to run the migration on a local database, then backup and restore a copy of the result to the remote database.

