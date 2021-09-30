const Status = (props) => {
    const { name, color, description } = props
	
	return (
		<div className={color + " text-white px-8 py-2 rounded-t-lg"}>
			<p>{name} Status:</p>
			<p><center>{description}</center></p>
		</div>
	)
}

export default Status
