import { defineConfig } from "vitepress";

export default(


    defineConfig({
            title: 'ALP 2.0 Documentation',
            description: 'ALP 2.0 Document',
            themeConfig: {
                nav: nav(),
                sidebar: {
                    '/guide/': sidebarGuide(),
                    '/concepts/': sidebarConcepts(),
                },
                footer:{
                    message: "Released by DevOps Team",
                    copyright: "Copyright © 2022-present Andreyev Lawyers",
                },  

                lastUpdated: true,
                
            },

           
          })
    );
    
    function nav(){
       return [  
            { text: 'Guide', link: '/guide/introduction' },
            { text: 'Concepts', link: '/concepts/introduction' },
        
        

            { text: 'Portal 2.0', link: 'https://alportal.azurewebsites.net/' }
        ];
    }

    function sidebarGuide(){
        return [
            {
                text: 'Guide',
                collapsable: true,
                items: [
                    { text:'Introduction', link: '/guide/introduction'},
                    { text:'Setup .Net 6 Core', link: '/guide/setup-dotnet'},
                    { text:'Setup VueJs', link: '/guide/setup-vuejs'},
                    { text:'Setup Postgres', link: '/guide/setup-postgres'},
                    { text:'Getting Source', link: '/guide/getting-source'},
                    { text:'Running Project', link: '/guide/running-project'},
                ],               
            },        
        ];
    }
    function sidebarConcepts(){
        return [
            {
                text: 'Concepts/Terminology',
                collapsable: true,
                items: [
                    { text:'Introduction', link: '/concepts/introduction'},
                    { text:'Business Area', link: '/concepts/business-areas'},
                    { text:'CRM', link: '/concepts/crm'},
                    { text:'Value Delivery', link: '/concepts/value-delivery'},
                    { text:'Value Creation', link: '/concepts/value-creation'},
                    { text:'Time Tracking', link: '/concepts/time-tracking'},
                    { text:'Syntaq', link: '/concepts/syntaq'},
                ],               
            },
        
        ];
    }

    function sidebarFontend(){

        return [
            {
                text: 'Front End',
                collapsable: true,
                items: [
                    { text:'Introduction', link: '/front-end/introduction'},
                    { text:'Configuration', link: '/front-end/configuration'},
                    { text:'Key Libraries', link: '/front-end/key-libraries'},
                    { text:'Architecture', link: '/front-end/architecture'},
                    { text:'Components', link: '/front-end/components'},
                    { text:'Composable', link: '/front-end/composable'},
                    { text:'Vuex Store', link: '/front-end/store'},
                    { text:'Code Generation', link: '/front-end/code-generation'},
                    { text:'Additional Reading', link: '/front-end/additional-reading'},
                ],               
            },        
        ];

    }