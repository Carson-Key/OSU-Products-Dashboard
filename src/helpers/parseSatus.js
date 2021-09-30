const defaultReturns = {
    "none": 0,
    "minor": 1,
    "major": 2,
    "critical": 3,
    "other": -1
}

export const parseStatus = (status, returnValues = defaultReturns) => {
    console.log(returnValues[status] ? returnValues[status] : returnValues["other"])
    return returnValues[status] ? returnValues[status] : returnValues["other"]
}