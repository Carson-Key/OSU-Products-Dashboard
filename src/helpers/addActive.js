// Helpers
import { checkIfAPIExsists } from "./validateAPI"

export const toggleStatusAPI = (api, apiObjec, enabledCards, setEnabledCards) => {
    let newStateValue = {...enabledCards}
    
    if (newStateValue[api]) {
        delete newStateValue[api]
    } else {
        newStateValue[api] = apiObjec[api]
    }
    
    setEnabledCards(newStateValue)
}
export const saveNewConfig = (enabledCards, setApiCookie) => {
    setApiCookie('APIs', enabledCards, { path: '/' })
}

const deleteFromAdded = (newAddedAPIsCookie, api, setApiCookie) => {
    delete newAddedAPIsCookie[api]
    setApiCookie('addedAPIs', newAddedAPIsCookie, { path: '/' })
}
const deleteFromActiveState = (api, enabledCards, setEnabledCards) => {
    let newStateValue = {...enabledCards}
    delete newStateValue[api]
    setEnabledCards(newStateValue)
}
const deleteAddedAPIFromActive = (apis, api, enabledCards, setEnabledCards, setApiCookie) => {
    let newAPIs = {...apis}
    delete newAPIs[api]
    checkIfAPIExsists(enabledCards, api, () => {
        deleteFromActiveState(api, enabledCards, setEnabledCards)
    }, () => {})
    setApiCookie('APIs', newAPIs, { path: '/' })
}

export const deleteAdded = (apiCookie, api, setApiCookie, enabledCards, setEnabledCards) => {
    let newAddedAPIsCookie = {...apiCookie.addedAPIs}

    checkIfAPIExsists(newAddedAPIsCookie, api, () => {
        deleteFromAdded(newAddedAPIsCookie, api, setApiCookie)
    }, () => {})
    checkIfAPIExsists(apiCookie.APIs, api, () => {
        deleteAddedAPIFromActive(apiCookie.APIs, api, enabledCards, setEnabledCards, setApiCookie)
    }, () => {})
}