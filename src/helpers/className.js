export const determineStatusBG = (indicator) => {
    switch (indicator) {
        case "none":
            return "bg-green-400"
        case "minor":
            return "bg-yellow-400"
        case "major":
            return "bg-red-500"
        case "critical":
            return "bg-red-900"
        default:
            return "bg-gray-400"
    }
}