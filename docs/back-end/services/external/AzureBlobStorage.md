# AzureBlobStorage

## GetTempUri
Retrieves a temporary signed URL for a specified blob within a container.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
    - `fileName` (type: `string`, optional) - The filename to be set in the content disposition. Defaults to `null`.
- **Return:** `Uri` - The temporary signed URL for the blob.

## UploadBlobAsync
Uploads the provided data stream to a specific container/blob.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
    - `data` (type: `Stream`) - The data stream to be uploaded.
- **Return:** `Task` - Represents the asynchronous operation.

## CopyBlobFromSourceUriAsync
Copies the content from the provided URI to the target container/blob.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
    - `sourceUrl` (type: `Uri`) - The source URI from which to copy the content.
- **Return:** `Task` - Represents the asynchronous operation.

## DownloadBlob
Downloads the specific blob from the container as a stream.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
- **Return:** `Task<Stream>` - A task that represents the asynchronous operation and returns the downloaded blob as a stream.

## DeleteBlobAsync
Deletes the specified blob from blob storage.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
- **Return:** `Task` - Represents the asynchronous operation.

## GetContainerClient
Retrieve a client for a specific container. Creates the container if it does not already exist.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
- **Return:** `Task<BlobContainerClient>` - A task that represents the asynchronous operation and returns the client for the container.

## GetBlobClient
Retrieves a client for a specific blob within the specified container.
- **Parameters:**
    - `containerName` (type: `string`) - The name of the container.
    - `blobName` (type: `string`) - The name of the blob.
- **Return:** `Task<BlobClient>` - A task that represents the asynchronous operation and returns the client for the blob.
