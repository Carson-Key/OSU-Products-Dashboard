const Updates = (props) => {
    const { incidentUpdates } = props

	return (
        <ul>
            {
                incidentUpdates.map((update, i) => {
                    return (
                        <li>
                            <p>{update.body}</p>
                        </li>
                    )
                })
            }
        </ul>
	)
}

export default Updates
