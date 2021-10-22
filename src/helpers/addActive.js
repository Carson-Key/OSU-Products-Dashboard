// Helpers
import { checkIfAPIExsists } from "./validateAPI"
import { deleteAddedAPIFromActive, deleteFromAdded } from "./deleteAPIs"

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

export const deleteAdded = (apiCookie, api, setApiCookie, enabledCards, setEnabledCards) => {
    let newAddedAPIsCookie = {...apiCookie.addedAPIs}

    checkIfAPIExsists(newAddedAPIsCookie, api, () => {
        deleteFromAdded(newAddedAPIsCookie, api, setApiCookie)
    }, () => {})
    checkIfAPIExsists(apiCookie.APIs, api, () => {
        deleteAddedAPIFromActive(apiCookie.APIs, api, enabledCards, setEnabledCards, setApiCookie)
    }, () => {})
}