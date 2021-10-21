// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

const ResetActiveAPIs = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie, removeCookie] = useCookies(['APIs'])

    // To please the compiler
    if (apiCookie) {}
    if (setApiCookie) {}
    
    useEffect(() => {
        removeCookie('APIs')
        history.push("/")
    }, [history, removeCookie])

	return (
        <></>
	)
}

export default ResetActiveAPIs
