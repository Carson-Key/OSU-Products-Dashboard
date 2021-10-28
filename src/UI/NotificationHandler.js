// Packageds
import { useContext } from 'react'
// Components
import Notification from '../components/Notification'
// Contexts
import { NotificationContext } from '../helpers/notificationHandling/NotificationContext.js'

const NoificationHandler = () => {
	const [state, dispatch] = useContext(NotificationContext)

	// To satisfy the compiler warnings
	if (dispatch) {}

	switch (state.notification.occurs) {
		case true:
			return (
				<Notification
					message={state.notification.message} 
					type={state.notification.type} 
				/>
			)
		default:
			return (
				<></>
			)
	}
}

export default NoificationHandler
