import { toggleOnlyTrueToFalse } from './basic'

export const checkIfValidInput = (apis) => {
    let returnBoolean = true

    apis.forEach((api) => {
        if (api.name === "" && api.link === "" ) {
            returnBoolean = toggleOnlyTrueToFalse(returnBoolean)
        }
    })

    return returnBoolean
}