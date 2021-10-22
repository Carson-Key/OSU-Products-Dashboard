// Packages
import {BrowserRouter as Router} from 'react-router-dom'
// Components
import Header from './components/Header'
import PageRoutes from './components/PageRoutes'
import NotificationHandler from './components/NotificationHandler'
import LoadDefaultAPIs from './components/LoadDefaultAPIs'

const App = () => {
	return (
		<Router>
			<LoadDefaultAPIs />
			<NotificationHandler />
			<Header />
			<main className="my-10">
				<PageRoutes />
			</main>
		</Router>
	)
}

export default App
