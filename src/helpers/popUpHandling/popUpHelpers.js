export const activatePopUp = (children, dispatch) => {
    dispatch({
        type: 'SET_POPUP', 
        payload: {
            occurs: true, 
            children: children
        }
    })
}