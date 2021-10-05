// Components
import Summary from './components/Summary'
// Helpers
import { APIs } from './helpers/statusAPIObjects.js'

const App = () => {
	return (
		<>
			<header className="flex w-screen h-16 my-auto bg-osuOrange">
				<p className="text-white mx-auto my-auto lg:ml-6 text-3xl">
					Products Status
				</p>
			</header>
			<main className="h-screen my-10">
				<div className="flex flex-wrap justify-evenly">
					<Summary api={APIs.Box} />
					<Summary api={APIs.Kaltura} />
					<Summary api={APIs.Instructure} />
					<Summary api={APIs.Zoom} />
					<Summary api={APIs.AddAPI} />
				</div>
			</main>
		</>
	)
}

export default App
