

# SharePoint
## getMicrosoftToken
Retrieves a Microsoft token for authentication
- **Parameters:** None
- **Return:** `Task<(string, string)>`

## getSharePointToken
Retrieves a SharePoint token for authentication
- **Parameters:** None
- **Return:** `Task<JObject>`

## getXRequestDigest
Retrieves an X-RequestDigest value for SharePoint API calls
- **Parameters:** None
- **Return:** `Task<JObject>`

## CrateFolderInSharePoint
Creates a folder in SharePoint
- **Parameters:**
   - `folderPath` (string): The path of the folder to be created
- **Return:** `Task<Boolean>`

## MoveFolderInSharePoint
Moves a folder within SharePoint
- **Parameters:**
   - `sourceFolderPath` (string): The path of the source folder to be moved
   - `destinationFolderPath` (string): The path of the destination folder
- **Return:** `Task<JObject>`
