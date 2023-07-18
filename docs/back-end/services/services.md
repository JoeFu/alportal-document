# Services

## Accounts
### Account Service
The [Account Service](#account-service) includes services for user login and verification, as well as user profile creations, updates and deleting.
#### GetCurrentUser
This method retrieves the current user and auxiliary information about them in the system.
- **`CurrentUserDto`**
- **Parameter:** None

#### GetById
Retrieves a User based on their id.
- **`UserDto`**
- **Parameter:** int `id`

#### GetRemunerationbyId
Get Remuneration By Id
- **`RemunerationDto`**
- **Parameter:** int `id`

#### GetLatestRemunerationbyStaffId
Get Latest Remuneration By Staff Id
- **`RemunerationDto`**
- **Parameter:** int `Satffid`

#### GetRemunerations
Get Remunerations
- **`PaginatedDto`**
- **`RemunerationDto`**
- **Parameter:** PaginatedInput `filters`

#### CreateRemuneration
Create Remunerations
- **`RemunerationDto`**
- **Parameter:** RemunerationInput `input`

#### UpdateRemunerations
Update Remunerations
- **`RemunerationDto`**
- **Parameter:** int `id`, RemunerationInput `input`

#### GetPQEAdjustmentsbyStaffId
Get PQE Adjustments List
- **`PQEAdjustmentDto`**
- **Parameter:** int `id`, PaginatedInput `filters`

#### GetPQEAdjustmentCalculatedbyStaffId
Get PQE Adjustment Decimal Calculated Value
- **`PaginatedDto`**
- **`PQEAdjustmentDto`**
- **Parameter:** int `id`

#### CreatePQEAdjustment
Create PQE Adjustment
- **`PQEAdjustmentDto`**
- **Parameter:** PQEAdjustmentInput `input`

#### GetByEmail
Retrieves a User based on their email address
- **`UserDto`**
- **Parameter:** string `email`

#### GetUsers
Retrieves a paginated list of users for the provided filters, and a count of the total number of users matching the filter
- **`PaginatedDto`**
- **`UserListDto`**
- **Parameter:** UserFilterInput `filters`

#### GetUserBillingRate
Decimal calculations of billing rate
- **Parameter:** int `userId`

#### GetPermittedReviewers
Filter for a list of potential reviewers
- **`PaginatedDto`**
- **`UserListDto`**
- **Parameter:** IEnumerable<`int`> `offeringIds`, UserFilterInput `filters`

#### CreateUser
Creates a new user according the provided UserInput
- **`UserDto`**
- **Parameter:** UserInput `input`

#### UpdateUser
Updates the specified user according to the UpdateUserInput
- **`UserDto`**
- **Parameter:** int `id`, UpdateUserInput `input`

#### ChangePassword
- **`UserDto`**
- **Parameter:** UserInput `input`

#### UpdateCurrentUser
Updates the current user's details according to the CurrentUserInput
- **Parameter:** CurrentUserInput `input`

#### UploadProfilePictureForCurrentUser
- **Parameter:** Stream `imageData`

#### ValidateCredentialsAsync
Validates User Password Hash against Email in Database.
- **Parameter:** string `email`, string `password`

#### ValidateOneTimePasswordAsync
Validates OTP 
- **Parameter:** string `email`, string `otp`

#### SetOrUpdateRefreshToken
Add a refresh token or extend the existing refresh token's expiry
- **Parameter:** int `userId`, string `refreshToken`, DateTime `expiresAt`

#### GetRefreshToken
Retrieves a refresh token for the provided combination of the user id and refresh token
- **Parameter:** int `userId`, string `refreshToken`

#### RemoveRefreshToken
Removes a refresh token for the provided combination of the user id and refresh token
- **Parameter:** int `userId`, string `refreshToken`

#### GenerateOneTimePassword
- **Parameter:** UserDto `user`
1. Generates OTP randomly, 
2. Storing in database, 
3. Sending to User email via [SendOTPEmail](#sendotpemail).

Calls method [SendOTPEmail](#sendotpemail).

#### SendOTPEmail
Called by [GenerateOneTimePassword](#generateonetimepassword), triggering OTP Email to be sent via external API [SendGrid](/back-end/services/external/SendGrid.md).
- **Parameter:** SendEmailInput `input`, IFormFileCollection `files`
Calls [GetEmailSignature](#getemailsignature)

#### GetEmailSignature
Called by [SendOTPEmail](#sendotpemail), returning fixed Email Signature for Company.
- **Parameter:** None

<!-- #### UpdateMicrosoftRefreshToken

- **Parameter:** int userId, string refreshToken

#### GetPermittedReviewers

- **Parameter:** IEnumerable<int> offeringIds, UserFilterInput filters

#### ChangePassword

- **Parameter:** UserInput input -->
### Permission Service
The [Permission Service](#permission-service) includes services for verifying user permission and admin management.

#### GetById
Retrieves a Role by its id
- **`RoleDto`**
- **Paremeter:** int id
#### GetSystemAdminRole
Retrieves the system admin role
- **`RoleDto`**
- **Paremeter:** None
#### GetRoles
Retrieves all of the roles in the system
- **`RoleDto`**
- **Paremeter:** None
#### CreateRole
Creates a new role in the system according to the provided information
- **`RoleDto`**
- **Paremeter:** RoleInput `input`
#### UpdateRole
Updates an existing role in the system according to the provided information
- **`RoleDto`**
- **Paremeter:** int `roleId`, RoleInput `input`
#### DeleteRole
Removes an existing role from the system
- **Paremeter:** int `roleId`
#### GetRolesForUser
Retrieves the roles that have been assigned to the specified user
- **`RoleDto`**
- **Paremeter:** int `userId`
#### AddRoleToUser
Adds a role to the specified user
- **Paremeter:** int `userId`, int `roleId`
#### RemoveRoleFromUser
Removes a role from the specified user
- **Paremeter:** int `userId`, int `roleId`
#### GetPermissions
Retrieves the static list of defined permissions in the system
- **Paremeter:** None
#### GetPermissionsForRole
Retrieves the permissions that have been assigned to the specified role
- **Paremeter:** int `roleId`
#### AddPermissionToRole
Add a single permission to the specified role
- **Paremeter:** int `roleId`, string `permission`
#### SetPermissionsForRole
Sets the set of permissions that belong to a role
- **Paremeter:** int `roleId`, string[] `permissions`
#### RemovePermissionFromRole
Removes a specific permission from a role
- **Paremeter:** int `roleId`, string `permission`
#### CanAccess
Returns true if the current user has the specified permission based on their assigned roles
- **Paremeter:** string `permission`
#### CanAccess
Returns true if the current user can access <blue>***all***</blue> of the specified permissions based on their assigned roles
- **Paremeter:** params string[] `permissions`
#### GetPermissionsForUser
Retrieves the set of permissions for the current user based on their assigned roles
- **Paremeter:** int `userId`
#### IsValidPermission
Checks if the string is a valid permission, i.e. has been defined in Permissions
- **Paremeter:** string `permission`



## Calendars
### Calendar Service

#### GetCalendarEvents
- **`CalendarEventDto`**
- **Parameters**: 
  - `int userId`: The ID of the user.
  - `CalendarEventFilterInput filters`: Filters to be applied to the calendar events.

#### CreateCalendarEvent
- **Parameters**: 
  - `int userId`: The ID of the user.
  - `CalendarEventDto input`: The input data for creating a new calendar event.

#### UpdateCalendarEvent
- **Parameters**: 
  - `int userId`: The ID of the user.
  - `string eventId`: The ID of the calendar event to be updated.
  - `CalendarEventDto input`: The updated data for the calendar event.

#### DeleteCalendarEvent
- **Parameters**: 
  - `int userId`: The ID of the user.
  - `string eventId`: The ID of the calendar event to be deleted.


## Clients
### Client Service
#### GetById
- **Parameters**:
    - int `id`
- **Returns**:
    - Task`<ClientDto>`

#### GetClients
- **Parameters**:
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

#### GetMattersForClient
- **Parameters**:
    - int `clientId`
    - MatterFilterInput `filters`
- **Returns**:
    - Task`<PaginatedDto<MatterListDto>>`

#### CreateClient
- **Parameters**:
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

#### GetOrCreateClient
- **Parameters**:
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

#### UpdateClientById
- **Parameters**:
    - int `id`
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

#### GetOrganisationsByContactIdAsPrimaryContact
- **Parameters**:
    - int `ContactId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientsOrganisationDto>>`

#### GetOrganisationsByContactIdAsSecondaryContact
- **Parameters**:
    - int `ContactId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientsOrganisationDto>>`

#### GetContactsByOrganisationId
- **Parameters**:
    - int `OrganisationId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

#### GetContactsListByOrganisationId
- **Parameters**:
    - int `OrganisationId`
- **Returns**:
    - List`<int>`

#### GetClientsByOrganisationId
- **Parameters**:
    - int `OrganisationId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

#### ChangeStatus
- **Parameters**:
    - List`<int>` `id`
    - int `status`
- **Returns**:
    - await `SaveChangesAsync`



## Common
### BusinessAreaService
#### GetById
Retrieves a business area by its ID.
- **Parameters**:
    - int `id`
- **Returns**:
    - `BusinessAreaDto`

#### GetAllBusinessAreas
Retrieves all business areas.
- **Parameters**: None
- **Returns**:
    - `BusinessAreaDto`

#### GetBusinessAreas
Retrieves business areas based on specified filters.
- **Parameters**:
    - PaginatedInput `filters`
- **Returns**:
    - `PaginatedDto`<`BusinessAreaDto`>

#### CreateBusinessArea
Creates a new business area.
- **Parameters**:
    - BusinessAreaInput `input`
- **Returns**:
    - `BusinessAreaDto`

#### UpdateBusinessArea
Updates a business area with the specified ID.
- **Parameters**:
    - int `id`
    - BusinessAreaInput `input`
- **Returns**:
    - `BusinessAreaDto`

#### DeleteBusinessArea
Deletes a business area with the specified ID.
- **Parameters**:
    - int `id`
- **Returns**:
    - await `SaveChangesAsync`

### CapabilityService

#### GetById
Retrieves a capability by its ID.
- **Parameters**:
    - `int id`: The ID of the capability.
- **Returns**:
    - `Task<CapabilityDto>`: The capability with the specified ID.

#### GetCapabilities
Retrieves capabilities based on provided filters.
- **Parameters**:
    - `CapabilityFilterInput filters`: Filters to apply for retrieving capabilities.
- **Returns**:
    - `Task<PaginatedDto<CapabilityDto>>`: Paginated list of capabilities that match the applied filters.

#### CreateCapability
Creates a new capability.
- **Parameters**:
    - `CapabilityInput input`: The input data for creating the capability.
- **Returns**:
    - `Task<CapabilityDto>`: The newly created capability.

#### UpdateCapability
Updates an existing capability.
- **Parameters**:
    - `int id`: The ID of the capability to update.
    - `CapabilityInput input`: The updated data for the capability.
- **Returns**:
    - `Task<CapabilityDto>`: The updated capability.

#### DeleteCapability
Deletes a capability.
- **Parameters**:
    - `int id`: The ID of the capability to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.

### EmailTemplateService

#### GetConflictCheckTemplate
Retrieves the conflict check email template for a specific matter.
- **Parameters**:
    - `int matterId`: The ID of the matter.
    - `bool conflictPartiesChangeFlag`: Flag indicating if there was a change in conflict parties.
- **Returns**:
    - `Task<EmailTemplateDto>`: The conflict check email template.

#### GetDisbursementNotificationTemplate
Retrieves the disbursement notification email template for a specific disbursement.
- **Parameters**:
    - `int disbursementId`: The ID of the disbursement.
- **Returns**:
    - `Task<EmailTemplateDto>`: The disbursement notification email template.

#### GetEmailTemplates
Retrieves a paginated list of email templates based on provided filters.
- **Parameters**:
    - `EmailTemplateFilterInput filters`: Filters to apply for retrieving email templates.
- **Returns**:
    - `Task<PaginatedDto<EmailTemplateListDto>>`: Paginated list of email templates that match the applied filters.

#### CreateEmailTemplates
Creates a new email template.
- **Parameters**:
    - `EmailTemplateListInput input`: The input data for creating the email template.
- **Returns**:
    - `Task<EmailTemplateListDto>`: The newly created email template.

#### UpdateEmailTemplates
Updates an existing email template.
- **Parameters**:
    - `int id`: The ID of the email template to update.
    - `EmailTemplateListInput input`: The updated data for the email template.
- **Returns**:
    - `Task<EmailTemplateListDto>`: The updated email template.

#### DeleteEmailTemplates
Deletes an email template.
- **Parameters**:
    - `int id`: The ID of the email template to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### IndustryCategoryService

#### GetById
Retrieves an industry category by its ID.
- **Parameters**:
    - `int id`: The ID of the industry category.
- **Returns**:
    - `Task<IndustryCategoryDto>`: The industry category with the specified ID.

#### GetAllIndustryCategories
Retrieves all industry categories.
- **Parameters**: None
- **Returns**:
    - `Task<IEnumerable<IndustryCategoryDto>>`: A collection of all industry categories.

#### GetIndustryCategories
Retrieves a paginated list of industry categories based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving industry categories.
- **Returns**:
    - `Task<PaginatedDto<IndustryCategoryDto>>`: Paginated list of industry categories that match the applied filters.

#### CreateIndustryCategory
Creates a new industry category.
- **Parameters**:
    - `IndustryCategoryInput input`: The input data for creating the industry category.
- **Returns**:
    - `Task<IndustryCategoryDto>`: The newly created industry category.

#### UpdateIndustryCategory
Updates an existing industry category.
- **Parameters**:
    - `int id`: The ID of the industry category to update.
    - `IndustryCategoryInput input`: The updated data for the industry category.
- **Returns**:
    - `Task<IndustryCategoryDto>`: The updated industry category.

#### DeleteIndustryCategory
Deletes an industry category.
- **Parameters**:
    - `int id`: The ID of the industry category to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### IndustrySubCategoryService

#### GetById
Retrieves an industry subcategory by its ID.
- **Parameters**:
    - `int id`: The ID of the industry subcategory.
- **Returns**:
    - `Task<IndustrySubCategoryDto>`: The industry subcategory with the specified ID.

#### GetAllIndustrySubCategories
Retrieves all industry subcategories.
- **Parameters**: None
- **Returns**:
    - `Task<IEnumerable<IndustrySubCategoryDto>>`: A collection of all industry subcategories.

#### GetIndustrySubCategories
Retrieves a paginated list of industry subcategories based on provided filters.
- **Parameters**:
    - `IndustrySubCategoryFilterInput filters`: Filters to apply for retrieving industry subcategories.
- **Returns**:
    - `Task<PaginatedDto<IndustrySubCategoryDto>>`: Paginated list of industry subcategories that match the applied filters.

#### CreateIndustrySubCategory
Creates a new industry subcategory.
- **Parameters**:
    - `IndustrySubCategoryInput input`: The input data for creating the industry subcategory.
- **Returns**:
    - `Task<IndustrySubCategoryDto>`: The newly created industry subcategory.

#### UpdateIndustrySubCategory
Updates an existing industry subcategory.
- **Parameters**:
    - `int id`: The ID of the industry subcategory to update.
    - `IndustrySubCategoryInput input`: The updated data for the industry subcategory.
- **Returns**:
    - `Task<IndustrySubCategoryDto>`: The updated industry subcategory.

#### DeleteIndustrySubCategory
Deletes an industry subcategory.
- **Parameters**:
    - `int id`: The ID of the industry subcategory to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.

### LawAreaService

#### GetById
Retrieves a law area by its ID.
- **Parameters**:
    - `int id`: The ID of the law area.
- **Returns**:
    - `Task<LawAreaDto>`: The law area with the specified ID.

#### GetAllLawAreas
Retrieves all law areas.
- **Parameters**: None
- **Returns**:
    - `Task<IEnumerable<LawAreaDto>>`: A collection of all law areas.

#### GetLawAreas
Retrieves a paginated list of law areas based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving law areas.
- **Returns**:
    - `Task<PaginatedDto<LawAreaDto>>`: Paginated list of law areas that match the applied filters.

#### CreateLawArea
Creates a new law area.
- **Parameters**:
    - `LawAreaInput input`: The input data for creating the law area.
- **Returns**:
    - `Task<LawAreaDto>`: The newly created law area.

#### UpdateLawArea
Updates an existing law area.
- **Parameters**:
    - `int id`: The ID of the law area to update.
    - `LawAreaInput input`: The updated data for the law area.
- **Returns**:
    - `Task<LawAreaDto>`: The updated law area.

#### DeleteLawArea
Deletes a law area.
- **Parameters**:
    - `int id`: The ID of the law area to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### LawSubAreaService

#### GetById
Retrieves a law subarea by its ID.
- **Parameters**:
    - `int id`: The ID of the law subarea.
- **Returns**:
    - `Task<LawSubAreaDto>`: The law subarea with the specified ID.

#### GetAllLawSubAreas
Retrieves all law subareas.
- **Parameters**: None
- **Returns**:
    - `Task<IEnumerable<LawSubAreaDto>>`: A collection of all law subareas.

#### GetLawSubAreas
Retrieves a paginated list of law subareas based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving law subareas.
- **Returns**:
    - `Task<PaginatedDto<LawSubAreaDto>>`: Paginated list of law subareas that match the applied filters.

#### CreateLawSubArea
Creates a new law subarea.
- **Parameters**:
    - `LawSubAreaInput input`: The input data for creating the law subarea.
- **Returns**:
    - `Task<LawSubAreaDto>`: The newly created law subarea.

#### UpdateLawSubArea
Updates an existing law subarea.
- **Parameters**:
    - `int id`: The ID of the law subarea to update.
    - `LawSubAreaInput input`: The updated data for the law subarea.
- **Returns**:
    - `Task<LawSubAreaDto>`: The updated law subarea.

#### DeleteLawSubArea
Deletes a law subarea.
- **Parameters**:
    - `int id`: The ID of the law subarea to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.



### OccupationService

#### GetById
Retrieves an occupation by its ID.
- **Parameters**:
    - `int id`: The ID of the occupation.
- **Returns**:
    - `Task<OccupationDto>`: The occupation with the specified ID.

#### GetOccupations
Retrieves a paginated list of occupations based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving occupations.
- **Returns**:
    - `Task<PaginatedDto<OccupationDto>>`: Paginated list of occupations that match the applied filters.

#### CreateOccupation
Creates a new occupation.
- **Parameters**:
    - `OccupationInput input`: The input data for creating the occupation.
- **Returns**:
    - `Task<OccupationDto>`: The newly created occupation.

#### UpdateOccupation
Updates an existing occupation.
- **Parameters**:
    - `int id`: The ID of the occupation to update.
    - `OccupationInput input`: The updated data for the occupation.
- **Returns**:
    - `Task<OccupationDto>`: The updated occupation.

#### DeleteOccupation
Deletes an occupation.
- **Parameters**:
    - `int id`: The ID of the occupation to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### OfficeService

#### GetById
Retrieves an office by its ID.
- **Parameters**:
    - `int id`: The ID of the office.
- **Returns**:
    - `Task<OfficeDto>`: The office with the specified ID.

#### GetAllOffices
Retrieves all offices.
- **Parameters**: None
- **Returns**:
    - `Task<IEnumerable<OfficeDto>>`: A collection of all offices.

#### GetOffices
Retrieves a paginated list of offices based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving offices.
- **Returns**:
    - `Task<PaginatedDto<OfficeDto>>`: Paginated list of offices that match the applied filters.

#### CreateOffice
Creates a new office.
- **Parameters**:
    - `OfficeInput input`: The input data for creating the office.
- **Returns**:
    - `Task<OfficeDto>`: The newly created office.

#### UpdateOffice
Updates an existing office.
- **Parameters**:
    - `int id`: The ID of the office to update.
    - `OfficeInput input`: The updated data for the office.
- **Returns**:
    - `Task<OfficeDto>`: The updated office.

#### DeleteOffice
Deletes an office.
- **Parameters**:
    - `int id`: The ID of the office to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### OrganisationTypeService

#### GetById
Retrieves an organization type by its ID.
- **Parameters**:
    - `int id`: The ID of the organization type.
- **Returns**:
    - `Task<OrganisationTypeDto>`: The organization type with the specified ID.

#### GetOrganisationTypes
Retrieves a paginated list of organization types based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving organization types.
- **Returns**:
    - `Task<PaginatedDto<OrganisationTypeDto>>`: Paginated list of organization types that match the applied filters.

#### CreateOrganisationType
Creates a new organization type.
- **Parameters**:
    - `OrganisationTypeInput input`: The input data for creating the organization type.
- **Returns**:
    - `Task<OrganisationTypeDto>`: The newly created organization type.

#### UpdateOrganisationType
Updates an existing organization type.
- **Parameters**:
    - `int id`: The ID of the organization type to update.
    - `OrganisationTypeInput input`: The updated data for the organization type.
- **Returns**:
    - `Task<OrganisationTypeDto>`: The updated organization type.

#### DeleteOrganisationType
Deletes an organization type.
- **Parameters**:
    - `int id`: The ID of the organization type to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### SegmentService

#### GetById
Retrieves a segment by its ID.
- **Parameters**:
    - `int id`: The ID of the segment.
- **Returns**:
    - `Task<SegmentDto>`: The segment with the specified ID.

#### GetSegments
Retrieves a paginated list of segments based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving segments.
- **Returns**:
    - `Task<PaginatedDto<SegmentDto>>`: Paginated list of segments that match the applied filters.

#### CreateSegment
Creates a new segment.
- **Parameters**:
    - `SegmentInput input`: The input data for creating the segment.
- **Returns**:
    - `Task<SegmentDto>`: The newly created segment.

#### UpdateSegment
Updates an existing segment.
- **Parameters**:
    - `int id`: The ID of the segment to update.
    - `SegmentInput input`: The updated data for the segment.
- **Returns**:
    - `Task<SegmentDto>`: The updated segment.

#### DeleteSegment
Deletes a segment.
- **Parameters**:
    - `int id`: The ID of the segment to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### StandardDisbursementService

#### GetById
Retrieves a standard disbursement by its ID.
- **Parameters**:
    - `int id`: The ID of the standard disbursement.
- **Returns**:
    - `Task<StandardDisbursementDto>`: The standard disbursement with the specified ID.

#### GetStandardDisbursements
Retrieves a paginated list of standard disbursements based on provided filters.
- **Parameters**:
    - `PaginatedInput filters`: Filters to apply for retrieving standard disbursements.
- **Returns**:
    - `Task<PaginatedDto<StandardDisbursementDto>>`: Paginated list of standard disbursements that match the applied filters.

#### CreateStandardDisbursement
Creates a new standard disbursement.
- **Parameters**:
    - `StandardDisbursementInput input`: The input data for creating the standard disbursement.
- **Returns**:
    - `Task<StandardDisbursementDto>`: The newly created standard disbursement.

#### UpdateStandardDisbursement
Updates an existing standard disbursement.
- **Parameters**:
    - `int id`: The ID of the standard disbursement to update.
    - `StandardDisbursementInput input`: The updated data for the standard disbursement.
- **Returns**:
    - `Task<StandardDisbursementDto>`: The updated standard disbursement.

#### DeleteStandardDisbursement
Deletes a standard disbursement.
- **Parameters**:
    - `int id`: The ID of the standard disbursement to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### SubCapabilityService

#### GetById
Retrieves a sub capability by its ID.
- **Parameters**:
    - `int id`: The ID of the sub capability.
- **Returns**:
    - `Task<SubCapabilityDto>`: The sub capability with the specified ID.

#### GetSubCapabilities
Retrieves a paginated list of sub capabilities based on provided filters.
- **Parameters**:
    - `SubCapabilityFilterInput filters`: Filters to apply for retrieving sub capabilities.
- **Returns**:
    - `Task<PaginatedDto<SubCapabilityDto>>`: Paginated list of sub capabilities that match the applied filters.

#### CreateSubCapability
Creates a new sub capability.
- **Parameters**:
    - `SubCapabilityInput input`: The input data for creating the sub capability.
- **Returns**:
    - `Task<SubCapabilityDto>`: The newly created sub capability.

#### UpdateSubCapability
Updates an existing sub capability.
- **Parameters**:
    - `int id`: The ID of the sub capability to update.
    - `SubCapabilityInput input`: The updated data for the sub capability.
- **Returns**:
    - `Task<SubCapabilityDto>`: The updated sub capability.

#### DeleteSubCapability
Deletes a sub capability.
- **Parameters**:
    - `int id`: The ID of the sub capability to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


### SubSegmentService

#### GetById
Retrieves a subsegment by its ID.
- **Parameters**:
    - `int id`: The ID of the subsegment.
- **Returns**:
    - `Task<SubSegmentDto>`: The subsegment with the specified ID.

#### GetSubSegments
Retrieves a paginated list of subsegments based on provided filters.
- **Parameters**:
    - `SubSegmentFilterInput filters`: Filters to apply for retrieving subsegments.
- **Returns**:
    - `Task<PaginatedDto<SubSegmentDto>>`: Paginated list of subsegments that match the applied filters.

#### CreateSubSegment
Creates a new subsegment.
- **Parameters**:
    - `SubSegmentInput input`: The input data for creating the subsegment.
- **Returns**:
    - `Task<SubSegmentDto>`: The newly created subsegment.

#### UpdateSubSegment
Updates an existing subsegment.
- **Parameters**:
    - `int id`: The ID of the subsegment to update.
    - `SubSegmentInput input`: The updated data for the subsegment.
- **Returns**:
    - `Task<SubSegmentDto>`: The updated subsegment.

#### DeleteSubSegment
Deletes a subsegment.
- **Parameters**:
    - `int id`: The ID of the subsegment to delete.
- **Returns**:
    - `Task`: A task representing the completion of the deletion process.


## Contacts
### ContactJobScheduler

#### ScheduleContactEmailAssignment
Schedules the assignment of an email for a contact.
- **Parameters**:
    - `int contactId`: The ID of the contact for which to schedule the email assignment.
- **Returns**:
    - `Task`: A task representing the completion of the scheduling process.


### ContactService

#### GenerateMD5
Generates an MD5 hash for the input string.
- **Parameters**:
    - `string input`: The input string to calculate the MD5 hash for.
- **Return**: `string`

#### HasUserPublicGravatar
Checks if a user has a public Gravatar image.
- **Parameters**:
    - `string email`: The email address of the user.
- **Return**: `Stream`

#### GetById
Retrieves a contact by its ID.
- **Parameters**:
    - `int id`: The ID of the contact to retrieve.
- **Return**: `Task<ContactDto>`

#### GetContacts
Retrieves a list of contacts with pagination and filtering options.
- **Parameters**:
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactListDto>>`

#### GetContactRelationshipsById
Retrieves the relationships of a contact by its ID.
- **Parameters**:
    - `int id`: The ID of the contact to retrieve the relationships for.
- **Return**: `Task<ContactRelationshipsDto>`

#### GetReferrerRelationshipContacts
Retrieves the contacts related to a referrer by their ID.
- **Parameters**:
    - `int contactId`: The ID of the referrer contact.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactRelationship>>`

#### GetReferredRelationshipContacts
Retrieves the contacts referred by a contact by their ID.
- **Parameters**:
    - `int contactId`: The ID of the contact referring other contacts.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactListDto>>`

#### GetFamilyRelationshipContacts
Retrieves the family-related contacts of a contact by their ID.
- **Parameters**:
    - `int contactId`: The ID of the contact to retrieve the family relationships for.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactRelationship>>`

#### GetProfessionalRelationshipContacts
Retrieves professional relationships of a contact
- **Parameters:**
   - `contactId` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ContactRelationship>>`

#### GetContactClients
Retrieves clients associated with a contact
- **Parameters:**
   - `id` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ClientDto>>`

#### CreateContact
Creates a new contact
- **Parameters:**
   - `input` (CreateContactInput): The input data for creating a contact
- **Return:** `Task<ContactDto>`

#### UpdateContact
Updates an existing contact
- **Parameters:**
   - `contactId` (integer): The ID of the contact to update
   - `input` (UpdateContactInput): The input data for updating the contact
- **Return:** `Task<ContactDto>`

#### UpdateContactRelationships
Updates contact relationships
- **Parameters:**
   - `contactId` (integer): The ID of the contact to update relationships
   - `input` (UpdateContactRelationshipsInput): The input data for updating contact relationships
- **Return:** `Task<ContactRelationshipsDto>`

#### GetContactRelationships
Retrieves relationships associated with a contact
- **Parameters:**
   - `id` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ContactRelationship>>`


#### CreateContactRelationships
Creates contact relationships
- **Parameters:**
  - int `id`
  - ContactRelationshipInput `input`
- **Return:** `Task<ContactRelationshipInput>`


#### AddSpecialInterestToContact
Adds a special interest to a contact
- **Parameters:**
  - int `contactId`
  - int `specialInterestId`
- **Return:** `Task`


#### RemoveSpecialInterestFromContact
Removes a special interest from a contact
- **Parameters:**
  - int `contactId`
  - int `specialInterestId`
- **Return:** `Task`


#### AddSubSegmentToContact
Adds a subsegment to a contact
- **Parameters:**
  - int `contactId`
  - int `subSegmentId`
- **Return:** `Task`


#### RemoveSubSegmentFromContact
Removes a subsegment from a contact
- **Parameters:**
  - int `contactId`
  - int `subSegmentId`
- **Return:** `Task`


#### DeleteContact
Deletes a contact
- **Parameters:**
  - int `contactId`
- **Return:** `Task`


#### ChangeStatus
Changes the status of multiple contacts
- **Parameters:**
  - List<`int`> `id`
  - int `status`
- **Return:** `Task`


#### UploadProfilePictureForContact
Uploads a profile picture for a contact
- **Parameters:**
  - int `contactId`
  - Stream `imageData`
- **Return:** `Task`

#### GetContactsbyContactList
Retrieves contacts by contact list
- **Parameters:**
  - int `OrganisationId`
  - PaginatedInput `filters`
- **Return:** `Task<PaginatedDto<ContactListDto>>`



### SpecialInterestService
#### GetSpecialInterests
Retrieves special interests
- **Parameters:**
    - PaginatedInput `filters`
- **Return:** `Task<PaginatedDto<SpecialInterestsDto>>`


## Document Review
### Document Review Service

#### GetDocumentReviewRequestsForRequester
Retrieves document review requests for the requester
- **Parameters:**
    - PaginatedInput `filters`
- **Return:** `Task<PaginatedDto<DocumentReviewDto>>`

#### GetDocumentReviewRequestsForReviewer
Retrieves document review requests for the reviewer
- **Parameters:**
    - DocumentReviewFilterInput `filters`
- **Return:** `Task<PaginatedDto<DocumentReviewDto>>`

#### CreateDocumentReviewRequest
Creates a document review request
- **Parameters:**
    - CreateDocumentReviewInput `input`
- **Return:** `Task`

#### CompleteDocumentReview
Completes a document review
- **Parameters:**
    - int `id`
    - CompleteDocumentReviewInput `input`
- **Return:** `Task`

#### AcknowledgeCompletedDocumentReview
Acknowledges a completed document review
- **Parameters:**
    - int `id`
- **Return:** `Task`




## Invoices
### Invoice Job Schedular Service


#### InvoiceJobSchedulerService
A service responsible for scheduling jobs related to invoice document download. It implements the `IInvoiceJobSchedulerService` interface.



#### InvoiceJobSchedulerService.ScheduleInvoiceDocumentDownload
A method that schedules the `InvoiceDownloadJob` for downloading an invoice document. It takes an `invoiceId` and `submissionId` as parameters. It uses the `ISchedulerFactory` to get the scheduler instance and then checks if a job with the specified `jobKey` already exists. If the job exists, it updates the trigger with new data, rescheduling the job. If the job does not exist, it creates a new `InvoiceDownloadJob`, sets its identity and data using `JobBuilder`, creates a trigger with an immediate start, and schedules the job using the scheduler.

### Invoice Service


#### InvoiceService
A service for managing invoice-related operations, implementing `IInvoiceService`.



#### GetInvoices
Retrieves paginated invoices based on filters, search term, and sort option. Returns `PaginatedDto<InvoiceListDto>`.



#### GetInvoicesForMatter
Retrieves paginated invoices relevant to a matter based on `matterId`. Returns `PaginatedDto<InvoiceListDto>`.



#### GetInvoicesForClient
Retrieves paginated invoices relevant to a client based on `clientId`. Returns `PaginatedDto<InvoiceListDto>`.



#### CreateInvoice
Creates a new invoice with a BPay compatible number. Returns void.



#### GetInvoiceById
Retrieves an invoice by ID with calculated values and related entities. Returns `InvoiceDto`.



#### GetAvailableTimeEntriesForInvoice
Retrieves paginated time entries available for selection for a specific invoice. It fetches Matter Component time entries associated with the matter of the invoice, which have not been invoiced yet, and returns a `PaginatedDto` of `TimeEntryDto`.



#### GetInvoiceTimeEntries
Retrieves paginated time entries for a particular invoice. It fetches Matter Component time entries associated with the invoice and returns a `PaginatedDto` of `MatterComponentTimeEntryDto`.



#### AddTimeEntriesToInvoice
Adds a single time entry to a specific invoice. It associates the time entry with the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



#### AddAllTimeEntriesToInvoice
Adds all available time entries related to the matter of the given invoice to that invoice. It marks each time entry as associated with the invoice and updates the file status accordingly. After that, it notifies the `notifier` about the invoice update.



#### RemoveTimeEntriesFromInvoice
Removes a time entry from a specific invoice. It disassociates the time entry from the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



#### GetAvailableDisbursementsForInvoice
Retrieves paginated disbursements available for selection for a specific invoice. It fetches Matter disbursements associated with the matter of the invoice that have not been invoiced yet, and returns a `PaginatedDto` of `DisbursementDto`.



#### GetInvoiceDisbursements
Retrieves paginated disbursements for a particular invoice. It fetches disbursements associated with the invoice and returns a `PaginatedDto` of `DisbursementDto`.



#### AddDisbursementsToInvoice
Adds a single disbursement to a specific invoice. It associates the disbursement with the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update. Only possible if the invoice is in "Draft" status.



#### RemoveDisbursementsFromInvoice
Removes a disbursement from a specific invoice. It disassociates the disbursement from the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update. Only possible if the invoice is in "Draft" status.



#### GetInvoiceFixedPriceItems
Retrieves paginated fixed price items associated with a specific invoice. It fetches fixed price items associated with the invoice and returns a `PaginatedDto` of `FixedPriceItemDto`.



#### AddFixedPriceItemToInvoice
Creates a new fixed price item and associates it with a specific invoice. It verifies that the invoice is in "Draft" status and has a type of `FixedPrice`. The fixed price item details are provided in the `CreateFixedPriceItemInput`. The method saves the fixed price item to the database, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



#### RemoveFixedPriceItemFromInvoice
Removes a fixed price item from an invoice and deletes it as fixed price items cannot exist independently. It verifies that the invoice is in "Draft" status. The method disassociates the fixed price item from the invoice, deletes it from the database, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



#### UpdateDisbursementFromInvoice
Updates the details of a disbursement associated with an invoice. The method takes `disbursementId` and a `DisbursementInput` containing the updated disbursement details. It checks if the disbursement is associated with an invoice and if the invoice is in "Draft" status. If so, it updates the disbursement details and saves the changes to the database. If the disbursement is not associated with an invoice, it updates the details and saves the changes.



#### UpdateFixedPriceItemFromInvoice
Updates the details of a fixed price item associated with an invoice. The method takes `id` of the fixed price item and a `FixedPriceItemInput` containing the updated details. It updates the description, cost, quantity, and date of the fixed price item and saves the changes to the database. It also notifies the `notifier` about the invoice update.



#### AddInvoiceCredit
A placeholder method that throws a `NotImplementedException`. This method is not yet implemented and will be added in the future for handling invoice credits.



#### RemoveInvoiceCredit
A placeholder method that throws a `NotImplementedException`. This method is not yet implemented and will be added in the future for removing invoice credits.



#### GetInvoicePreview
Triggers the generation of an invoice from Syntaq (an external service) and schedules an attempt to retrieve the resulting invoice PDF. It takes the `id` of the invoice for which the preview is requested. The method uses the `_syntaqService` to trigger the invoice generation and `_invoiceJobSchedulerService` to schedule the PDF download. It updates the `FileRequestedAt` and `FileUptoDate` properties of the invoice, indicating that a file has been requested but is not yet available. It also notifies the `notifier` about the invoice update.



#### GetInvoicePDFDownload
Triggers the generation of an invoice PDF from Syntaq and returns the submission ID. It is similar to `GetInvoicePreview`, but it does not wait for the download to complete. Instead, it immediately returns the `SyntaqSubmissionDto` with the submission ID for later retrieval of the PDF.



#### GetMatterWIPReportPdfLink
Triggers the generation of a Work in Progress (WIP) report for a particular matter using Syntaq. It takes the `matterId` and uses the `_syntaqService` to trigger the report generation. The method then returns the `SyntaqSubmissionDto` with the submission ID for later retrieval of the PDF.


#### SendFriendlyReminderEmail
Sends a friendly reminder email for a specific invoice. It takes the `id` of the invoice. The method uses the `_syntaqService` to trigger the sending of the reminder email and `_notesService` to record notes related to the email in the matter's history. The sender information is retrieved from the authenticated user. The method then returns the `SyntaqSubmissionDto` with the submission ID for further reference.


#### SendFirstReminderEmail
Sends the first reminder email for a specific invoice. It takes the `id` of the invoice, triggers the sending of the first reminder email using the `_syntaqService`, and records a note related to the email in the matter's history using `_notesService`. The method then returns the `SyntaqSubmissionDto` with the submission ID for future reference.


#### SendSecondReminderEmail
Similar to the previous method but sends the second reminder email for a specific invoice using `_syntaqService`, records a note related to the email in the matter's history using `_notesService`, and returns the `SyntaqSubmissionDto` with the submission ID.


#### SendInvoiceStatementEmail
Sends an invoice statement email for all unpaid invoices associated with a specific client (identified by `id`). It retrieves the unpaid invoices, triggers the sending of the statement email using `_syntaqService`, records a note related to the email in each invoice's history using `_notesService`, and returns the `SyntaqSubmissionDto` with the submission ID.


#### GetFriendlyReminderPDFDownload
Triggers the download of a PDF for a friendly reminder email previously sent for a specific invoice. It takes the `id` of the invoice and uses `_syntaqService` to initiate the download. It then returns the `SyntaqSubmissionDto` with the submission ID.


#### GetFirstReminderPDFDownload
Triggers the download of a PDF for the first reminder email previously sent for a specific invoice. It takes the `id` of the invoice, uses `_syntaqService` to initiate the download, and returns the `SyntaqSubmissionDto` with the submission ID.


#### GetSecondReminderPDFDownload
Triggers the download of a PDF for the second reminder email previously sent for a specific invoice. It takes the `id` of the invoice and uses `_syntaqService` to initiate the download. It then returns the `SyntaqSubmissionDto` with the submission ID.


#### GetInvoiceStatementPDFDownload
Triggers the download of a PDF for an invoice statement email previously sent for a specific client. It takes the `id` of the client, uses `_syntaqService` to initiate the download, and returns the `SyntaqSubmissionDto` with the submission ID.


#### ProcessInvoiceDownload
Checks for the successful completion of an invoice triggered on Syntaq. If successful, it downloads the resulting PDF, stores it on Azure Blob Storage, and stores an identifier for later reference. If not, it schedules another check using `_invoiceJobSchedulerService`. This method is useful for asynchronous processing of invoice generation and storage.


#### GetInvoiceFileUrl
Retrieves a URL for accessing the stored invoice PDF. It takes the `id` of the invoice, looks up the invoice in the database, and generates a temporary URL to access the invoice PDF stored in Azure Blob Storage. It returns the `InvoiceLinkDto` with the generated URL.


#### GetInvoiceFileStream
Retrieves a data stream containing the contents of the stored invoice PDF. It takes the `id` of the invoice, looks up the invoice in the database, and downloads the corresponding invoice PDF from Azure Blob Storage as a `Stream`. This method is useful for directly accessing the PDF content of the invoice.


#### SendInvoiceForApproval
Moves the invoice from draft state to awaiting approval state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "AwaitingApproval." Additionally, it sets the invoice date to the current UTC date and the due date to the current UTC date plus 14 days. This method is used to send an invoice for approval once it has been drafted.


#### RejectDraft
Moves the invoice from awaiting approval state back to draft state. It takes the `id` of the invoice and a `rejectReason`. It looks up the invoice in the database and changes its status to "Draft." It also resets the invoice date and due date to `null` and stores the `rejectReason`. This method is used when an invoice needs to be rejected, and it also sends a notification to the drafting user with the rejection reason.


#### ApproveDraft
Moves the invoice from awaiting approval state to approved state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "Approved." It sets the invoice date to the current UTC date and the due date to the current UTC date plus 14 days. Additionally, it stores the user ID of the user who approved the invoice. This method is used to approve a pending invoice.


#### SendInvoice
Moves the invoice from approved state to sent state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "Sent." It sets the sent by user ID, invoice date to the current UTC date, due date to the current UTC date plus 14 days, and sets the `InvoiceSent` flag to `true`. It then triggers the sending of the invoice to Syntaq and Xero, and records notes related to the sent invoice. This method is used to mark an approved invoice as sent and initiate the process of sending it to the client via Syntaq and Xero.


#### GetTotalTimeValue
Computes the total time value for a particular invoice. It takes the `invoiceId`, retrieves all associated Matter Component time entries from the database using the invoiceId, and calculates the total value as units * rate / 10 (since rates are hourly and there are 10 units to an hour). This method is used to calculate the total value of time-based entries in an invoice.



#### GetTotalFixedPriceItemValue
Computes the total value of the fixed price items for a particular invoice. It takes the `invoiceId`, retrieves all associated fixed price items from the database with the specified `invoiceId`, and calculates the sum of cost * quantity for those items.


#### GetTotalDisbursementValue
Computes the total value of disbursements for a particular invoice. It takes the `invoiceId`, retrieves all associated disbursements from the database with the specified `invoiceId`, and calculates the sum of cost * units for those disbursements.


#### GetTotalInvoiceValue
Computes the total value of the invoice, factoring in different types of billable items (time entries, fixed price items, and disbursements). It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and calculates the total value based on the type of invoice and the billable items associated with it.


#### GetTotalInvoiceValueInclGst
Computes the total value of the invoice, factoring in GST (Goods and Services Tax). It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and calculates the total value including GST based on the type of invoice and the billable items associated with it. The GST amount is added to each individual time entry, fixed price item, or disbursement if applicable.


#### GetReceivedPayments
Retrieves the total amount of received payments for a specific invoice. It takes the `invoiceId`, looks up all associated payments from the database with the specified `invoiceId`, and calculates the total amount received from those payments.



#### GetOutstandingAmount
Calculates the outstanding amount for a specific invoice. It subtracts the received payments from the total invoice value (including GST) to determine the amount still outstanding.


#### GetDaysOverDue
Calculates the number of days that an invoice is overdue. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and checks if the invoice is unpaid, has a due date, and is in the "Sent" status. If these conditions are met, it calculates the difference between the current date and the due date to determine the number of days overdue.


#### GetXeroPaymentHistoryFromXero
Retrieves a paginated list of payment history associated with a specific invoice in Xero. It takes the `invoiceId` and paginated filters as input and returns a paginated list of `PaymentDto` objects.


#### getInvoiceLifeTimebyClientId
Calculates the lifetime value of invoices for a specific client. It takes the `id` of the client and retrieves all matters associated with the client. Then, it iterates through each matter and calculates the total invoice value, total payments received, and total outstanding amount for each invoice. Finally, it returns an `InvoiceLifeTimeValueDto` containing these calculated values.


#### DeleteInvoice
Deletes an invoice from the database. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and removes it from the context before saving changes.



#### UpdateDoNotCollect
Updates the "DoNotCollect" flag for a specific invoice. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and toggles the "DoNotCollect" flag (sets it to `false` if it was `true`, or `true` if it was `null` or `false`). It then saves the changes to the database.


#### UpdateInvoiceDate
Updates the invoice date for a specific invoice. It takes the `invoiceId` and the new invoice date (`newInvoiceDate`). It retrieves the invoice from the database with the specified `invoiceId`, and if the invoice exists and the new date is valid (not equal to `new DateTime()`), it updates the invoice's `InvoiceDate` and `DueDate` (set as the `newInvoiceDate` plus 14 days) and saves the changes to the database. If the invoice doesn't exist or the new date is invalid, it writes "null" to the console.


#### ReSyncInvoiceToXero
Attempts to resynchronize an invoice with Xero. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and checks if the `XeroId` is null, empty, or "0". If it is, it calls the `_xeroservice.CreateInvoiceInXero` method to create the invoice in Xero, updates the `XeroId`, sets `SyncedToXero` to true, and updates the `LastSyncAt` to the current date and time. If the `XeroId` is not null, empty, or "0", it sets `SyncedToXero` to true and updates the `LastSyncAt` to the current date and time. It then saves the changes to the database and returns the `XeroId`.


### Invoice Statistic Service
The `InvoiceStatisticsService` class provides methods to retrieve various statistics related to invoices and their components.

#### GetAvailableTimeEntriesForInvoice
Retrieves available time entries that can be added to an invoice. It takes the `id` of the invoice, and `filters` for pagination. It fetches the invoice from the database, then queries for MatterComponentTimeEntries where the `MatterId` matches the `MatterId` of the invoice, and the `InvoiceId` is null. The result is paginated and mapped to `TimeEntryDto`.

#### GetInvoiceTimeEntries
Retrieves time entries associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries MatterComponentTimeEntries where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `MatterComponentTimeEntryDto`.

#### GetAvailableDisbursementsForInvoice
Retrieves available disbursements that can be added to an invoice. It takes the `id` of the invoice and `filters` for pagination. It fetches the invoice from the database, then queries for Disbursements where the `MatterId` matches the `MatterId` of the invoice, and the `InvoiceId` is null. The result is paginated and mapped to `DisbursementDto`.

#### GetInvoiceDisbursements
Retrieves disbursements associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries Disbursements where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `DisbursementDto`.

#### GetInvoiceFixedPriceItems
Retrieves fixed price items associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries FixedPriceItems where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `FixedPriceItemDto`.

#### GetTotalTimeValue
Computes the total value of time entries for a specific invoice. It takes the `invoiceId`, and queries MatterComponentTimeEntries where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Units * Rate / 10`.

#### GetTotalFixedPriceItemValue
Computes the total value of fixed price items for a specific invoice. It takes the `invoiceId`, and queries FixedPriceItems where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Cost * Quantity`.

#### GetTotalDisbursementValue
Computes the total value of disbursements for a specific invoice. It takes the `invoiceId`, and queries Disbursements where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Cost * Units`.

#### GetTotalInvoiceValue
Computes the total value of the invoice (including time entries and disbursements). It takes the `invoiceId`, retrieves the invoice from the database, and calculates the total value based on the type of invoice (FixedPrice or TimeEntry) and the associated components.

#### GetTotalInvoiceValueInclGst
Computes the total value of the invoice, factoring in GST. It takes the `invoiceId`, retrieves the invoice from the database, and calculates the total value based on the type of invoice (FixedPrice or TimeEntry), the associated components, and the GST type.

#### GetReceivedPayments
Computes the total amount of payments received for a specific invoice. It takes the `invoiceId`, and queries Payments where the `InvoiceId` matches the specified `invoiceId`. It calculates the total amount as the sum of `Amount`.

#### GetOutstandingAmount
Computes the outstanding amount for a specific invoice. It takes the `invoiceId`, and calculates it as the difference between the total invoice value (including GST) and the total received payments.

#### GetDaysOverDue
Computes the number of days that an invoice is overdue. It takes the `invoiceId`, retrieves the invoice from the database, and calculates the days overdue based on the due date and the current date.

#### GetXeroPaymentHistoryFromXero
Retrieves the payment history for an invoice from Xero. It takes the `id` of the invoice and `filters` for pagination. It queries Payments where the `InvoiceId` matches the specified `id`, and maps the results to `PaymentDto`.

#### GetInvoiceLifeTimebyClientId
Retrieves lifetime values related to all invoices of a specific client. It takes the `id` of the client, and calculates the total invoice value, total payments received, and total outstanding amount for all invoices associated with the client's matters.



## Logs
### Logger Service
#### LoggerService
This class implements the `ILoggerService` interface, which likely defines additional methods for logging operations (not provided in this code snippet). The `LoggerService` class has two main dependencies injected, `IMapper` and `ALPDbContext`, used for mapping log input models to log entity models and accessing the database, respectively.

#### GetAlpLogs
This method retrieves ALP logs based on the provided `LogFilterInput` filters. It first constructs the initial query using the `ALPDbContext.AlpLogs` entity set. Then, it applies filtering conditions based on the search string, start date, end date, service name, and log level provided in the `filters` parameter. The logs are paginated using `ToPaginatedDtoAsync` method from the `_mapper` instance, which maps the log entity models to `AlpLogsDto` DTO (Data Transfer Object) models that can be returned to the API consumer.

#### CreateLogs
This method is responsible for creating a new ALP log based on the `AlpLogsInput` input model. It calculates the duration of the previous log (if any) and saves the log's entity to the database using the `_context.AlpLogs.AddAsync(logs)` and `_context.SaveChangesAsync()` calls. Before saving the log, it performs some checks and transformations on the `input` data, such as handling unrecognized binary file uploads and truncating the exception message if it exceeds 30 characters.

#### AlpLogGetById
This method retrieves an individual ALP log based on the provided `id`. It maps the retrieved log entity model to an `AlpLogsDto` DTO model and returns it to the API consumer.



### Request Response Log Model
#### IRequestResponseLogModelCreator
This interface defines a contract for creating a log model and obtaining the log string.

#### IRequestResponseLogger
This interface defines a contract for a request-response logger, specifying a method to log the request-response log model.

#### RequestResponseLogModelCreator
This class implements the `IRequestResponseLogModelCreator` interface and is responsible for creating an instance of `RequestResponseLogModel` and obtaining its JSON representation as a log string.

#### RequestResponseLogger
This class implements the `IRequestResponseLogger` interface and provides the functionality to log the request-response log model using an `ILogger` instance. It allows logging at different log levels like LogTrace, LogInformation, LogWarning, and LogCritical.

#### RequestResponseLoggerOption
This class holds configuration options for the `RequestResponseLogger`. It includes properties like `IsEnabled` (to enable or disable the logger), `Name` (a string identifier for the logger), and `DateTimeFormat` (a format string for formatting date and time in logs).





## Time Tracking
### Time Entry Service
#### GetById
Retrieves a specific time entry by its ID.


#### FilterAndPaginateTimeEntries
Private method used for filtering and paginating time entries based on the provided filters.


#### GetSalesTimeEntries
Retrieves sales-related time entries for a specific matter or all matters. It uses the `FilterAndPaginateMatterSalesTimeEntries` method for filtering and paginating.


#### FilterAndPaginateMatterSalesTimeEntries
Private method used for filtering and paginating sales-related time entries.


#### GetMatterComponentTimeEntries
Retrieves time entries related to a specific matter component or all matter components. It uses the `FilterAndPaginateMatterComponentTimeEntries` method for filtering and paginating.


#### FilterAndPaginateMatterComponentTimeEntries
Private method used for filtering and paginating matter component-related time entries.


#### GetProjectTimeEntries
Retrieves project task-related time entries for a specific project or all projects. It uses the `FilterAndPaginateProjectTaskTimeEntries` method for filtering and paginating.


#### FilterAndPaginateProjectTaskTimeEntries
Private method used for filtering and paginating project task-related time entries.


#### GetUserTimeEntries
Retrieves time entries for a specific user based on the provided filters.


#### GetTimeEntriesForMatterComponent
Retrieves time entries for a specific matter component based on the provided filters.

#### GetTimeEntryStats
Retrieves statistics related to time entries, such as total units and type-specific total units.

#### CreateTimeEntry
Creates a new time entry based on the provided time entry type and input data (e.g., Project Task, Sales, Matter Component).

#### UpdateTimeEntry
Updates an existing time entry based on the provided time entry type, time entry ID, and input data.

#### DeleteTimeEntry
Deletes a time entry based on the provided time entry type and time entry ID.

#### ConvertSalesTimeEntryToMatterTimeEntry
Converts a sales time entry to a matter time entry (currently just a placeholder).

#### ConvertMatterTimeEntryToSalesTimeEntry
Converts a matter time entry to a sales time entry (currently just a placeholder).

#### GetLastTimeEntries
Retrieves the last time entry for a specific matter, which can be either a sales time entry or a matter component time entry.



### Timer Service

#### GetById
Retrieves a specific timer by its ID for the currently authenticated user.


#### GetTimers
Retrieves a list of timers for the currently authenticated user, ordered by their start time.


#### CreateTimer
Creates a new timer with the provided input data. It verifies that the referenced entity exists (e.g., Project Task, Matter, Matter Component) and prevents the creation of duplicate active timers for the same entity.


#### UpdateTimer
Updates an existing timer with the provided input data.


#### StartTimer
Starts a timer with the specified ID. It also stops any other active timers for the same user to ensure only one timer is running at a time for that user.


#### PauseTimer
Pauses a timer with the specified ID by adding the time elapsed since the start time to the accumulated time.


#### StopTimer
Stops a timer with the specified ID and creates a time entry based on the timer's accumulated time and the provided input data (e.g., TimeEntryType, TimeEntryInput). The timer is then removed from the database.


#### DeleteTimer
Deletes a timer with the specified ID.




## Trust
### Trust Service


#### GetTrustAccounts
Retrieves a paginated list of trust accounts. It takes `filters` for pagination and optional searching by the trust account's name. It queries the `TrustAccounts` table from the database and orders the results by name. If a search term is provided, it filters the trust accounts based on the name containing the search term using EF.Functions.ILike. The result is mapped to `TrustAccountListDto`.


#### GetTrustAccountById
Retrieves a specific trust account by its ID. It takes the `id` of the trust account. It fetches the trust account from the database and maps it to `TrustAccountDto`. Additionally, it calculates the total funds of the trust account by calling the `GetTrustTotalFunds` method.


#### CreateTrustAccount
Creates a new trust account. It takes an `input` object containing the necessary data for the trust account. It creates a new `TrustAccount` entity, populates its properties with the input data, adds it to the `TrustAccounts` table, and saves changes to the database. Finally, it maps the created trust account to `TrustAccountDto` and returns it.


#### UpdateTrustAccount
Updates an existing trust account. It takes the `trustAccountId` to identify the trust account to be updated and an `input` object containing the updated data. It fetches the trust account from the database, updates its properties with the data from the input object using AutoMapper, saves the changes to the database, and finally maps the updated trust account to `TrustAccountDto` and returns it.




#### GetTrustSummaryForMatter
Retrieves the trust summary for a specific matter. It calls two methods, `GetCurrentMatterTrustTotalFunds` and `GetCurrentMatterTrustBalance`, to calculate the total funds and balance of the trust account associated with the matter. The results are used to create a `MatterTrustSummaryDto` object.


#### GetCurrentMatterTrustTotalFunds
Calculates the total funds of the trust account associated with a specific matter. It considers different types of transactions, such as deposits, withdrawals, and transfers, to calculate the total funds.


#### GetCurrentMatterTrustBalance
Calculates the current balance of the trust account associated with a specific matter. It takes into account the transaction requests and transfers associated with the matter to calculate the balance.


#### GetTrustTotalAtDate
Calculates the total funds in the trust account at a specific date for a given matter. It considers the transactions (deposits, withdrawals, transfers) that occurred on or before the given date to calculate the total funds.


#### GetReconciledTrustTotalAtDate
Calculates the reconciled total funds in the trust account at a specific date for a given matter. It considers the reconciled transactions (deposits and withdrawals) that occurred on or before the given date to calculate the reconciled total funds.


#### GetTrustTransactionRequestsForMatter
Retrieves a paginated list of trust transaction requests for a specific matter. It fetches transaction requests associated with the matter and maps them to `TrustTransactionRequestDto`. It also retrieves and populates the support document links for each transaction request.


#### GetTrustTransactionsForMatter
Retrieves a paginated list of trust transactions for a specific matter. It fetches trust transactions associated with the matter and maps them to `TrustTransactionDto`.


#### GetTrustTransactionReceiptDownloadLink
Triggers a trust transaction receipt download for a specific transaction ID. It interacts with the `ISyntaqService` to trigger the receipt download and returns the submission ID.


#### CreateTrustTransactionRequestForMatter
Creates a trust transaction request for a specific matter. It validates the transaction request and checks if enough funds are available for withdrawals or transfers. It also creates a default ledger for the matter if it doesn't already exist. After creating the transaction request, it triggers a trust notification to the trust administrator if required.


#### resentTrustTransactionRequestForMatter
Resends a trust transaction request for a specific transaction ID. It sends a trust notification to the trust administrator.


#### CreateStatutoryTrustTransactionRequest
Creates a statutory/legal trust transaction request. It creates a request for legal statutory transactions and sends a request letter to the relevant party.




#### GetPendingTrustTransactionRequests
Retrieves a paginated list of pending trust transaction requests for a specific trust account. It fetches the transaction requests that have not been approved yet and maps them to `TrustTransactionRequestDto`. It also retrieves and populates the support document links for each transaction request.


#### updateDocumentTransactionId
Updates the `TrustTransactionId` field of related trust documents for a given transaction request. It is used to link the transaction request to the trust documents once the request is approved.


#### ApproveTrustTransactionRequest
Approves a trust transaction request. It validates the request, checks the availability of funds for withdrawals or transfers, and creates a trust transaction based on the request. If the transaction is a legal/statutory transaction, it triggers a notification using the `ISyntaqService`. If the transaction is a regular matter transaction, it checks if a default ledger exists for the matter, and if not, notifies the user to contact the admin. After approval, the method updates the trust documents to link them to the newly created trust transaction. It also sends a trust notification to the requestor if required.


#### RejectTrustTransactionRequest
Rejects a trust transaction request. It updates the request status to rejected, records the rejection reason, and triggers a notification using the `ISyntaqService` for statutory transactions. For regular matter transactions, it sends a trust notification to the requestor to inform them of the rejection.




#### CreateTrustTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended to create a new trust transaction for a specific trust account, but the implementation is missing.


#### GetTrustTransactions
Retrieves paginated trust transactions for a specific trust account. The method fetches trust transactions for the given trust account and any associated statutory trust account. It filters the transactions based on the search criteria and returns a paginated result of `TrustTransactionDto`.


#### GetUnreconciledTrustTransactions
Retrieves paginated unreconciled trust transactions for a specific trust account. Similar to `GetTrustTransactions`, it also considers the associated statutory trust account. However, this method specifically returns unreconciled transactions and omits any transactions with an unknown transaction type or missing matter ID.


#### GetBankTransactions
Retrieves paginated bank transactions for a specific trust account. It fetches bank transactions related to the trust account and returns a paginated result of `BankTransactionDto`.


#### MoveBankTransactionBetweenTrustAccounts
Moves a bank transaction from one trust account to another. It updates the `TrustAccountId` field of the specified bank transaction to the new trust account.


#### GetUnreconciledBankTransactions
Retrieves paginated unreconciled bank transactions for a specific trust account. It returns a list of unreconciled bank transactions associated with the given trust account.


#### ImportBankTransactions
Imports bank transactions from a CSV file for a specific trust account. The method takes a CSV file stream, reads and parses its contents, and then creates new bank transactions for the trust account based on the CSV data. It checks for existing transactions to avoid duplicates.


#### ReconcileMatchedTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended for reconciling matched transactions, but the implementation is missing.


#### CancelMatchedTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended to cancel matched transactions, but the implementation is missing.


#### ReconcileTrustTransaction
Reconciles trust transactions with corresponding bank transactions. It takes a list of trust transaction IDs and a list of bank transaction IDs to reconcile. The method verifies that both lists contain only unreconciled transactions and that the total amount of the trust transactions matches the total amount of the bank transactions. If the conditions are met, it marks the transactions as reconciled and updates the reconciliation date.




#### TrustAccountBalance
Calculates the current balance of a specific trust account. It fetches the trust account from the database and calculates the balance by summing up the amounts of all trust transactions associated with the trust account.


#### TrustAccountBankBalance
Calculates the current bank balance of a specific trust account. It fetches the trust account from the database and retrieves the balance from the latest bank transaction associated with the trust account.


#### NetBalanceByMatter
Calculates the net balance for a specific matter within a trust account up to a given end date. It fetches the specified matter and associated trust transactions, filters them based on the provided end date, and then calculates the net balance.


#### NetBalanceByClient
Calculates the net balance for a specific client within a trust account up to a given end date. It fetches the specified client and all its matters, retrieves their associated trust transactions, filters them based on the provided end date, and then calculates the net balance.


#### TrialBalance
Calculates the trial balance for a specific trust account up to a given end date. It fetches all matters associated with the trust account and calculates the trial balance by summing up the trust totals for each matter. The method also considers the statutory balance if there is a statutory trust account associated.


#### ReconciliationReport
Generates a reconciliation report for a specific trust account within a given date range. It retrieves all trust transactions associated with the trust account within the specified date range and formats the data into a `ReconciliationReportDto`.


#### GetTrustDocument
Retrieves paginated trust documents. It fetches and returns trust documents with pagination support.




#### GetTrustLedgers
Retrieves a paginated list of trust ledgers. It fetches trust ledgers from the database and provides support for searching based on the ledger's name, matter ID, or notes.


#### GetTrustLedgerbyId
Retrieves a specific trust ledger by its ID. It fetches the trust ledger from the database based on the provided ledger ID and maps it to a `TrustLedgerDto`.


#### GetTrustLedgerTransactionRequestsbyId
Retrieves paginated transaction requests associated with a specific trust ledger. It fetches trust transaction requests related to the given ledger ID and returns the results in paginated form.


#### GetTrustLedgerTransactionsbyId
Retrieves paginated trust transactions associated with a specific trust ledger. It fetches trust transactions related to the given ledger ID and returns the results in paginated form.


#### RecordUnknownDepositOnBankTransaction
Records an unknown deposit on a bank transaction and creates a new trust ledger for it. If the bank transaction amount is greater than 0 and not already reconciled, a new trust ledger is created, and a trust transaction is added to it.


#### AssignUnknownTransactionToMatter
Assigns an unknown transaction to a specific matter. If the unknown transaction's trust account transaction type is set as "UnknownTransaction," this method creates a trust transaction request for the matter, approves it, and adds a withdrawal transaction to the previous trust ledger.







<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>