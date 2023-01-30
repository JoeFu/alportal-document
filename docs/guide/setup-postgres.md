# Installing PostgreSQL

In order to run the application locally, you need to install PostgreSQL. You can download an installer from https://www.postgresql.org/download/.

A minimum version of Postgres 12 is required due to the reliance on generated columns. Prior versions will require adjusting the definition of models that use this and the migrations that establish the generated columns. This is used to support [full text search](https://www.npgsql.org/efcore/mapping/full-text-search.html?tabs=pg12%2Cv5) for more details.
