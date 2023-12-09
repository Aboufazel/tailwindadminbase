import React, {useState} from "react";
import {editRevenuePlanPrice} from "../../../api/revenueModelApi";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {addRevenuePricesInputs} from "../../../data/revenueModelInputsData";
import Inputs from "../../../components/globals/inputs/inputs";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import useRevenuePlanPriceStore from "../../../zustand/revenuePlanPriceStore";

const EditRevenuePlanPrice = ({planPriceData=[]}) => {
    const manageEditRevenuePlanPriceLayout = useRevenuePlanPriceStore(state => state.manageEditRevenuePlanPriceLayout)
    const [loading, setLoading] = useState(false);
    const formValidate = yup.object().shape({
        revenuePlanPriceName:yup.string().required("وارد کردن نام اجباری است").test(
            "revenueNameValidation" ,
            "نام نباید بیشتر از 100 کارکتر باشد" , val => val.length <= 100),
        revenuePlanPriceCode:yup.number().required("وارد کردن کد  اجباری است").min(1,"کد نباید کمتر از ۱ باشد"),
        buyLimit:yup.number().required("وارد محدودیت اجباری است"),
        duration:yup.number().required("وارد تعداد روز اجباری است"),
        price:yup.number().required("وارد کردن محدودیت مدل اجباری است")
    });


    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await editRevenuePlanPrice(data , planPriceData.revenuePlanId , planPriceData.revenuePlanPriceId).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("قیمت با موفقیت ویرایش شد")
            reset()
            manageEditRevenuePlanPriceLayout()
            setLoading(false)
        }
    }

    return(

        <div className={"w-full"}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-start mt-[16px]"}>
                <div className={"flex flex-col w-full"}>
                    {
                        addRevenuePricesInputs.map((item , index)=>(
                            <Inputs type={item.type}
                                    iClass={item.width}
                                    key={"input-value"+index}
                                    error={errors[item.inputName] ? errors[item.inputName].message : false}
                                    register={register}
                                    name={item.inputName}
                                    label={item.inputLabel}
                                    inputType={item.inputType}
                                    defaultValue={
                                      index === 0 ?
                                          planPriceData.revenuePlanPriceCode :
                                      index === 1 ?
                                          planPriceData.revenuePlanPriceName :
                                      index === 2 ?
                                          planPriceData.duration :
                                      index === 3 ?
                                          planPriceData.buyLimit :
                                      index === 4 ?
                                          planPriceData.price : ""
                                    }
                            />
                        ))
                    }
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>هدیه</p>
                    <input defaultChecked={planPriceData.isGift === 1} {...(register && register("isGift"))} type="checkbox" id="isGift" name="isGift" value="1"/>
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>اولیه</p>
                    <input defaultChecked={planPriceData.isInitial === 1} {...(register && register("isInitial"))} type="checkbox" id="isInitial" name="isInitial" value="1"/>
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>هیچکدام</p>
                    <input {...(register && register("noOne"))} defaultChecked={planPriceData.isInitial && planPriceData.isGift} type="checkbox" id="noOne" name="noOne" value="1"/>
                </div>
                <div className={"flex flex-row justify-end w-full mt-5"}>
                    <Buttons type={"submit"}>
                        {
                            loading ?
                                <p className={"flex flex-row items-center justify-center gap-3"}>
                                    <Spinner/>
                                    {"ویرایش"}
                                </p>
                                : "ویرایش"
                        }
                    </Buttons>
                </div>
            </form>
        </div>
    )
}

export default EditRevenuePlanPrice;