const Input = (props) => {
    const { onChange, labelClass, inputClass, name, labelText, type } = props

	return (
        <label className={labelClass}>
            {labelText}
            <input className={inputClass} type={type} name={name} onChange={onChange}/>
        </label>
	)
}

export default Input
