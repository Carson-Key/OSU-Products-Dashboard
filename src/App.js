// Packages
import { useEffect, useState } from 'react'
// Helpers
import { fetchJSON, apiLinks, apiInitSummaryState } from './helpers/statusAPICall.js'

const App = () => {
	const [boxSummary, setBoxSummary] = useState(apiInitSummaryState)
	const [kalturaSummary, setKalturaSummary] = useState(apiInitSummaryState)
	const [instructureSummary, setInstructureSummary] = useState(apiInitSummaryState)
	const [zoomSummary, setZoomSummary] = useState(apiInitSummaryState)

	useEffect(() => {
		fetchJSON(apiLinks.Box, setBoxSummary)
		fetchJSON(apiLinks.Kaltura, setKalturaSummary)
		fetchJSON(apiLinks.Instructure, setInstructureSummary)
		fetchJSON(apiLinks.Zoom, setZoomSummary)
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxSummary.status.description}</p>
			<br />
			<p>Kaltura Status:</p>
			<p>{kalturaSummary.status.description}</p>
			<br />
			<p>Instructor Status:</p>
			<p>{instructureSummary.status.description}</p>
			<br />
			<p>Zoom Status:</p>
			<p>{zoomSummary.status.description}</p>
		</>
	)
}

export default App
