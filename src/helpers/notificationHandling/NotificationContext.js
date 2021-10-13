// Packages
import { createContext, useReducer } from 'react'
// Helpers
import NotificationReducer from './NotificationReducer.js'
import { notificationTypes } from './notificationHelpers.js'

const initialState = {
  notification: {
    occurs: false,
    message: "",
    type: notificationTypes.none
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
