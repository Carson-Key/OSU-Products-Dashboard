const App = () => {
	fetch('https://status.box.com/api/v2/status.json')
		.then((response) => response.json())
		.then((json) => {
			console.log(json)
		})

	return (
		<>
			hello world
		</>
	)
}

export default App
