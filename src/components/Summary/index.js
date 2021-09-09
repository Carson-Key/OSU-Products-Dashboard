// Packages
import { useEffect, useState } from 'react'
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
			<p>{api.name} Status:</p>
			<p>{summary.status.description}</p>
			{
				summary.incidents.map((item, i) => {
					return (
						<p key={i}>{item.name}</p>
					)
				})
			}
			<br />
		</section>
	)
}

export default Summary
