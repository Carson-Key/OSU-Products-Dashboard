// Helpers
import { capitalizeFirstLetter } from './basic.js'
import { fireError } from './notificationHandling/notificationHelpers.js'

const checkIfLinkIsLive = (apiLink, onSuccess, onFail) => {
    return fetch(apiLink).then((response) => {
        if (response.status === 200) {
            onSuccess()
        } else {
            onFail()
        }
    })
    .catch((error) => {});
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

const setCookies = (setApiCookie, apiName, apiLink, addedAPIs = {}) => {
    const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())

    setApiCookie('addedAPIs', {
        ...addedAPIs, 
        [beatifiedName]: {
            name: beatifiedName,
            link: apiLink
        }
    }, { path: '/' })
}

export const addNewAPI = (event, apiName, apiLink, apiCookie, setApiCookie, dispatch) => {
    event.preventDefault()
    const link = addStatPath(addHTTPS(apiLink))
    
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
                setCookies(setApiCookie, apiName, link, apiCookie.addedAPIs)
            },
            onFail: () => {
                setCookies(setApiCookie, apiName, link)
            }
        }
    }

    checkIfLinkIsLive(link, onComplete.checkIfLinkIsLive.onSuccess, onComplete.checkIfLinkIsLive.onFail)
}