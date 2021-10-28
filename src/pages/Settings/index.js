// Package
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// UIs
import ActivateSection from '../../UI/ActivateSection'
import AddAPI from '../../UI/AddAPI'
import RemoveAddedAPI from '../../UI/RemoveAddedAPI'
// Helpers
import { excludedAPIs } from '../../helpers/statusAPIObjects.js'
import { toggleStatusAPI as toggleStatus, saveNewConfig } from '../../helpers/addActive.js'

const Settings = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [enabledCards, setEnabledCards] = useState({...apiCookie.APIs})
    const defaultAPISArray = Object.keys(excludedAPIs())
    const addedAPISArray = Object.keys(apiCookie.addedAPIs ? apiCookie.addedAPIs : {})

    const toggleStatusAPI = (event, api, apiObjec) => {
        toggleStatus(api, apiObjec, enabledCards, setEnabledCards)
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
                <RemoveAddedAPI
                    addedAPISArray={addedAPISArray} 
                />
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
