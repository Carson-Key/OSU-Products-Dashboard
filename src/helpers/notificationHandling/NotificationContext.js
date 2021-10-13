import React, {createContext, useReducer} from "react";
import NotificationReducer from './NotificationReducer.js';

const initialState = {
  notification: {
    occurs: false,
    message: "",
    type: ""
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(NotificationReducer, initialState)
  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {children}
    </NotificationContext.Provider>
  )
}

export const NotificationContext = createContext(initialState)
export default Store
