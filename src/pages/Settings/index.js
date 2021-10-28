// Package
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// UIs
import ActivateSection from '../../UI/ActivateSection'
import AddAPI from '../../UI/AddAPI'
// Helpers
import { excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { toggleStatusAPI as toggleStatus, saveNewConfig, deleteAdded } from '../../helpers/addActive.js'

const Settings = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const defaultAPISArray = Object.keys(excludedAPIs())
    const addedAPISArray = Object.keys(apiCookie.addedAPIs ? apiCookie.addedAPIs : {})

    const toggleStatusAPI = (event, api, apiObjec) => {
        toggleStatus(api, apiObjec, enabledCards, setEnabledCards)
    }
    const deleteAddedAPI = (api) => {
        deleteAdded(apiCookie, api, setApiCookie, enabledCards, setEnabledCards)
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
                <AddAPI />
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
