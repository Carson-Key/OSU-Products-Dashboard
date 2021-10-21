// Packages
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

const ResetActiveAPIs = () => {
    let history = useHistory()
    const [apiCookie, setApiCookie, removeCookie] = useCookies(['APIs'])
    
    useEffect(() => {
        let newActiveAPIs = {}
        let activeAPIsArray = []

        if (apiCookie.APIs) {
            newActiveAPIs = {...apiCookie.APIs}
        }
        if (apiCookie.addedAPIs) {
            activeAPIsArray = Object.keys(apiCookie.addedAPIs)
        }
        
        activeAPIsArray.forEach((api) => {
            delete newActiveAPIs[api]
        })
        setApiCookie('APIs', newActiveAPIs, { path: '/' })
        removeCookie('addedAPIs')
        history.push("/")
    }, [history, removeCookie, apiCookie, setApiCookie])

	return (
        <></>
	)
}

export default ResetActiveAPIs
