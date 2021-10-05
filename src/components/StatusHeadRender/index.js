// Helpers
import { parseStatus } from '../../helpers/parseSatus'

const StatusHeadRender = (props) => {
    const { status, renderObject } = props

	return parseStatus(status, renderObject)
}

export default StatusHeadRender
