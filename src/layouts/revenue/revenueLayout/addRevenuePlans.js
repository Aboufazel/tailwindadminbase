import {addRevenuePlansInputs} from "../../../data/revenueModelInputsData";
import Inputs from "../../../components/globals/inputs/inputs";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addRevenuePlans, getAllRevenueModelNoId} from "../../../api/revenueModelApi";
import {toast} from "react-toastify";
import SelectInput from "../../../components/globals/inputs/selectInput";
import {useGetFunction} from "../../../hooks/coding";
import LoadingComponents from "../../../components/loading/loadingComponents";

const AddRevenuePlans = () => {
    const [loading, setLoading] = useState(false);
    const {data , isLoading , refetch , isError} = useGetFunction('getAllRevenueModelsNoId' , "" , getAllRevenueModelNoId)
    const formValidate = yup.object().shape({
        revenuePlanName: yup.string().required("وارد کردن نام مدل اجباری است").test(
            "revenueNameValidation",
            "نام نباید بیشتر از 100 کارکتر باشد", val => val.length <= 100),
        revenuePlanCode: yup.number().required("وارد کردن کد مدل اجباری است").min(1, "کد نباید کمتر از ۱ باشد"),
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(formValidate)
    });

    const onFormSubmit = async (data) => {
        setLoading(true)

        const res = await addRevenuePlans(data).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200) {
            toast.success("پلن درآمدی با موفقیت ایجاد شد")
            reset()
            setLoading(false)
        }
    }

    if (isError){
        return (toast.error("دربافت با مشکل مواجه شد!"))
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
            <div className={"flex flex-col w-full"}>
                {
                    isLoading ? <LoadingComponents title={"دریافت مدل های درآمدی"}/>
                        :  <SelectInput type={'add-revenue-plans'} refetch={refetch} step={'add-revenue-plans'} register={register} data={data && data.data.revenueModels}/>
                }
                {
                    addRevenuePlansInputs.map((item, index) => (
                        <Inputs type={item.type}
                                iClass={item.width}
                                key={"input-value" + index}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType}
                        />
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
    )
}

export default AddRevenuePlans;