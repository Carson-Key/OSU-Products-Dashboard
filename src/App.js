// Packages
import { useEffect, useState } from 'react'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})

	useEffect(() => {
		fetch('https://status.box.com/api/v2/status.json')
			.then((response) => response.json())
			.then((json) => {
				setBoxStatus(json)
			})
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxStatus.status.description}</p>
		</>
	)
}

export default App
