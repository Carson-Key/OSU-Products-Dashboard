import { useContext, Fragment } from 'react';
import Notification from '../Notification'
import { NotificationContext } from '../../helpers/notificationHandling/NotificationContext.js';

const NoificationHandler = () => {
  const [state, dispatch] = useContext(NotificationContext)

  // To satisfy the compiler warnings
  if (dispatch) {}

  switch (state.notification.occurs) {
    case true:
      return (
        <Notification message={state.notification.message} type={state.notification.type} />
      )
    default:
      return (
        <Fragment></Fragment>
      )
  }
}

export default NoificationHandler;
