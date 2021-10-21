// Helpers
import { defaultKeyValue } from './basic.js'
// Objects
import { APIs, testStatus } from './statusAPIObjects.js'

const defaultTestSate = {
    [APIs.Box.link]: 1,
    [APIs.Kaltura.link]: 1,
    [APIs.Instructure.link]: 1,
    [APIs.Zoom.link]: 1,
    other: 1,
}

const testFetchJSON = (setState, status) => {
    setState(testStatus[status])
}

export const fetchJSON = (url, setState, testState = defaultTestSate) => {
    testFetchJSON(setState, defaultKeyValue(url, testState))
}