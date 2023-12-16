import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";
import {useGetAccountMainById} from "../../hooks/coding";
import React, {useEffect, useState} from "react";
import Buttons from "../globals/Buttons";
import useAccountMainStore from "../../zustand/accountMainStore";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import {deleteAccountGeneral} from "../../api/accountMainApi";
import EditMainForm from "./actionComponents/editMainForm";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";
import {Spinner} from "@material-tailwind/react";

const AccountGeneralAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountGeneralId = useReviewTabStore(state => state.codingAccountMainId)
    const deleteGeneralStep = useAccountMainStore(state => state.deleteMainStep)
    const editGeneralStep = useAccountMainStore(state => state.editMainStep)
    const manageEditGeneralStep = useAccountMainStore(state => state.manageEditMainStep)
    const manageDeleteGeneralStep = useAccountMainStore(state => state.manageDeleteMainStep)
    const [loading, setLoading] = useState(false);
    const {data , isLoading , isError , refetch,  isRefetching} = useGetAccountMainById('getMainById' , accountGeneralId)

    const accountMainInformationList = [
        {title:"نام حساب" , data:data?.data.accountGenerals[0].accountGeneralName},
        {title:"کد حساب" , data:data?.data.accountGenerals[0].accountGeneralCode},
        {title:"نوع" , data:data?.data.accountGenerals[0].balanceSheetType=== 1 ? 'دائم' : 'موقت'},
        {title:"ماهیت" , data:data?.data.accountGenerals[0].accountNature === 0 ? 'بدهکار' : data?.data.accountGenerals[0].accountNature=== 1 ? 'بستانکار' :'بدون ماهیت'},
    ]

    const accountMainsGroupInfo = [
        {title:"گروه حساب" , data:data?.data.accountGenerals[0].accountGroupName},
    ]

    useEffect(() => {
         refetch()
    }, [editGeneralStep]);

    if (isLoading || isRefetching){
        return (<LoadingComponents title={'در حال دریافت حساب کل '}/> )
    }

    if (isError){
        return (toast.error('دریافت با مشکل مواجه شد!'))
    }


    const manageDeleteGeneralAccount = async ()=>{
        setLoading(true)
        const res = await deleteAccountGeneral(accountGeneralId).catch((e)=>{
            manageDeleteGeneralStep()
            if(e.response.status === 403){
                return (toast.error("به دلیل وجود حساب معین امکان حذف وجود ندارد!"))
            } else if(e.response.status > 403 || e.response.status <= 500){
                return (toast.error('خطا در ارتباط با سرور!'))
            }
        })
        if (res.status===200){
            manageDeleteGeneralStep()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
        setLoading(false)
    }

    return(
        <div className={"relative w-full"}>
            {
                !editGeneralStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        <div className={"flex flex-col pt-8"}>
                            <div className={"flex flex-col pt-8"}>
                                <p className={"text-center mb-3 text-text-color-1 text-[16px] font-bold"}>{data.data.accountGenerals[0].accountGeneralName}</p>
                            </div>
                            <ShowDetailComponents cls={""} data={accountMainInformationList}/>
                            <ShowDetailComponents cls={""} data={accountMainsGroupInfo} title={"حساب ها"}/>
                            <div className={"flex flex-row justify-center mt-3 items-center gap-3"}>
                                {
                                    !deleteGeneralStep ?
                                        <>
                                            <Buttons onClick={manageEditGeneralStep} light={true}>ویرایش</Buttons>
                                            <Buttons onClick={manageDeleteGeneralStep} light={true}>حذف</Buttons>
                                        </> :
                                        <div className={"w-full px-3 mt-3"}>
                                            <p className={"text-danger-600 font-medium text-[14px]"}>
                                                آیا حساب را حذف می‌‌کنید؟
                                            </p>
                                            <p className={"text-text-color-2 mt-2"}>
                                                با حذف کردن حساب دیگر کسب و کار ها به آن دسترسی ندارند!
                                            </p>
                                            <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                <Buttons onClick={manageDeleteGeneralStep} light={true}>{"انصراف"}</Buttons>
                                                <Buttons onClick={manageDeleteGeneralAccount} color={"danger"}
                                                         light={true}>
                                                    {
                                                        loading ?
                                                            <p className={"flex flex-row items-center justify-center gap-3"}>
                                                                <Spinner/>
                                                                {"تایید"}
                                                            </p>
                                                            : "تایید"
                                                    }
                                                </Buttons>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </>
                :
                    <div className={'w-full relative'}>
                        <BackBtn onClick={manageEditGeneralStep}/>
                        <EditMainForm apiData={data} mainId={accountGeneralId}/>
                    </div>
            }
        </div>
    )
}

export default AccountGeneralAction