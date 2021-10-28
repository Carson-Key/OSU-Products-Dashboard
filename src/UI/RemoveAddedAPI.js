// Package
import { useState } from 'react'
import { useCookies } from 'react-cookie'
// Helpers
import { deleteAdded } from '../helpers/addActive.js'

const RemoveAddedAPI = (props) => {
    const { addedAPISArray } = props
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})

    const deleteAddedAPI = (api) => {
        deleteAdded(apiCookie, api, setApiCookie, enabledCards, setEnabledCards)
    }

	return (
        <section className="flex flex-wrap justify-evenly border-2">
            {
                addedAPISArray.map((api, i) => {
                    return (
                        <label key={i} className="grid grid-cols-1 w-24 font-semibold px-2 py-1">
                            {api}
                            <button className="text-white bg-red-500" onClick={() => {deleteAddedAPI(api)}}>Remove</button>
                        </label>
                    )
                })
            }
        </section>
	)
}

export default RemoveAddedAPI
