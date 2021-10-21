// Helpers
import { capitalizeFirstLetter } from './basic.js'
import { checkIfLinkIsLive, checkIfAddedAPICookieExsists } from './validateAPI.js'
import { fireError } from './notificationHandling/notificationHelpers.js'

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

    return { name, link }
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

export async function addNewAPI(apis, apiCookie, setApiCookie, dispatch) {
    let addedAPIs = {}
    let cookieFriendlyAPIs = {}

    await checkIfAPIValid(addedAPIs, cookieFriendlyAPIs, apis, apiCookie, dispatch)

    setCookies(setApiCookie, cookieFriendlyAPIs, apiCookie.APIs, addedAPIs)
}