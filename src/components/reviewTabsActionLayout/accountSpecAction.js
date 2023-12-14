import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";
import React, {useEffect} from "react";
import useAccountSpecStore from "../../zustand/accountSpecStore";
import {useGetAccountSubsidiaryById} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import Buttons from "../globals/Buttons";
import EditSubsidiaryForm from "./actionComponents/editSubsidiaryForm";
import {deleteAccountSubsidiary} from "../../api/accountSubsidiaryApi";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";

const AccountSpecAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountSubsidiaryId = useReviewTabStore(state => state.codingAccountSpecId)
    const deleteSpecStep = useAccountSpecStore(state => state.deleteSpecStep)
    const editStep = useAccountSpecStore(state => state.editSpecStep)
    const manageSpecEditStep = useAccountSpecStore(state => state.manageEditSpecStep)
    const manageDeleteSpecStep = useAccountSpecStore(state => state.manageDeleteSpecStep)
    const {data , isRefetching ,refetch ,isLoading , isError} = useGetAccountSubsidiaryById('getAccountSubsidiaryWithId' , accountSubsidiaryId)


    console.log(data , "subsidiary data")
    useEffect(() => {
        refetch()
    }, [editStep]);
    const accountSubsidiaryInformationList = [
        {title:"نام حساب" , data:data?.data.accountSubsidiaries[0].accountSubsidiaryName},
        {title:"کد حساب" , data:data?.data.accountSubsidiaries[0].accountSubsidiaryCode},
        {title:"نوع" , data:data?.data.accountSubsidiaries[0].balanceSheetType === 1 ? 'دائم' : 'موقت'},
        {title:"ماهیت" , data:data?.data.accountSubsidiaries[0].accountNature === 0 ? 'بدهکار' : data?.data.accountSubsidiaries[0].accountNature=== 1 ? 'بستانکار' :'بدون ماهیت'},
    ]

    const accountSubsidiaryGroupInfo = [
        {title:"گروه حساب" , data:data?.data.accountSubsidiaries[0].accountGroupName},
        {title:"حساب کل" , data:data?.data.accountSubsidiaries[0].accountGeneralName},
    ]


    if (isLoading || isRefetching){
        return (<LoadingComponents title={'در حال دریافت حساب معین '}/> )
    }

    if (isError){
        return (toast.error('دریافت با مشکل مواجه شد!'))
    }


    const manageDeleteMainAccount = async ()=>{
        const res = await deleteAccountSubsidiary(accountSubsidiaryId).catch(
            (e)=>{
                return(toast.error(e.message))
            }
        )
        if (res.status===200){
            manageDeleteSpecStep()
            manageActionLayout()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
    }

    return(
        <div className={"relative w-full"}>
            {
                !editStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        <div className={"flex flex-col pt-8"}>
                            <div className={"flex flex-col pt-8"}>
                                <p className={"text-center mb-3 text-text-color-1 text-[16px] font-bold"}>{data?.data.accountSubsidiaries[0].accountSubsidiaryName}</p>
                            </div>
                            <ShowDetailComponents cls={""} data={accountSubsidiaryInformationList}/>
                            <ShowDetailComponents cls={""} title={"حساب ها"} data={accountSubsidiaryGroupInfo}/>
                            <div className={"flex flex-row justify-center mt-3 items-center gap-3"}>
                                {
                                    !deleteSpecStep ?
                                        <>
                                            <Buttons onClick={manageSpecEditStep} light={true}>ویرایش</Buttons>
                                            <Buttons onClick={manageDeleteSpecStep} light={true}>حذف</Buttons>
                                        </> :
                                        <div className={"w-full px-3 mt-3"}>
                                            <p className={"text-danger-600 font-medium text-[14px]"}>
                                                آیا حساب را حذف می‌‌کنید؟
                                            </p>
                                            <p className={"text-text-color-2 mt-2"}>
                                                با حذف کردن حساب دیگر کسب و کار ها به آن دسترسی ندارند!
                                            </p>
                                            <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                <Buttons onClick={manageDeleteSpecStep} light={true}>{"انصراف"}</Buttons>
                                                <Buttons onClick={manageDeleteMainAccount} color={"danger"}
                                                         light={true}>{"تایید"}</Buttons>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </>
                    :
                    <div className={'w-full relative'}>
                        <BackBtn onClick={manageSpecEditStep}/>
                        <EditSubsidiaryForm apiData={data}/>
                    </div>
            }
        </div>
    )
}

export default AccountSpecAction;