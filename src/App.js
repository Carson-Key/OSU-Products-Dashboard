// Packages
import { useEffect, useState } from 'react'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})
	const [kalturaSatus, setKalturaSatus] = useState({status: {description: "loading..."}})
	const [instructorSatus, setInstructorSatus] = useState({status: {description: "loading..."}})

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

		fetch('https://status.instructure.com/api/v2/status.json')
			.then((response) => response.json())
			.then((json) => {
				setInstructorSatus(json)
			})
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxStatus.status.description}</p>
			<p>Kaltura Status:</p>
			<p>{kalturaSatus.status.description}</p>
			<p>Instructor Status:</p>
			<p>{instructorSatus.status.description}</p>
		</>
	)
}

export default App
