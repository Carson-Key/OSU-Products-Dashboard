// Packages
import { MdAddCircleOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const StatusNone = (props) => {
    return (
        <Link to="/add">
            <div className="flex justify-center items-center h-60">
                <MdAddCircleOutline className="text-gray-400 h-20 w-20" />
            </div>
        </Link>
    )
}

export default StatusNone