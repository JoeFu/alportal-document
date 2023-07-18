# Microsoft Login Manager
This page talks about the services behind Microsoft login for the APL.
For more on how its done, you can explore the Microsoft page [here](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc) talking about <green>OpenID Connect(OIDC)</green>.

![MicrosoftLoginDiagram](/backend/microsoftOpenID.svg)
## GetOpenIdConfig
Retrieves the OpenID configuration for Microsoft login.

## ValidateIdToken
Validates the provided ID token.
- **Parameter"** 
   - `idToken` (string): The ID token to be validated.


## ExchangeAuthCodeForToken
Exchanges the <tomato>authorization code from Microsoft</tomato> for <green>an access token and a refresh token from ALP system</green>.
- **Parameter"** 
   - `code` (string): The authorization code obtained during the authentication process.


<!-- ## <green>Class: OpenIdConfig</green>

The `OpenIdConfig` class represents the OpenID configuration for Microsoft login.

## Properties

- `JwksUri` (string): The URI for retrieving the JSON Web Key Set (JWKS) used for token validation.
- `TokenEndpoint` (string): The endpoint for exchanging authorization code for tokens.
- `Issuer` (string): The issuer of the tokens.

## <green>Class: TokenResponse</green>

The `TokenResponse` class represents the response containing the access token and refresh token.

## Properties

- `AccessToken` (string): The access token.
- `RefreshToken` (string): The refresh token. -->



<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
tomato { color: tomato }
</style>