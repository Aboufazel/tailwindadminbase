import {addAccountTypeInputs} from "../../../data/accountTypeInputData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {editAccountType} from "../../../api/accountTypeApi";
import {toast} from "react-toastify";
import formStore from "../../../zustand/formStore";
import {useGetAccountTypeById} from "../../../hooks/coding";
import LoadingComponents from "../../loading/loadingComponents";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import useStore from "../../../zustand/store";

const EditTypeForm = () => {
    const isFloat = formStore(state => state.isFloat)
    const accountTypeId = useAccountTypeStore(state => state.accountTypeId)
    const updateIsfloat = formStore(state => state.updateIsFloat)
    const floatButton = formStore(state => state.floatButton)
    const updateIsAutomatic = formStore(state => state.updateIsAutomatic)
    const isAutomatic = formStore(state => state.isAutomatic)
    const codingKindId = useStore(state => state.codingKindId)
    const automaticButton = formStore(state => state.automaticButton)
    const [loading, setLoading] = useState(false);
    const {data:accountTypeData ,
         refetch,
        isLoading:AccountTypeLoading , isRefetching:AccountTypeRefetching} = useGetAccountTypeById('getAccountTypeWithId' , accountTypeId);
    const formValidate = yup.object().shape({
        accountTypeName:yup.string().required("وارد کردن نام اجباری است"),
        accountTypeCode:yup.string().required("وارد کردن کد اجباری است"),
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
        const res = await editAccountType(
            data ,
            accountTypeId ,
            codingKindId ,
            isAutomatic ,
            isFloat ,
            accountTypeData?.data.accountTypes[0].isActive,
            ).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            updateIsfloat('')
            updateIsAutomatic('')
            toast.success("ویرایش با موفقیت ایجاد شد")
            setLoading(false)
            refetch()
        }
    }

    if (AccountTypeLoading || AccountTypeRefetching){
        return <LoadingComponents title={'درحال دریافت اطلاعات هستیم'}/>
    }else {
        if(isFloat.length <= 0 && isAutomatic.length <= 0){
            updateIsfloat(accountTypeData?.data.accountTypes[0].isFloat)
            updateIsAutomatic(accountTypeData?.data.accountTypes[0].isAutomatic)
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
                        addAccountTypeInputs.map((item, index) => (
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
                                            accountTypeData?.data.accountTypes[0].accountTypeCode
                                            :
                                            index === 1 ?
                                                accountTypeData?.data.accountTypes[0].accountTypeName : ""
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

export default EditTypeForm;