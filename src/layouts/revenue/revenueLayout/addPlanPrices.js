import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    addRevenuePlanPrice,
    getAllRevenuePlans,
} from "../../../api/revenueModelApi";
import {toast} from "react-toastify";
import SelectInput from "../../../components/globals/inputs/selectInput";
import {addRevenuePricesInputs} from "../../../data/revenueModelInputsData";
import Inputs from "../../../components/globals/inputs/inputs";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import {useGetFunction} from "../../../hooks/coding";
import LoadingComponents from "../../../components/loading/loadingComponents";

const AddPlanPrices = () => {
    const [loading, setLoading] = useState(false);
    const {data:plansData , isError:plansError,isLoading:plansLoading  , refetch} = useGetFunction('getRevenuePlansWithId' , '' , getAllRevenuePlans)
    const formValidate = yup.object().shape({
        revenuePlanId:yup.string().required("انتخاب پلن درامدی اجباریست"),
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


    if(plansError){
        return (toast.error("دریافت با مشکل مواجه شد"))
    }

    const onFormSubmit = async (data) =>{
        console.log(data)
        setLoading(true)
        const res = await addRevenuePlanPrice(data).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            toast.success("قیمت با موفقیت ایجاد شد")
            reset()
            setLoading(false)
        }
    }

    return(

        <div className={"w-full"}>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-start mt-[16px]"}>
                {
                    plansLoading ? <LoadingComponents title={"دریافت پلن های درامدی"}/>
                    :
                    <SelectInput error={errors["revenuePlanId"] ? errors["revenuePlanId"].message : false} type={'all-revenue-plans'}  refetch={refetch} step={'revenue-prices'} register={register} data={plansData && plansData.data.revenuePlans}/>
                }
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
                                    inputType={item.inputType}/>
                        ))
                    }
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>هدیه</p>
                    <input {...(register && register("isGift"))} type="checkbox" id="isGift" name="isGift" value="1"/>
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>اولیه</p>
                    <input {...(register && register("isInitial"))} type="checkbox" id="isInitial" name="isInitial" value="1"/>
                </div>
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"dark:text-text-color-3 text-[14px]"}>هیچکدام</p>
                    <input {...(register && register("noOne"))} type="checkbox" id="noOne" name="noOne" value="1"/>
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

export default AddPlanPrices;