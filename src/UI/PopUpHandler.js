// Packageds
import { useContext } from 'react'
// Components
import PopUp from '../components/PopUp'
// Contexts
import { PopUpContext } from '../helpers/popUpHandling/PopUpContext'

const PopUpHandler = () => {
	const [state, dispatch] = useContext(PopUpContext)

	// To satisfy the compiler warnings
	if (dispatch) {}

	switch (state.popup.occurs) {
		case true:
			return (
				<PopUp>
                    {state.PopUp.children}
				</PopUp>
			)
		default:
			return (
				<></>
			)
	}
}

export default PopUpHandler
