// Packages
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
// Components
import Dashboard from './pages/Dashboard'
import Add from './pages/Add'
import Header from './components/Header'

const App = () => {
	return (
		<Router>
			<Header />
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
