// Components
import Summary from './components/Summary'
// Helpers
import { APIs } from './helpers/statusAPICall.js'

const App = () => {
	return (
		<div>
			<header className="flex w-screen h-16 my-auto bg-osuOrange">
				<p className="text-white mx-auto my-auto lg:ml-6 text-3xl">
					Products Status
				</p>
			</header>
			<main className="flex flex-wrap justify-evenly py-10 h-screen">
				<Summary api={APIs.Box} />
				<Summary api={APIs.Kaltura} />
				<Summary api={APIs.Instructure} />
				<Summary api={APIs.Zoom} />
			</main>
		</div>
	)
}

export default App
