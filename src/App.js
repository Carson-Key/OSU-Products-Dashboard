// Components
import Summary from './components/Summary'
// Helpers
import { APIs } from './helpers/statusAPICall.js'

const App = () => {
	return (
		<>
			<Summary api={APIs.Box} />
			<Summary api={APIs.Kaltura} />
			<Summary api={APIs.Instructure} />
			<Summary api={APIs.Zoom} />
		</>
	)
}

export default App
