// Package
import { useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
// Components
import RemoveAPIPopUp from '../components/RemoveAPIPopUp'
// Helpers
import { activatePopUp } from '../helpers/popUpHandling/popUpHelpers'
// Contexts
import { PopUpContext } from '../helpers/popUpHandling/PopUpContext'

const RemoveAddedAPI = (props) => {
    const { addedAPISArray } = props
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const [popUpState, popUpDispatch] = useContext(PopUpContext)

    // To satisfy the compiler warnings
    if (popUpState) {}
    if (setApiCookie) {}

    const deleteAddedAPI = (api) => {
        activatePopUp((
            <RemoveAPIPopUp
                api={api}
                enabledCards={enabledCards}
                setEnabledCards={setEnabledCards}
            />
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
