// Components
import Summary from './components/Summary'
// Helpers
import { APIs } from './helpers/statusAPICall.js'

const App = () => {
	return (
		<main className="flex flex-wrap justify-evenly py-4 h-screen">
			<Summary api={APIs.Box} />
			<Summary api={APIs.Kaltura} />
			<Summary api={APIs.Instructure} />
			<Summary api={APIs.Zoom} />
		</main>
	)
}

export default App
