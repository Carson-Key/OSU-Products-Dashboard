// Helpers
import { defaultKeyValue } from './basic.js'
// Objects
import { APIs, testStatus } from './statusAPIObjects.js'

const defaultTestSate = {
    [APIs.Box.link]: 0,
    [APIs.Kaltura.link]: 0,
    [APIs.Instructure.link]: 0,
    [APIs.Zoom.link]: 0,
    other: 3,
}

const testFetchJSON = (setState, status) => {
    setState(testStatus[status])
}

export const fetchJSON = (url, setState, testState = defaultTestSate) => {
    testFetchJSON(setState, defaultKeyValue(url, testState))
}