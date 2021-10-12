// Package
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from "react-router-dom"
// Components
import CheckBoxes from '../../components/CheckBoxes/index.js'
// Helpers
import { APIs, excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { capitalizeFirstLetter } from '../../helpers/basic.js'

const Add = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const [apiName, setAPIName] = useState("")
    const [apiLink, setAPILink] = useState("")
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
    const setInputField = (event, setState) => {
        setState(event.target.value)
    }
    const addNewAPI = (event) => {
        event.preventDefault()
        const beatifiedName = capitalizeFirstLetter(apiName.toLowerCase())
        fetch(apiLink)
            .then((response) => {
                if (apiCookie.addedAPIs) {
                    setApiCookie('AddedAPIs', {
                        ...apiCookie.addedAPIs, 
                        [beatifiedName]: {
                            name: beatifiedName,
                            link: apiLink
                        }
                    }, { path: '/' })
                } else {
                    setApiCookie('AddedAPIs', {
                        [beatifiedName]: {
                            name: beatifiedName,
                            link: apiLink
                        }
                    }, { path: '/' })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                        <input className="border-2" type="text" name="name" onChange={(event) => {
                            setInputField(event, setAPIName)
                        }}/>
                    </label>
                    <label>
                        Product Status Page Link:
                        <input className="border-2" type="text" name="link" onChange={(event) => {
                            setInputField(event, setAPILink)
                        }}/>
                    </label>
                    <button className="border-2 px-2" onClick={addNewAPI}>Add</button>
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
