// Package
import { useCookies } from 'react-cookie';
// Components
import Summary from '../../components/Summary'

const Dashboard = () => {
    const [apiCookie, setApiCookie] = useCookies(['APIs'])
    const activeStatusCards = Object.keys(apiCookie.APIs ? apiCookie.APIs : {})

    // To stop compiler warning
    if (setApiCookie) {}

	return (
        <div className="flex flex-wrap justify-evenly">
            {
                activeStatusCards.map((api, i) => {
                    return (
                        <Summary key={i} api={apiCookie.APIs[api]} />
                    )
                })
            }
            {/* Uncomment if you want to add back the Add Card */}
            {/* <Summary api={APIs.AddAPI} /> */}
        </div>
	)
}

export default Dashboard
