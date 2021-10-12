// Packages
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { MdSettings } from "react-icons/md";
// Components
import Dashboard from './pages/Dashboard'
import Add from './pages/Add'

const App = () => {
	return (
		<Router>
			<header className="flex justify-between w-screen h-16 my-auto bg-osuOrange">
				<p className="text-white mx-auto my-auto lg:ml-6 text-3xl">
					Products Status
				</p>
				<NavLink to="/add" className="flex justify-center items-center h-full w-16">
					<MdSettings className="text-white text-3xl" />
				</NavLink>
			</header>
			<main className="my-10">
				<Switch>
					<Route path="/add">
						<Add />
					</Route>
					<Route path="/">
						<Dashboard />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}

export default App
