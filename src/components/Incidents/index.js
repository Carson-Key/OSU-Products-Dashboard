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
                        </li>
                    )
                })
            }
        </ul>
	)
}

export default Incidents
