import { capitalizeFirstLetter } from './basic.js'

export const addNewAPI = (event, apiName, apiLink, apiCookie, setApiCookie) => {
    event.preventDefault()
    const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())
    fetch(apiLink)
        .then((response) => {
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
        .catch((error) => {
            console.error('Error:', error);
        });
}