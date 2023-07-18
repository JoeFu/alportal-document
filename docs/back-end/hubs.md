# Hubs

## Notification Hub
The `NotificationHub` class is a SignalR hub that handles user connections, disconnections, and allows users to subscribe or unsubscribe from specific groups (topics), enabling efficient and secure communication between connected users using SignalR's real-time messaging capabilities.

### OnConnectedAsync
Overrides the `OnConnectedAsync` method from the base `Hub` class and adds the connection to the "SignalR Users" group when a user connects.

### OnDisconnectedAsync
Overrides the `OnDisconnectedAsync` method from the base `Hub` class and removes the connection from the "SignalR Users" group when a user disconnects.

### Subscribe
Allows the user to subscribe to multiple topics by adding the connection to each specified topic group.

- Takes input of a group of `topics`.

### Unsubscribe
Allows the user to unsubscribe from multiple topics by removing the connection from each specified topic group.

- Takes input of a group of `topics`.

## Notifier
The `Notifier` class is a SignalR hub that provides methods to broadcast notifications, send targeted messages, and update users on specific events, facilitating real-time communication and updates within the application.

### Broadcast
Broadcasts a message to all connected users.

- Takes a `string` input.

### Notify
Notifies a specific user with a message.

- Takes a  `userId` input and a `string` input.


### Notify
Notifies multiple users with a message.

- Takes a group of  `userId` input and a `string` input.

### TimerUpdated
Updates the timer for multiple users.

- Takes a group of  `userId` input.

### ProjectUpdated
Updates the project for users in a specific group.

- Takes a `projectId` inout.

### ProjectTaskUpdated 
Updates a project task for users in a specific group.

- Takes a `projectId`, and `projectTaskId` input.

### ProjectTaskUpdated
Updates a project task for multiple users.

- Takes a group of  `userId`, a `projectId`, and `projectTaskId` input.

### ProjectTemplateTaskUpdated
Updates a project template task for users in a specific group.

- Takes a `projectTemplateId`, and a `projectTemplateTaskId` input.

### ProjectTemplateTaskUpdated
Updates a project template task for multiple users.

- Takes a group of  `userId`, a `projectTemplateId`, and a `projectTemplateTaskId` input.

### MatterComponentUpdated
Updates a matter component for users in a specific group.

- Takes a `matterId`, `outcomeId`, and `componentId` inputs.


### MatterComponentUpdated
Updates a matter component for multiple users.

- Takes a group of  `userId`, a `matterId`, `outcomeId`, and `componentId` inputs.

### ProjectAssigned
Notifies users of a project assignment.

- Takes a group of  `userId` and `projectId` inputs.

### MatterOutcomeUpdated 
Updates a matter outcome for multiple users.

- Takes a group of  `userId`, `matterId` and `matterOutcomeId` inputs.


### InvoiceUpdated
Updates an invoice for users in a specific group.

- Takes a `invoiceId` input.

### ProjectTaskDeleted
Notifies users about the deletion of a project task in a specific group.

- Takes a `projectId` input.