# Account Controllers

This page provides documentation for some of the <tomato>important and more frequently used</tomato> account related controllers in the ALP application. The controllers are categorized as follows:

- [AccountController](#account-controller): Manages user authentication and account-related operations.
- [UserController](#user-controller): Manages user-related operations, including user creation, retrieval, and updates.


## Account Controller

The `AccountController` is a part of controller responsible for handling various account-related operations. This controller provides endpoints for user login, logout, token refresh, and Microsoft authentication. It allows users to authenticate themselves, manage their access tokens, and perform essential account actions.

- **Endpoint**: `/api/account`
- **Permission**: Authorized.

### Login

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

### GetOneTimePassword

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

### LoginMicrosoft

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

### Logout

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

### RefreshToken

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


## User Controller
The `UserController` allows the administrative staff to edit user staff information, roles and more.

- **Endpoint**: `/api/users`
- **Permissions**: Authorized.
### Me
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


### GetLoggedInUser

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


### GetList

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


### GetPermittedReviewerList

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

### Delete

Deletes the user with the specified `userID`. 
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

### GetRemunerations
Retrieves a <blue>paginated</blue> list of Remunerations based on the `UserFilterInput`. 

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

### GetRemunerationbyId
This method retrieves Remuneration of a Remuneration `id`.

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


### GetLatestRemunerationbyStaffId
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
### CreateRemuneration
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


### GetPQEAdjustmentbyStaffId
Retrieves the PQE adjustments for the staff member with the specified ID.
- **Endpoint:** `GET /api/users/pqeadjustments/{id}`
- **Permission:** Authorized.
- **Parameters:**
  - `id` (path parameter): The ID of the user.
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

### CreatePQEAdjustment
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

### ChangePassowrd
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


<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
tomato { color: tomato }
</style>