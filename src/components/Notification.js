// Packages
import { useState } from 'react'
// Helpers
import { determineNotificationBGColor } from '../helpers/className'

const Notification = (props) => {
  const { message, type } = props
  const [backgroundColor, setBackgroundColor] = useState(determineNotificationBGColor(type))

  // To please the compiler
  if (setBackgroundColor) {}

  return (
    <div className=
      "absolute top-6 left-0 w-screen"
    >
      <p className={
        backgroundColor + "mx-auto self-center w-1/3 text-white mt-2pr rounded p-2"
      }>
        {message}
      </p>
    </div>
  )
}

export default Notification
