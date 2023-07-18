# API Controllers
This page outlines the API endpoints and usage instructions for the backend of the application.

The backend API is implemented using RESTful API controllers in ASP.NET.

<!-- The controllers are categorized as follows:

- [AccountController](#account-controller): Manages user authentication and account-related operations.
- [CalendarController](#calendar-controller): Handles calendar-related functionalities such as event creation, retrieval, and modification.
- [PermissionController](#permission-controller): Deals with managing permissions and access rights for users and roles.
- [RoleController](#role-controller): Handles role management, including role creation, assignment, and modification.
- [UserController](#user-controller): Manages user-related operations, including user creation, retrieval, and updates. -->

## Account Controllers

This section provides documentation for the account related controllers in the ALP application. 

Each controller has its own set of endpoints with specific functionalities. Please refer to the respective sections below for its uses and endpoints.

### Account Controller

The `AccountController` is a part of controller responsible for handling various account-related operations. This controller provides endpoints for user login, logout, token refresh, and Microsoft authentication. It allows users to authenticate themselves, manage their access tokens, and perform essential account actions.

- **Endpoint**: `/api/account`
- **Permission**: Authorized.

##### <green>Method: </green>Login

The `Login` method enables users to authenticate themselves by providing their email, password, and a one-time password ([OTP](#getonetimepassword)) for additional security.

- **Endpoint**: `POST /api/account/login`
- **Permission**: Public
- **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "P@ssw0rd",
        "otp": "123456"
    }
    ```
- **Response Codes**:
    - HTTP 200: Successful login
    - HTTP 400: Invalid request
    - HTTP 401: Unauthorized login
- **Response Body** (HTTP 200):
    ```json
    {
        "userId": "123",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

##### <green>Method: </green>GetOneTimePassword

This method generates a one-time password (OTP) for a user based on their email address. It is used for two-factor authentication purposes.

- **Endpoint**: `POST /api/account/login/get-otp`
- **Permission**: Public
- **Request Body**:
    ```json
    {
        "email": "user@example.com"
    }
    ```
- **Response Codes**:
    - HTTP 200: OTP generation successful
    - HTTP 400: Invalid request
- **Response Body** (HTTP 200):
    ```json
    {
        "email": "user@example.com",
        "otp": "123456",
        "status": true
    }
    ```

##### <green>Method: </green>LoginMicrosoft

The `LoginMicrosoft` method handles the authentication process using a Microsoft account. It validates the provided Microsoft ID token and code, retrieves the user's email and name, and performs necessary account operations.

- **Endpoint**: `POST /api/account/login/microsoft`
- **Permission**: Public
- **Request Body**:
    ```json
    {
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE...",
        "code": "abc123"
    }
    ```
- **Response Codes**:
    - HTTP 200: Successful login
    - HTTP 400: Invalid request
    - HTTP 401: Unauthorized login
- **Response Body** (HTTP 200):
    ```json
    {
        "userId": "123",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

##### <green>Method: </green>Logout

Users can initiate a logout operation by invoking the `Logout` method. It revokes the user's refresh token, ensuring that their session is terminated securely.

- **Endpoint**: `POST /api/account/logout`
- **Permission**: Authorized
- **Request Body**:
    ```json
    {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
- **Response Codes**:
    - HTTP 200: Successful logout
    - HTTP 400: Invalid request
    - HTTP 401: Unauthorized logout

##### <green>Method: </green>RefreshToken

The `RefreshToken` method allows users to refresh their access tokens. It verifies the validity of the provided refresh token and access token. 

If both tokens are valid, a new access token is generated, and the response contains the updated access token and refresh token. 

If the tokens are invalid or expired, an HTTP 401 Unauthorized response is returned, indicating that the client needs to redirect the user to the login page.

- **Endpoint**: `POST /api/account/refresh-token`
- **Permission**: Public
- **Request Body**:
    ```json
    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
- **Response Codes**:
    - HTTP 200: Successful token refresh
    - HTTP 400: Invalid request
    - HTTP 401: Unauthorized token refresh
- **Response Body** (HTTP 200):
    ```json
    {
        "userId": "123",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```




### Calendar Controller
The `CalendarController` manages calendars and provides endpoints for retriving and creating new calendar events.
- **Endpoint**: `/api/[controller]`
- **Permissions**: Authorized.
##### <green>Method: </green>GetEvents

The `GetEvents` method retrieves calendar events based on the specified time filters passed in parameter.

- **Endpoint**: `GET /api/calendar`
- **Permissions**: Requires `CalendarView` permission.
- **Request Parameter**:
    ```http
      GET /api/calendar?FromTime=2023-05-01&ToTime=2023-05-31
    ```
- **Response Codes**:
  - HTTP 200: Returns a list of calendar events.
- **Response Body** (HTTP 200):
    ```json
    [
    {
        "id": "string",
        "startTime": "2023-05-16T03:47:28.567Z",
        "endTime": "2023-05-16T03:47:28.567Z",
        "isAllDay": true,
        "locationName": "string",
        "subject": "string"
    },
    {
        "id": "string",
        "startTime": "2023-05-16T03:47:28.567Z",
        "endTime": "2023-05-16T03:47:28.567Z",
        "isAllDay": true,
        "locationName": "string",
        "subject": "string"
    }
    //......
    ]
    ```

##### <green>Method: </green>CreateEvent

The `CreateEvent` method allows users to create a new calendar event.

- **Endpoint**: `POST /api/calendar`
- **Permissions**: Requires `CalendarView` permission.
- **Request Body**:
    ```json
    {
    "id": "string",
    "startTime": "2023-05-16T03:54:54.858Z",
    "endTime": "2023-05-16T03:54:54.858Z",
    "isAllDay": true,
    "locationName": "string",
    "subject": "string"
    }
    ```
- **Response Codes**:
  - HTTP 200: The calendar event was successfully created.
  - HTTP 400: Invalid request data.
  - HTTP 401: Unauthorized access.
- **Response Body**: None

##### <green>Method: </green>UpdateEvent

The `UpdateEvent` method allows users to update an existing calendar event with a event id.

- **Endpoint**: `PUT /api/calendar/{id}`
- **Permissions**: Requires `CalendarView` permission.
- **Parameters**:
  - `{id}`: The ID of the calendar event to be updated.
- **Request Body**:
    ```json
    {
    "id": "string",
    "startTime": "2023-05-16T03:54:54.858Z",
    "endTime": "2023-05-16T03:54:54.858Z",
    "isAllDay": true,
    "locationName": "string",
    "subject": "string"
    }
    ```
- **Response Codes**:
  - HTTP 200: The calendar event was successfully updated.
  - HTTP 400: Invalid request data.
  - HTTP 401: Unauthorized access.
  - HTTP 404: The specified calendar event was not found.
- **Response Body**: None



##### <green>Method: </green>DeleteEvent

The `DeleteEvent` method allows users to delete a calendar event based on a event id.

- **Endpoint**: `DELETE /api/calendar/{id}`
- **Permissions**: Requires `CalendarView` permission.
- **Parameters**:
  - `{id}`: The ID of the calendar event to be deleted.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: The calendar event was successfully deleted.
  - HTTP 401: The calendar event was not found.
  - HTTP 403: The user is not authorized to delete the calendar event.
- **Response Body**: None

### Permission Controller

The `PermissionController` manages permissions and provides endpoints for retrieving permissions.
- **Endpoint**: `/api/permissions`
- **Permissions**: Authorized.

##### <green>Method: </green>MyList

The `MyList` method retrieves the list of permissions assigned to the currently authenticated user.

- **Endpoint**: `GET /api/permissions/me`
- **Permissions**: Authorized
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Returns the list of permissions for the user.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  [
    "Permission1",
    "Permission2",
    ...
  ]

##### <green>Method: </green>GetList

The `GetList` method retrieves the complete list of available permissions.

- **Endpoint**: `GET /api/permissions`
- **Permissions**: Requires `PermissionsView` permission.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Returns the list of permissions.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  [
    "Permission1",
    "Permission2",
    ...
  ]

### Role Controller

The `RoleController` allows users to retrieve role information, create new roles, update existing roles, delete roles, and manage permissions for roles.

- **Endpoint**: `/api/roles`
- **Permissions**: Authorized.

##### <green>Method: </green>GetList

Retrieves the list of available roles.

- **Endpoint**: `GET /api/roles`
- **Permissions**: Requires `RolesView` permission.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Returns the list of roles.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  [
    {
      "id": 0,
      "name": "Admin",
      "isSystemAdmin": true,
      "isDefaultRole": false
    },
    {
      "id": 1,
      "name": "User01",
      "isSystemAdmin": false,
      "isDefaultRole": true
    },
    ...
  ]
  ```

##### <green>Method: </green>Create

Creates a new role.

- **Endpoint**: `POST /api/roles`
- **Permissions**: Requires `RolesCreate` permission.
- **Request Body**:
  ```json
  {
    "id": "2",
    "name": "NewRole",
    "isDefaultRole": false
  }
  ```
- **Response Codes**:
  - HTTP 200: Returns the created role.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  {
    "id": "2",
    "name": "NewRole",
    "isSystemAdmin": false,
    "isDefaultRole": false
  }
  ```

##### <green>Method: </green>GetById

Retrieves a role by its ID.

- **Endpoint**: `GET /api/roles/{id}`
- **Permissions**: Requires `RolesView` permission.
- **Parameters**:
  - `id` (integer): ID of the role to retrieve.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Returns the role with the specified ID.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  {
    "id": "0",
    "name": "Admin",
    "isSystemAdmin": true,
    "isDefaultRole": false
  }
  ```
##### <green>Method: </green>Update

Updates an existing role.

- **Endpoint**: `PUT /api/roles/{id}`
- **Permissions**: Requires `RolesEdit` permission.
- **Parameters**:
  - `id` (integer): ID of the role to update.
- **Request Body**:
  ```json
  {
    "id": "1",
    "name": "UpdateRole",
    "isDefaultRole": false
  }
- **Response Codes**:
  - HTTP 200: Returns the updated role.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  {
    "id": "1",
    "name": "UpdateRole",
    "isSystemAdmin": false,
    "isDefaultRole": false
  }
  ```

##### <green>Method: </green>Patch

Partially updates an existing role using JSON Patch.

- **Endpoint**: `PATCH /api/roles/{id}`
- **Permissions**: Requires `RolesEdit` permission.
- **Parameters**:
  - `id` (integer): ID of the role to update.
- **Request Body**:
  ```json
  [
    {
      "op": "replace",
      "value": "PatchedRole",
      "path": "/roleName"
    }
  ]
- **Response Codes**:
  - HTTP 200: Returns the updated role.
  - HTTP 400: Bad request if the patch operation fails.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  {
    "id": "2",
    "name": "name",
    "isSystemAdmin": false,
    "isDefaultRole": false
  }
  ```

##### <green>Method: </green>Delete

Deletes a role.

- **Endpoint**: `DELETE /api/roles/{id}`
- **Permissions**: Requires `RolesDelete` permission.
- **Parameters**:
  - `id` (integer): ID of the role to delete.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Successful deleting.
  - HTTP 204: No content.
  - HTTP 401: Unauthorized access.

##### <green>Method: </green>GetPermissions

Retrieves the list of permissions assigned to a role.

- **Endpoint**: `GET /api/roles/{id}/permissions`
- **Permissions**: Requires `RolesView` and `PermissionsView` permissions.
- **Parameters**:
  - `id` (integer): ID of the role to retrieve permissions for.
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Returns the list of permissions for the specified role.
  - HTTP 401: Unauthorized access.
- **Response Body** (HTTP 200):
  ```json
  [
    "Permission1",
    "Permission2",
    ...
  ]

##### <green>Method: </green>SetPermissions

Sets the list of permissions for a role.

- **Endpoint**: `POST /api/roles/{id}/permissions`
- **Permissions**: Requires `RolesEdit` permission.
- **Parameters**:
  - `id` (integer): ID of the role to set permissions for.
- **Request Body**:
  ```json
  [
    "Permission1",
    "Permission2",
    ...
  ]
- **Response Codes**:
  - HTTP 200: Permissions successfully set for the role.
  - HTTP 401: Unauthorized access.


### User Controller
The `UserController` allows the administrative staff to edit user staff information, roles and more.

- **Endpoint**: `/api/users`
- **Permissions**: Authorized.
##### <green>Method: </green>Me
This method retrieves the current user's information including their unique id, email, first name, last name, full name (concatenation of first name and last name), profile picture URL, etc. The response body provides the user's information in the form of a `CurrentUserDto` object.

- **Endpoint**: `GET /api/me`
- **Permissions**: Authorized.
- **Parameters**: None
- **Request Body**: None
- **Response Codes**:
  - HTTP 200: Successful, and the current user's information is returned.
- **Response Body**:
  ```json
  {
    "id": 0,
    "email": "string",
    "contactNumber": "string",
    "firstName": "string",
    "lastName": "string",
    "profilePictureUrl": "string",
    "hasActiveTimer": true,
    "hasNotifications": true,
    "hasActiveDocument": true,
    "hasIncompleteReviewRequest": true,
    "hasUnacknowledgedCompletedReview": true,
    "invoicesAwaitingApproval": 0,
    "invoicesReadyForProcessing": 0,
    "fteLoad": 0,
    "billingRate": 0,
    "billablePercentage": 0,
    "pqy": 0,
    "remunerationIncSuper": 0,
    "admissionDate": "2023-05-16T06:27:43.170Z",
    "office": {
      ....
    },
    "address": {
      ....
    }
  }

##### <green>Method: </green>PatchMe
This method allows the current user to update their own information by sending a JSON PATCH request to the endpoint with the desired changes in the request body.

- **Endpoint**: `PATCH /api/me`
- **Permissions**: Requires the user to have the `ContactEdit` permission.
- **Parameters**: None
- **Request Body**:
    ```json
    [
      {
        "op": "replace",
        "value": "newLastName",
        "path": "lastName"
      }
    ]
    ```
- **Response Codes**:
  - HTTP 200 OK: Patch successful, and the current user's information has been updated.
  - HTTP 400 Bad Request: The request is invalid or contains errors. The response body will provide details about the errors.
  - HTTP 409 Conflict: The requested change conflicts with an existing contact.
- **Response Body**: None


##### <green>Method: </green>GetLoggedInUser

This method retrieves the logged-in user's information in a formatted manner.

- **Endpoint**: `GET /api/me/formatted`
- **Permissions**: Authorized.
- **Parameters**: None
- **Request Body**: None
- **Response Codes**:
  - HTTP 200 OK: The request was successful, and the logged-in user's formatted information is returned.
- **Response Body**:
  ```json
  {
    "id": 0,
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "billingRate": 0,
    "profilePictureUrl": "string",
    "contactNumber": "string",
    "active": true,
    "office": {
      ...
    },
    "isLegal": true,
    "isStaff": true,
    "address": {
      ...
    }
  }
  ```

##### <green>Method: </green>UploadMeProfilePicture
Uploads a new profile picture for the current user.

- **Endpoint**: `GET /api/me/profilePicture`
- **Permissions**: Authorized.
- **Parameters**: None
- **Request Body**: Form data with the profile picture file
- **Response Codes**:
  - HTTP 200 OK: The upload was successful.
- **Response Body Example**: None

##### <green>Method: </green>GetList

Retrieves a <blue>paginated</blue> list of users based on the provided filters.

- **Endpoint**: GET `/api/users`
- **Permission**: Authorized.
- **Parameters**: 
  - `UserFilterInput` query parameters
  ```http
    GET /api/users?Active=true&IsRequiredBillingRate=true
  ```
- **Request Body**: None
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
- **Response Body**:
  ```json
  {
    "items": [
      {
        "id": 0,
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "fullName": "string",
        "billingRate": 0,
        "profilePictureUrl": "string",
        "contactNumber": "string",
        "active": true,
        "office": {
          ...
        },
        "isLegal": true,
        "isStaff": true,
        "address": {
          ...
        }
      }
    ],
    "count": 0,
    "hasNext": true
  }
  ```

##### <green>Method: </green>Create
Creates a new user with the provided information. 

- **Endpoint**: `POST /api/users`
- **Permission**: Requires `UsersCreate` permission
- **Parameters**: None
- **Request Body**:
  ```json
  {
    "id": 0,
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "officeId": 0,
    "password": "string",
    "address": {
      "address1": "string",
      "address2": "string",
      "suburb": "string",
      "state": "string",
      "postcode": "string",
      "country": "string"
    }
  }
  ```
- **Response Codes**:
  - HTTP 200 OK: The user was created successfully.
  - HTTP 403 Forbidden: The user creation is not allowed for the current user.
- **Response Body**: None
 
##### <green>Method: </green>GetPermittedReviewerList

Retrieves a <blue>paginated</blue> list of permitted reviewers based on the provided `offeringIds` and additional filters. 

- **Endpoint**: `GET /api/users/reviewers`
- **Permission**: Authorized.
- **Parameters**:
  - `offeringIds` (query parameter): An array of integers representing the offering IDs.
  - `filters` (query parameter): Additional filters for the user list incloding `Active`, `IsRequireBillingRate`, etc.
  ```http
    GET /api/users/reviewers?offeringIds=1&offeringIds=2&offeringIds=3&Active=true&IsRequireBillingRate=false
  ```
- **Request Body**: None
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
- **Response Body**:
  ```json
  {
    "items": [
      {
        "id": 0,
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "fullName": "string",
        "billingRate": 0,
        "profilePictureUrl": "string",
        "contactNumber": "string",
        "active": true,
        "office": {
          ...
        },
        "isLegal": true,
        "isStaff": true,
        "address": {
          ...
        }
      },
      {
        "id": 1,
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "fullName": "string",
        "billingRate": 0,
        "profilePictureUrl": "string",
        "contactNumber": "string",
        "active": true,
        "office": {
          ...
        },
        "isLegal": true,
        "isStaff": true,
        "address": {
          ...
        }
      }
    ],
    "count": 0,
    "hasNext": true
  }
  ```

##### <green>Method: </green>GetById
- **Endpoint:** `GET /api/users/{id}`
- **Permission:** Authorized.
- **Parameters:**
  - `id` (path parameter): The ID of the user to retrieve.
  ```http
    GET /api/users/11
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 404 Not Found
- **Response Body:**
  ```json
  {
    "id": 11,
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "contactNumber": "string",
    "active": true,
    "billingRate": 0,
    "isLegal": true,
    "isStaff": true,
    "lastLogin": "2023-05-23T01:50:59.785Z",
    "addressId": 0,
    "postalAddressId": 0,
    "dateOfBirth": "2023-05-23T01:50:59.785Z",
    "photo": "string",
    "proposalPhoto": "string",
    "salutation": 0,
    "secondEmail": "string",
    "admissionDate": "2023-05-23T01:50:59.785Z",
    "office": {
      ...
    },
    "pqy": 0,
    "pqe": 0,
    "address": {
      "id": 0,
      "address1": "string",
      "address2": "string",
      "suburb": "string",
      "state": "string",
      "postcode": "string",
      "country": "string"
    },
    "address1": "string",
    "address2": "string",
    "suburb": "string",
    "state": "string",
    "postcode": "string",
    "country": "string"
  }
  ```

##### <green>Method: </green>Patch
- **Endpoint:** `PATCH /api/users/{id}`
- **Permission:** Requires `UsersEdit` permission
- **Parameters:**
  - `id` (path parameter): The ID of the user to update.
  ```http
    PATCH /api/users/22
  ```
- **Request Body:**
  ```json
  [
    {
      "op": "replace",
      "path": "/FirstName",
      "value": "John"
    },
    {
      "op": "replace",
      "path": "/LastName",
      "value": "Doe"
    }
  ]
  ```
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 403 Forbidden
  - HTTP 404 Not Found
- **Response Body**:
  ```json
  {
    "id": 22,
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "contactNumber": "string",
    "active": true,
    "billingRate": 0,
    "isLegal": true,
    "isStaff": true,
    "lastLogin": "2023-05-23T01:50:59.785Z",
    "addressId": 0,
    "postalAddressId": 0,
    "dateOfBirth": "2023-05-23T01:50:59.785Z",
    "photo": "string",
    "proposalPhoto": "string",
    "salutation": 0,
    "secondEmail": "string",
    "admissionDate": "2023-05-23T01:50:59.785Z",
    "office": {
      ...
    },
    "pqy": 0,
    "pqe": 0,
    "address": {
      "id": 0,
      "address1": "string",
      "address2": "string",
      "suburb": "string",
      "state": "string",
      "postcode": "string",
      "country": "string"
    },
    "address1": "string",
    "address2": "string",
    "suburb": "string",
    "state": "string",
    "postcode": "string",
    "country": "string"
  }
  ```
##### <green>Method: </green>Delete

Deletes the user with the specified `ID`. 
- **Endpoint:** `DELETE /api/users/{id}`
- **Permission:** Requires `UsersDelete` permission
- **Parameters:**
  - `id` (path parameter): The ID of the user to delete.
  ```http
    DELETE /api/users/33
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 204 No Content
  - HTTP 403 Forbidden
  - HTTP 404 Not Found
- **Response Body:** None

##### <green>Method: </green>GetRemunerations
- **Endpoint:** `GET /api/users/remunerations`
- **Permission:** Authorized.
- **Parameters:**
  - `UserFilterInput` query parameters
  ```http
    GET /api/users/remunerations?Active=true&IsRequiredBillingRate=true&Search=test&Limit=50&Offset=0
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
- **Response Body:**
  ```json
  {
    "items": [
      {
        "staffId": 143,
        "fteLoad": 123.0,
        "remunerationIncSuper": 111.0,
        "costPerHour": 0.00,
        "pqy": null,
        "billingRate": 100.0,
        "billablePercentage": 10.0,
        "kpi": 54612.0,
        "kpiBillable": 47785.5,
        "kpiInvoiced": 40959.0,
        "remunerationDate": "2023-01-17T00:00:00",
        "commencementDate": "2023-01-17T00:00:00",
        "terminationDate": "2023-01-18T00:00:00",
        "staff": {
          <!-- STAFF INFO -->
        },
        "id": 262
      },
      {
        "staffId": 136,
        "fteLoad": 11.0,
        "remunerationIncSuper": 11.0,
        "costPerHour": 0.00,
        "pqy": null,
        "billingRate": 11.0,
        "billablePercentage": 11.0,
        "kpi": 484.0,
        "kpiBillable": 423.5,
        "kpiInvoiced": 363.0,
        "remunerationDate": "2022-12-21T00:00:00",
        "commencementDate": "2022-12-21T00:00:00",
        "terminationDate": null,
        "staff": {
          <!-- STAFF INFO -->
        },
        "id": 244
      },
      {
        "staffId": 136,
        "fteLoad": 11.0,
        "remunerationIncSuper": 11.0,
        "costPerHour": 0.00,
        "pqy": null,
        "billingRate": 11.0,
        "billablePercentage": 11.0,
        "kpi": 484.0,
        "kpiBillable": 423.5,
        "kpiInvoiced": 363.0,
        "remunerationDate": "2022-12-21T00:00:00",
        "commencementDate": "2022-12-21T00:00:00",
        "terminationDate": null,
        "staff": {
          <!-- STAFF INFO -->
        },
        "id": 246
      }
    ],
    "count": 3,
    "hasNext": false
  }
  ```

##### <green>Method: </green>GetRemunerationbyId
- **Endpoint:** `GET /api/users/remunerations/{id}`
- **Permission:** Authorized.
- **Parameters:**
  - `id` (path parameter): The ID of the remuneration to retrieve.
  ```http
    GET /api/users/remuneration/2
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 404 Not Found
- **Response Body:**
  ```json
  {
    "staffId": 1,
    "fteLoad": 100.0,
    "remunerationIncSuper": 100.0,
    "costPerHour": 100.0,
    "pqy": 1.0,
    "billingRate": 10.0,
    "billablePercentage": 100.0,
    "kpi": 40000.0,
    "kpiBillable": 35000.0,
    "kpiInvoiced": 30000.0,
    "remunerationDate": "2023-05-23T00:00:00",
    "commencementDate": "2000-01-01T00:00:00",
    "terminationDate": null,
    "staff": {
      <!--STAFF INFO-->
    },
    "id": 2
  }
  ```

##### <green>Method: </green>Patch
- **Endpoint:** `PATCH /api/users/remunerations/{id}`
- **Permission:** Requires `RemunerationsEdit` permission
- **Parameters:**
  - `id` (path parameter): The ID of the remuneration to update.
  ```http
    PATCH /api/users/remuneration/2
  ```
- **Request Body:**
  ```json
  [
    {
      "op": "replace",
      "path": "/billing_rate",
      "value": 20
    }
  ]
  ```
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 403 Forbidden
  - HTTP 404 Not Found
- **Response Body**:
  ```json
  {
    "staffId": 2,
    "fteLoad": 100.0,
    "remunerationIncSuper": 100.0,
    "costPerHour": 100.0,
    "pqy": 25.0,
    "billingRate": 20.0,
    "billablePercentage": 100.0,
    "kpi": 40000.0,
    "kpiBillable": 35000.0,
    "kpiInvoiced": 30000.0,
    "remunerationDate": "2023-05-23T00:00:00",
    "commencementDate": "2000-01-01T00:00:00",
    "terminationDate": null,
    "staff": {
      <!--STAFF INFO-->
    },
    "id": 1
  }
  ```
##### <green>Method: </green>GetLatestRemunerationbyStaffId
Retrieves the latest remuneration for the staff member with the specified ID. 
- **Endpoint:** `GET /api/users/remunerations/staff/{id}`
- **Permission:** Authorized.
- **Parameters:**
  - `id` (path parameter): The ID of the staff member.
  ```http
  GET /api/users/remunerations/staff/2
  ```
- **Request Body:** None
- **Response Codes:** 200 OK, 401 Unauthorized, 404 Not Found
- **Response Body:**
  ```json
  {
    "staffId": 2,
    "fteLoad": 100.0,
    "remunerationIncSuper": 100.0,
    "costPerHour": 100.0,
    "pqy": 25.0,
    "billingRate": 20.0,
    "billablePercentage": 100.0,
    "kpi": 40000.0,
    "kpiBillable": 35000.0,
    "kpiInvoiced": 30000.0,
    "remunerationDate": "2023-05-23T00:00:00",
    "commencementDate": "2000-01-01T00:00:00",
    "terminationDate": null,
    "staff": {
      <!--STAFF INFO-->
    },
    "id": 2
  }
  ```
##### <green>Method: </green>CreateRemuneration
Creates a new remuneration.
- **Endpoint:** `POST /api/users/remuneration`
- **Permission:** Requires `RemunerationsCreate` permission
- **Parameters:** None
- **Request Body:**
  ```json
  {
    "id": 3,
    "staffId": 1,
    "fteLoad": 10,
    "remunerationIncSuper": 10,
    "billingRate": 40,
    "billablePercentage": 60,
    "remunerationDate": "2023-05-23T06:11:45.962Z",
    "commencementDate": "2023-05-23T06:11:45.962Z",
    "terminationDate": "2023-05-23T06:11:45.962Z"
  }
  ```
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 403 Forbidden
- **Response Body**: None


##### <green>Method: </green>GetPQEAdjustmentbyStaffId
Retrieves the PQE adjustments for the staff member with the specified ID.
- **Endpoint:** `GET /api/users/pqeadjustments/{id}`
- **Permission:** Authorized.
- **Parameters:**
  - `id` (path parameter): The ID of the staff member.
  ```http
    GET /api/users/pqeadjustments/1?Limit=10&Offset=0
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 404 Not Found
- **Response Body:**
  ```json
  {
    "items": [
      {
        "staffId": 1,
        "name": "ll",
        "details": "hhhjj",
        "startDate": "2023-05-23T16:08:48.298883",
        "endDate": "2023-05-23T16:08:48.298883",
        "staff": {
          <!-- STAFF INFO -->
        },
        "id": 1
      },
      {
        "staffId": 1,
        "name": "www",
        "details": "ssss",
        "startDate": "2023-05-23T16:08:48.298883",
        "endDate": "2023-05-23T16:08:48.298883",
        "staff": {
          <!-- STAFF INFO -->
        },
        "id": 2
      }
    ],
    "count": 2,
    "hasNext": false
  }
  ```

##### <green>Method: </green>CreatePQEAdjustment
Creates a new PQE adjustment for a staff member
- **Endpoint:** `POST /api/users/pqeadjustments`
- **Permission:** Authorized
- **Parameters:** None
- **Request Body:**
  ```json
  {
    "id": 3,
    "staffId": 1,
    "name": "name",
    "details": "newpqe",
    "startDate": "2023-05-23T06:48:26.571Z",
    "endDate": "2023-05-23T06:48:26.571Z"
  }
  ```
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: None

##### <green>Method: </green>GetRoles
Retrieves the roles associated with the user with the specified ID
- **Endpoint:** `GET /api/users/{id}/roles`
- **Permission:** Requires `UsersView` permission
- **Parameters:**
  - `id` (path parameter): The ID of the user.
  ```http
    GET /api/users/1/roles
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body:**
  ```json
  [
    {
      "name": "System Admin",
      "isSystemAdmin": true,
      "isDefaultRole": false,
      "id": 1
    },
    {
      "name": "permission 01",
      "isSystemAdmin": false,
      "isDefaultRole": false,
      "id": 2
    }
  ]
  ```
##### <green>Method: </green>AddRole
Adds a role to the user with the specified ID
- **Endpoint:** `POST /api/users/{id}/roles/{roleid}`
- **Permission:** Requires `UsersEdit` permission
- **Parameters:**
  - `id` (path parameter): The ID of the user.
  - `roleid` (path parameter): The ID of the role to add.
  ```http
    GET /api/users/2/roles/1
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body:** None

##### <green>Method: </green>RemoveRole
Removes a role from the user with the specified ID.
- **Endpoint:** `DELETE /api/users/{id}/roles/{roleid}`
- **Permission:** Requires `UsersDelete` permission
- **Parameters:**
  - `id` (path parameter): The ID of the user.
  - `roleid` (path parameter): The ID of the role to remove.
  ```http
    GET /api/users/2/roles/1
  ```
- **Request Body:** None
- **Response Codes:** 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body:** None

##### <green>Method: </green>ChangePassowrd
Changes the password for the authenticated user.
- **Endpoint:** `POST /api/users/changepassword`
- **Permission:** Authorized
- **Parameters:** None
- **Request Body:**
```json
{
  "id": 2,
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "officeId": 1,
  "password": "NEW_PASSWORD",
  "address": {
    <!-- ADDRESS INFO -->
  }
}
```
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: None

 


## Common Controllers 
This section provides documentation for controllers under the Common folder in the ALP application. 

### Active Campaign Controller
**Permission:** Authorized

##### <green>Method: </green>UnsubscribeActiveCampaign 
> Unsubscribes a contact from ActiveCampaign.
> - *Endpoint:* `POST /api/activecampaign/{id}/unsubscribe`


##### <green>Method: </green>GetActiveCampaignStatusbyContactId 
> Retrieves the ActiveCampaign subscription status for a contact based on their ID by calling the [GetActiveCampaignContactbyContactId](#getactivecampaigncontactbycontactid)
> -  *Endpoint:* `GET /api/activecampaign/status/{id}`


##### <green>Method: </green>GetActiveCampaignActivitybyId 
> Retrieves the ActiveCampaign activity by ID for testing purposes.
> -  *Endpoint:* `GET /api/activecampaign/{id}/test`


##### <green>Method: </green>GetActiveCampaignContactbyContactId 
> Retrieves the ActiveCampaign contact by their ID.
> -  *Endpoint:* `GET /api/activecampaign/{id}`


##### <green>Method: </green>GetActiveCampaignActivitiesByContactId 
> Retrieves the ActiveCampaign activities for a contact based on their ID.
> -  *Endpoint:* `GET /api/activecampaign/{id}/activities`

### Emails Controller
#### Contact Email Controller
**Permission:** Authorized

##### <green>Method: </green>GetById 
> Retrieves a specific email for a contact by its ID.
> -  *Endpoint:* `GET /api/contacts/{id}/emails/{emailId}`


##### <green>Method: </green>GetList 
> Retrieves a <blue>paginated</blue> list of emails for a contact.
> -  *Endpoint:* `GET /api/contacts/{id}/emails`


##### <green>Method: </green>GetAttachmentLinkById 
> Retrieves a signed link for downloading a specific attachment of an email for a contact.
> -  *Endpoint:* `GET /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}`


##### <green>Method: </green>DownloadAttachment 
> Downloads a specific attachment of an email for a contact.
> -  *Endpoint:* `GET /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}/download`


##### <green>Method: </green>ImportAttachmentToDocuments 
> Imports a specific attachment of an email for a contact to their documents.
> -  *Endpoint:* `POST /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}/import`


#### Email Controller
**Permission:** Authorized

##### <green>Method: </green>Send 
> Sends an email.
> -  *Endpoint:* `POST /api/emails`


##### <green>Method: </green>GetById 
> Retrieves an email by its ID.
> -  *Endpoint:* `GET /api/emails/{id}`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>GetInboxList 
> Retrieves a <blue>paginated</blue> list of emails in the inbox.
> -  *Endpoint:* `GET /api/emails/inbox`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>GetSentList 
> Retrieves a <blue>paginated</blue> list of sent emails.
> -  *Endpoint:* `GET /api/emails/sent`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>Reply 
> Sends a reply to an email.
> -  *Endpoint:* `POST /api/emails/reply`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ReplyAll 
> Sends a reply to all recipients of an email.
> -  *Endpoint:* `POST /api/emails/replyAll`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>Forward 
> Forwards an email to another recipient(s).
> -  *Endpoint:* `POST /api/emails/forward`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>MarkEmailAsReadStatusForMe 
> Marks an email as read or unread for the current user.
> -  *Endpoint:* `GET /api/emails/{emailId}/markEmailAsRead`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>MarkSelectEmailAsRead 
> Marks multiple emails as read or unread.
> -  *Endpoint:* `POST /api/emails/markSelectEmailAsRead`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ChangeSelectedEmailAsPinUnpinStatus 
> Changes the pin/unpin status of multiple emails.
> -  *Endpoint:* `POST /api/emails/changeSelectedEmailAsPinUnpinStatus`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>changeSelectedEmailFlag 
> Changes the flag status of multiple emails.
> -  *Endpoint:* `POST /api/emails/changeSelectedEmailFlag`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ChangeSelectedEmailHideUnhide 
> Changes the hide status of multiple emails.
> -  *Endpoint:* `POST /api/emails/ChangeSelectedEmailHideUnhide`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ChangeEmailPinUnpinStatus 
> Changes the pin/unpin status of an email.
> -  *Endpoint:* `GET /api/emails/{emailId}/changeEmailPinUnpinStatus`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ChangeEmailHideStatus 
> Changes the hide status of an email.
> -  *Endpoint:* `GET /api/emails/{emailId}/changeEmailHideStatus`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>changeEmailFlagStatus 
> Changes the flag status of an email.
> -  *Endpoint:* `GET /api/emails/{emailId}/changeEmailFlagStatus`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>GetAttachmentLinkById 
> Retrieves a signed link for downloading an email attachment.
> -  *Endpoint:* `GET /api/emails/{emailId}/attachments/{attachmentId}`
> -  **Permission:** Require `EmailView` Permission



##### <green>Method: </green>ExportEmailToPdfController 
> Exports an email as a PDF document.
> -  *Endpoint:* `POST /api/emails/{matterId}/{emailId}/exportMatterEmailTopdf`



##### <green>Method: </green>ExportMatterEmailsToPdfController 
> Exports multiple emails associated with a matter as a single PDF document.
> -  *Endpoint:* `POST /api/emails/{matterId}/exportMatterEmailsToPdf`



##### <green>Method: </green>ExportContactEmailToPdfController 
> Exports a single email associated with a contact as a PDF document.
> -  *Endpoint:* `POST /api/emails/{contactId}/{emailId}/exportContactEmailToPdf`



##### <green>Method: </green>ExportContactEmailsToPdfController 
> Exports multiple emails associated with a contact as a single PDF document.
> -  *Endpoint:* `POST /api/emails/{contactId}/exportContactEmailsToPdf`



##### <green>Method: </green>DownloadAttachment 
> Downloads an email attachment.
> -  *Endpoint:* `GET /api/emails/{emailId}/attachments/{attachmentId}/download`



##### <green>Method: </green>GetEmailGroups 
> Retrieves a <blue>paginated</blue> list of email groups.
> -  *Endpoint:* `GET /api/emails/emailgroup`



##### <green>Method: </green>Create 
> Creates a new email group.
> -  *Endpoint:* `POST /api/emails/createemailgroup`
> -  **Permissions:** Requires `CommonTypeCreate` Permission



##### <green>Method: </green>EmailGroupGetById 
> Retrieves an email group by its ID.
> -  *Endpoint:* `GET /api/emails/{id}/emailgroup`



##### <green>Method: </green>Update 
> Updates an existing email group.
> -  *Endpoint:* `PUT /api/emails/{id}/emailgroup`
> -  **Permission:** Requires `CommonTypeEdit` Permission



##### <green>Method: </green>Patch 
> Partially updates an existing email group using JSON Patch.
> -  *Endpoint:* `PATCH /api/emails/{id}/emailgroup`
> -  **Permission:** Requires `CommonTypeEdit` Permission



##### <green>Method: </green>Delete 
> Deletes an email group.
> -  *Endpoint:* `DELETE /api/emails/{id}/emailgroup`
> -  **Permission:** Requires `CommonTypeDelete` Permission

#### Email Template Controller
**Permission:** Authorized


##### <green>Method: </green>GetList 
> Retrieve a <blue>paginated</blue> list of email templates based on the provided filter.
> -  *Endpoint:* `GET /api/email-templates`


##### <green>Method: </green>Create 
> Create a new email template.
> -  *Endpoint:* `POST /api/email-templates`


##### <green>Method: </green>Update 
> Update an existing email template with the specified ID.
> -  *Endpoint:* `PUT /api/email-templates/{id}`


##### <green>Method: </green>Delete 
> Delete an email template with the specified ID.
> -  *Endpoint:* `DELETE /api/email-templates/{id}`


##### <green>Method: </green>GetForConflictCheck 
> Retrieve an email template for conflict check based on the specified matter ID and conflict parties change flag.
> -  *Endpoint:* `POST /api/email-templates/conflict-check/{matterId}/{conflictPartiesChangeFlag}`


##### <green>Method: </green>GetForDisbursementNotification 
> Retrieve an email template for disbursement notification based on the specified disbursement ID.
> -  *Endpoint:* `POST /api/email-templates/disbursement-notification/{disbursementId}`

#### Matter Email Controller
##### <green>Method: </green>GetById
> Retrieve an email by its ID for a specific matter.
> - **Endpoint:** `GET /api/matters/{id}/emails/{emailId}`

##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of emails for a specific matter.
> - **Endpoint:** `GET /api/matters/{id}/emails`

##### <green>Method: </green>GetAttachmentLinkById
> Retrieve a signed attachment link for a specific email attachment within a matter.
> - **Endpoint:** `GET /api/matters/{id}/emails/{emailId}/attachments/{attachmentId}`

##### <green>Method: </green>DownloadAttachment
> Download a specific email attachment within a matter.
> - **Endpoint:** `GET /api/matters/{id}/emails/{emailId}/attachments/{attachmentId}/download`

##### <green>Method: </green>ImportAttachmentToDocuments
> Import an email attachment to the documents associated with a matter.
> - **Endpoint:** `POST /api/matters/{emailId}/attachments/{attachmentId}/import`

##### <green>Method: </green>AssignEmailToMatter
> Assign an email to a specific matter.
> - **Endpoint:** `POST /api/matters/{id}/emails/{emailId}/assign`

##### <green>Method: </green>AssignSelectedEmailsToMatter
> Assign selected emails to a specific matter.
> - **Endpoint:** `POST /api/matters/{id}/emails/assign`

#### Organisation Email Controller
##### <green>Method: </green>GetById
> Retrieve an email by its ID for a specific organisation.
> - **Endpoint:** `GET /api/organisations/{id}/emails/{emailId}`

##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of emails for a specific organisation.
> - **Endpoint:** `GET /api/organisations/{id}/emails`

##### <green>Method: </green>GetAttachmentLinkById
> Retrieve a signed attachment link for a specific email attachment within an organisation.
> - **Endpoint:** `GET /api/organisations/{id}/emails/{emailId}/attachments/{attachmentId}`

##### <green>Method: </green>DownloadAttachment
> Download a specific email attachment within an organisation.
> - **Endpoint:** `GET /api/organisations/{id}/emails/{emailId}/attachments/{attachmentId}/download`

##### <green>Method: </green>ImportAttachmentToDocuments
> Import an email attachment to the documents associated with an organisation.
> - **Endpoint:** `POST /api/organisations/{emailId}/attachments/{attachmentId}/import`

#### Project Email Controller
##### <green>Method: </green>GetById
> Retrieve an email by its ID for a specific project.
> - **Endpoint:** `GET /api/projects/{id}/emails/{emailId}`

##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of emails for a specific project.
> - **Endpoint:** `GET /api/projects/{id}/emails`

##### <green>Method: </green>GetAttachmentLinkById
> Retrieve a signed attachment link for a specific email attachment within a project.
> - **Endpoint:** `GET /api/projects/{id}/emails/{emailId}/attachments/{attachmentId}`

##### <green>Method: </green>DownloadAttachment
> Download a specific email attachment within a project.
> - **Endpoint:** `GET /api/projects/{id}/emails/{emailId}/attachments/{attachmentId}/download`

##### <green>Method: </green>ImportAttachmentToDocuments
> Import an email attachment to the documents associated with a project.
> - **Endpoint:** `POST /api/projects/{emailId}/attachments/{attachmentId}/import`

##### <green>Method: </green>AssignEmailToProject
> Assign an email to a specific project.
> - **Endpoint:** `POST /api/projects/{id}/emails/{emailId}/assign`

##### <green>Method: </green>AssignSelectedEmailsToProject
> Assign selected emails to a specific project.
> - **Endpoint:** `POST /api/projects/{id}/emails/assign`

### Mail Register Controller
#### Incoming Mails Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of incoming mails.
> - **Endpoint:** `GET /api/incomingmails`

##### <green>Method: </green>CreateIncomingMail
> Create a new incoming mail record.
> - **Endpoint:** `POST /api/incomingmails`

##### <green>Method: </green>GetById
> Retrieve an incoming mail record by its ID.
> - **Endpoint:** `GET /api/incomingmails/{id}`

##### <green>Method: </green>DeleteById
> Delete an incoming mail record by its ID.
> - **Endpoint:** `DELETE /api/incomingmails/{id}`

##### <green>Method: </green>Patch
> Update an incoming mail record by applying a JSON patch document.
> - **Endpoint:** `PATCH /api/incomingmails/{id}`

#### Outgoing Mails Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of outgoing mails.
> - **Endpoint:** `GET /api/outgoingmails`

##### <green>Method: </green>CreateOutgoingMail
> Create a new outgoing mail record.
> - **Endpoint:** `POST /api/outgoingmails`

##### <green>Method: </green>GetById
> Retrieve an outgoing mail record by its ID.
> - **Endpoint:** `GET /api/outgoingmails/{id}`

##### <green>Method: </green>DeleteById
> Delete an outgoing mail record by its ID.
> - **Endpoint:** `DELETE /api/outgoingmails/{id}`

##### <green>Method: </green>Patch
> Update an outgoing mail record by applying a JSON patch document.
> - **Endpoint:** `PATCH /api/outgoingmails/{id}`

### Metabase Controller
#### Metabase Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of Metabase reports.
> - **Endpoint:** `GET /api/metabase`

##### <green>Method: </green>GetAvailableList
> Retrieve a <blue>paginated</blue> list of available Metabase reports.
> - **Endpoint:** `GET /api/metabase/available`

##### <green>Method: </green>GetForDashboard
> Retrieve the Metabase report URL for the dashboard.
> - **Endpoint:** `GET /api/metabase/dashboard`

##### <green>Method: </green>GetById
> Retrieve a Metabase report by its ID.
> - **Endpoint:** `GET /api/metabase/{id}`

##### <green>Method: </green>GetUrlById
> Retrieve the URL of a Metabase report by its ID.
> - **Endpoint:** `GET /api/metabase/{id}/url`

##### <green>Method: </green>Create
> Create a new Metabase report.
> - **Endpoint:** `POST /api/metabase`

##### <green>Method: </green>Update
> Update an existing Metabase report by its ID.
> - **Endpoint:** `PUT /api/metabase/{id}`

##### <green>Method: </green>Patch
> Update an existing Metabase report partially by applying a JSON patch document.
> - **Endpoint:** `PATCH /api/metabase/{id}`

##### <green>Method: </green>Delete
> Delete a Metabase report by its ID.
> - **Endpoint:** `DELETE /api/metabase`

##### <green>Method: </green>AddGroup
> Add a group to a Metabase report.
> - **Endpoint:** `PUT /api/metabase/{id}/groups/add/{groupId}`

##### <green>Method: </green>RemoveGroup
> Remove a group from a Metabase report.
> - **Endpoint:** `PUT /api/metabase/{id}/groups/remove/{groupId}`

##### <green>Method: </green>AddParameter
> Add a parameter to a Metabase report.
> - **Endpoint:** `PUT /api/metabase/{id}/parameters/add`

##### <green>Method: </green>RemoveParameter
> Remove a parameter from a Metabase report.
> - **Endpoint:** `PUT /api/metabase/{id}/parameters/remove/{parameterId}`

#### Metabase Group Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of Metabase report groups.
> - **Endpoint:** `GET /api/metabase/groups`

##### <green>Method: </green>GetById
> Retrieve a Metabase report group by its ID.
> - **Endpoint:** `GET /api/metabase/groups/{id}`

##### <green>Method: </green>Create
> Create a new Metabase report group.
> - **Endpoint:** `POST /api/metabase/groups`

##### <green>Method: </green>Update
> Update an existing Metabase report group by its ID.
> - **Endpoint:** `PUT /api/metabase/groups/{id}`

##### <green>Method: </green>Patch
> Update an existing Metabase report group partially by applying a JSON patch document.
> - **Endpoint:** `PATCH /api/metabase/groups/{id}`

##### <green>Method: </green>AddUser
> Add a user to a Metabase report group.
> - **Endpoint:** `PUT /api/metabase/groups/{id}/users/add/{userId}`

##### <green>Method: </green>RemoveUser
> Remove a user from a Metabase report group.
> - **Endpoint:** `PUT /api/metabase/groups/{id}/users/remove/{userId}`

##### <green>Method: </green>Delete
> Delete a Metabase report group by its ID.
> - **Endpoint:** `DELETE /api/metabase/groups/{id}`

### Metadata Controller
#### Dynamic Parameter Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of dynamic parameters.
> - **Endpoint:** `GET /api/dynamic-parameters`

##### <green>Method: </green>GetById
> Retrieve a dynamic parameter by its ID.
> - **Endpoint:** `GET /api/dynamic-parameters/{id}`

##### <green>Method: </green>Create
> Create a new dynamic parameter.
> - **Endpoint:** `POST /api/dynamic-parameters`

##### <green>Method: </green>Update
> Update an existing dynamic parameter by its ID.
> - **Endpoint:** `PUT /api/dynamic-parameters/{id}`

##### <green>Method: </green>Delete
> Delete a dynamic parameter by its ID.
> - **Endpoint:** `DELETE /api/dynamic-parameters/{id}`

#### Dynamic Parameter Value Controller
##### <green>Method: </green>GetList
> Retrieve a list of dynamic parameter values for a specific dynamic parameter.
> - **Endpoint:** `GET /api/dynamic-parameters/{id}/values`

##### <green>Method: </green>Add
> Add a new dynamic parameter value to a specific dynamic parameter.
> - **Endpoint:** `POST /api/dynamic-parameters/{id}/values`

##### <green>Method: </green>Update
> Update an existing dynamic parameter value by its ID within a specific dynamic parameter.
> - **Endpoint:** `PUT /api/dynamic-parameters/{id}/values/{valueId}`

##### <green>Method: </green>Delete
> Delete a dynamic parameter value by its ID within a specific dynamic parameter.
> - **Endpoint:** `DELETE /api/dynamic-parameters/{id}/values/{valueId}`

#### Entity Dynamic Parameter Controller
##### <green>Method: </green>GetList
> Retrieve a list of entity dynamic parameters for a specific entity type.
> - **Endpoint:** `GET /api/entity-dynamic-parameters`

##### <green>Method: </green>GetAvailableParameters
> Retrieve a list of available dynamic parameters that can be added to a specific entity type.
> - **Endpoint:** `GET /api/entity-dynamic-parameters/available`

##### <green>Method: </green>Create
> Add a new entity dynamic parameter to a specific entity type.
> - **Endpoint:** `POST /api/entity-dynamic-parameters`

##### <green>Method: </green>Delete
> Delete an entity dynamic parameter by its ID.
> - **Endpoint:** `DELETE /api/entity-dynamic-parameters/{id}`

### Safe Storage Controller
#### Safe Storage Documents Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of safe storage documents.
> - **Endpoint:** `GET /api/safe-storage-documents`

##### <green>Method: </green>GetContactsSafeStorageDocumentsList
> Retrieve a <blue>paginated</blue> list of safe storage documents associated with a specific contact.
> - **Endpoint:** `GET /api/safe-storage-documents/contacts/{id}`

##### <green>Method: </green>GetOrganisationsSafeStorageDocumentsList
> Retrieve a <blue>paginated</blue> list of safe storage documents associated with a specific organization.
> - **Endpoint:** `GET /api/safe-storage-documents/organisations/{id}`

##### <green>Method: </green>Create
> Create a new safe storage document.
> - **Endpoint:** `POST /api/safe-storage-documents`

##### <green>Method: </green>GetById
> Retrieve a safe storage document by its ID.
> - **Endpoint:** `GET /api/safe-storage-documents/{id}`

##### <green>Method: </green>Update
> Update a safe storage document by its ID.
> - **Endpoint:** `PUT /api/safe-storage-documents/{id}`

##### <green>Method: </green>Patch
> Partially update a safe storage document by its ID using JSON patch.
> - **Endpoint:** `PATCH /api/safe-storage-documents/{id}`

##### <green>Method: </green>Delete
> Delete a safe storage document by its ID.
> - **Endpoint:** `DELETE /api/safe-storage-documents/{id}`

#### Safe Storage Document Types Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of safe storage document types.
> - **Endpoint:** `GET /api/safe-storage-document-types`

##### <green>Method: </green>GetAll
> Retrieve all safe storage document types.
> - **Endpoint:** `GET /api/safe-storage-document-types/all`

##### <green>Method: </green>Create
> Create a new safe storage document type.
> - **Endpoint:** `POST /api/safe-storage-document-types`

##### <green>Method: </green>GetById
> Retrieve a safe storage document type by its ID.
> - **Endpoint:** `GET /api/safe-storage-document-types/{id}`

##### <green>Method: </green>Update
> Update a safe storage document type by its ID.
> - **Endpoint:** `PUT /api/safe-storage-document-types/{id}`

##### <green>Method: </green>Patch
> Partially update a safe storage document type by its ID using JSON patch.
> - **Endpoint:** `PATCH /api/safe-storage-document-types/{id}`

##### <green>Method: </green>Delete
> Delete a safe storage document type by its ID.
> - **Endpoint:** `DELETE /api/safe-storage-document-types/{id}`

#### Safe Storage Sections Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of safe storage sections.
> - **Endpoint:** `GET /api/safe-storage-sections`

##### <green>Method: </green>GetAll
> Retrieve all safe storage sections.
> - **Endpoint:** `GET /api/safe-storage-sections/all`

##### <green>Method: </green>GetListbyOfficeId
> Retrieve a <blue>paginated</blue> list of safe storage sections by office ID.
> - **Endpoint:** `GET /api/safe-storage-sections/office/{id}`

##### <green>Method: </green>Create
> Create a new safe storage section.
> - **Endpoint:** `POST /api/safe-storage-sections`

##### <green>Method: </green>GetById
> Retrieve a safe storage section by its ID.
> - **Endpoint:** `GET /api/safe-storage-sections/{id}`

##### <green>Method: </green>Update
> Update a safe storage section by its ID.
> - **Endpoint:** `PUT /api/safe-storage-sections/{id}`

##### <green>Method: </green>Patch
> Partially update a safe storage section by its ID using JSON patch.
> - **Endpoint:** `PATCH /api/safe-storage-sections/{id}`

##### <green>Method: </green>Delete
> Delete a safe storage section by its ID.
> - **Endpoint:** `DELETE /api/safe-storage-sections/{id}`

### Syntaq Controller
#### Syntaq Controller
##### <green>Method: </green>GetSyntaqAccessToken
> Retrieve the Syntaq access token.
> - **Endpoint:** `GET /api/syntaq/syntaq_access_token`

#### Syntaq Form Controller
##### <green>Method: </green>Sync
> Synchronize Syntaq forms.
> - **Endpoint:** `POST /api/syntaq/forms/sync`
> - **Permissions Required:** `SyntaqFormEdit`

##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of Syntaq forms.
> - **Endpoint:** `GET /api/syntaq/forms`
> - **Permissions Required:** `SyntaqFormView`

##### <green>Method: </green>GetById
> Retrieve a Syntaq form by ID.
> - **Endpoint:** `GET /api/syntaq/forms/{id}`
> - **Permissions Required:** `SyntaqFormView`

##### <green>Method: </green>GetSyntaqDocumentRecordsEmbed
> Retrieve the Syntaq form document records.
> - **Endpoint:** `GET /api/syntaq/forms/DocumentRecords`
> - **Permissions Required:** `SyntaqFormView`

##### <green>Method: </green>GetEmbed
> Retrieve the embedded view of a Syntaq form by ID.
> - **Endpoint:** `GET /api/syntaq/forms/{id}/embed`
> - **Permissions Required:** `SyntaqFormView`

### Time Tracking Controller
#### Matter Component TimeEntry Controller
##### <green>Method: </green>GetList
> Retrieves a list of time entries for a specific matter component.

> - Endpoint: `GET api/matters/{id}/outcomes/{outcomeId}/components/{componentId}/time-entries`

#### Matter TimeEntry Controller
##### <green>Method: </green>GetList
> Retrieve a <blue>paginated</blue> list of time entries for the matter itself.
> - Endpoint: `GET /api/matters/{id}/time-entries/matter`

##### <green>Method: </green>GetListForSales
> Retrieve a <blue>paginated</blue> list of time entries for sales related to the matter.
> - Endpoint: `GET /api/matters/{id}/time-entries/sales`

##### <green>Method: </green>GetLastMatterTimeEntry
> Retrieve the last recorded time entry for the matter.
> - Endpoint: `GET /api/matters/{id}/time-entries/lastEntries`

#### TimeEntry Controller
##### <green>Method: </green>GetForSales
> Retrieves a list of time entries for sales.
> - Endpoint: `GET api/time-entries/sales`

##### <green>Method: </green>GetForUser
> Retrieves a list of time entries for a specific user.
> - Endpoint: `GET api/time-entries/user`

##### <green>Method: </green>GetForMatters
> Retrieves a list of time entries for a specific matter.
> - Endpoint: `GET api/time-entries/matter`

##### <green>Method: </green>GetForProjects
> Retrieves a list of time entries for a specific project.
> - Endpoint: `GET api/time-entries/project`

##### <green>Method: </green>GetStats
> Retrieves statistics for time entries based on a set of filters.
> - Endpoint: `GET api/time-entries/stats`

##### <green>Method: </green>GetById
> Retrieves a specific time entry by its ID.
> - Endpoint: `GET api/time-entries/{id}`

##### <green>Method: </green>Create
> Creates a new time entry of a specified type.
> - Endpoint: `POST api/time-entries`

##### <green>Method: </green>Update
> Updates a specific time entry by its ID and type.
> - Endpoint: `PUT api/time-entries/{id}`

##### <green>Method: </green>Patch
> Partially updates a specific time entry by its ID and type using JSON Patch.
> - Endpoint: `PATCH api/time-entries/{id}`

##### <green>Method: </green>Delete
> Deletes a specific time entry by its ID, type, and invoice ID.
> - Endpoint: `DELETE api/time-entries/{id}`

#### Timer Controller
##### <green>Method: </green>GetList
> Retrieves a list of timers.
> - Endpoint: `GET api/timers`

##### <green>Method: </green>Create
> Creates a new timer.
> - Endpoint: `POST api/timers`

##### <green>Method: </green>GetById
> Retrieves a specific timer by its ID.
> - Endpoint: `GET api/timers/{id}`

##### <green>Method: </green>Update
> Updates a specific timer by its ID.
> - Endpoint: `PUT api/timers/{id}`

##### <green>Method: </green>Start
> Starts a specific timer by its ID.
> - Endpoint: `POST api/timers/{id}/start`

##### <green>Method: </green>Pause
> Pauses a specific timer by its ID.
> - Endpoint: `POST api/timers/{id}/pause`

##### <green>Method: </green>Stop
> Stops a specific timer by its ID and creates a time entry.
> - Endpoint: `POST api/timers/{id}/stop`

##### <green>Method: </green>Delete
> Deletes a specific timer by its ID.
> - Endpoint: `DELETE api/timers/{id}`

### Xero Service Controller
#### Xero Controller
##### <green>Method: </green>SyncXeroContactbyClientId
> Syncs a Xero contact by client ID.
> - Endpoint: `POST api/Xero/sync-client-by-client-id/{clientId}`

##### <green>Method: </green>getAccessToken
> Retrieves the Xero access token for a specific office ID.
> - Endpoint: `GET api/Xero/token/{officeId}`

### ABN Lookup Controller
##### <green>Method: </green>getABNLookupbyABN
> Retrieves ABN lookup information by ABN.
> - Endpoint: `GET api/abnlookup/abn/{id}`

##### <green>Method: </green>getABNLookupbyACN
> Retrieves ABN lookup information by ACN.
> - Endpoint: `GET api/abnlookup/acn/{id}`

##### <green>Method: </green>getABNLookupbyName
> Retrieves ABN lookup information by name.
> - Endpoint: `GET api/abnlookup/byname/{name}`

##### <green>Method: </green>getABNLookupbyOrganisationId
> Retrieves ABN lookup information by organisation ID.
> - Endpoint: `GET api/abnlookup/byorganisationId/{OrganisationId}`

### AWSS3 Controller
::: warning Deprecate
:::
### Bug Report Controller
##### <green>Method: </green>GetById
> Retrieves a bug report by ID.
> - Endpoint: `GET api/feedback/bugs/{id}`

##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of bug reports.
> - Endpoint: `GET api/feedback/bugs`

##### <green>Method: </green>Create
> Creates a new bug report.
> - Endpoint: `POST api/feedback/bugs`

##### <green>Method: </green>Patch
> Updates a bug report partially.
> - Endpoint: `PATCH api/feedback/bugs/{id}`

##### <green>Method: </green>Update
> Updates a bug report completely.
> - Endpoint: `PUT api/feedback/bugs/{id}`

##### <green>Method: </green>Delete
> Deletes a bug report.
> - Endpoint: `DELETE api/feedback/bugs/{id}`

### Business Area Controller
##### <green>Method: </green>GetList
> Retrieves a list of business areas.
> - Endpoint: `GET api/business-areas`

##### <green>Method: </green>GetFullList
> Retrieves all business areas.
> - Endpoint: `GET api/business-areas/all`

##### <green>Method: </green>Create
> Creates a new business area.
> - Endpoint: `POST api/business-areas`

##### <green>Method: </green>GetById
> Retrieves a business area by ID.
> - Endpoint: `GET api/business-areas/{id}`

##### <green>Method: </green>Update
> Updates a business area.
> - Endpoint: `PUT api/business-areas/{id}`

##### <green>Method: </green>Patch
> Updates a business area partially.
> - Endpoint: `PATCH api/business-areas/{id}`

##### <green>Method: </green>Delete
> Deletes a business area.
> - Endpoint: `DELETE api/business-areas/{id}`


### Capability Controller
##### <green>Method: </green>GetList
> Retrieves a list of capabilities.
> - Endpoint: `GET api/capabilities`

##### <green>Method: </green>Create
> Creates a new capability.
> - Endpoint: `POST api/capabilities`

##### <green>Method: </green>GetById
> Retrieves a capability by ID.
> - Endpoint: `GET api/capabilities/{id}`

##### <green>Method: </green>Update
> Updates a capability.
> - Endpoint: `PUT api/capabilities/{id}`

##### <green>Method: </green>Patch
> Updates a capability partially.
> - Endpoint: `PATCH api/capabilities/{id}`

##### <green>Method: </green>Delete
> Deletes a capability.
> - Endpoint: `DELETE api/capabilities/{id}`

### Industry Category Controller
##### <green>Method: </green>GetList
> Retrieves a list of industry categories.
> - Endpoint: `GET api/industry-categories`

##### <green>Method: </green>GetFullList
> Retrieves the full list of industry categories.
> - Endpoint: `GET api/industry-categories/all`

##### <green>Method: </green>Create
> Creates a new industry category.
> - Endpoint: `POST api/industry-categories`

##### <green>Method: </green>GetById
> Retrieves an industry category by ID.
> - Endpoint: `GET api/industry-categories/{id}`

##### <green>Method: </green>Update
> Updates an industry category.
> - Endpoint: `PUT api/industry-categories/{id}`

##### <green>Method: </green>Patch
> Updates an industry category partially.
> - Endpoint: `PATCH api/industry-categories/{id}`

##### <green>Method: </green>Delete
> Deletes an industry category.
> - Endpoint: `DELETE api/industry-categories/{id}`

### Industry SubCategory Controller
##### <green>Method: </green>GetList
> Retrieves a list of industry sub-categories.
> - Endpoint: `GET api/industry-sub-categories`

##### <green>Method: </green>GetFullList
> Retrieves the full list of industry sub-categories.
> - Endpoint: `GET api/industry-sub-categories/all`

##### <green>Method: </green>Create
> Creates a new industry sub-category.
> - Endpoint: `POST api/industry-sub-categories`

##### <green>Method: </green>GetById
> Retrieves an industry sub-category by ID.
> - Endpoint: `GET api/industry-sub-categories/{id}`

##### <green>Method: </green>Update
> Updates an industry sub-category.
> - Endpoint: `PUT api/industry-sub-categories/{id}`

##### <green>Method: </green>Patch
> Updates an industry sub-category partially.
> - Endpoint: `PATCH api/industry-sub-categories/{id}`

##### <green>Method: </green>Delete
> Deletes an industry sub-category.
> - Endpoint: `DELETE api/industry-sub-categories/{id}`

### Law Area Controller
##### <green>Method: </green>GetList
> Retrieves a list of law areas.
> - Endpoint: `GET api/law-areas`

##### <green>Method: </green>GetFullList
> Retrieves the full list of law areas.
> - Endpoint: `GET api/law-areas/all`

##### <green>Method: </green>Create
> Creates a new law area.
> - Endpoint: `POST api/law-areas`

##### <green>Method: </green>GetById
> Retrieves a law area by ID.
> - Endpoint: `GET api/law-areas/{id}`

##### <green>Method: </green>Update
> Updates a law area.
> - Endpoint: `PUT api/law-areas/{id}`

##### <green>Method: </green>Patch
> Updates a law area partially.
> - Endpoint: `PATCH api/law-areas/{id}`

##### <green>Method: </green>Delete
> Deletes a law area.
> - Endpoint: `DELETE api/law-areas/{id}`

### Law SubArea Controller
##### <green>Method: </green>GetList
> Retrieves a list of law sub-areas.
> - Endpoint: `GET api/law-sub-areas`

##### <green>Method: </green>GetFullList
> Retrieves the full list of law sub-areas.
> - Endpoint: `GET api/law-sub-areas/all`

##### <green>Method: </green>Create
> Creates a new law sub-area.
> - Endpoint: `POST api/law-sub-areas`

##### <green>Method: </green>GetById
> Retrieves a law sub-area by ID.
> - Endpoint: `GET api/law-sub-areas/{id}`

##### <green>Method: </green>Update
> Updates a law sub-area.
> - Endpoint: `PUT api/law-sub-areas/{id}`

##### <green>Method: </green>Patch
> Updates a law sub-area partially.
> - Endpoint: `PATCH api/law-sub-areas/{id}`

##### <green>Method: </green>Delete
> Deletes a law sub-area.
> - Endpoint: `DELETE api/law-sub-areas/{id}`

### Logs Controller
##### <green>Method: </green>GetAlpLogs
> Retrieves a <blue>paginated</blue> list of ALP logs based on the specified filters.
> - Endpoint: `GET api/logs/getlogs`

##### <green>Method: </green>AlpLogGetById
> Retrieves an ALP log by ID.
> - Endpoint: `GET api/logs/{id}/alplog`

### Notes Controller
##### <green>Method: </green>GetLastNotesForNoteType
> Retrieves the last notes for a specific note type and entity.
> - Endpoint: `GET api/notes/{noteType}/{entityId}`

### Notification Controller
##### <green>Method: </green>GetList
> Retrieves a list of notifications.
> - Endpoint: `GET api/notifications`

##### <green>Method: </green>MarkRead
> Marks a notification as read.
> - Endpoint: `PUT api/notifications/{id}`

### Occupation Controller
##### <green>Method: </green>GetList
> Retrieves a list of occupations.
> - Endpoint: `GET api/occupations`

##### <green>Method: </green>Create
> Creates a new occupation.
> - Endpoint: `POST api/occupations`

##### <green>Method: </green>GetById
> Retrieves a specific occupation by its ID.
> - Endpoint: `GET api/occupations/{id}`

##### <green>Method: </green>Update
> Updates an existing occupation.
> - Endpoint: `PUT api/occupations/{id}`

##### <green>Method: </green>Patch
> Partially updates an existing occupation.
> - Endpoint: `PATCH api/occupations/{id}`

##### <green>Method: </green>Delete
> Deletes an occupation.
> - Endpoint: `DELETE api/occupations/{id}`

### Office Controller
##### <green>Method: </green>GetList
> Retrieves a list of offices.
> - Endpoint: `GET api/offices`

##### <green>Method: </green>GetFullList
> Retrieves a list of all offices.
> - Endpoint: `GET api/offices/all`

##### <green>Method: </green>Create
> Creates a new office.
> - Endpoint: `POST api/offices`

##### <green>Method: </green>GetById
> Retrieves a specific office by its ID.
> - Endpoint: `GET api/offices/{id}`

##### <green>Method: </green>Update
> Updates an existing office.
> - Endpoint: `PUT api/offices/{id}`

##### <green>Method: </green>Patch
> Partially updates an existing office.
> - Endpoint: `PATCH api/offices/{id}`

##### <green>Method: </green>Delete
> Deletes an office.
> - Endpoint: `DELETE api/offices/{id}`

### Organisation Type Controller
##### <green>Method: </green>GetList
> Retrieves a list of organisation types.
> - Endpoint: `GET api/organisation-types`

##### <green>Method: </green>Create
> Creates a new organisation type.
> - Endpoint: `POST api/organisation-types`

##### <green>Method: </green>GetById
> Retrieves a specific organisation type by its ID.
> - Endpoint: `GET api/organisation-types/{id}`

##### <green>Method: </green>Update
> Updates an existing organisation type.
> - Endpoint: `PUT api/organisation-types/{id}`

##### <green>Method: </green>Patch
> Partially updates an existing organisation type.
> - Endpoint: `PATCH api/organisation-types/{id}`

##### <green>Method: </green>Delete
> Deletes an organisation type.
> - Endpoint: `DELETE api/organisation-types/{id}`

### Reminder Controller
##### <green>Method: </green>GetList
> Retrieves a list of reminders.
> - Endpoint: `GET api/reminders`

##### <green>Method: </green>GetById
> Retrieves a specific reminder by its ID.
> - Endpoint: `GET api/reminders/{id}`

##### <green>Method: </green>Create
> Creates a new reminder.
> - Endpoint: `POST api/reminders`

##### <green>Method: </green>SetComplete
> Marks a reminder as complete or incomplete.
> - Endpoint: `PUT api/reminders/{id}`

##### <green>Method: </green>Delete
> Deletes a reminder.
> - Endpoint: `DELETE api/reminders/{id}`

### Segment Controller
##### <green>Method: </green>GetList
> Retrieves a list of segments.
> - Endpoint: `GET api/segments`

##### <green>Method: </green>Create
> Creates a new segment.
> - Endpoint: `POST api/segments`

##### <green>Method: </green>GetById
> Retrieves a specific segment by its ID.
> - Endpoint: `GET api/segments/{id}`

##### <green>Method: </green>Update
> Updates a segment with the specified ID.
> - Endpoint: `PUT api/segments/{id}`

##### <green>Method: </green>Patch
> Partially updates a segment with the specified ID using JSON Patch document.
> - Endpoint: `PATCH api/segments/{id}`

##### <green>Method: </green>Delete
> Deletes a segment with the specified ID.
> - Endpoint: `DELETE api/segments/{id}`

### SharePoint Controller
##### <green>Method: </green>getToken
> Retrieves the SharePoint token.
> - Endpoint: `GET api/sharepoint`

### Standard Disbursement Controller
##### <green>Method: </green>GetList
> Retrieves a list of standard disbursements.
> - Endpoint: `GET api/standard-disbursements`

##### <green>Method: </green>Create
> Creates a new standard disbursement.
> - Endpoint: `POST api/standard-disbursements`

##### <green>Method: </green>GetById
> Retrieves a standard disbursement by ID.
> - Endpoint: `GET api/standard-disbursements/{id}`

##### <green>Method: </green>Update
> Updates a standard disbursement.
> - Endpoint: `PUT api/standard-disbursements/{id}`

##### <green>Method: </green>Patch
> Partially updates a standard disbursement.
> - Endpoint: `PATCH api/standard-disbursements/{id}`

##### <green>Method: </green>Delete
> Deletes a standard disbursement.
> - Endpoint: `DELETE api/standard-disbursements/{id}`

### SubCapability Controller
##### <green>Method: </green>GetList
> Retrieves a list of sub capabilities.
> - Endpoint: `GET api/sub-capabilities`

##### <green>Method: </green>Create
> Creates a new sub capability.
> - Endpoint: `POST api/sub-capabilities`

##### <green>Method: </green>GetById
> Retrieves a sub capability by ID.
> - Endpoint: `GET api/sub-capabilities/{id}`

##### <green>Method: </green>Update
> Updates a sub capability.
> - Endpoint: `PUT api/sub-capabilities/{id}`

##### <green>Method: </green>Patch
> Partially updates a sub capability.
> - Endpoint: `PATCH api/sub-capabilities/{id}`

##### <green>Method: </green>Delete
> Deletes a sub capability.
> - Endpoint: `DELETE api/sub-capabilities/{id}`

### SubSegment Controller
##### <green>Method: </green>GetList
> Retrieves a list of sub segments.

> - Endpoint: `GET api/sub-segments`

##### <green>Method: </green>Create
> Creates a new sub segment.
> - Endpoint: `POST api/sub-segments`

##### <green>Method: </green>GetById
> Retrieves a sub segment by ID.
> - Endpoint: `GET api/sub-segments/{id}`

##### <green>Method: </green>Update
> Updates a sub segment.
> - Endpoint: `PUT api/sub-segments/{id}`

##### <green>Method: </green>Patch
> Partially updates a sub segment.
> - Endpoint: `PATCH api/sub-segments/{id}`

##### <green>Method: </green>Delete
> Deletes a sub segment.
> - Endpoint: `DELETE api/sub-segments/{id}`

### Suggestion Controller
##### <green>Method: </green>GetById
> Retrieves a suggestion by ID.
> - Endpoint: `GET api/feedback/suggestions/{id}`

##### <green>Method: </green>GetList
> Retrieves a list of suggestions.
> - Endpoint: `GET api/feedback/suggestions`

##### <green>Method: </green>Create
> Creates a new suggestion.
> - Endpoint: `POST api/feedback/suggestions`

##### <green>Method: </green>Patch
> Updates a suggestion partially.
> - Endpoint: `PATCH api/feedback/suggestions/{id}`

##### <green>Method: </green>Update
> Updates a suggestion.
> - Endpoint: `PUT api/feedback/suggestions/{id}`

##### <green>Method: </green>Delete
> Deletes a suggestion.
> - Endpoint: `DELETE api/feedback/suggestions/{id}`

### System Info Controller
##### <green>Method: </green>Get
> Retrieves the version information of the API.
> - Endpoint: `GET api/info/version`



## CRM Controllers
This section provides documentation for the CRM related controllers in the ALP application. The controllers are categorized as follows:

- Client Controller
- Contact Controller
- Contact Note Controller
- Organisation Controller
- Organisation Note Controller
- Special Interest Controller


### Client Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of clients.
> - Endpoint: `GET api/clients`

##### <green>Method: </green>GetById
> Retrieves a client by its ID.
> - Endpoint: `GET api/clients/{id}`

##### <green>Method: </green>GetMattersById
> Retrieves a <blue>paginated</blue> list of matters associated with a client.
> - Endpoint: `GET api/clients/{id}/matters`

##### <green>Method: </green>Create
> Creates a new client.
> - Endpoint: `POST api/clients`

##### <green>Method: </green>getOrganisationsByContactIdAsPrimaryContact
> Retrieves a <blue>paginated</blue> list of organizations where the client is the primary contact.
> - Endpoint: `GET api/clients/{id}/pri_organisations`

##### <green>Method: </green>getOrganisationsByContactIdAsSecondaryContact
> Retrieves a <blue>paginated</blue> list of organizations where the client is the secondary contact.
> - Endpoint: `GET api/clients/{id}/sec_organisations`

##### <green>Method: </green>getClientsByOrganisationId
> Retrieves a <blue>paginated</blue> list of clients associated with an organization.
> - Endpoint: `GET api/clients/{id}/clients_by_organisation_id`

##### <green>Method: </green>Patch
> Updates a client by its ID.
> - Endpoint: `PATCH api/clients/{id}`

##### <green>Method: </green>ChangeClientStatus
> Changes the status of one or more clients.
> - Endpoint: `POST api/clients/changeStatus`

### Contact Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of contacts.
> - Endpoint: `GET api/contacts`

##### <green>Method: </green>AddSpecialInterest
> Adds a special interest to a contact.
> - Endpoint: `PUT api/contacts/{id}/special-interest/add`

##### <green>Method: </green>RemoveSpecialInterest
> Removes a special interest from a contact.
> - Endpoint: `PUT api/contacts/{id}/special-interest/remove`

##### <green>Method: </green>GetById
> Retrieves a contact by its ID.
> - Endpoint: `GET api/contacts/{id}`

##### <green>Method: </green>GetReferrerRelationshipContacts
> Retrieves a <blue>paginated</blue> list of contacts who have a referrer relationship with the specified contact.
> - Endpoint: `GET api/contacts/{id}/referrer_relationship`

##### <green>Method: </green>GetReferredRelationshipContacts
> Retrieves a <blue>paginated</blue> list of contacts who have a referred relationship with the specified contact.
> - Endpoint: `GET api/contacts/{id}/referred_relationship`

##### <green>Method: </green>GetFamilyRelationshipContacts
> Retrieves a <blue>paginated</blue> list of contacts who have a family relationship with the specified contact.
> - Endpoint: `GET api/contacts/{id}/family_relationship`

##### <green>Method: </green>GetProfessionalRelationshipContacts
> Retrieves a <blue>paginated</blue> list of contacts who have a professional relationship with the specified contact.
> - Endpoint: `GET api/contacts/{id}/professional_relationship`

##### <green>Method: </green>GetContactClients
> Retrieves a <blue>paginated</blue> list of clients associated with the specified contact.
> - Endpoint: `GET api/contacts/{id}/clients`

##### <green>Method: </green>Create
> Creates a new contact.
> - Endpoint: `POST api/contacts`

##### <green>Method: </green>Update
> Updates a contact by its ID.
> - Endpoint: `PUT api/contacts/{id}`

##### <green>Method: </green>Patch
> Updates a contact by its ID using a JSON patch document.
> - Endpoint: `PATCH api/contacts/{id}`

##### <green>Method: </green>UploadProfilePicture
> Uploads a profile picture for a contact.
> - Endpoint: `POST api/contacts/{id}/profilePicture`

##### <green>Method: </green>GetContactRelationshipsById
> Retrieves contact relationships by the contact's ID.
> - Endpoint: `GET api/contacts/{id}/contact_relationships`

##### <green>Method: </green>Patch
> Updates contact relationships by the contact's ID using a JSON patch document.
> - Endpoint: `PATCH api/contacts/{id}/contact_relationships`

##### <green>Method: </green>AddSubSegment
> Adds a sub-segment to a contact.
> - Endpoint: `PUT api/contacts/{id}/sub-segments/add`

##### <green>Method: </green>RemoveSubSegment
> Removes a sub-segment from a contact.
> - Endpoint: `PUT api/contacts/{id}/sub-segments/remove`

##### <green>Method: </green>Delete
> Deletes a contact by its ID.
> - Endpoint: `DELETE api/contacts/{id}`

##### <green>Method: </green>GetMetadataParameters
> Retrieves metadata parameters for contacts.
> - Endpoint: `GET api/contacts/metadata`

##### <green>Method: </green>GetMetadataValues
> Retrieves metadata values for a contact by its ID.
> - Endpoint: `GET api/contacts/{id}/metadata`

##### <green>Method: </green>SetMetadataValue
> Sets a metadata value for a contact by its ID.
> - Endpoint: `POST api/contacts/{id}/metadata`

##### <green>Method: </green>AddMetadataValue
> Adds a metadata value for a contact by its ID.
> - Endpoint: `POST api/contacts/{id}/metadata/values`

##### <green>Method: </green>RemoveMetadataValue
> Removes a metadata value from a contact by its ID and value ID.
> - Endpoint: `DELETE api/contacts/{id}/metadata/values/{valueId}`

##### <green>Method: </green>GetContactRelationship
> Retrieves contact relationships for a contact by its ID.
> - Endpoint: `GET api/contacts/{id}/relationship`

##### <green>Method: </green>CreateContactRelationship
> Creates a contact relationship for a contact by its ID.
> - Endpoint: `POST api/contacts/{id}/relationship`

##### <green>Method: </green>getContactsbyContactList
> Retrieves a <blue>paginated</blue> list of contacts associated with the specified contact list.
> - Endpoint: `GET api/contacts/{id}/contacts_by_organisation_id`

##### <green>Method: </green>ChangeContactStatus
> Changes the status of one or more contacts.
> - Endpoint: `POST api/contacts/changeStatus`

### Contact Note Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of notes for a specific contact.
> - Endpoint: `GET api/contacts/{id}/notes`

##### <green>Method: </green>GetNote
> Retrieves a specific note for a contact.
> - Endpoint: `GET api/contacts/{id}/notes/{noteid}`

##### <green>Method: </green>Create
> Creates a new note for a contact.
> - Endpoint: `POST api/contacts/{id}/notes`

##### <green>Method: </green>CreateUpdate
> Creates or updates a note for a contact. If a note with the given ID exists, it updates the existing note; otherwise, it creates a new note.
> - Endpoint: `POST api/contacts/{id}/notes/{noteid}`

### Organisation Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of organisations.
> - Endpoint: `GET api/organisations`

##### <green>Method: </green>GetById
> Retrieves a specific organisation by its ID.
> - Endpoint: `GET api/organisations/{id}`

##### <green>Method: </green>Create
> Creates a new organisation.
> - Endpoint: `POST api/organisations`

##### <green>Method: </green>Update
> Updates an existing organisation.
> - Endpoint: `PUT api/organisations/{id}`

##### <green>Method: </green>Patch
> Applies partial updates to an organisation using JSON Patch.
> - Endpoint: `PATCH api/organisations/{id}`

##### <green>Method: </green>Delete
> Deletes an organisation.
> - Endpoint: `DELETE api/organisations/{id}`

##### <green>Method: </green>GetMetadataParameters
> Retrieves metadata parameters for organisations.
> - Endpoint: `GET api/organisations/metadata`

##### <green>Method: </green>GetMetadataValues
> Retrieves metadata values for a specific organisation.
> - Endpoint: `GET api/organisations/{id}/metadata`

##### <green>Method: </green>SetMetadataValue
> Sets a metadata value for a specific organisation.
> - Endpoint: `POST api/organisations/{id}/metadata`

##### <green>Method: </green>AddMetadataValue
> Adds a metadata value for a specific organisation.
> - Endpoint: `POST api/organisations/{id}/metadata/values`

##### <green>Method: </green>RemoveMetadataValue
> Removes a metadata value from a specific organisation.
> - Endpoint: `DELETE api/organisations/{id}/metadata/values/{valueId}`

##### <green>Method: </green>GetContactRelationship
> Retrieves a <blue>paginated</blue> list of organisation relationships for a specific organisation.
> - Endpoint: `GET api/organisations/{id}/relationship/`

##### <green>Method: </green>createContactRelationship
> Creates a new contact relationship for a specific organisation.
> - Endpoint: `POST api/organisations/{id}/relationship/`

##### <green>Method: </green>ChangeOrganisationStatus
> Changes the status of one or more organisations.
> - Endpoint: `POST api/organisations/changeStatus`
### Organisation Note Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of notes for a specific organisation.
> - Endpoint: `GET api/organisations/{id}/notes`

##### <green>Method: </green>Create
> Creates a new note for a specific organisation.
> - Endpoint: `POST api/organisations/{id}/notes`

##### <green>Method: </green>GetNote
> Retrieves a specific note by its ID for a specific organisation.
> - Endpoint: `GET api/organisations/{id}/notes/{noteid}`

##### <green>Method: </green>CreateUpdate
> Creates or updates a note for a specific organisation.
> - Endpoint: `POST api/organisations/{id}/notes/{noteid}`

### Special Interest Controller
##### <green>Method: </green>GetList
> Retrieves a <blue>paginated</blue> list of special interests.
> - Endpoint: `GET api/specialinterest`


## Documents Controllers

### ClientDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific client.
> - Endpoint: `POST api/clients/{id}/documents`

### ContactDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific contact.
> - Endpoint: `POST api/contacts/{id}/documents`

##### <green>Method:</green>Upload
> Uploads a document for a specific contact.
> - Endpoint: `POST api/contacts/{id}/documents/upload`

##### <green>Method:</green>CreateFromResource
> Creates a document for a specific contact from a resource.
> - Endpoint: `POST api/contacts/{id}/documents/resources/{resourceId}`

### Document Controller

##### <green>Method:</green>GetActiveList
> Retrieves a paginated list of active documents.
> - Endpoint: `GET api/document`

##### <green>Method:</green>GetById
> Retrieves a document by its ID.
> - Endpoint: `GET api/document/{id}`

##### <green>Method:</green>GetLinkById
> Retrieves a signed link for a document by its ID.
> - Endpoint: `GET api/document/{id}/link`

##### <green>Method:</green>GetSelectLinkById
> Retrieves a select signed link for multiple documents.
> - Endpoint: `POST api/document/Selectlink`

##### <green>Method:</green>Download
> Downloads a document by its ID.
> - Endpoint: `GET api/document/{id}/download`

##### <green>Method:</green>GetEditOnlineLink
> Retrieves an edit online link for a document by its ID.
> - Endpoint: `GET api/document/{id}/edit/online`

##### <green>Method:</green>GetEditWithAppLink
> Retrieves an edit with app link for a document by its ID.
> - Endpoint: `GET api/document/{id}/edit/app`

##### <green>Method:</green>Update
> Updates a document by its ID.
> - Endpoint: `PUT api/document/{id}`

##### <green>Method:</green>StartEditing
> Starts editing a document by its ID.
> - Endpoint: `PUT api/document/{id}/edit`

##### <green>Method:</green>FinishEditing
> Finishes editing a document by its ID.
> - Endpoint: `PUT api/document/{id}/finish`

##### <green>Method:</green>Delete
> Deletes a document by its ID.
> - Endpoint: `DELETE api/document/{id}`

##### <green>Method:</green>DeleteSelectedDocuments
> Deletes multiple documents by their IDs.
> - Endpoint: `DELETE api/document/selectedDocuments`

##### <green>Method:</green>GetVersions
> Retrieves a paginated list of versions for a document by its ID.
> - Endpoint: `GET api/document/{id}/versions`

##### <green>Method:</green>Version
> Uploads a new version of a document.
> - Endpoint: `POST api/document/{id}/version`

##### <green>Method:</green>RestoreVersion
> Restores a specific version of a document.
> - Endpoint: `POST api/document/{id}/versions/{versionId}`

##### <green>Method:</green>CreateReminder
> Creates a reminder for a document.
> - Endpoint: `POST api/document/{id}/reminder`

##### <green>Method:</green>GetMetadataParameters
> Retrieves metadata parameters for documents.
> - Endpoint: `GET api/document/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves metadata values for a document by its ID.
> - Endpoint: `GET api/document/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets a metadata value for a document by its ID.
> - Endpoint: `POST api/document/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a document by its ID.
> - Endpoint: `POST api/document/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value for a document by its ID and value ID.
> - Endpoint: `DELETE api/document/{id}/metadata/values/{valueId}`

### DocumentReview Controller
##### <green>Method:</green>GetRequestsReceived
> Retrieves a paginated list of document review requests received by the reviewer.
> - Endpoint: `GET api/document-review/review`

##### <green>Method:</green>GetRequestsRequested
> Retrieves a paginated list of document review requests requested by the requester.
> - Endpoint: `GET api/document-review/requested`

##### <green>Method:</green>Request
> Creates a new document review request.
> - Endpoint: `POST api/document-review`

##### <green>Method:</green>Complete
> Marks a document review as complete by its ID.
> - Endpoint: `PUT api/document-review/{id}/complete`

##### <green>Method:</green>Acknowledge
> Acknowledges the completion of a document review by its ID.
> - Endpoint: `PUT api/document-review/{id}/acknowledge`

### FeedBackDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of feedback documents of type "Bug Report" for a specific ID.
> - Endpoint: `POST api/feedback/{id}/documents/getBugList`

##### <green>Method:</green>GetSuggestionList
> Retrieves a paginated list of feedback documents of type "Suggestion" for a specific ID.
> - Endpoint: `POST api/feedback/{id}/documents/getsuggestionlist`

##### <green>Method:</green>Upload
> Uploads a feedback document of type "Bug Report" for a specific ID.
> - Endpoint: `POST api/feedback/{id}/documents/upload`

##### <green>Method:</green>UploadSuggestion
> Uploads a feedback document of type "Suggestion" for a specific ID.
> - Endpoint: `POST api/feedback/{id}/documents/uploadSuggestion`

##### <green>Method:</green>DeleteFeedBackDocument
> Deletes a feedback document by its ID.
> - Endpoint: `DELETE api/feedback/{bugsuggesionid}/documents/deleteFeedBackDocument`

##### <green>Method:</green>GetDocumentLinkById
> Retrieves the document link for a feedback document by its ID.
> - Endpoint: `GET api/feedback/{id}/documents/getDocumentLinkById/{feedBackDocumentId}`

### MatterDocument Controller

##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific matter ID.
> - Endpoint: `POST api/matters/{id}/documents`

##### <green>Method:</green>Upload
> Uploads a document for a specific matter ID.
> - Endpoint: `POST api/matters/{id}/documents/upload`

##### <green>Method:</green>CreateFromResource
> Creates a document for a specific matter ID from a resource ID.
> - Endpoint: `POST api/matters/{id}/documents/resources/{resourceId}`

### OfferingDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific offering ID.
> - Endpoint: `POST api/offerings/{id}/documents`

##### <green>Method:</green>Upload
> Uploads a document for a specific offering ID.
> - Endpoint: `POST api/offerings/{id}/documents/upload`

##### <green>Method:</green>CreateFromResource
> Creates a document for a specific offering ID from a resource ID.
> - Endpoint: `POST api/offerings/{id}/documents/resources/{resourceId}`

### OrganisationDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific organisation ID.
> - Endpoint: `POST api/organisations/{id}/documents`

##### <green>Method:</green>Upload
> Uploads a document for a specific organisation ID.
> - Endpoint: `POST api/organisations/{id}/documents/upload`

##### <green>Method:</green>CreateFromResource
> Creates a document for a specific organisation ID from a resource ID.
> - Endpoint: `POST api/organisations/{id}/documents/resources/{resourceId}`

### ProjectDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for a specific project ID.
> - Endpoint: `POST api/projects/{id}/documents`

##### <green>Method:</green>Upload
> Uploads a document for a specific project ID.
> - Endpoint: `POST api/projects/{id}/documents/upload`

##### <green>Method:</green>CreateFromResource
> Creates a document for a specific project ID from a resource ID.
> - Endpoint: `POST api/projects/{id}/documents/resources/{resourceId}`

### ResourceDocument Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of documents for all resources.
> - Endpoint: `POST api/resources`

##### <green>Method:</green>Upload
> Uploads a document for a resource.
> - Endpoint: `POST api/resources/upload`

### ResourceUrl Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of resource URLs.
> - Endpoint: `GET /api/resource-urls`

##### <green>Method:</green>Create
> Creates a new resource URL.
> - Endpoint: `POST /api/resource-urls`

##### <green>Method:</green>GetById
> Retrieves a resource URL by its ID.
> - Endpoint: `GET /api/resource-urls/{id}`

##### <green>Method:</green>Update
> Updates a resource URL.
> - Endpoint: `PUT /api/resource-urls/{id}`

##### <green>Method:</green>Patch
> Partially updates a resource URL using JSON Patch.
> - Endpoint: `PATCH /api/resource-urls/{id}`

##### <green>Method:</green>Delete
> Deletes a resource URL by its ID.
> - Endpoint: `DELETE /api/resource-urls/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves metadata parameters for resource URLs.
> - Endpoint: `GET /api/resource-urls/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves metadata values for a specific resource URL.
> - Endpoint: `GET /api/resource-urls/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets a metadata value for a specific resource URL.
> - Endpoint: `POST /api/resource-urls/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a specific resource URL.
> - Endpoint: `POST /api/resource-urls/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value for a specific resource URL.
> - Endpoint: `DELETE /api/resource-urls/{id}/metadata/values/{valueId}`


## Matter Controllers

### Disbursement Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of disbursements for a specific matter.
> - Endpoint: `GET /api/matters/{matterId}/disbursements`

##### <green>Method:</green>Create
> Creates a new disbursement for a specific matter.
> - Endpoint: `POST /api/matters/{matterId}/disbursements`

##### <green>Method:</green>GetById
> Retrieves a disbursement by its ID for a specific matter.
> - Endpoint: `GET /api/matters/{matterId}/disbursements/{id}`

##### <green>Method:</green>Update
> Updates a disbursement for a specific matter.
> - Endpoint: `PUT /api/matters/{matterId}/disbursements/{id}`

##### <green>Method:</green>Patch
> Partially updates a disbursement for a specific matter using JSON Patch.
> - Endpoint: `PATCH /api/matters/{matterId}/disbursements/{id}`

##### <green>Method:</green>Delete
> Deletes a disbursement by its ID for a specific matter.
> - Endpoint: `DELETE /api/matters/{matterId}/disbursements/{id}`

### Invoice Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of invoices based on the specified filters.
> - Endpoint: `GET api/invoices`

##### <green>Method:</green>GetAwaitingApprovalList
> Retrieves a paginated list of invoices in the "Awaiting Approval" status.
> - Endpoint: `GET api/invoices/awaiting-approval`

##### <green>Method:</green>GetApprovedList
> Retrieves a paginated list of invoices in the "Approved" status.
> - Endpoint: `GET api/invoices/approved`

##### <green>Method:</green>GetInvoicePdfLink
> Retrieves a link to download the PDF of a specific invoice.
> - Endpoint: `GET api/invoices/pdf/{invoiceId}`

##### <green>Method:</green>GetMatterWIPReportPdfLink
> Retrieves a link to download the PDF of the Work in Progress (WIP) report for a specific matter.
> - Endpoint: `GET api/invoices/pdf/wip/{matterId}`

##### <green>Method:</green>getFriendlyReminderPDFDownload
> Retrieves a link to download the PDF of a friendly reminder for a specific invoice.
> - Endpoint: `GET api/invoices/friendly-reminder/pdf/{invoiceId}`

##### <green>Method:</green>getFirstReminderPDFDownload
> Retrieves a link to download the PDF of the first reminder for a specific invoice.
> - Endpoint: `GET api/invoices/first-reminder/pdf/{invoiceId}`

##### <green>Method:</green>getSecondReminderPDFDownload
> Retrieves a link to download the PDF of the second reminder for a specific invoice.
> - Endpoint: `GET api/invoices/second-reminder/pdf/{invoiceId}`
##### <green>Method:</green>getInvoiceStatementPDFDownload
> Retrieves a link to download the PDF of the invoice statement for a specific client.
> - Endpoint: `GET api/invoices/invoicestatement/pdf/{clientId}`

##### <green>Method:</green>sendFriendlyReminderEmail
> Sends a friendly reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/friendly-reminder/email/{invoiceId}`

##### <green>Method:</green>sendFirstReminderEmail
> Sends the first reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/first-reminder/email/{invoiceId}`

##### <green>Method:</green>sendSecondReminderEmail
> Sends the second reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/second-reminder/email/{invoiceId}`

##### <green>Method:</green>sendInvoiceStatementEmail
> Sends the invoice statement email for a specific client.
> - Endpoint: `GET api/invoices/invoicestatement/email/{clientId}`

##### <green>Method:</green>getInvoiceLifeTimebyClientId
> Retrieves the lifetime value of invoices for a specific client.
> - Endpoint: `GET api/invoices/life-time-value/{id}`

##### <green>Method:</green>Create
> Creates a new invoice based on the provided input.
> - Endpoint: `POST api/invoices`

##### <green>Method:</green>GetById
> Retrieves the details of a specific invoice.
> - Endpoint: `GET api/invoices/{id}`

##### <green>Method:</green>GetInvoicesForMatter
> Retrieves a paginated list of invoices associated with a specific matter.
> - Endpoint: `GET api/invoices/formatter/{matterId}`

##### <green>Method:</green>GetInvoicesById
> Retrieves a paginated list of invoices associated with a specific client.
> - Endpoint: `GET api/invoices/forclient/{clientId}`

##### <green>Method:</green>GetTimeEntries
> Retrieves a paginated list of time entries associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/time-entries`

##### <green>Method:</green>GetAvailableTimeEntries
> Retrieves a paginated list of available time entries that can be added to a specific invoice.
> - Endpoint: `GET api/invoices/{id}/available-time-entries`

##### <green>Method:</green>AddTimeEntry
> Adds a time entry to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/time-entries/{timeEntryId}`

##### <green>Method:</green>AddAllTimeEntry
> Adds all available time entries to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/all-time-entries`

##### <green>Method:</green>RemoveTimeEntry
> Removes a time entry from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/time-entries/{timeEntryId}`

##### <green>Method:</green>GetDisbursements
> Retrieves a paginated list of disbursements associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/disbursements`

##### <green>Method:</green>GetAvailableDisbursements
> Retrieves a paginated list of available disbursements that can be added to a specific invoice.
> - Endpoint: `GET api/invoices/{id}/available-disbursements`

##### <green>Method:</green>AddDisbursement
> Adds a disbursement to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/disbursements/{disbursementId}`

##### <green>Method:</green>RemoveDisbursement
> Removes a disbursement from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/disbursements/{disbursementId}`

##### <green>Method:</green>Update
> Updates a specific disbursement from an invoice based on the provided input.
> - Endpoint: `PUT api/invoices/{id}/update-disbursements/{disbursementId}`

##### <green>Method:</green>GetFixedPriceItems
> Retrieves a paginated list of fixed price items associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/fixed-price-items`

##### <green>Method:</green>AddFixedPriceItem
> Adds a fixed price item to a specific invoice.
> - Endpoint: `POST api/invoices/{id}/fixed-price-items`

##### <green>Method:</green>RemoveFixedPriceItem
> Removes a fixed price item from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/fixed-price-items/{fixedPriceItemId}`

##### <green>Method:</green>Update
> Updates a specific fixed price item from an invoice based on the provided input.
> - Endpoint: `PUT api/invoices/{id}/fixed-price-items/{fixedPriceItemId}`

##### <green>Method:</green>GetXeroPaymentHistoryFromXero
> Retrieves a paginated list of payment history from Xero for a specific invoice.
> - Endpoint: `GET api/invoices/get-xero-payment-history-from-xero/{invoiceId}`

##### <green>Method:</green>SyncAllInvoicePaymentsFromXero
> Syncs all invoice payments from Xero.
> - Endpoint: `POST api/invoices/sync-all-invoice-payments-from-xero`

##### <green>Method:</green>SyncXeroPaymentHistory
> Syncs the payment history from Xero for a specific invoice.
> - Endpoint: `POST api/invoices/sync-payments-by-invoice-id/{invoiceId}`

##### <green>Method:</green>ReSyncInvoiceToXero
> Resyncs a specific invoice to Xero.
> - Endpoint: `POST api/invoices/re-sync-to-xero-by-invoice-id/{invoiceId}`

##### <green>Method:</green>GetCredits
> Retrieves credits for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/credits`

##### <green>Method:</green>GetPreviewLink
> Retrieves the preview link for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/preview`

##### <green>Method:</green>GetPreviewDownload
> Retrieves the preview download for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/preview/download`

##### <green>Method:</green>GeneratePreview
> Generates a preview for a specific invoice.
> - Endpoint: `POST api/invoices/{id}/preview`

##### <green>Method:</green>SendDraftForApproval
> Sends a draft invoice for approval.
> - Endpoint: `PUT api/invoices/{id}/approval`

##### <green>Method:</green>RejectDraft
> Rejects a draft invoice.
> - Endpoint: `PUT api/invoices/{id}/reject`

##### <green>Method:</green>ApproveDraft
> Approves a draft invoice.
> - Endpoint: `PUT api/invoices/{id}/approved`

##### <green>Method:</green>SendInvoice
> Sends an invoice.
> - Endpoint: `PUT api/invoices/{id}/send`

##### <green>Method:</green>Delete
> Deletes a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/delete`

##### <green>Method:</green>UpdateDoNotCollect
> Updates the "Do Not Collect" status for a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/donotcollect`

##### <green>Method:</green>UpdateInvoiceDate
> Updates the invoice date for a specific invoice.
> - Endpoint: `POST api/invoices/{id}/invoicedate`




### InvoiceNote Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of notes associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/notes`

##### <green>Method:</green>Create
> Creates a new note for a specific invoice.
> - Endpoint: `POST api/invoices/{id}/notes`

##### <green>Method:</green>GetNote
> Retrieves a specific note associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/notes/{noteid}`

##### <green>Method:</green>CreateUpdate
> Creates or updates a specific note associated with a specific invoice.
> - Endpoint: `POST api/invoices/{id}/notes/{noteid}`

### MatterComponent Controller
##### <green>Method:</green>GetList
> Retrieves a list of matter components associated with a specific matter and outcome.
> - Endpoint: `GET api/matters/{matterId}/outcomes/{outcomeId}/components`

##### <green>Method:</green>GetAvailableList
> Retrieves a list of available offering components associated with a specific matter and outcome.
> - Endpoint: `GET api/matters/{matterId}/outcomes/{outcomeId}/components/available`

##### <green>Method:</green>GetById
> Retrieves a specific matter component associated with a specific matter and outcome.
> - Endpoint: `GET api/matters/{matterId}/outcomes/{outcomeId}/components/{id}`

##### <green>Method:</green>Import
> Imports an offering component to a specific matter and outcome.
> - Endpoint: `POST api/matters/{matterId}/outcomes/{outcomeId}/components/import`

##### <green>Method:</green>AddTeamMember
> Adds a team member to a specific matter component associated with a specific matter and outcome.
> - Endpoint: `PUT api/matters/{matterId}/outcomes/{outcomeId}/components/{id}/add`

##### <green>Method:</green>RemoveTeamMember
> Removes a team member from a specific matter component associated with a specific matter and outcome.
> - Endpoint: `PUT api/matters/{matterId}/outcomes/{outcomeId}/components/{id}/remove`

##### <green>Method:</green>Patch
> Partially updates a specific matter component associated with a specific matter and outcome.
> - Endpoint: `PATCH api/matters/{matterId}/outcomes/{outcomeId}/components/{componentId}`

##### <green>Method:</green>Delete
> Deletes a specific matter component associated with a specific matter and outcome.
> - Endpoint: `DELETE api/matters/{matterId}/outcomes/{outcomeId}/components/{componentId}`

### MatterComponentResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources associated with a specific matter component.
> - Endpoint: `GET api/matters/{matterId}/outcomes/{outcomeId}/components/{componentId}/resources`

##### <green>Method:</green>Create
> Creates a new resource associated with a specific matter component.
> - Endpoint: `POST api/matters/{matterId}/outcomes/{outcomeId}/components/{componentId}/resources`

##### <green>Method:</green>Delete
> Deletes a specific resource associated with a specific matter component.
> - Endpoint: `DELETE api/matters/{matterId}/outcomes/{outcomeId}/components/{componentId}/resources/{id}`

### Matter Controller
##### <green>Method:</green>GetListForCurrentUser
> Retrieves a paginated list of matters for the current authenticated user.
> - Endpoint: `GET api/matters/me`

##### <green>Method:</green>GetList
> Retrieves a paginated list of matters.
> - Endpoint: `GET api/matters`

##### <green>Method:</green>GetMattersList
> Retrieves a paginated list of matters.
> - Endpoint: `GET api/matters/list`

##### <green>Method:</green>GetMatterReportList
> Retrieves a paginated list of matters for generating a report.
> - Endpoint: `GET api/matters/report`

##### <green>Method:</green>GetMatterSelectorList
> Retrieves a paginated list of matters for the matter selector.
> - Endpoint: `GET api/matters/selector`

##### <green>Method:</green>GetMatterReportPdf
> Retrieves a matter report PDF.
> - Endpoint: `GET api/matters/pdf`

##### <green>Method:</green>GetById
> Retrieves a matter by its ID.
> - Endpoint: `GET api/matters/{id}`

##### <green>Method:</green>GetEventsById
> Retrieves a paginated list of events for a specific matter.
> - Endpoint: `GET api/matters/{id}/events`

##### <green>Method:</green>Create
> Creates a new matter.
> - Endpoint: `POST api/matters`

##### <green>Method:</green>Update
> Updates a specific matter.
> - Endpoint: `PUT api/matters/{id}`

##### <green>Method:</green>Patch
> Partially updates a specific matter using JSON patch.
> - Endpoint: `PATCH api/matters/{id}`

##### <green>Method:</green>AddTeamMember
> Adds a team member to a specific matter.
> - Endpoint: `PUT api/matters/{id}/add`

##### <green>Method:</green>RemoveTeamMember
> Removes a team member from a specific matter.
> - Endpoint: `PUT api/matters/{id}/remove`

##### <green>Method:</green>MarkQuoted
> Marks a specific matter as quoted.
> - Endpoint: `PUT api/matters/{id}/quoted`

##### <green>Method:</green>MarkLost
> Marks a specific matter as lost.
> - Endpoint: `PUT api/matters/{id}/lost`

##### <green>Method:</green>Reopen
> Reopens a specific matter.
> - Endpoint: `PUT api/matters/{id}/reopen`

##### <green>Method:</green>ReopenClosedMatter
> Reopens a closed matter.
> - Endpoint: `PUT api/matters/{id}/reopenclosedmatter`

##### <green>Method:</green>MarkOpen
> Marks a specific matter as open.
> - Endpoint: `PUT api/matters/{id}/open`

##### <green>Method:</green>MarkClosed
> Marks a specific matter as closed.
> - Endpoint: `PUT api/matters/{id}/closed`

##### <green>Method:</green>MarkFinalised
> Marks a specific matter as finalised.
> - Endpoint: `PUT api/matters/{id}/finalise`

##### <green>Method:</green>SetWaitingForExternal
> Sets the waiting for external tag on a specific matter.
> - Endpoint: `PUT api/matters/{id}/waiting-external`

##### <green>Method:</green>SetWaitingForInternal
> Sets the waiting for internal tag on a specific matter.
> - Endpoint: `PUT api/matters/{id}/waiting-internal`

##### <green>Method:</green>SetToBeFollowedUp
> Sets the to be followed up tag on a specific matter.
> - Endpoint: `PUT api/matters/{id}/follow-up`

##### <green>Method:</green>ReSyncSharePointFoler
> Resynchronizes the SharePoint folder for a specific matter.
> - Endpoint: `PUT api/matters/{id}/resyncSharePointFolder`

##### <green>Method:</green>Delete
> Deletes a specific matter.
> - Endpoint: `DELETE api/matters/{id}`

##### <green>Method:</green>AddOffering
> Adds an offering to a specific matter.
> - Endpoint: `POST api/matters/{id}/offerings/{offeringId}`

##### <green>Method:</green>RemoveOffering
> Removes an offering from a specific matter.
> - Endpoint: `DELETE api/matters/{id}/offerings/{offeringId}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters for matters.
> - Endpoint: `GET api/matters/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific matter.
> - Endpoint: `GET api/matters/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets the metadata value for a specific matter.
> - Endpoint: `POST api/matters/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a specific matter.
> - Endpoint: `POST api/matters/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value from a specific matter.
> - Endpoint: `DELETE api/matters/{id}/metadata/values/{valueId}`

##### <green>Method:</green>ReassginEmailsToNewMatter
> Reassigns emails to a new matter.
> - Endpoint: `PUT api/matters/{id}/emailreassgin`

##### <green>Method:</green>AddOfferingMatter
> Adds an offering to a specific matter, specifying the outcome and component.
> - Endpoint: `POST api/matters/{id}/offerings/matter`

##### <green>Method:</green>CreateBuildMatter
> Creates a new build matter.
> - Endpoint: `POST api/matters/offerings/buildmatter`

### MatterInvoice Controller
##### <green>Method:</green>GetList
> Retrieves a list of invoices for a specific matter.
> - Endpoint: `GET api/matters/{matterId}/invoices`

### MatterNote Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of notes for a matter.
> - Endpoint: `GET api/matters/{id}/notes`

##### <green>Method:</green>Create
> Creates a new note for a matter.
> - Endpoint: `POST api/matters/{id}/notes`

##### <green>Method:</green>GetNote
> Retrieves a specific note for a matter.
> - Endpoint: `GET api/matters/{id}/notes/{noteid}`

##### <green>Method:</green>CreateUpdate
> Creates or updates a note for a matter.
> - Endpoint: `POST api/matters/{id}/notes/{noteid}`

### MatterOutcome Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of outcomes for a matter.
> - Endpoint: `GET api/matters/{matterId}/outcomes`

##### <green>Method:</green>GetAvailableList
> Retrieves a paginated list of available outcomes for a matter.
> - Endpoint: `GET api/matters/{matterId}/outcomes/available`

##### <green>Method:</green>GetById
> Retrieves a specific outcome for a matter by its ID.
> - Endpoint: `GET api/matters/{matterId}/outcomes/{id}`

##### <green>Method:</green>Import
> Imports an offering outcome to a matter.
> - Endpoint: `POST api/matters/{matterId}/outcomes/import`

##### <green>Method:</green>Delete
> Deletes an outcome from a matter.
> - Endpoint: `DELETE api/matters/{matterid}/outcomes/{outcomeId}`

### MatterStatistics Controller
##### <green>Method:</green>GetOverview
> Retrieves the overview statistics for a matter, including time spent in each status.
> - Endpoint: `GET api/statistics/matters/{id}/time-in-status`

### MatterSyntaq Controller
##### <green>Method:</green>GetList
> Retrieves the list of active Syntaq forms for a matter.
> - Endpoint: `GET api/matters/{id}/syntaq`

##### <green>Method:</green>GetEmbed
> Retrieves the embed information for a specific Syntaq form associated with a matter.
> - Endpoint: `GET api/matters/{id}/syntaq/{formId}/embed`

### MatterTrust Controller
##### <green>Method:</green>GetSummary
> Retrieves the summary of trust information for a matter.
> - Endpoint: `GET api/matters/{id}/trust/summary`

##### <green>Method:</green>GetTransactionRequestList
> Retrieves the list of trust transaction requests for a matter.
> - Endpoint: `GET api/matters/{id}/trust/requests`

##### <green>Method:</green>GetTransactionList
> Retrieves the list of trust transactions for a matter.
> - Endpoint: `GET api/matters/{id}/trust/transactions`

##### <green>Method:</green>CreateTransactionRequest
> Creates a trust transaction request for a matter.
> - Endpoint: `POST api/matters/{id}/trust`

##### <green>Method:</green>AssignUnknownTransactionToMatter
> Assigns an unknown trust transaction to a matter.
> - Endpoint: `POST api/matters/{id}/trust/transaction/{transactionId}/assignUnknownTransactionToMatter`

### StatutoryTrust Controller
##### <green>Method:</green>CreateTransactionRequest
> Creates a statutory trust transaction request.
> - Endpoint: `POST api/stautory-trust-accounts`

### TrustAccount Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of trust accounts.
> - Endpoint: `GET api/trust-accounts`

##### <green>Method:</green>GetById
> Retrieves a trust account by ID.
> - Endpoint: `GET api/trust-accounts/{id}`

##### <green>Method:</green>Create
> Creates a trust account.
> - Endpoint: `POST api/trust-accounts`

##### <green>Method:</green>GetRequestsPending
> Retrieves paginated pending trust transaction requests for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/requests`

##### <green>Method:</green>ApproveRequest
> Approves a specific trust transaction request.
> - Endpoint: `PUT api/trust-accounts/{id}/requests/{requestId}/approve`

##### <green>Method:</green>RejectRequest
> Rejects a specific trust transaction request with a reason.
> - Endpoint: `POST api/trust-accounts/{id}/requests/{requestId}/reject`

##### <green>Method:</green>GetBankTransactions
> Retrieves paginated bank transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions`

##### <green>Method:</green>ImportBankTransaction
> Imports bank transactions for a specific trust account from a file.
> - Endpoint: `POST api/trust-accounts/{id}/bank-transactions/import`

##### <green>Method:</green>GetUnreconciledBankTransactions
> Retrieves paginated unreconciled bank transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions/unreconciled`

##### <green>Method:</green>RecordUnknownDepositOnBankTransaction
> Records an unknown deposit on a specific bank transaction.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions/{transactionId}/record-unknow-deposit`

##### <green>Method:</green>GetTransactions
> Retrieves paginated trust transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/transactions`

##### <green>Method:</green>GetTrustTransactionReceiptDownloadLink
> Retrieves the download link for the receipt of a specific trust transaction.
> - Endpoint: `GET api/trust-accounts/transactions/{transactionId}/receipt`

##### <green>Method:</green>GetUnreconciledTransactions
> Retrieves paginated unreconciled trust transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/transactions/unreconciled`

##### <green>Method:</green>ReconcileTransactions
> Reconciles trust transactions for a specific trust account.
> - Endpoint: `POST api/trust-accounts/{id}/reconcile`

##### <green>Method:</green>GetTrialBalance
> Retrieves the trial balance for a specific trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/trial-balance`

##### <green>Method:</green>GetTrialBalanceDownload
> Triggers the download of the trial balance report for a specific trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/trial-balance/download`

##### <green>Method:</green>GetStatutoryTrustStatementDownload
> Triggers the download of the statutory trust statement for a specific trust account.
> - Endpoint: `POST api/trust-accounts/{id}/statement/download`

##### <green>Method:</green>GetNetBalanceForMatter
> Retrieves the net balance for a specific matter within a trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/net-balance-for-matter/{matterId}`

##### <green>Method:</green>GetNetBalanceForMatterDownload
> Triggers the download of the net balance report for a specific matter within a trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/net-balance-for-matter/{matterId}/download`

##### <green>Method:</green>GetNetBalanceForClient
> Retrieves the net balance for a specific client within a trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/net-balance-for-client/{clientId}`

##### <green>Method:</green>GetNetBalanceForClientDownload
> Triggers the download of the net balance report for a specific client within a trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/net-balance-for-client/{clientId}/download`

##### <green>Method:</green>GetReconciliationReport
> Retrieves the reconciliation report for a specific trust account within a given date range.
> - Endpoint: `GET api/trust-accounts/{id}/reconciliation-report`

##### <green>Method:</green>GetReconciliationReportDownload
> Triggers the download of the reconciliation report for a specific trust account within a given date range.
> - Endpoint: `POST api/trust-accounts/{id}/reconciliation-report/download`

##### <green>Method:</green>GetLedgers
> Retrieves paginated trust ledgers.
> - Endpoint: `GET api/trust-accounts/ledgers`

##### <green>Method:</green>GetLedgerbyId
> Retrieves a trust ledger by ID.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}`

##### <green>Method:</green>GetTrustLedgerTransactionRequestsbyId
> Retrieves paginated trust transaction requests for a specific trust ledger.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}/transaction_requests`

##### <green>Method:</green>GetTrustLedgerTransactionsbyId
> Retrieves paginated trust transactions for a specific trust ledger.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}/transactions`


## Offering Controllers


### OfferingCategory Controller
##### <green>Method:</green>GetFullList
> Retrieves a list of all offering categories.
> - Endpoint: `GET api/offering-categories/all`

##### <green>Method:</green>GetList
> Retrieves a paginated list of offering categories.
> - Endpoint: `GET api/offering-categories`

##### <green>Method:</green>GetById
> Retrieves an offering category by its ID.
> - Endpoint: `GET api/offering-categories/{id}`

##### <green>Method:</green>Create
> Creates a new offering category.
> - Endpoint: `POST api/offering-categories`
> - Requires the `OfferingCategoryInput` data in the request body.

##### <green>Method:</green>Update
> Updates an existing offering category.
> - Endpoint: `PUT api/offering-categories/{id}`
> - Requires the `OfferingCategoryInput` data in the request body.

##### <green>Method:</green>Patch
> Partially updates an existing offering category using JSON Patch document.
> - Endpoint: `PATCH api/offering-categories/{id}`
> - Requires the `JsonPatchDocument<OfferingCategoryInput>` data in the request body.

##### <green>Method:</green>Delete
> Deletes an offering category by its ID.
> - Endpoint: `DELETE api/offering-categories/{id}`

### OfferingComponent Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of offering components.
> - Endpoint: `GET api/offering-components`

##### <green>Method:</green>GetById
> Retrieves an offering component by its ID.
> - Endpoint: `GET api/offering-components/{id}`

##### <green>Method:</green>Create
> Creates a new offering component.
> - Endpoint: `POST api/offering-components`

##### <green>Method:</green>Update
> Updates an existing offering component.
> - Endpoint: `PUT api/offering-components/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing offering component using JSON Patch document.
> - Endpoint: `PATCH api/offering-components/{id}`

##### <green>Method:</green>Delete
> Deletes an offering component by its ID.
> - Endpoint: `DELETE api/offering-components/{id}`

##### <green>Method:</green>UpdateOfferingComponentStatus
> Updates the status of an offering component by its ID.
> - Endpoint: `PUT api/offering-components/{id}/updateStatus`

### OfferingComponentResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources for a specific offering component.
> - Endpoint: `GET api/offering-components/{componentId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific offering component.
> - Endpoint: `POST api/offering-components/{componentId}/resources`

##### <green>Method:</green>Delete
> Deletes a resource for a specific offering component by its ID.
> - Endpoint: `DELETE api/offering-components/{componentId}/resources/{id}`

### Offering Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of offerings.
> - Endpoint: `GET api/offerings`

##### <green>Method:</green>GetById
> Retrieves an offering by its ID.
> - Endpoint: `GET api/offerings/{id}`

##### <green>Method:</green>GetMattersById
> Retrieves a paginated list of matters associated with an offering.
> - Endpoint: `GET api/offerings/{id}/matters`

##### <green>Method:</green>Create
> Creates a new offering.
> - Endpoint: `POST api/offerings`

##### <green>Method:</green>Update
> Updates an existing offering.
> - Endpoint: `PUT api/offerings/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing offering using JSON Patch document.
> - Endpoint: `PATCH api/offerings/{id}`

##### <green>Method:</green>AddPermittedReviewer
> Adds a permitted reviewer to an offering.
> - Endpoint: `PUT api/offerings/{id}/reviewers/add`

##### <green>Method:</green>RemovePermittedReviewer
> Removes a permitted reviewer from an offering.
> - Endpoint: `PUT api/offerings/{id}/reviewers/remove`

##### <green>Method:</green>DuplicateOffering
> Duplicates an offering.
> - Endpoint: `PUT api/offerings/{id}/duplicate`

##### <green>Method:</green>Delete
> Deletes an offering by its ID.
> - Endpoint: `DELETE api/offerings/{id}`

##### <green>Method:</green>GetResources
> Retrieves a paginated list of offering component resources.
> - Endpoint: `GET api/offerings/resources`

##### <green>Method:</green>GetOfferingResources
> Retrieves a paginated list of offering resources.
> - Endpoint: `GET api/offerings/offering_resources`

##### <green>Method:</green>MergeOffering
> Merges two offerings.
> - Endpoint: `PUT api/offerings/{oldOfferingId}/merge/{newOfferingId}`

##### <green>Method:</green>OutcomeComponents
> Retrieves the number of outcome components for an offering.
> - Endpoint: `GET api/offerings/outcomecounts/{id}`

### OfferingOutcomeComponent Controller
##### <green>Method:</green>Patch
> Partially updates an existing offering outcome component using JSON Patch document.
> - Endpoint: `PATCH api/offering-outcome-components/{id}`

### OfferingOutcome Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of offering outcomes for a specific offering.
> - Endpoint: `GET api/offerings/{offeringId}/outcomes`

##### <green>Method:</green>GetById
> Retrieves an offering outcome by its ID for a specific offering.
> - Endpoint: `GET api/offerings/{offeringId}/outcomes/{id}`

##### <green>Method:</green>Create
> Creates a new offering outcome for a specific offering.
> - Endpoint: `POST api/offerings/{offeringId}/outcomes`

##### <green>Method:</green>Update
> Updates an existing offering outcome for a specific offering.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing offering outcome for a specific offering using JSON Patch document.
> - Endpoint: `PATCH api/offerings/{offeringId}/outcomes/{id}`

##### <green>Method:</green>MoveUp
> Moves an offering outcome up within the list of outcomes for a specific offering.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}/up`

##### <green>Method:</green>MoveDown
> Moves an offering outcome down within the list of outcomes for a specific offering.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}/down`

##### <green>Method:</green>Delete
> Deletes an offering outcome by its ID for a specific offering.
> - Endpoint: `DELETE api/offerings/{offeringId}/outcomes/{id}`

##### <green>Method:</green>GetComponents
> Retrieves a list of offering outcome components for a specific offering outcome.
> - Endpoint: `GET api/offerings/{offeringId}/outcomes/{id}/components`

##### <green>Method:</green>CreateComponent
> Creates a new offering component and adds it to a specific offering outcome.
> - Endpoint: `POST api/offerings/{offeringId}/outcomes/{id}/components`

##### <green>Method:</green>AddComponent
> Adds an existing offering component to a specific offering outcome.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}/components/{componentId}`

##### <green>Method:</green>MoveComponentUp
> Moves an offering component up within the list of components for a specific offering outcome.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}/components/{componentId}/up`

##### <green>Method:</green>MoveComponentDown
> Moves an offering component down within the list of components for a specific offering outcome.
> - Endpoint: `PUT api/offerings/{offeringId}/outcomes/{id}/components/{componentId}/down`

##### <green>Method:</green>RemoveComponent
> Removes an offering component from a specific offering outcome.
> - Endpoint: `DELETE api/offerings/{offeringId}/outcomes/{id}/components/{componentId}`

##### <green>Method:</green>MoveOfferingOutcomeIntoOffering
> Moves an offering outcome from one offering to another offering.
> - Endpoint: `PUT api/offerings/{id}/move/{destinationOfferingId}`

##### <green>Method:</green>MoveOfferingComponentIntoNewOutcome
> Moves an offering component from its current offering outcome to a new offering outcome.
> - Endpoint: `PUT api/offerings/{id}/components/{componentId}/move/{destinationOutcomeId}`

### OfferingOutcomeObjectionGuarantee Controller
##### <green>Method:</green>GetList
> Retrieves a list of objection guarantees for a specific offering outcome.
> - Endpoint: `GET api/offerings/{offeringId}/outcome/{outcomeId}/objection-guarantees`

##### <green>Method:</green>Create
> Creates a new objection guarantee for a specific offering outcome.
> - Endpoint: `POST api/offerings/{offeringId}/outcome/{outcomeId}/objection-guarantees`

##### <green>Method:</green>Update
> Updates an existing objection guarantee for a specific offering outcome.
> - Endpoint: `PUT api/offerings/{offeringId}/outcome/{outcomeId}/objection-guarantees/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing objection guarantee for a specific offering outcome using JSON Patch document.
> - Endpoint: `PATCH api/offerings/{offeringId}/outcome/{outcomeId}/objection-guarantees/{id}`

##### <green>Method:</green>Delete
> Deletes an objection guarantee by its ID for a specific offering outcome.
> - Endpoint: `DELETE api/offerings/{offeringId}/outcome/{outcomeId}/objection-guarantees/{id}`

### OfferingProblemOutcome Controller
##### <green>Method:</green>GetList
> Retrieves a list of problem outcomes for a specific offering.
> - Endpoint: `GET api/offerings/{offeringId}/problem-outcomes`

##### <green>Method:</green>Create
> Creates a new problem outcome for a specific offering.
> - Endpoint: `POST api/offerings/{offeringId}/problem-outcomes`

##### <green>Method:</green>Update
> Updates an existing problem outcome for a specific offering.
> - Endpoint: `PUT api/offerings/{offeringId}/problem-outcomes/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing problem outcome for a specific offering using JSON Patch document.
> - Endpoint: `PATCH api/offerings/{offeringId}/problem-outcomes/{id}`

##### <green>Method:</green>Delete
> Deletes a problem outcome by its ID for a specific offering.
> - Endpoint: `DELETE api/offerings/{offeringId}/problem-outcomes/{id}`

### OfferingResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources for a specific offering.
> - Endpoint: `GET api/offerings/{offeringId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific offering.
> - Endpoint: `POST api/offerings/{offeringId}/resources`

##### <green>Method:</green>Delete
> Deletes a resource by its ID for a specific offering.
> - Endpoint: `DELETE api/offerings/{offeringId}/resources/{id}`




## Projects Controllers

### Project Controller
##### <green>Method:</green>GetListForCurrentUser
> Retrieves a paginated list of projects for the authenticated user, based on the provided filter.
> - Endpoint: `GET api/projects/me`

##### <green>Method:</green>GetList
> Retrieves a paginated list of all projects, based on the provided filter.
> - Endpoint: `GET api/projects`

##### <green>Method:</green>GetById
> Retrieves a specific project by its ID.
> - Endpoint: `GET api/projects/{id}`

##### <green>Method:</green>GetProjectFromTask
> Retrieves the project ID associated with a specific task.
> - Endpoint: `GET api/projects/task/{id}`

##### <green>Method:</green>Create
> Creates a new project.
> - Endpoint: `POST api/projects`

##### <green>Method:</green>Update
> Updates a specific project by its ID.
> - Endpoint: `PUT api/projects/{id}`

##### <green>Method:</green>Patch
> Partially updates a specific project by its ID using JSON patch.
> - Endpoint: `PATCH api/projects/{id}`

##### <green>Method:</green>Delete
> Deletes a specific project by its ID.
> - Endpoint: `DELETE api/projects/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters for projects.
> - Endpoint: `GET api/projects/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific project by its ID.
> - Endpoint: `GET api/projects/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets the metadata value for a specific project and parameter.
> - Endpoint: `POST api/projects/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a new metadata value for a specific project and parameter.
> - Endpoint: `POST api/projects/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a specific metadata value for a specific project and parameter.
> - Endpoint: `DELETE api/projects/{id}/metadata/values/{valueId}`

##### <green>Method:</green>GetProjectTotalUnits
> Retrieves the total units for a specific project.
> - Endpoint: `GET api/projects/totalUnits/{id}`

##### <green>Method:</green>GetProjectTimeline
> Retrieves the paginated project timeline events for a specific project.
> - Endpoint: `GET api/projects/{id}/projectTimeline`

### ProjectNote Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of notes for a specific project, based on the provided filters.
> - Endpoint: `GET api/projects/{id}/notes`

##### <green>Method:</green>Create
> Creates a new note for a specific project.
> - Endpoint: `POST api/projects/{id}/notes`

##### <green>Method:</green>GetNote
> Retrieves a specific note for a project by its ID.
> - Endpoint: `GET api/projects/{id}/notes/{noteid}`

##### <green>Method:</green>CreateUpdate
> Creates or updates a specific note for a project by its ID.
> - Endpoint: `POST api/projects/{id}/notes/{noteid}`

### ProjectTask Controller
##### <green>Method:</green>GetListForCurrentUser
> Retrieves a list of project tasks for the current user, based on the provided filters.
> - Endpoint: `GET api/projects/{projectId}/tasks/me`

##### <green>Method:</green>GetList
> Retrieves a list of project tasks for a specific project, based on the provided filters.
> - Endpoint: `GET api/projects/{projectId}/tasks`

##### <green>Method:</green>GetById
> Retrieves a specific project task by its ID.
> - Endpoint: `GET api/projects/{projectId}/tasks/{id}`

##### <green>Method:</green>Create
> Creates a new project task for a specific project.
> - Endpoint: `POST api/projects/{projectId}/tasks`

##### <green>Method:</green>CreateFromStandardTask
> Creates a new project task for a specific project based on a standard task.
> - Endpoint: `POST api/projects/{projectId}/tasks/standard/{standardTaskId}`

##### <green>Method:</green>Update
> Updates a specific project task for a project by its ID.
> - Endpoint: `PUT api/projects/{projectId}/tasks/{id}`

##### <green>Method:</green>AddTeamMember
> Adds a team member to a specific project task.
> - Endpoint: `PUT api/projects/{projectId}/tasks/{id}/add`

##### <green>Method:</green>RemoveTeamMember
> Removes a team member from a specific project task.
> - Endpoint: `PUT api/projects/{projectId}/tasks/{id}/remove`

##### <green>Method:</green>Patch
> Partially updates a specific project task for a project by its ID using JSON Patch.
> - Endpoint: `PATCH api/projects/{projectId}/tasks/{id}`

##### <green>Method:</green>Delete
> Deletes a specific project task for a project by its ID.
> - Endpoint: `DELETE api/projects/{projectId}/tasks/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters (entity dynamic parameter values) for project tasks of a specific project.
> - Endpoint: `GET api/projects/{projectId}/tasks/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific project task of a project.
> - Endpoint: `GET api/projects/{projectId}/tasks/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets the metadata value for a specific project task of a project.
> - Endpoint: `POST api/projects/{projectId}/tasks/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a new metadata value for a specific project task of a project.
> - Endpoint: `POST api/projects/{projectId}/tasks/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a specific metadata value from a project task of a project.
> - Endpoint: `DELETE api/projects/{projectId}/tasks/{id}/metadata/values/{valueId}`

### ProjectTaskResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources for a specific project task.
> - Endpoint: `GET api/projects/{projectId}/tasks/{taskId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific project task.
> - Endpoint: `POST api/projects/{projectId}/tasks/{taskId}/resources`

##### <green>Method:</green>Delete
> Deletes a specific resource for a project task.
> - Endpoint: `DELETE api/projects/{projectId}/tasks/{taskId}/resources/{id}`

### ProjectTaskStep Controller
##### <green>Method:</green>GetList
> Retrieves a list of steps for a specific project task.
> - Endpoint: `GET api/projects/{projectId}/tasks/{projectTaskId}/steps`

##### <green>Method:</green>Create
> Creates a new step for a specific project task.
> - Endpoint: `POST api/projects/{projectId}/tasks/{projectTaskId}/steps`

##### <green>Method:</green>Update
> Updates a specific step for a project task.
> - Endpoint: `PUT api/projects/{projectId}/tasks/{projectTaskId}/steps/{id}`

##### <green>Method:</green>Patch
> Partially updates a specific step for a project task.
> - Endpoint: `PATCH api/projects/{projectId}/tasks/{projectTaskId}/steps/{id}`

##### <green>Method:</green>Delete
> Deletes a specific step for a project task.
> - Endpoint: `DELETE api/projects/{projectId}/tasks/{projectTaskId}/steps/{id}`

### ProjectTaskStepResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources for a specific project task step.
> - Endpoint: `GET api/projects/{projectId}/tasks/{projectTaskId}/steps/{projectTaskStepId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific project task step.
> - Endpoint: `POST api/projects/{projectId}/tasks/{projectTaskId}/steps/{projectTaskStepId}/resources`

##### <green>Method:</green>Delete
> Deletes a specific resource for a project task step.
> - Endpoint: `DELETE api/projects/{projectId}/tasks/{projectTaskId}/steps/{projectTaskStepId}/resources/{id}`

### ProjectTemplate Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of project templates.
> - Endpoint: `GET api/project-templates`

##### <green>Method:</green>GetById
> Retrieves a specific project template by its ID.
> - Endpoint: `GET api/project-templates/{id}`

##### <green>Method:</green>Create
> Creates a new project template.
> - Endpoint: `POST api/project-templates`

##### <green>Method:</green>Update
> Updates a specific project template.
> - Endpoint: `PUT api/project-templates/{id}`

##### <green>Method:</green>Patch
> Partially updates a specific project template using JSON Patch.
> - Endpoint: `PATCH api/project-templates/{id}`

##### <green>Method:</green>Delete
> Deletes a specific project template.
> - Endpoint: `DELETE api/project-templates/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters for project templates.
> - Endpoint: `GET api/project-templates/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific project template.
> - Endpoint: `GET api/project-templates/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets a metadata value for a specific project template.
> - Endpoint: `POST api/project-templates/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a specific project template.
> - Endpoint: `POST api/project-templates/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value from a specific project template.
> - Endpoint: `DELETE api/project-templates/{id}/metadata/values/{valueId}`

##### <green>Method:</green>CreateScheduler
> Creates a project template scheduler for a specific project template.
> - Endpoint: `POST api/project-templates/{id}/scheduler`

##### <green>Method:</green>GetSchedulerById
> Retrieves the project template scheduler for a specific project template.
> - Endpoint: `GET api/project-templates/{id}/scheduler`

##### <green>Method:</green>syncAllProjectTemplate
> Synchronizes all project templates using the project template scheduler.
> - Endpoint: `POST api/project-templates/scheduler/sync`

##### <green>Method:</green>GetProjectsListForTemplate
> Retrieves a paginated list of projects associated with a specific project template.
> - Endpoint: `GET api/project-templates/{id}/projects`

### ProjectTemplateTask Controller
##### <green>Method:</green>GetList
> Retrieves a list of project template tasks for a specific project template.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks`

##### <green>Method:</green>GetById
> Retrieves a specific project template task by its ID.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks/{id}`

##### <green>Method:</green>Create
> Creates a new project template task for a specific project template.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks`

##### <green>Method:</green>CreateFromStandardTask
> Creates a new project template task based on a standard task.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks/standard/{standardTaskId}`

##### <green>Method:</green>Update
> Updates a specific project template task.
> - Endpoint: `PUT api/project-templates/{projectTemplateId}/tasks/{id}`

##### <green>Method:</green>AddTeamMember
> Adds a team member to a specific project template task.
> - Endpoint: `PUT api/project-templates/{projectTemplateId}/tasks/{id}/add`

##### <green>Method:</green>RemoveTeamMember
> Removes a team member from a specific project template task.
> - Endpoint: `PUT api/project-templates/{projectTemplateId}/tasks/{id}/remove`

##### <green>Method:</green>Patch
> Partially updates a specific project template task using JSON Patch.
> - Endpoint: `PATCH api/project-templates/{projectTemplateId}/tasks/{id}`

##### <green>Method:</green>Delete
> Deletes a specific project template task.
> - Endpoint: `DELETE api/project-templates/{projectTemplateId}/tasks/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters for project template tasks.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific project template task.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets a metadata value for a specific project template task.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a specific project template task.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value from a specific project template task.
> - Endpoint: `DELETE api/project-templates/{projectTemplateId}/tasks/{id}/metadata/values/{valueId}`

### ProjectTemplateTaskStep Controller
##### <green>Method:</green>GetList
> Retrieves a list of project template task steps for a specific project template task.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps`

##### <green>Method:</green>Create
> Creates a new project template task step for a specific project template task.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps`

##### <green>Method:</green>Update
> Updates a specific project template task step.
> - Endpoint: `PUT api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{id}`

##### <green>Method:</green>Patch
> Partially updates a specific project template task step using JSON Patch.
> - Endpoint: `PATCH api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{id}`

##### <green>Method:</green>Delete
> Deletes a specific project template task step.
> - Endpoint: `DELETE api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{id}`

### ProjectTemplateTaskStepResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources associated with a specific project template task step.
> - Endpoint: `GET api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{projectTemplateTaskStepId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific project template task step.
> - Endpoint: `POST api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{projectTemplateTaskStepId}/resources`

##### <green>Method:</green>Delete
> Deletes a specific resource associated with a project template task step.
> - Endpoint: `DELETE api/project-templates/{projectTemplateId}/tasks/{projectTemplateTaskId}/steps/{projectTemplateTaskStepId}/resources/{id}`

### Sprint Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of sprints.
> - Endpoint: `GET api/sprints`

##### <green>Method:</green>Create
> Creates a new sprint.
> - Endpoint: `POST api/sprints`

##### <green>Method:</green>GetById
> Retrieves a specific sprint by its ID.
> - Endpoint: `GET api/sprints/{id}`

##### <green>Method:</green>Update
> Updates an existing sprint.
> - Endpoint: `PUT api/sprints/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing sprint using a JSON Patch document.
> - Endpoint: `PATCH api/sprints/{id}`

##### <green>Method:</green>Delete
> Deletes a specific sprint by its ID.
> - Endpoint: `DELETE api/sprints/{id}`

##### <green>Method:</green>GetProjectSummary
> Retrieves the summary of a sprint or all sprints (if `sprintId` is not specified).
> - Endpoint: `GET api/sprints/summary`

##### <green>Method:</green>GetProjectTasks
> Retrieves the paginated list of project tasks associated with a specific sprint.
> - Endpoint: `GET api/sprints/project-tasks`

### StandardTask Controller
##### <green>Method:</green>GetList
> Retrieves a paginated list of standard tasks.
> - Endpoint: `GET api/standard-tasks`

##### <green>Method:</green>GetById
> Retrieves a specific standard task by its ID.
> - Endpoint: `GET api/standard-tasks/{id}`

##### <green>Method:</green>Create
> Creates a new standard task.
> - Endpoint: `POST api/standard-tasks`

##### <green>Method:</green>Update
> Updates an existing standard task.
> - Endpoint: `PUT api/standard-tasks/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing standard task using a JSON Patch document.
> - Endpoint: `PATCH api/standard-tasks/{id}`

##### <green>Method:</green>Delete
> Deletes a specific standard task by its ID.
> - Endpoint: `DELETE api/standard-tasks/{id}`

##### <green>Method:</green>GetMetadataParameters
> Retrieves the metadata parameters for standard tasks.
> - Endpoint: `GET api/standard-tasks/metadata`

##### <green>Method:</green>GetMetadataValues
> Retrieves the metadata values for a specific standard task.
> - Endpoint: `GET api/standard-tasks/{id}/metadata`

##### <green>Method:</green>SetMetadataValue
> Sets a metadata value for a specific standard task.
> - Endpoint: `POST api/standard-tasks/{id}/metadata`

##### <green>Method:</green>AddMetadataValue
> Adds a metadata value for a specific standard task.
> - Endpoint: `POST api/standard-tasks/{id}/metadata/values`

##### <green>Method:</green>RemoveMetadataValue
> Removes a metadata value from a specific standard task.
> - Endpoint: `DELETE api/standard-tasks/{id}/metadata/values/{valueId}`

### StandardTaskStep Controller
##### <green>Method:</green>GetList
> Retrieves a list of steps for a specific standard task.
> - Endpoint: `GET api/standard-tasks/{standardTaskId}/steps`

##### <green>Method:</green>Create
> Creates a new step for a specific standard task.
> - Endpoint: `POST api/standard-tasks/{standardTaskId}/steps`

##### <green>Method:</green>Update
> Updates an existing step of a specific standard task.
> - Endpoint: `PUT api/standard-tasks/{standardTaskId}/steps/{id}`

##### <green>Method:</green>Patch
> Partially updates an existing step of a specific standard task using a JSON Patch document.
> - Endpoint: `PATCH api/standard-tasks/{standardTaskId}/steps/{id}`

##### <green>Method:</green>Delete
> Deletes a specific step of a specific standard task.
> - Endpoint: `DELETE api/standard-tasks/{standardTaskId}/steps/{id}`

### StandardTaskStepResource Controller
##### <green>Method:</green>GetList
> Retrieves a list of resources for a specific step of a standard task.
> - Endpoint: `GET api/standard-tasks/{standardTaskId}/steps/{standardTaskStepId}/resources`

##### <green>Method:</green>Create
> Creates a new resource for a specific step of a standard task.
> - Endpoint: `POST api/standard-tasks/{standardTaskId}/steps/{standardTaskStepId}/resources`

##### <green>Method:</green>Delete
> Deletes a specific resource of a specific step of a standard task.
> - Endpoint: `DELETE api/standard-tasks/{standardTaskId}/steps/{standardTaskStepId}/resources/{id}`






## Error Controller
##### <green>Method:</green>Error
> Handles errors and returns a bad request response with the error message.
> - Endpoint: `GET api/errors`, `POST api/errors`, `PUT api/errors`, `PATCH api/errors`, `DELETE api/errors`
> - This method is invoked when an unhandled exception occurs in the application.


<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>