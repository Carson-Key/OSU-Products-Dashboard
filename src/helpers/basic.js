const defaultReturns = {
    "none": 0,
    "minor": 1,
    "major": 2,
    "critical": 3,
    "other": -1
}

export const defaultObjectValue = (object, value, defaultReturn = false) => {
    if (object[value]) {
        return object[value]
    } else {
        return defaultReturn
    }
}
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const defaultKeyValue = (status, returnValues = defaultReturns) => {
    return returnValues[status] ? returnValues[status] : returnValues["other"]
}