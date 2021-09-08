// Packages
import { useEffect, useState } from 'react'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})
	const [kalturaSatus, setKalturaSatus] = useState({status: {description: "loading..."}})

	useEffect(() => {
		fetch('https://status.box.com/api/v2/status.json')
			.then((response) => response.json())
			.then((json) => {
				setBoxStatus(json)
			})

		fetch('https://status.kaltura.com/api/v2/status.json')
			.then((response) => response.json())
			.then((json) => {
				setKalturaSatus(json)
			})
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxStatus.status.description}</p>
			<p>Kaltura Status:</p>
			<p>{kalturaSatus.status.description}</p>
		</>
	)
}

export default App
