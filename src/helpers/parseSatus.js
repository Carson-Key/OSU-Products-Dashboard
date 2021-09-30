const defaultReturns = {
    "none": 0,
    "minor": 1,
    "major": 2,
    "critical": 3,
    "other": -1
}

export const parseStatus = (status, returnValues = defaultReturns) => {
    return returnValues[status] ? returnValues[status] : returnValues["other"]
}