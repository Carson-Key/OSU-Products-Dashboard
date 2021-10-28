const Incidents = (props) => {
    const { incidents } = props

	return (
        <ul className="overflow-auto flex flex-wrap justify-center items-center h-52 divide-y-2 divide-solid">
            {
                incidents.map((incident, i) => {
                    return (
                        <li key={i} className="p-3 py-5 w-full">
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
