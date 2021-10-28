// Helpers
import { defaultKeyValue } from './basic'
// Objects
import { AddURL, addAPISummaryState } from './statusAPIObjects'

export const fetchJSON = (url, setState) => {
    const fetchPaths = {
        [AddURL]: () => {
            setState(addAPISummaryState)
        },
        other: () => {
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setState(json)
            })
        }
    }

    defaultKeyValue(url, fetchPaths)()
}