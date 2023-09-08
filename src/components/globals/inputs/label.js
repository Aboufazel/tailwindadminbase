const Label = ({label,icon,desc}) => {
    return (
        <div className={"w-full text-start mt-[16px] mb-[8px]"}>
            <label
                className={`${icon ? "flex flex-row items-center gap-sp-8 " : ""} font-medium text-secondary-600 text-[12px] `}>
                {icon}
                {label}
            </label>
            {
                desc && <p className='text-[12px] font-normal text-gray-400'>{desc}</p>
            }

        </div>

    )
}

export default Label;