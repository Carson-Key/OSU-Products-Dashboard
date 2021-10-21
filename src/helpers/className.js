// Helpers
import { defaultKeyValue } from './basic.js'
import { notificationTypes } from './notificationHandling/notificationHelpers.js'

const notificationBGColors = {
    [notificationTypes.error]: "bg-red-400 ",
    other: "bg-indigo-300 "
}

const statusBGColors = {
    none: "bg-green-400",
    minor: "bg-yellow-400",
    major: "bg-red-500",
    critical: "bg-red-900",
    other: "bg-gray-400"
}
const statusBorderColors = {
    none: "border-2 border-green-400",
    minor: "border-2 border-yellow-400",
    major: "border-2 border-red-500",
    critical: "border-2 border-red-900",
    other: "border-2 border-gray-400"
}

export const determineNotificationBGColor = (type) => {
    return defaultKeyValue(type, notificationBGColors)
}

export const determineStatusBorder = (status) => {
    return defaultKeyValue(status, statusBorderColors)
}
export const determineStatusBG = (status) => {
    return defaultKeyValue(status, statusBGColors)
}