// Packages
import {
	Switch,
	Route
} from 'react-router-dom'
// Components
import Dashboard from '../../pages/Dashboard'
import Add from '../../pages/Add'
import Settings from '../../pages/Settings'

const PageRoutes = () => {
	return (
        <Switch>
            <Route path="/add/:toAdd">
                <Add />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
	)
}

export default PageRoutes
