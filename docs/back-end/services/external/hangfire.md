# Hangfire Jobs
This page documents the Hangfire background jobs used in the ALP application for processing asynchronous tasks.

## HangfireValidateUserJob

### HangfireValidateUserJob
A Hangfire job that validates and cleans up expired user tokens and OTPs. It removes expired refresh tokens and one-time passwords from the database, and validates Microsoft refresh tokens by attempting to refresh them. If a Microsoft token refresh fails, it clears the token from the user record.

### HangfireValidateUserJob.Execute
The main execution method that performs token cleanup and validation. It removes expired tokens and OTPs from the database, then iterates through users with Microsoft refresh tokens to validate them by attempting a token refresh. If the refresh fails with an "invalid_grant" error, it clears the token from the user record.

## HangfireSyncWikiJob

### HangfireSyncWikiJob
A Hangfire job responsible for synchronizing wiki pages from a remote site. It uses the `IWikiService` to perform the synchronization and checks if the job is enabled in the configuration.

### HangfireSyncWikiJob.Execute
The execution method that checks if the wiki sync job is enabled via the `CornJob:WikiPageSyncJob` configuration setting. If enabled, it calls the `SyncWikiFromRemoteSite` method of the `IWikiService`. If disabled, it logs that the job is disabled.

## HangfireTrustStatementAutomationJob

### HangfireTrustStatementAutomationJob
A Hangfire job that automates the sending of trust statements for matters with trust funds. It processes all trust ledgers for matter transactions and triggers trust statement generation for matters with positive trust balances.

### HangfireTrustStatementAutomationJob.Execute
The execution method that retrieves all trust ledgers for matter transactions, checks the current trust funds for each matter, and if the funds are greater than 0, triggers the sending of trust statements via the `ISyntaqService`. It also logs automation activities to the `AutomationLogs` table.

## HangfireSyncUserEmailsJob

### HangfireSyncUserEmailsJob
A Hangfire job responsible for synchronizing emails for all syncable users. It schedules individual email sync jobs for each user and processes email messages from Microsoft Graph API, storing attachments in Azure Blob Storage.

### HangfireSyncUserEmailsJob.Execute
The main execution method that retrieves all syncable users and schedules recurring jobs for each user to sync their emails every 20 minutes using `RecurringJob.AddOrUpdate`.

### HangfireSyncUserEmailsJob.HangfireSyncUserEmailJob
A method that checks if email sync is enabled and queues a background job to sync user email folders.

### HangfireSyncUserEmailsJob.SyncUserEmailFolderEmails
Processes email synchronization for a specific user by retrieving syncable email folders and processing each folder individually.

### HangfireSyncUserEmailsJob.SyncEachEmailFolder
Handles the synchronization of individual email folders by processing messages in batches, handling delta tokens, and managing folder status updates. It processes email messages, handles attachments, and updates sync tokens.

### HangfireSyncUserEmailsJob.HandleEmailMessage
Processes individual email messages, handles recipients, attachments, and associations with contacts, matters, projects, and organizations. Attachments are uploaded to Azure Blob Storage.

## HangfireSyncUserEmailFoldersJob

### HangfireSyncUserEmailFoldersJob
A Hangfire job that synchronizes email folder structures for all syncable users. It checks for folder changes every 2 hours and updates the folder structure in the database.

### HangfireSyncUserEmailFoldersJob.Execute
The main execution method that retrieves all syncable users and schedules recurring jobs to sync email folders every 2 hours using a cron expression.

### HangfireSyncUserEmailFoldersJob.SyncUserEmailFolder
Processes email folder synchronization for a specific user by retrieving folders from Microsoft Graph API, creating or updating folder records in the database, and updating delta tokens.

## HangfireSyncInvoicesToXeroJob

### HangfireSyncInvoicesToXeroJob
A Hangfire job responsible for synchronizing Xero payments. It calls the `SyncAllXeroPayment` method of the `IXeroService` to perform the synchronization.

### HangfireSyncInvoicesToXeroJob.Execute
The execution method that checks if the Xero sync job is enabled via the `CornJob:XeroSyncAllJob` configuration setting. If enabled, it calls the `SyncAllXeroPayment` method. If disabled, it logs that the job is disabled.

## HangfireInvoiceStatementAutomationJob

### HangfireInvoiceStatementAutomationJob
A Hangfire job that automates invoice statement processing and reminder emails. It processes overdue invoices and triggers appropriate automation actions based on payment status and trust balances.

### HangfireInvoiceStatementAutomationJob.Execute
The execution method that checks if invoice automation is enabled and calls the `TriggerInvoiceStatementAutomation` method to process invoice automation.

### HangfireInvoiceStatementAutomationJob.TriggerInvoiceStatementAutomation
Processes invoice automation by checking overdue invoices, calculating outstanding amounts, determining appropriate reminder types based on overdue days, and triggering statement emails via the `ISyntaqService`.

## HangfireSyncClientToXeroContact

### HangfireSyncClientToXeroContact
A Hangfire job that synchronizes client information to Xero as contacts. It takes a client ID as a parameter and creates a corresponding contact in Xero.

### HangfireSyncClientToXeroContact.Execute
The execution method that takes a client ID and calls the `CreateXeroContactbyClientId` method of the `IXeroService` to create a Xero contact for the specified client.

## HangfireExtractionEmailsJob

### HangfireExtractionEmailsJob
A Hangfire job responsible for extracting text content from emails. It processes email text extraction using the `IEmailService`.

### HangfireExtractionEmailsJob.Execute
The execution method that checks if email extraction is enabled via the `CornJob:EmailExtractionJob` configuration setting. If enabled, it calls the `ProcessEmailTextExtraction` method of the `IEmailService`. If disabled, it logs that the job is disabled.

## HangfireExportEmailToMatter

### HangfireExportEmailToMatter
A Hangfire job that exports emails to PDF format for matters. It takes a matter ID and email ID as parameters and generates a PDF export of the email.

### HangfireExportEmailToMatter.Execute
The execution method that takes a matter ID and email ID and calls the `ExportMatterEmailToPdf` method of the `IEmailService` to generate a PDF export of the specified email.

## HangfireExtractionDocumentsJob

### HangfireExtractionDocumentsJob
A Hangfire job responsible for extracting text content from documents. It processes document text extraction using the `IDocumentService`.

### HangfireExtractionDocumentsJob.Execute
The execution method that takes a document ID and calls the `ProcessDocumentTextExtraction` method of the `IDocumentService` to extract text content from the specified document.

## HangfireAssignEmailToOrganisation

### HangfireAssignEmailToOrganisation
A Hangfire job that assigns emails to organizations. It takes an organization ID as a parameter and assigns relevant emails to that organization.

### HangfireAssignEmailToOrganisation.Execute
The execution method that takes an organization ID and calls the `AssignEmailToOrganisation` method of the `IEmailSyncService` to assign emails to the specified organization.

## HangfireCreateSharePointFolderForMatter

### HangfireCreateSharePointFolderForMatter
A Hangfire job that creates SharePoint folders for matters. It takes a matter ID as a parameter and creates a corresponding folder structure in SharePoint.

### HangfireCreateSharePointFolderForMatter.Execute
The execution method that takes a matter ID and calls the `CreateSharePointFolderForMatter` method of the `ISharePointService` to create a SharePoint folder for the specified matter.

## HangfireAddAllProjectTemplatesJob

### HangfireAddAllProjectTemplatesJob
A Hangfire job that schedules recurring project template creation jobs. It retrieves all repeatable project templates and schedules recurring jobs for each template based on their cron expressions.

### HangfireAddAllProjectTemplatesJob.Execute
The main execution method that retrieves all repeatable project templates and schedules recurring jobs for each template using their respective cron expressions via `RecurringJob.AddOrUpdate`.

### HangfireAddAllProjectTemplatesJob.CreateScheduler
A method that creates projects from templates. It checks if project template jobs are enabled and calls the `CreateProjectByScheduler` method of the `IProjectTemplateService` to create a project from the specified template.

## HangfireAssignEmailToContact

### HangfireAssignEmailToContact
A Hangfire job that assigns emails to contacts. It takes a contact ID as a parameter and assigns relevant emails to that contact.

### HangfireAssignEmailToContact.Execute
The execution method that takes a contact ID and calls the `AssignEmailToContact` method of the `IEmailSyncService` to assign emails to the specified contact.
