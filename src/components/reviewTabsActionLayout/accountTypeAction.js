import React, {useEffect, useState} from "react";
import useReviewTabStore from "../../zustand/reviewTabStore";
import Buttons from "../globals/Buttons";
import useAccountTypeStore from "../../zustand/accountTypeStore";
import {useAllAccountSpecByTypeId, useGetAccountTypeById} from "../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import AccountSpecShowCard from "./actionComponents/accountSpecShowCard";
import EditTypeForm from "./actionComponents/editTypeForm";
import {deleteAccountType, editAccountTypeIsActive} from "../../api/accountTypeApi";
import BackBtn from "./actionComponents/backBtn";
import NewLinkSpecAccountTypeList from "./actionComponents/newLinkSpecAccountTypeList";

const AccountTypeAction = () => {
    const accountTypeId = useAccountTypeStore(state => state.accountTypeId)
    const editStep = useAccountTypeStore(state => state.editStep)
    const linkStep = useAccountTypeStore(state => state.specLinkStep)
    const manageLinkStep = useAccountTypeStore(state => state.manageSpecLinkStep)
    const manageEditStep = useAccountTypeStore(state => state.manageEditStep)
    const updateDeleteStep = useAccountTypeStore(state => state.updateDeleteStep)
    const deleteStep = useAccountTypeStore(state => state.deleteStep)
    const [active , setActive] = useState('')
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const {data , isRefetching , isLoading , isError} = useAllAccountSpecByTypeId('accountSpecsByTypeId' , accountTypeId)
    const {data:accountTypeData , isLoading:AccountTypeLoading , refetch , isRefetching:AccountTypeRefetching} = useGetAccountTypeById('getAccountTypeWithId' , accountTypeId);


    console.log(data , 'spec type data')
    const accountTypeInformationList = [
        {title:"نام حساب" , data:accountTypeData?.data.accountTypes[0].accountTypeName},
        {title:"کد حساب" , data:accountTypeData?.data.accountTypes[0].accountTypeCode},
        {title:"نوع شناوری" , data:accountTypeData?.data.accountTypes[0].isFloat ? 'شناور' : 'غیر شناور'},
        {title:"وضعیت" , data:accountTypeData?.data.accountTypes[0].isActive ? 'فعال' : 'غیر فعال'},
        {title:"نوع" , data:accountTypeData?.data.accountTypes[0].isAutomatic ? 'اتوماتیک' : 'غیراتوماتیک'},
    ]

    const manageIsActive = async ()=>{
       const res = await editAccountTypeIsActive(accountTypeId , !active).catch(()=>{
            toast.error('ویرایش موفق نبود')
        })
        if(res.status === 200){
            toast.success('ویرایش انجام شد')
            refetch()
        }
    }

    const manageDeleteAccountType = async ()=>{
        const res = await deleteAccountType(accountTypeId).catch(()=>{
            toast.error('حذف موفقیت آمیز نبود')
        })
        if (res?.status === 200){
            toast.success('حذف موفقیت آمیز بود')
        }
    }

    useEffect(() => {
        setActive(accountTypeData?.data.accountTypes[0].isActive)
    }, [accountTypeData]);

    if(isError){
       return  toast.error('دریافت اطلاعات با مشکل مواجه شد!')
    }

    return(
        <div className={"relative w-full"}>
            {
                !linkStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        {!editStep ?
                            <div className={"flex flex-col pt-14"}>
                                <div className={'w-full'}>
                                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                                        اطلاعات
                                    </div>
                                    {
                                        (AccountTypeLoading || AccountTypeRefetching) ?
                                            <LoadingComponents title={'دریافت اطلاعات نوع حساب'}/>
                                            :
                                            <ul className={"mt-5 px-5"}>
                                                {
                                                    accountTypeInformationList.map((items, index) => (
                                                        <li key={"accountType-list-info" + index}
                                                            className={"flex flex-row items-center w-full justify-between mb-3"}>
                                                            <p>{items?.title}</p>
                                                            <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                    }
                                </div>

                                <div className={'w-full mt-6'}>
                                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                                        لینک های معین
                                    </div>
                                    <div className={'h-[100px] overflow-y-auto '}>
                                        {
                                            (isLoading || isRefetching) ?
                                                <LoadingComponents title={'درحال دریافت حساب معین'}/>
                                                :
                                                data.data.accountTypeSpecs.map((items, index) => (
                                                    <AccountSpecShowCard
                                                        key={'account-type-spec' + index + items.accountTypeSpecId}
                                                        data={items}/>
                                                ))
                                        }
                                    </div>
                                </div>

                                <div className={"flex flex-row items-center w-full justify-center mt-8 gap-5"}>
                                    {
                                        !deleteStep ?
                                            <>
                                                <Buttons onClick={manageLinkStep} light={true}>لینک جدید</Buttons>
                                                <Buttons onClick={manageEditStep} light={true}>ویرایش</Buttons>
                                                <Buttons onClick={updateDeleteStep} light={true}>حذف</Buttons>
                                                <Buttons onClick={manageIsActive} light={true}>
                                                    {accountTypeData?.data.accountTypes[0].isActive ? 'غیرفعال سازی' : 'فعال سازی'}
                                                </Buttons>
                                            </> :
                                            <div className={"w-full"}>
                                                <p className={"text-danger-600 font-medium text-[14px]"}>آیا نوع حساب را حذف
                                                    میکنید؟</p>
                                                <p className={"text-text-color-2 mt-2"}>با حذف نوع حساب دسترسی به آن دیگر وجود
                                                    ندارد</p>
                                                <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                    <Buttons onClick={updateDeleteStep} light={true}>{"انصراف"}</Buttons>
                                                    <Buttons onClick={manageDeleteAccountType} color={"danger"}
                                                             light={true}>{"تایید"}</Buttons>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            :
                            <div className={'w-full relative'}>
                                <BackBtn onClick={manageEditStep}/>
                                <EditTypeForm/>
                            </div>
                        }
                    </> :
                    <div className={'w-full relative'}>
                        <BackBtn onClick={manageLinkStep}/>
                        <NewLinkSpecAccountTypeList/>
                    </div>
            }
        </div>
    )
}


export default AccountTypeAction;