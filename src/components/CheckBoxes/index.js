import { defaultObjectValue } from '../../helpers/basic.js'

const CheckBoxes = (props) => {
    const { checkBoxArray, enabledCheckBoxes, toggleStatus } = props

    return checkBoxArray.map((checkbox, i) => {
        return (
            <label key={i} className="mx-4">
                {checkbox}
                <input
                    name={checkbox}
                    type="checkbox"
                    checked={defaultObjectValue(enabledCheckBoxes, checkbox)}
                    onChange={(event) => {toggleStatus(event, checkbox)}}
                />
            </label>
        )
    })
}

export default CheckBoxes
