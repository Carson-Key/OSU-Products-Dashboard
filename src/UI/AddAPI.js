// Package
import { useState, useContext } from 'react'
import { useCookies } from 'react-cookie'
// Components
import Input from '../components/Input'
// Helper
import { addNewAPI } from '../helpers/addAPI.js'
// Contexts
import { NotificationContext } from '../helpers/notificationHandling/NotificationContext.js'

const AddAPI = () => {
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const [apiName, setAPIName] = useState("")
    const [apiLink, setAPILink] = useState("")
    const [notificationState, notificationDispatch] = useContext(NotificationContext)

    // To satisfy the compiler warnings
    if (notificationState) {}

    const setInputField = (event, setState) => {
        setState(event.target.value)
    }

	return (
        <section className="grid grid-cols-1 border-2">
            <Input 
                onChange={(event) => {
                    setInputField(event, setAPIName)
                }}
                labelClass="w-full"
                inputClass="border-2"
                name="name"
                labelText="Product Name:"
                type="text"
            />
            <Input 
                onChange={(event) => {
                    setInputField(event, setAPILink)
                }}
                labelClass="w-full"
                inputClass="border-2"
                name="link"
                labelText="Product Status Page Link:"
                type="text"
            />
            <button className="border-2 px-2 w-20 mx-auto" onClick={(event) => {
                event.preventDefault()
                addNewAPI([{name: apiName, link: apiLink}], apiCookie, setApiCookie, notificationDispatch)
            }}>Add</button>
        </section>
	)
}

export default AddAPI
