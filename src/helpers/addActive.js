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

const checkIfAPIExsists = (apis, api, onSuccess, onFail) => {
    if (apis[api]) {
        onSuccess()
    } else {
        onFail()
    }
}
const deleteFromAdded = (newAddedAPIsCookie, api, setApiCookie) => {
    delete newAddedAPIsCookie[api]
    setApiCookie('addedAPIs', newAddedAPIsCookie, { path: '/' })
}
const deleteAddedAPIFromActive = (apis, api, enabledCards, setEnabledCards, setApiCookie) => {
    let newAPIs = {...apis}
    delete newAPIs[api]
    if (enabledCards[api]) {
        let newStateValue = {...enabledCards}
        delete newStateValue[api]
        setEnabledCards(newStateValue)
    }
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