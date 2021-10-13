// Objects
import { AddURL, addAPISummaryState } from './statusAPIObjects'

export const fetchJSON = (url, setState) => {
    switch (url) {
        case AddURL:
            setState(addAPISummaryState)
            break
        default:
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    setState(json)
                })
            break
    }
}