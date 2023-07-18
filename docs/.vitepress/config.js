import { defineConfig } from 'vitepress'
// import { withMermaid } from "vitepress-plugin-mermaid";
import { withMermaid } from "../../src";


// https://vitepress.dev/reference/site-config
export default (
    // export default withMermaid(
    defineConfig({
        title: 'AL Portal 2.0',
        description: 'ALP 2.0 Document',
        head: [
            // title icon   MUST NOT be too big
            [`link`, { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ],
        lastUpdated: true,
        lastUpdatedText: 'Updated Date',
        // mermaid: {
        //     // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
        // },
        themeConfig: {
            // nav bar icon
            logo: '/andreyev.png',

            nav: nav(),
            sidebar: {
                '/guide/': sidebarGuide(),
                '/glossary/': sidebarGlossary(),
                '/road-map/': sidebarRoadmap(),
                '/front-end/': sidebarFrontend(),
                '/back-end/': sidebarBackend(),
                // '/features/': sidebarUserPage(),
                // '/admin-page/': sidebarAdminPage(),
                '/deployment/': sidebarDeployment(),
            },
            footer: {
                message: "Released by DevOps Team",
                copyright: "Copyright © 2022-present Andreyev Lawyers",
            },
            //right sidebar to show ## and ###
            outline: [2, 3],

            socialLinks: [
                { icon: 'github', link: 'https://github.com/JoeFu/alportal-document' }
            ]
        }
    })
)

function nav() {
    return [
        { text: 'Guide', link: '/guide/introduction' },
        // { text: 'Guide', link: '/Unused/application-architecture/README' },
        {
            text: 'DevOps',
            items: [
                { text: 'Front End', link: '/front-end/introduction' },
                { text: 'Back End', link: '/back-end/introduction' },
                { text: 'Deployment', link: '/deployment/introduction' },
            ]
        },
        { text: 'User Manual ', link: 'https://andreyev-wiki.azurewebsites.net' },
        { text: 'Glossary', link: '/glossary/introduction' },
        // { text: 'Release Notes ', link: '/release-notes/' },
        { text: 'Road Map ', link: '/road-map/introduction' },
        { text: 'Portal 2.0', link: 'https://alportal.azurewebsites.net' }
    ];
}

function sidebarGuide() {
    return [
        {
            text: 'Guide',
            collapsible: true,
            items: [
                { text: 'Introduction', link: '/guide/introduction' },
                { text: 'Setup Environment', link: '/guide/setup-environment' },
                { text: 'Getting ALP Source', link: '/guide/getting-source' },
                { text: 'Recommended Toolbox', link: '/guide/recommended-toolbox' },
                { text: 'Running Project', link: '/guide/running-project' },
            ],
        },
    ];
}
function sidebarFrontend() {
    return [
        {
            text: 'Front End', collapsible: true, items: [
                { text: 'Introduction', link: '/front-end/introduction' },
                { text: 'Configuration', link: '/front-end/configuration' },
                { text: 'Key Libraries', link: '/front-end/key-libraries' },
                { text: 'Project Structure', link: '/front-end/project-structure' },
                {
                    text: 'Components', collapsible: true, items: [
                        { text: 'Common Components', link: '/front-end/components-common' },
                        { text: 'Forms Components', link: '/front-end/components-form' },
                        { text: 'Inputs Components', link: '/front-end/components-input' },
                        {
                            text: 'UI Components', collapsible: true, items: [
                                { text: 'Admin', link: '/front-end/components-ui-admin' },
                                { text: 'User', link: '/front-end/components-ui-user' },
                            ]
                        },
                    ]
                },
                { text: 'Composable', link: '/front-end/composable' },
                { text: 'Vuex Store', link: '/front-end/store' },
                { text: 'Connecting to Backend', link: '/front-end/tobackend' },
                { text: 'Code Generation', link: '/front-end/code-generation' },
                { text: 'Additional Reading', link: '/front-end/additional-reading' },
            ],
        },
    ];
}
function sidebarBackend() {
    return [
        {
            text: 'Back End', collapsible: true, items: [
                { text: 'Introduction', link: '/back-end/introduction' },
                { text: 'Configuration', link: '/back-end/configuration' },
                { text: 'Project Structure', link: '/back-end/projectstructure' },
                { text: 'Key Libraries', link: '/back-end/key-libraries' },
                {
                    text: 'API Controllers', link: '/back-end/controllers/controller', collapsible: true, items: [
                        { text: 'Account', link: '/back-end/controllers/account' },
                        { text: 'Common', link: '/back-end/controllers/common' },
                        { text: 'Matters', link: '/back-end/controllers/matters' },
                    ]
                },
                { text: 'Middleware', link: '/back-end/middleware' },
                { text: 'Hubs', link: '/back-end/hubs' },
                { text: 'Swagger', link: '/back-end/swagger' },
                {
                    text: 'Authentication Services', collapsible: true, items: [
                        { text: 'JWT', link: '/back-end/authentication/jwt' },
                        { text: 'Microsoft Login', link: '/back-end/authentication/mslogin' },
                    ]
                },

                {
                    text: 'Services', link: '/back-end/services/services', collapsible: true, items: [
                        { text: 'Accounts', link: '/back-end/services/accounts' },
                        { text: 'Clients', link: '/back-end/services/clients' },
                        { text: 'Contacts', link: '/back-end/services/contacts' },

                        { text: 'Invoices', link: '/back-end/services/invoices' },
                        { text: 'Logs', link: '/back-end/services/logs' },

                        { text: 'Time Tracking', link: '/back-end/services/timetracking' },
                        { text: 'Trust', link: '/back-end/services/trust' },
                        {
                            text: 'External Services', collapsible: true, items: [
                                { text: 'ABN Lookup', link: '/back-end/services/external/ABNLookup' },
                                { text: 'Active Campaign', link: '/back-end/services/external/activecampaign' },
                                { text: 'AWS S3', link: '/back-end/services/external/AWSS3' },
                                { text: 'Azure Blob Storage', link: '/back-end/services/external/AzureBlobStorage' },
                                { text: 'MicrosoftGraph', link: '/back-end/services/external/MicrosoftGraph' },
                                { text: 'Quartz', link: '/back-end/services/external/quartz' },
                                { text: 'SendGrid', link: '/back-end/services/external/SendGrid' },
                                { text: 'SharePoint', link: '/back-end/services/external/SharePoint' },
                                { text: 'Syntaq', link: '/back-end/services/external/syntaq' },
                                { text: 'Tika', link: '/back-end/services/external/Tika' },
                                { text: 'Xero Services', link: '/back-end/services/external/xeroservices' },
                            ]
                        }
                    ]
                },
                { text: 'Additional Reading', link: '/back-end/additional-reading' },


                // {
                //     text: 'Features', collapsible: true, items: [
                //         { text: 'Common', link: '/Unused/features/common' },
                //         { text: 'CRM', link: '/Unused/features/crm' },
                //         { text: 'Matters', link: '/Unused/features/matters' },
                //         { text: 'Invoice', link: '/Unused/features/invoice' },
                //         { text: 'Syntaq', link: '/Unused/features/Syntaq' },
                //         { text: 'Projects', link: '/Unused/features/projects' },
                //         { text: 'Metabase Reports', link: '/Unused/features/metabaseReports' },
                //         { text: 'Bug Reports', link: '/Unused/features/bugReports' },
                //     ]
                // },

            ],
        },
    ];
}

function sidebarDeployment() {
    return [
        {
            text: 'Deployment', collapsible: true, items: [
                { text: 'Introduction', link: '/deployment/introduction' },
            ],
        },
    ];
}
function sidebarGlossary() {
    return [
        {
            text: 'Glossary and Terminology', collapsible: true, items: [
                { text: 'Introduction', link: '/glossary/introduction' },
                { text: 'Business Area', link: '/glossary/business-areas' },
                { text: 'CRM', link: '/glossary/crm' },
                { text: 'Value Delivery', link: '/glossary/value-delivery' },
                { text: 'Value Creation', link: '/glossary/value-creation' },
                { text: 'Time Tracking', link: '/glossary/time-tracking' },
                { text: 'Syntaq', link: '/glossary/syntaq' },
            ],
        },

    ];
}
function sidebarRoadmap() {
    return [
        {
            text: 'Road Map', collapsible: true, items: [
                { text: 'Introduction', link: '/road-map/introduction' },
                { text: 'Current Work / Priorities', link: '/road-map/current-work' },
                { text: 'System Improvement', link: '/road-map/system-improvement' },
                { text: 'New Features', link: '/road-map/new-features' },
            ],
        },

    ];
}