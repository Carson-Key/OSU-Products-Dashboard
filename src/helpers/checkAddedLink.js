import { capitalizeFirstLetter } from './basic.js'

const checkIfLinkIsLive = (apiLink, onSuccess) => {
    return fetch(apiLink).then(() => {
        onSuccess()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

export const addNewAPI = (event, apiName, apiLink, apiCookie, setApiCookie) => {
    event.preventDefault()
    const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())
    checkIfLinkIsLive(apiLink, () => {
        if (apiCookie.addedAPIs) {
            setApiCookie('AddedAPIs', {
                ...apiCookie.addedAPIs, 
                [beatifiedName]: {
                    name: beatifiedName,
                    link: apiLink
                }
            }, { path: '/' })
        } else {
            setApiCookie('AddedAPIs', {
                [beatifiedName]: {
                    name: beatifiedName,
                    link: apiLink
                }
            }, { path: '/' })
        }
    })
}