# Configuration

We store configuration variables outside of the code for security purposes and to allow the system to be reconfigured without needing to recompile the code. 

This is acheived using the configuration built into ASP.NET Core. You can read more about this [here](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/).

## Configuration Variables

### Authentication

- `Auth:Jwt:AccessTokenExpiration`

The expiration time of the access token in minutes.

- `Auth:Jwt:RefreshTokenExpiration`

The expiration time of the refresh token in days.

- `Auth:Jwt:Audience`

The audience for the generated JWT access token.

- `Auth:Jwt:Issuer`

The issuer for the generated JWT access token.

- `Auth:Jwt:Secret`

The secret used to sign the generated JWT access token.

- `Auth:RedirectUri`

The redirect uri used by the front end to retrieve an authorisation code from Microsoft. Used to retrieve an access token from Microsoft.

### Microsoft

- `MicrosoftGraph:TenantId`

The tenant id for the Microsoft organisation to be used for authorisation and Microsoft Graph requestes.

- `MicrosoftGraph:ClientId`

The client id for the Microsoft organisation to be used for authorisation and Microsoft Graph requestes.

- `MicrosoftGraph:ClientSecret`

The client secret for the Microsoft organisation to be used for authorisation and Microsoft Graph requestes.

### Azure Storage

- `Azure:StorageAccount`

The storage account that documents and other files should be uploaded to.

- `Azure:StorageKey`

The storage key that can be used to access the storage account.

### Syntaq

- `Syntaq:Uri`

The url of the Syntaq tenant.

- `Syntaq:Token`

The token for authorising requests to the Syntaq tenant.

### Tika

- `Tika:Url`

The url of the Tika server. Used to extract text from documents and other files.

### SendGrid

- `SendGridApiKey`

The API key for SendGrid. Used for sending system emails.

### Metabase

- `Metabase:Url`

This is the url of the Metabase instance to be used for the integration (embedding dashboards)

- `Metabase:Key`

This is the key/secret for the Metabase instance to be used for the integration (embedding dashboards)