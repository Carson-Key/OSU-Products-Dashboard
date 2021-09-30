// Packages
import { useEffect, useState } from 'react'
// Components
import Status from '../Status'
import StatusRender from '../StatusRender'
import Incidents from '../Incidents'
import Loading from '../Loading'
import StatusNone from '../StatusNone'
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
		<section className="mt-8 w-72 h-72 rounded-xl border-2">
			<Status 
				name={api.name} 
				color={statusColor} 
				description={summary.status.description}
			/>
			<StatusRender 
				status={summary.status.indicator}
				renderObject={{
					"none": <StatusNone />,
					"minor": <Incidents incidents={summary.incidents} />,
					"major": <Incidents incidents={summary.incidents} />,
					"critical": <Incidents incidents={summary.incidents} />,
					"other": <Loading />
				}}
			/>
		</section>
	)
}

export default Summary
