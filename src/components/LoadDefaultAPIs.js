// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
// Helpers
import { addDefaultAPIs } from '../helpers/addAPI.js'

const LoadDefaultAPIs = () => {
    const [apiCookie, setApiCookie] = useCookies(['APIs'])

    useEffect(() => {
        addDefaultAPIs(apiCookie, setApiCookie)
    }, [apiCookie, setApiCookie])

	return (
        <></>
	)
}

export default LoadDefaultAPIs
