// Packages
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
// Components
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<Router>
			<header className="flex w-screen h-16 my-auto bg-osuOrange">
				<p className="text-white mx-auto my-auto lg:ml-6 text-3xl">
					Products Status
				</p>
			</header>
			<main className="h-screen my-10">
				<Switch>
					<Route path="/">
						<Dashboard />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}

export default App
