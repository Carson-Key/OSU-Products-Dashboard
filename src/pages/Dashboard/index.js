// Components
import Summary from '../../components/Summary'
// Helpers
import { APIs } from '../../helpers/statusAPIObjects.js'

const Dashboard = () => {
	return (
        <div className="flex flex-wrap justify-evenly">
            <Summary api={APIs.Box} />
            <Summary api={APIs.Kaltura} />
            <Summary api={APIs.Instructure} />
            <Summary api={APIs.Zoom} />
            <Summary api={APIs.AddAPI} />
        </div>
	)
}

export default Dashboard
