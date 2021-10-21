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