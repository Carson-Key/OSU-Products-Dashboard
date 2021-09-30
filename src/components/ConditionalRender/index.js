const ConditionalRender = (props) => {
    const { condition, children } = props

    if (condition) {
        return children
    } else {
        return (<></>)
    }
}

export default ConditionalRender