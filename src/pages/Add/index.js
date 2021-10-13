// Packages
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Add = () => {
    let { toAdd } = useParams()

    useEffect(() => {
        console.log(toAdd)
    })

	return (
        <></>
	)
}

export default Add
