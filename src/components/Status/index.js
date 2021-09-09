const Status = (props) => {
    const { name, color, description } = props
	
	return (
		<>
			<p>{name} Status:</p>
			<p className={color}>{description}</p>
		</>
	)
}

export default Status
