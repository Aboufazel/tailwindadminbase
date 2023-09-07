
import {Button} from "@material-tailwind/react";
const Buttons = ({children , type='contained' , size='normal' , icon=false , color='primary' ,fullWidth=false , rounded=false , light=false , ...props }) => {

    const sizes = {
        exSmall: `px-[8px] py-[2px] text-[13px] ${rounded ? "rounded-full" : "rounded-[2px]"}`,
        small: `px-[16px] py-[4px] text-[13px] ${rounded ? "rounded-full" : "rounded-[2px]"}`,
        normal: `px-[24px] py-[8px] text-[16px] ${rounded ? "rounded-full" : "rounded-[4px]"}`,
        large: `px-[32px] py-[10px] text-[19px]  ${rounded ? "rounded-full" : "rounded-[4px]"}`,
    }

    const colors = {
        contained: {
            primary: `${light ? `bg-primary-100 text-primary-600 shadow-primary` : `bg-primary-600 text-white  shadow-primary`}`,
            secondary: `${light ? `bg-secondary-100 text-secondary-600 shadow-secondary` : `bg-secondary-600 text-white shadow-secondary`}`,
            info: `${light ? `bg-info-100 text-info-600  shadow-info` : `bg-info-600 text-white shadow-info`}`,
            success: `${light ? `bg-success-100 text-success-600 shadow-success` : `bg-success-600 text-white shadow-success`}`,
            danger: `${light ? `bg-danger-100 text-danger-600 shadow-danger` : `bg-danger-600 text-white shadow-danger`}`,
            warning: `${light ? `bg-warning-100 text-warning-600 shadow-warning` : `bg-warning-600 text-white shadow-warning`}`,
            light: `${light ? `bg-light-100 text-light-600 shadow-light` : `bg-light-600 text-black shadow-light`}`,
            dark: `${light ? `bg-dark-100 text-[#1A1D20] shadow-dark` : `bg-dark-600 text-white shadow-dark`}`,
        },
        outlined:{
            primary: `bg-white border border-primary-600 text-primary-600 shadow-none hover:shadow-none hover:bg-primary-600 hover:text-white`,
            secondary: `bg-white border border-secondary-600 text-secondary-600 shadow-none hover:shadow-none hover:bg-secondary-600 hover:text-white`,
            info: `bg-white border border-info-600 text-info-600 shadow-none hover:shadow-none hover:bg-info-600 hover:text-white`,
            success: `bg-white border border-success-600 text-success-600 shadow-none hover:shadow-none hover:bg-success-600 hover:text-white`,
            danger: `bg-white border border-danger-600 text-danger-600 shadow-none hover:shadow-none hover:bg-danger-600 hover:text-white`,
            warning: `bg-white border border-warning-600 text-warning-600 shadow-none hover:shadow-none hover:bg-warning-600 hover:text-white`,
            light: `bg-white border border-light-600 text-light-600 shadow-none hover:shadow-none hover:bg-light-600 hover:text-dark-600`,
            dark: `bg-white border border-dark-600 text-dark-600 shadow-none hover:shadow-none hover:bg-dark-600 hover:text-white`,
        }
    }


    return(
        <Button {...props} size={sizes}  className={`font-normal ${colors[type][color]} ${sizes[size]}`} >
            {children}
        </Button>
    )
}

export default Buttons;