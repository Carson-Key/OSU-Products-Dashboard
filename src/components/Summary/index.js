// Packages
import { useEffect, useState } from 'react'
// Components
import Status from '../Status'
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
			<ul>
				{
					summary.incidents.map((incident, i) => {
						return (
							<li key={i}>
								<p>{incident.name}</p>
								<p>{incident.impact}</p>
								<ul>
									{
										incident.incident_updates.map((update, i) => {
											return (
												<li>
													<p>{update.body}</p>
												</li>
											)
										})
									}
								</ul>
							</li>
						)
					})
				}
			</ul>
			<br />
		</section>
	)
}

export default Summary
