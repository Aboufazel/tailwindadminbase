import * as yup from "yup";
import {Outlet} from "react-router-dom";
import React, {useState} from "react";
import LoginPic from "../assets/img/Login/Graphic Side.png";
import waterMark from "../assets/img/Login/waterMark.png";
import Logo from "../components/globals/Logo";
import {authInputsData} from "../data/authInputsData";
import Inputs from "../components/globals/inputs/inputs";
import Buttons from "../components/globals/Buttons";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import EventEmitter from "reactjs-eventemitter";
import {LoginApi} from "../api/dashboardApi";
const AuthLayouts = () => {
    const [loading, setLoading] = useState(false);

    const formValidate = yup.object().shape({
        email:yup.string().required("وارد کردن ایمیل اجباری است"),
        password:yup.string().required("وارد کردن شماره تماس اجباری است"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        setLoading(true);
        const res = await LoginApi(data).catch(() => {
            setLoading(false);
            EventEmitter.emit('reload_captcha')
        })
        setLoading(false);
        reset()


        console.log(res)
    }


    return(
        <div className={"flex flex-row w-full overflow-hidden"}>
            <div className={"w-1/2"}>
               <img src={LoginPic} alt={"admin login pic"}/>
            </div>
            <div className={"flex flex-col w-1/2 items-center relative"}>
                <img src={waterMark} alt={"admin water mark"}  className={"xl:w-[350px] absolute -top-0 -left-0"}/>
                <Logo cls={"xl:mt-[200px]"}/>
                <p className={"font-bold text-center mt-[40px] text-[33px] text-black"}>
                    {" ورود به پنل "}
                    <span className={"font-normal text-secondary-600 text-[18px] mt-3 block"}>
                        {" برای استفاده از امکانات وارد شوید "}
                    </span>
                </p>
                <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-[436px] items-center mt-[16px]"}>
                    {authInputsData.map(item => (
                        <Inputs type={item.type}
                                iClass={item.width}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType}/>
                    ))}

                    <Buttons loading={loading} type={"submit"} cls={"w-[188px] mt-[56px]"}>
                        {" ورود به پنل "}
                    </Buttons>
                </form>
                <Outlet/>
            </div>
        </div>
    )
}


export default AuthLayouts;