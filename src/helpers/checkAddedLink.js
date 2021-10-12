import { capitalizeFirstLetter } from './basic.js'

const checkIfLinkIsLive = (apiLink, onSuccess, onFail) => {
    return fetch(apiLink).then(() => {
        onSuccess()
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

const setCookies = (setApiCookie, apiName, apiLink, addedAPIs = {}) => {
    const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())
    const httpsLink = addHTTPS(apiLink)

    setApiCookie('addedAPIs', {
        ...addedAPIs, 
        [beatifiedName]: {
            name: beatifiedName,
            link: httpsLink
        }
    }, { path: '/' })
}

export const addNewAPI = (event, apiName, apiLink, apiCookie, setApiCookie) => {
    event.preventDefault()
    
    const onComplete = {
        checkIfLinkIsLive: {
            onSuccess: () => {
                checkIfAddedAPICookieExsists(
                    apiCookie, 
                    onComplete.checkIfAddedAPICookieExsists.onSuccess,
                    onComplete.checkIfAddedAPICookieExsists.onFail
                )
            },
            onFail: (error) => {
                // Do nothing
            }
        },
        checkIfAddedAPICookieExsists: {
            onSuccess: () => {
                setCookies(setApiCookie, apiName, apiLink, apiCookie.addedAPIs)
            },
            onFail: () => {
                setCookies(setApiCookie, apiName, apiLink)
            }
        }
    }

    checkIfLinkIsLive(apiLink, onComplete.checkIfLinkIsLive.onSuccess, onComplete.checkIfLinkIsLive.onFail)
}