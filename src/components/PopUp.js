const PopUp = (props) => {
  const { children } = props

  return (
    <>
        <div className="absolute left-0 top-0 w-screen h-screen bg-gray-500 bg-opacity-50"></div>
        <div className="flex absolute inset-y-80 inset-x-96 bg-white">
            <div className="m-auto">
                {children}
            </div>
        </div>
    </>
  )
}

export default PopUp
