# Matter Controllers
This page provides documentation for some of the <tomato>important and more frequently used</tomato> matter controllers in the ALP application. 

Each controller has its own set of endpoints with specific functionalities. 
## Disbursement Controller
### GetList
> Retrieves a paginated list of disbursements for a specific matter.
> - Endpoint: `GET /api/matters/{matterId}/disbursements`

### Create
> Creates a new disbursement for a specific matter.
> - Endpoint: `POST /api/matters/{matterId}/disbursements`

### GetById
> Retrieves a disbursement by its ID for a specific matter.
> - Endpoint: `GET /api/matters/{matterId}/disbursements/{id}`

### Update
> Updates a disbursement for a specific matter.
> - Endpoint: `PUT /api/matters/{matterId}/disbursements/{id}`

### Patch
> Partially updates a disbursement for a specific matter using JSON Patch.
> - Endpoint: `PATCH /api/matters/{matterId}/disbursements/{id}`

### Delete
> Deletes a disbursement by its ID for a specific matter.
> - Endpoint: `DELETE /api/matters/{matterId}/disbursements/{id}`

## Invoice Controller
### GetList
> Retrieves a paginated list of invoices based on the specified filters.
> - Endpoint: `GET api/invoices`

### GetAwaitingApprovalList
> Retrieves a paginated list of invoices in the "Awaiting Approval" status.
> - Endpoint: `GET api/invoices/awaiting-approval`

### GetApprovedList
> Retrieves a paginated list of invoices in the "Approved" status.
> - Endpoint: `GET api/invoices/approved`

### GetInvoicePdfLink
> Retrieves a link to download the PDF of a specific invoice.
> - Endpoint: `GET api/invoices/pdf/{invoiceId}`

### GetMatterWIPReportPdfLink
> Retrieves a link to download the PDF of the Work in Progress (WIP) report for a specific matter.
> - Endpoint: `GET api/invoices/pdf/wip/{matterId}`

### GetFriendlyReminderPDFDownload
> Retrieves a link to download the PDF of a friendly reminder for a specific invoice.
> - Endpoint: `GET api/invoices/friendly-reminder/pdf/{invoiceId}`

### GetFirstReminderPDFDownload
> Retrieves a link to download the PDF of the first reminder for a specific invoice.
> - Endpoint: `GET api/invoices/first-reminder/pdf/{invoiceId}`

### GetSecondReminderPDFDownload
> Retrieves a link to download the PDF of the second reminder for a specific invoice.
> - Endpoint: `GET api/invoices/second-reminder/pdf/{invoiceId}`
### GetInvoiceStatementPDFDownload
> Retrieves a link to download the PDF of the invoice statement for a specific client.
> - Endpoint: `GET api/invoices/invoicestatement/pdf/{clientId}`

### SendFriendlyReminderEmail
> Sends a friendly reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/friendly-reminder/email/{invoiceId}`

### SendFirstReminderEmail
> Sends the first reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/first-reminder/email/{invoiceId}`

### SendSecondReminderEmail
> Sends the second reminder email for a specific invoice.
> - Endpoint: `GET api/invoices/second-reminder/email/{invoiceId}`

### SendInvoiceStatementEmail
> Sends the invoice statement email for a specific client.
> - Endpoint: `GET api/invoices/invoicestatement/email/{clientId}`

### GetInvoiceLifeTimebyClientId
> Retrieves the lifetime value of invoices for a specific client.
> - Endpoint: `GET api/invoices/life-time-value/{id}`

### Create
> Creates a new invoice based on the provided input.
> - Endpoint: `POST api/invoices`

### GetById
> Retrieves the details of a specific invoice.
> - Endpoint: `GET api/invoices/{id}`

### GetInvoicesForMatter
> Retrieves a paginated list of invoices associated with a specific matter.
> - Endpoint: `GET api/invoices/formatter/{matterId}`

### GetInvoicesById
> Retrieves a paginated list of invoices associated with a specific client.
> - Endpoint: `GET api/invoices/forclient/{clientId}`

### GetTimeEntries
> Retrieves a paginated list of time entries associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/time-entries`

### GetAvailableTimeEntries
> Retrieves a paginated list of available time entries that can be added to a specific invoice.
> - Endpoint: `GET api/invoices/{id}/available-time-entries`

### AddTimeEntry
> Adds a time entry to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/time-entries/{timeEntryId}`

### AddAllTimeEntry
> Adds all available time entries to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/all-time-entries`

### RemoveTimeEntry
> Removes a time entry from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/time-entries/{timeEntryId}`

### GetDisbursements
> Retrieves a paginated list of disbursements associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/disbursements`

### GetAvailableDisbursements
> Retrieves a paginated list of available disbursements that can be added to a specific invoice.
> - Endpoint: `GET api/invoices/{id}/available-disbursements`

### AddDisbursement
> Adds a disbursement to a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/disbursements/{disbursementId}`

### RemoveDisbursement
> Removes a disbursement from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/disbursements/{disbursementId}`

### Update
> Updates a specific disbursement from an invoice based on the provided input.
> - Endpoint: `PUT api/invoices/{id}/update-disbursements/{disbursementId}`

### GetFixedPriceItems
> Retrieves a paginated list of fixed price items associated with a specific invoice.
> - Endpoint: `GET api/invoices/{id}/fixed-price-items`

### AddFixedPriceItem
> Adds a fixed price item to a specific invoice.
> - Endpoint: `POST api/invoices/{id}/fixed-price-items`

### RemoveFixedPriceItem
> Removes a fixed price item from a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/fixed-price-items/{fixedPriceItemId}`

### Update
> Updates a specific fixed price item from an invoice based on the provided input.
> - Endpoint: `PUT api/invoices/{id}/fixed-price-items/{fixedPriceItemId}`

### GetXeroPaymentHistoryFromXero
> Retrieves a paginated list of payment history from Xero for a specific invoice.
> - Endpoint: `GET api/invoices/get-xero-payment-history-from-xero/{invoiceId}`

### SyncAllInvoicePaymentsFromXero
> Syncs all invoice payments from Xero.
> - Endpoint: `POST api/invoices/sync-all-invoice-payments-from-xero`

### SyncXeroPaymentHistory
> Syncs the payment history from Xero for a specific invoice.
> - Endpoint: `POST api/invoices/sync-payments-by-invoice-id/{invoiceId}`

### ReSyncInvoiceToXero
> Resyncs a specific invoice to Xero.
> - Endpoint: `POST api/invoices/re-sync-to-xero-by-invoice-id/{invoiceId}`

### GetCredits
> Retrieves credits for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/credits`

### GetPreviewLink
> Retrieves the preview link for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/preview`

### GetPreviewDownload
> Retrieves the preview download for a specific invoice.
> - Endpoint: `GET api/invoices/{id}/preview/download`

### GeneratePreview
> Generates a preview for a specific invoice.
> - Endpoint: `POST api/invoices/{id}/preview`

### SendDraftForApproval
> Sends a draft invoice for approval.
> - Endpoint: `PUT api/invoices/{id}/approval`

### RejectDraft
> Rejects a draft invoice.
> - Endpoint: `PUT api/invoices/{id}/reject`

### ApproveDraft
> Approves a draft invoice.
> - Endpoint: `PUT api/invoices/{id}/approved`

### SendInvoice
> Sends an invoice.
> - Endpoint: `PUT api/invoices/{id}/send`

### Delete
> Deletes a specific invoice.
> - Endpoint: `DELETE api/invoices/{id}/delete`

### UpdateDoNotCollect
> Updates the "Do Not Collect" status for a specific invoice.
> - Endpoint: `PUT api/invoices/{id}/donotcollect`

### UpdateInvoiceDate
> Updates the invoice date for a specific invoice.
> - Endpoint: `POST api/invoices/{id}/invoicedate`






## StatutoryTrust Controller
### CreateTransactionRequest
> Creates a statutory trust transaction request.
> - Endpoint: `POST api/stautory-trust-accounts`

## TrustAccount Controller
### GetList
> Retrieves a paginated list of trust accounts.
> - Endpoint: `GET api/trust-accounts`

### GetById
> Retrieves a trust account by ID.
> - Endpoint: `GET api/trust-accounts/{id}`

### Create
> Creates a trust account.
> - Endpoint: `POST api/trust-accounts`

### GetRequestsPending
> Retrieves paginated pending trust transaction requests for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/requests`

### ApproveRequest
> Approves a specific trust transaction request.
> - Endpoint: `PUT api/trust-accounts/{id}/requests/{requestId}/approve`

### RejectRequest
> Rejects a specific trust transaction request with a reason.
> - Endpoint: `POST api/trust-accounts/{id}/requests/{requestId}/reject`

### GetBankTransactions
> Retrieves paginated bank transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions`

### ImportBankTransaction
> Imports bank transactions for a specific trust account from a file.
> - Endpoint: `POST api/trust-accounts/{id}/bank-transactions/import`

### GetUnreconciledBankTransactions
> Retrieves paginated unreconciled bank transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions/unreconciled`

### RecordUnknownDepositOnBankTransaction
> Records an unknown deposit on a specific bank transaction.
> - Endpoint: `GET api/trust-accounts/{id}/bank-transactions/{transactionId}/record-unknow-deposit`

### GetTransactions
> Retrieves paginated trust transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/transactions`

### GetTrustTransactionReceiptDownloadLink
> Retrieves the download link for the receipt of a specific trust transaction.
> - Endpoint: `GET api/trust-accounts/transactions/{transactionId}/receipt`

### GetUnreconciledTransactions
> Retrieves paginated unreconciled trust transactions for a specific trust account.
> - Endpoint: `GET api/trust-accounts/{id}/transactions/unreconciled`

### ReconcileTransactions
> Reconciles trust transactions for a specific trust account.
> - Endpoint: `POST api/trust-accounts/{id}/reconcile`

### GetTrialBalance
> Retrieves the trial balance for a specific trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/trial-balance`

### GetTrialBalanceDownload
> Triggers the download of the trial balance report for a specific trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/trial-balance/download`

### GetStatutoryTrustStatementDownload
> Triggers the download of the statutory trust statement for a specific trust account.
> - Endpoint: `POST api/trust-accounts/{id}/statement/download`

### GetNetBalanceForMatter
> Retrieves the net balance for a specific matter within a trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/net-balance-for-matter/{matterId}`

### GetNetBalanceForMatterDownload
> Triggers the download of the net balance report for a specific matter within a trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/net-balance-for-matter/{matterId}/download`

### GetNetBalanceForClient
> Retrieves the net balance for a specific client within a trust account at a given end date.
> - Endpoint: `GET api/trust-accounts/{id}/net-balance-for-client/{clientId}`

### GetNetBalanceForClientDownload
> Triggers the download of the net balance report for a specific client within a trust account at a given end date.
> - Endpoint: `POST api/trust-accounts/{id}/net-balance-for-client/{clientId}/download`

### GetReconciliationReport
> Retrieves the reconciliation report for a specific trust account within a given date range.
> - Endpoint: `GET api/trust-accounts/{id}/reconciliation-report`

### GetReconciliationReportDownload
> Triggers the download of the reconciliation report for a specific trust account within a given date range.
> - Endpoint: `POST api/trust-accounts/{id}/reconciliation-report/download`

### GetLedgers
> Retrieves paginated trust ledgers.
> - Endpoint: `GET api/trust-accounts/ledgers`

### GetLedgerbyId
> Retrieves a trust ledger by ID.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}`

### GetTrustLedgerTransactionRequestsbyId
> Retrieves paginated trust transaction requests for a specific trust ledger.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}/transaction_requests`

### GetTrustLedgerTransactionsbyId
> Retrieves paginated trust transactions for a specific trust ledger.
> - Endpoint: `GET api/trust-accounts/ledgers/{id}/transactions`




<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
green { color: green }
</style>