// Packages
import { useEffect, useState } from 'react'
// Helpers
import { notificationTypes } from '../../helpers/notificationHandling/notificationHelpers.js'

const Notification = (props) => {
  const { message, type } = props
  const [backgroundColor, setBackgroundColor] = useState("bg-indigo-300")

  useEffect(() => {
    const determineBGColor = () => {
      if (type === notificationTypes.error) {
        setBackgroundColor("bg-red-400 ")
      } else {
        setBackgroundColor("bg-indigo-300 ")
      }
    }

    determineBGColor()
  }, [type])

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

export default Notification;
