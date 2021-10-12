// Package
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"
// Helpers
import { APIs, excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { defaultObjectValue } from '../../helpers/basic.js'

const Add = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const defaultAPISArray = Object.keys(excludedAPIs())

    const toggleStatusAPI = (event, api) => {
        let newStateValue = {...enabledCards}

        if (newStateValue[api]) {
            delete newStateValue[api]
        } else {
            newStateValue[api] = APIs[api]
        }
        
        setEnabledCards(newStateValue)
    }
    const saveNewConfig = (event) => {
        event.preventDefault()
        setApiCookie('APIs', enabledCards, { path: '/' })
        history.push("/")
    }

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 flex flex-wrap justify-evenly" onSubmit={saveNewConfig}>
                {
                    defaultAPISArray.map((api, i) => {
                        return (
                            <label key={i} className="mx-4">
                                {api}
                                <input
                                    name={api}
                                    type="checkbox"
                                    checked={defaultObjectValue(enabledCards, api)}
                                    onChange={(event) => {toggleStatusAPI(event, api)}}
                                />
                            </label>
                        )
                    })
                }
                <button className="border-2 px-2" onClick={saveNewConfig}>Save</button>
                <button className="border-2 px-2" onClick={(event) => {
                    event.preventDefault()
                    history.push("/")
                }}>Back</button>
            </form>
        </div>
	)
}

export default Add
