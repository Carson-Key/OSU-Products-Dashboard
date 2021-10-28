const PopUpReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPUP':
      return {
        ...state,
        popup: action.payload
      }
    default:
      return state
  }
}

export default PopUpReducer
