# Invoices
## Invoice Job Schedular Service


### InvoiceJobSchedulerService
A service responsible for scheduling jobs related to invoice document download. It implements the `IInvoiceJobSchedulerService` interface.



### InvoiceJobSchedulerService.ScheduleInvoiceDocumentDownload
A method that schedules the `InvoiceDownloadJob` for downloading an invoice document. It takes an `invoiceId` and `submissionId` as parameters. It uses the `ISchedulerFactory` to get the scheduler instance and then checks if a job with the specified `jobKey` already exists. If the job exists, it updates the trigger with new data, rescheduling the job. If the job does not exist, it creates a new `InvoiceDownloadJob`, sets its identity and data using `JobBuilder`, creates a trigger with an immediate start, and schedules the job using the scheduler.

## Invoice Service


### InvoiceService
A service for managing invoice-related operations, implementing `IInvoiceService`.



### GetInvoices
Retrieves paginated invoices based on filters, search term, and sort option. Returns `PaginatedDto<InvoiceListDto>`.



### GetInvoicesForMatter
Retrieves paginated invoices relevant to a matter based on `matterId`. Returns `PaginatedDto<InvoiceListDto>`.



### GetInvoicesForClient
Retrieves paginated invoices relevant to a client based on `clientId`. Returns `PaginatedDto<InvoiceListDto>`.



### CreateInvoice
Creates a new invoice with a BPay compatible number. Returns void.



### GetInvoiceById
Retrieves an invoice by ID with calculated values and related entities. Returns `InvoiceDto`.



### GetAvailableTimeEntriesForInvoice
Retrieves paginated time entries available for selection for a specific invoice. It fetches Matter Component time entries associated with the matter of the invoice, which have not been invoiced yet, and returns a `PaginatedDto` of `TimeEntryDto`.



### GetInvoiceTimeEntries
Retrieves paginated time entries for a particular invoice. It fetches Matter Component time entries associated with the invoice and returns a `PaginatedDto` of `MatterComponentTimeEntryDto`.



### AddTimeEntriesToInvoice
Adds a single time entry to a specific invoice. It associates the time entry with the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



### AddAllTimeEntriesToInvoice
Adds all available time entries related to the matter of the given invoice to that invoice. It marks each time entry as associated with the invoice and updates the file status accordingly. After that, it notifies the `notifier` about the invoice update.



### RemoveTimeEntriesFromInvoice
Removes a time entry from a specific invoice. It disassociates the time entry from the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



### GetAvailableDisbursementsForInvoice
Retrieves paginated disbursements available for selection for a specific invoice. It fetches Matter disbursements associated with the matter of the invoice that have not been invoiced yet, and returns a `PaginatedDto` of `DisbursementDto`.



### GetInvoiceDisbursements
Retrieves paginated disbursements for a particular invoice. It fetches disbursements associated with the invoice and returns a `PaginatedDto` of `DisbursementDto`.



### AddDisbursementsToInvoice
Adds a single disbursement to a specific invoice. It associates the disbursement with the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update. Only possible if the invoice is in "Draft" status.



### RemoveDisbursementsFromInvoice
Removes a disbursement from a specific invoice. It disassociates the disbursement from the invoice, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update. Only possible if the invoice is in "Draft" status.



### GetInvoiceFixedPriceItems
Retrieves paginated fixed price items associated with a specific invoice. It fetches fixed price items associated with the invoice and returns a `PaginatedDto` of `FixedPriceItemDto`.



### AddFixedPriceItemToInvoice
Creates a new fixed price item and associates it with a specific invoice. It verifies that the invoice is in "Draft" status and has a type of `FixedPrice`. The fixed price item details are provided in the `CreateFixedPriceItemInput`. The method saves the fixed price item to the database, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



### RemoveFixedPriceItemFromInvoice
Removes a fixed price item from an invoice and deletes it as fixed price items cannot exist independently. It verifies that the invoice is in "Draft" status. The method disassociates the fixed price item from the invoice, deletes it from the database, marks the invoice's file status as not up-to-date, and notifies the `notifier` about the invoice update.



### UpdateDisbursementFromInvoice
Updates the details of a disbursement associated with an invoice. The method takes `disbursementId` and a `DisbursementInput` containing the updated disbursement details. It checks if the disbursement is associated with an invoice and if the invoice is in "Draft" status. If so, it updates the disbursement details and saves the changes to the database. If the disbursement is not associated with an invoice, it updates the details and saves the changes.



### UpdateFixedPriceItemFromInvoice
Updates the details of a fixed price item associated with an invoice. The method takes `id` of the fixed price item and a `FixedPriceItemInput` containing the updated details. It updates the description, cost, quantity, and date of the fixed price item and saves the changes to the database. It also notifies the `notifier` about the invoice update.



### AddInvoiceCredit
A placeholder method that throws a `NotImplementedException`. This method is not yet implemented and will be added in the future for handling invoice credits.



### RemoveInvoiceCredit
A placeholder method that throws a `NotImplementedException`. This method is not yet implemented and will be added in the future for removing invoice credits.



### GetInvoicePreview
Triggers the generation of an invoice from Syntaq (an external service) and schedules an attempt to retrieve the resulting invoice PDF. It takes the `id` of the invoice for which the preview is requested. The method uses the `_syntaqService` to trigger the invoice generation and `_invoiceJobSchedulerService` to schedule the PDF download. It updates the `FileRequestedAt` and `FileUptoDate` properties of the invoice, indicating that a file has been requested but is not yet available. It also notifies the `notifier` about the invoice update.



### GetInvoicePDFDownload
Triggers the generation of an invoice PDF from Syntaq and returns the submission ID. It is similar to `GetInvoicePreview`, but it does not wait for the download to complete. Instead, it immediately returns the `SyntaqSubmissionDto` with the submission ID for later retrieval of the PDF.



### GetMatterWIPReportPdfLink
Triggers the generation of a Work in Progress (WIP) report for a particular matter using Syntaq. It takes the `matterId` and uses the `_syntaqService` to trigger the report generation. The method then returns the `SyntaqSubmissionDto` with the submission ID for later retrieval of the PDF.


### SendFriendlyReminderEmail
Sends a friendly reminder email for a specific invoice. It takes the `id` of the invoice. The method uses the `_syntaqService` to trigger the sending of the reminder email and `_notesService` to record notes related to the email in the matter's history. The sender information is retrieved from the authenticated user. The method then returns the `SyntaqSubmissionDto` with the submission ID for further reference.


### SendFirstReminderEmail
Sends the first reminder email for a specific invoice. It takes the `id` of the invoice, triggers the sending of the first reminder email using the `_syntaqService`, and records a note related to the email in the matter's history using `_notesService`. The method then returns the `SyntaqSubmissionDto` with the submission ID for future reference.


### SendSecondReminderEmail
Similar to the previous method but sends the second reminder email for a specific invoice using `_syntaqService`, records a note related to the email in the matter's history using `_notesService`, and returns the `SyntaqSubmissionDto` with the submission ID.


### SendInvoiceStatementEmail
Sends an invoice statement email for all unpaid invoices associated with a specific client (identified by `id`). It retrieves the unpaid invoices, triggers the sending of the statement email using `_syntaqService`, records a note related to the email in each invoice's history using `_notesService`, and returns the `SyntaqSubmissionDto` with the submission ID.


### GetFriendlyReminderPDFDownload
Triggers the download of a PDF for a friendly reminder email previously sent for a specific invoice. It takes the `id` of the invoice and uses `_syntaqService` to initiate the download. It then returns the `SyntaqSubmissionDto` with the submission ID.


### GetFirstReminderPDFDownload
Triggers the download of a PDF for the first reminder email previously sent for a specific invoice. It takes the `id` of the invoice, uses `_syntaqService` to initiate the download, and returns the `SyntaqSubmissionDto` with the submission ID.


### GetSecondReminderPDFDownload
Triggers the download of a PDF for the second reminder email previously sent for a specific invoice. It takes the `id` of the invoice and uses `_syntaqService` to initiate the download. It then returns the `SyntaqSubmissionDto` with the submission ID.


### GetInvoiceStatementPDFDownload
Triggers the download of a PDF for an invoice statement email previously sent for a specific client. It takes the `id` of the client, uses `_syntaqService` to initiate the download, and returns the `SyntaqSubmissionDto` with the submission ID.


### ProcessInvoiceDownload
Checks for the successful completion of an invoice triggered on Syntaq. If successful, it downloads the resulting PDF, stores it on Azure Blob Storage, and stores an identifier for later reference. If not, it schedules another check using `_invoiceJobSchedulerService`. This method is useful for asynchronous processing of invoice generation and storage.


### GetInvoiceFileUrl
Retrieves a URL for accessing the stored invoice PDF. It takes the `id` of the invoice, looks up the invoice in the database, and generates a temporary URL to access the invoice PDF stored in Azure Blob Storage. It returns the `InvoiceLinkDto` with the generated URL.


### GetInvoiceFileStream
Retrieves a data stream containing the contents of the stored invoice PDF. It takes the `id` of the invoice, looks up the invoice in the database, and downloads the corresponding invoice PDF from Azure Blob Storage as a `Stream`. This method is useful for directly accessing the PDF content of the invoice.


### SendInvoiceForApproval
Moves the invoice from draft state to awaiting approval state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "AwaitingApproval." Additionally, it sets the invoice date to the current UTC date and the due date to the current UTC date plus 14 days. This method is used to send an invoice for approval once it has been drafted.


### RejectDraft
Moves the invoice from awaiting approval state back to draft state. It takes the `id` of the invoice and a `rejectReason`. It looks up the invoice in the database and changes its status to "Draft." It also resets the invoice date and due date to `null` and stores the `rejectReason`. This method is used when an invoice needs to be rejected, and it also sends a notification to the drafting user with the rejection reason.


### ApproveDraft
Moves the invoice from awaiting approval state to approved state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "Approved." It sets the invoice date to the current UTC date and the due date to the current UTC date plus 14 days. Additionally, it stores the user ID of the user who approved the invoice. This method is used to approve a pending invoice.


### SendInvoice
Moves the invoice from approved state to sent state. It takes the `id` of the invoice, looks up the invoice in the database, and changes its status to "Sent." It sets the sent by user ID, invoice date to the current UTC date, due date to the current UTC date plus 14 days, and sets the `InvoiceSent` flag to `true`. It then triggers the sending of the invoice to Syntaq and Xero, and records notes related to the sent invoice. This method is used to mark an approved invoice as sent and initiate the process of sending it to the client via Syntaq and Xero.


### GetTotalTimeValue
Computes the total time value for a particular invoice. It takes the `invoiceId`, retrieves all associated Matter Component time entries from the database using the invoiceId, and calculates the total value as units * rate / 10 (since rates are hourly and there are 10 units to an hour). This method is used to calculate the total value of time-based entries in an invoice.



### GetTotalFixedPriceItemValue
Computes the total value of the fixed price items for a particular invoice. It takes the `invoiceId`, retrieves all associated fixed price items from the database with the specified `invoiceId`, and calculates the sum of cost * quantity for those items.


### GetTotalDisbursementValue
Computes the total value of disbursements for a particular invoice. It takes the `invoiceId`, retrieves all associated disbursements from the database with the specified `invoiceId`, and calculates the sum of cost * units for those disbursements.


### GetTotalInvoiceValue
Computes the total value of the invoice, factoring in different types of billable items (time entries, fixed price items, and disbursements). It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and calculates the total value based on the type of invoice and the billable items associated with it.


### GetTotalInvoiceValueInclGst
Computes the total value of the invoice, factoring in GST (Goods and Services Tax). It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and calculates the total value including GST based on the type of invoice and the billable items associated with it. The GST amount is added to each individual time entry, fixed price item, or disbursement if applicable.


### GetReceivedPayments
Retrieves the total amount of received payments for a specific invoice. It takes the `invoiceId`, looks up all associated payments from the database with the specified `invoiceId`, and calculates the total amount received from those payments.



### GetOutstandingAmount
Calculates the outstanding amount for a specific invoice. It subtracts the received payments from the total invoice value (including GST) to determine the amount still outstanding.


### GetDaysOverDue
Calculates the number of days that an invoice is overdue. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and checks if the invoice is unpaid, has a due date, and is in the "Sent" status. If these conditions are met, it calculates the difference between the current date and the due date to determine the number of days overdue.


### GetXeroPaymentHistoryFromXero
Retrieves a paginated list of payment history associated with a specific invoice in Xero. It takes the `invoiceId` and paginated filters as input and returns a paginated list of `PaymentDto` objects.


### getInvoiceLifeTimebyClientId
Calculates the lifetime value of invoices for a specific client. It takes the `id` of the client and retrieves all matters associated with the client. Then, it iterates through each matter and calculates the total invoice value, total payments received, and total outstanding amount for each invoice. Finally, it returns an `InvoiceLifeTimeValueDto` containing these calculated values.


### DeleteInvoice
Deletes an invoice from the database. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and removes it from the context before saving changes.



### UpdateDoNotCollect
Updates the "DoNotCollect" flag for a specific invoice. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and toggles the "DoNotCollect" flag (sets it to `false` if it was `true`, or `true` if it was `null` or `false`). It then saves the changes to the database.


### UpdateInvoiceDate
Updates the invoice date for a specific invoice. It takes the `invoiceId` and the new invoice date (`newInvoiceDate`). It retrieves the invoice from the database with the specified `invoiceId`, and if the invoice exists and the new date is valid (not equal to `new DateTime()`), it updates the invoice's `InvoiceDate` and `DueDate` (set as the `newInvoiceDate` plus 14 days) and saves the changes to the database. If the invoice doesn't exist or the new date is invalid, it writes "null" to the console.


### ReSyncInvoiceToXero
Attempts to resynchronize an invoice with Xero. It takes the `invoiceId`, retrieves the invoice from the database with the specified `invoiceId`, and checks if the `XeroId` is null, empty, or "0". If it is, it calls the `_xeroservice.CreateInvoiceInXero` method to create the invoice in Xero, updates the `XeroId`, sets `SyncedToXero` to true, and updates the `LastSyncAt` to the current date and time. If the `XeroId` is not null, empty, or "0", it sets `SyncedToXero` to true and updates the `LastSyncAt` to the current date and time. It then saves the changes to the database and returns the `XeroId`.


## Invoice Statistic Service
The `InvoiceStatisticsService` class provides methods to retrieve various statistics related to invoices and their components.

### GetAvailableTimeEntriesForInvoice
Retrieves available time entries that can be added to an invoice. It takes the `id` of the invoice, and `filters` for pagination. It fetches the invoice from the database, then queries for MatterComponentTimeEntries where the `MatterId` matches the `MatterId` of the invoice, and the `InvoiceId` is null. The result is paginated and mapped to `TimeEntryDto`.

### GetInvoiceTimeEntries
Retrieves time entries associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries MatterComponentTimeEntries where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `MatterComponentTimeEntryDto`.

### GetAvailableDisbursementsForInvoice
Retrieves available disbursements that can be added to an invoice. It takes the `id` of the invoice and `filters` for pagination. It fetches the invoice from the database, then queries for Disbursements where the `MatterId` matches the `MatterId` of the invoice, and the `InvoiceId` is null. The result is paginated and mapped to `DisbursementDto`.

### GetInvoiceDisbursements
Retrieves disbursements associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries Disbursements where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `DisbursementDto`.

### GetInvoiceFixedPriceItems
Retrieves fixed price items associated with a specific invoice. It takes the `id` of the invoice and `filters` for pagination. It queries FixedPriceItems where the `InvoiceId` matches the specified `id`, orders the results by date, and maps them to `FixedPriceItemDto`.

### GetTotalTimeValue
Computes the total value of time entries for a specific invoice. It takes the `invoiceId`, and queries MatterComponentTimeEntries where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Units * Rate / 10`.

### GetTotalFixedPriceItemValue
Computes the total value of fixed price items for a specific invoice. It takes the `invoiceId`, and queries FixedPriceItems where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Cost * Quantity`.

### GetTotalDisbursementValue
Computes the total value of disbursements for a specific invoice. It takes the `invoiceId`, and queries Disbursements where the `InvoiceId` matches the specified `invoiceId`. It calculates the total value as the sum of `Cost * Units`.

### GetTotalInvoiceValue
Computes the total value of the invoice (including time entries and disbursements). It takes the `invoiceId`, retrieves the invoice from the database, and calculates the total value based on the type of invoice (FixedPrice or TimeEntry) and the associated components.

### GetTotalInvoiceValueInclGst
Computes the total value of the invoice, factoring in GST. It takes the `invoiceId`, retrieves the invoice from the database, and calculates the total value based on the type of invoice (FixedPrice or TimeEntry), the associated components, and the GST type.

### GetReceivedPayments
Computes the total amount of payments received for a specific invoice. It takes the `invoiceId`, and queries Payments where the `InvoiceId` matches the specified `invoiceId`. It calculates the total amount as the sum of `Amount`.

### GetOutstandingAmount
Computes the outstanding amount for a specific invoice. It takes the `invoiceId`, and calculates it as the difference between the total invoice value (including GST) and the total received payments.

### GetDaysOverDue
Computes the number of days that an invoice is overdue. It takes the `invoiceId`, retrieves the invoice from the database, and calculates the days overdue based on the due date and the current date.

### GetXeroPaymentHistoryFromXero
Retrieves the payment history for an invoice from Xero. It takes the `id` of the invoice and `filters` for pagination. It queries Payments where the `InvoiceId` matches the specified `id`, and maps the results to `PaymentDto`.

### GetInvoiceLifeTimebyClientId
Retrieves lifetime values related to all invoices of a specific client. It takes the `id` of the client, and calculates the total invoice value, total payments received, and total outstanding amount for all invoices associated with the client's matters.

