import { defineConfig } from "vitepress";

export default (

    defineConfig({
        title: 'AL Portal 2.0',
        description: 'ALP 2.0 Document',
        head: [
            // title icon   MUST NOT be too big
            [`link`, { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ],
        lastUpdated: true,
        lastUpdatedText: 'Updated Date',
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
                '/deployment/': sidebarDeployment(),
            },
            footer: {
                message: "Released by DevOps Team",
                copyright: "Copyright © 2022-present Andreyev Lawyers",
            },
            //right sidebar to show ## and ###
            outline: [2, 3],
            

            algolia:
            {
                appId: 'GE3LFXUYJ9',
                apiKey: '9c5a78166d698ca538621f5f225d765c',
                indexName: 'ALPortal'
            },
        },
    })
);

function nav() {
    return [
        { text: 'Guide', link: '/guide/introduction' },
        {
            text: 'DevOps',
            items: [
                { text: 'Front End', link: '/front-end/introduction' },
                { text: 'Back End', link: '/back-end/introduction' },
                { text: 'Deployment', link: '/deployment/introduction' },
            ]
        },
        // { text: 'User Manual ', link: 'https://andreyev-wiki.azurewebsites.net' },
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
            collapsable: true,
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
            text: 'Front End',
            collapsable: true,
            items: [
                { text: 'Introduction', link: '/front-end/introduction' },
                { text: 'Configuration', link: '/front-end/configuration' },
                { text: 'Key Libraries', link: '/front-end/key-libraries' },
                { text: 'Project Structure', link: '/front-end/project-structure' },
                {
                    text: 'Components', collapsable: true, items: [
                        { text: 'Common Components', link: '/front-end/components-common' },
                        { text: 'Forms Components', link: '/front-end/components-form' },
                        { text: 'Inputs Components', link: '/front-end/components-input' },
                        {
                            text: 'UI Components', collapsable: true, items: [
                                { text: 'Admin', link: '/front-end/components-ui-admin' },
                                { text: 'User', link: '/front-end/components-ui-user' },
                            ]
                        },
                    ]
                },
                { text: 'Composable', link: '/front-end/composable' },
                { text: 'Vuex Store', link: '/front-end/store' },
                { text: 'Code Generation', link: '/front-end/code-generation' },
                { text: 'Additional Reading', link: '/front-end/additional-reading' },
            ],
        },
    ];
}
function sidebarBackend() {
    return [
        {
            text: 'Back End',
            collapsable: true,
            items: [
                { text: 'Introduction', link: '/back-end/introduction' },
                { text: 'Configuration', link: '/back-end/configuration' },
                { text: 'Key Libraries', link: '/back-end/key-libraries' },
                { text: 'Architecture', link: '/back-end/architecture' },
                { text: 'External Services', link: '/back-end/external-services' },
                { text: 'Additional Reading', link: '/back-end/additional-reading' },
            ],
        },
    ];
}

function sidebarDeployment() {
    return [
        {
            text: 'Deployment',
            collapsable: true,
            items: [
                { text: 'Introduction', link: '/deployment/introduction' },
            ],
        },
    ];
}
function sidebarGlossary() {
    return [
        {
            text: 'Glossary and Terminology',
            collapsable: true,
            items: [
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
            text: 'Road Map',
            collapsable: true,
            items: [
                { text: 'Introduction', link: '/road-map/introduction' },
                { text: 'Current Work / Priorities', link: '/road-map/current-work' },
                { text: 'System Improvement', link: '/road-map/system-improvement' },
                { text: 'New Features', link: '/road-map/new-features' },
            ],
        },

    ];
}
