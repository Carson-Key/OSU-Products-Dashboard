// Helpers
import { capitalizeFirstLetter } from './basic.js'
import { fireError } from './notificationHandling/notificationHelpers.js'

const checkIfLinkIsLive = (apiLink, onSuccess, onFail) => {
    return fetch(apiLink).then((response) => {
        if (response.status === 200) {
            onSuccess()
        } else {
            onFail("This status page is either currently down, or not supported by this application")
        }
    })
    .catch((error) => {
        onFail(error)
    });
}

const checkIfAddedAPICookieExsists = (apiCookie, onSuccess, onFail) => {
    if (apiCookie.addedAPIs) {
        onSuccess()
    } else {
        onFail()
    }
}

const addHTTPS = (apiLink) => {
    let checkForHTPS = new RegExp('https://')
    if (checkForHTPS.test(apiLink)) {
        return apiLink
    } else {
        return 'https://' + apiLink
    }
}

const addStatPath = (link) => {
    let checkForPath = new RegExp('/api/v2/summary.json')
    if (checkForPath.test(link)) {
        return link
    } else {
        return link + '/api/v2/summary.json'
    }
}

const setCookies = (setApiCookie, apiObject, activeAPIs, addedAPIs = {}) => {
    setApiCookie('addedAPIs', { ...addedAPIs, ...apiObject }, { path: '/' })
    setApiCookie('APIs', { ...activeAPIs, ...apiObject }, { path: '/' })
}

const generateAPIObject = (apiName, apiLink) => {
    const name = capitalizeFirstLetter(apiName.toLowerCase())
    const link = addStatPath(addHTTPS(apiLink))

    return {
        [name]: { name, link }
    }
}

async function generateMutiAPIObject(addedAPIs, cookieFriendlyAPIs, apis, apiCookie, dispatch) {
    await Promise.all(apis.map(async (api, i) => {
        const link = addStatPath(addHTTPS(api.link))
    
        const onComplete = {
            checkIfLinkIsLive: {
                onSuccess: () => {
                    checkIfAddedAPICookieExsists(
                        apiCookie, 
                        onComplete.checkIfAddedAPICookieExsists.onSuccess,
                        onComplete.checkIfAddedAPICookieExsists.onFail
                    )
                },
                onFail: (message) => {
                    fireError(message, dispatch)
                }
            },
            checkIfAddedAPICookieExsists: {
                onSuccess: () => {
                    let name = capitalizeFirstLetter(apis[i].name.toLowerCase())
                    cookieFriendlyAPIs[name] = {name, link}
                    addedAPIs = apiCookie.addedAPIs
                },
                onFail: () => {
                    let name = capitalizeFirstLetter(apis[i].name.toLowerCase())
                    cookieFriendlyAPIs[name] = {name, link}
                    addedAPIs = {}
                }
            }
        }

        await checkIfLinkIsLive(link, onComplete.checkIfLinkIsLive.onSuccess, onComplete.checkIfLinkIsLive.onFail)
    }))
}

export async function addMultipleAPI(apis, apiCookie, setApiCookie, dispatch) {
    let addedAPIs = {}
    let cookieFriendlyAPIs = {}

    await generateMutiAPIObject(addedAPIs, cookieFriendlyAPIs, apis, apiCookie, dispatch)

    setCookies(setApiCookie, cookieFriendlyAPIs, apiCookie.APIs, addedAPIs)
}

export const addNewAPI = (apiName, apiLink, apiCookie, setApiCookie, dispatch) => {
    const apiObject = generateAPIObject(apiName, apiLink)
    
    const onComplete = {
        checkIfLinkIsLive: {
            onSuccess: () => {
                checkIfAddedAPICookieExsists(
                    apiCookie, 
                    onComplete.checkIfAddedAPICookieExsists.onSuccess,
                    onComplete.checkIfAddedAPICookieExsists.onFail
                )
            },
            onFail: () => {
                fireError("This status page is either currently down, or not supported by this application", dispatch)
            }
        },
        checkIfAddedAPICookieExsists: {
            onSuccess: () => {
                setCookies(setApiCookie, apiObject, apiCookie.APIs, apiCookie.addedAPIs)
            },
            onFail: () => {
                setCookies(setApiCookie, apiObject, apiCookie.APIs)
            }
        }
    }

    checkIfLinkIsLive(apiObject.link, onComplete.checkIfLinkIsLive.onSuccess, onComplete.checkIfLinkIsLive.onFail)
}