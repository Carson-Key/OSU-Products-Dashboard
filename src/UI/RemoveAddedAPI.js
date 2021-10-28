// Package
import { useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
// Helpers
import { deleteAdded } from '../helpers/addActive'
import { activatePopUp, deactivatePopUp } from '../helpers/popUpHandling/popUpHelpers'
// Contexts
import { PopUpContext } from '../helpers/popUpHandling/PopUpContext'

const RemoveAddedAPI = (props) => {
    const { addedAPISArray } = props
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const [popUpState, popUpDispatch] = useContext(PopUpContext)

    // To satisfy the compiler warnings
    if (popUpState) {}

    const deleteAddedAPI = (api) => {
        activatePopUp((
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
        ), popUpDispatch)
    }

	return (
        <section className="flex flex-wrap justify-evenly border-2">
            {
                addedAPISArray.map((api, i) => {
                    return (
                        <label key={i} className="grid grid-cols-1 w-24 font-semibold px-2 py-1">
                            {api}
                            <button className="text-white bg-red-500" onClick={(event) => {
                                event.preventDefault()
                                deleteAddedAPI(api)
                            }}>Remove</button>
                        </label>
                    )
                })
            }
        </section>
	)
}

export default RemoveAddedAPI
