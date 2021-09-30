const minor = {
    "page": {
        "id": "nlxv32btr6v7",
        "name": "Instructure",
        "url": "https://status.instructure.com",
        "time_zone": "America/Denver",
        "updated_at": "2021-09-19T02:23:30.424-06:00"
    },
    "components": [
        {
            "id": "b13yz5g2cw10",
            "name": "API",
            "status": "operational",
            "created_at": "2014-05-03T01:22:07.286Z",
            "updated_at": "2014-05-14T20:34:44.470Z",
            "position": 1,
            "description": "Access to Telephony Services",
            "showcase": false,
            "start_date": null,
            "group_id": null,
            "page_id": "208q92hckwws",
            "group": false,
            "only_show_if_degraded": false
          },
          {
            "id": "9397cnvk62zn",
            "name": "Management Portal",
            "status": "degraded_performance",
            "created_at": "2014-05-03T01:22:07.286Z",
            "updated_at": "2014-05-14T20:34:44.470Z",
            "position": 2,
            "description": "Access to Telephony Services",
            "showcase": false,
            "start_date": null,
            "group_id": null,
            "page_id": "208q92hckwws",
            "group": false,
            "only_show_if_degraded": false
          }
    ],
    "incidents": [
        {
            "id": "zp6cm4gxxmtx",
            "name": "A subset of users in Turkey are unable to dial into meetings using the toll numbers.",
            "status": "identified",
            "created_at": "2021-09-30T00:55:18.175-07:00",
            "updated_at": "2021-09-30T01:56:29.413-07:00",
            "monitoring_at": null,
            "resolved_at": null,
            "impact": "minor",
            "shortlink": "https://stspg.io/hfqxjmvn7nv9",
            "started_at": "2021-09-30T00:55:18.000-07:00",
            "page_id": "208q92hckwws",
            "incident_updates": [
                {
                    "id": "69kx4xx3955r",
                    "status": "identified",
                    "body": "We have identified an issue between the local carrier in Turkey, and the local provider for Zoom audio conference dial-in numbers. Our engineers continue to work towards a resolution.",
                    "incident_id": "zp6cm4gxxmtx",
                    "created_at": "2021-09-30T01:56:29.410-07:00",
                    "updated_at": "2021-09-30T01:56:29.410-07:00",
                    "display_at": "2021-09-30T01:56:29.410-07:00",
                    "affected_components": [
                        {
                            "code": "9397cnvk62zn",
                            "name": "Management Portal",
                            "old_status": "degraded_performance",
                            "new_status": "degraded_performance"
                        }
                    ],
                    "deliver_notifications": true,
                    "custom_tweet": null,
                    "tweet_id": null
                },
                {
                    "id": "gfnbwd8cphk2",
                    "status": "investigating",
                    "body": "We are investigating reports that some customers in Turkey are unable to reach dial-in numbers using the toll number.\nPlease use computer audio and toll-free numbers in the meantime.",
                    "incident_id": "zp6cm4gxxmtx",
                    "created_at": "2021-09-30T00:55:18.257-07:00",
                    "updated_at": "2021-09-30T01:42:31.039-07:00",
                    "display_at": "2021-09-30T00:55:18.000-07:00",
                    "affected_components": [
                        {
                            "code": "9397cnvk62zn",
                            "name": "Management Portal",
                            "old_status": "operational",
                            "new_status": "degraded_performance"
                        }
                    ],
                    "deliver_notifications": true,
                    "custom_tweet": null,
                    "tweet_id": null
                }
            ],
            "components": [
                {
                    "id": "9397cnvk62zn",
                    "name": "Management Portal",
                    "status": "degraded_performance",
                    "created_at": "2015-01-26T15:08:50.964-08:00",
                    "updated_at": "2021-09-30T00:55:18.210-07:00",
                    "position": 8,
                    "description": "Access to Telephony Services",
                    "showcase": false,
                    "start_date": null,
                    "group_id": null,
                    "page_id": "208q92hckwws",
                    "group": false,
                    "only_show_if_degraded": false
                }
            ]
        }
    ],
    "scheduled_maintenances": [],
    "status": {
        "indicator": "major",
        "description": "Partial System Outage"
    }
}

export default minor