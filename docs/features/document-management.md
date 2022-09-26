# Document Management

Document management is a critical aspect of the legal workflow. On a regular basis, lawyers will:

- Create a document
  - Either from scratch or from an existing firm specific template
- Edit / Complete a draft of this document
- Request a review of the document by another lawyer
- Send the document to their Client

The portal therefore introduces a streamlined mechanism by which as much of this workflow can be accessed / managed / controlled by the system itself.

Some specific functionalites is specific to the Microsoft Office range of documents, but all types of documents can be stored in the system.

## Overview

Documents are stored in an Azure Blob Storage container, and a reference to each document is stored in the database. In terms of the EntityFramework models:

### Document

`Document` is the base class for a given Document. It captures:

- The file name and file extension
- The extracted text for the current version of the document
- Details relating to "locking" and "editing" a document (More on this below).

A subclass from the base `Document` class is created for each context which can carry Documents. As of the time of writing, these are:

- Matters
- Projects
- Contacts
- Organisations
- Resources

Each of these will have a reference to the specific entity within each context, where applicable, e.g. a reference to a specific Contact that the Document belongs to.

These are currently mapped to the database using the TPH (table per hierarchy) strategy (see [here](https://docs.microsoft.com/en-us/ef/core/modeling/inheritance#table-per-hierarchy-and-discriminator-configuration) for details).

The benefit to this approach is that we retain a foreign key reference to the relevant entities, and also have the option to retrieve all documents regardless of context with relative ease. 

### Document Version

`DocumentVersion` can be seen as an "instance" of a document. It contains:

- A reference to the document
- A numberic version number of the document version
- A storage identifier - a reference to the document that has been stored in Azure Blob Storage

All documents will have at least one version; the initial state of the document. All subsequent changes to the document (the contents of the file) will result in an incremented version, a new version of the file uploaded to Azure Blob Storage and a new DocumentVersion instance.

### Implementation

Most of if not all of the logic for handling document related functions can be found in the `DocumentService` class.

## Document Creation

Creating a "blank" document from scratch is not supported by the system, e.g. creating an empty Word document. Documents may be uploaded initially and can subsequently be handled to varying extents by the system.

An exception to this is the concept of a "Resource" document. Such a document can be uploaded to the system, and users can then select this particular document to act as a "template" for a new document. Doing so will essentially create a copy of that Resource document within the new context that the user has specified, e.g. a document for a Matter.

## Document Editing

Lawyers tend to use the Microsoft Office range of documents (Word, Excel and PowerPoint) for their daily work. In order to facilitate the editing of these documents (as opposed to requiring them to be downloaded and reuploaded), the ability to edit documents using a OneDrive based integration has been introduced.

### Sending Documents to OneDrive

For supported documents, users may "lock" their desired file for editing. At this point, the system will copy the document from Azure Blob Storage into the user's personal OneDrive account. 

A reference to this OneDrive file is then stored against the `Document` - this is the `EditingIdentifier`.

### Editing the document on OneDrive

The document can then be edited via OneDrive's capabilities - either online using Word Online or similar, or using the desktop version of the application.

This is accomplished by retrieving a relevant url from the OneDrive API. See the `GetEditWithAppLink` and `GetEditOnlineLink` methods in the `DocumentService` for specific details.

These links can be provided to the user, who can then open the links via their browser. This will either open Word (etc) Online, or prompt the user to open the document via Word (etc).

### Saving changes to the document

Once the user has finished making their changes, they can indicate they have "finished editing" via the portal. 

This will call the `FinishEditing` method on the `DocumentService`.

This will copy the document from the user's OneDrive account and create a new version with the contents of that file. The file will then be removed from the user's OneDrive account.

The file is then unlocked and other users may choose to lock the file if they wish.
