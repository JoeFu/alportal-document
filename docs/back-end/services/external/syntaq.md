# Syntaq

## Syntaq Service

### TriggerMyMatterReportDownload
Triggers the download of a matter report using the specified filters.


### TriggerTrustTransactionReceiptDownload
Triggers the download of a trust transaction receipt for the given transaction ID.


### TriggerStatutoryTrustStatementDownload
Triggers the download of a statutory trust statement for the specified trust account ID.


### TriggerDownloadInvoice
Triggers the download of an invoice using the specified invoice ID and details.


### TriggerDownloadWIPReport
Triggers the download of a work-in-progress report for the given matter ID.


### TriggerSendInvoice
Triggers the sending of an invoice using the specified invoice ID and details.


### TriggerNetBalanceByMatter
Triggers the calculation of the net balance by matter for the given trust account ID, matter ID, and end date.


### TriggerNetBalanceByClient
Triggers the calculation of the net balance by client for the given trust account ID, client ID, and end date.


### TriggerTrialBalance
Triggers the calculation of the trial balance for the specified trust account ID and end date.


### TriggerReconciliationReport
Triggers the generation of a reconciliation report for the specified trust account ID and date range.


### TriggerSendFriendlyReminderEmail
Triggers the sending of a friendly reminder email for the specified invoice ID and details.


### TriggerSendFirstReminderEmail
Triggers the sending of the first reminder email for the specified invoice ID and details.


### TriggerSendSecondReminderEmail
Triggers the sending of the second reminder email for the specified invoice ID and details.


### TriggerSendInvoiceStatementEmail
Triggers the sending of an invoice statement email for the specified client ID.


### TriggerFriendlyReminderDownload
Triggers the download of a friendly reminder for the specified invoice ID and details.


### TriggerFirstReminderDownload
Triggers the download of the first reminder for the specified invoice ID and details.


### TriggerSecondReminderDownload
Triggers the download of the second reminder for the specified invoice ID and details.


### TriggerInvoiceStatementDownload
Triggers the download of an invoice statement for the specified client ID.


### TriggerTrustNotificationSent
Triggers the sending of a trust notification email for the specified matter ID, request ID, and input.


### TriggerTrustNotificationToRequestor
Triggers the sending of a trust notification email to the requestor for the specified request ID and approval status.


### TriggerStatutoryTrustAccountRequestSent
Triggers the sending of a statutory trust account request email to AA for the specified matter ID, request ID, and input.


### TriggerStatutoryTrustAccountApprovalSent
Triggers the sending of a statutory trust account approval email for the specified matter ID, request ID, and input.


### TriggerStatutoryTrustAccountRejectSent
Triggers the sending of a statutory trust account rejection email for the specified matter ID, request ID, and input.


### TriggerTrustUnknownDepositSent
Triggers the sending of a trust unknown deposit email for the specified transaction ID.


### CheckSubmissionForCompletion
Checks the completion status of a submission and returns the status along with the URLs to download the generated PDF and Word documents, if available.


### DownloadSyntaqFile
Downloads a Syntaq file from the specified URL.

### SyncSyntaqForms
Synchronizes Syntaq forms by comparing the server and local records, adding new forms, updating existing ones, and removing removed records from the server.

### GetById
Retrieves a Syntaq form by its ID.

### GetReceivedPayments
Retrieves the total received payments for a specific invoice.

### GetSyntaqForms
Retrieves a paginated list of Syntaq forms based on optional search filters.

### GetActiveSyntaqForms
Retrieves a paginated list of active Syntaq forms based on optional search filters.

### GetSyntaqFormEmbedForMatter
Retrieves the Syntaq form embed for a specific matter, populating it with provided data.

### GetSyntaqDocumentRecords
Retrieves the Syntaq document records and provides an embed script to display them.

### GetSyntaqFormEmbed
Retrieves the Syntaq form embed for a specific form ID, optionally populating it with data.

### TriggerSyntaqApp
Triggers a Syntaq app with the specified ID and input data.

### GetSyntaqAccessToken
Retrieves the Syntaq access token. If a token is stored and valid, it returns the stored token; otherwise, it fetches a new one using authentication credentials.

### FetchSyntaqAccessToken
Fetches a new Syntaq access token using authentication credentials.

## Syntaq Data Service

### GetCollectionLetterData
This method retrieves data related to a specific invoice (`InvoiceId`) and generates a collection letter data dictionary. It includes details about the client, matter, invoice, time entries, fixed price items, disbursements, and more.

### GetInvoiceStatementData
This method retrieves data related to a specific client (`ClientId`) and generates an invoice statement data dictionary. It includes details about the client, their invoices, payments, and outstanding amount.

### GetReceivedPayments
A private helper method that calculates the total received payments for a specific invoice (`invoiceId`) based on payment data stored in the database.

### GetTotalInvoiceValueInclGst
A private async helper method that calculates the total invoice value (including GST) for a specific invoice (`invoiceId`) based on related disbursements, fixed price items, and time entries.

### GetMatterReportData
This method retrieves data for generating a matter report based on various filters. It includes information about matters, reviewers, coordinators, days open, trust funds, total time value, total invoiced value, and WIP (Work in Progress) amount.


### GetInvoiceData
This method retrieves invoice data based on the provided invoice ID and InvoiceDto. It includes various data related to clients, organizations, addresses, time entries, disbursements, fixed price items, etc. The method builds a `Dictionary<string, object>` containing the retrieved data.

### GetWIPReportData
This method retrieves work-in-progress (WIP) report data for a specific matter. It includes details such as matter information, time entries, disbursements, total WIP value, and created date. Similar to `GetInvoiceData`, it also builds a `Dictionary<string, object>` to store the data.

### GetTrustNetBalanceByMatterData
This method calculates the net balance by matter for a given trust account, matter ID, and end date. It retrieves relevant transactions and builds a `Dictionary<string, object>` to store data like legal entity, client name, matter name, transaction details, and trust total.

### NetBalanceByMatter
This private method calculates the net balance by matter for a given trust account, matter ID, and end date. It retrieves trust transactions and transfer transactions for the specified matter and calculates the net balance.

### GetTrustNetBalanceByClientData
This method calculates the net balance by client for a given trust account, client ID, and end date. It retrieves matters associated with the client and calculates the net balance for each matter, finally building a `Dictionary<string, object>` to store the data.


### NetBalanceByClient

This method calculates the net balance of a client's trust account transactions up to a specified end date. It fetches client information from the database, including matters related to the client, and then calculates the net balance for each matter based on trust transactions and transfer transactions. The method returns a data transfer object (DTO) containing the client's net balance details.

### TrialBalance

This method calculates the trial balance for a trust account up to a specified end date. It retrieves matters related to the trust account and computes the total balance, reconciled balance, and variance. It uses the helper methods `GetTrustTotalAtDate` and `GetReconciledTrustTotalAtDate` to calculate the trust total and reconciled trust total for each matter. The method returns a data transfer object (DTO) containing the trial balance details.

### GetTrustTotalAtDate

This helper method is used by `TrialBalance` to calculate the total trust amount for a specific matter up to a given end date. It fetches matter information, including trust transactions and transfer trust transactions, and then calculates the total amount by summing the deposits, withdrawals, outgoing transfers, and incoming transfers.

### GetReconciledTrustTotalAtDate

This helper method is used by `TrialBalance` to calculate the reconciled total trust amount for a specific matter up to a given end date. It fetches matter information, including trust transactions and transfer trust transactions, and then calculates the reconciled total amount by summing the reconciled deposits, withdrawals, outgoing transfers, and incoming transfers.

### GetTrialBalanceData

This method retrieves data to generate a trial balance report for a trust account within a specified date range. It gathers various details such as legal entity, account information, matter-wise balances, and more. The method uses the `TrialBalance` method to calculate the trial balance, and then formats the data into a dictionary that can be used for generating the report. The returned dictionary includes trust account information, trial balance data, and a list of matters with their balances.


### GetReconciliationReportData
Retrieves reconciliation report data for a trust account within a specified date range, including transaction details and their reconciliation status.

### ReconciliationReport
Generates a reconciliation report for a trust account based on the specified date range, including transaction details and reconciliation status.

### GetMatterSyntaqFormData
Retrieves data required for creating a matter form in the Syntaq system, including client and matter details, outcomes, offerings, and team members.

### GetTrustData
Retrieves trust-related data for a specific matter and transaction request, including transaction type, purpose, amount, and relevant details.

### GetTrustRequestData
Retrieves data for a specific trust transaction request, including user information, matter details, transaction type, and approval status.

### GetStatutoryTrustAccountRequestData
Retrieves data for a statutory trust account request, including transaction details, period, and deadline.
### GetTrustTotalFunds
Calculates the total funds available in a trust account by subtracting withdrawals from deposits.
### getTransactionType
Returns the string representation of a trust transaction type (e.g., Deposit, Withdrawal, Transfer).
### GetStatutoryTrustStatementData
Fetches data for generating a statutory trust statement, including legal entity information and transaction details.
### GetStatutoryTrustAccountApprovalData
Fetches data for approving a statutory trust account, including transaction details, account balance, and deposit deadline.

### GetStatutoryTrustAccountRejectData
Retrieves data for a rejected statutory trust account request, including transaction details, period, and reason for rejection.
### GetTrustTransactionReceiptData
Generates data for a trust transaction receipt, including legal entity, client, matter, and transaction details.
### GetTrustUnknownDepositData
Fetches data for an unknown trust deposit transaction, providing information such as legal entity state, reference, date, purpose, and amount.