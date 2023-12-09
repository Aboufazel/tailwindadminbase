import useRevenueModelStore from "../../../zustand/revenueModelStore";
import {useGetFunction} from "../../../hooks/coding";
import {
    deleteRevenuePlans,
    getRevenuePlansDataById,
    manageRevenuePlansActive, manageRevenuePlansDeActive
} from "../../../api/revenueModelApi";
import ShowDetailComponents from "../../../components/showDetailComponents/showDetailComponents";
import LoadingComponents from "../../../components/loading/loadingComponents";
import {toast} from "react-toastify";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import BackBtn from "../../../components/reviewTabsActionLayout/actionComponents/backBtn";
import EditRevenuePlans from "./editRevenuePlans";

const RevenuePlansAction = () => {
    const revenuePlanId = useRevenueModelStore(state => state.revenuePlansId)
    const [loading, setLoading] = useState(false)
    const editRevenuePlanLayout = useRevenueModelStore(state => state.editRevenuePlanLayout)
    const deleteRevenuePlanLayout = useRevenueModelStore(state => state.deleteRevenuePlanLayout)
    const manageRevenuePlansEditLayout = useRevenueModelStore(state => state.manageRevenuePlansEditLayout)
    const manageRevenuePlansDeleteLayout = useRevenueModelStore(state => state.manageRevenuePlansDeleteLayout)
    const manageRevenuePlansActionLayout = useRevenueModelStore(state => state.manageRevenuePlansActionLayout)
    const {data , isLoading , isRefetching , refetch , isError} = useGetFunction("getRevenuePlansById" , revenuePlanId , getRevenuePlansDataById)
    useEffect(() => {
        refetch()
    }, [editRevenuePlanLayout]);

    if (isLoading || isRefetching){
        return (<LoadingComponents title={"در حال دریافت اطلاعات"}/> )
    }

    if(isError){
        return (toast.error("دریافت با مشکل مواجه شد!"))
    }

    const activeFn = async () => {
        await manageRevenuePlansActive(`${revenuePlanId}`).catch(
            () => {
                return (
                    toast.error("فعال سازی موفق نبود!")
                )
            }
        ).then(() => {
            refetch()
            return (toast.success("فعالسازی موفقیت آمیز بود"))
        })
        setLoading(false)
    }

    const deActiveFn = async () => {
        await manageRevenuePlansDeActive(`${revenuePlanId}`).catch(
            () => {
                return (
                    toast.error("غیر فعال سازی موفق نبود!")
                )
            }
        ).then(() => {
            refetch()
            return (
                toast.success("غیر فعالسازی موفقیت آمیز بود")
            )
        })
        setLoading(false)
    }

    const manageActiveRevenueModel = () => {
        setLoading(!loading)
        if (data.data.revenuePlans[0].isActive === 1) {
            deActiveFn()
        } else if (data.data.revenuePlans[0].isActive === 0) {
            activeFn()
        }
    }

    const manageDeletePlans = async ()=>{
        await deleteRevenuePlans(revenuePlanId).catch(()=>{
            return(toast.error("حذف با مشکل مواجه شد"))
        }).then(()=>{
            manageRevenuePlansActionLayout()
            return(toast.success("پلن درامدی با موفقیت حذف شد"))
        })
    }

    const revenuePlansInformationList = [
        {title: "وضعیت", data: data.data.revenuePlans[0].isActive === 1 ? "فعال" : "غیر فعال"},
        {title: "کد پلن درآمدی", data: data.data.revenuePlans[0].revenuePlanCode},
        {title: "نام پلن درآمدی", data: data.data.revenuePlans[0].revenuePlanName},
    ]

    if(editRevenuePlanLayout){
        return (
            <div className={"w-full relative"}>
                <BackBtn onClick={manageRevenuePlansEditLayout}/>
                <EditRevenuePlans plansData={data.data.revenuePlans[0]}/>
            </div>
        )
    }

    if(!editRevenuePlanLayout){
        return(
            <div className={"w-full"}>
                <ShowDetailComponents data={revenuePlansInformationList}/>
                <div className={"flex flex-row w-full gap-5 mt-5 items-center justify-center"}>
                    <Buttons onClick={manageRevenuePlansEditLayout} light={true}>ویرایش</Buttons>
                    <Buttons onClick={manageRevenuePlansDeleteLayout}  light={true}>حذف</Buttons>
                    <Buttons onClick={manageActiveRevenueModel}  light={true}>
                        {
                            data.data.revenuePlans[0].isActive === 1 ?
                                <div className={"flex flex-row gap-3 items-center"}>
                                    {loading ? <Spinner color={"blue"}/> : "" }
                                    <p>غیرفعال سازی</p>
                                </div>
                                :
                                <div className={"flex flex-row gap-1 items-center"}>
                                    {loading ? <Spinner color={"blue"}/> : "" }
                                    <p>فعال سازی</p>
                                </div>
                        }
                    </Buttons>
                </div>
                {
                    deleteRevenuePlanLayout?
                        <div className={"w-full mt-5"}>
                            <p>ایا از حذف پلن درآمدی مطمعن هستید؟</p>
                            <div className={"flex flex-row gap-5 items-center w-full justify-end"}>
                                <Buttons onClick={manageRevenuePlansDeleteLayout} light={true}>انصراف</Buttons>
                                <Buttons onClick={manageDeletePlans} light={true} color={"danger"}>تایید</Buttons>
                            </div>
                        </div>
                        : ""
                }
            </div>
        )
    }
}

export default RevenuePlansAction;