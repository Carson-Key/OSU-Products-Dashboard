// Package
import { useState, useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// UIs
import ActivateSection from '../../UI/ActivateSection'
// Components
import Input from '../../components/Input'
// Helpers
import { excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { addNewAPI } from '../../helpers/addAPI.js'
import { toggleStatusAPI as toggleStatus, saveNewConfig, deleteAdded } from '../../helpers/addActive.js'
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
        toggleStatus(api, apiObjec, enabledCards, setEnabledCards)
    }
    const deleteAddedAPI = (api) => {
        deleteAdded(apiCookie, api, setApiCookie, enabledCards, setEnabledCards)
    }
    const setInputField = (event, setState) => {
        setState(event.target.value)
    }

    useEffect(() => {
        setEnabledCards({...apiCookie.APIs})
    }, [apiCookie])

	return (
        <div className="flex flex-wrap justify-evenly">
            <form className="w-2/3 grid grid-cols-2 gap-2">
                <ActivateSection
                    toggleStatusAPI={toggleStatusAPI}
                    defaultAPISArray={defaultAPISArray}
                    enabledCards={enabledCards}
                    addedAPISArray={addedAPISArray} 
                    addedAPIs={apiCookie.addedAPIs}
                />
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
                        addNewAPI([{name: apiName, link: apiLink}], apiCookie, setApiCookie,  notificationDispatch)
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
                    <button className="border-2 px-2" onClick={(event) => {
                        event.preventDefault()
                        saveNewConfig(enabledCards, setApiCookie)
                        history.push("/")
                    }}>Save</button>
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
