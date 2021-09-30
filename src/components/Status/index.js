const Status = (props) => {
    const { name, color, description } = props
	
	return (
		<div className={color + " text-white px-8 py-2"}>
			<p>{name} Status:</p>
			<center><p>{description}</p></center>
		</div>
	)
}

export default Status
