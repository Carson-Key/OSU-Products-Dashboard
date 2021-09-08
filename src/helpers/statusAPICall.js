export const apiInitSummaryState = {
    status: {
        description: "loading..."
    },
    incidents: [
        {
            name: "loading..."
        }
    ]
}

export const apiLinks = {
    Box: 'https://status.box.com/api/v2/summary.json',
    Kaltura: 'https://status.kaltura.com/api/v2/summary.json',
    Instructure: 'https://status.instructure.com/api/v2/summary.json',
    Zoom: 'https://status.zoom.us/api/v2/summary.json'
}

export const fetchJSON = (url, setState) => {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setState(json)
        })
}