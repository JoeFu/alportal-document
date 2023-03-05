# UI User Components

This Is A brief overview of the UI ***User*** Components being used in the system today.
:::tip Note
Updated Q1 2023
:::

## GlobalModals

This file includes all commonly used modals in the ALP system to allow easier access to the modals.

This component dynamically renders a different child component based on the value of `currentModalComponent`.

`currentModalComponent` is a computed property that uses the **Vuex store's** `ModalType` enum to determine which child component to render. The enum defines a list of different modal types, each corresponding to a specific child component.

When a modal is triggered, a mutation is dispatched to the **Vuex store** to set the active modal type. The `currentModalComponent` computed property then updates based on the new state in the store, causing the appropriate child component to be rendered inside the modal window.

This can be used as follows:

```html
<template>
  <div>
    <a @click="showModal(ModalType.CreateContact, {})">
      <font-awesome-icon icon="fa-solid fa-id-card fa-2xl">
      </font-awesome-icon>
      Create Contact
    </a>

    <global-modals />
  </div>
</template>

<script>
import { useStore } from "vuex";
import GlobalModal from "@/components/GlobalModal.vue";

export default {
  components: {
    GlobalModal,
  },
  setup() {
    const store = useStore();

    function showModal(type: ModalType, props: Record<string, unknown>) {
      store.dispatch(ModalStore.actions.SHOW_MODAL, {
        modal: type,
        props
      });
    }
  }
}
```

## Clients
### CreateClient

This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new Client.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateClient`](../imgs/frontend/components/ui/clients/CreateClient.png)
 
## Contacts
### CreateContact
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new Contact.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateContact`](../imgs/frontend/components/ui/contacts/CreateContacts.png)
### ShowACUnsubscribe
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for unsubscribing newsletters for a contact providing reasons.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`ShowACUnsubscribe`](../imgs/frontend/components/ui/contacts/showACUnsubscribeModal.png)


## Directory
### EmailGroup
This component is for fetching and displaying Email Groups, with group name and description of the group. This component enables adding of whole group to email recipient.

This component can be used as follows:
```html
<email-group
    v-if="state.selectedOption == 'groups'"
    :search = "state.search"
/>
```
The following is a visual of this component at work.
![`EmailGroup`](../imgs/frontend/components/ui/directory/EmailGroup.png)
### People
This component is for fetching and displaying People, with Name, Rate, Email and description of person. This component enables adding People to email recipient.

This component can be used as follows:
```html
<people
    v-if="state.selectedOption == 'people'"
    :search = "state.search"
/>
```
The following is a visual of this component at work.
![`People`](../imgs/frontend/components/ui/directory/People.png)

## Documents
### DocumentList
This component customises the [`Document`](#document) window and [`DocumentActions`](#documentactions) to list a table of documents.

This component can be used as follows:

```html
<document-list
  class="flex-1 mt-2"
  :loading="loading"
  :uploading="state.uploading"
  :documents="items"
  :documents-count="count"
  :can-create="can('ContactDocument.Create')"
  :can-edit="can('ContactDocument.Edit')"
  :can-delete="can('ContactDocument.Delete')"
  @fetch="fetch"
  @upload="uploadContactDocuments"
  @create-from-resource="createFromResource"
  :contactId = id
/>
```
The following is a visual of this component at work.
![`DocumentList`](../imgs/frontend/components/ui/documents/DocumentList.png)
### Document
This component customises the [`SlideOver`](#slideover) window for managing a document draft histories.

This component can be used as follows:

```html
<document
  v-if="state.selectedDocumentId"
  :key="state.selectedDocumentId"
  :id="state.selectedDocumentId"
  :can-edit="canEdit"
  :can-delete="canDelete"
  @updated="fetchDocuments"
  @close="
    () => {
      state.selectedDocumentId = null;
      $emit('closed')
    }
  "
/>
```
The following is a visual of this component at work.
![`Document`](../imgs/frontend/components/ui/documents/Document.png)
### DocumentActions
This component is for listing each document in the document list, with actions like download, add to reminder, [`RequestDocumentReview`](#requestdocumentreview), attach to email and more.

This component can be used as follows:
```html
<document-actions
  :document="item.document"
  :can-edit="false"
  :can-delete="false"
  :can-add-reminder="false"
  :can-request-review="false"
  @updated="fetchDocument"
  @deleted="$emit('close')"
/>
```

The following is a visual of this component at work.
![`DocumentActions`](../imgs/frontend/components/ui/documents/DocumentActions.png)
### DocumentFilters

This component customises the [`SlideOver`](#slideover) window for managing filters in document viewing.

This component can be used as follows:

```html
<document-filters
  v-if="state.showDocumentFilters"
  class="z-50"
  v-model:matchAny="state.matchAny"
  v-model:filterParameters="state.filterParameters"
  @close="state.showDocumentFilters = false"
/>
```
The following is a visual of this component at work.
![`DocumentFilters`](../imgs/frontend/components/ui/documents/DocumentFilter.png)
:::danger Possible Bug ![bug](../imgs/bug/bug_OfferingResources_DocumentFilters.png)
:::
### ActiveDocuments
This component shows a floating container of the active documents, displays 'No Active Document Found' when empty.

This component can be used as follows:
```html
<active-documents v-if="tab == 'active'" />
```
The following is a visual of this component at work.
![`ActiveDocuments`](../imgs/frontend/components/ui/documents/ActiveDocumemts.png)
### RequestDocumentReview
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for requesting a Staff for a document review with an included message.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`RequestDocumentReview`](../imgs/frontend/components/ui/documents/RequestDocumentreview.png)
### ReceivedDocumentReviewRequests
This component is to display a floating container to show the received requests for document reviews as a reviewer.

This component can be used as follows:

```html
<received-document-review-requests v-if="tab == 'received'" />
```

The following is a visual of this component with documents and while empty.
![`ReceivedDocumentReviewRequests`](../imgs/frontend/components/ui/documents/ReceivedDocumentReviewRequests.png)

![`ReceivedDocumentReviewRequestsEmpty`](../imgs/frontend/components/ui/documents/ReceivedDocumentReviewRequestsEmpty.png)
### RequestedDocumentReviewRequests
This component is to display a floating container to show the requested document reviews and their status.

This component can be used as follows:

```html
<requested-document-review-requests v-if="tab == 'requested'" />
```
The following is a visual of this component with documents and while empty.
![`RequestedDocumentReviewRequests`](../imgs/frontend/components/ui/documents/RequestedDocumentReviewRequests.png)

![`RequestedDocumentReviewRequests`](../imgs/frontend/components/ui/documents/RequestedDocumentReviewRequestsEmpty.png)
### CompleteDocumentReview
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for completing document review providing a message.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CompleteDocumentReview`](../imgs/frontend/components/ui/documents/CompleteDocumentReview.png)
### ResourceSelector
This component is to display a resource selector with search bar and filtering, using [`modal`](components-common.md#modal).

This component can be used as follows:

```html
<resource-selector
  v-if="resourceState.showResourceSelector"
  @create="addDocumentResource($event)"
  @close="resourceState.showResourceSelector = false"
/>
```

The following is a visual of this component at work.
![`ResourceSelector`](../imgs/frontend/components/ui/documents/ResourceSelector.png)
### SyntaqResourceSelector
This component is to display a Syntaq resource selector with a search bar, using [`modal`](components-common.md#modal).

This component can be used as follows:

```html
<syntaq-resource-selector
  v-if="resourceState.showSyntaqSelector"
  @create="addSyntaqFormResource($event)"
  @close="resourceState.showSyntaqSelector = false"
/>
```

The following is a visual of this component at work.
![`SyntaqResourceSelector`](../imgs/frontend/components/ui/documents/SyntaqResourceSelector.png)


## Emails
### EmailList
This component is for displaying the list of emails, with a search and filter function. It also includes a multi-select function that allows actions to emails to be done in batches.

This component can be used as follows:

```html
<email-list
  class="w-full"
  :getter="EmailStore.getters.GET_INBOX_EMAILS"
  :query="EmailStore.getters.GET_INBOX_EMAILS"
  :multiselectTrigger="true"
  :selectedEmail="true"
  @selected="$router.push({ name: 'Inbox Email', params: $event })"
  @click="selectMethod($event)"
/>
```
The following is a visual of this component at work.
![`EmailList`](../imgs/frontend/components/ui/emails/EmailList.png)
### EmailDisplay
This component is to display a email in a container, including options for assigning email to matter/project, convert to pdf, and other common email options.

This component can be used as follows:
```html
<email-display
  v-if="!email?.threadEmail.length"
  can-import
  :email="email"
  :email-type="'Matter'"
  :entity-number = id
  @download-attachment="downloadAttachment"
  @import-attachment="importAttachment"
  @preview-attachment="previewAttachment"
  @close="$emit('close')"
/>
```
The following is a visual of this component at work.
![`EmailDisplay`](../imgs/frontend/components/ui/emails/EmailDisplay.png)

## Feedback
### CreateBugReport
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a bug report with description, priority drop down selection and file uploads.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateBugReport`](../imgs/frontend/components/ui/feedback/CreateBugReport.png)
### CreateSuggestion
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for submitting a suggestion with description, type drop down selection and file uploads.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateSuggestion`](../imgs/frontend/components/ui/feedback/CreateSuggestion.png)
### UploadDocument
This component is for the 'drag and drop' file upload function of the two components above, [`CreateBugReport`](#createbugreport) and [`CreateSuggestion`](#createsuggestion).

This is used as follows:
```html
  <UploadDocument @drop.prevent="drop" />
```

## Invoices
### CreateFixedPriceItem

This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating fixed price items.

This component can be used as follows:

```html
<create-fixed-price-item
  v-if="state.showCreateFixedPriceItem"
  :id="id"
  @close="state.showCreateFixedPriceItem = false"
/>
```

The following is a visual of this component at work.
![`CreateFixedPriceItem`](../imgs/frontend/components/ui/invoices/CreateFixedPriceItem.png)
### CreateInvoice
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new invoice.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateInvoice`](../imgs/frontend/components/ui/invoices/CreateInvoice.png)
### EditInvoiceNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for updating existing invoice notes.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`EditInvoiceNote`](../imgs/frontend/components/ui/invoices/EditInvoiceNote.png)
### InlineInvoice
This component is to display an invoice in a line for a page of list of invoices. This line of invoice uses colored badges to differentiate type and status of the invoice. This component also allows downloading as pdf, sending reminders and more.

This component can be used as follows:
```html
<inline-invoice
  class="mb-3 transition duration-200 shadow-lg"
  v-for="item in items"
  :key="item.id"
  :invoice="item"
  @load-more="fetch"
/>
```
The following is a visual of this component at work.
![`InlineInvoice`](../imgs/frontend/components/ui/invoices/InlineInvoice.png)
### InvoiceDisbursementSelector
This component customises the [`SlideOver`](#slideover) window for selecting a disbersement.

This component can be used as follows:

```html
<invoice-disbursement-selector
  v-if="state.showDisbursementSelector"
  :key="$route.params.id"
  :id="id"
  @close="state.showDisbursementSelector = false"
/>
```
The following is a visual of this component at work.
![`InvoiceDisbursementSelector`](../imgs/frontend/components/ui/invoices/InvoiceDisbursementSelector.png)
### InvoiceTimeEntrySelector
This component customises the [`SlideOver`](#slideover) window for managing time entries to include in the invoice.

This component can be used as follows:

```html
<invoice-time-entry-selector
  v-if="state.showTimeEntrySelector"
  :key="$route.params.id"
  :id="id"
  @close="state.showTimeEntrySelector = false"
/>
```
The following is a visual of this component at work.
![`InvoiceTimeEntrySelector`](../imgs/frontend/components/ui/invoices/InvoiceTimeEntrySelector.png)
### UpdateInvoiceDate
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for updating invoice date.

This component can be used as follows:

```html
<update-invoice-date
  v-if="state.showUpdateInvoiceDate"
  :id="invoice.id"
  @close="state.showUpdateInvoiceDate = false"
/>
```

The following is a visual of this component at work.
![`UpdateInvoiceDate`](../imgs/frontend/components/ui/invoices/UpdateInvoiceDate.png)


## Layout
### ActionMultiselect
:::danger Deprecate
:::
### AdminMenu

This component is to display the admin side menu, with toggle to hide sub sections, and most importantly, navigation links to the sections pages using [`NavLink`](components-common.md#navlink).

This component can be used as follows:

```html
<admin-menu
  v-else-if="state.showMenu === 'admin'"
  class="w-full"
  @navigated="state.expanded = false"
/>
```

The following is a visual of this component at work.
![`AdminMenu`](../imgs/frontend/components/ui/layout/AdminMenu.png)
### SlideOver

This component can be used as follows:

```html
<slide-over
  heading="Matter Filters"
  v-if="viewState.showMatterFilters"
  @close="viewState.showMatterFilters = false"
>
</slide-over>
```
The following is a visual of this component at work.
![`SlideOver`](../imgs/frontend/components/ui/layout/SlideOver.png)
### ComponentSlideOver
This component is similar to that of [`SlideOver`](#slideover), with slight changes to color and side of the slide over window.

Refer to [`SlideOver`](#slideover) for usage example.
### ProjectTaskSlideOver
This component is similar to that of [`SlideOver`](#slideover), with slight changes to color and side of the slide over window.

Refer to [`SlideOver`](#slideover) for usage example.

The following is a visual of this component at work.
![`ProjectTaskSlideOver`](../imgs/frontend/components/ui/layout/ProjectTaskSlideOver.png)
### Detail
This component renders a container to contain details in a box with grey background.

This component can be used by just wrapping the contents just like that of a `div` component.

The following is a visual of this component at work.
![`Detail`](../imgs/frontend/components/ui/layout/Detail.png)
### MasterDetail

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`MasterDetail`](../imgs/frontend/components/ui/layout/MasterDetail.png)
### DocumentMenu
This component is to render the menu for documents that includes [`ActiveDocuments`](#activedocuments),[`ReceivedDocumentReviewRequests`](#receiveddocumentreviewrequests) and [`RequestedDocumentReviewRequests`](#requesteddocumentreviewrequests).

This component can be used as follows:

```html
<document-menu v-else-if="state.showMenu == 'documents'" />
```
The following is a visual of this component at work.
![`DocumentMenu`](../imgs/frontend/components/ui/layout/DocumentMenu.png)
### DownloadMenu
This is to render the downloading menu to list current downloading jobs. 

This component can be used as follows:

```html
<download-menu v-else-if="state.showMenu == 'downloads'" />
```

The following is a visual of this component at work.
![`DownloadMenu`](../imgs/frontend/components/ui/layout/DownloadMenu.png)
### EmailMenu
This is to render the new email floating page when clicking the top menu email option.

This component can be used as follows:

```html
<email-menu v-else-if="state.showMenu === 'emails'" />
```
The following is a visual of this component at work.
![`EmailMenu`](../imgs/frontend/components/ui/layout/EmailMenu.png)
### MainMenu

This component can be used as follows:

```html
<main-menu
    :hideMenu="msg"
    v-if="state.showMenu === 'main'"
    @navigated="navigated"
/>
```

The following is a visual of this component at work.
![`MainMenu`](../imgs/frontend/components/ui/layout/MainMenu.png)
### NotificationMenu

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`NotificationMenu`](../imgs/frontend/components/ui/layout/NotificationMenu.png)
### ReminderMenu

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`ReminderMenu`](../imgs/frontend/components/ui/layout/ReminderMenu.png)
### StaffDirectory
This component customises the [`SlideOver`](#slideover) window for managing permissions in the system of a role.

This component can be used as follows:

```html
<staff-directory
  :isOpen="open"
  :isLockIcon="true"
  :currentLockState="state.isStaffDirectory"
  :lockIconClick="handleStaffDirectoryLockIconClick"               
/>
```
The following is a visual of this component at work.
![`StaffDirectory`](../imgs/frontend/components/ui/layout/StaffDirectory.png)

### TimerMenu

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`TimerMenu`](../imgs/frontend/components/ui/layout/TimerMenu.png)
### Layout
This component renders the overall page for the main layout, with the top and side navigations. This consists of the [`MainMenu`](#mainmenu) for the side navigation; [`DocumentMenu`](#documentmenu),[`DownloadMenu`](#downloadmenu),[`EmailMenu`](#emailmenu),[`NotificationMenu`](#notificationmenu), [`ReminderMenu`](#remindermenu),    , and [`TimerMenu`](#timermenu)[`StaffDirectory`](#staffdirectory) used for the top nevigations.  

This component can be used as follows:
```ts
  redirect: { name: "Dashboard" },
  component: () => import("@/components/ui/layout/Layout.vue"),
```
The following is a visual of this component at work.
![`Layout`](../imgs/frontend/components/ui/layout/Layout.png)
### FeedbackButton
:::danger Deprecate
:::
### NavBar
:::danger Deprecate
Switched to sidebar
:::


### QuickLinks
:::danger Deprecate
:::

### SideBar

This component can be used as follows:

```html
<side-bar
  :handleHover="handleExpand"
  :handleMouseLeave="handleClose"
  class="md:flex flex-shrink-0 flex-grow-0"
  :msg="state.msg"
  :showAdminMenu="state.isShowAdminMenu"
  :handleMobileviewNatigation="handleMobileviewNatigation"
/>
```
The following is a visual of this component at work.
![`SideBar`](../imgs/frontend/components/ui/layout/SideBar.png)


## Mailregister
### CreateIncomingMail
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for registering new incoming mail.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateIncomingMail`](../imgs/frontend/components/ui/mailregister/CreateIncomingMail.png)
### CreateOutgoingMail
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for registering outgoing mail.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateOutgoingMail`](../imgs/frontend/components/ui/mailregister/CreateOutgoingMail.png)

## Matters
### AddMatterNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for adding a new matter note.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`AddMatterNote`](../imgs/frontend/components/ui/matters/AddMatterNote.png)
### AddMatterOutcome

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`AddMatterOutcome`](../imgs/frontend/components/ui/matters/AddMatterOutcome.png)
### AssignEmailToMatter
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for assigning email to chosen matter.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`AssignEmailToMatter`](../imgs/frontend/components/ui/matters/AssignEmailToMatter.png)
### CreateDisbursement

This component can be used as follows:

```html
<create-disbursement
        :matter-id="id"
        v-if="state.showCreate"
        @close="state.showCreate = false"
      />
```
The following is a visual of this component at work.
![`CreateDisbursement`](../imgs/frontend/components/ui/matters/CreateDisbursement.png)
### CreateMatter
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new matter.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateMatter`](../imgs/frontend/components/ui/matters/CreateMatter.png)
### CreateTrustTransactionRequest

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`CreateTrustTransactionRequest`](../imgs/frontend/components/ui/matters/CreateTrustTransactionRequest.png)
### EditContactNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for editing an existing contact note.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`EditContactNote`](../imgs/frontend/components/ui/matters/EditContactNote.png)
### EditMatterNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for editing an existing matter note.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`EditMatterNote`](../imgs/frontend/components/ui/matters/EditMatterNote.png)
### InlineMatter

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineMatter`](../imgs/frontend/components/ui/matters/InlineMatter.png)
### InlineMatterComponent


This component can be used as follows:

```html
<inline-matter-component
  v-for="component in components"
  :key="component.id"
  class="mb-1 transition duration-200"
  :matter-id="matterId"
  :outcome-id="outcome.id"
  :component="component"
  @updated="$emit('updated')"
/>
```
The following is a visual of this component at work.
![`InlineMatterComponent`](../imgs/frontend/components/ui/matters/InlineMatterComponent.png)
### InlineMatterOutcome

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineMatterOutcome`](../imgs/frontend/components/ui/matters/InlineMatterOutcome.png)

### MatterComponentTimeEntries

This component can be used as follows:

```html
<matter-component-time-entries
					:matter-id="id"
					:outcome-id="outcomeId"
					:id="componentId"
				/>
```
The following is a visual of this component at work.
![`MatterComponentTimeEntries`](../imgs/frontend/components/ui/matters/MatterComponentTimeEntries.png)

### MatterTimeEntriesForMatter

This component can be used as follows:

```html
<matter-time-entries-for-matter
        v-if="state.selectedType == 'matter'"
        :id="id"
        :invoiced="state.invoiced"
        :billable-type="state.billableType"
        :user="state.user"
        :search="state.search"
        @selected="getSelectedTimeEntry($event)"
      />
```
The following is a visual of this component at work.
![`MatterTimeEntriesForMatter`](../imgs/frontend/components/ui/matters/MatterTimeEntriesForMatter.png)
### MatterTrustRequests

This component can be used as follows:

```html
 <matter-trust-requests 
        v-if="state.selectedType == 'requests'" 
        :id="id" 
      />
```
The following is a visual of this component at work.
![`MatterTrustRequests`](../imgs/frontend/components/ui/matters/MatterTrustRequests.png)
### MatterTrustTransactions

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`MatterTrustTransactions`](../imgs/frontend/components/ui/matters/MatterTrustTransactions.png)
### ReassignEmails
:::danger Pending confirmation 
Possibly Deprecated
:::
<!-- This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for registering new incoming mail.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![``](../imgs/frontend/components/ui -->
### SalesTimeEntriesForMatter

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`SalesTimeEntriesForMatter`](../imgs/frontend/components/ui/matters/SalesTimeEntriesForMatter.png)
### UpdateMatterStatus
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for updating status of a matter.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`UpdateMatterStatus`](../imgs/frontend/components/ui/matters/UpdateMatterStatus.png)

## Offerings
### InlineOfferingComponent

This component can be used as follows:

```html
<inline-offering-component
  v-for="component in components"
  :key="component.id"
  :offering-id="id"
  :outcome-id="outcome.id"
  :component="component"
/>
```
The following is a visual of this component at work.
![`InlineOfferingComponent`](../imgs/frontend/components/ui/offerings/InlineOfferingComponent.png)
### InlineOfferingOutcome

This component can be used as follows:

```html
<inline-offering-outcome
  class="flex-1"
  :class="{
    'border-green-300 bg-opacity-25 bg-green-300 hover:bg-red-100 hover:border-red-300':
    isSelected(item)
  }"
  :id="id"
  :outcome="item"
  @selected="selectOutcome"
/>
```
The following is a visual of this component at work.
![`InlineOfferingOutcome`](../imgs/frontend/components/ui/offerings/InlineOfferingOutcome.png)
### InlineOfferingOutcomeObjectionGuarantee
:::danger Deprecate
:::
### InlineOfferingProblemOutcome

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineOfferingProblemOutcome`](../imgs/frontend/components/ui/offerings/InlineOfferingProblemOutcome.png)

## Organisations
### CreateOrganisation
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new organisation.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateOrganisation`](../imgs/frontend/components/ui/organisations/CreateOrganisation.png)
### EditOrganizationNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for editing an existing organisation note.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`EditOrganizationNote`](../imgs/frontend/components/ui/organisations/EditOrganizationNote.png)

## Pqeadjustment
### CreatePQEAdjustment
:::danger Pending confirmation
Should this be in admin/user instead?
:::
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating PQE adjustment.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreatePQEAdjustment`](../imgs/frontend/components/ui/pqeadjustment/CreatePQEAdjustment.png)

## Projects
### AssignEmailToProject
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for assigning email to choosen project.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`AssignEmailToProject`](../imgs/frontend/components/ui/projects/AssignEmailToProject.png)
### CreateProject
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new project.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateProject`](../imgs/frontend/components/ui/projects/CreateProject.png)
### CreateProjectTask
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new project task.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateProjectTask`](../imgs/frontend/components/ui/projects/CreateProjectTask.png)
### EditProjectNote
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for editing an existing project note.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`EditProjectNote`](../imgs/frontend/components/ui/projects/EditProjectNote.png)
### InlineProject

This component can be used as follows:

```html
<inline-project
  class="mb-3 mx-1 transition duration-200 shadow-lg"
  :project="value"
  @task-selected="taskSelected(value.id, $event)"
/>
```
The following is a visual of this component at work.
![`InlineProject`](../imgs/frontend/components/ui/projects/InlineProject.png)
### InlineProjectTask

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineProjectTask`](../imgs/frontend/components/ui/projects/InlineProjectTask.png)
### InlineProjectTaskCard

This component can be used as follows:

```html
<inline-project-task-card
  :project-id="id"
  :project-task="value"
  @updated="fetchProjectTasks"
  @card-clicked="cardClicked"
>
</inline-project-task-card>
```
The following is a visual of this component at work.
![`InlineProjectTaskCard`](../imgs/frontend/components/ui/projects/InlineProjectTaskCard.png)
### InlineProjectTaskStep

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineProjectTaskStep`](../imgs/frontend/components/ui/projects/InlineProjectTaskStep.png)
### ProjectTask
This component customises the [`ProjectTaskSlideOver`](#projecttaskslideover) window for managing permissions in the system of a role.

This component can be used as follows:

```html

```
The following is a visual of this component at work.
![`ProjectTask`](../imgs/frontend/components/ui/projects/ProjectTask.png)
### ProjectTaskMetadata

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`ProjectTaskMetadata`](../imgs/frontend/components/ui/projects/ProjectTaskMetadata.png)
### ProjectTimeEntriesForProject

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`ProjectTimeEntriesForProject`](../imgs/frontend/components/ui/projects/ProjectTimeEntriesForProject.png)

## Relationships
### CreateOrganisationRelationship

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`CreateOrganisationRelationship`](../imgs/frontend/components/ui/Relationships/CreateOrganisationRelationship.png)
### CreateRelationship
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for filling in contact relationships, Family, Referrer and Professional.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateRelationship`](../imgs/frontend/components/ui/Relationships/CreateRelationship.png)

## Reminders
### CreateReminder
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for creating a new reminder with a Due Date and Resource selector.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateReminder`](../imgs/frontend/components/ui/reminders/CreateReminder.png)

## Resource-urls
### ResourceUrlSelector

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`ResourceUrlSelector`](../imgs/frontend/components/ui/resource-urls/ResourceUrlSelector.png)

## Safestorage
### CreateContactSafeStorage

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`CreateContactSafeStorage`](../imgs/frontend/components/ui/safestorage/CreateContactSafeStorage.png)
### CreateOrganisationSafeStorage

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`CreateOrganisationSafeStorage`](../imgs/frontend/components/ui/safestorage/CreateOrganisationSafeStorage.png)

## Time-tracking
### CreateTimeEntry
This is a component calling [`CreateTimeEntryForm`](#createtimeentryform) into a [`modal`](components-common.md#modal) to customise for creating a new time entry.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateTimeEntry`](../imgs/frontend/components/ui/time-tracking/CreateTimeEntryForm.png)

### CreateTimeEntryForm
This component consists of the form to fill for [`CreateTimeEntry`](#createtimeentry) using the [`modalform`](components-common.md#modalform) component.

### CreateTimeEntryForMatter
This is a component calling [`CreateTimeEntryFormForMatter`](#createtimeentryformformatter) into a [`modal`](components-common.md#modal) to customise for creating a new time entry for matter.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateTimeEntryForMatter`](../imgs/frontend/components/ui/time-tracking/CreateTimeEntryFormForMatter.png)
### CreateTimeEntryFormForMatter
This component consists of the form to fill for [`CreateTimeEntryForMatter`](#createtimeentryformatter) using the [`modalform`](components-common.md#modalform) component.

### CreateTimeEntryForProject
This is a component calling [`CreateTimeEntryFormForProject`](#createtimeentryformforproject) into a [`modal`](components-common.md#modal) to customise for creating a new time entry inside a project.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`CreateTimeEntryForProject`](../imgs/frontend/components/ui/time-tracking/CreateTimeEntryFormForProject.png)
### CreateTimeEntryFormForProject
This component consists of the form to fill for [`CreateTimeEntryForProject`](#createtimeentryforproject) using the [`modalform`](components-common.md#modalform) component.

### InlineAddMatterTimeEntries

This component can be used as follows:

```html
<inline-add-matter-time-entries
  :start-date="startDate"
  :end-date="endDate"
/> 
```

The following is a visual of this component at work.
![`InlineAddMatterTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineAddMatterTimeEntries.png)

timetracking->timeentries->inline adding new time entry function

### InlineAddProjectTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineAddProjectTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineAddProjectTimeEntries.png)
### InlineAddSalesTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineAddSalesTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineAddSalesTimeEntries.png)

### InlineMatterTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineMatterTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineMatterTimeEntries.png)
timetracking->timeentries->display time entry function

### InlineProjectTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineProjectTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineProjectTimeEntries.png)
### InlineSalesTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`InlineSalesTimeEntries`](../imgs/frontend/components/ui/time-tracking/InlineSalesTimeEntries.png)

### MatterTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`MatterTimeEntries`](../imgs/frontend/components/ui/time-tracking/MatterTimeEntries.png)
`InlineAddMatterTimeEntries` + `InlineMatterTimeEntries`
### ProjectTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`ProjectTimeEntries`](../imgs/frontend/components/ui/time-tracking/ProjectTimeEntries.png)
### SalesTimeEntries

This component can be used as follows:

```html

```

The following is a visual of this component at work.
![`SalesTimeEntries`](../imgs/frontend/components/ui/time-tracking/SalesTimeEntries.png)

### SubmitTimer
This is a [`modal`](components-common.md#modal) using [`modalform`](components-common.md#modalform) to customise for submitting a new time log.

This can be used according to [`GlobalModals`](#globalmodals).

The following is a visual of this component at work.
![`SubmitTimer`](../imgs/frontend/components/ui/time-tracking/SubmitTimer.png)
### TimerMatterSelector
:::danger Deprecate
Using `matter-selector-field` `matter-component-selector-field` directly in `submittimer`
:::
### TimerProjectTaskSelector
:::danger Deprecate
Using `project-task-selector-field` directly in `submittimer`
:::