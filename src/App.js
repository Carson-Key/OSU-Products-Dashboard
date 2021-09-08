// Packages
import { useEffect, useState } from 'react'
// Helpers
import { fetchJSON, apiLinks } from './helpers/statusAPICall.js'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})
	const [kalturaSatus, setKalturaSatus] = useState({status: {description: "loading..."}})
	const [instructureSatus, setInstructureSatus] = useState({status: {description: "loading..."}})
	const [zoomSatus, setZoomSatus] = useState({status: {description: "loading..."}})

	useEffect(() => {
		fetchJSON(apiLinks.Box, setBoxStatus)
		fetchJSON(apiLinks.Kaltura, setKalturaSatus)
		fetchJSON(apiLinks.Instructure, setInstructureSatus)
		fetchJSON(apiLinks.Zoom, setZoomSatus)
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxStatus.status.description}</p>
			<p>Kaltura Status:</p>
			<p>{kalturaSatus.status.description}</p>
			<p>Instructor Status:</p>
			<p>{instructureSatus.status.description}</p>
			<p>Zoom Status:</p>
			<p>{zoomSatus.status.description}</p>
		</>
	)
}

export default App
