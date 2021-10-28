// Components
import CheckBoxes from '../components/CheckBoxes'
// Helpers
import { APIs } from '../helpers/statusAPIObjects.js'

const ActivateSection = (props) => {
    const { 
        toggleStatusAPI, 
        defaultAPISArray, 
        enabledCards, 
        addedAPISArray, 
        addedAPIs
    } = props

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
                    apiObject={addedAPIs}
                />
            </div>
        </section>
	)
}

export default ActivateSection
