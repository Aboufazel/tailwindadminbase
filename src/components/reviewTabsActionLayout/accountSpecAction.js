import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";
import React, {useState} from "react";
import useAccountSpecStore from "../../zustand/accountSpecStore";
import {useGetAccountSpecById} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import Buttons from "../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import EditSpecForm from "./actionComponents/editSpecForm";
import {deleteAccountSpec, editIsActiveAccountSpec} from "../../api/accountSpecApi";

const AccountSpecAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    const accountSpecId = useReviewTabStore(state => state.codingAccountSpecId)
    const deleteSpecStep = useAccountSpecStore(state => state.deleteSpecStep)
    const editSpecStep = useAccountSpecStore(state => state.editSpecStep)
    const manageSpecEditStep = useAccountSpecStore(state => state.manageEditSpecStep)
    const manageDeleteSpecStep = useAccountSpecStore(state => state.manageDeleteSpecStep)
    const [loading , setLoading] = useState(false)

    const {data , isRefetching , isLoading , refetch , isError} = useGetAccountSpecById('getAccountSpecWithId' , accountSpecId)

    console.log(data , 'specs data')
    const accountSpecInformationList = [
        {title:"نام حساب" , data:data?.data.accountSpecs[0].accountSpecName},
        {title:"کد حساب" , data:data?.data.accountSpecs[0].accountSpecCode},
        {title:"نوع" , data:data?.data.accountSpecs[0].type === 1 ? 'دائم' : 'موقت'},
        {title:"ماهیت" , data:data?.data.accountSpecs[0].instinct === 1 ? 'بدهکار' : data?.data.accountSpecs[0].instinct=== 2 ? 'بستانکار' :'بدون ماهیت'},
        {title:"وضعیت" , data:data?.data.accountSpecs[0].isActive ? 'فعال' : 'غیر فعال'},
    ]

    const accountSpecGroupInfo = [
        {title:"گروه حساب" , data:data?.data.accountSpecs[0].accountGroupName},
        {title:"حساب کل" , data:data?.data.accountSpecs[0].accountMainName},
    ]

    if (isLoading || isRefetching){
        return (<LoadingComponents title={'در حال دریافت حساب معین '}/> )
    }

    if (isError){
        return (toast.error('دریافت با مشکل مواجه شد!'))
    }

    const manageIsActiveFn = async ()=>{
        setLoading(true)
        const res = await editIsActiveAccountSpec(accountSpecId , !data.data.accountSpecs[0].isActive).catch(()=>{
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
        const res = await deleteAccountSpec(accountSpecId).catch(()=>{
            manageDeleteSpecStep()
            return (toast.error(' حساب  کل قابل حذف نیست!'))
        })
        if (res.status===200){
            manageDeleteSpecStep()
            return(toast.success('حذف موفقیت آمیز بود'))
        }
    }

    return(
        <div className={"relative w-full"}>
            {
                !editSpecStep ?
                    <>
                        <BackBtn onClick={manageActionLayout}/>
                        <div className={"flex flex-col pt-8"}>
                            <div className={"flex flex-col pt-8"}>
                                <p className={"text-center mb-3 text-text-color-1 text-[16px] font-bold"}>{data.data.accountSpecs[0].accountSpecName}</p>
                            </div>
                            <div className={"bg-primary-extraLight font-medium text-text-color-1 w-full p-2"}>
                                {'اطلاعات'}
                            </div>
                            <ul className={"mt-5 px-5"}>
                                {
                                    accountSpecInformationList.map((items, index) => (
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
                                    accountSpecGroupInfo.map((items, index) => (
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
                                    !deleteSpecStep ?
                                        <>
                                            <Buttons onClick={manageSpecEditStep} light={true}>ویرایش</Buttons>
                                            <Buttons onClick={manageDeleteSpecStep} light={true}>حذف</Buttons>
                                            <Buttons onClick={manageIsActiveFn} light={true}>
                                                {
                                                    data?.data.accountSpecs[0].isActive ?
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
                        <EditSpecForm apiData={data}/>
                    </div>
            }
        </div>
    )
}

export default AccountSpecAction;