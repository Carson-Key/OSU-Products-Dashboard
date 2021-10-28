// Packages
import { createContext, useReducer } from 'react'
// Helpers
import PopUpReducer from './PopUpReducer.js'

const initialState = {
  popup: {
    occurs: false,
    children: (<></>)
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(PopUpReducer, initialState)
  return (
    <PopUpContext.Provider value={[state, dispatch]}>
      {children}
    </PopUpContext.Provider>
  )
}

export const PopUpContext = createContext(initialState)
export default Store
