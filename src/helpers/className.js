// Helpers
import { parseStatus } from './parseSatus.js'

const classColors = {
    "none": "bg-green-400",
    "minor": "bg-yellow-400",
    "major": "bg-red-500",
    "critical": "bg-red-900",
    "other": "bg-gray-400"
}

export const determineStatusBG = (status) => {
    return parseStatus(status, classColors)
}