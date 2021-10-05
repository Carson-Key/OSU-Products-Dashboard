// Components
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		<>
			<header className="flex w-screen h-16 my-auto bg-osuOrange">
				<p className="text-white mx-auto my-auto lg:ml-6 text-3xl">
					Products Status
				</p>
			</header>
			<main className="h-screen my-10">
				<Dashboard />
			</main>
		</>
	)
}

export default App
