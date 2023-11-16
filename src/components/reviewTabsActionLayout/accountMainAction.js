import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";
import {useGetAccountMainById} from "../../hooks/coding";
import React, {useState} from "react";
import Buttons from "../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import useAccountMainStore from "../../zustand/accountMainStore";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import {deleteAccountMain, editAccountMainIsActive} from "../../api/accountMainApi";
import EditMainForm from "./actionComponents/editMainForm";

const AccountMainAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountMainId = useReviewTabStore(state => state.codingAccountMainId)
    const deleteMainStep = useAccountMainStore(state => state.deleteMainStep)
    const editMainStep = useAccountMainStore(state => state.editMainStep)
    const manageEditMainStep = useAccountMainStore(state => state.manageEditMainStep)
    const manageDeleteMainStep = useAccountMainStore(state => state.manageDeleteMainStep)
    const [loading , setLoading] = useState(false)

    const {data , isLoading , isError , isRefetching , refetch } = useGetAccountMainById('getMainById' , accountMainId)

    const accountMainInformationList = [
        {title:"نام حساب" , data:data?.data.accountMains[0].accountMainName},
        {title:"کد حساب" , data:data?.data.accountMains[0].accountMainCode},
        {title:"نوع" , data:data?.data.accountMains[0].type === 1 ? 'دائم' : 'موقت'},
        {title:"ماهیت" , data:data?.data.accountMains[0].instinct === 1 ? 'بدهکار' : data?.data.accountMains[0].instinct=== 2 ? 'بستانکار' :'بدون ماهیت'},
        {title:"وضعیت" , data:data?.data.accountMains[0].isActive ? 'فعال' : 'غیر فعال'},
    ]

    const accountMainsGroupInfo = [
        {title:"گروه حساب" , data:data?.data.accountMains[0].accountGroupName},
    ]

    if (isLoading || isRefetching){
        return (<LoadingComponents title={'در حال دریافت حساب کل '}/> )
    }

    if (isError){
        return (toast.error('دریافت با مشکل مواجه شد!'))
    }

    const manageIsActiveFn = async ()=>{
        setLoading(true)
        const res = await editAccountMainIsActive(accountMainId , !data.data.accountMains[0].isActive).catch(()=>{
            setLoading(false)
            return ( toast.error('غیر فعال  سازی موفق نبود'))
        })
        if(res.status === 200){
            setLoading(false)
            refetch()
            return ( toast.success('ویرایش موفقیت آمیز بود'))
        }
    }

    const manageDeleteMainAccount = async ()=>{
        const res = await deleteAccountMain(accountMainId).catch(()=>{
            manageDeleteMainStep()
            return (toast.error(' حساب  کل قابل حذف نیست!'))
        })
        if (res.status===200){
            manageDeleteMainStep()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
    }

    return(
        <div className={"relative w-full"}>
            {
                !editMainStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        <div className={"flex flex-col pt-8"}>
                            <div className={"flex flex-col pt-8"}>
                                <p className={"text-center mb-3 text-text-color-1 text-[16px] font-bold"}>{data.data.accountMains[0].accountMainName}</p>
                            </div>
                            <div className={"bg-primary-extraLight font-medium text-text-color-1 w-full p-2"}>
                                {'اطلاعات'}
                            </div>
                            <ul className={"mt-5 px-5"}>
                                {
                                    accountMainInformationList.map((items, index) => (
                                        <li key={"accountGroup-list-info" + index}
                                            className={"flex flex-row items-center w-full justify-between mb-3"}>
                                            <p>{items?.title}</p>
                                            <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={"bg-primary-extraLight font-medium text-text-color-1 w-full p-2"}>
                                {'حساب ها'}
                            </div>
                            <ul className={"mt-5 px-5"}>
                                {
                                    accountMainsGroupInfo.map((items, index) => (
                                        <li key={"accountGroup-list-info" + index}
                                            className={"flex flex-row items-center w-full justify-between mb-3"}>
                                            <p>{items?.title}</p>
                                            <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={"flex flex-row justify-center mt-3 items-center gap-3"}>
                                {
                                    !deleteMainStep ?
                                        <>
                                            <Buttons onClick={manageEditMainStep} light={true}>ویرایش</Buttons>
                                            <Buttons onClick={manageDeleteMainStep} light={true}>حذف</Buttons>
                                            <Buttons onClick={manageIsActiveFn} light={true}>
                                                {
                                                    data?.data.accountMains[0].isActive ?
                                                        <div className={"flex flex-row gap-3 items-center"}>
                                                            {
                                                                loading ? <Spinner color={"blue"}/> : ""
                                                            }
                                                            <p>غیرفعال سازی</p>
                                                        </div>
                                                        :
                                                        <div className={"flex flex-row gap-1 items-center"}>
                                                            {
                                                                loading ? <Spinner color={"blue"}/> : ""
                                                            }
                                                            <p>فعال سازی</p>
                                                        </div>
                                                }
                                            </Buttons>
                                        </> :
                                        <div className={"w-full px-3 mt-3"}>
                                            <p className={"text-danger-600 font-medium text-[14px]"}>
                                                آیا حساب را حذف می‌‌کنید؟
                                            </p>
                                            <p className={"text-text-color-2 mt-2"}>
                                                با حذف کردن حساب دیگر کسب و کار ها به آن دسترسی ندارند!
                                            </p>
                                            <div className={"flex flex-row justify-end gap-3 items-center"}>
                                                <Buttons onClick={manageDeleteMainStep} light={true}>{"انصراف"}</Buttons>
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
                        <BackBtn onClick={manageEditMainStep}/>
                        <EditMainForm apiData={data}/>
                    </div>
            }
        </div>
    )
}

export default AccountMainAction