# UI Admin Components

This is a brief overview of the UI ***Admin*** components being used in the system today.

<!-- ::: tip  Updated at 2023 Q1
::: -->




## Common

The following components customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new data as an admin.

### CreateBusinessArea
This component can be used as follows:

```html
<create-business-area
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateBusinessArea](/frontend/components/ui/admin/common/CreateBusinessAreas.png)
### CreateCapability
This component can be used as follows:

```html
<create-capability
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateCapability](/frontend/components/ui/admin/common/CreateCapabilities.png)
### CreateSubCapability
This component can be used as follows:

```html
<create-sub-capability
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSubCapability](/frontend/components/ui/admin/common/CreateSubCapabilities.png)
### CreateEmailGroup
This component can be used as follows:

```html
<create-email-group
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateEmailGroup](/frontend/components/ui/admin/common/CreateEmailGroups.png)
### CreateIndustryCategory
This component can be used as follows:

```html
<create-industry-category
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateIndustryCategory](/frontend/components/ui/admin/common/CreateIndustryCategories.png)
### CreateIndustrySubCategory
This component can be used as follows:

```html
<create-industry-sub-category
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateIndustrySubCategory](/frontend/components/ui/admin/common/CreateIndustrySubCategories.png)
### CreateLawArea
This component can be used as follows:

```html
<create-law-area
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateLawArea](/frontend/components/ui/admin/common/CreateLawAreas.png)
### CreateLawSubArea
This component can be used as follows:

```html
<create-law-sub-area
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateLawSubArea](/frontend/components/ui/admin/common/CreateLawSubAreas.png)
### CreateOccupation
This component can be used as follows:

```html
<create-occupation
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOccupation](/frontend/components/ui/admin/common/CreateOccupations.png)
### CreateOffice
This component can be used as follows:

```html
<create-office
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOffice](/frontend/components/ui/admin/common/CreateOffices.png)
### CreateOrganisationType
This component can be used as follows:

```html
<create-organisation-type
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOrganisationType](/frontend/components/ui/admin/common/CreateOrganisationTypes.png)
### CreateSafeStorageDocumentType
This component can be used as follows:

```html
<create-safe-storage-document-type
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSafeStorageDocumentType](/frontend/components/ui/admin/common/CreateSafeStorageDocumentTypes.png)
### CreateSafeStorageSection
This component can be used as follows:

```html
<create-safe-storage-section
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSafeStorageSection](/frontend/components/ui/admin/common/CreateSafeStorageSections.png)
### CreateSegment
This component can be used as follows:

```html
<create-segment
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSegment](/frontend/components/ui/admin/common/CreateSegments.png)
### CreateSubSegment
This component can be used as follows:

```html
<create-sub-segment
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSubSegment](/frontend/components/ui/admin/common/CreateSubSegments.png)
### CreateStandardDisbursement
This component can be used as follows:

```html
<create-standard-disbursement
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateStandardDisbursement](/frontend/components/ui/admin/common/CreateStandardDisbursements.png)

## Dynamic-parameters
### CreateDynamicParameter
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Dynamic Parameter.

This component can be used as follows:

```html
<create-dynamic-parameter
  v-if="state.showCreateDynamicParameterModal"
  @close="state.showCreateDynamicParameterModal = false"
/>
```

The following is a visual screenshot of the modal:
![CreateDynamicParameter](/frontend/components/ui/admin/dynamicParameters/CreateDynamicParameters.png)
### DeleteDynamicParameter
This component customises the [`modal`](./components-common.md#modal) component to display a confirmation modal for deleting Dynamic Parameter.

This component can be used as follows:

```html
<delete-dynamic-parameter
  v-if="state.showWarningModal"
  :id="state.selectedParameter"
  @close="state.showWarningModal = false"
/>
```

The following is a visual screenshot of the modal:
![DeleteDynamicParameter](/frontend/components/ui/admin/dynamicParameters/DeleteDynamicParameters.png)
### DynamicParameter
:::danger Deprecated
Using code in `ALP\App\src\views\admin\DynamicParameters.vue`
:::

<!-- This component customises the [`slideOver`](components-ui-user.md#slideover) window for editing dynamic parameter.

This component can be used as follows:

```html

```

The following is a visual screenshot of the modal:
![DynamicParameter](/frontend/components/ui/admin/dynamicParameters/DynamicParameter.png) -->

## Email-template
### CreateEmailTemplate
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new email templates.

This component can be used as follows:

```html
<create-email-template
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateEmailTemplate](/frontend/components/ui/admin/email-template/CreateEmailTemplates.png)

## Entity-parameters
### CreateEntityParameter
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new entity parameter.

This component can be used as follows:

```html
<create-entity-parameter
  v-if="state.showCreateEntityParameterModal"
  :entityType="entityType"
  @close="state.showCreateEntityParameterModal = false"
/>
```

The following is a visual screenshot of the modal:
![CreateEntityParameter](/frontend/components/ui/admin/entityParameters/CreateEntityParametersList.png)
### EntityParametersList
This component sets up the page to display list of entity parameters, including the [`CreateEntityParameter`](#createentityparameter) component as an event of a button.

This component can be used directly as a router view:

```ts
component: () =>
    import(
        "@/components/ui/admin/entity-parameters/EntityParametersList.vue"
    ),
```

The following is a visual screenshot of the modal:
![EntityParametersList](/frontend/components/ui/admin/entityParameters/EntityParametersList.png)

## Metabase
### CreateMetabaseReport
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Metabase Report.

This component can be used as follows:

```html
<create-metabase-report
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateMetabaseReport](/frontend/components/ui/admin/metabase/CreateMetabaseReport.png)

## Metabase-groups
### CreateMetabaseReportGroup
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Metabase Report Group.

This component can be used as follows:

```html
<create-metabase-report-group
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateMetabaseReportGroup](/frontend/components/ui/admin/metabase-groups/CreateMetabaseReportGroup.png)

## Offerings
### ComponentSelector
This component customises the [`slideOver`](components-ui-user.md#slideover) window for selecting a component. Including ways to add new component or edit current components.

This component can be used as follows:

```html
<component-selector
    v-if="outcomeState.showComponentSelectorFor"
    :key="$route.params.outcomeId"
    :offering-id="id"
    :outcome-id="outcomeState.showComponentSelectorFor"
    @close="outcomeState.showComponentSelectorFor = null"
/>
```

The following is a visual screenshot of the side bar:
![ComponentSelector](/frontend/components/ui/admin/offering/ComponentSelector.png)
### CreateOffering
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new offering.

This component can be used as follows:

```html
<create-offering
    v-if="state.showCreateOffering"
    @close="state.showCreateOffering = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOffering](/frontend/components/ui/admin/offering/CreateOffering.png)
### CreateOfferingCategory
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new offering category.

This component can be used as follows:

```html
<create-offering-category
    v-if="state.showCreateOfferingCategory"
    @close="state.showCreateOfferingCategory = false" 
/>
```

The following is a visual screenshot of the modal:
![CreateOfferingCategory](/frontend/components/ui/admin/offering/CreateOfferingCategory.png)
### CreateOfferingComponent
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new offering component.

This component can be used as follows:

```html
<create-offering-component
    v-if="state.showCreateComponent"
    @close="state.showCreateComponent = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOfferingComponent](/frontend/components/ui/admin/offering/CreateOfferingComponent.png)
### CreateOfferingOutcome
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new offering outcome.

This component can be used as follows:

```html
<create-offering-outcome
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateOfferingOutcome](/frontend/components/ui/admin/offering/CreateOfferingOutcome.png)
### InlineOfferingComponent
This component creates and displays each offering outcome component integrating the [`UpDownSwitch`](./components-common.md#updownswitch) component and the [`InlineInput`](./components-input.md#inlineinput) component to allow inline editing functionality.

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

The following is a visual screenshot of the component:
![InlineOfferingComponent](/frontend/components/ui/admin/offering/InlineOfferingComponent.png)
### InlineOfferingOutcome
This component creates and displays each offering outcome integrating the [`UpDownSwitch`](./components-common.md#updownswitch) component and the [`InlineInput`](./components-input.md#inlineinput) component to allow inline editing functionality.

This component can be used as follows:

```html
<inline-offering-outcome
  :id="id"
  :outcome="item"
  @add-component="outcomeState.showComponentSelectorFor = $event"
/>
```

The following is a visual screenshot of the component:
![InlineOfferingOutcome](/frontend/components/ui/admin/offering/InlineOfferingOutcome.png)
### InlineOfferingOutcomeObjectionGuarantee
:::danger Deprecated
:::
### InlineOfferingProblemOutcome
This component creates and displays each of the offering problem outcome integrating the [`InlineInput`](./components-input.md#inlineinput) component to allow inline editing functionality.

This component can be used as follows:

```html
<inline-offering-problem-outcome
  v-for="problemOutcome in problemOutcomes.filter(
    (o) => o.type == type.value
  )"
  :key="problemOutcome.id"
  :id="id"
  :problem-outcome="problemOutcome"
/>
```

The following is a visual screenshot of the component:
![InlineOfferingProblemOutcome](/frontend/components/ui/admin/offering/InlineOfferingProblemOutcome.png)
### MergeOffering
This component customises the [`modal`](./components-common.md#modal), the [`modalForm`](./components-common.md#modalform) and the [`offeringSelector`](components-input.md#xxxselectors) components to display a modal for merging offerings.

This component can be used as follows:

```html
<merge-offering
  v-if = "state.showMergeOffering"
  @close= "state.showMergeOffering = false"
/>
```

The following is a visual screenshot of the modal:
![MergeOffering](/frontend/components/ui/admin/offering/MergeOffering.png)

## Project-templates
### CreateProjectTemplate
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Project Template.

This component can be used as follows:

```html
<create-project-template
    v-if="state.showCreate"
    @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateProjectTemplate](/frontend/components/ui/admin/projectTemplate/CreateProjectTemplates.png)
### CreateProjectTemplateScheduler
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Project Template scheduler, which also includes a toggle option for repeats. 

This component can be used as follows:

```html
<create-project-template-scheduler
    v-if="state.showCreate"
    :id="id"
    @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateProjectTemplateScheduler](/frontend/components/ui/admin/projectTemplate/CreateProjectTemplateScheduler.png)
### InlineProjectTemplateTask
This component creates and displays each Inline Project Template Tasks, integrating the [`InlineInput`](./components-input.md#inlineinput) component to allow inline editing functionality, an option to choose from inline input for normal task and search and choosing from [`standard tasks`](#standard-tasks).

This component can be used as follows:

```html
<inline-project-template-task
  class="mt-1 transition duration-200"
  :key="value.id"
  :project-template-id="id"
  :project-template-task="value"
  @selected="
  taskState.isDisableTasksDragAndDrop = true;
  $router.push({
  name: 'Project Template Task',
  params: { id, taskId: value.id }
  });
  "
/>
```

The following is a visual screenshot of the component:
![InlineProjectTemplateTask](/frontend/components/ui/admin/projectTemplate/InlineProjectTemplateTask.png)
### InlineProjectTemplateTaskStep
This component is created using the [`InlineInput`](./components-input.md#inlineinput) component to allow inline editing functionality for task steps.

This component can be used as follows:

```html
<inline-project-template-task-step
  :project-template-id="projectTemplateId"
  :project-template-task-id="id"
  :project-template-task-step="value"
  class="flex items-center py-2 mb-1 border border-gray-300 hover:border-indigo-300 hover:bg-blue-100 rounded-lg"
  :key="value.id"
  :is-steps-check-list="state.isStepsCheckList"
/>
```

The following is a visual screenshot of the component:
![InlineProjectTemplateTaskStep](/frontend/components/ui/admin/projectTemplate/InlineProjectTemplateTaskStep.png)
### ProjectTemplateTask
This component sets up the page to display the [`slideOver`](components-ui-user.md#slideover) window for editing the project template task, including the [`InlineInput`](./components-input.md#inlineinput) and [`InlineProjectTemplateTaskStep`](#inlineprojecttemplatetaskstep) components.

This component can be used directly as a router view:

```ts
component: () =>
    import(
        "@/components/ui/admin/project-templates/ProjectTemplateTask.vue"
    ),
```

The following is a visual screenshot of the component:
![ProjectTemplateTask](/frontend/components/ui/admin/projectTemplate/ProjectTemplateTask.png)
### ProjectTemplateTaskMetadata
This component is created using the [`dynamicInput`](./components-input.md#dynamicinput) component to allow inline editing functionality for task steps.

This component can be used as follows:

```html
<project-template-task-metadata
  :project-template-id="projectTemplateId"
  :id="id"
/>
```

The following is a visual screenshot of the component:
![ProjectTemplateTaskMetadata](/frontend/components/ui/admin/projectTemplate/ProjectTemplateTaskMetadata.png)


## Resource-urls
### CreateResourceUrl
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Resource Url.

This component can be used as follows:

```html
<create-resource-url
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateResourceUrl](/frontend/components/ui/admin/resource-urls/CreateResourceUrls.png)

## Roles
### CreateRole
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new roles.

This component can be used as follows:

```html
<create-role
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateRole](/frontend/components/ui/admin/roles/CreateRole.png)
### Role
This component customises the [`slideOver`](components-ui-user.md#slideover) window for managing permissions in the system of a role.

This component can be used as follows:

```html

<role
  v-if="state.selectedRoleId"
  :id="state.selectedRoleId"
  :key="state.selectedRoleId"
  @close="state.selectedRoleId = null"
/>
```

The following is a visual screenshot of the modal:
![Role](/frontend/components/ui/admin/roles/Role.png)


## Sprints
### CreateSprint
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new sprint.

This component can be used as follows:

```html
<create-sprint
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateSprint](/frontend/components/ui/admin/sprints/CreateSprint.png)

## Standard-tasks
### CreateStandardTask
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new standard task.

This component can be used as follows:

```html
<create-standard-task
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateStandardTask](/frontend/components/ui/admin/standard-tasks/CreateStandardTask.png)
### InlineStandardTaskStep
This component creates and displays each Inline Standard Task Steps, integrating the [`EditInlineInput`](./components-input.md#editinlineinput) component to allow inline editing functionality, an option to select and choose resources to be included in the task step using the [`ResourceSelector`](components-ui-user.md#resourceselector), [`ResourceUrlSelector`](components-ui-user.md#resourceurlselector) and [`SyntaqResourceSelector`](components-ui-user.md#syntaqresourceselector).

This component can be used as follows:

```html
<inline-standard-task-step
  :standard-task-id="id"
  :standard-task-step="value"
  class="class"
  :key="value.id"
  :is-steps-check-list="state.isStepsCheckList"
/>
```

The following is a visual screenshot of the component:
![InlineStandardTaskStep](/frontend/components/ui/admin/standard-tasks/InlineStandardTaskStep.png)
### StandardTask
This component sets up the page to display the [`slideOver`](components-ui-user.md#slideover) window for editing the project template task, including the [`InlineInput`](./components-input.md#inlineinput) and [`InlineStandardTaskStep`](#inlinestandardtaskstep) components.

This component can be used directly as a router view:

```ts
component: () =>
  import(
    "@/components/ui/admin/standard-tasks/StandardTask.vue"
  ),
```

The following is a visual screenshot of the component:
![StandardTask](/frontend/components/ui/admin/standard-tasks//StandardTask.png)
### StandardTaskMetadata
This component is created using the [`dynamicInput`](./components-input.md#dynamicinput) component to allow inline editing functionality for task metadata.

This component can be used as follows:

```html
<standard-task-metadata 
  :id="id" 
/>
```

The following is a visual screenshot of the component:
![StandardTaskMetadata](/frontend/components/ui/admin/standard-tasks/StandardTaskMetadata.png)

## Trusts
### CreateTrustAccount
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform) components to display a modal for creating new trust account.

This component can be used as follows:

```html
<create-trust-account
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateTrustAccount](/frontend/components/ui/admin/trusts/CreateTrustAccount.png)

## Users
### ChangePassword
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for changing password.

This component can be used as follows:

```html
<change-password
  v-if="stateUser.showCreate"
  @close="stateUser.showCreate = false"
  :id="id"
/>
```

The following is a visual screenshot of the modal:
![ChangePassword](/frontend/components/ui/admin/users/ChangePassword.png)
### CreateRemuneration
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new Remuneration.

This component can be used as follows:

```html
<create-remuneration
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateRemuneration](/frontend/components/ui/admin/users/CreateRemunerations.png)
### CreateUser
This component customises the [`modal`](./components-common.md#modal) and the [`modalForm`](./components-common.md#modalform)  components to display a modal for creating new user.

This component can be used as follows:

```html
<create-user
  v-if="state.showCreate"
  @close="state.showCreate = false"
/>
```

The following is a visual screenshot of the modal:
![CreateUser](/frontend/components/ui/admin/users/CreateUsers.png)

