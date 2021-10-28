// Package
import { useContext } from 'react'
// Helpers
import { deleteAdded } from '../helpers/addActive'
import { deactivatePopUp } from '../helpers/popUpHandling/popUpHelpers'
// Contexts
import { PopUpContext } from '../helpers/popUpHandling/PopUpContext'

const RemoveAPIPopUp = (props) => {
    const {
        apiCookie, 
        api, 
        setApiCookie, 
        enabledCards, 
        setEnabledCards 
    } = props
    const [popUpState, popUpDispatch] = useContext(PopUpContext)

    // To satisfy the compiler warnings
    if (popUpState) {}

    return (
        <>
            <p>Are you sure that you wish to remove this status card?</p>
            <div className="flex justify-center gap-x-2 my-5">
            <button onClick={() => {
                deleteAdded(apiCookie, api, setApiCookie, enabledCards, setEnabledCards)
                deactivatePopUp(popUpDispatch)
            }} className="bg-red-500 text-white px-2 py-1">Yes</button>
            <button onClick={() => {deactivatePopUp(popUpDispatch)}} className="bg-gray-500 text-white px-2 py-1">No</button>
            </div>
        </>
    )
}

export default RemoveAPIPopUp
