const AddStatusHead = (props) => {
	const { name, color } = props

	return (
		<div className={color + " text-white px-8 py-2 rounded-t-lg"}>
			<center><p>{name}</p></center>
		</div>
	)
}

export default AddStatusHead
