// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// Helpers
import { removeAddedCookies } from '../../helpers/removeCookies'

const ResetActiveAPIs = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie, removeCookie] = useCookies(['APIs'])
    
    useEffect(() => {
        removeAddedCookies(apiCookie, setApiCookie, removeCookie)
        history.push("/")
    }, [history, removeCookie, apiCookie, setApiCookie])

	return (
        <></>
	)
}

export default ResetActiveAPIs
