# Contacts
## ContactJobScheduler

### ScheduleContactEmailAssignment
Schedules the assignment of an email for a contact.
- **Parameters**:
    - `int contactId`: The ID of the contact for which to schedule the email assignment.
- **Returns**:
    - `Task`: A task representing the completion of the scheduling process.


## ContactService

### GenerateMD5
Generates an MD5 hash for the input string.
- **Parameters**:
    - `string input`: The input string to calculate the MD5 hash for.
- **Return**: `string`

### HasUserPublicGravatar
Checks if a user has a public Gravatar image.
- **Parameters**:
    - `string email`: The email address of the user.
- **Return**: `Stream`

### GetById
Retrieves a contact by its ID.
- **Parameters**:
    - `int id`: The ID of the contact to retrieve.
- **Return**: `Task<ContactDto>`

### GetContacts
Retrieves a list of contacts with pagination and filtering options.
- **Parameters**:
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactListDto>>`

### GetContactRelationshipsById
Retrieves the relationships of a contact by its ID.
- **Parameters**:
    - `int id`: The ID of the contact to retrieve the relationships for.
- **Return**: `Task<ContactRelationshipsDto>`

### GetReferrerRelationshipContacts
Retrieves the contacts related to a referrer by their ID.
- **Parameters**:
    - `int contactId`: The ID of the referrer contact.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactRelationship>>`

### GetReferredRelationshipContacts
Retrieves the contacts referred by a contact by their ID.
- **Parameters**:
    - `int contactId`: The ID of the contact referring other contacts.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactListDto>>`

### GetFamilyRelationshipContacts
Retrieves the family-related contacts of a contact by their ID.
- **Parameters**:
    - `int contactId`: The ID of the contact to retrieve the family relationships for.
    - `PaginatedInput filters`: The pagination and filtering options for the contacts.
- **Return**: `Task<PaginatedDto<ContactRelationship>>`

### GetProfessionalRelationshipContacts
Retrieves professional relationships of a contact
- **Parameters:**
   - `contactId` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ContactRelationship>>`

### GetContactClients
Retrieves clients associated with a contact
- **Parameters:**
   - `id` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ClientDto>>`

### CreateContact
Creates a new contact
- **Parameters:**
   - `input` (CreateContactInput): The input data for creating a contact
- **Return:** `Task<ContactDto>`

### UpdateContact
Updates an existing contact
- **Parameters:**
   - `contactId` (integer): The ID of the contact to update
   - `input` (UpdateContactInput): The input data for updating the contact
- **Return:** `Task<ContactDto>`

### UpdateContactRelationships
Updates contact relationships
- **Parameters:**
   - `contactId` (integer): The ID of the contact to update relationships
   - `input` (UpdateContactRelationshipsInput): The input data for updating contact relationships
- **Return:** `Task<ContactRelationshipsDto>`

### GetContactRelationships
Retrieves relationships associated with a contact
- **Parameters:**
   - `id` (integer): The ID of the contact
   - `filters` (PaginatedInput): The input parameters for pagination and filtering
- **Return:** `Task<PaginatedDto<ContactRelationship>>`


### CreateContactRelationships
Creates contact relationships
- **Parameters:**
  - int `id`
  - ContactRelationshipInput `input`
- **Return:** `Task<ContactRelationshipInput>`


### AddSpecialInterestToContact
Adds a special interest to a contact
- **Parameters:**
  - int `contactId`
  - int `specialInterestId`
- **Return:** `Task`


### RemoveSpecialInterestFromContact
Removes a special interest from a contact
- **Parameters:**
  - int `contactId`
  - int `specialInterestId`
- **Return:** `Task`


### AddSubSegmentToContact
Adds a subsegment to a contact
- **Parameters:**
  - int `contactId`
  - int `subSegmentId`
- **Return:** `Task`


### RemoveSubSegmentFromContact
Removes a subsegment from a contact
- **Parameters:**
  - int `contactId`
  - int `subSegmentId`
- **Return:** `Task`


### DeleteContact
Deletes a contact
- **Parameters:**
  - int `contactId`
- **Return:** `Task`


### ChangeStatus
Changes the status of multiple contacts
- **Parameters:**
  - List<`int`> `id`
  - int `status`
- **Return:** `Task`


### UploadProfilePictureForContact
Uploads a profile picture for a contact
- **Parameters:**
  - int `contactId`
  - Stream `imageData`
- **Return:** `Task`

### GetContactsbyContactList
Retrieves contacts by contact list
- **Parameters:**
  - int `OrganisationId`
  - PaginatedInput `filters`
- **Return:** `Task<PaginatedDto<ContactListDto>>`



## SpecialInterestService
### GetSpecialInterests
Retrieves special interests
- **Parameters:**
    - PaginatedInput `filters`
- **Return:** `Task<PaginatedDto<SpecialInterestsDto>>`

