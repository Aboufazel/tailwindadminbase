import SelectInput from "../../globals/inputs/selectInput";
import LoadingComponents from "../../loading/loadingComponents";
import {addAccountSpecInputs} from "../../../data/accountSpecInputsData";
import Inputs from "../../globals/inputs/inputs";
import Buttons from "../../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import formStore from "../../../zustand/formStore";
import {useSelectId} from "../../popupBody/definePopupBody/createAccountMain";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {editAccountSpec} from "../../../api/accountSpecApi";
import {toast} from "react-toastify";
import useStore from "../../../zustand/store";
import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup} from "../../../api/codingKind";
import {useAllAccountMain, useGetAccountSpecById} from "../../../hooks/coding";
import useAccountSpecStore from "../../../zustand/accountSpecStore";
import useReviewTabStore from "../../../zustand/reviewTabStore";

const EditSpecForm = ({apiData}) => {
    const accountSpecId = useReviewTabStore(state => state.codingAccountSpecId)
    const type = formStore(state => state.type)
    const updateInstinct = formStore(state => state.updateInstinct)
    const typeButton = formStore(state => state.typeButton)
    const updateType = formStore(state => state.updateType)
    const instinct = formStore(state => state.instinct)
    const instinctButton = formStore(state => state.instinctButton)
    const [loading, setLoading] = useState(false);
    const {accountGroupId} = useSelectId()
    const manageSpecEditStep = useAccountSpecStore(state => state.manageEditSpecStep)
    useEffect(() => {
        updateType(apiData?.data.accountSpecs[0].type.toString())
        updateInstinct(apiData?.data.accountSpecs[0].instinct.toString())
    }, [apiData]);

    const formValidate = yup.object().shape({
        accountMainId:yup.string(),
        accountSpecName:yup.string().required("وارد کردن نام اجباری است"),
        accountSpecCode:yup.string().required("وارد کردن کد اجباری است"),
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
        const res = await editAccountSpec(accountSpecId, data , Number(instinct) , Number(type)).catch(() => {
            toast.error("ویرایش انجام نشد")
            setLoading(false)
        })
        if (res?.status === 200){
            reset()
            updateType('')
            updateInstinct('')
            manageSpecEditStep()
            toast.success("ویرایش با موقیت انجام شد")
            setLoading(false)
        }
    }

    const accountCodingKindId = useStore(state => state.codingKindId)
    const {isLoading,
        isRefetching ,
        isError ,
        data} = useQuery(['accountsGroupForSpecs'] ,()=>getAllAccountGroup(accountCodingKindId) )


    const {data:allAccountMain , refetch , isRefetching:mainRefetching} = useAllAccountMain('accountMainsByGroup' , accountGroupId);

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
        <form onSubmit={handleSubmit(onFormSubmit)} className={"w-full pt-5"}>
            <SelectInput type={'account-group'} selectValue={apiData.data.accountSpecs[0].accountGroupName} refetch={refetch} step={'account-spec'} register={register} data={data && data.data.accountGroups}/>
            {
                mainRefetching ? <LoadingComponents title={'دریافت حساب کل'}/> : <SelectInput type={'account-main'} selectValue={apiData.data.accountSpecs[0].accountMainName}  register={register} data={allAccountMain && allAccountMain.data.accountMains}/>
            }

            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    instinctButton.map((items, index) => (
                        <div key={items.id + index} onClick={() => updateInstinct(items.value)}
                             className={`cursor-pointer 
                             ${instinct.toString() === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                            {items.title}
                        </div>
                    ))
                }
            </div>
            <div className={"flex flex-col w-full"}>
                {
                    addAccountSpecInputs.map((item, index) => (
                        <Inputs type={item.type}
                                iClass={item.width}
                                key={"input-value" + index}
                                error={errors[item.inputName] ? errors[item.inputName].message : false}
                                register={register}
                                name={item.inputName}
                                label={item.inputLabel}
                                inputType={item.inputType} defaultValue={
                                index === 0 ? apiData.data.accountSpecs[0].accountSpecCode
                                : index === 1 ?  apiData.data.accountSpecs[0].accountSpecName : ""
                        }/>
                    ))
                }
            </div>
            <div className={"flex flex-row gap-3 mt-6 w-full"}>
                {
                    typeButton.map((items, index) => (
                        <div key={items.id + index} onClick={() => updateType(items.value)}
                             className={`cursor-pointer 
                             ${type === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                             w-[135px] py-2 rounded-[8px] text-center border`}>
                            {items.title}
                        </div>
                    ))
                }
            </div>
            <div className={"flex flex-row justify-end w-full mt-5"}>
                <Buttons disabled={(instinct.length <= 0 && type.length <= 0)} type={"submit"}>
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

export default EditSpecForm

