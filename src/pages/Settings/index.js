// Package
import { useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// Components
import CheckBoxes from '../../components/CheckBoxes'
import Input from '../../components/Input'
// Helpers
import { APIs, excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { addNewAPI } from '../../helpers/checkAddedLink.js'
// Contexts
import { NotificationContext } from '../../helpers/notificationHandling/NotificationContext.js'

const Settings = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const [apiName, setAPIName] = useState("")
    const [apiLink, setAPILink] = useState("")
    const defaultAPISArray = Object.keys(excludedAPIs())
    const addedAPISArray = Object.keys(apiCookie.addedAPIs ? apiCookie.addedAPIs : {})
    const [notificationState, notificationDispatch] = useContext(NotificationContext)

    // To satisfy the compiler warnings
    if (notificationState) {}

    const toggleStatusAPI = (event, api, apiObjec) => {
        let newStateValue = {...enabledCards}
        if (newStateValue[api]) {
            delete newStateValue[api]
        } else {
            newStateValue[api] = apiObjec[api]
        }
        
        setEnabledCards(newStateValue)
    }
    const deleteAddedAPI = (api) => {
        let newAddedAPIsCookie = {...apiCookie.addedAPIs}
        if (newAddedAPIsCookie[api]) {
            delete newAddedAPIsCookie[api]
            setApiCookie('addedAPIs', newAddedAPIsCookie, { path: '/' })
        }
        if (apiCookie.APIs[api]) {
            let newAPIs = {...apiCookie.APIs}
            delete newAPIs[api]
            if (enabledCards[api]) {
                let newStateValue = {...enabledCards}
                delete newStateValue[api]
                setEnabledCards(newStateValue)
            }
            setApiCookie('APIs', newAPIs, { path: '/' })
        }
    }
    const saveNewConfig = (event) => {
        event.preventDefault()
        setApiCookie('APIs', enabledCards, { path: '/' })
        history.push("/")
    }
    const setInputField = (event, setState) => {
        setState(event.target.value)
    }

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 grid grid-cols-2 gap-2">
                <section className="grid grid-cols-1 border-2 row-span-2">
                    <div>
                        <h3>Default Products</h3>
                        <CheckBoxes 
                            checkBoxArray={defaultAPISArray} 
                            enabledCheckBoxes={enabledCards} 
                            toggleStatus={toggleStatusAPI} 
                            apiObject={APIs}
                        />
                    </div>
                    <div>
                        <h3>User Added Products</h3>
                        <CheckBoxes 
                            checkBoxArray={addedAPISArray} 
                            enabledCheckBoxes={enabledCards} 
                            toggleStatus={toggleStatusAPI} 
                            apiObject={apiCookie.addedAPIs}
                        />
                    </div>
                </section>
                <section className="grid grid-cols-1 border-2">
                    <Input 
                        onChange={(event) => {
                            setInputField(event, setAPIName)
                        }}
                        labelClass="w-full"
                        inputClass="border-2"
                        name="name"
                        labelText="Product Name:"
                        type="text"
                    />
                    <Input 
                        onChange={(event) => {
                            setInputField(event, setAPILink)
                        }}
                        labelClass="w-full"
                        inputClass="border-2"
                        name="link"
                        labelText="Product Status Page Link:"
                        type="text"
                    />
                    <button className="border-2 px-2 w-20 mx-auto" onClick={(event) => {
                        event.preventDefault()
                        addNewAPI(apiName, apiLink, apiCookie, setApiCookie,  notificationDispatch)
                    }}>Add</button>
                </section>
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
                <section className="col-span-2 mx-auto my-10">
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

export default Settings
