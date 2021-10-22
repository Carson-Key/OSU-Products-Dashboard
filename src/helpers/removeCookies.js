const generateActiveAPIs = (apis) => {
    if (apis) {
        return {...apis}
    } else {
        return {}
    }
}

export const removeActiveCookies = (removeCookie) => {
    removeCookie('APIs')
    removeCookie('exsistingUser')
}

export const removeAddedCookies = (apiCookie, setApiCookie, removeCookie) => {
    let activeAPIs = generateActiveAPIs(apiCookie.APIs)
    let activeAPIsArray = []

    
    if (apiCookie.addedAPIs) {
        activeAPIsArray = Object.keys(apiCookie.addedAPIs)
    }
    
    activeAPIsArray.forEach((api) => {
        delete activeAPIs[api]
    })
    setApiCookie('APIs', activeAPIs, { path: '/' })
    removeCookie('addedAPIs')
}