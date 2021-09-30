const Incidents = (props) => {
    const { incidents } = props

	return (
        <ul className="overflow-auto flex justify-center items-center h-52">
            {
                incidents.map((incident, i) => {
                    return (
                        <li key={i} className="px-3 pt-2">
                            <center><p className="text-lg">Impact: {incident.impact}</p></center>
                            <center><p className="mt-4">{incident.name}</p></center>
                        </li>
                    )
                })
            }
        </ul>
	)
}

export default Incidents
