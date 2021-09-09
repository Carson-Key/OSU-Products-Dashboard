// Packages
import { useEffect, useState } from 'react'
// Components
import Status from '../Status'
import Incidents from '../Incidents'
// Helpers
import { fetchJSON, apiInitSummaryState } from '../../helpers/statusAPICall.js'
import { determineStatusBG } from '../../helpers/className'

const Summary = (props) => {
    const { api } = props
	const [summary, setSummary] = useState(apiInitSummaryState)
	const [statusColor, setStatusColor] = useState(determineStatusBG("loading..."))

	useEffect(() => {
		fetchJSON(api.link, setSummary)
	}, [api])
	useEffect(() => {
		setStatusColor(determineStatusBG(summary.status.indicator))
	}, [summary])

	return (
		<section className="w-auto mx-auto mt-4 border-2 p-3">
			<Status name={api.name} color={statusColor} description={summary.status.description}/>
			<Incidents incidents={summary.incidents} />
		</section>
	)
}

export default Summary
