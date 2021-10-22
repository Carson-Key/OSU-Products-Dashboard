// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
// Helpers
import { removeActiveCookies } from '../../helpers/removeCookies'

const ResetActiveAPIs = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie, removeCookie] = useCookies(['APIs'])

    // To please the compiler
    if (apiCookie) {}
    if (setApiCookie) {}
    
    useEffect(() => {
        removeActiveCookies(removeCookie)
        history.push("/")
    }, [history, removeCookie])

	return (
        <></>
	)
}

export default ResetActiveAPIs
