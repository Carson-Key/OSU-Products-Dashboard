// Packages
import { Link } from 'react-router-dom'

const AddStatusHead = (props) => {
	const { name, color } = props

	return (
		<Link to="/add">
			<div className={color + " text-white px-8 py-2 rounded-t-lg"}>
				<center><p>{name}</p></center>
			</div>
		</Link>
	)
}

export default AddStatusHead
