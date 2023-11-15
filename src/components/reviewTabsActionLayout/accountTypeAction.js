import React, {useEffect, useState} from "react";
import useReviewTabStore from "../../zustand/reviewTabStore";
import {ArrowLeft} from "react-iconly";
import Buttons from "../globals/Buttons";
import useAccountTypeStore from "../../zustand/accountTypeStore";
import {useAllAccountSpecByTypeId, useGetAccountTypeById} from "../../hooks/coding";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import AccountSpecShowCard from "./actionComponents/accountSpecShowCard";
import EditTypeForm from "./actionComponents/editTypeForm";
import {editAccountTypeIsActive} from "../../api/accountTypeApi";

const AccountTypeAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountTypeId = useAccountTypeStore(state => state.accountTypeId)
    const editStep = useAccountTypeStore(state => state.editStep)
    const manageEditStep = useAccountTypeStore(state => state.manageEditStep)
    const {data , isRefetching , isLoading , isError} = useAllAccountSpecByTypeId('accountSpecsByTypeId' , accountTypeId)
    const {data:accountTypeData , isLoading:AccountTypeLoading , refetch , isRefetching:AccountTypeRefetching} = useGetAccountTypeById('getAccountTypeWithId' , accountTypeId);
    const [active , setActive] = useState('')

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

    useEffect(() => {
        setActive(accountTypeData?.data.accountTypes[0].isActive)
    }, [accountTypeData]);

    if(isError){
        toast.error('دریافت اطلاعات با مشکل مواجه شد!')
    }

    return(
        <div className={"relative w-full"}>
            <div
                onClick={manageActionLayout}
                className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
                <p>بازگشت</p>
                <ArrowLeft set={"bulk"}/>
            </div>
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
                                        accountTypeInformationList.map((items , index) =>(
                                            <li key={"accountType-list-info"+index} className={"flex flex-row items-center w-full justify-between mb-3"}>
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
                                data.data.accountTypeSpecs.map((items , index)=>(
                                    <AccountSpecShowCard
                                        key={'account-type-spec'+ index + items.accountTypeSpecId}
                                        data={items}/>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"flex flex-row items-center w-full justify-center mt-8 gap-5"}>
                        <Buttons light={true}>لینک جدید</Buttons>
                        <Buttons onClick={manageEditStep} light={true}>ویرایش</Buttons>
                        <Buttons light={true}>حذف</Buttons>
                        <Buttons onClick={manageIsActive} light={true}>
                            {accountTypeData?.data.accountTypes[0].isActive ? 'غیرفعال سازی' : 'فعال سازی'}
                        </Buttons>
                    </div>
                </div>
                :
                <div className={'w-full relative'}>
                    <div
                        onClick={manageEditStep}
                        className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
                        <p>بازگشت</p>
                        <ArrowLeft set={"bulk"}/>
                    </div>
                    <EditTypeForm/>
                </div>
            }
        </div>
    )
}


export default AccountTypeAction;