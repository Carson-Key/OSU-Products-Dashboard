// Helpers
import { checkIfAPIExsists } from './validateAPI'

export const deleteFromAdded = (newAddedAPIsCookie, api, setApiCookie) => {
    delete newAddedAPIsCookie[api]
    setApiCookie('addedAPIs', newAddedAPIsCookie, { path: '/' })
}
export const deleteFromActiveState = (api, enabledCards, setEnabledCards) => {
    let newStateValue = {...enabledCards}
    delete newStateValue[api]
    setEnabledCards(newStateValue)
}
export const deleteAddedAPIFromActive = (apis, api, enabledCards, setEnabledCards, setApiCookie) => {
    let newAPIs = {...apis}
    delete newAPIs[api]
    checkIfAPIExsists(enabledCards, api, () => {
        deleteFromActiveState(api, enabledCards, setEnabledCards)
    }, () => {})
    setApiCookie('APIs', newAPIs, { path: '/' })
}