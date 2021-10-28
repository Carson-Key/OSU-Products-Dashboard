// Packages
import {BrowserRouter as Router} from 'react-router-dom'
// UI
import Header from './UI/Header'
import NotificationHandler from './UI/NotificationHandler'
import Body from './UI/Body'
// Components
import LoadDefaultAPIs from './components/LoadDefaultAPIs'

const App = () => {
	return (
		<Router>
			<LoadDefaultAPIs />
			<NotificationHandler />
			<Header />
			<Body />
		</Router>
	)
}

export default App
