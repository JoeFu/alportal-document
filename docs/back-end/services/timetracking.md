# Time Tracking
## Time Entry Service
### GetById
Retrieves a specific time entry by its ID.


### FilterAndPaginateTimeEntries
Private method used for filtering and paginating time entries based on the provided filters.


### GetSalesTimeEntries
Retrieves sales-related time entries for a specific matter or all matters. It uses the `FilterAndPaginateMatterSalesTimeEntries` method for filtering and paginating.


### FilterAndPaginateMatterSalesTimeEntries
Private method used for filtering and paginating sales-related time entries.


### GetMatterComponentTimeEntries
Retrieves time entries related to a specific matter component or all matter components. It uses the `FilterAndPaginateMatterComponentTimeEntries` method for filtering and paginating.


### FilterAndPaginateMatterComponentTimeEntries
Private method used for filtering and paginating matter component-related time entries.


### GetProjectTimeEntries
Retrieves project task-related time entries for a specific project or all projects. It uses the `FilterAndPaginateProjectTaskTimeEntries` method for filtering and paginating.


### FilterAndPaginateProjectTaskTimeEntries
Private method used for filtering and paginating project task-related time entries.


### GetUserTimeEntries
Retrieves time entries for a specific user based on the provided filters.


### GetTimeEntriesForMatterComponent
Retrieves time entries for a specific matter component based on the provided filters.

### GetTimeEntryStats
Retrieves statistics related to time entries, such as total units and type-specific total units.

### CreateTimeEntry
Creates a new time entry based on the provided time entry type and input data (e.g., Project Task, Sales, Matter Component).

### UpdateTimeEntry
Updates an existing time entry based on the provided time entry type, time entry ID, and input data.

### DeleteTimeEntry
Deletes a time entry based on the provided time entry type and time entry ID.

### ConvertSalesTimeEntryToMatterTimeEntry
Converts a sales time entry to a matter time entry (currently just a placeholder).

### ConvertMatterTimeEntryToSalesTimeEntry
Converts a matter time entry to a sales time entry (currently just a placeholder).

### GetLastTimeEntries
Retrieves the last time entry for a specific matter, which can be either a sales time entry or a matter component time entry.



## Timer Service

### GetById
Retrieves a specific timer by its ID for the currently authenticated user.


### GetTimers
Retrieves a list of timers for the currently authenticated user, ordered by their start time.


### CreateTimer
Creates a new timer with the provided input data. It verifies that the referenced entity exists (e.g., Project Task, Matter, Matter Component) and prevents the creation of duplicate active timers for the same entity.


### UpdateTimer
Updates an existing timer with the provided input data.


### StartTimer
Starts a timer with the specified ID. It also stops any other active timers for the same user to ensure only one timer is running at a time for that user.


### PauseTimer
Pauses a timer with the specified ID by adding the time elapsed since the start time to the accumulated time.


### StopTimer
Stops a timer with the specified ID and creates a time entry based on the timer's accumulated time and the provided input data (e.g., TimeEntryType, TimeEntryInput). The timer is then removed from the database.


### DeleteTimer
Deletes a timer with the specified ID.


