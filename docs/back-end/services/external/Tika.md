# Apache Tika

[Apache Tika](https://tika.apache.org/) is an open source library that supports the extraction of document text for a wide variety of document types. It is used by the back end to extract text from documents and emails collected by the system in order to improve the searchability of the files.

In essence, a server instance of Apache Tika has been deployed on Azure using the Docker definition made available by Apache as described [here](https://hub.docker.com/r/apache/tika). This exposes a REST API endpoint which accepts a file and returns the extracted text and other metadata.

We store and associate this extracted text with the documents and/or emails and create a generated column that generates a PostgreSQL `tsvector` of the extracted text. This can then be used in "full text search" style queries that Postgres/Npgsql [supports](https://www.npgsql.org/efcore/mapping/full-text-search.html).

## ExtractText
Queries the Apache Tika instance with the data stream and returns the processed text.
- **Parameters:**
    - `data`: The data stream to be processed.
- **Return:** `Task<string>`