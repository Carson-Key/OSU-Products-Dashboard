// Helpers
import { addDefaultAPIs } from "./addAPI"
import { excludedAPIs } from "./statusAPIObjects"

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
const deleteActiveAddedAPIs = (addedAPIsArray, activeAPIs) => {
    addedAPIsArray.forEach((api) => {
        delete activeAPIs[api]
    })
}

export async function removeActiveCookies(removeCookie, setApiCookie) {
    const defaultAPICookie = {
        exsistingUser: false,
        APIs: excludedAPIs()
    }

    removeCookie('APIs')
    removeCookie('exsistingUser')
    addDefaultAPIs(defaultAPICookie, setApiCookie)
}

export const removeAddedCookies = (apiCookie, setApiCookie, removeCookie) => {
    let activeAPIs = generateActiveAPIs(apiCookie.APIs)
    let addedAPIsArray = generateAddedAPIsArray(apiCookie.addedAPIs)

    deleteActiveAddedAPIs(addedAPIsArray, activeAPIs)
    
    setApiCookie('APIs', activeAPIs, { path: '/' })
    removeCookie('addedAPIs')
}