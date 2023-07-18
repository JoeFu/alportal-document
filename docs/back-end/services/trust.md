# Trust
## Trust Service


### GetTrustAccounts
Retrieves a paginated list of trust accounts. It takes `filters` for pagination and optional searching by the trust account's name. It queries the `TrustAccounts` table from the database and orders the results by name. If a search term is provided, it filters the trust accounts based on the name containing the search term using EF.Functions.ILike. The result is mapped to `TrustAccountListDto`.


### GetTrustAccountById
Retrieves a specific trust account by its ID. It takes the `id` of the trust account. It fetches the trust account from the database and maps it to `TrustAccountDto`. Additionally, it calculates the total funds of the trust account by calling the `GetTrustTotalFunds` method.


### CreateTrustAccount
Creates a new trust account. It takes an `input` object containing the necessary data for the trust account. It creates a new `TrustAccount` entity, populates its properties with the input data, adds it to the `TrustAccounts` table, and saves changes to the database. Finally, it maps the created trust account to `TrustAccountDto` and returns it.


### UpdateTrustAccount
Updates an existing trust account. It takes the `trustAccountId` to identify the trust account to be updated and an `input` object containing the updated data. It fetches the trust account from the database, updates its properties with the data from the input object using AutoMapper, saves the changes to the database, and finally maps the updated trust account to `TrustAccountDto` and returns it.




### GetTrustSummaryForMatter
Retrieves the trust summary for a specific matter. It calls two methods, `GetCurrentMatterTrustTotalFunds` and `GetCurrentMatterTrustBalance`, to calculate the total funds and balance of the trust account associated with the matter. The results are used to create a `MatterTrustSummaryDto` object.


### GetCurrentMatterTrustTotalFunds
Calculates the total funds of the trust account associated with a specific matter. It considers different types of transactions, such as deposits, withdrawals, and transfers, to calculate the total funds.


### GetCurrentMatterTrustBalance
Calculates the current balance of the trust account associated with a specific matter. It takes into account the transaction requests and transfers associated with the matter to calculate the balance.


### GetTrustTotalAtDate
Calculates the total funds in the trust account at a specific date for a given matter. It considers the transactions (deposits, withdrawals, transfers) that occurred on or before the given date to calculate the total funds.


### GetReconciledTrustTotalAtDate
Calculates the reconciled total funds in the trust account at a specific date for a given matter. It considers the reconciled transactions (deposits and withdrawals) that occurred on or before the given date to calculate the reconciled total funds.


### GetTrustTransactionRequestsForMatter
Retrieves a paginated list of trust transaction requests for a specific matter. It fetches transaction requests associated with the matter and maps them to `TrustTransactionRequestDto`. It also retrieves and populates the support document links for each transaction request.


### GetTrustTransactionsForMatter
Retrieves a paginated list of trust transactions for a specific matter. It fetches trust transactions associated with the matter and maps them to `TrustTransactionDto`.


### GetTrustTransactionReceiptDownloadLink
Triggers a trust transaction receipt download for a specific transaction ID. It interacts with the `ISyntaqService` to trigger the receipt download and returns the submission ID.


### CreateTrustTransactionRequestForMatter
Creates a trust transaction request for a specific matter. It validates the transaction request and checks if enough funds are available for withdrawals or transfers. It also creates a default ledger for the matter if it doesn't already exist. After creating the transaction request, it triggers a trust notification to the trust administrator if required.


### resentTrustTransactionRequestForMatter
Resends a trust transaction request for a specific transaction ID. It sends a trust notification to the trust administrator.


### CreateStatutoryTrustTransactionRequest
Creates a statutory/legal trust transaction request. It creates a request for legal statutory transactions and sends a request letter to the relevant party.




### GetPendingTrustTransactionRequests
Retrieves a paginated list of pending trust transaction requests for a specific trust account. It fetches the transaction requests that have not been approved yet and maps them to `TrustTransactionRequestDto`. It also retrieves and populates the support document links for each transaction request.


### updateDocumentTransactionId
Updates the `TrustTransactionId` field of related trust documents for a given transaction request. It is used to link the transaction request to the trust documents once the request is approved.


### ApproveTrustTransactionRequest
Approves a trust transaction request. It validates the request, checks the availability of funds for withdrawals or transfers, and creates a trust transaction based on the request. If the transaction is a legal/statutory transaction, it triggers a notification using the `ISyntaqService`. If the transaction is a regular matter transaction, it checks if a default ledger exists for the matter, and if not, notifies the user to contact the admin. After approval, the method updates the trust documents to link them to the newly created trust transaction. It also sends a trust notification to the requestor if required.


### RejectTrustTransactionRequest
Rejects a trust transaction request. It updates the request status to rejected, records the rejection reason, and triggers a notification using the `ISyntaqService` for statutory transactions. For regular matter transactions, it sends a trust notification to the requestor to inform them of the rejection.




### CreateTrustTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended to create a new trust transaction for a specific trust account, but the implementation is missing.


### GetTrustTransactions
Retrieves paginated trust transactions for a specific trust account. The method fetches trust transactions for the given trust account and any associated statutory trust account. It filters the transactions based on the search criteria and returns a paginated result of `TrustTransactionDto`.


### GetUnreconciledTrustTransactions
Retrieves paginated unreconciled trust transactions for a specific trust account. Similar to `GetTrustTransactions`, it also considers the associated statutory trust account. However, this method specifically returns unreconciled transactions and omits any transactions with an unknown transaction type or missing matter ID.


### GetBankTransactions
Retrieves paginated bank transactions for a specific trust account. It fetches bank transactions related to the trust account and returns a paginated result of `BankTransactionDto`.


### MoveBankTransactionBetweenTrustAccounts
Moves a bank transaction from one trust account to another. It updates the `TrustAccountId` field of the specified bank transaction to the new trust account.


### GetUnreconciledBankTransactions
Retrieves paginated unreconciled bank transactions for a specific trust account. It returns a list of unreconciled bank transactions associated with the given trust account.


### ImportBankTransactions
Imports bank transactions from a CSV file for a specific trust account. The method takes a CSV file stream, reads and parses its contents, and then creates new bank transactions for the trust account based on the CSV data. It checks for existing transactions to avoid duplicates.


### ReconcileMatchedTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended for reconciling matched transactions, but the implementation is missing.


### CancelMatchedTransaction
This method is not implemented and throws a `NotImplementedException`. It is likely intended to cancel matched transactions, but the implementation is missing.


### ReconcileTrustTransaction
Reconciles trust transactions with corresponding bank transactions. It takes a list of trust transaction IDs and a list of bank transaction IDs to reconcile. The method verifies that both lists contain only unreconciled transactions and that the total amount of the trust transactions matches the total amount of the bank transactions. If the conditions are met, it marks the transactions as reconciled and updates the reconciliation date.




### TrustAccountBalance
Calculates the current balance of a specific trust account. It fetches the trust account from the database and calculates the balance by summing up the amounts of all trust transactions associated with the trust account.


### TrustAccountBankBalance
Calculates the current bank balance of a specific trust account. It fetches the trust account from the database and retrieves the balance from the latest bank transaction associated with the trust account.


### NetBalanceByMatter
Calculates the net balance for a specific matter within a trust account up to a given end date. It fetches the specified matter and associated trust transactions, filters them based on the provided end date, and then calculates the net balance.


### NetBalanceByClient
Calculates the net balance for a specific client within a trust account up to a given end date. It fetches the specified client and all its matters, retrieves their associated trust transactions, filters them based on the provided end date, and then calculates the net balance.


### TrialBalance
Calculates the trial balance for a specific trust account up to a given end date. It fetches all matters associated with the trust account and calculates the trial balance by summing up the trust totals for each matter. The method also considers the statutory balance if there is a statutory trust account associated.


### ReconciliationReport
Generates a reconciliation report for a specific trust account within a given date range. It retrieves all trust transactions associated with the trust account within the specified date range and formats the data into a `ReconciliationReportDto`.


### GetTrustDocument
Retrieves paginated trust documents. It fetches and returns trust documents with pagination support.




### GetTrustLedgers
Retrieves a paginated list of trust ledgers. It fetches trust ledgers from the database and provides support for searching based on the ledger's name, matter ID, or notes.


### GetTrustLedgerbyId
Retrieves a specific trust ledger by its ID. It fetches the trust ledger from the database based on the provided ledger ID and maps it to a `TrustLedgerDto`.


### GetTrustLedgerTransactionRequestsbyId
Retrieves paginated transaction requests associated with a specific trust ledger. It fetches trust transaction requests related to the given ledger ID and returns the results in paginated form.


### GetTrustLedgerTransactionsbyId
Retrieves paginated trust transactions associated with a specific trust ledger. It fetches trust transactions related to the given ledger ID and returns the results in paginated form.


### RecordUnknownDepositOnBankTransaction
Records an unknown deposit on a bank transaction and creates a new trust ledger for it. If the bank transaction amount is greater than 0 and not already reconciled, a new trust ledger is created, and a trust transaction is added to it.


### AssignUnknownTransactionToMatter
Assigns an unknown transaction to a specific matter. If the unknown transaction's trust account transaction type is set as "UnknownTransaction," this method creates a trust transaction request for the matter, approves it, and adds a withdrawal transaction to the previous trust ledger.

