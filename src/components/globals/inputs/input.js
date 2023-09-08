const Input = ({type,className,name,register, ...props}) => {
    return (
        type === 'textarea' ?
            <textarea {...props} name={name} {...(register && register(name))} id={name} className={className+" px-2 py-5 !h-[150px]"}/>
            :
            <input   {...props} name={name} {...(register && register(name))} id={name} type={type} className={`transition-all duration-75 ease-in-out ${className} px-3 h-[44px] rounded-[4px]`}/>
    )
}

export default Input;