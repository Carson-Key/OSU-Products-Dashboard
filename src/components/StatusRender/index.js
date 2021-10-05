// Helpers
import { parseStatus } from '../../helpers/parseSatus'

const StatusRender = (props) => {
    const { status, renderObject } = props

    return parseStatus(status, renderObject)
}

export default StatusRender