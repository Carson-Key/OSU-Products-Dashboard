// Packages
import { useCookies } from 'react-cookie'
// Components
import CheckBoxes from '../components/CheckBoxes'
// Helpers
import { APIs, excludedAPIs } from '../helpers/statusAPIObjects'
import { toggleStatusAPI as toggleStatus } from '../helpers/addActive'

const ActivateSection = (props) => {
    const { 
        enabledCards, 
        setEnabledCards,
        addedAPISArray
    } = props
    const defaultAPISArray = Object.keys(excludedAPIs())
    const [apiCookie, setApiCookie] = useCookies(['APIs'])

    // To please the compiler warnings
    if (setApiCookie) {}

    const toggleStatusAPI = (event, api, apiObjec) => {
        toggleStatus(api, apiObjec, enabledCards, setEnabledCards)
    }

	return (
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
	)
}

export default ActivateSection
