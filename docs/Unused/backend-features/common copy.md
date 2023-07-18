# Common Controllers 
279
*****
# Active Campaign
## Active Campaign Controller
### UnsubscribeActiveCampaign
Unsubscribes a contact from ActiveCampaign.
- **Endpoint:** `POST /api/activecampaign/{id}/unsubscribe`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact to unsubscribe.
- **Request Body:**
```json
{
  "Reason": "string"
}
```
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: None

### GetActiveCampaignStatusbyContactId
Retrieves the ActiveCampaign subscription status for a contact based on their ID by calling the [GetActiveCampaignContactbyContactId](#getactivecampaigncontactbycontactid)
- **Endpoint:** `GET /api/activecampaign/status/{id}`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**:
```json
{
  "AcStatus": "0",
  "Id":123 //contact id
}
```

### GetActiveCampaignActivitybyId
Retrieves the ActiveCampaign activity by ID for testing purposes.
- **Endpoint:** `GET /api/activecampaign/{id}/test`
- **Permission:** Authorized
- **Parameters:**
  - `id` (string): The ID of the activity.
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: 
```
success
```

### GetActiveCampaignContactbyContactId
Retrieves the ActiveCampaign contact by their ID.
- **Endpoint:** `GET /api/activecampaign/{id}`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**:
```json
{
  "AcStatus": "0",
  "Id":123 //contact id
}
```
### GetActiveCampaignActivitiesByContactId
Retrieves the ActiveCampaign activities for a contact based on their ID.
- **Endpoint:** `GET /api/activecampaign/{id}/activities`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: 
```json
{
    "campaigns": [
        {
            <!--Info for Campaign No.1-->
        };
        {
            <!--Info for Campaign No.2-->
        };
        {
            <!--Info for Campaign No.3-->
        }
    ]
    "meta": {
        "total": "3"
    }
}
```

::: details Detailed Example
```json
{
    "campaigns": [
        {
            "type": "single",
            "userid": "2",
            "segmentid": "0",
            "bounceid": "-1",
            "realcid": "0",
            "sendid": "1",
            "threadid": "0",
            "seriesid": "0",
            "formid": "0",
            "basetemplateid": "13b1432dc41b75dda9ff86d84a8593d2b2b9419f",
            "basemessageid": "0",
            "addressid": "3",
            "source": "web",
            "name": "Newsletter 10 October 2017",
            "cdate": "2017-10-09T10:11:22+10:30",
            "mdate": "2017-10-10T14:51:56+10:30",
            "sdate": "2017-10-10T14:51:55+10:30",
            "ldate": "2017-10-10T15:01:54+10:30",
            "send_amt": "2304",
            "total_amt": "2304",
            "opens": "1177",
            "uniqueopens": "664",
            "linkclicks": "180",
            "uniquelinkclicks": "136",
            "subscriberclicks": "133",
            "forwards": "0",
            "uniqueforwards": "0",
            "hardbounces": "34",
            "softbounces": "1",
            "unsubscribes": "6",
            "unsubreasons": "3",
            "updates": "0",
            "socialshares": "0",
            "replies": "0",
            "uniquereplies": "0",
            "status": "5",
            "public": "1",
            "mail_transfer": "1",
            "mail_send": "1",
            "mail_cleanup": "1",
            "mailer_log_file": "0",
            "tracklinks": "mime",
            "tracklinksanalytics": "0",
            "trackreads": "1",
            "trackreadsanalytics": "1",
            "analytics_campaign_name": "Newsletter 10 October 2017",
            "tweet": "0",
            "facebook": "0",
            "survey": "",
            "embed_images": "0",
            "htmlunsub": "0",
            "textunsub": "0",
            "htmlunsubdata": null,
            "textunsubdata": null,
            "recurring": "day1",
            "willrecur": "0",
            "split_type": "",
            "split_content": "0",
            "split_offset": "0",
            "split_offset_type": "",
            "split_winner_messageid": "0",
            "split_winner_awaiting": "0",
            "responder_offset": "0",
            "responder_type": "subscribe",
            "responder_existing": "0",
            "reminder_field": "sdate",
            "reminder_format": "yyyy-mm-dd",
            "reminder_type": "month_day",
            "reminder_offset": "0",
            "reminder_offset_type": "day",
            "reminder_offset_sign": "+",
            "reminder_last_cron_run": null,
            "activerss_interval": "day1",
            "activerss_url": null,
            "activerss_items": "10",
            "ip4": "996418221",
            "laststep": "result",
            "managetext": "0",
            "schedule": "0",
            "scheduleddate": null,
            "waitpreview": "0",
            "deletestamp": null,
            "replysys": "0",
            "created_timestamp": "2019-11-13 14:27:25",
            "updated_timestamp": "2023-06-08 21:56:34",
            "created_by": null,
            "updated_by": null,
            "ip": "0",
            "series_send_lock_time": null,
            "can_skip_approval": "0",
            "use_quartz_scheduler": "0",
            "verified_opens": "1170",
            "verified_unique_opens": "653",
            "segmentname": "",
            "has_predictive_content": "0",
            "message_id": "3",
            "screenshot": "//andreyevlawyerspty.img-us3.com/_screenshot_/1ba12a3443d55226cf9b32ef88d37c604b0edd35.png",
            "campaign_message_id": "1",
            "ed_version": "2",
            "links": {
                "user": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/user",
                "automation": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/automation",
                "campaignMessage": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/campaignMessage",
            "campaignMessages": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/campaignMessages",
                "links": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/links",
                "aggregateRevenues": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/aggregateRevenues",
                "segment": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/segment",
                "campaignLists": "https://andreyevlawyerspty.api-us1.com/api/3/campaigns/1/campaignLists"
            },
            "id": "1",
            "user": "2",
            "automation": null
        },
        {
            <!--Info for Campaign No.2-->
        }, 
        {
            <!--Info for Campaign No.3-->
        }, 
        {
            <!--Info for Campaign No.4-->
        }
    ]
    "meta": {
        "total": "4"
    }
}
```
:::

### FetchActiveCampaignIdByEmail
Fetches the ActiveCampaign ID for a contact based on their email.
- **Endpoint:** `GET /api/activecampaign/email/{email}`
- **Permission:** Authorized
- **Parameters:**
  - `email` (string): The email address of the contact.
- **Response Codes**: 
  - HTTP 200 OK
  - HTTP 400 Bad Request
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: 
```json
{
    "result_code": 1,
    "result_message": "Success: Something is returned",
    "result_output": "json",
    "data": {<!--Info of Subscriber-->},
    "isSuccessful": true
}
```
::: details Detailed Example:
```json
{
    "result_code": 1,
    "result_message": "Success: Something is returned",
    "result_output": "json",
    "data": {
        "id": "220",
        "subscriberid": "220",
        "listid": "1",
        "formid": "0",
        "seriesid": "0",
        "sdate": "2017-10-09 14:27:43",
        "udate": "2023-03-13 21:53:29",
        "status": "3",
        "responder": "1",
        "sync": "2190",
        "unsubreason": "",
        "unsubcampaignid": "0",
        "unsubmessageid": "0",
        "first_name": "Ronald",
        "last_name": "Martin",
        "ip4_sub": "2130706433",
        "sourceid": "1",
        "sourceid_autosync": "0",
        "ip4_last": "1705411658",
        "ip4_unsub": "0",
        "created_timestamp": "2019-11-13 16:33:34",
        "updated_timestamp": "2023-03-13 21:53:29",
        "created_by": "0",
        "updated_by": "0",
        "listname": "Fortnightly Newsletter",
        "sdate_iso": "2017-10-08T23:57:43-05:00",
        "udate_iso": "2019-03-09T17:27:46-06:00",
        "lid": "1",
        "ip4": "127.0.0.1",
        "a_unsub_date": "2019-03-10",
        "a_unsub_time": "08:57:46",
        "cdate": "2017-10-08 23:57:43",
        "email": "ron_martin@internode.on.net",
        "phone": "",
        "customer_acct_id": "0",
        "customer_acct_name": "",
        "segmentio_id": "",
        "bounced_hard": "1",
        "bounced_soft": "0",
        "bounced_date": "2019-03-09",
        "ip": "0.0.0.0",
        "ua": "",
        "hash": "71e8831e8c10ac12c6352a888b41f10f",
        "socialdata_lastcheck": "0000-00-00 00:00:00",
        "email_local": "",
        "email_domain": "internode.on.net",
        "sentcnt": "33",
        "rating": "16",
        "rating_tstamp": "2018-12-09",
        "gravatar": "1",
        "deleted": "0",
        "anonymized": "0",
        "adate": "2023-07-02 23:02:21",
        "edate": "0000-00-00 00:00:00",
        "deleted_at": "0000-00-00 00:00:00",
        "created_utc_timestamp": "2018-10-01 20:44:28",
        "updated_utc_timestamp": "2023-03-13 21:53:29",
        "email_empty": "0",
        "mpp_tracking": "0",
        "name": "Ronald Martin",
        "lists": {
            "1": {
                "id": "221",
                "subscriberid": "220",
                "listid": "1",
                "formid": "0",
                "seriesid": "0",
                "sdate": "2017-10-09 14:27:43",
                "udate": "2019-03-10 08:57:46",
                "status": "3",
                "responder": "1",
                "sync": "2190",
                "unsubreason": "",
                "unsubcampaignid": "0",
                "unsubmessageid": "0",
                "first_name": "Ronald",
                "last_name": "Martin",
                "ip4_sub": "2130706433",
                "sourceid": "1",
                "sourceid_autosync": "0",
                "ip4_last": "1705411658",
                "ip4_unsub": "0",
                "created_timestamp": "2019-08-14 16:08:38",
                "updated_timestamp": "2019-08-14 16:08:38",
                "created_by": null,
                "updated_by": null,
                "listname": "Fortnightly Newsletter",
                "sdate_iso": "2017-10-08T23:57:43-05:00",
                "udate_iso": "2019-03-09T17:27:46-06:00"
            }
        },
        "listslist": "1",
        "fields": {
            "1": {
                "id": "1",
                "title": "Orig Subscribed Date",
                "descript": null,
                "type": "date",
                "isrequired": "0",
                "perstag": "ORIG_SUBSCRIBED_DATE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "1969-12-31",
                "relid": "0",
                "dataid": "1524",
                "element": "date",
                "tag": "%ORIG_SUBSCRIBED_DATE%"
            },
            "2": {
                "id": "2",
                "title": "Postcode",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "POSTCODE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "5068",
                "relid": "0",
                "dataid": "1525",
                "element": "text",
                "tag": "%POSTCODE%"
            },
            "3": {
                "id": "3",
                "title": "Country",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "COUNTRY",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "Australia",
                "relid": "0",
                "dataid": "1528",
                "element": "text",
                "tag": "%COUNTRY%"
            },
            "4": {
                "id": "4",
                "title": "State",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "STATE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "SA",
                "relid": "0",
                "dataid": "1529",
                "element": "text",
                "tag": "%STATE%"
            },
            "5": {
                "id": "5",
                "title": "Job or profession",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "JOB_OR_PROFESSION",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "Small businessperson",
                "relid": "0",
                "dataid": "1526",
                "element": "text",
                "tag": "%JOB_OR_PROFESSION%"
            },
            "6": {
                "id": "6",
                "title": "Seminar attendee",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "SEMINAR_ATTENDEE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "",
                "relid": "0",
                "dataid": "1527",
                "element": "text",
                "tag": "%SEMINAR_ATTENDEE%"
            },
            "7": {
                "id": "7",
                "title": "Organisation",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "ORGANISATION",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "Enter company name",
                "relid": "0",
                "dataid": "1530",
                "element": "text",
                "tag": "%ORGANISATION%"
            },
            "8": {
                "id": "8",
                "title": "I am interested in news about:",
                "descript": null,
                "type": "radio",
                "isrequired": "0",
                "perstag": "I_AM_INTERESTED_IN_NEWS_ABOUT",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": "",
                "relid": "0",
                "dataid": "37164",
                "element": "radio",
                "options": [
                    {
                        "name": "option 1",
                        "value": "option 1",
                        "isdefault": "0"
                    },
                    {
                        "name": "option 2",
                        "value": "option 2",
                        "isdefault": "0"
                    },
                    {
                        "name": "option 3",
                        "value": "option 3",
                        "isdefault": "0"
                    },
                    {
                        "name": "",
                        "value": "",
                        "isdefault": "0"
                    },
                    {
                        "name": "Business owners and their families",
                        "value": "Business owners and their families",
                        "isdefault": "0"
                    },
                    {
                        "name": "Business philosophy",
                        "value": "Business philosophy",
                        "isdefault": "0"
                    },
                    {
                        "name": "Estate planning",
                        "value": "Estate planning",
                        "isdefault": "0"
                    },
                    {
                        "name": "Farmers and their families",
                        "value": "Farmers and their families",
                        "isdefault": "0"
                    },
                    {
                        "name": "Investors and their families",
                        "value": "Investors and their families",
                        "isdefault": "0"
                    },
                    {
                        "name": "Superannuation",
                        "value": "Superannuation",
                        "isdefault": "0"
                    },
                    {
                        "name": "Tax law updates and strategies",
                        "value": "Tax law updates and strategies",
                        "isdefault": "0"
                    }
                ],
                "selected": "",
                "tag": "%I_AM_INTERESTED_IN_NEWS_ABOUT%"
            },
            "10": {
                "id": "10",
                "title": "Street Address",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "STREET_ADDRESS",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%STREET_ADDRESS%"
            },
            "11": {
                "id": "11",
                "title": "Suburb",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "SUBURB",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%SUBURB%"
            },
            "12": {
                "id": "12",
                "title": "Phone",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "CUSTOMPHONE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%CUSTOMPHONE%"
            },
            "13": {
                "id": "13",
                "title": "Title",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "TITLE",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%TITLE%"
            },
            "14": {
                "id": "14",
                "title": "Specific Interest",
                "descript": null,
                "type": "text",
                "isrequired": "0",
                "perstag": "SPECIFIC_INTEREST",
                "defval": null,
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "0",
                "cdate": null,
                "udate": null,
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%SPECIFIC_INTEREST%"
            },
            "9": {
                "id": "9",
                "title": "Journey Start Date",
                "descript": "",
                "type": "date",
                "isrequired": "0",
                "perstag": "JOURNEY_START_DATE",
                "defval": "",
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "1",
                "cdate": "2017-10-12 00:33:16",
                "udate": "2017-10-12 00:33:16",
                "created_timestamp": "2019-11-13 14:27:32",
                "updated_timestamp": "2019-11-13 14:27:32",
                "created_by": null,
                "updated_by": null,
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "date",
                "tag": "%JOURNEY_START_DATE%"
            },
            "15": {
                "id": "15",
                "title": "Subsegment",
                "descript": "",
                "type": "text",
                "isrequired": "0",
                "perstag": "SUBSEGMENT",
                "defval": "",
                "show_in_list": "0",
                "rows": "0",
                "cols": "0",
                "visible": "1",
                "service": "",
                "ordernum": "2",
                "cdate": "2021-02-28 23:03:49",
                "udate": "2021-02-28 23:03:49",
                "created_timestamp": "2021-02-28 23:03:49",
                "updated_timestamp": "2021-02-28 23:03:49",
                "created_by": "1",
                "updated_by": "1",
                "val": null,
                "relid": "0",
                "dataid": "0",
                "element": "text",
                "tag": "%SUBSEGMENT%"
            }
        },
        "actions": [
            {
                "text": "Subscribed to list - Fortnightly Newsletter",
                "type": "subscribe",
                "tstamp": "2019-03-09T17:27:46-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter (10 March 2019)",
                "type": "email",
                "tstamp": "2019-03-09T17:27:45-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter Draft",
                "type": "email",
                "tstamp": "2019-02-02T17:40:55-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter 20 January 2019 (resend)",
                "type": "email",
                "tstamp": "2019-01-20T18:44:10-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter 20 January 2019",
                "type": "email",
                "tstamp": "2019-01-19T17:44:04-06:00"
            },
            {
                "text": "Sent Campaign - 2018 EOY Newsletter",
                "type": "email",
                "tstamp": "2018-12-21T18:32:46-06:00"
            },
            {
                "text": "Contact clicked a link  in Newsletter 9 December 2018",
                "type": "click",
                "tstamp": "2018-12-09T06:54:01-06:00"
            },
            {
                "text": "Contact opened campaign - Newsletter 9 December 2018",
                "type": "open",
                "tstamp": "2018-12-09T06:54:01-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter 9 December 2018",
                "type": "email",
                "tstamp": "2018-12-08T17:42:34-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter 27 November 2018",
                "type": "email",
                "tstamp": "2018-11-26T17:45:23-06:00"
            },
            {
                "text": "Sent Campaign - Newsletter 10 October 2018",
                "type": "email",
                "tstamp": "2018-10-09T18:48:51-05:00"
            },
            {
                "text": "Sent Campaign - Newsletter 16 September 2018",
                "type": "email",
                "tstamp": "2018-09-17T19:10:38-05:00"
            },
            {
                "text": "Sent Campaign - Newsletter 2 September 2018",
                "type": "email",
                "tstamp": "2018-09-01T18:34:14-05:00"
            },
            {
                "text": "Contact clicked a link  in Newsletter 19 August 2018",
                "type": "click",
                "tstamp": "2018-08-19T09:39:16-05:00"
            },
            {
                "text": "Contact clicked a link  in Newsletter 19 August 2018",
                "type": "click",
                "tstamp": "2018-08-19T09:31:21-05:00"
            },
            {
                "text": "Contact clicked a link  in Newsletter 19 August 2018",
                "type": "click",
                "tstamp": "2018-08-19T09:24:07-05:00"
            },
            {
                "text": "Contact clicked a link  in Newsletter 19 August 2018",
                "type": "click",
                "tstamp": "2018-08-19T09:16:42-05:00"
            },
            {
                "text": "Contact opened campaign - Newsletter 19 August 2018",
                "type": "open",
                "tstamp": "2018-08-19T09:16:42-05:00"
            },
            {
                "text": "Sent Campaign - Newsletter 19 August 2018",
                "type": "email",
                "tstamp": "2018-08-18T18:45:15-05:00"
            },
            {
                "text": "Sent Campaign - Newsletter 8/8/2018",
                "type": "email",
                "tstamp": "2018-08-07T21:35:54-05:00"
            }
        ],
        "automation_history": [
            {
                "name": "Completed Link Action for https://andreyev.com.au/2018/11/30/just-casual/ in "Newsletter 9 December 2018"",
                "adddate": "2018-12-09 06:54:01",
                "id": "197",
                "messages": []
            },
            {
                "name": "Completed Link Action for https://andreyev.com.au/2017/11/07/are-trusts-a-tax-loophole-exploited-by-the-wealthy/ in "Newsletter 7 November 2017"",
                "adddate": "2017-11-06 18:30:01",
                "id": "133",
                "messages": []
            }
        ],
        "campaign_history": [
            {
                "id": "191",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 9 December 2018",
                "sdate": "2018-12-09 08:10:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2018-12-09 06:54:01",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "09/12/2018 21:24"
                    },
                    {
                        "tstamp": "2018-12-09 06:54:01",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "09/12/2018 21:24"
                    }
                ],
                "links": [
                    {
                        "link": "https://andreyev.com.au/2018/11/30/just-casual/",
                        "name": "https://andreyev.com.au/2018/11/30/just-casual/",
                        "times": "1",
                        "tstamp": "2018-12-09 06:54:01",
                        "tstamp_settings": "09/12/2018 21:24"
                    }
                ],
                "forwards": []
            },
            {
                "id": "173",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 19 August 2018",
                "sdate": "2018-08-19 09:09:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2018-08-19 09:16:42",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "19/08/2018 23:46"
                    },
                    {
                        "tstamp": "2018-08-19 09:16:42",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "19/08/2018 23:46"
                    }
                ],
                "links": [
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=45eb823c99&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-08-19 09:39:16",
                        "tstamp_settings": "20/08/2018 00:09"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=7dfab656a6&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-08-19 09:31:21",
                        "tstamp_settings": "20/08/2018 00:01"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=fff7af87aa&e=9ba707decc",
                        "name": "",
                        "times": "2",
                        "tstamp": "2018-08-19 09:24:07",
                        "tstamp_settings": "19/08/2018 23:54"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=3f9905aaca&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-08-19 09:16:42",
                        "tstamp_settings": "19/08/2018 23:46"
                    }
                ],
                "forwards": []
            },
            {
                "id": "128",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 6 March 2018",
                "sdate": "2018-03-06 11:30:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2018-03-06 07:27:16",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "06/03/2018 21:57"
                    },
                    {
                        "tstamp": "2018-03-06 07:27:16",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "06/03/2018 21:57"
                    }
                ],
                "links": [
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=ffdb4d5e1c&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-03-06 07:55:30",
                        "tstamp_settings": "06/03/2018 22:25"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=d6e31d54e5&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-03-06 07:37:53",
                        "tstamp_settings": "06/03/2018 22:07"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=b7d82b6d4b&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2018-03-06 07:27:16",
                        "tstamp_settings": "06/03/2018 21:57"
                    }
                ],
                "forwards": []
            },
            {
                "id": "109",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 5 December 2017",
                "sdate": "2017-12-05 08:05:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2017-12-05 00:51:34",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "05/12/2017 15:21"
                    },
                    {
                        "tstamp": "2017-12-05 00:51:34",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "05/12/2017 15:21"
                    }
                ],
                "links": [
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=997ec6d9f6&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2017-12-05 00:54:08",
                        "tstamp_settings": "05/12/2017 15:24"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=9f48bb9ddb&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2017-12-05 00:51:34",
                        "tstamp_settings": "05/12/2017 15:21"
                    }
                ],
                "forwards": []
            },
            {
                "id": "114",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 21 November 2017",
                "sdate": "2017-11-21 08:15:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2017-11-21 23:31:55",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "22/11/2017 14:01"
                    },
                    {
                        "tstamp": "2017-11-21 23:31:55",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "22/11/2017 14:01"
                    }
                ],
                "links": [
                    {
                        "link": "http://andreyev.com.au/2017/11/20/yes-testamentary-trust/",
                        "name": "",
                        "times": "1",
                        "tstamp": "2017-11-21 23:37:03",
                        "tstamp_settings": "22/11/2017 14:07"
                    },
                    {
                        "link": "https://futurecrunch.us8.list-manage.com/track/click?u=6321feeb3ffd42b0e44a01616&id=fc263dd318&e=9ba707decc",
                        "name": "",
                        "times": "1",
                        "tstamp": "2017-11-21 23:31:55",
                        "tstamp_settings": "22/11/2017 14:01"
                    }
                ],
                "forwards": []
            },
            {
                "id": "110",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 7 November 2017",
                "sdate": "2017-11-07 08:07:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2017-11-06 18:29:30",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "07/11/2017 08:59"
                    },
                    {
                        "tstamp": "2017-11-06 18:29:30",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "07/11/2017 08:59"
                    }
                ],
                "links": [
                    {
                        "link": "https://andreyev.com.au/2017/11/07/are-trusts-a-tax-loophole-exploited-by-the-wealthy/",
                        "name": "https://andreyev.com.au/2017/11/07/are-trusts-a-tax-loophole-exploited-by-the-wealthy/",
                        "times": "1",
                        "tstamp": "2017-11-06 18:30:01",
                        "tstamp_settings": "07/11/2017 09:00"
                    }
                ],
                "forwards": []
            },
            {
                "id": "62",
                "listid": "1",
                "listname": "Fortnightly Newsletter",
                "campaignname": "Newsletter 24 October 2017",
                "sdate": "2017-10-24 09:13:00",
                "email": "ron_martin@internode.on.net",
                "subscriberid": "220",
                "reads": [
                    {
                        "tstamp": "2017-10-24 00:03:36",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "24/10/2017 14:33"
                    },
                    {
                        "tstamp": "2017-10-24 00:03:36",
                        "email": "ron_martin@internode.on.net",
                        "times": "1",
                        "tstamp_settings": "24/10/2017 14:33"
                    }
                ],
                "links": [
                    {
                        "link": "https://andreyev.com.au/2017/09/13/self-managed-superannuation-fund-investment-rules/",
                        "name": "",
                        "times": "1",
                        "tstamp": "2017-10-24 00:03:36",
                        "tstamp_settings": "24/10/2017 14:33"
                    }
                ],
                "forwards": []
            }
        ],
        "bounces": {
            "mailing": [
                {
                    "id": "469",
                    "email": "ron_martin@internode.on.net",
                    "subscriberid": "220",
                    "listid": "1",
                    "campaignid": "199",
                    "messageid": "206",
                    "tstamp": "2019-03-09 14:30:00",
                    "type": "hard",
                    "code": "5.0.0",
                    "counted": "1",
                    "reason": "undefined status",
                    "created_timestamp": "2019-11-13 14:27:00",
                    "updated_timestamp": "2019-11-13 14:27:00",
                    "created_by": null,
                    "updated_by": null,
                    "email_source": "0",
                    "tstamp_iso": "2019-03-09T00:00:00-06:00"
                }
            ],
            "mailings": 1,
            "responder": [],
            "responders": 0
        },
        "bouncescnt": 1,
        "tags": [
            "CampaignMonitor",
            "Superannuation",
            "Business owner",
            "Individual",
            "Employment",
            "Capital Raising",
            "Estate Planning",
            "Free Downloads",
            "Succession",
            "Trust",
            "Company Directors",
            "BFA",
            "PPSR",
            "SMSF",
            "Contract",
            "Wealthy",
            "Tax",
            "Testamentary Trusts",
            "Employer",
            "Targeted Campaign",
            "6",
            "1",
            "2",
            "5",
            "7",
            "8",
            "15",
            "65"
        ],
        "orgid": "0",
        "orgname": "",
        "result_code": 1,
        "result_message": "Success: Something is returned",
        "result_output": "json"
    },
    "isSuccessful": true
}
```
:::

*****
# Emails
## Contact Email Controller
### GetById
Retrieves a specific email for a contact by its ID.
- **Endpoint:** `GET /api/contacts/{id}/emails/{emailId}`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
  - `emailId` (integer): The ID of the email.
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**:
```json
{
  // Email data fields
}
```
### GetList
Retrieves a paginated list of emails for a contact.
- **Endpoint:** `GET /api/contacts/{id}/emails`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
  - `filters` (query parameters): Optional filters to apply to the email list.
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**:
```json
{
  "data": [
    {
      // Email list item data fields
    },
    ...
  ],
  "totalCount": 0,
  "pageSize": 0,
  "currentPage": 0,
  "totalPages": 0
}
```
### GetAttachmentLinkById
Retrieves a signed link for downloading a specific attachment of an email for a contact.
- **Endpoint:** `GET /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
  - `emailId` (integer): The ID of the email.
  - `attachmentId` (integer): The ID of the attachment.
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**:
```json
{
  // Email attachment link data fields
}
```
### DownloadAttachment
Downloads a specific attachment of an email for a contact.
- **Endpoint:** `GET /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}/download`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
  - `emailId` (integer): The ID of the email.
  - `attachmentId` (integer): The ID of the attachment.
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden
- **Response Body**: The attachment file content.

### ImportAttachmentToDocuments
Imports a specific attachment of an email for a contact to their documents.
- **Endpoint:** `POST /api/contacts/{id}/emails/{emailId}/attachments/{attachmentId}/import`
- **Permission:** Authorized
- **Parameters:**
  - `id` (integer): The ID of the contact.
  - `emailId` (integer): The ID of the email.
  - `attachmentId` (integer): The ID of the attachment.
- **Response Codes**:
  - HTTP 200 OK
  - HTTP 401 Unauthorized
  - HTTP 403 Forbidden

## Email Controller
### Send
Sends an email.
- **Endpoint:** `POST /api/emails`
- **Permission:** Authorized
- **Request Body:**
  - `input` (form data): The input data for sending the email.
  - `files` (form data): Optional attachment files to include in the email.
- **Response:** None
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### GetById
Retrieves an email by its ID.
- **Endpoint:** `GET /api/emails/{id}`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `id` (path parameter): The ID of the email to retrieve.
- **Response:** The `EmailDto` object representing the retrieved email.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
  - HTTP 404 Not Found (If the email with the specified ID does not exist)
### GetInboxList
Retrieves a paginated list of emails in the inbox.
- **Endpoint:** `GET /api/emails/inbox`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `filters` (query parameter): Optional filters to apply to the email list.
    - `pageNumber` (optional): The page number of the results to retrieve (default: 1).
    - `pageSize` (optional): The number of emails per page (default: 20).
    - Other filter parameters as needed.
- **Response:** The `PaginatedDto<EmailListDto>` object representing the paginated list of emails in the inbox.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### GetSentList
Retrieves a paginated list of sent emails.
- **Endpoint:** `GET /api/emails/sent`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `filters` (query parameter): Optional filters to apply to the email list.
    - `pageNumber` (optional): The page number of the results to retrieve (default: 1).
    - `pageSize` (optional): The number of emails per page (default: 20).
    - Other filter parameters as needed.
- **Response:** The `PaginatedDto<EmailListDto>` object representing the paginated list of sent emails.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### Reply
Sends a reply to an email.
- **Endpoint:** `POST /api/emails/reply`
- **Permission:** Can view email (Authorization required)
- **Request Body:**
  - `input` (form data): The input data for the reply email.
    - Include necessary fields for the reply email, such as recipient, subject, body, etc.
  - `files` (form data): Optional attachments to include with the reply email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ReplyAll
Sends a reply to all recipients of an email.
- **Endpoint:** `POST /api/emails/replyAll`
- **Permission:** Can view email (Authorization required)
- **Request Body:**
  - `input` (form data): The input data for the reply-all email.
    - Include necessary fields for the reply-all email, such as subject, body, etc.
  - `files` (form data): Optional attachments to include with the reply-all email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### Forward
Forwards an email to another recipient(s).
- **Endpoint:** `POST /api/emails/forward`
- **Permission:** Can view email (Authorization required)
- **Request Body:**
  - `input` (form data): The input data for the forward email.
    - Include necessary fields for the forward email, such as subject, body, etc.
  - `files` (form data): Optional attachments to include with the forward email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### MarkEmailAsReadStatusForMe
Marks an email as read or unread for the current user.
- **Endpoint:** `GET /api/emails/{emailId}/markEmailAsRead`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (path): The ID of the email to mark as read.
  - `isRead` (query): A boolean value indicating whether to mark the email as read (`true`) or unread (`false`).
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### MarkSelectEmailAsRead
Marks multiple emails as read or unread.
- **Endpoint:** `POST /api/emails/markSelectEmailAsRead`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (form): A list of email IDs to mark as read.
  - `isRead` (form): A boolean value indicating whether to mark the emails as read (`true`) or unread (`false`).
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ChangeSelectedEmailAsPinUnpinStatus
Changes the pin/unpin status of multiple emails.
- **Endpoint:** `POST /api/emails/changeSelectedEmailAsPinUnpinStatus`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (form): A list of email IDs to change the pin/unpin status.
  - `isPin` (form): A boolean value indicating whether to pin (`true`) or unpin (`false`) the emails.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### changeSelectedEmailFlag
Changes the flag status of multiple emails.
- **Endpoint:** `POST /api/emails/changeSelectedEmailFlag`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (form): A list of email IDs to change the flag status.
  - `isFlag` (form): A boolean value indicating whether to flag (`true`) or unflag (`false`) the emails.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ChangeSelectedEmailHideUnhide
Changes the hide status of multiple emails.
- **Endpoint:** `POST /api/emails/ChangeSelectedEmailHideUnhide`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (form): A list of email IDs to change the hide status.
  - `isHide` (form): A boolean value indicating whether to hide (`true`) or unhide (`false`) the emails.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ChangeEmailPinUnpinStatus
Changes the pin/unpin status of an email.
- **Endpoint:** `GET /api/emails/{emailId}/changeEmailPinUnpinStatus`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (route): The ID of the email to change the pin/unpin status.
  - `isPin` (query): A boolean value indicating whether to pin (`true`) or unpin (`false`) the email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ChangeEmailHideStatus
Changes the hide status of an email.
- **Endpoint:** `GET /api/emails/{emailId}/changeEmailHideStatus`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (route): The ID of the email to change the hide status.
  - `isHide` (query): A boolean value indicating whether to hide (`true`) or unhide (`false`) the email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### changeEmailFlagStatus
Changes the flag status of an email.
- **Endpoint:** `GET /api/emails/{emailId}/changeEmailFlagStatus`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (route): The ID of the email to change the flag status.
  - `isFlag` (query): A boolean value indicating whether to flag (`true`) or unflag (`false`) the email.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### GetAttachmentLinkById
Retrieves a signed link for downloading an email attachment.
- **Endpoint:** `GET /api/emails/{emailId}/attachments/{attachmentId}`
- **Permission:** Can view email (Authorization required)
- **Parameters:**
  - `emailId` (route): The ID of the email containing the attachment.
  - `attachmentId` (route): The ID of the attachment to retrieve the link for.
- **Response:** An `EmailAttachmentLinkDto` object representing the signed link for downloading the attachment.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (If the request is invalid)
  - HTTP 401 Unauthorized (If not authenticated)
  - HTTP 403 Forbidden (If not authorized)
### ExportEmailToPdfController
Exports an email as a PDF document.
- **Endpoint:** `POST /api/emails/{matterId}/{emailId}/exportMatterEmailTopdf`
- **Permission:** Authorized
- **Parameters:**
  - `matterId` (route): The ID of the matter associated with the email.
  - `emailId` (route): The ID of the email to export as PDF.
- **Response:** A string representing the path or URL of the exported PDF document.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (If the request is invalid)
### ExportMatterEmailsToPdfController
Exports multiple emails associated with a matter as a single PDF document.
- **Endpoint:** `POST /api/emails/{matterId}/exportMatterEmailsToPdf`
- **Permission:** Authorized
- **Parameters:**
  - `matterId` (route): The ID of the matter associated with the emails.
- **Response:** A string representing the path or URL of the exported PDF document.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (If the request is invalid)
### ExportContactEmailToPdfController
Exports a single email associated with a contact as a PDF document.
- **Endpoint:** `POST /api/emails/{contactId}/{emailId}/exportContactEmailToPdf`
- **Permission:** Authorized
- **Parameters:**
  - `contactId` (route): The ID of the contact associated with the email.
  - `emailId` (route): The ID of the email to export.
- **Response:** A string representing the path or URL of the exported PDF document.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (If the request is invalid)
### ExportContactEmailsToPdfController
Exports multiple emails associated with a contact as a single PDF document.
- **Endpoint:** `POST /api/emails/{contactId}/exportContactEmailsToPdf`
- **Permission:** Authorized
- **Parameters:**
  - `contactId` (route): The ID of the contact associated with the emails.
- **Response:** A string representing the path or URL of the exported PDF document.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (If the request is invalid)
### DownloadAttachment
Downloads an email attachment.
- **Endpoint:** `GET /api/emails/{emailId}/attachments/{attachmentId}/download`
- **Parameters:**
  - `emailId` (route): The ID of the email containing the attachment.
  - `attachmentId` (route): The ID of the attachment to download.
- **Response:** The attachment file as a downloadable file stream.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 404 Not Found (If the email or attachment is not found)
### GetEmailGroups
Retrieves a paginated list of email groups.
- **Endpoint:** `GET /api/emails/emailgroup`
- **Parameters:**
  - `filters` (query): Optional query parameters for pagination (e.g., page number, page size).
- **Response:** A paginated list of email groups.
- **Response Codes:**
  - HTTP 200 OK
### Create
Creates a new email group.
- **Endpoint:** `POST /api/emails/createemailgroup`
- **Permissions:** `Permissions.CommonTypeCreate`
- **Request Body:** The email group input data.
- **Response:** The created email group.
- **Response Codes:**
  - HTTP 201 Created
  - HTTP 400 Bad Request (if the request body is invalid)
  - HTTP 401 Unauthorized (if the user is not authorized)
  - HTTP 403 Forbidden (if the user does not have the required permission)
### EmailGroupGetById
Retrieves an email group by its ID.
- **Endpoint:** `GET /api/emails/{id}/emailgroup`
- **Parameters:**
  - `id` (route): The ID of the email group to retrieve.
- **Permissions:** `Permissions.CommonTypeView`
- **Response:** The email group with the specified ID.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 401 Unauthorized (if the user is not authorized)
  - HTTP 403 Forbidden (if the user does not have the required permission)
  - HTTP 404 Not Found (if the email group with the specified ID is not found)
### Update
Updates an existing email group.
- **Endpoint:** `PUT /api/emails/{id}/emailgroup`
- **Permission:** Requires `CommonTypeEdit` Permission
- **Request Parameters:**
  - `id` (integer, required): The ID of the email group to be updated.
- **Request Body:** The updated email group input data.
- **Response:** The updated email group.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (if the request body is invalid)
  - HTTP 403 Forbidden (if the user does not have the 'CommonTypeEdit' permission)
  - HTTP 404 Not Found (if the email group with the specified ID does not exist)
### Patch
Partially updates an existing email group using JSON Patch.
- **Endpoint:** `PATCH /api/emails/{id}/emailgroup`
- **Permission:** Requires `CommonTypeEdit` Permission
- **Request Parameters:**
  - `id` (integer, required): The ID of the email group to be updated.
- **Request Body:** A JSON Patch document containing the partial updates to the email group.
- **Response:** The updated email group.
- **Response Codes:**
  - HTTP 200 OK
  - HTTP 400 Bad Request (if the request body or patch document is invalid)
  - HTTP 403 Forbidden (if the user does not have the 'CommonTypeEdit' permission)
  - HTTP 404 Not Found (if the email group with the specified ID does not exist)
  - HTTP 409 Conflict (if the patch operation conflicts with an existing email group)
### Delete
Deletes an email group.
- **Endpoint:** `DELETE /api/emails/{id}/emailgroup`
- **Permission:** Requires `CommonTypeDelete` Permission
- **Request Parameters:**
  - `id` (integer, required): The ID of the email group to be deleted.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content
  - HTTP 403 Forbidden (if the user does not have the 'CommonTypeDelete' permission)
  - HTTP 404 Not Found (if the email group with the specified ID does not exist)

## Email Template Controller
### GetList
Retrieve a paginated list of email templates based on the provided filter.
- **Endpoint:** `GET /api/email-templates`
- **Permission:** Authorized
- **Request Parameters:**
  - `filterInput` (object, optional): Filter criteria for the email templates.
- **Response:** A paginated list of `EmailTemplateListDto` objects.
- **Response Codes:**
  - HTTP 200 OK: Successfully retrieved the email template list.
  - HTTP 401 Unauthorized: If the user is not authenticated.
### Create
Create a new email template.
- **Endpoint:** `POST /api/email-templates`
- **Permission:** Authorized
- **Request Body:** `EmailTemplateListInput` object containing the data for the new email template.
- **Response:** The created `EmailTemplateListDto` object.
- **Response Codes:**
  - HTTP 201 Created: Successfully created the email template.
  - HTTP 401 Unauthorized: If the user is not authenticated.
  - HTTP 400 Bad Request: If the request body is invalid.
### Update
Update an existing email template with the specified ID.
- **Endpoint:** `PUT /api/email-templates/{id}`
- **Permission:** Authorized
- **Request Parameters:**
  - `id` (integer, required): The ID of the email template to be updated.
- **Request Body:** `EmailTemplateListInput` object containing the updated data for the email template.
- **Response:** The updated `EmailTemplateListDto` object.
- **Response Codes:**
  - HTTP 200 OK: Successfully updated the email template.
  - HTTP 401 Unauthorized: If the user is not authenticated.
  - HTTP 400 Bad Request: If the request body is invalid.
  - HTTP 404 Not Found: If the email template with the specified ID does not exist.
### Delete
Delete an email template with the specified ID.
- **Endpoint:** `DELETE /api/email-templates/{id}`
- **Permission:** Authorized
- **Request Parameters:**
  - `id` (integer, required): The ID of the email template to be deleted.
- **Response:** None
- **Response Codes:**
  - HTTP 204 No Content: Successfully deleted the email template.
  - HTTP 401 Unauthorized: If the user is not authenticated.
  - HTTP 404 Not Found: If the email template with the specified ID does not exist.
### GetForConflictCheck
Retrieve an email template for conflict check based on the specified matter ID and conflict parties change flag.
- **Endpoint:** `POST /api/email-templates/conflict-check/{matterId}/{conflictPartiesChangeFlag}`
- **Permission:** Authorized
- **Request Parameters:**
  - `matterId` (integer, required): The ID of the matter.
  - `conflictPartiesChangeFlag` (boolean, required): Indicates whether the conflict parties have changed.
- **Response:** The `EmailTemplateDto` object for conflict check.
- **Response Codes:**
  - HTTP 200 OK: Successfully retrieved the email template.
  - HTTP 401 Unauthorized: If the user is not authenticated.
  - HTTP 404 Not Found: If the email template for conflict check is not found.
### GetForDisbursementNotification
Retrieve an email template for disbursement notification based on the specified disbursement ID.
- **Endpoint:** `POST /api/email-templates/disbursement-notification/{disbursementId}`
- **Permission:** Authorized
- **Request Parameters:**
  - `disbursementId` (integer, required): The ID of the disbursement.
- **Response:** The `EmailTemplateDto` object for disbursement notification.
- **Response Codes:**
  - HTTP 200 OK: Successfully retrieved the email template.
  - HTTP 401 Unauthorized: If the user is not authenticated.
  - HTTP 404 Not Found: If the email template for disbursement notification is not found.

## Matter Email Controller
## Organisation Email Controller
## Project Email Controller

*****
# Mail Register
## Incoming Mails Controller
## Outgoing Mails Controller

*****
# Metabase
## Metabase Controller
## Metabase Group Controller

*****
# Metadata
## Dynamic Parameter Controller
## Dynamic Parameter Value Controller
## Entity Dynamic Parameter Controller

*****
# Safe Storage
## Safe Storage Documents Controller
## Safe Storage Document Types Controller
## Safe Storage Sections Controller

*****
# Syntaq
## Syntaq Controller
## Syntaq Form Controller

*****
# Time Tracking
## Matter Component TimeEntry Controller
## Matter TimeEntry Controller
## TimeEntry Controller
## Timer Controller

*****
# Xero Service
## Xero Controller


## ABN Lookup Controller
## AWSS3 Controller
## Bug Report Controller
## Business Area Controller
## Capability Controller
## Industry Category Controller
## Industry SubCategory Controller
## Law Area Controller
## Law SubArea Controller
## Logs Controller
## Notes Controller
## Notification Controller
## Occupation Controller
## Office Controller
## Organisation Type Controller
## Reminder Controller
## Segment Controller
## SharePoint Controller
## Standard Disbursement Controller
## SubCapability Controller
## SubSegment Controller
## Suggestion Controller
## System Info Controller