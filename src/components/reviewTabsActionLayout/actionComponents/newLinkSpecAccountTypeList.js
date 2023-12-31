import {useAllAccountSpec} from "../../../hooks/coding";
import LoadingComponents from "../../loading/loadingComponents";
import {toast} from "react-toastify";
import AllSpecLinkCard from "./allSpecLinkCard";
import useAccountTypeStore from "../../../zustand/accountTypeStore";
import formStore from "../../../zustand/formStore";
import React, {useState} from "react";
import Buttons from "../../globals/Buttons";
import {addNewSubsidiaryForAccountDetailType} from "../../../api/accountDetailTypeApi";
import LoadingText from "../../loadingText/loadingText";
import {addNewLinkForAccountDetailDefaultSubsidiary} from "../../../api/accountDetailDefaultsApi";
import useAccountPersonStore from "../../../zustand/accountPersonStore";

const NewLinkSpecAccountTypeList = ({step="account-detail-type"}) => {
    const accountTypeId = useAccountTypeStore(state => state.accountTypeId)
    const accountSubsidiaryId = useAccountTypeStore(state => state.accountSpecId)
    const accountDetailDefaultId = useAccountPersonStore(state => state.accountPersonId)
    const canDeleteStep = useAccountTypeStore(state => state.canDeleteStep)
    const canDeleteData = useAccountTypeStore(state => state.canDeleteData)
    const updatecanDeleteData = useAccountTypeStore(state => state.updateCanDeleteData)
    const manageCanDeleteStep = useAccountTypeStore(state => state.manageCanDeleteStep)
    const canDeleteButton = formStore(state => state.canDeleteButton)
    const manageLinkStep = useAccountTypeStore(state => state.manageSpecLinkStep)
    const manageDetailDefaultLinkStep = useAccountPersonStore(state => state.managePersonSpecLinkStep)
    const updateAccountSubsidiaryId = useAccountTypeStore(state => state.updateAccountSpecId)
    const {data , isLoading , isRefetching , isError} = useAllAccountSpec('getAllAccountSpec')
    const [loading , setLaoding]  = useState(false)
    if(isLoading || isRefetching){
        return <LoadingComponents title={'در حال دریافت تمامی حساب های معین'}/>
    }

    if (isError){
        return toast.error('دریافت با مشکل مواجه شد!')
    }

    const manageAddNewSpecLink = async ()=>{
        setLaoding(true)
        const res = await addNewSubsidiaryForAccountDetailType(Number(accountTypeId) , Number(accountSubsidiaryId) , `${canDeleteData}`).catch((e)=>{
            manageCanDeleteStep()
            updatecanDeleteData()
            return(toast.error(e.response.data.errors.AccountDetailTypeId[0]))
        })

        if (res.status === 200){
            manageLinkStep()
            manageCanDeleteStep()
            updatecanDeleteData()
            toast.success('لینک جدید ایجاد شد')
        }
        updateAccountSubsidiaryId()
        setLaoding(false)
    }


    const manageAddNewSpecForAccountDetailDefault = async ()=>{
        setLaoding(true)
        const res = await addNewLinkForAccountDetailDefaultSubsidiary(`${accountDetailDefaultId}`, `${accountSubsidiaryId}`,`${canDeleteData}`).catch((e)=>{
            manageCanDeleteStep()
            updatecanDeleteData()
            return(toast.error(e.response.data.errors.AccountDetailTypeId[0]))
        })

        if (res.status === 200){
            manageDetailDefaultLinkStep()
            manageCanDeleteStep()
            updatecanDeleteData()
            toast.success('لینک جدید ایجاد شد')
        }
        updateAccountSubsidiaryId()
        setLaoding(false)

    }


    const stepFunction = {
        'account-detail-type':manageAddNewSpecLink,
        'account-default-detail-link':manageAddNewSpecForAccountDetailDefault,
    }




    return(
        <>
            <div className={`w-full pt-[50px] ${canDeleteStep ? 'h-[400px]' : 'h-[500px]'}  overflow-y-auto`}>
                {
                    data.data.accountSubsidiaries.map((items , index)=>(
                        <AllSpecLinkCard key={'account-spec-link-data' + index} data={items}/>
                    ))
                }
            </div>
            {
                canDeleteStep ?
                    <div className={"w-full pt-5 border-t border-primary-main/50 h-[100px]"}>
                        <p className={"pb-3"}>نوع اجباری و یا اختیاری بودن حساب را مشخص کنید؟</p>
                        <div className={"flex flex-row items-center w-full"}>
                            <div className={"flex flex-row items-center gap-3 justify-start w-1/2"}>
                                {
                                    canDeleteButton.map((items, index) => (
                                        <div key={items.id + index} onClick={() => updatecanDeleteData(items.value)}
                                             className={`cursor-pointer 
                                     ${canDeleteData === items.value ? 'bg-primary-extraLight border-primary-main' : 'border-text-color-3'} 
                                      w-[135px] py-2 rounded-[8px] text-center border`}>
                                            {items.title}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={"flex flex-row items-center gap-3 justify-end w-1/2"}>
                                <Buttons color={'danger'} onClick={()=>{
                                    manageCanDeleteStep()
                                    updateAccountSubsidiaryId()
                                    updatecanDeleteData()
                                }} light={true}>انصراف</Buttons>
                                <Buttons light={true} onClick={stepFunction[step]}>
                                    {
                                        loading ?
                                            <LoadingText text={"ثبت لینک جدید"}/>
                                            : "ثبت لینک جدید"
                                    }

                                </Buttons>
                            </div>
                        </div>
                    </div>
                    : ""
            }
        </>
    )
}

export default NewLinkSpecAccountTypeList