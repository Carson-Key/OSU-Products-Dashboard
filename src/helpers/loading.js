import { capitalizeFirstLetter } from './basic.js'

export const determineIfAddRouteFinished = (pasrsedLink, addedAPIs, doneLoading)=> {
    for (let i = 0; i < pasrsedLink.length; i+=2) {
        const name = pasrsedLink[i].split("=")[1]
        if (addedAPIs[capitalizeFirstLetter(name)]) {
            doneLoading++
        }
    }
}

export const loadToHomePage = (determineIfLoaded, loadedValue, history, initalLoadedValue = 0) => {
    let doneLoading = initalLoadedValue

    determineIfLoaded(doneLoading)

    if (doneLoading === loadedValue) {
        history.push("/")
    }
}