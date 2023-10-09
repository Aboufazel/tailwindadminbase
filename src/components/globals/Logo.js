import logo from "../../assets/img/Login/logo.png";
import React from "react";

const Logo = ({cls}) => {

    return(
        <div className={`flex flex-row items-center ${cls} max-w-max`}>
            <img src={logo} alt={"adminHeader logo"} className={"w-[28px]"}/>
            <p className={"text-dark-600 font-medium mr-2 text-[19px]"}>{" داشبورد مدیریت "}</p>
        </div>
    )
}

export default Logo;