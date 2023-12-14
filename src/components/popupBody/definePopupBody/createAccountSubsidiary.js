import React, {useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import LoadingComponents from "../../loading/loadingComponents";
import SelectInput from "../../globals/inputs/selectInput";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import ActionCodingTitle from "../../actionCodingTitle/actionCodingTitle";
import formStore from "../../../zustand/formStore";
import useStore from "../../../zustand/store";
import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup} from "../../../api/codingKind";
import {useSelectId} from "./createAccountGeneral";
import {useAllAccountMain} from "../../../hooks/coding";
import {addAccountSubsidiary} from "../../../api/accountSubsidiaryApi";
import {addAccountSubsidiaryInputs} from "../../../data/accountSpecInputsData";


const CreateAccountSubsidiary = () => {
    const updateBalanceSheet = formStore(state => state.updateType)
    const accountNature = formStore(state => state.instinct)
    const balanceSheet = formStore(state => state.type)
    const updateAccountNature = formStore(state => state.updateInstinct)
    const balanceSheetButton = formStore(state => state.typeButton)
    const accountNatureButton = formStore(state => state.instinctButton)
    const [loading, setLoading] = useState(false);
    const {accountGroupId} = useSelectId()
    const formValidate = yup.object().shape({
        accountGeneralId:yup.string(),
        accountSubsidiaryName:yup.string().required("وارد کردن نام اجباری است"),
        accountSubsidiaryCode:yup.string().required("وارد کردن کد اجباری است"),
    });
    const {register ,
        handleSubmit,
        formState:{errors},
        reset,
    } = useForm({
        resolver:yupResolver(formValidate)
    });

    const onFormSubmit = async (data) =>{
        setLoading(true)
        const res = await addAccountSubsidiary(data , accountNature , balanceSheet).catch(() => {
            toast.error("ثبت انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            updateBalanceSheet('')
            updateAccountNature('')
            toast.success("حساب معین با موفقیت ایجاد شد")
            setLoading(false)
        }
    }

    const accountCodingId = useStore(state => state.codingKindId)
    const {isLoading,
        isRefetching ,
        isError ,
        data} = useQuery(['accountsGroupForSpecs'] ,()=>getAllAccountGroup(accountCodingId) )


    const {data:allAccountGeneral , refetch , isRefetching:generalRefetching} = useAllAccountMain('accountMainsByGroup' , accountGroupId);

    if (isError){
        return (
            toast.error('دریافت اطلاعات با مشکل مواجه شد!')
        )
    }



    if (isLoading || isRefetching){
        return (
            <LoadingComponents title={'دریافت اطلاعات'}/>
        )
    }





    return(
        <>
            <ActionCodingTitle title={'افزودن حساب معین به'}/>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-5"}>
                <SelectInput type={'account-group'} refetch={refetch} step={'account-spec'} register={register} data={data && data.data.accountGroups}/>
                {
                    generalRefetching ? <LoadingComponents title={'دریافت حساب کل'}/> : <SelectInput type={'account-general'} register={register} data={allAccountGeneral && allAccountGeneral.data.accountGenerals}/>
                }

                <div className={"flex flex-row gap-3 mt-6 w-full"}>
                    {
                        accountNatureButton.map((items, index) => (
                            <div key={items.id + index} onClick={() => updateAccountNature(items.value)}
                                 className={`cursor-pointer 
                             ${accountNature === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                                {items.title}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-col w-full"}>
                    {
                        addAccountSubsidiaryInputs.map((item, index) => (
                            <Inputs type={item.type}
                                    iClass={item.width}
                                    key={"input-value" + index}
                                    error={errors[item.inputName] ? errors[item.inputName].message : false}
                                    register={register}
                                    name={item.inputName}
                                    label={item.inputLabel}
                                    inputType={item.inputType}/>
                        ))
                    }
                </div>
                <div className={"flex flex-row gap-3 mt-6 w-full"}>
                    {
                        balanceSheetButton.map((items, index) => (
                            <div key={items.id + index} onClick={() => updateBalanceSheet(items.value)}
                                 className={`cursor-pointer 
                             ${balanceSheet === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                                {items.title}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-row justify-end w-full mt-5"}>
                    <Buttons disabled={(accountNature.length <= 0 && balanceSheet.length <= 0)} type={"submit"}>
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
        </>
    )
}


export default CreateAccountSubsidiary;