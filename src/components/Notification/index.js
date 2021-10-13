// Packages
import { useEffect, useState } from 'react'

const Notification = (props) => {
  const { message, type } = props
  const [backgroundColor, setBackgroundColor] = useState("bg-indigo-300")

  useEffect(() => {
    const determineBGColor = () => {
      if (type === "error") {
        setBackgroundColor("bg-red-400 ")
      } else {
        setBackgroundColor("bg-indigo-300 ")
      }
    }

    determineBGColor()
  }, [type])

  return (
    <div className={
      backgroundColor + 
      "absolute self-center w-25pr top-0 left-0 text-white mx-1 mt-2pr rounded mx-40pr w-20pr p-2"
    }>
      <p>{message}</p>
    </div>
  )
}

export default Notification;
