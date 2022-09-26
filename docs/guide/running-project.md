# Running the Project locally

Now that you have your environment set up, it's time to get the application running on your local machine!

## Setting up the database / Running the Database Migrations

### Quartz.NET

We are currently using Quartz.NET to manage our background tasks. Set up for this requires a database to be manually created and a script to be manually run to set up the tables.

For the default set up, the database should be named `alp_quartz`. The SQL script that needs to be run can be found [here](https://github.com/quartznet/quartznet/blob/master/database/tables/tables_postgres.sql).

### ALP

For ALP, database migrations may be run using the dotnet Entity Framework Core tools. You can install the tools by following the instructions found [here](https://docs.microsoft.com/en-us/ef/core/cli/dotnet).

You may use them directly, which will involve specifying the directories explicitly. Alternatively you can use the `database.sh` script at the root of the project. This is a shortcut that passes in the required paths for you.

The migrations can be run using the following command:

``` bash
./database.sh database update
```
If the above bash code is not working in windows cmd, try this

``` bash
dotnet ef --project ALP.Data/ALP.Data.csproj --startup-project ALP/ALP.csproj database update

```

Replace 'database update 'to any efcore command if you wish do the efcore operation.


The default configuration assumes that your database has been set up with the default settings and that your local Postgres server accepts the credentials: `user: postgres | pass: postgres`

## Running the RESTful API

The API can be started by simply running the project using Visual Studio or via the dotnet toolchain in the command line.

## Running the SPA

The Vue SPA project can be found at `/ALP/App` from the root of the project. It is located here as it is built and served by the RESTful API in a production scenario.

During development, you can run the project by navigating to it, then:

- Install the required packages by running `yarn install`
- Run the application with `yarn serve`