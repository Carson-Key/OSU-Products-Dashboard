// Helpers
import { parseStatus } from '../../helpers/parseSatus'

const StatusBodyRender = (props) => {
    const { status, renderObject } = props

    return parseStatus(status, renderObject)
}

export default StatusBodyRender