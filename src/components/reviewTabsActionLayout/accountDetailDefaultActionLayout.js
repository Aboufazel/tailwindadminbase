import React, {useEffect, useState} from "react";
import useReviewTabStore from "../../zustand/reviewTabStore";
import BackBtn from "./actionComponents/backBtn";
import {useGetFunction, useGetPersonById} from "../../hooks/coding";
import useAccountPersonStore from "../../zustand/accountPersonStore";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import Buttons from "../globals/Buttons";
import NewLinkSpecAccountTypeList from "./actionComponents/newLinkSpecAccountTypeList";
import {deleteAccountDetailDefault, getAccountDefaultDetailLink} from "../../api/accountDetailDefaultsApi";
import EditPersonForm from "./actionComponents/editPersonForm";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";
import LoadingText from "../loadingText/loadingText";
import AccountSpecShowCard from "./actionComponents/accountSpecShowCard";

const AccountDetailDefaultActionLayout = () => {
    const [loading ,setLoading] = useState(false)
    const editStep = useAccountPersonStore(state => state.editPersonStep)
    const linkStep = useAccountPersonStore(state => state.specPersonLinkStep)
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountDetailDefaultId = useAccountPersonStore(state => state.accountPersonId)
    const {data , isLoading ,refetch ,isError , isRefetching} = useGetPersonById("getPersonByID" , accountDetailDefaultId)
    const manageLinkStep = useAccountPersonStore(state => state.managePersonSpecLinkStep)
    const manageEditStep = useAccountPersonStore(state => state.managePersonEditStep)
    const manageDeleteStep = useAccountPersonStore(state => state.manageDeleteStep)
    const deleteStep = useAccountPersonStore(state => state.deletePersonStep)
    const {data:defaultLink , refetch:linkRefetch ,isLoading:linkLoading} = useGetFunction('getDefaultSubsidiary' , accountDetailDefaultId , getAccountDefaultDetailLink)

    useEffect(() => {
        refetch()
    }, [editStep, refetch]);


    useEffect(() => {
        linkRefetch()
    }, [linkRefetch, linkStep]);

    if(isError){
        return  (toast.error('دریافت اطلاعات با مشکل مواجه شد!'))
    }


    const accountPersonInformationList = [
        {title:"نام حساب" , data:data?.data.accountDetailDefaults[0].accountDetailDefaultName},
        {title:"کد حساب" , data:data?.data.accountDetailDefaults[0].accountDetailDefaultCode},
        {title:"نوع حساب" , data:data?.data.accountDetailDefaults[0].accountDetailTypeId},
        {title:"وضعیت" , data:data?.data.accountDetailDefaults[0].canDelete === 1 ? 'غیر قابل حذف' : 'قابل حذف'},
    ]

    const manageDeleteDefaultPerson = async ()=>{
        setLoading(true)
        await deleteAccountDetailDefault(accountDetailDefaultId).catch(()=>{
            return (toast.error("حذف با مشکل مواجه شد"))
        })
        manageActionLayout()
        manageDeleteStep()
        toast.success("حساب با موفقیت حذف شد")
        setLoading(false)
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
                                    (isLoading || isRefetching) ?
                                        <LoadingComponents title={'دریافت اطلاعات حساب تفضیلی'}/>
                                        :
                                        <ShowDetailComponents cls={""} data={accountPersonInformationList}/>
                                }

                                <div className={'w-full mt-6'}>
                                    <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                                        لینک های معین
                                    </div>
                                    <div className={'h-[100px] overflow-y-auto '}>
                                        {
                                            (linkLoading || isRefetching) ?
                                                <LoadingComponents title={'درحال دریافت حساب معین'}/>
                                                :
                                                defaultLink.data.accountDetailDefaultLinks.map((items, index) => (
                                                    <AccountSpecShowCard
                                                        key={'account-type-spec' + index + items.accountTypeSpecId}
                                                        step={'account-detail-default-link'}
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
                                                <Buttons onClick={manageDeleteStep} light={true}>حذف</Buttons>
                                            </> :
                                            <div className={"w-full"}>
                                                <p className={"text-danger-600 font-medium text-[14px]"}>آیا حساب تفضیلی را حذف
                                                    میکنید؟</p>
                                                <p className={"text-text-color-2 mt-2"}>با حذف حساب تفضیلی دسترسی به آن دیگر وجود
                                                    ندارد</p>
                                                <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                    <Buttons onClick={manageDeleteStep} light={true}>{"انصراف"}</Buttons>
                                                    <Buttons onClick={manageDeleteDefaultPerson} color={"danger"}
                                                             light={true}>
                                                        {loading ? <LoadingText text={"تایید"}/> :  "تایید"}
                                                    </Buttons>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            :
                            <div className={'w-full relative'}>
                                <BackBtn onClick={manageEditStep}/>
                                <EditPersonForm refetch={refetch}/>
                            </div>
                        }
                    </> :
                    <div className={'w-full relative'}>
                        <BackBtn onClick={manageLinkStep}/>
                        <NewLinkSpecAccountTypeList step={'account-default-detail-link'}/>
                    </div>
            }
        </div>
    )
}

export default AccountDetailDefaultActionLayout;