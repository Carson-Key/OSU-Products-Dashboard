// Packages
import { useEffect, useContext } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
// Helpers
import { addNewAPI } from '../../helpers/checkAddedLink.js'
// Contexts
import { NotificationContext } from '../../helpers/notificationHandling/NotificationContext.js'

const Add = () => {
    let history = useHistory()
    let params = useParams()
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [notificationState, notificationDispatch] = useContext(NotificationContext)

    // To satisfy the compiler warnings
    if (notificationState) {}

    useEffect(() => {
        const fullToAdd = params.toAdd + params[0]
        const toAddSplit = fullToAdd.split(",")
        for (let i = 0; i < toAddSplit.length; i+=2) {
            const name = toAddSplit[i].split("=")[1]
            const link = toAddSplit[i+1].split("=")[1]
            addNewAPI(name, link, apiCookie, setApiCookie, notificationDispatch)
        }
        // history.push("/")
    }, [])

	return (
        <></>
	)
}

export default Add
