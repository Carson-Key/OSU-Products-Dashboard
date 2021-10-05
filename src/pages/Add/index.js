// Package
import { useState } from 'react'
import { useCookies } from 'react-cookie';
// Helpers
import { APIs, AddURL } from '../../helpers/statusAPIObjects.js'
import { defaultObjectValue } from '../../helpers/basic.js'
import { useEffect } from 'react';

const Add = () => {
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const defaultAPISArray = Object.keys(APIs)

    const toggleStatusAPI = (event, api) => {
        let newStateValue = {...enabledCards}

        console.log(newStateValue)

        if (newStateValue[api]) {
            delete newStateValue[api]
        } else {
            newStateValue[api] = APIs[api]
        }
        
        setEnabledCards(newStateValue)
    }
    const saveNewConfig = () => {
        setApiCookie('APIs', enabledCards, { path: '/' })
    }

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 flex flex-wrap justify-evenly">
                {
                    defaultAPISArray.map((api, i) => {
                        if (APIs[api].link === AddURL) {
                            return null
                        } else {
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
                        }
                    })
                }
                <button className="border-2 px-2" onClick={saveNewConfig}>Save</button>
            </form>
        </div>
	)
}

export default Add
