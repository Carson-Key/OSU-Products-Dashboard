export const checkIfLinkIsLive = (apiLink, onSuccess, onFail) => {
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

export const checkIfAddedAPICookieExsists = (apiCookie, onSuccess, onFail) => {
    if (apiCookie.addedAPIs) {
        onSuccess()
    } else {
        onFail()
    }
}

export const checkIfNewUser = (exsistingUserCookie, onSuccess, onFail) => {
    if (!exsistingUserCookie) {
        onSuccess()
    } else {
        onFail()
    }
}

export const checkIfAPIExsists = (apis, api, onSuccess, onFail) => {
    if (apis[api]) {
        onSuccess()
    } else {
        onFail()
    }
}