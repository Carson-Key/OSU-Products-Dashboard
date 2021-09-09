const Status = (props) => {
    const { name, description } = props

	return (
		<>
			<p>{name} Status:</p>
			<p>{description}</p>
		</>
	)
}

export default Status
