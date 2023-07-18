# Common Controllers 
This page provides documentation for some of the <tomato>important and more frequently used</tomato> common controllers in the ALP application. 

Each controller has its own set of endpoints with specific functionalities. 


## Syntaq Controller
### Syntaq Controller
#### GetSyntaqAccessToken
Retrieve the Syntaq access token.
- **Endpoint:** `GET /api/syntaq/syntaq_access_token`


### Syntaq Form Controller
#### Sync
Synchronize Syntaq forms.
- **Endpoint:** `POST /api/syntaq/forms/sync`
- **Permissions Required:** `SyntaqFormEdit`

#### GetList
Retrieve a <blue>paginated</blue> list of Syntaq forms.
- **Endpoint:** `GET /api/syntaq/forms`
- **Permissions Required:** `SyntaqFormView`
- **Response Body:**
    ```json
    {
        "items": [
            {
                "formId": "f7c3af9b-c510-4298-8bf5-8eb4951266d9",
                "name": "ACD SA",
                "active": true,
                "id": 31
            },
            {
                "formId": "003c54ba-28f3-4566-9ee3-3b87300df6c5",
                "name": "Appointment of Enduring Guardian NSW",
                "active": true,
                "id": 27
            },
            ...
        ],
        "count": 44,
        "hasNext": false
    }
    ```

#### GetById
Retrieve a Syntaq form by ID.
- **Endpoint:** `GET /api/syntaq/forms/{id}`
- **Permissions Required:** `SyntaqFormView`
- **Request Body:** `GET /api/syntaq/forms/56`
- **Response Body:**
    ```json
    {
        "formId": "4fd442a4-5b0c-4ac0-9c0e-dd6a5084172f",
        "name": "EP Strategy Paper",
        "active": true,
        "id": 56
    }
    ```

#### GetSyntaqDocumentRecordsEmbed
Retrieve the Syntaq form document records.
- **Endpoint:** `GET /api/syntaq/forms/DocumentRecords`
- **Permissions Required:** `SyntaqFormView`

#### GetEmbed
Retrieve the embedded view of a Syntaq form by ID.
- **Endpoint:** `GET /api/syntaq/forms/{id}/embed`
- **Permissions Required:** `SyntaqFormView`

## Time Tracking Controller
### Matter Component TimeEntry Controller
#### GetList
Retrieves a list of time entries for a specific matter component.

- **Endpoint:** `GET api/matters/{id}/outcomes/{outcomeId}/components/{componentId}/time-entries`

### Matter TimeEntry Controller
#### GetList
Retrieve a <blue>paginated</blue> list of time entries for the matter itself.
- **Endpoint:** `GET /api/matters/{id}/time-entries/matter`

#### GetListForSales
Retrieve a <blue>paginated</blue> list of time entries for sales related to the matter.
- **Endpoint:** `GET /api/matters/{id}/time-entries/sales`

#### GetLastMatterTimeEntry
Retrieve the last recorded time entry for the matter.
- **Endpoint:** `GET /api/matters/{id}/time-entries/lastEntries`

### TimeEntry Controller
#### GetForSales
Retrieves a list of time entries for sales.
- **Endpoint:** `GET api/time-entries/sales`

#### GetForUser
Retrieves a list of time entries for a specific user.
- **Endpoint:** `GET api/time-entries/user`

#### GetForMatters
Retrieves a list of time entries for a specific matter.
- **Endpoint:** `GET api/time-entries/matter`

#### GetForProjects
Retrieves a list of time entries for a specific project.
- **Endpoint:** `GET api/time-entries/project`

#### GetStats
Retrieves statistics for time entries based on a set of filters.
- **Endpoint:** `GET api/time-entries/stats`

#### GetById
Retrieves a specific time entry by its ID.
- **Endpoint:** `GET api/time-entries/{id}`

#### Create
Creates a new time entry of a specified type.
- **Endpoint:** `POST api/time-entries`

#### Update
Updates a specific time entry by its ID and type.
- **Endpoint:** `PUT api/time-entries/{id}`

#### Patch
Partially updates a specific time entry by its ID and type using JSON Patch.
- **Endpoint:** `PATCH api/time-entries/{id}`

#### Delete
Deletes a specific time entry by its ID, type, and invoice ID.
- **Endpoint:** `DELETE api/time-entries/{id}`

### Timer Controller
#### GetList
Retrieves a list of timers.
- **Endpoint:** `GET api/timers`

#### Create
Creates a new timer.
- **Endpoint:** `POST api/timers`

#### GetById
Retrieves a specific timer by its ID.
- **Endpoint:** `GET api/timers/{id}`

#### Update
Updates a specific timer by its ID.
- **Endpoint:** `PUT api/timers/{id}`

#### Start
Starts a specific timer by its ID.
- **Endpoint:** `POST api/timers/{id}/start`

#### Pause
Pauses a specific timer by its ID.
- **Endpoint:** `POST api/timers/{id}/pause`

#### Stop
Stops a specific timer by its ID and creates a time entry.
- **Endpoint:** `POST api/timers/{id}/stop`

#### Delete
Deletes a specific timer by its ID.
- **Endpoint:** `DELETE api/timers/{id}`

## Xero Service Controller
### Xero Controller
#### SyncXeroContactbyClientId
Syncs a Xero contact by client ID.
- **Endpoint:** `POST api/Xero/sync-client-by-client-id/{clientId}`

#### GetAccessToken
Retrieves the Xero access token for a specific office ID.
- **Endpoint:** `GET api/Xero/token/{officeId}`

## ABN Lookup Controller
#### GetABNLookupbyABN
Retrieves ABN lookup information by ABN.
- **Endpoint:** `GET api/abnlookup/abn/{id}`

#### GetABNLookupbyACN
Retrieves ABN lookup information by ACN.
- **Endpoint:** `GET api/abnlookup/acn/{id}`

#### GetABNLookupbyName
Retrieves ABN lookup information by name.
- **Endpoint:** `GET api/abnlookup/byname/{name}`

#### GetABNLookupbyOrganisationId
Retrieves ABN lookup information by organisation ID.
- **Endpoint:** `GET api/abnlookup/byorganisationId/{OrganisationId}`

## AWSS3 Controller
::: warning Deprecate
:::
## Bug Report Controller
#### GetById
Retrieves a bug report by ID.
- **Endpoint:** `GET api/feedback/bugs/{id}`

#### GetList
Retrieves a <blue>paginated</blue> list of bug reports.
- **Endpoint:** `GET api/feedback/bugs`

#### Create
Creates a new bug report.
- **Endpoint:** `POST api/feedback/bugs`

#### Patch
Updates a bug report partially.
- **Endpoint:** `PATCH api/feedback/bugs/{id}`

#### Update
Updates a bug report completely.
- **Endpoint:** `PUT api/feedback/bugs/{id}`

#### Delete
Deletes a bug report.
- **Endpoint:** `DELETE api/feedback/bugs/{id}`

## Logs Controller
#### GetAlpLogs
Retrieves a <blue>paginated</blue> list of ALP logs based on the specified filters.
- **Endpoint:** `GET api/logs/getlogs`

#### AlpLogGetById
Retrieves an ALP log by ID.
- **Endpoint:** `GET api/logs/{id}/alplog`


## SharePoint Controller
#### GetToken
Retrieves the SharePoint token.
- **Endpoint:** `GET api/sharepoint`



<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>