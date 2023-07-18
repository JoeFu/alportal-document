# MicrosoftGraph
## GetTokenFromDeltaLink
Given a delta link as returned by the Microsoft Graph API, retrieves the delta token.
- **Parameters:** 
    - `deltaLink` (string): The delta link returned by the Microsoft Graph API.
- **Return:**  `string`: The extracted delta token.

## GetTokenFromDeltaLink
Given a CollectionPage instance, retrieves the delta link and subsequently the delta token.
- **Parameters:** 
    - `collection` (`ICollectionPage<T>`): The CollectionPage instance.
- **Return:**  `string`: The extracted delta token.

## GetMicrosoftRefreshToken
Retrieves the refresh token from the database for a specific user
- **Parameters:** 
    - `userId` (int): The ID of the user.
- **Return:**  `Task<string>`: The Microsoft refresh token.

## UpdateMicrosoftRefreshToken
Updates the refresh token and the last login timestamp for a user in the database
- **Parameters:** 
    - `userId` (int): The ID of the user.
    - `refreshToken` (string): The new refresh token to be saved.
- **Return:**  Task: Represents the asynchronous operation.

## UpdateRefreshToken
Updates the refresh token for the specified user by querying the Microsoft service for a new token.
- **Parameters:** 
    - `userId` (int): The ID of the user.
- **Return:**  Task: Represents the asynchronous operation.

## RefreshMicrosoftToken
Retrieves an access token and a new refresh token for a given refresh token.
- **Parameters:** 
    - `refreshToken` (string): The refresh token.
- **Return:**  `Task<(string, string)>`: A tuple containing the updated refresh token and access token.

## GetAccessToken
Retrieves an access token for the provided refresh token.
- **Parameters:** 
    - `refreshToken` (string): The refresh token.
- **Return:**  `Task<string>`: The access token.

## GetGraphClient
Retrieves an authenticated instance of a `GraphServiceClient` for the specified user.
- **Parameters:** 
    - `userId` (int): The ID of the user.
- **Return:**  `Task<GraphServiceClient>`: An authenticated instance of the `GraphServiceClient`.

## SendEmail
Sends an email with attachments from the user's Microsoft email using Microsoft Graph.
- **Parameters:** 
    - `userId` (int): The ID of the user sending the email.
    - `input` (SendEmailInput): The contents of the email (to, cc, bcc, subject, content).
    - `files` (IFormFileCollection): The uploaded files to be sent as attachments.
    - `documents` (`Dictionary<string, Stream>`): A set of filename and data streams representing previously uploaded documents to be sent as attachments.
    - `attachment` (`List<EmailAttachment>`, optional): Additional email attachments to be included.
- **Return:**  Task.

## ReplyEmail
Sends a reply email with attachments from the user's Microsoft email using Microsoft Graph.
- **Parameters:** 
    - `userId` (int): The ID of the user sending the reply email.
    - `input` (SendEmailInput): The contents of the email (to, cc, bcc, subject, content).
    - `files` (IFormFileCollection): The uploaded files to be sent as attachments.
    - `documents` (`Dictionary<string, Stream>`): A set of filename and data streams representing previously uploaded documents to be sent as attachments.
    - `oulookMessageID` (string): The ID of the Outlook message being replied to.
- **Return:** Task.

## ReplyAllEmail
Sends a "reply all" email with attachments from the user's Microsoft email using Microsoft Graph.
- **Parameters:** 
    - `userId` (int): The ID of the user sending the "reply all" email.
    - `input` (SendEmailInput): The contents of the email (to, cc, bcc, subject, content).
    - `files` (IFormFileCollection): The uploaded files to be sent as attachments.
    - `documents` (`Dictionary<string, Stream>`): A set of filename and data streams representing previously uploaded documents to be sent as attachments.
    - `oulookMessageID` (string): The ID of the Outlook message being replied to.
- **Return:** Task.

## ForwardEmail
Sends a forwarded email with attachments from the user's Microsoft email using Microsoft Graph.
- **Parameters:** 
    - `userId` (int): The ID of the user sending the forwarded email.
    - `input` (SendEmailInput): The contents of the email (to, cc, bcc, subject, content).
    - `files` (IFormFileCollection): The uploaded files to be sent as attachments.
    - `documents` (`Dictionary<string, Stream>`): A set of filename and data streams representing previously uploaded documents to be sent as attachments.
    - `oulookMessageID` (string): The ID of the Outlook message being forwarded.
- **Return:** Task.

## GetEmailFolder
Retrieves a mail folder from Microsoft Graph for a specific user based on the folder name.
- **Parameters:** 
    - `userId` (int): The ID of the user.
    - `folderName` (string): The name of the folder to retrieve.
- **Return:**`Task<MailFolder>`: The mail folder object retrieved from Microsoft Graph.

## GetEmailFolders
Retrieve all mail folders for a specific user
- **Parameters:** 
    - `userId` (int): The ID of the user
- **Return:** `Task<IEnumerable<MailFolder>>`

## GetEmailsDelta
Request a collection of emails with a delta token
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `folderName` (string): The name of the folder
    - `deltaToken` (string): The delta token for retrieving only processed emails
- **Return:** `Task<IMessageDeltaCollectionPage>`

## GetEmailAttachments
Retrieve the attachments for the specific email within the specified folder for the user
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `folderName` (string): The name of the folder
    - `emailId` (string): The ID of the email
- **Return:** `Task<IMessageAttachmentsCollectionPage>`

## GetEmailAttachmentContent
Retrieve the contents of a particular attachment for an email
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `emailId` (string): The ID of the email
    - `attachmentId` (string): The ID of the attachment
- **Return:** `Task<Stream>`

## GetDriveItem
Retrieve a DriveItem instance for a user's OneDrive based on a specified identifier
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `identifier` (string): The identifier of the DriveItem
- **Return:** `Task<DriveItem>`

## UploadDriveItem
Uploads the data stream to the user's OneDrive at the specified path
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `path` (string): The path where the data will be uploaded
    - `data` (Stream): The data stream to be uploaded
- **Return:** `Task<DriveItem>`

## DownloadDriveItem
Downloads a file from the user's OneDrive corresponding to the provided identifier
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `identifier` (string): The identifier of the DriveItem to download
- **Return:** `Task<Stream>`

## DeleteDriveItem
Removes a file from the user's OneDrive corresponding to the provided identifier
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `identifier` (string): The identifier of the DriveItem to delete
- **Return:** `Task`

## GetCalendarEvents
Retrieve calendar events from the user's Outlook calendar between the specified dates
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `fromDate` (DateTime): The starting date of the calendar events
    - `toDate` (DateTime): The ending date of the calendar events
- **Return:** `Task<IEnumerable<Event>>`

## CreateCalendarEvent
Create a new calendar event for the user based on the input
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `input` (Event): The input data for creating the calendar event
- **Return:** `Task`

## UpdateCalendarEvent
Updates an existing calendar event for the user based on the input
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `eventId` (string): The ID of the calendar event to update
    - `input` (Event): The input data for updating the calendar event
- **Return:** `Task`

## DeleteCalendarEvent
Removes an existing calendar event for the user
- **Parameters:** 
    - `userId` (int): The ID of the user
    - `eventId` (string): The ID of the calendar event to delete
- **Return:** `Task`
