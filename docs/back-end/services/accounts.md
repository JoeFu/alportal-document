# Accounts
Accounts includes [Account Service](#account-service) and [Permission Service](#permission-service).

The [Account Service](#account-service) includes services for user login and verification, as well as user profile creations, updates and deleting.

The [Permission Service](#permission-service) includes services for verifying user permission and admin management.
## Account Service
### GetCurrentUser
This method retrieves the current user and auxiliary information about them in the system.
- **`CurrentUserDto`**
- **Parameter:** None

### GetById
Retrieves a User based on their id.
- **`UserDto`**
- **Parameter:** int `id`

### GetRemunerationbyId
Get Remuneration By Id
- **`RemunerationDto`**
- **Parameter:** int `id`

### GetLatestRemunerationbyStaffId
Get Latest Remuneration By Staff Id
- **`RemunerationDto`**
- **Parameter:** int `Satffid`

### GetRemunerations
Get Remunerations
- **`PaginatedDto`**
- **`RemunerationDto`**
- **Parameter:** PaginatedInput `filters`

### CreateRemuneration
Create Remunerations
- **`RemunerationDto`**
- **Parameter:** RemunerationInput `input`

### UpdateRemunerations
Update Remunerations
- **`RemunerationDto`**
- **Parameter:** int `id`, RemunerationInput `input`

### GetPQEAdjustmentsbyStaffId
Get PQE Adjustments List
- **`PQEAdjustmentDto`**
- **Parameter:** int `id`, PaginatedInput `filters`

### GetPQEAdjustmentCalculatedbyStaffId
Get PQE Adjustment Decimal Calculated Value
- **`PaginatedDto`**
- **`PQEAdjustmentDto`**
- **Parameter:** int `id`

### CreatePQEAdjustment
Create PQE Adjustment
- **`PQEAdjustmentDto`**
- **Parameter:** PQEAdjustmentInput `input`

### GetByEmail
Retrieves a User based on their email address
- **`UserDto`**
- **Parameter:** string `email`

### GetUsers
Retrieves a paginated list of users for the provided filters, and a count of the total number of users matching the filter
- **`PaginatedDto`**
- **`UserListDto`**
- **Parameter:** UserFilterInput `filters`

### GetUserBillingRate
Decimal calculations of billing rate
- **Parameter:** int `userId`

### GetPermittedReviewers
Filter for a list of potential reviewers
- **`PaginatedDto`**
- **`UserListDto`**
- **Parameter:** IEnumerable<`int`> `offeringIds`, UserFilterInput `filters`

### CreateUser
Creates a new user according the provided UserInput
- **`UserDto`**
- **Parameter:** UserInput `input`

### UpdateUser
Updates the specified user according to the UpdateUserInput
- **`UserDto`**
- **Parameter:** int `id`, UpdateUserInput `input`

### ChangePassword
- **`UserDto`**
- **Parameter:** UserInput `input`

### UpdateCurrentUser
Updates the current user's details according to the CurrentUserInput
- **Parameter:** CurrentUserInput `input`

### UploadProfilePictureForCurrentUser
- **Parameter:** Stream `imageData`

### ValidateCredentialsAsync
Validates User Password Hash against Email in Database.
- **Parameter:** string `email`, string `password`

### ValidateOneTimePasswordAsync
Validates OTP 
- **Parameter:** string `email`, string `otp`

### SetOrUpdateRefreshToken
Add a refresh token or extend the existing refresh token's expiry
- **Parameter:** int `userId`, string `refreshToken`, DateTime `expiresAt`

### GetRefreshToken
Retrieves a refresh token for the provided combination of the user id and refresh token
- **Parameter:** int `userId`, string `refreshToken`

### RemoveRefreshToken
Removes a refresh token for the provided combination of the user id and refresh token
- **Parameter:** int `userId`, string `refreshToken`

### GenerateOneTimePassword
- **Parameter:** UserDto `user`
1. Generates OTP randomly, 
2. Storing in database, 
3. Sending to User email via [SendOTPEmail](#sendotpemail).

Calls method [SendOTPEmail](#sendotpemail).

### SendOTPEmail
Called by [GenerateOneTimePassword](#generateonetimepassword), triggering OTP Email to be sent via external API [SendGrid](/back-end/services/external/SendGrid.md).
- **Parameter:** SendEmailInput `input`, IFormFileCollection `files`
Calls [GetEmailSignature](#getemailsignature)

### GetEmailSignature
Called by [SendOTPEmail](#sendotpemail), returning fixed Email Signature for Company.
- **Parameter:** None

<!-- #### UpdateMicrosoftRefreshToken

- **Parameter:** int userId, string refreshToken

### GetPermittedReviewers

- **Parameter:** IEnumerable<int> offeringIds, UserFilterInput filters

### ChangePassword

- **Parameter:** UserInput input -->
## Permission Service
### GetById
Retrieves a Role by its id
- **`RoleDto`**
- **Paremeter:** int id
### GetSystemAdminRole
Retrieves the system admin role
- **`RoleDto`**
- **Paremeter:** None
### GetRoles
Retrieves all of the roles in the system
- **`RoleDto`**
- **Paremeter:** None
### CreateRole
Creates a new role in the system according to the provided information
- **`RoleDto`**
- **Paremeter:** RoleInput `input`
### UpdateRole
Updates an existing role in the system according to the provided information
- **`RoleDto`**
- **Paremeter:** int `roleId`, RoleInput `input`
### DeleteRole
Removes an existing role from the system
- **Paremeter:** int `roleId`
### GetRolesForUser
Retrieves the roles that have been assigned to the specified user
- **`RoleDto`**
- **Paremeter:** int `userId`
### AddRoleToUser
Adds a role to the specified user
- **Paremeter:** int `userId`, int `roleId`
### RemoveRoleFromUser
Removes a role from the specified user
- **Paremeter:** int `userId`, int `roleId`
### GetPermissions
Retrieves the static list of defined permissions in the system
- **Paremeter:** None
### GetPermissionsForRole
Retrieves the permissions that have been assigned to the specified role
- **Paremeter:** int `roleId`
### AddPermissionToRole
Add a single permission to the specified role
- **Paremeter:** int `roleId`, string `permission`
### SetPermissionsForRole
Sets the set of permissions that belong to a role
- **Paremeter:** int `roleId`, string[] `permissions`
### RemovePermissionFromRole
Removes a specific permission from a role
- **Paremeter:** int `roleId`, string `permission`
### CanAccess
Returns true if the current user has the specified permission based on their assigned roles
- **Paremeter:** string `permission`
### CanAccess
Returns true if the current user can access <blue>***all***</blue> of the specified permissions based on their assigned roles
- **Paremeter:** params string[] `permissions`
### GetPermissionsForUser
Retrieves the set of permissions for the current user based on their assigned roles
- **Paremeter:** int `userId`
### IsValidPermission
Checks if the string is a valid permission, i.e. has been defined in Permissions
- **Paremeter:** string `permission`

<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>