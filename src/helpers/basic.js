export const defaultObjectValue = (object, value, defaultReturn = false) => {
    if (object[value]) {
        return object[value]
    } else {
        return defaultReturn
    }
}