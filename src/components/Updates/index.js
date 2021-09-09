const Updates = (props) => {
    const { incidentUpdates } = props

	return (
        <ul>
            {
                incidentUpdates.map((update, i) => {
                    return (
                        <li key={i}>
                            <p>{update.body}</p>
                        </li>
                    )
                })
            }
        </ul>
	)
}

export default Updates
