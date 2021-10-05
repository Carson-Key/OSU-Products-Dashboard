// Helpers
import { parseStatus } from './parseSatus.js'

const classColors = {
    "none": "bg-green-400",
    "minor": "bg-yellow-400",
    "major": "bg-red-500",
    "critical": "bg-red-900",
    "other": "bg-gray-400"
}
const borderColors = {
    "none": "border-2 border-green-400",
    "minor": "border-2 border-yellow-400",
    "major": "border-2 border-red-500",
    "critical": "border-2 border-red-900",
    "other": "border-2 border-gray-400"
}

export const determineStatusBorder = (status) => {
    return parseStatus(status, borderColors)
}
export const determineStatusBG = (status) => {
    return parseStatus(status, classColors)
}