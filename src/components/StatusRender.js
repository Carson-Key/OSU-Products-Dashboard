// Helpers
import { defaultKeyValue } from '../helpers/basic'

const StatusRender = (props) => {
    const { status, renderObject } = props

    return defaultKeyValue(status, renderObject)
}

export default StatusRender