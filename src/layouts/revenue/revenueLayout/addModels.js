import Inputs from "../../../components/globals/inputs/inputs";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {addRevenueModelsInputs} from "../../../data/revenueModelInputsData";
import {addRevenueModel} from "../../../api/revenueModelApi";
import SelectInput from "../../../components/globals/inputs/selectInput";
import {useAllCodingAccount} from "../../../hooks/coding";
import LoadingComponents from "../../../components/loading/loadingComponents";

const AddModels = ({type}) => {
    const [loading, setLoading] = useState(false);
    const {data:allCodingData , isLoading,refetch} = useAllCodingAccount("getAllSideCoding")
    const formValidate = yup.object().shape({
        accountCodingId:yup.string().required("انتخاب کدینگ اجباریست"),
        revenueModelName:yup.string().required("وارد کردن نام مدل اجباری است").test(
            "revenueNameValidation" ,
            "نام نباید بیشتر از 100 کارکتر باشد" , val => val.length <= 100),
        revenueModelCode:yup.number().required("وارد کردن کد مدل اجباری است").min(1,"کد نباید کمتر از ۱ باشد"),
        revenueModelType:yup.string().required("وارد کردن نوع مدل اجباری است"),
        fiscalYearLimit:yup.number().required("وارد کردن محدودیت مدل اجباری است").min(365 , "محدودیت نمیتواند کمتر از ۳۶۵ روز باشد"),
    });



    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    if(isLoading){
        return (
            <LoadingComponents title={"در حال دریافت کدینگ"}/>
        )
    }
    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await addRevenueModel(data).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("مدل درآمدی با موفقیت ایجاد شد")
            reset()
            setLoading(false)
        }
    }

    return(

        <div className={"w-full"}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-start mt-[16px]"}>
                <SelectInput error={errors["accountCodingId"] ? errors["accountCodingId"].message : false} type={'all-account-coding'}  refetch={refetch} step={'revenue-models'} register={register} data={allCodingData && allCodingData.data.accountCodings}/>
                <div className={"flex flex-col w-full"}>
                    {
                        addRevenueModelsInputs.map((item , index)=>(
                            <Inputs type={item.type}
                                    iClass={item.width}
                                    key={"input-value"+index}
                                    error={errors[item.inputName] ? errors[item.inputName].message : false}
                                    register={register}
                                    name={item.inputName}
                                    label={item.inputLabel}
                                    inputType={item.inputType}/>
                        ))
                    }
                </div>
                <div className={"flex flex-row justify-end w-full mt-5"}>
                    <Buttons type={"submit"}>
                        {
                            loading ?
                                <p className={"flex flex-row items-center justify-center gap-3"}>
                                    <Spinner/>
                                    {"ثبت"}
                                </p>
                                : "ثبت"
                        }
                    </Buttons>
                </div>
            </form>
        </div>
    )
}

export default AddModels