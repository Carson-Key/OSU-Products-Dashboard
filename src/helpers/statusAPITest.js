// Helpers
import None from './ExampleAPICalls/none.js'
import Minor from './ExampleAPICalls/minor.js'
import { apiInitSummaryState } from './statusAPIObjects.js'
import { APIs } from './statusAPICall.js'

export const fetchJSON = (url, setState) => {
    switch (url) {
        case APIs.Box.link:
            testFetchJSON(setState, 0)
            break;
        case APIs.Kaltura.link:
            testFetchJSON(setState, 0)
            break;
        case APIs.Instructure.link:
            testFetchJSON(setState, 0)
            break;
        case APIs.Zoom.link:
            testFetchJSON(setState, 0)
            break;
        default:
            testFetchJSON(setState, 0)
            break;
    }

}

export const testFetchJSON = (setState, status) => {
    setState(testStatus[status])
}

const testStatus = {
    0: None,
    1: Minor,
    5: apiInitSummaryState,
}