// Packages
import { useEffect, useState } from 'react'
// Component
import StatusHead from '../StatusHead'
import StatusRender from '../StatusRender'
import Incidents from '../Incidents'
import Loading from '../Loading'
import StatusNone from '../StatusNone'
import AddNewStatus from '../AddNewStatus'
import AddStatusHead from '../AddStatusHead'
// Helpers
import { apiInitSummaryState } from '../../helpers/statusAPIObjects'
import { fetchJSON } from '../../helpers/statusAPITest.js'
import { determineStatusBG, determineStatusBorder } from '../../helpers/className'

const Summary = (props) => {
    const { api } = props
	const [summary, setSummary] = useState(apiInitSummaryState)
	const [statusColor, setStatusColor] = useState(determineStatusBG("loading..."))
	const [statusBorderColor, setStatusBorderColor] = useState(determineStatusBorder("loading..."))

	useEffect(() => {
		fetchJSON(api.link, setSummary)
	}, [api])
	useEffect(() => {
		setStatusColor(determineStatusBG(summary.status.indicator))
		setStatusBorderColor(determineStatusBorder(summary.status.indicator))
	}, [summary])

	return (
		<section className={statusBorderColor + " m-4 w-72 h-72 rounded-xl bg-white"}>
			<StatusRender
				status={summary.status.indicator}
				renderObject={{
					"add": 
						<AddStatusHead name={api.name} color={statusColor} />,
					"other": 
						<StatusHead
							name={api.name} 
							color={statusColor} 
							description={summary.status.description} 
						/>
				}}
			/>
			<StatusRender 
				status={summary.status.indicator}
				renderObject={{
					"none": <StatusNone />,
					"minor": <Incidents incidents={summary.incidents} />,
					"major": <Incidents incidents={summary.incidents} />,
					"critical": <Incidents incidents={summary.incidents} />,
					"add": <AddNewStatus />,
					"other": <Loading />
				}}
			/>
		</section>
	)
}

export default Summary
