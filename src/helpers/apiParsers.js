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

export const generateAPIsObjectFromParams = (params) => {
    const fullToAdd = params.toAdd + params[0]
    const toAddSplit = fullToAdd.split(",")
    let apis = []

    for (let i = 0; i < toAddSplit.length; i+=2) {
        const name = toAddSplit[i].split("=")[1]
        const link = toAddSplit[i+1].split("=")[1]
        apis.push({name, link})
    }

    return apis
}