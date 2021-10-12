import { capitalizeFirstLetter } from './basic.js'

const checkIfLinkIsLive = (apiLink, onSuccess) => {
    return fetch(apiLink).then(() => {
        onSuccess()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const checkIfAddedAPICookieExsists = (apiCookie, onSuccess, onFail) => {
    if (apiCookie.addedAPIs) {
        onSuccess()
    } else {
        onFail()
    }
}

export const addNewAPI = (event, apiName, apiLink, apiCookie, setApiCookie) => {
    event.preventDefault()
    const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())

    const onComplete = {
        checkIfLinkIsLive: {
            onSuccess: () => {
                checkIfAddedAPICookieExsists(
                    apiCookie, 
                    onComplete.checkIfAddedAPICookieExsists.onSuccess,
                    onComplete.checkIfAddedAPICookieExsists.onFail
                )
            }
        },
        checkIfAddedAPICookieExsists: {
            onSuccess: () => {
                setApiCookie('AddedAPIs', {
                    ...apiCookie.addedAPIs, 
                    [beatifiedName]: {
                        name: beatifiedName,
                        link: apiLink
                    }
                }, { path: '/' })
            },
            onFail: () => {
                setApiCookie('AddedAPIs', {
                    [beatifiedName]: {
                        name: beatifiedName,
                        link: apiLink
                    }
                }, { path: '/' })
            }
        }
    }

    checkIfLinkIsLive(apiLink, onComplete.checkIfLinkIsLive.onSuccess)
}