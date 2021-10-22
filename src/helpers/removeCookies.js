export const removeActiveCookies = (removeCookie) => {
    removeCookie('APIs')
    removeCookie('exsistingUser')
}

export const removeAddedCookies = (apiCookie, setApiCookie, removeCookie) => {
    let newActiveAPIs = {}
        let activeAPIsArray = []

        if (apiCookie.APIs) {
            newActiveAPIs = {...apiCookie.APIs}
        }
        if (apiCookie.addedAPIs) {
            activeAPIsArray = Object.keys(apiCookie.addedAPIs)
        }
        
        activeAPIsArray.forEach((api) => {
            delete newActiveAPIs[api]
        })
        setApiCookie('APIs', newActiveAPIs, { path: '/' })
        removeCookie('addedAPIs')
}