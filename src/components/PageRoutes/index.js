// Packages
import {
	Switch,
	Route
} from 'react-router-dom'
// Components
import Dashboard from '../../pages/Dashboard'
import Add from '../../pages/Add'

const PageRoutes = () => {
	return (
        <Switch>
            <Route path="/settings">
                <Add />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
	)
}

export default PageRoutes
