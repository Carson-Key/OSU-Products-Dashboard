// Packages
import { useEffect, useState } from 'react'
// Helpers
import { fetchJSON, apiLinks, apiInitSummaryState } from './helpers/statusAPICall.js'

const App = () => {
	const [boxStatus, setBoxStatus] = useState(apiInitSummaryState)
	const [kalturaSatus, setKalturaSatus] = useState(apiInitSummaryState)
	const [instructureSatus, setInstructureSatus] = useState(apiInitSummaryState)
	const [zoomSatus, setZoomSatus] = useState(apiInitSummaryState)

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
			<br />
			<p>Kaltura Status:</p>
			<p>{kalturaSatus.status.description}</p>
			<br />
			<p>Instructor Status:</p>
			<p>{instructureSatus.status.description}</p>
			<br />
			<p>Zoom Status:</p>
			<p>{zoomSatus.status.description}</p>
		</>
	)
}

export default App
