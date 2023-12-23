import {useGetPersonById} from "../../../hooks/coding";
import useAccountPersonStore from "../../../zustand/accountPersonStore";
import {addAccountDetailDefaultInputs} from "../../../data/accountDetailDefaultInputData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";
import {editAccountDetailDefaults} from "../../../api/accountDetailDefaultsApi";

const EditPersonForm = ({refetch}) => {
    const [loading, setLoading] = useState(false);
    const manageEditStep = useAccountPersonStore(state => state.managePersonEditStep)
    const accountDetailDefaultId = useAccountPersonStore(state => state.accountPersonId)
    const {data:detailDefaultData , isRefetching ,isLoading , isError} = useGetPersonById("getDetailDefaultByID" , accountDetailDefaultId)
    const formValidate = yup.object().shape({
        accountDetailDefaultName:yup.string().required("وارد کردن نام اجباری است"),
        accountDetailDefaultCode:yup.number().required("وارد کردن کد اجباری است").min(1,"کد نباید کمتر از ۱ باشد").max(100 , "کد نباید بیشتر از ۱۰۰ باشد"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    if (isLoading || isRefetching){
        return(<LoadingComponents title={"دریافت اطلاعات حساب"}/> )
    }

    if (isError){
        return (toast.error("دریافت اصلاعات با مشکل مواجه شد!"))
    }


    const onFormSubmit = async (data) =>{
        setLoading(!loading)
        const res = await editAccountDetailDefaults(data ,
            `${accountDetailDefaultId}`,
            `${detailDefaultData?.data.accountDetailDefaults[0].accountDetailTypeId}`,
            `${detailDefaultData?.data.accountDetailDefaults[0].accountCodingId}`,
            ).catch(() => {
            toast.error("ویرایش انجام نشد")
        })
        if (res?.status === 200){
            toast.success("حساب تفضیلی با ویرایش ثبت شد")
            reset()
            manageEditStep()
            refetch()
        }
        setLoading(false)
    }


    return(

        <form onSubmit={handleSubmit(onFormSubmit)} className={"flex flex-col w-full items-center mt-[16px]"}>
            <div className={"flex flex-col w-full"}>
                {
                    addAccountDetailDefaultInputs.map((item , index)=> (
                        <Inputs type={item.type}
                                iClass={item.width}
                                key={"input-value"+index}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType}
                                defaultValue={
                                  index === 0 ? detailDefaultData?.data.accountDetailDefaults[0].accountDetailDefaultCode
                                      :
                                  index === 1  ? detailDefaultData?.data.accountDetailDefaults[0].accountDetailDefaultName : ""
                                }
                        />
                    ))
                }
                <div className={"flex flex-row-reverse w-full mt-5 pr-3 justify-end items-center gap-2"}>
                    <p className={"text-[14px]"}>غیر قابل حذف است</p>
                    <input defaultChecked={detailDefaultData?.data.accountDetailDefaults[0].canDelete === 1}
                           {...(register && register("canDelete"))}
                           type="checkbox" id="canDelete"
                           name="canDelete"/>
                </div>
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
    )
}

export default EditPersonForm;