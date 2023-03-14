## Scraping of Individual Calendar
[GitHub Issue 1481](https://github.com/AndreyevLawyers/ALP/issues/1481)
Function to extract Calender events and 
- Allocate to Matters
- View date, time, and who is invited
- Link back to calendar

## Create Organisation VIA ABN
[GitHub Issue 1449](https://github.com/AndreyevLawyers/ALP/issues/1449)
- New feature to allow creation of new organisation via ABN lookup
- Auto fill form with results from ABN Lookup
[Read More About ABNLookup here](https://abr.business.gov.au/Tools/AbnLookup)

## AI
Read on [OpenAI](https://openai.com/blog/chatgpt-plus), hoping to embed ChatGPT into the ALP application to aid in system tasks to be more automated.

## Telephone call data for Contacts
Integrate call data spreadsheets to show phone interactions with Contacts.
- Create time entries.
- API from softphones.
Table is already in database: [here](https://alportal-metabase.azurewebsites.net/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjEyMH0sInR5cGUiOiJxdWVyeSJ9LCJkaXNwbGF5IjoidGFibGUiLCJ2aXN1YWxpemF0aW9uX3NldHRpbmdzIjp7fX0=)


## Client portal
Limited direct access for clients to key data based on one-time passwords.
### Research Client Needs
  - Update their own details (name, address, subscriptions, etc.)
  - Invoicing/payments.
  - Key documents – permanent record
  - Matter status, 
  - etc (Limited)
  - Corporate and key referrers.
- Emails to clients on Matter -> triggers link to request OTP.

## Digital signing
- Work Proposals – priority.
- Final document after lawyer review needs to go through signing process. 


## Email Upgrade
- To include Conversation

## Notification Upgrade
[GitHub Issue 971](https://github.com/AndreyevLawyers/ALP/issues/971)
- Clickable links in notification


## Global Search
New feature of Global Searching the entire application.


## Line Laying Module (LLM)
Communications Line Laying Module (LLM). 
> Ability to train on our own data. Ownership of trained data. Foundry.

> Ability to run on our own servers.

Read on [LLM](https://community.openai.com/t/how-a-llm-based-application-integrates-a-custom-function-api/27887).
### Stage 1:
- Use of natural language functions to speed up tasks in Portal.
- Short-medium term strategy: Do not use to do direct legal work for now. Use NL ability to improve Portal functions.
- Email summaries.
- Time recording – check for incorrect language. Make recommended time entries from things like emails and calendar entries. Tie-in with Dash prompts.
### Stage 2:
- Tweak towards our dataset.
- Try [this](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/chatllama?utm_source=tldrai)


## Mobile App or Mini-Browser
- Limited functions
  - Time entry
  - Contact look up –> call


## Web-scraping and API calls
[Read more about scraping here](https://apify.com/vdrmota/contact-info-scraper)
- Use automations to fill in Contact and Organisation data.
> ABN. LinkedIn. 
> Social media. 
> ASIC (GetEdge). 
> Organisational websites, etc.

## VOI Process
[GitHub Issue 1478](https://github.com/AndreyevLawyers/ALP/issues/1478)
Verification of Identity
- Upload of documents to validate who they are.

## Other Products
- Email chronologies for legal cases. Core data extraction.
- Interactive display
- Document review. (FYI integration)
- Portal for other mid-large law firms.
- Data analysis
