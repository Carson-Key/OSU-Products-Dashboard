// Example API Returns
import None from './ExampleAPICalls/none.js'
import Minor from './ExampleAPICalls/minor.js'

export const AddURL = 'add'

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

export const addAPISummaryState = {
    status: {
        indicator: AddURL,
        description: "add"
    },
    incidents: [
        {
            name: "add",
            impact: "add",
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
    },
    AddAPI: { 
        name: "Add Status Panel",
        link: AddURL
    }
}

const apisToExclude = {
    AddAPI: true
}

export const excludedAPIs = () => {
    const apisArray = Object.keys(APIs)
    let includedAPIS = {}
    apisArray.forEach((api) => {
        if (!apisToExclude[api]) {
            includedAPIS[api] = APIs[api]
        }
    })
    return includedAPIS
}

export const testStatus = {
    0: None,
    1: Minor,
    5: apiInitSummaryState,
}