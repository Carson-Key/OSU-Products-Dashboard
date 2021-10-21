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
    .catch((error) => {
        onFail()
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
const setMultipleCookies = (setApiCookie, apis, addedAPIs = {}) => {
    setApiCookie('addedAPIs', {
        ...addedAPIs, 
        ...apis
    }, { path: '/' })
}

export const addMultipleAPI = (apis, apiCookie, setApiCookie, dispatch)  => {
    let addedAPIs = {}
    let cookieFriendlyAPIs = {}
    let promise
    apis.forEach((api, i) => {
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
                onFail: () => {
                    fireError("This status page is either currently down, or not supported by this application", dispatch)
                }
            },
            checkIfAddedAPICookieExsists: {
                onSuccess: () => {
                    let name = capitalizeFirstLetter(apis[i].name.toLowerCase())
                    cookieFriendlyAPIs[name] = {name, link: api.link}
                    addedAPIs = apiCookie.addedAPIs
                },
                onFail: () => {
                    let name = capitalizeFirstLetter(apis[i].name.toLowerCase())
                    cookieFriendlyAPIs[name] = {name, link: api.link}
                    addedAPIs = {}
                }
            }
        }

        checkIfLinkIsLive(link, onComplete.checkIfLinkIsLive.onSuccess, onComplete.checkIfLinkIsLive.onFail)
    })


    setMultipleCookies(setApiCookie, cookieFriendlyAPIs, addedAPIs)
}

export const addNewAPI = (apiName, apiLink, apiCookie, setApiCookie, dispatch) => {
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