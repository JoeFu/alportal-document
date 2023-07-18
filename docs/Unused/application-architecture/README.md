# Application Architecture




```mermaid
flowchart TD
  user[Andreyev Staff]--Accesses-->alp
  subgraph alp[Portal] 
      frontend[Vue.js SPA]--Makes API calls to-->backend[Backend REST API]
      backend--Sends content for processing-->tika[Apache Tika Server]
  end  
  subgraph microsoft[Microsoft Services]
    
    alp<--Retrieves/sends emails-->outlook[Microsoft Outlook<br />Email System]
    alp<--Retrieves/sends emails-->onedrive[Microsoft OneDrive]
    alp<--Retrieves/sends emails-->blobstorage[Azure Blob Storage]
    
  end

  subgraph external[External]
    xero[Xero]
    ac[Active Campaign]
    syntaq[Syntaq]
  end
  alp--Makes API calls to-->xero
  alp--Makes API calls to-->ac
  alp--Makes API calls to-->syntaq

``` 