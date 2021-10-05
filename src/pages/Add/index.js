// Package
import { useState } from 'react'
// Helpers
import { APIs, AddURL } from '../../helpers/statusAPIObjects.js'
import { defaultObjectValue } from '../../helpers/basic.js'

const Add = () => {
    const [enabledCards, setEnabledCards] = useState({})
    const defaultAPISArray = Object.keys(APIs)

    const toggleStatusAPI = (event, enabledCards, api) => {
        let newStateValue = {...enabledCards}

        if (newStateValue[api]) {
            delete newStateValue[api]
        } else {
            newStateValue[api] = APIs[api]
        }
        
        setEnabledCards(newStateValue)
    }

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 flex flex-wrap justify-evenly">
                {
                    defaultAPISArray.map((api, i) => {
                        if (APIs[api].link === AddURL) {
                            return <></>
                        } else {
                            return (
                                <label className="mx-4">
                                    {api}
                                    <input
                                        name={api}
                                        type="checkbox"
                                        checked={defaultObjectValue(enabledCards, api)}
                                        onChange={(event) => {toggleStatusAPI(event, enabledCards, api)}}
                                    />
                                </label>
                            )
                        }
                    })
                }
            </form>
        </div>
	)
}

export default Add
