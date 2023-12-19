import {addAccountDetailTypeInputs} from "../../../data/accountDetailTypeInputData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {editAccountDetailType} from "../../../api/accountDetailTypeApi";
import {toast} from "react-toastify";
import formStore from "../../../zustand/formStore";
import {useGetAccountTypeById} from "../../../hooks/coding";
import LoadingComponents from "../../loading/loadingComponents";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import useStore from "../../../zustand/store";

const EditDetailForm = () => {
    const isFloat = formStore(state => state.isFloat)
    const accountDetailTypeId = useAccountTypeStore(state => state.accountTypeId)
    const updateIsfloat = formStore(state => state.updateIsFloat)
    const floatButton = formStore(state => state.floatButton)
    const updateIsAutomatic = formStore(state => state.updateIsAutomatic)
    const isAutomatic = formStore(state => state.isAutomatic)
    const codingId = useStore(state => state.codingKindId)
    const manageEditStep = useAccountTypeStore(state => state.manageEditStep)
    const automaticButton = formStore(state => state.automaticButton)
    const [loading, setLoading] = useState(false);
    const {data:accountTypeData ,
         refetch,
        isLoading:AccountTypeLoading , isRefetching:AccountTypeRefetching} = useGetAccountTypeById('getAccountTypeWithId' , accountDetailTypeId);
    const formValidate = yup.object().shape({
        accountDetailTypeName:yup.string().required("وارد کردن نام اجباری است"),
        accountDetailTypeCode:yup.string().required("وارد کردن کد اجباری است"),
        type:yup.string().required("وارد کردن نام یکتا اجباری است")
    });
    console.log(accountTypeData , "account type data")
    const {register ,
        handleSubmit,
        formState:{errors},
        reset
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await editAccountDetailType(
            data ,
            accountDetailTypeId ,
            codingId ,
            isAutomatic ,
            isFloat ,
            ).catch(() => {
            toast.error("ویرایش انجام نشد")
        })
        if (res?.status === 200){
            reset()
            updateIsfloat('')
            updateIsAutomatic('')
            manageEditStep()
            toast.success("ویرایش با موفقیت ایجاد شد")
            refetch()
        }
        setLoading(false)
    }

    if (AccountTypeLoading || AccountTypeRefetching){
        return <LoadingComponents title={'درحال دریافت اطلاعات هستیم'}/>
    }else {
        if(isFloat.length <= 0 && isAutomatic.length <= 0){
            updateIsfloat(accountTypeData?.data.accountDetailTypes[0].isFloat)
            updateIsAutomatic(accountTypeData?.data.accountDetailTypes[0].isAutomatic)
        }
        return(
            <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-5"}>
                <div className={"flex flex-row gap-3 mt-6 w-full"}>
                    {
                        floatButton.map((items, index) => (
                            <div key={items.id + index} onClick={() => {
                                updateIsfloat(!isFloat)
                            }}
                                 className={`cursor-pointer 
                             ${isFloat === items.value ? 'bg-primary-extraLight text-primary-main border-primary-main' : 'border-text-color-3'} 
                                      w-[135px] py-2 rounded-[8px] text-center border`}>
                                {items.title}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-col w-full"}>
                    {
                        addAccountDetailTypeInputs.map((item, index) => (
                            <Inputs type={item.type}
                                    iClass={item.width}
                                    key={"input-value" + index}
                                    error={errors[item.inputName] ? errors[item.inputName].message : false}
                                    register={register}
                                    name={item.inputName}
                                    label={item.inputLabel}
                                    inputType={item.inputType}
                                    defaultValue={
                                        index === 0 ?
                                            accountTypeData?.data.accountDetailTypes[0].accountDetailTypeCode
                                            :
                                            index === 1 ?
                                            accountTypeData?.data.accountDetailTypes[0].accountDetailTypeName :
                                            index === 2 ?
                                            accountTypeData?.data.accountDetailTypes[0].type : ""
                                    }
                            />
                        ))
                    }
                </div>
                <div className={"flex flex-row gap-3 mt-6 w-full"}>
                    {
                        automaticButton.map((items, index) => (
                            <div key={items.id + index} onClick={() => {
                                updateIsAutomatic(!isAutomatic)
                            }}
                                 className={`cursor-pointer 
                             ${isAutomatic === items.value ? 'bg-primary-extraLight text-primary-main border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                                {items.title}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-row justify-end w-full mt-5"}>
                    <Buttons disabled={(isAutomatic.length <= 0 && isFloat.length <= 0)} type={"submit"}>
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


}

export default EditDetailForm;