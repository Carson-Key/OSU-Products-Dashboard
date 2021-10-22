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

const checkIfAPIAdded = (addedAPIs, api, onSuccess, onFail) => {
    if (addedAPIs[api]) {
        onSuccess()
    } else {
        onFail()
    }
}
const checkIfAPIActive = (activeAPIs, api, onSuccess, onFail) => {
    if (activeAPIs[api]) {
        onSuccess()
    } else {
        onFail()
    }
}

export const deleteAdded = (apiCookie, api, setApiCookie, enabledCards, setEnabledCards) => {
    let newAddedAPIsCookie = {...apiCookie.addedAPIs}

    checkIfAPIAdded(newAddedAPIsCookie, api, () => {
        delete newAddedAPIsCookie[api]
        setApiCookie('addedAPIs', newAddedAPIsCookie, { path: '/' })
    }, () => {})
    checkIfAPIActive(apiCookie.APIs, api, () => {
        let newAPIs = {...apiCookie.APIs}
        delete newAPIs[api]
        if (enabledCards[api]) {
            let newStateValue = {...enabledCards}
            delete newStateValue[api]
            setEnabledCards(newStateValue)
        }
        setApiCookie('APIs', newAPIs, { path: '/' })
    }, () => {})
}