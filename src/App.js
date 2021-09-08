// Packages
import { useEffect, useState } from 'react'
// Helperss
import { fetchJSON } from './helpers/statusAPICall.js'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})
	const [kalturaSatus, setKalturaSatus] = useState({status: {description: "loading..."}})
	const [instructureSatus, setInstructureSatus] = useState({status: {description: "loading..."}})
	const [zoomSatus, setZoomSatus] = useState({status: {description: "loading..."}})

	useEffect(() => {
		fetchJSON('https://status.box.com/api/v2/status.json', setBoxStatus)
		fetchJSON('https://status.kaltura.com/api/v2/status.json', setKalturaSatus)
		fetchJSON('https://status.instructure.com/api/v2/status.json', setInstructureSatus)
		fetchJSON('https://status.zoom.us/api/v2/status.json', setZoomSatus)
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
