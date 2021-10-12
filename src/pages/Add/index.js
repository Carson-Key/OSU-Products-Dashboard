// Package
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"
// Components
import CheckBoxes from '../../components/CheckBoxes/index.js'
// Helpers
import { APIs, excludedAPIs } from '../../helpers/statusAPIObjects.js'

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
                <section>
                    <CheckBoxes 
                        checkBoxArray={defaultAPISArray} 
                        enabledCheckBoxes={enabledCards} 
                        toggleStatus={toggleStatusAPI} 
                    />
                </section>
                <section>
                    <label>
                        Product Name:
                        <input className="border-2" type="text" name="name" />
                    </label>
                    <label>
                        Product Status Page Link:
                        <input className="border-2" type="text" name="link" />
                    </label>
                </section>
                <section>
                    <button className="border-2 px-2" onClick={saveNewConfig}>Save</button>
                    <button className="border-2 px-2" onClick={(event) => {
                        event.preventDefault()
                        history.push("/")
                    }}>Back</button>
                </section>
            </form>
        </div>
	)
}

export default Add
