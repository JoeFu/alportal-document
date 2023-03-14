# Running ALP Locally

Now that you have set up your environment and have been granted access to the ALP repository, it is time to run the application on your local machine!

## Setup Database

### Quartz .NET

We are currently using [Quartz .NET](https://www.quartz-scheduler.net/) to handle our background tasks. Setting it up requires creating a database manually and running a script manually to set up the tables.

For the default set up, the database should be named `alp_quartz`. 
#### SQL script
The SQL script that needs to be run can be found [here](https://github.com/quartznet/quartznet/blob/master/database/tables/tables_postgres.sql).

Using pgAdmin from PostgreSQL to add the new database `alp_quartz`, then run the script mentioned above by 
> 1. Right-click the database in the object browser 
> 2. Select "Query Tool", opening a new query editor window, 
> 3. Paste or Load the [SQL script](#sql-script) mentioned above, 
> 4. Click the "Execute" button to run the script.

### Database Update

For ALP, database update may be run using the .NET Entity Framework Core tools. You can install the tools by following the instructions found [here](https://learn.microsoft.com/en-us/ef/core/cli/dotnet#installing-the-tools).

You may use them directly, which will involve specifying the directories explicitly. Alternatively you can use the `database.sh` script at the root of the project. This is a shortcut that passes in the required paths for you.

The update can be run using the following command:

``` bash
./database.sh database update
```
If the above bash code is not working in windows cmd, try this

``` bash
dotnet ef --project ALP.Data/ALP.Data.csproj --startup-project ALP/ALP.csproj database update

```

Replace 'database update' to any EFcore command if you wish do the EFcore operation.


The default configuration assumes that your database has been set up with the default settings and that your local Postgres server accepts the credentials: 

`username: postgres | password: postgres`

### Troubleshooting
If you have used other username and password for database servers, it can be changed in the `/ALP/ALP/appsetting.Development.json` file.


## Running the Backend

The RESTful API can be started by simply running the project using Visual Studio by opening the solution file `.sln`; or via the dotnet toolchain in the command line.

:::tip
- You might face warning from backend when logged in with the following details, just press continue and you would successfully get into the system.
:::

## Running the Frontend

The Vue SPA project can be found at `/ALP/App` from the root of the project. It is located here as it is built and served by the RESTful API in a production scenario.

During development, you can run the project by navigating to `/ALP/App` folder, then:

- Install the required packages by running 
```
yarn install
```
- Run the application with 
```
yarn serve
```

:::tip
Please do use `http://localhost:8080` to login to program running locally instead of the `http://127.0.0.1:8080/`
:::

## Local Logging in

To login to the system when running locally, an admin user is initialised.

:::tip Log in
Username : `admin@example.com`

Password : `qwe123`

One-Time Passcode : Can be ***viewed*** and ***edited*** in **database table** 'alp/table/user_one_time_passwords'
:::
