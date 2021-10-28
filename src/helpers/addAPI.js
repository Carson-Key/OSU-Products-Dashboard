// Helpers
import { checkIfLinkIsLive, checkIfAddedAPICookieExsists, checkIfNewUser } from './validateAPI'
import { checkIfValidInput } from './validateInput'
import { generateAPIObject } from './apiParsers'
import { fireError } from './notificationHandling/notificationHelpers'
import { excludedAPIs } from './statusAPIObjects'

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
    if (checkIfValidInput(apis)) {
        await Promise.all(apis.map(async (api, i) => {
            const apiObject = generateAPIObject(api.name, api.link)
        
            const onComplete = {
                checkIfValidInput: {
                    onSuccess: () => {},
                    onFail: () => {}
                },
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
    } else {
        fireError("Please enter name and/or link into the the text fields before you attempt to add a new status card", dispatch)
    }
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