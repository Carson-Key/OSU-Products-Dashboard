// Components
import Input from './Input'
// Helpers
import { defaultObjectValue } from '../helpers/basic'

const CheckBoxes = (props) => {
    const { checkBoxArray, enabledCheckBoxes, toggleStatus, apiObject } = props

    return checkBoxArray.map((checkbox, i) => {
        return (
            <Input 
                key={i}
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
