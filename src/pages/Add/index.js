// Packages
import { useEffect, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// Components
import Loading from '../../components/Loading'
// Helpers
import { addNewAPI } from '../../helpers/addAPI.js'
import { loadToHomePage, determineIfAddRouteFinished } from '../../helpers/loading.js'
import { generateAPIsObjectFromParams } from '../../helpers/apiParsers.js'
// Contexts
import { NotificationContext } from '../../helpers/notificationHandling/NotificationContext.js'

const Add = () => {
    let history = useHistory()
    let params = useParams()
    const [pasrsedLink, setParsedLink] = useState([])
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [notificationState, notificationDispatch] = useContext(NotificationContext)

    // To satisfy the compiler warnings
    if (notificationState) {}

    useEffect(() => {
        const apis = generateAPIsObjectFromParams(params)
        setParsedLink(apis)
        addNewAPI(apis, apiCookie, setApiCookie, notificationDispatch)
    }, [apiCookie, notificationDispatch, setApiCookie, params])
    useEffect(() => {
        loadToHomePage((doneLoading) => {
            determineIfAddRouteFinished(pasrsedLink, apiCookie.addedAPIs, doneLoading)
        }, pasrsedLink.length, history)
    }, [apiCookie, history, pasrsedLink])

	return (
        <Loading />
	)
}

export default Add
