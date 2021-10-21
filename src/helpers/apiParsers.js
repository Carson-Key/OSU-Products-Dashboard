import { capitalizeFirstLetter } from './basic.js'

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

export const generateAPIObject = (apiName, apiLink) => {
    const name = capitalizeFirstLetter(apiName.toLowerCase())
    const link = addStatPath(addHTTPS(apiLink))

    return { name, link }
}