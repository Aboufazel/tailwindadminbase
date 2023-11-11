"use client"
import Input from "../inputs/input";
import {useState} from "react";
import Label from "../inputs/label";

const Inputs = ({
                    name,
                    type,
                    inputType,
                    label,
                    icon,
                    captcha = false,
                    register = false,
                    error = false,
                    selectOptions = [],
                    style = 'outlined',
                    size='normal',
                    iClass='',
                    fnCallbackValue,
                    dropDownWidth='290px',
                    ...props
                }) => {

    const [focus, setFocus] = useState(false);

    let parentClass = `border-2 border-transparent flex items-center justify-between transition-all duration-500 ease-in-out
                ${focus ? " bg-none shadow-[0_5px_13px_rgb(21,114,193,0.14)_inset] " : ""}
                ${error ? "bg-red-50" : ""} 
                ${inputType === "file" ? "border border-dashed " : ""} 
                rounded-[8px] mt-sp-8`;


    if (style === 'outlined') {
        parentClass = `border ${(!focus && !error) ?" border-secondary-100":""}
                ${focus ? "transition-all duration-300 ease-in-out border border-primary-600" : ""}
                ${error ? "bg-none border-danger-600" : ""} 
                ${inputType === "file" ? " border-dashed " : ""} 
                rounded-[8px] mt-sp-8`;
    }

    const sizes= {
        normal: "h-[44px]",
    }
    const inputClass = `w-full ${sizes[size]} block  outline-0 shadow-none font-medium border-none text-[14px] focus:outline-0 shadow-none text-secondary-600 !bg-transparent !active:bg-transparent active:bg-transparent !focus:bg-transparent ${
        style === 'contained' ? " placeholder-secondary-100  " :
            " placeholder-dark-600 placeholder-opacity-[50%]  outline-0   "} ${iClass}`;

    return (
        <>
            <Label label={label} icon={icon} />

            <div
                onBlur={() => type === 'select' ? false : setFocus(false)}
                onFocus={() => type === 'select' ? false : setFocus(true)}
                className={parentClass}>

                <div className="w-full transition ">
                    {
                        (type === 'input' && inputType !== 'file') &&
                        <Input {...props} className={inputClass} type={inputType} register={register} name={name}
                        />
                    }
                </div>
                {
                    captcha
                }
            </div>

            {
                (error) && <div className="text-danger-600 mt-1 w-full text-start mr-1 text-[12px]">{error}</div>
            }

        </>

    )
}


export default Inputs;