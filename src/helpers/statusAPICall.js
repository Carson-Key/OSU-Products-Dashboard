export const apiInitStatusState = {
    status: {
        description: "loading..."
    }
}

export const apiLinks = {
    Box: 'https://status.box.com/api/v2/status.json',
    Kaltura: 'https://status.kaltura.com/api/v2/status.json',
    Instructure: 'https://status.instructure.com/api/v2/status.json',
    Zoom: 'https://status.zoom.us/api/v2/status.json'
}

export const fetchJSON = (url, setState) => {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setState(json)
        })
}