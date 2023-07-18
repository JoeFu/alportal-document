# Client Service
### GetById
- **Parameters**:
    - int `id`
- **Returns**:
    - Task`<ClientDto>`

### GetClients
- **Parameters**:
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

### GetMattersForClient
- **Parameters**:
    - int `clientId`
    - MatterFilterInput `filters`
- **Returns**:
    - Task`<PaginatedDto<MatterListDto>>`

### CreateClient
- **Parameters**:
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

### GetOrCreateClient
- **Parameters**:
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

### UpdateClientById
- **Parameters**:
    - int `id`
    - ClientInput `input`
- **Returns**:
    - Task`<ClientDto>`

### GetOrganisationsByContactIdAsPrimaryContact
- **Parameters**:
    - int `ContactId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientsOrganisationDto>>`

### GetOrganisationsByContactIdAsSecondaryContact
- **Parameters**:
    - int `ContactId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientsOrganisationDto>>`

### GetContactsByOrganisationId
- **Parameters**:
    - int `OrganisationId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

### GetContactsListByOrganisationId
- **Parameters**:
    - int `OrganisationId`
- **Returns**:
    - List`<int>`

### GetClientsByOrganisationId
- **Parameters**:
    - int `OrganisationId`
    - PaginatedInput `filters`
- **Returns**:
    - Task`<PaginatedDto<ClientDto>>`

### ChangeStatus
- **Parameters**:
    - List`<int>` `id`
    - int `status`
- **Returns**:
    - await `SaveChangesAsync`
