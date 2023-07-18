workspace "AL Portal" {
   
   model {
      properties {
         "structurizr.groupSeparator" "/"
      }
      # Customer
      Customer = person "Customer" "A Customer of the firm"
      
      # External Systems
      Xero = softwaresystem "Xero" "Used for all invoice and bookskeeping." "External System"
      AutoEmail = softwaresystem "GridSent" "Automates emails." "External System"
      activeCampaign = softwaresystem "activeCampaign" "Automated Marketing System." "External System"
      ABNLookup = softwaresystem "ABNLookup" "ABN Lookup System." "External System"
      AzureBlobStorage = softwaresystem "AzureBlobStorage" "AzureBlobStorage System." "External System"
      Quartz = softwaresystem "Quartz" "Quartz System." "External System"
      
      enterprise "Andreyev Lawyers" {
         User = person "User" "Staff"
         
         Syntaq = softwaresystem "Syntaq" "Database for automated Forms." "Exsisting System"
         
         ALP = softwaresystem "AL Portal" {
            database = container "Database" "Database of ALP system" "Microsoft Azure"
            frontend = container "Frontend" "Frontend of ALP." "Vue.js and Vite" 
            backend = container "Backend" "Backend of ALP." "C# and ASP .Net Core" {
               Controllers = group "Controllers" {
                  accountController = group "AccountController" {
                     account_Controllers = component "Account Controllers"
                     calendar_Controllers = component "Calendar Controllers"
                     permission_Controllers = component "Permission Controllers"
                     role_Controller = component "Role Controllers"
                     user_Controller = component "User Controllers"
                  }
                  commonController = group "CommonController" {
                     Active_Campaign_Controller = component "Active Campaign Controller"
                     Emails_Controller = component "Emails Controller"
                     Contact_Email_Controller = component "Contact Email Controller"
                     Email_Controller = component "Email Controller"
                     Email_Template_Controller = component "Email Template Controller"
                     Matter_Email_Controller = component "Matter Email Controller"
                     Organisation_Email_Controller = component "Organisation Email Controller"
                     Project_Email_Controller = component "Project Email Controller"
                     Mail_Register_Controller = component "Mail Register Controller"
                     Incoming_Mails_Controller = component "Incoming Mails Controller"
                     Outgoing_Mails_Controller = component "Outgoing Mails Controller"
                     Metabase_Controller = component "Metabase Controller"
                     Metabase_Group_Controller = component "Metabase Group Controller"
                     Metadata_Controller = group "Metadata Controller" {
                        Dynamic_Parameter_Controller = component "Dynamic Parameter Controller"
                        Dynamic_Parameter_Value_Controller = component "Dynamic Parameter Value Controller"
                        Entity_Dynamic_Parameter_Controller = component "Entity Dynamic Parameter Controller"
                     }
                     Safe_Storage_Controller = group "Safe Storage Controller" {
                        Safe_Storage_Documents_Controller = component "Safe Storage Documents Controller"
                        Safe_Storage_Document_Types_Controller = component "Safe Storage Document Types Controller"
                        Safe_Storage_Sections_Controller = component "Safe Storage Sections Controller"
                     }
                     Syntaq_Controller = component "Syntaq Controller"
                     Syntaq_Form_Controller = component "Syntaq Form Controller"
                     Time_Tracking_Controller = group "Time Tracking Controller" {
                        Matter_Component_TimeEntry_Controller = component "Matter Component TimeEntry Controller"
                        Matter_TimeEntry_Controller = component "Matter TimeEntry Controller"
                        TimeEntry_Controller = component "TimeEntry Controller"
                        Timer_Controller = component "Timer Controller"
                     }
                     Xero_Controller = component "Xero Controller"
                     ABN_Lookup_Controller = component "ABN Lookup Controller"
                     AWSS3_Controller = component "AWSS3 Controller"
                     Bug_Report_Controller = component "Bug Report Controller"
                     Business_Area_Controller = component "Business Area Controller"
                     Capability_Controller = component "Capability Controller"
                     Industry_Category_Controller = component "Industry Category Controller"
                     Industry_SubCategory_Controller = component "Industry SubCategory Controller"
                     Law_Area_Controller = component "Law Area Controller"
                     Law_SubArea_Controller = component "Law SubArea Controller"
                     Logs_Controller = component "Logs Controller"
                     Notes_Controller = component "Notes Controller"
                     Notification_Controller = component "Notification Controller"
                     Occupation_Controller = component "Occupation Controller"
                     Office_Controller = component "Office Controller"
                     Organisation_Type_Controller = component "Organisation Type Controller"
                     Reminder_Controller = component "Reminder Controller"
                     Segment_Controller = component "Segment Controller"
                     SharePoint_Controller = component "SharePoint Controller"
                     Standard_Disbursement_Controller = component "Standard Disbursement Controller"
                     SubCapability_Controller = component "SubCapability Controller"
                     SubSegment_Controller = component "SubSegment Controller"
                     Suggestion_Controller = component "Suggestion Controller"
                     System_Info_Controller = component "System Info Controller"
                  }
                  crmComtroller = group "CRMController"{
                     Client_Controller = component "Client Controller"
                     Contact_Controller = component "Contact Controller"
                     Contact_Note_Controller = component "Contact Note Controller"
                     Organisation_Controller = component "Organisation Controller"
                     Organisation_Note_Controller = component "Organisation Note Controller"
                     Special_Interest_Controller = component "Special Interest Controller"
                     
                  }
                  documentController = group "DocumentationController"{
                     ClientDocument_Controller = component "ClientDocument Controller"
                     ContactDocument_Controller = component "ContactDocument Controller"
                     Document_Controller = component "Document Controller"
                     DocumentReview_Controller = component "DocumentReview Controller"
                     FeedBackDocument_Controller = component "FeedBackDocument Controller"
                     MatterDocument_Controller = component "MatterDocument Controller"
                     OfferingDocument_Controller = component "OfferingDocument Controller"
                     OrganisationDocument_Controller = component "OrganisationDocument Controller"
                     ProjectDocument_Controller = component "ProjectDocument Controller"
                     ResourceDocument_Controller = component "ResourceDocument Controller"
                     ResourceUrl_Controller = component "ResourceUrl Controller"
                  }
                  matterController = group "MatterController"{
                     Disbursement_Controller = component "Disbursement Controller"
                     Invoice_Controller = component "Invoice Controller"
                     InvoiceNote_Controller = component "InvoiceNote Controller"
                     MatterComponent_Controller = component "MatterComponent Controller"
                     MatterComponentResource_Controller = component "MatterComponentResource Controller"
                     Matter_Controller = component "Matter Controller"
                     MatterInvoice_Controller = component "MatterInvoice Controller"
                     MatterNote_Controller = component "MatterNote Controller"
                     MatterOutcome_Controller = component "MatterOutcome Controller"
                     MatterStatistics_Controller = component "MatterStatistics Controller"
                     MatterSyntaq_Controller = component "MatterSyntaq Controller"
                     MatterTrust_Controller = component "MatterTrust Controller"
                     StatutoryTrust_Controller = component "StatutoryTrust Controller"
                     TrustAccount_Controller = component "TrustAccount Controller"
                  }
                  offeringController = group "OfferingController"{
                     OfferingCategory_Controller = component "OfferingCategory Controller"
                     OfferingComponent_Controller = component "OfferingComponent Controller"
                     OfferingComponentResource_Controller = component "OfferingComponentResource Controller"
                     Offering_Controller = component "Offering Controller"
                     OfferingOutcomeComponent_Controller = component "OfferingOutcomeComponent Controller"
                     OfferingOutcome_Controller = component "OfferingOutcome Controller"
                     OfferingOutcomeObjectionGuarantee_Controller = component "OfferingOutcomeObjectionGuarantee Controller"
                     OfferingProblemOutcome_Controller = component "OfferingProblemOutcome Controller"
                     OfferingResource_Controller = component "OfferingResource Controller"
                  }
                  projectController = group "ProjectController"{
                     Project_Controller = component "Project Controller"
                     ProjectNote_Controller = component "ProjectNote Controller"
                     ProjectTask_Controller = component "ProjectTask Controller"
                     ProjectTaskResource_Controller = component "ProjectTaskResource Controller"
                     ProjectTaskStep_Controller = component "ProjectTaskStep Controller"
                     ProjectTaskStepResource_Controller = component "ProjectTaskStepResource Controller"
                     ProjectTemplate_Controller = component "ProjectTemplate Controller"
                     ProjectTemplateTask_Controller = component "ProjectTemplateTask Controller"
                     ProjectTemplateTaskStep_Controller = component "ProjectTemplateTaskStep Controller"
                     ProjectTemplateTaskStepResource_Controller = component "ProjectTemplateTaskStepResource Controller"
                     Sprint_Controller = component "Sprint Controller"
                     StandardTask_Controller = component "StandardTask Controller"
                     StandardTaskStep_Controller = component "StandardTaskStep Controller"
                     StandardTaskStepResource_Controller = component "StandardTaskStepResource Controller"
                  }
               }
               Services = group "Services" {
                  accountServices = group "AccountServices" {
                     account_Services = component "Account Services"
                     permission_Services = component "Permission Services"
                  }
                  activeCampaignServices = group "Active Campaign Services" {
                     active_Campaign_Services = component "Active Campaign Services"
                  }
                  calendarServices = group "CalendarServices" {
                     calendar_Services = component "Calendar Services"
                  }
                  clientsServices = group "Clients Services" {
                     client_Services = component "Client Services"
                  }
                  commonServices = group "Common Services" {
                     
                  }
                  contactsServices = group "Contacts Services" {
                     
                  }
                  documentReviewServices = group "Document Review Services" {
                     
                  }
                  documentsServices = group "Documents Services" {
                     
                  }
                  emailsServices = group "Emails Services" {
                     
                  }
                  externalServices = group "External Services" {
                     
                  }
                  feedbackServices = group "Feedback Services" {
                     
                  }
                  genericServices = group "Generic Services" {
                     
                  }
                  invoicesServices = group "Invoices Services" {
                     
                  }
                  logsServices = group "Logs Services" {
                     
                  }
                  mailRegisterServices = group "Mail Register Services" {
                     
                  }
                  mattersServices = group "Matters Services" {
                     
                  }
                  metabaseServices = group "Metabase Services" {
                     
                  }
                  metadataServices = group "Metadata Services" {
                     
                  }
                  notesServices = group "Notes Services" {
                     
                  }
                  notificationsServices = group "Notifications Services" {
                     
                  }
                  offeringsServices = group "Offerings Services" {
                     
                  }
                  organisationsServices = group "Organisations Services" {
                     
                  }
                  projectsServices = group "Projects Services" {
                     
                  }
                  projectTemplatesServices = group "Project Templates Services" {
                     
                  }
                  quartzServices = group "Quartz Services" {
                     
                  }
                  remindersServices = group "Reminders Services" {
                     
                  }
                  resourcesServices = group "Resources Services" {
                     
                  }
                  safeStorageServices = group "Safe Storage Services" {
                     
                  }
                  syntaqServices = group "Syntaq Services" {
                     
                  }
                  timeTrackingServices = group "Time Tracking Services" {
                     
                  }
                  trustServices = group "Trust Services" {
                     trust_Services = component "Trust Services"
                  }
                  xeroServices = group "Xero Services" {
                     xero_Services = component "Xero Services"
                  }
               }
            }
         }
      }
      
      # relationships between people and software systems
      User -> ALP "Uses"
      ALP -> Xero "Invoicing"
      ALP -> Customer "Sends generated PDF reminder letters and invoices."
      Xero -> ALP "Output invoices data"
      ALP -> AutoEmail "Sends e-mail using"
      AutoEmail -> User "Sends e-mails to"
      ALP -> activeCampaign "Sends Marketing Info via"
      activeCampaign -> Customer "Sends Marketing Info to"
      ALP -> Syntaq "Send request for file"
      Syntaq -> ALP "Respond with file"
      ALP -> ABNLookup "Uses to look for ABN detail"
      ALP -> AzureBlobStorage "Uses for cloud object storage"
      ALP -> Quartz "Uses for job scheduling"
      
      # relationships to/from containers
      // User -> webApplication "Visits bigbank.com/ib using" "HTTPS"
      // User -> singlePageApplication "Views account balances, and makes payments using"
      // webApplication -> singlePageApplication "Delivers to the customer's web browser"
      // account_Controllers -> account_Services "Calles GetByEmail"
      
      # relationships to/from components
      //   singlePageApplication -> LoginController "Makes API calls to" "JSON/HTTPS"
      //   singlePageApplication -> accountsSummaryController "Makes API calls to" "JSON/HTTPS"
      //   singlePageApplication -> resetPasswordController "Makes API calls to" "JSON/HTTPS"
      //   signinController -> securityComponent "Uses"
      //   accountsSummaryController -> mainframeBankingSystemFacade "Uses"
      //   resetPasswordController -> securityComponent "Uses"
      //   resetPasswordController -> emailComponent "Uses"
      //   securityComponent -> database "Reads from and writes to" "JDBC"
      //   mainframeBankingSystemFacade -> Xero "Makes API calls to" "XML/HTTPS"
      //   emailComponent -> AutoEmail "Sends e-mail using"
      softwareSystem "live"{
         
      }
   }

   views {
      systemlandscape "SystemLandscape" {
         include *
         autoLayout
      }
      
      systemcontext ALP "ALPSystem" {
         include ->ALP->
         animation {
            User
            // singlePageApplication
         }
         autoLayout
      }
      
      component Backend "x" {
         include ->account_Services
         animation {
            
         }
         autoLayout
      }
      
      //   component apiApplication "Components" {
      //      include *
      //      animation {
      //         database
      
      //      }
      //      autoLayout
      //   }
      
      //   dynamic apiApplication "SignIn" "Summarises how the sign in feature works in the single-page application." {
      //      singlePageApplication -> signinController "Submits credentials to"
      //      signinController -> securityComponent "Validates credentials using"
      //      securityComponent -> database "select * from users where username = ?"
      //      database -> securityComponent "Returns user data to"
      //      securityComponent -> signinController "Returns true if the hashed password matches"
      //      signinController -> singlePageApplication "Sends back an authentication token to"
      //      autoLayout
      //   }
      
      // deployment ALP "Development" "DevelopmentDeployment" {
      //     include *
      //     animation {
      //         developerSinglePageApplicationInstance
      //         developerWebApplicationInstance developerApiApplicationInstance
      //         developerDatabaseInstance
      //     }
      //     autoLayout
      // }
      
      // deployment ALP "Live" "LiveDeployment" {
      //     include *
      //     animation {
      //         liveSinglePageApplicationInstance
      //         liveMobileAppInstance
      //         liveWebApplicationInstance liveApiApplicationInstance
      //         livePrimaryDatabaseInstance
      //         liveSecondaryDatabaseInstance
      //     }
      //     autoLayout
      // }
      
      styles {
         element "Person" {
            color #1655AE
            fontSize 22
            shape Person
         }
         element "Customer" {
            background #08427b
         }
         element "Bank Staff" {
            background #999999
         }
         element "Software System" {
            background #1168bd
            color #ffffff
         }
         element "Existing System" {
            background #999999
            color #ffffff
         }
         element "Container" {
            background #438dd5
            color #ffffff
         }
         element "Web Browser" {
            shape WebBrowser
         }
         element "Mobile App" {
            shape MobileDeviceLandscape
         }
         element "Database" {
            shape Cylinder
         }
         element "Component" {
            background #85bbf0
            color #000000
         }
         element "Failover" {
            opacity 25
         }
      }
   }
}