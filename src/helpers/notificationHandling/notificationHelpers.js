export const notificationTypes = {
    error: "error",
    alert: "alert",
    none: ""
}

export const fireError = (message, dispatch) => {
    console.log("Error: " + message)
    dispatch({
        type: 'SET_NOTIFICATION', 
        payload: {occurs: true, message: message, 
        type: notificationTypes.error
    }})
    setTimeout(() => { 
        dispatch({
            type: 'SET_NOTIFICATION', 
            payload: {occurs: false, message: "", type: notificationTypes.none}
    }) }, 5000)
}