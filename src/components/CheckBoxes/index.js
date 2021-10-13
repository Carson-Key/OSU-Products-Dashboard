// Components
import Input from '../Input'
// Helpers
import { defaultObjectValue } from '../../helpers/basic.js'

const CheckBoxes = (props) => {
    const { checkBoxArray, enabledCheckBoxes, toggleStatus, apiObject } = props

    return checkBoxArray.map((checkbox, i) => {
        return (
            <Input 
                onChange={(event) => {
                    toggleStatus(event, checkbox, apiObject)
                }}
                labelClass="mx-4"
                name={checkbox}
                labelText={checkbox}
                checked={defaultObjectValue(enabledCheckBoxes, checkbox)}
                type="checkbox"
            />
        )
    })
}

export default CheckBoxes
