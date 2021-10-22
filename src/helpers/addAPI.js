// Helpers
import { checkIfLinkIsLive, checkIfAddedAPICookieExsists, checkIfNewUser } from './validateAPI.js'
import { generateAPIObject } from './apiParsers.js'
import { fireError } from './notificationHandling/notificationHelpers.js'
import { excludedAPIs } from './statusAPIObjects.js'

const setCookies = (setApiCookie, apiObject, activeAPIs, addedAPIs = {}) => {
    setApiCookie('addedAPIs', { ...addedAPIs, ...apiObject }, { path: '/' })
    setApiCookie('APIs', { ...activeAPIs, ...apiObject }, { path: '/' })
}

const setDefaultAPICookies = (setApiCookie, apiCookie) => {
    setApiCookie('exsistingUser', true, { path: '/' })
    setApiCookie('APIs', {...apiCookie.APIs, ...excludedAPIs()}, { path: '/' })
}

async function checkIfAPIValid(addedAPIs, cookieFriendlyAPIs, apis, apiCookie, dispatch) {
    await Promise.all(apis.map(async (api, i) => {
        const apiObject = generateAPIObject(api.name, api.link)
    
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
                    cookieFriendlyAPIs[apiObject.name] = apiObject
                    addedAPIs = apiCookie.addedAPIs
                },
                onFail: () => {
                    cookieFriendlyAPIs[apiObject.name] = apiObject
                    addedAPIs = {}
                }
            }
        }

        await checkIfLinkIsLive(
            apiObject.link, 
            onComplete.checkIfLinkIsLive.onSuccess, 
            onComplete.checkIfLinkIsLive.onFail
        )
    }))
}

export const addDefaultAPIs = (apiCookie, setApiCookie) => {
    let returnedAPIs = apiCookie.APIs

    checkIfNewUser(apiCookie.exsistingUser, () => {
        setDefaultAPICookies(setApiCookie, apiCookie)
        returnedAPIs = excludedAPIs()
    }, () => {})

    return returnedAPIs
}

export async function addNewAPI(apis, apiCookie, setApiCookie, dispatch) {
    let addedAPIs = {}
    let cookieFriendlyAPIs = {}

    await checkIfAPIValid(addedAPIs, cookieFriendlyAPIs, apis, apiCookie, dispatch)

    const currentAPIs = addDefaultAPIs(apiCookie, setApiCookie)
    console.log(currentAPIs)
    setCookies(setApiCookie, cookieFriendlyAPIs, currentAPIs, addedAPIs)
}