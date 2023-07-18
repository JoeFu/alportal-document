# AWSS3
## TransferFileFromAWSS3ToBlob
Transfers a file from AWS S3 to Azure Blob Storage.
- **Parameters:**
    - `bucketName` (type: `string`) - The name of the AWS S3 bucket.
    - `file` (type: `string`) - The key of the file in the AWS S3 bucket.
- **Return:** `Task<string>` - A `Task` object representing the asynchronous operation that returns a `string` identifier.
