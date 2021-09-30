// Components
import Summary from './components/Summary'
// Helpers
import { APIs } from './helpers/statusAPICall.js'

const App = () => {
	return (
		<main className="flex">
			<div className="mt-4 w-auto h-auto mx-auto">
				<Summary api={APIs.Box} />
				{/* <Summary api={APIs.Kaltura} />
				<Summary api={APIs.Instructure} />
				<Summary api={APIs.Zoom} /> */}
			</div>
		</main>
	)
}

export default App
