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