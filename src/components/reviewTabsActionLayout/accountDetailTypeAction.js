import React, {useEffect, useState} from "react";
import useReviewTabStore from "../../zustand/reviewTabStore";
import Buttons from "../globals/Buttons";
import useAccountTypeStore from "../../zustand/accountTypeStore";
import {useAllAccountSubsidiaryByDetailTypeId, useGetAccountTypeById} from "../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import EditDetailForm from "./actionComponents/editDetailForm";
import {deleteAccountDetailType, deleteAccountType} from "../../api/accountDetailTypeApi";
import BackBtn from "./actionComponents/backBtn";
import NewLinkSpecAccountTypeList from "./actionComponents/newLinkSpecAccountTypeList";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";
import AccountSpecShowCard from "./actionComponents/accountSpecShowCard";
import LoadingText from "../loadingText/loadingText";

const AccountDetailTypeAction = () => {
    const accountDetailTypeId = useAccountTypeStore(state => state.accountTypeId)
    const [loading , setLoading] = useState(false)
    const editStep = useAccountTypeStore(state => state.editStep)
    const linkStep = useAccountTypeStore(state => state.specLinkStep)
    const manageLinkStep = useAccountTypeStore(state => state.manageSpecLinkStep)
    const manageEditStep = useAccountTypeStore(state => state.manageEditStep)
    const updateDeleteStep = useAccountTypeStore(state => state.updateDeleteStep)
    const deleteStep = useAccountTypeStore(state => state.deleteStep)
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const {data , isRefetching , refetch:subsidiaryRefetch ,  isLoading , isError} = useAllAccountSubsidiaryByDetailTypeId('accountSubsidiaryByDetailId' , accountDetailTypeId)
    const {data:accountTypeData , isLoading:AccountTypeLoading , refetch , isRefetching:AccountTypeRefetching} = useGetAccountTypeById('getAccountTypeWithId' , accountDetailTypeId);
    const accountDetailTypeInformationList = [
        {title:"نوع" , data:accountTypeData?.data.accountDetailTypes[0].isAutomatic ? 'اتوماتیک' : 'غیراتوماتیک'},
        {title:"نام یکتا" , data:accountTypeData?.data.accountDetailTypes[0].type},
        {title:"کد حساب" , data:accountTypeData?.data.accountDetailTypes[0].accountDetailTypeCode},
        {title:"نام حساب" , data:accountTypeData?.data.accountDetailTypes[0].accountDetailTypeName},
        {title:"نوع شناوری" , data:accountTypeData?.data.accountDetailTypes[0].isFloat ? 'شناور' : 'غیر شناور'},
    ]

    const manageDeleteAccountType = async ()=>{
        setLoading(true)
        const res = await deleteAccountDetailType(accountDetailTypeId).catch(()=>{
            return(toast.error('حذف موفقیت آمیز نبود'))
        })
        if (res.status === 200){
            updateDeleteStep()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
        setLoading(false)
    }

    useEffect(() => {
        refetch()
        subsidiaryRefetch()
    }, [linkStep , editStep]);

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
                                {
                                    (AccountTypeLoading || AccountTypeRefetching) ?
                                        <LoadingComponents title={'دریافت اطلاعات نوع حساب'}/>
                                        :
                                        <ShowDetailComponents data={accountDetailTypeInformationList} cls={""}/>
                                }
                                <div className={'w-full mt-6'}>
                                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                                        لینک های معین
                                    </div>
                                    <div className={'h-[200px] overflow-y-auto '}>
                                        {
                                            (isLoading || isRefetching) ?
                                                <LoadingComponents title={'درحال دریافت حساب معین'}/>
                                                :
                                                data.data.accountDetailTypeSubsidiaries.map((items, index) => (
                                                    <AccountSpecShowCard
                                                        refetch={subsidiaryRefetch}
                                                        key={'account-detail-type-subsidiary' + index + items.accountDetailTypeSubsidiaryId}
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
                                            </> :
                                            <div className={"w-full"}>
                                                <p className={"text-danger-600 font-medium text-[14px]"}>آیا نوع حساب را حذف
                                                    میکنید؟</p>
                                                <p className={"text-text-color-2 mt-2"}>با حذف نوع حساب دسترسی به آن دیگر وجود
                                                    ندارد</p>
                                                <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                    <Buttons onClick={updateDeleteStep} light={true}>{"انصراف"}</Buttons>
                                                    <Buttons onClick={manageDeleteAccountType} color={"danger"}
                                                             light={true}>
                                                        {loading ? <LoadingText text={'تایید'}/> : "تایید"}
                                                    </Buttons>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            :
                            <div className={'w-full relative'}>
                                <BackBtn onClick={manageEditStep}/>
                                <EditDetailForm/>
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


export default AccountDetailTypeAction;