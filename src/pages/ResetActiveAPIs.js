// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// Helpers
import { removeActiveCookies } from '../helpers/removeCookies'

const ResetActiveAPIs = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie, removeCookie] = useCookies(['APIs'])

    // To please the compiler
    if (apiCookie) {}
    
    useEffect(() => {
        removeActiveCookies(removeCookie, setApiCookie)
        history.push("/")
    }, [history, removeCookie, setApiCookie])

	return (
        <></>
	)
}

export default ResetActiveAPIs
