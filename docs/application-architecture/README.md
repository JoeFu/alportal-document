# Application Architecture

```mermaid
flowchart TD
  user[Andreyev Staff]--Accesses-->alp
  subgraph alp[Portal]
    backend[Backend REST API]--Sends content for processing-->tika[Apache Tika Server]
    frontend[Vue.js SPA]--Makes API calls to-->backend
  end
  subgraph microsoft[Microsoft/Azure]
    alp&lt;--Retrieves/sends emails-->outlook[Microsoft Outlook&lt;br />Email System]
    alp&lt;--Retrieves/sends files-->onedrive[Microsoft OneDrive]
    alp&lt;--Retrieves/sends files-->blobstorage[Azure Blob Storage]
  end
  subgraph external[External]
    alp--Makes API calls to-->xero[Xero]
    alp--Makes API calls to-->ac[Active Campaign]
    alp--Makes API calls to-->syntaq[Syntaq]
  end
```