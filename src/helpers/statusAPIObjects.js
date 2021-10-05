export const apiInitSummaryState = {
    status: {
        description: "loading..."
    },
    incidents: [
        {
            name: "loading...",
            impact: "loading...",
            incident_updates: []
        }
    ]
}

export const APIs = {
    Box: { 
        name: "Box",
        link: 'https://status.box.com/api/v2/summary.json' 
    },
    Kaltura: { 
        name: "Kaltura",
        link: 'https://status.kaltura.com/api/v2/summary.json'
    },
    Instructure: { 
        name: "Instructure",
        link: 'https://status.instructure.com/api/v2/summary.json'
    },
    Zoom: { 
        name: "Zoom",
        link: 'https://status.zoom.us/api/v2/summary.json'
    }
}