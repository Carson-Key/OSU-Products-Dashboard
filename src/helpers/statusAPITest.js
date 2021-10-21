// Objects
import { APIs, testStatus } from './statusAPIObjects.js'

const defaultTestSate = {
    [APIs.Box.name]: 0,
    [APIs.Kaltura.name]: 0,
    [APIs.Instructure.name]: 0,
    [APIs.Zoom.name]: 0,
    other: 0,
}

export const fetchJSON = (url, setState, testState = defaultTestSate) => {
    switch (url) {
        case APIs.Box.link:
            testFetchJSON(setState, testState[APIs.Box.name])
            break;
        case APIs.Kaltura.link:
            testFetchJSON(setState, testState[APIs.Kaltura.name])
            break;
        case APIs.Instructure.link:
            testFetchJSON(setState, testState[APIs.Instructure.name])
            break;
        case APIs.Zoom.link:
            testFetchJSON(setState, testState[APIs.Zoom.name])
            break;
        default:
            testFetchJSON(setState, testState.other)
            break;
    }

}

export const testFetchJSON = (setState, status) => {
    setState(testStatus[status])
}