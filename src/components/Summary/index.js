// Packages
import { useEffect, useState } from 'react'
// Components
import Status from '../Status'
import Incidents from '../Incidents'
// Helpers
import { fetchJSON, apiInitSummaryState } from '../../helpers/statusAPICall.js'

const Summary = (props) => {
    const { api } = props
	const [summary, setSummary] = useState(apiInitSummaryState)

	useEffect(() => {
		fetchJSON(api.link, setSummary)
	}, [api])

	return (
		<section className="w-auto mx-auto mt-4 border-2 p-3">
			<Status name={api.name} description={summary.status.description}/>
			<Incidents incidents={summary.incidents} />
			<br />
		</section>
	)
}

export default Summary
