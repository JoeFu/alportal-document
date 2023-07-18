# Xero Service
## CreateXeroContact
Create Contact in Xero
- **Parameters:**
    - `officeId` (`int`): The ID of the office
    - `AlpClient` (`ClientDto`): The client data
- **Return:** `Task<string>`

## CreateXeroContactbyClientId
Create Xero Contact by Client ID
- **Parameters:**
    - `clientId` (`int`): The ID of the client
- **Return:** `Task<string>`

## UpdateXeroContactbyClientId
Update Xero Contact by Client ID
- **Parameters:**
    - `clientId` (`int`): The ID of the client
- **Return:** `Task<string>`



## CreateInvoiceInXero
This method is used to create an invoice in Xero.
- **Parameters:**
    - `invoice`: An object of type `Data.Models.Invoices.Invoice` that represents the invoice to be created in Xero.

- **Return:** `Task<string>` - A `Task` object that returns a string representing the latest invoice information.

## SyncXeroPaymentbyInvoiceId
This method is used to sync Xero payment by invoice ID.
- **Parameters:**
    - `invoiceId`: An integer representing the ID of the invoice for which the payment needs to be synced.
- **Return:** `Task<string>` - A `Task` object that returns a string representing the result of the synchronization process.



## GetOutstandingAmount
Calculates the outstanding amount for a given invoice.
- **Parameters:**
    - `invoiceId` (type: `int`) - The ID of the invoice for which the outstanding amount is calculated.
- **Return:** `Task<decimal>` - A `Task` object representing the asynchronous operation that returns the outstanding amount as a decimal value.

## GetTotalInvoiceValueInclGst
Calculates the total invoice value including GST for a given invoice.
- **Parameters:**
    - `invoiceId` (type: `int`) - The ID of the invoice for which the total value is calculated.
- **Return:** `Task<decimal>` - A `Task` object representing the asynchronous operation that returns the total invoice value as a decimal value.

## GetReceivedPayments
Retrieves the total received payments for a given invoice.
- **Parameters:**
    - `invoiceId` (type: `int`) - The ID of the invoice for which the received payments are retrieved.
- **Return:** `decimal` - The total received payments as a decimal value.


## FetchXeroPaymentbyXeroId
Retrieves Xero payments based on the Xero ID.
- **Parameters:**
    - `officeId` (type: `int`) - The ID of the office.
    - `XeroId` (type: `string`) - The Xero ID used to fetch payments.
- **Return:** `Task<List<Xero.NetStandard.OAuth2.Model.Accounting.Payment>>` - A `Task` object representing the asynchronous operation that returns a list of Xero payments.

## FetchXeroInvoicebyXeroInvoiceId
Retrieves Xero invoices based on the Xero invoice ID.
- **Parameters:**
    - `officeId` (type: `int`) - The ID of the office.
    - `XeroInvoiceId` (type: `string`) - The Xero invoice ID used to fetch invoices.
- **Return:** `Task<List<Xero.NetStandard.OAuth2.Model.Accounting.Invoice>>` - A `Task` object representing the asynchronous operation that returns a list of Xero invoices.

## SyncAllXeroPayment
Synchronizes all Xero payments using a cron job.
- **Parameters:** None.
- **Return:** `Task` - A `Task` object representing the asynchronous operation.

## ReSyncInvoiceToXero
Re-syncs an invoice to Xero.
- **Parameters:**
    - `invoiceId` (type: `int`) - The ID of the invoice to re-sync.
- **Return:** `Task<string>` - A `Task` object representing the asynchronous operation that returns a success message as a string.

## UpdateInvoices
Updates the invoices in the system based on Xero data.
- **Parameters:** None.
- **Return:** `Task<string>` - A `Task` object representing the asynchronous operation that returns a success message as a string.

## getXeroToken
Retrieves the Xero token for authentication.
- **Parameters:**
    - `officeId` (type: `int`) - The ID of the office for which the Xero token is fetched.
- **Return:** `Task<IXeroToken>` - A `Task` object representing the asynchronous operation that returns the Xero token.

