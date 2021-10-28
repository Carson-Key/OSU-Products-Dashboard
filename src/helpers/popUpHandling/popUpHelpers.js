export const deactivatePopUp = (dispatch) => {
    dispatch({
        type: 'SET_POPUP', 
        payload: {
            occurs: false, 
            children: (<></>)
        }
    })
}
export const activatePopUp = (children, dispatch) => {
    dispatch({
        type: 'SET_POPUP', 
        payload: {
            occurs: true, 
            children: children
        }
    })
}