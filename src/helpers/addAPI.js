// Helpers
import { checkIfLinkIsLive, checkIfAddedAPICookieExsists, checkIfNewUser } from './validateAPI.js'
import { generateAPIObject } from './apiParsers.js'
import { fireError } from './notificationHandling/notificationHelpers.js'
import { excludedAPIs } from './statusAPIObjects.js'

let ADDEDAPIS = {}
let COOKIEFRIENDLYAPIS = {}

const setCookies = (setApiCookie, activeAPIs) => {
    setApiCookie('addedAPIs', { ...ADDEDAPIS, ...COOKIEFRIENDLYAPIS }, { path: '/' })
    setApiCookie('APIs', { ...activeAPIs, ...COOKIEFRIENDLYAPIS }, { path: '/' })
}

const setDefaultAPICookies = (setApiCookie, apiCookie) => {
    setApiCookie('exsistingUser', true, { path: '/' })
    setApiCookie('APIs', {...apiCookie.APIs, ...excludedAPIs()}, { path: '/' })
}

async function checkIfAPIValid(apis, apiCookie, dispatch) {
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
                    COOKIEFRIENDLYAPIS[apiObject.name] = apiObject
                    ADDEDAPIS = apiCookie.addedAPIs
                },
                onFail: () => {
                    COOKIEFRIENDLYAPIS[apiObject.name] = apiObject
                    ADDEDAPIS = {}
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
    await checkIfAPIValid(apis, apiCookie, dispatch)

    const currentAPIs = addDefaultAPIs(apiCookie, setApiCookie)
    setCookies(setApiCookie, currentAPIs)
}