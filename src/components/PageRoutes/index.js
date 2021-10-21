// Packages
import {
	Switch,
	Route
} from 'react-router-dom'
// Pages
import Dashboard from '../../pages/Dashboard'
import Add from '../../pages/Add'
import Settings from '../../pages/Settings'
import ResetActiveAPIs from '../../pages/ResetActiveAPIs'
import ResetAddedAPIs from '../../pages/ResetAddedAPIs'

const PageRoutes = () => {
	return (
        <Switch>
            <Route path="/add/:toAdd+*">
                <Add />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route path="/reset_active_apis">
                <ResetActiveAPIs />
            </Route>
            <Route path="/reset_added_apis">
                <ResetAddedAPIs />
            </Route>
            <Route path="/reset_all_api_cookies">
                <ResetActiveAPIs />
                <ResetAddedAPIs />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
	)
}

export default PageRoutes
