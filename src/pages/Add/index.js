// Packages
import { useEffect, useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// Components
import Loading from '../../components/Loading'
// Helpers
import { addMultipleAPI } from '../../helpers/checkAddedLink.js'
import { capitalizeFirstLetter } from '../../helpers/basic.js'
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
        const fullToAdd = params.toAdd + params[0]
        const toAddSplit = fullToAdd.split(",")
        let apis = []
        setParsedLink(toAddSplit)
        for (let i = 0; i < toAddSplit.length; i+=2) {
            const name = toAddSplit[i].split("=")[1]
            const link = toAddSplit[i+1].split("=")[1]
            apis.push({name, link})
        }
        addMultipleAPI(apis, apiCookie, setApiCookie, notificationDispatch)
    }, [apiCookie, notificationDispatch, setApiCookie, params])
    useEffect(() => {
        let doneLoading = 0
        for (let i = 0; i < pasrsedLink.length; i+=2) {
            const name = pasrsedLink[i].split("=")[1]
            if (apiCookie.addedAPIs[capitalizeFirstLetter(name)]) {
                doneLoading++
            }
        }
        if (doneLoading === pasrsedLink.length) {
            history.push("/")
        }
    }, [apiCookie, history, pasrsedLink])

	return (
        <Loading />
	)
}

export default Add
