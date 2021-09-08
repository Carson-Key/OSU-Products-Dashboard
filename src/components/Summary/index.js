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
		<>
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
		</>
	)
}

export default Summary
