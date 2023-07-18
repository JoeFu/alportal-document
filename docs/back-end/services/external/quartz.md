# Quartz 
This page documents services related to Quartz scheduler.
## ContactEmailAssignmentJob

### ContactEmailAssignmentJob
A Quartz.NET job that synchronizes and assigns emails to a specific contact by invoking the `AssignEmailToContact` method of the `IEmailSyncService` interface using the `ContactId` fetched from the job data map.


### ContactEmailAssignmentJob.Execute
The method required by the Quartz.NET `IJob` interface, responsible for executing the email synchronization and assignment process. It retrieves the `ContactId` from the job data map and calls `AssignEmailToContact` method of the `_emailSyncService` to perform the assignment.

## DocumentExtractionJob

### DocumentExtractionJob
A Quartz.NET job responsible for initiating the extraction of text content from a document. It does so by calling the `ProcessDocumentTextExtraction` method of the `IDocumentService` interface, using the `DocumentId` fetched from the job data map.


### DocumentExtractionJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the text extraction process. It retrieves the `DocumentId` from the job data map and calls the `ProcessDocumentTextExtraction` method of the `_documentService` to extract the text content from the specified document.

## EmailExtractionJob

### EmailExtractionJob
A Quartz.NET job responsible for initiating the extraction of text content from emails. It calls the `ProcessEmailTextExtraction` method of the `IEmailService` interface.


### EmailExtractionJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the email text extraction process. It first checks if the job is enabled in the application configuration (appsettings.json) by reading the value of the key `QuartzCornJob:EmailExtractionJob`. If the value is `true`, it calls the `ProcessEmailTextExtraction` method of the `_emailService` to extract text content from emails.

## EmailSyncAllJob

### EmailSyncAllJob
A Quartz.NET job responsible for synchronizing emails for all syncable users using the `IEmailSyncService`. It schedules individual `EmailSyncJob` instances for each user found during synchronization.


### EmailSyncAllJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the email synchronization process for all syncable users. It retrieves the list of syncable users from the `IEmailSyncService`, and for each user, it schedules an individual `EmailSyncJob` using the `IScheduler` obtained from the `_schedulerFactory`. If the `EmailSyncJob` for a user does not exist, it creates a new one and schedules it to start immediately.

## EmailSyncJob

### EmailSyncJob
A Quartz.NET job responsible for synchronizing emails for a specific user. It uses the `IEmailSyncService`, `IMicrosoftGraphClient`, and `IAzureStorageClient` to retrieve and process emails and their attachments from Microsoft Graph API and store attachments in Azure Blob Storage.


### EmailSyncJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the email synchronization process for a specific user. It retrieves the user ID from the `context.MergedJobDataMap`, then calls the private method `SyncEmailForUser` to initiate the email synchronization process.


### EmailSyncJob.SyncEmailForUser
A private method responsible for the email synchronization process. It retrieves the delta tokens for the user, retrieves the list of folders to sync, and then proceeds to handle the delta changes for each folder by calling the private method `HandleDelta`. After processing each folder's delta changes, it updates the delta tokens and refreshes the user's access token.


### EmailSyncJob.HandleDelta
A private method responsible for handling delta changes in the email folder. It processes each email message retrieved from the delta changes and creates or updates the corresponding `Email` entity using the `IEmailSyncService`. It also handles email recipients, attachments, and associations with contacts, matters, projects, and organizations for each email. Attachments are uploaded to Azure Blob Storage using the `IAzureStorageClient` and stored as `EmailAttachment` entities using the `IEmailSyncService`.

## InvoiceDownloadJob

### InvoiceDownloadJob
A Quartz.NET job responsible for downloading and processing invoices. It takes an `IInvoiceService` as a dependency to handle the invoice download and processing operations.


### InvoiceDownloadJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the invoice download and processing for a specific invoice and submission. It retrieves the `InvoiceId` and `SubmissionId` from the `context.MergedJobDataMap` and then calls the `_invoiceService.ProcessInvoiceDownload` method to handle the invoice download and processing.

## OrganisationEmailAssignmentJob

### OrganisationEmailAssignmentJob
A Quartz.NET job responsible for assigning emails to an organization. It takes an `IEmailSyncService` as a dependency to handle the email assignment operations.


### OrganisationEmailAssignmentJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the email assignment for a specific organization. It retrieves the `OrganisationId` from the `context.MergedJobDataMap` and then calls the `_emailSyncService.AssignEmailToOrganisation` method to handle the email assignment for the organization.

## ProjectTemplateSchedulerJob

### ProjectTemplateSchedulerJob
A Quartz.NET job responsible for scheduling the creation of a project template. It takes `IProjectService`, `IConfiguration`, and `ILogger<ProjectTemplateSchedulerJob>` as dependencies.


### ProjectTemplateSchedulerJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the job to create a project template. It checks if the `ProjectTemplateJob` is enabled in the configuration (`_configuration["QuartzCornJob:ProjectTemplateJob"]`). If enabled, it creates a new `ProjectInput` with the specified template name, owner ID, project template ID, and other properties. It then calls the `_projectService.CreateProject` method to create the project template. If the template name is not provided (`tempProject.Name == null`), it will skip the creation. Any exceptions that occur during the process are logged by `_logger`.

## XeroSyncAllJob

### XeroSyncAllJob
A Quartz.NET job responsible for synchronizing Xero payments. It takes `IXeroService`, `ILogger<XeroSyncAllJob>`, and `IConfiguration` as dependencies.


### XeroSyncAllJob.Execute
The method required by the Quartz.NET `IJob` interface, which executes the job to synchronize Xero payments. It checks if the `XeroSyncAllJob` is enabled in the configuration (`_configuration["QuartzCornJob:XeroSyncAllJob"]`). If enabled, it calls the `_xeroService.SyncAllXeroPayment` method to perform the synchronization of Xero payments.
