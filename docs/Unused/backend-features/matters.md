# Matter Features

## Matters
## Contacts
### Get Contacts
#### Vue
Upon filling in all required fields and submitting by clicking "Sign in".

If all fields required is filled, `AuthStore.actions.LOGIN` is dispatched to the Vuex store, passing in the values object as a payload. 

As shown below from the `Login.vue`:
```ts
if (values.email && values.password && values.otp) {
    store.dispatch(AuthStore.actions.LOGIN, values)
}
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

As shown below from the `auth.ts`:
```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.

As shown below from the `accounts-service-proxies.ts`:
```ts
loginAccount(body?: LoginRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccount(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.

As shown below from the `AccountCointroller.cs`:
```ts
[HttpPost("login")]
public async Task<ActionResult<LoginResult>> Login([FromBody] LoginRequest request)
{
    // Validate Password
    if (!_accountService.ValidateCredentialsAsync(request.Email, request.Password).Result)
    {
        return Unauthorized();
    }

    var user = await _accountService.GetByEmail(request.Email);
    // Validate User Status
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var claims = new[]
    {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };

    // Validate One Time Passcode
    if (!_accountService.ValidateOneTimePasswordAsync(user.Email, request.Otp).Result)
    {
        return Unauthorized();
    }

    // Generate Token
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.

Example of code shown below from `JwtAuthManager.cs`.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.

### Get Contact by ID
#### Vue
Upon clicking the 'Get One Time Passcode', `ApiInfoStore.actions.GET_ONE_TIME_PASSWORD` is dispatched to the Vuex store.

As shown below:
```ts
store
    .dispatch(ApiInfoStore.actions.GET_ONE_TIME_PASSWORD, state)
    .then(()=>{
        state.isSendOPT=true;
        fireSuccessToast("One Time Password has been Requested, Allow up to 5 minutes to get it, the code only validate for 10 minutes");
    });
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the send OTP logic. 

```ts
[Store.actions.GET_ONE_TIME_PASSWORD]: async ({ commit, dispatch, state },{email}) => {
new ApiInfoServiceProxy().getOneTimePassword(
    new OTPRequest({
    email
    })

);
}
```

#### Service-Proxies
The service proxy takes the request from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
getOneTimePassword(body: OTPRequest): Promise<ApiInfo> {
    let url_ = this.baseUrl + "/api/account/login/get-otp";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{          
        body: content_,
        method: "POST",
        headers: {               
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processGetOneTimePassword(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email against the database and request to generate the OTP if valid user email.
```ts
[HttpPost("login/get-otp")]
public async Task<ActionResult<LoginOTP>> GetOneTimePassword([FromBody] OTPRequest request)
{            
    var user = await _accountService.GetByEmail(request.Email);
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var response = await _accountService.GenerateOneTimePassword(user);

    return Ok(response);
}
```
##### Service
Using `AccountService.cs` to generate an OTP, save it to the database and sent via email.
```ts
public async Task<string> GenerateOneTimePassword(UserDto user)
{

    Random OtpCode = new Random();
    String code = OtpCode.Next(0, 1000000).ToString("D6");

    _context.UserOneTimePasswords.Add(new UserOneTimePassword
    {
        UserId = user.Id,
        Email = user.Email,
        Code = code,
        RequestDevice = "Web",
        RequestIP = "",
        ExpiresAt = DateTime.UtcNow.AddMinutes(10),
    });

    // Save OTP to database
    await _context.SaveChangesAsync();

    List<string> to = new List<string>();
    to.Add(user.Email);
    
    await SendOTPEmail(
        new SendEmailInput
        {
            To = to,
            Subject= "AL Portal One Time Password",
            Body = body,
        }
        , null);
    return "success";
}
```

#### Returning

- `Success` under the service would be passed back to the controller and back till the client side.

### Get Contact by Matter
#### Vue
Upon clicking the Microsoft Icon, redirected to the microsoft link for authentication, expecting a response.

As shown below:
```ts
fetch(
`https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`
)
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
loginAccountMicrosoft(body?: LoginMicrosoftRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login/microsoft";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccountMicrosoft(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.
```ts
[HttpPost("login/microsoft")]
public async Task<ActionResult<LoginResult>> LoginMicrosoft([FromBody] LoginMicrosoftRequest request)
{
    if (!ModelState.IsValid)
    {
        return BadRequest();
    }
    
    var idClaims = await _microsoftLoginManager.ValidateIdToken(request.IdToken);
    var (accessToken, refreshToken) = await _microsoftLoginManager.ExchangeAuthCodeForToken(request.Code);
    var emailClaim = idClaims.FindFirstValue("preferred_username");
    var nameClaim = idClaims.FindFirstValue("name");

    var user = await _accountService.GetByEmail(emailClaim);
    if (user == null || !user.Active)
    {
        //user = await _accountService.CreateUser(new UserInput {Email = emailClaim, FirstName = nameClaim});

        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    await _accountService.UpdateMicrosoftRefreshToken(user.Id, refreshToken);
    
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };
    
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    // _logger.LogInformation($"User [{request.UserName}] logged in the system.");
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.



## Organisations
### Get Organisations
#### Vue
Upon filling in all required fields and submitting by clicking "Sign in".

If all fields required is filled, `AuthStore.actions.LOGIN` is dispatched to the Vuex store, passing in the values object as a payload. 

As shown below from the `Login.vue`:
```ts
if (values.email && values.password && values.otp) {
    store.dispatch(AuthStore.actions.LOGIN, values)
}
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

As shown below from the `auth.ts`:
```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.

As shown below from the `accounts-service-proxies.ts`:
```ts
loginAccount(body?: LoginRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccount(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.

As shown below from the `AccountCointroller.cs`:
```ts
[HttpPost("login")]
public async Task<ActionResult<LoginResult>> Login([FromBody] LoginRequest request)
{
    // Validate Password
    if (!_accountService.ValidateCredentialsAsync(request.Email, request.Password).Result)
    {
        return Unauthorized();
    }

    var user = await _accountService.GetByEmail(request.Email);
    // Validate User Status
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var claims = new[]
    {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };

    // Validate One Time Passcode
    if (!_accountService.ValidateOneTimePasswordAsync(user.Email, request.Otp).Result)
    {
        return Unauthorized();
    }

    // Generate Token
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.

Example of code shown below from `JwtAuthManager.cs`.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.

### Get Organisation by ID
#### Vue
Upon clicking the 'Get One Time Passcode', `ApiInfoStore.actions.GET_ONE_TIME_PASSWORD` is dispatched to the Vuex store.

As shown below:
```ts
store
    .dispatch(ApiInfoStore.actions.GET_ONE_TIME_PASSWORD, state)
    .then(()=>{
        state.isSendOPT=true;
        fireSuccessToast("One Time Password has been Requested, Allow up to 5 minutes to get it, the code only validate for 10 minutes");
    });
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the send OTP logic. 

```ts
[Store.actions.GET_ONE_TIME_PASSWORD]: async ({ commit, dispatch, state },{email}) => {
new ApiInfoServiceProxy().getOneTimePassword(
    new OTPRequest({
    email
    })

);
}
```

#### Service-Proxies
The service proxy takes the request from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
getOneTimePassword(body: OTPRequest): Promise<ApiInfo> {
    let url_ = this.baseUrl + "/api/account/login/get-otp";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{          
        body: content_,
        method: "POST",
        headers: {               
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processGetOneTimePassword(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email against the database and request to generate the OTP if valid user email.
```ts
[HttpPost("login/get-otp")]
public async Task<ActionResult<LoginOTP>> GetOneTimePassword([FromBody] OTPRequest request)
{            
    var user = await _accountService.GetByEmail(request.Email);
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var response = await _accountService.GenerateOneTimePassword(user);

    return Ok(response);
}
```
##### Service
Using `AccountService.cs` to generate an OTP, save it to the database and sent via email.
```ts
public async Task<string> GenerateOneTimePassword(UserDto user)
{

    Random OtpCode = new Random();
    String code = OtpCode.Next(0, 1000000).ToString("D6");

    _context.UserOneTimePasswords.Add(new UserOneTimePassword
    {
        UserId = user.Id,
        Email = user.Email,
        Code = code,
        RequestDevice = "Web",
        RequestIP = "",
        ExpiresAt = DateTime.UtcNow.AddMinutes(10),
    });

    // Save OTP to database
    await _context.SaveChangesAsync();

    List<string> to = new List<string>();
    to.Add(user.Email);
    
    await SendOTPEmail(
        new SendEmailInput
        {
            To = to,
            Subject= "AL Portal One Time Password",
            Body = body,
        }
        , null);
    return "success";
}
```

#### Returning

- `Success` under the service would be passed back to the controller and back till the client side.

### Get Organisation by Matter
#### Vue
Upon clicking the Microsoft Icon, redirected to the microsoft link for authentication, expecting a response.

As shown below:
```ts
fetch(
`https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`
)
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
loginAccountMicrosoft(body?: LoginMicrosoftRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login/microsoft";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccountMicrosoft(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.
```ts
[HttpPost("login/microsoft")]
public async Task<ActionResult<LoginResult>> LoginMicrosoft([FromBody] LoginMicrosoftRequest request)
{
    if (!ModelState.IsValid)
    {
        return BadRequest();
    }
    
    var idClaims = await _microsoftLoginManager.ValidateIdToken(request.IdToken);
    var (accessToken, refreshToken) = await _microsoftLoginManager.ExchangeAuthCodeForToken(request.Code);
    var emailClaim = idClaims.FindFirstValue("preferred_username");
    var nameClaim = idClaims.FindFirstValue("name");

    var user = await _accountService.GetByEmail(emailClaim);
    if (user == null || !user.Active)
    {
        //user = await _accountService.CreateUser(new UserInput {Email = emailClaim, FirstName = nameClaim});

        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    await _accountService.UpdateMicrosoftRefreshToken(user.Id, refreshToken);
    
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };
    
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    // _logger.LogInformation($"User [{request.UserName}] logged in the system.");
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.



## Clients
### Get Clients
#### Vue
Upon filling in all required fields and submitting by clicking "Sign in".

If all fields required is filled, `AuthStore.actions.LOGIN` is dispatched to the Vuex store, passing in the values object as a payload. 

As shown below from the `Login.vue`:
```ts
if (values.email && values.password && values.otp) {
    store.dispatch(AuthStore.actions.LOGIN, values)
}
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

As shown below from the `auth.ts`:
```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.

As shown below from the `accounts-service-proxies.ts`:
```ts
loginAccount(body?: LoginRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccount(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.

As shown below from the `AccountCointroller.cs`:
```ts
[HttpPost("login")]
public async Task<ActionResult<LoginResult>> Login([FromBody] LoginRequest request)
{
    // Validate Password
    if (!_accountService.ValidateCredentialsAsync(request.Email, request.Password).Result)
    {
        return Unauthorized();
    }

    var user = await _accountService.GetByEmail(request.Email);
    // Validate User Status
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var claims = new[]
    {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };

    // Validate One Time Passcode
    if (!_accountService.ValidateOneTimePasswordAsync(user.Email, request.Otp).Result)
    {
        return Unauthorized();
    }

    // Generate Token
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.

Example of code shown below from `JwtAuthManager.cs`.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.

### Get Client by ID
#### Vue
Upon clicking the 'Get One Time Passcode', `ApiInfoStore.actions.GET_ONE_TIME_PASSWORD` is dispatched to the Vuex store.

As shown below:
```ts
store
    .dispatch(ApiInfoStore.actions.GET_ONE_TIME_PASSWORD, state)
    .then(()=>{
        state.isSendOPT=true;
        fireSuccessToast("One Time Password has been Requested, Allow up to 5 minutes to get it, the code only validate for 10 minutes");
    });
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the send OTP logic. 

```ts
[Store.actions.GET_ONE_TIME_PASSWORD]: async ({ commit, dispatch, state },{email}) => {
new ApiInfoServiceProxy().getOneTimePassword(
    new OTPRequest({
    email
    })

);
}
```

#### Service-Proxies
The service proxy takes the request from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
getOneTimePassword(body: OTPRequest): Promise<ApiInfo> {
    let url_ = this.baseUrl + "/api/account/login/get-otp";
    url_ = url_.replace(/[?&]$/, "");
    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{          
        body: content_,
        method: "POST",
        headers: {               
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processGetOneTimePassword(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email against the database and request to generate the OTP if valid user email.
```ts
[HttpPost("login/get-otp")]
public async Task<ActionResult<LoginOTP>> GetOneTimePassword([FromBody] OTPRequest request)
{            
    var user = await _accountService.GetByEmail(request.Email);
    if (user == null || !user.Active)
    {
        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    var response = await _accountService.GenerateOneTimePassword(user);

    return Ok(response);
}
```
##### Service
Using `AccountService.cs` to generate an OTP, save it to the database and sent via email.
```ts
public async Task<string> GenerateOneTimePassword(UserDto user)
{

    Random OtpCode = new Random();
    String code = OtpCode.Next(0, 1000000).ToString("D6");

    _context.UserOneTimePasswords.Add(new UserOneTimePassword
    {
        UserId = user.Id,
        Email = user.Email,
        Code = code,
        RequestDevice = "Web",
        RequestIP = "",
        ExpiresAt = DateTime.UtcNow.AddMinutes(10),
    });

    // Save OTP to database
    await _context.SaveChangesAsync();

    List<string> to = new List<string>();
    to.Add(user.Email);
    
    await SendOTPEmail(
        new SendEmailInput
        {
            To = to,
            Subject= "AL Portal One Time Password",
            Body = body,
        }
        , null);
    return "success";
}
```

#### Returning

- `Success` under the service would be passed back to the controller and back till the client side.

### Get Client by Matter
#### Vue
Upon clicking the Microsoft Icon, redirected to the microsoft link for authentication, expecting a response.

As shown below:
```ts
fetch(
`https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`
)
```
#### Vuex
The Vuex store receives the action and triggers a mutation to update its state. 

The mutation then triggers a call to the appropriate service-proxies to perform the login logic. 

```ts
dispatch(UserStore.actions.GET_ME, null, { root: true });
dispatch(TimeEntryStore.actions.GET_TIMERS, null, { root: true });
dispatch(PermissionStore.actions.UPDATE_PERMISSIONS, null, {
  root: true
});
```

#### Service-Proxies
The service proxy takes the data from the store, formats and sends an HTTP request to the appropriate controller on the server.
```ts
loginAccountMicrosoft(body?: LoginMicrosoftRequest | undefined): Promise<LoginResult> {
    let url_ = this.baseUrl + "/api/account/login/microsoft";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_ = <RequestInit>{
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json-patch+json",
            "Accept": "text/plain"
        }
    };

    return this.transformOptions(options_).then(transformedOptions_ => {
        return this.http.fetch(url_, transformedOptions_);
    }).then((_response: Response) => {
        return this.processLoginAccountMicrosoft(_response);
    });
}
```
#### Controller
The controller receives the request, checks the user's email, password and one-time password (OTP) against the database.
```ts
[HttpPost("login/microsoft")]
public async Task<ActionResult<LoginResult>> LoginMicrosoft([FromBody] LoginMicrosoftRequest request)
{
    if (!ModelState.IsValid)
    {
        return BadRequest();
    }
    
    var idClaims = await _microsoftLoginManager.ValidateIdToken(request.IdToken);
    var (accessToken, refreshToken) = await _microsoftLoginManager.ExchangeAuthCodeForToken(request.Code);
    var emailClaim = idClaims.FindFirstValue("preferred_username");
    var nameClaim = idClaims.FindFirstValue("name");

    var user = await _accountService.GetByEmail(emailClaim);
    if (user == null || !user.Active)
    {
        //user = await _accountService.CreateUser(new UserInput {Email = emailClaim, FirstName = nameClaim});

        throw new Exception("Invalid user. Contact a system administrator for assistance.");
    }

    await _accountService.UpdateMicrosoftRefreshToken(user.Id, refreshToken);
    
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
    };
    
    var jwtResult = _jwtAuthManager.GenerateTokens(user.Id.ToString(), claims, DateTime.UtcNow);
    // _logger.LogInformation($"User [{request.UserName}] logged in the system.");
    return Ok(new LoginResult
    {
        UserId = user.Id.ToString(),
        AccessToken = jwtResult.AccessToken,
        RefreshToken = jwtResult.RefreshToken.TokenString
    });
}
```
##### JWT
Using `JwtAuthManager.cs` to generate a authentication token if the verification of the above information passes.
```ts
public JwtAuthResult GenerateTokens(string userId, Claim[] claims, DateTime now)
{
    var shouldAddAudienceClaim =
        string.IsNullOrWhiteSpace(claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Aud)
            ?.Value);
    var jwtToken = new JwtSecurityToken(
        _jwtTokenConfig.Issuer,
        shouldAddAudienceClaim ? _jwtTokenConfig.Audience : string.Empty,
        claims,
        expires: now.AddMinutes(_jwtTokenConfig.AccessTokenExpiration),
        signingCredentials: new SigningCredentials(new SymmetricSecurityKey(_secret),
            SecurityAlgorithms.HmacSha256Signature));
    var accessToken = new JwtSecurityTokenHandler().WriteToken(jwtToken);

    var refreshToken = new RefreshToken
    {
        UserId = userId,
        TokenString = GenerateRefreshTokenString(),
        ExpireAt = now.AddDays(_jwtTokenConfig.RefreshTokenExpiration)
    };
    
    _accountService.SetOrUpdateRefreshToken(int.Parse(userId), refreshToken.TokenString, refreshToken.ExpireAt);

    return new JwtAuthResult
    {
        AccessToken = accessToken,
        RefreshToken = refreshToken
    };
}
```

#### Returning

- JWT authentication token would be passed back to the controller, 
- then the controller packeges it as an HTTP response and send back to the service proxies
- The service proxy receives the response, and updates the state in the Vuex store based on the result
- Vue is automatically updated based on the changes to the state, which may include things like displaying error messages or redirecting the user to a different page.



## Offering

## Time Tracking

## Mail Register
