// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
// Helpers
import { excludedAPIs } from '../../helpers/statusAPIObjects.js'

const LoadDefaultAPIs = () => {
    const [apiCookie, setApiCookie] = useCookies(['APIs'])

    useEffect(() => {
        if (!apiCookie.APIs) {
            setApiCookie('APIs', excludedAPIs(), { path: '/' })
        }
    }, [apiCookie, setApiCookie])

	return (
        <></>
	)
}

export default LoadDefaultAPIs
