# JwtAuthManager 
   
## RevokeRefreshToken
Revokes the specified refresh token for the user, called when logged out.
   
- **Parameters:**
   - `userId` (string): The unique identifier of the user.
   - `refreshToken` (string): The refresh token to be revoked.
   

## GenerateTokens
Generates an access token and a refresh token for the specified user and claims.
   
- **Parameters:**
   - `userId` (string): The unique identifier of the user.
   - `claims` (Claim[]): An array of claims to be included in the tokens.
   - `now` (DateTime): The current date and time.
   
- **Returns:**
   - A `JwtAuthResult` object containing the generated access token and refresh token.

## Refresh
Refreshes the access token using the provided refresh token and access token.
   
- **Parameters:**
   - `refreshToken` (string): The refresh token used for refreshing the access token.
   - `accessToken` (string): The access token to be refreshed.
   - `now` (DateTime): The current date and time.
   
- **Returns:**
   - A tuple containing the user ID as a string and a `JwtAuthResult` object containing the refreshed access token and refresh token.

## DecodeJwtToken
Decodes and validates the provided JWT token.
   
- **Parameters:**
   - `token` (string): The JWT token to be decoded and validated.
   - `validateLifetime` (bool): Determines whether to validate the token's lifetime. Default is `true`.
   
- **Returns:**
   - A tuple containing the `ClaimsPrincipal` representing the token's claims and the `JwtSecurityToken` object representing the decoded token.

## <green>Class: JwtAuthResult</green>

The `JwtAuthResult` class represents the result of JWT authentication.

## Properties

- `AccessToken` (string): The access token.
- `RefreshToken` (RefreshToken): The refresh token.

## <green>Class: RefreshToken</green>

The `RefreshToken` class represents a refresh token.

## Properties

- `UserId` (string): The user ID associated with the refresh token.
- `TokenString` (string): The refresh token string.
- `ExpireAt` (DateTime): The expiration date and time of the refresh token.

<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>