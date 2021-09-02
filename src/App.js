// Packages
import { useEffect, useState } from 'react'

const App = () => {
	const [boxStatus, setBoxStatus] = useState({status: {description: "loading..."}})
	const [kalturaSatus, setKalturaSatus] = useState("loading...")

	useEffect(() => {
		fetch('https://status.box.com/api/v2/status.json')
			.then((response) => response.json())
			.then((json) => {
				setBoxStatus(json)
			})

		fetch('https://status.kaltura.com')
			.then((response) => {
				return response.text()
			})
			.then((html) => {
				let parser = new DOMParser()
				console.log(parser.parseFromString(html, 'text/html'))
			
			})
	}, [])

	return (
		<>
			<p>Box Status:</p>
			<p>{boxStatus.status.description}</p>
			<p>Kaltura Status:</p>
			<p>{kalturaSatus}</p>
		</>
	)
}

export default App
