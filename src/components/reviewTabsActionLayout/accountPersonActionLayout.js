import useReviewTabStore from "../../zustand/reviewTabStore";
import BackBtn from "./actionComponents/backBtn";
import {useGetPersonById} from "../../hooks/coding";
import useAccountPersonStore from "../../zustand/accountPersonStore";
import useAccountTypeStore from "../../zustand/accountTypeStore";
import React, {useState} from "react";
import {toast} from "react-toastify";
import LoadingComponents from "../loading/loadingComponents";
import AccountSpecShowCard from "./actionComponents/accountSpecShowCard";
import Buttons from "../globals/Buttons";
import EditTypeForm from "./actionComponents/editTypeForm";
import NewLinkSpecAccountTypeList from "./actionComponents/newLinkSpecAccountTypeList";

const AccountPersonActionLayout = () => {
    const editStep = useAccountTypeStore(state => state.editStep)
    const linkStep = useAccountTypeStore(state => state.specLinkStep)
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountPersonId = useAccountPersonStore(state => state.accountPersonId)
    const {data , isLoading , isError , isRefetching} = useGetPersonById("getPersonByID" , accountPersonId)
    const manageLinkStep = useAccountTypeStore(state => state.manageSpecLinkStep)
    const manageEditStep = useAccountTypeStore(state => state.manageEditStep)
    const updateDeleteStep = useAccountTypeStore(state => state.updateDeleteStep)
    const deleteStep = useAccountTypeStore(state => state.deleteStep)
    const [active , setActive] = useState('')

    console.log(data)

    const accountPersonInformationList = [
        {title:"نام حساب" , data:data?.data.defaultPersons[0].defaultPersonName},
        {title:"کد حساب" , data:data?.data.defaultPersons[0].defaultPersonCode},
        {title:"نوع حساب" , data:data?.data.defaultPersons[0].accountTypeId},
        {title:"وضعیت" , data:data?.data.defaultPersons[0].canDelete === 1 ? 'غیر قابل حذف' : 'قابل حذف'},
    ]



    if(isError){
        return  (toast.error('دریافت اطلاعات با مشکل مواجه شد!'))
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
                                        (isLoading || isRefetching) ?
                                            <LoadingComponents title={'دریافت اطلاعات نوع حساب'}/>
                                            :
                                            <ul className={"mt-5 px-5"}>
                                                {
                                                    accountPersonInformationList.map((items, index) => (
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
                                    {/*<div className={'h-[100px] overflow-y-auto '}>*/}
                                    {/*    {*/}
                                    {/*        (isLoading || isRefetching) ?*/}
                                    {/*            <LoadingComponents title={'درحال دریافت حساب معین'}/>*/}
                                    {/*            :*/}
                                    {/*            data.data.accountTypeSpecs.map((items, index) => (*/}
                                    {/*                <AccountSpecShowCard*/}
                                    {/*                    key={'account-type-spec' + index + items.accountTypeSpecId}*/}
                                    {/*                    data={items}/>*/}
                                    {/*            ))*/}
                                    {/*    }*/}
                                    {/*</div>*/}
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
                                                    <Buttons color={"danger"}
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

export default AccountPersonActionLayout;