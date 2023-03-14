# External Services

## Apache Tika

[Apache Tika](https://tika.apache.org/) is an open source library that supports the extraction of document text for a wide variety of document types. It is used by the back end to extract text from documents and emails collected by the system in order to improve the searchability of the files.

In essence, a server instance of Apache Tika has been deployed on Azure using the Docker definition made available by Apache as described [here](https://hub.docker.com/r/apache/tika). This exposes a REST API endpoint which accepts a file and returns the extracted text and other metadata.

We store and associate this extracted text with the documents and/or emails and create a generated column that generates a PostgreSQL `tsvector` of the extracted text. This can then be used in "full text search" style queries that Postgres/Npgsql [supports](https://www.npgsql.org/efcore/mapping/full-text-search.html).

## Active Campaign

### Overview

[Active Campaign](https://www.activecampaign.com/au/) is a marketing manage tool that enable us sent email to clients.
There are two API version are using in their system which are [V1](https://www.activecampaign.com/api/overview.php?err=2) and [V2](https://developers.activecampaign.com/reference#http-methods). 

In our backend, Active Campaign SDK for .net core3.0 above still using v1 API. Main feature still provided by v1. However, some feature cannot found in v1, we have go to v2 restful API. 

Here is the sample code for v1 API: 

```
public async Task<ApiResult> CreateActiveCampaignContact(string email,string first_name, string last_name)
{
    var client = new ActiveCampaignClient(ActiveCampaignKey, ActiveCampaignBaseUrl);
    var result = client.ApiAsync("contact_add", new Dictionary<string, string>
        {
            {"email", email},
            {"first_name", first_name},
            {"last_name", last_name},
            {"p[3]", "1"},
            {"status[3]", "1"},
        });
    return await result;
}

```


If you have to use v2 API which is not supported by SDK, here is the sample code for v1 Restful API:

```


public async Task<JObject> GetActiveCampaignActivitiesByContactId(int id)
{

    var client = new ActiveCampaignClient(ActiveCampaignKey, ActiveCampaignBaseUrl);
    var active_campaign_id = await _context.Contacts.FirstOrDefaultAsync(i => i.Id == id);

    if (active_campaign_id != null)
    {

        var active_campaign_id_str = active_campaign_id.ActiveCampaignId.ToString();
        var parameters = new Dictionary<string, string>();
        parameters["contact"] = active_campaign_id_str;
        parameters["include"] = "notes,notes.user,reference,reference.campaign,reference.contactList,reference.contactList.list,reference.link,reference.list,reference.log,reference.log.campaign,reference.log.contact,reference.log.message.name,reference.message.name,reference.note";
        parameters["orders[tstamp]"] = "desc";
        parameters["limit"] = "100";
        var par = new FormUrlEncodedContent(parameters);

        var ActiveCampaignUrl = ActiveCampaignBaseUrl + "/api/3/activities?" + par.ReadAsStringAsync().Result;

        using (var httpClient = new HttpClient())
        {
            using (var request = new HttpRequestMessage(new HttpMethod("GET"), ActiveCampaignUrl))
            {

                request.Headers.Add("API-TOKEN", ActiveCampaignKey);
                request.Headers.TryAddWithoutValidation("Accept", "application/json");

                var response = await httpClient.SendAsync(request);


                //Console.WriteLine(response);
                string responseBody = await response.Content.ReadAsStringAsync();
                var result = JObject.Parse(responseBody);

                return result;
            }
        }

    }

    else return null;

}

```

Here is the tool that you can convert resrful api request (curl) to c#. [curl to C# converter](https://curl.olsh.me/). Build httpClient send request to Extranal API.


### Where

- While Creat the contact, checkbox is used for user allow the contact being added to Active Campaign or not. 

![Create Contact](/create_contact_v1.png)

- Check the contact subscribtion status. Just jump into the conatct info page.

![Active Campaign Status](/contact_active_campaingn_status.png)

- If the conact is subscribed, click the button to unsubsribe.

![Unsbuscribe](/contact_active_campaign_unsubscribe.png)

- Any Change on Email, First Name, Last Name will automaticly synced to Active Campaign Serve.

- Check Active Campaingn Activities, go the Markketing tab, All recent activieties will shown on the list.
![Active Campaingn Activities](/contact_active_campaign_marketing.png)


## Xero

TBA

