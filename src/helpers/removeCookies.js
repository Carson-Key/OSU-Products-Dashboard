const generateActiveAPIs = (apis) => {
    if (apis) {
        return {...apis}
    } else {
        return {}
    }
}
const generateAddedAPIsArray = (addedAPIs) => {
    if (addedAPIs) {
        return Object.keys(addedAPIs)
    } else {
        return []
    }
}

export const removeActiveCookies = (removeCookie) => {
    removeCookie('APIs')
    removeCookie('exsistingUser')
}

export const removeAddedCookies = (apiCookie, setApiCookie, removeCookie) => {
    let activeAPIs = generateActiveAPIs(apiCookie.APIs)
    let addedAPIsArray = generateAddedAPIsArray(apiCookie.addedAPIs)
    
    addedAPIsArray.forEach((api) => {
        delete activeAPIs[api]
    })
    setApiCookie('APIs', activeAPIs, { path: '/' })
    removeCookie('addedAPIs')
}