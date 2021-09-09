const Incidents = (props) => {
    const { incidents } = props

	return (
        <ul>
            {
                incidents.map((incident, i) => {
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
	)
}

export default Incidents
