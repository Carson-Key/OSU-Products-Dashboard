// Packages
import { NavLink } from "react-router-dom"
import { MdSettings } from "react-icons/md"

const Header = () => {
	return (
        <header className="flex justify-between w-screen h-16 my-auto bg-osuOrange">    
            <NavLink to="/" className="text-white mx-auto my-auto lg:ml-6 text-3xl">
                <h1>Products Status</h1>
            </NavLink>
            <NavLink to="/settings" className="flex justify-center items-center h-full w-16">
                <MdSettings className="text-white text-3xl" />
            </NavLink>
        </header>
	)
}

export default Header
