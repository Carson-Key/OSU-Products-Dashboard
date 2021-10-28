// Example API Returns
import None from './ExampleAPICalls/none'
import Minor from './ExampleAPICalls/minor'
import Major from './ExampleAPICalls/major'
import Critical from './ExampleAPICalls/critical'

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
    1: None,
    2: Minor,
    3: Major,
    4: Critical,
    5: apiInitSummaryState,
}