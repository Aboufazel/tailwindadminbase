import {useGetFunction} from "../../../hooks/coding";
import {
    deleteRevenuePlanPrice,
    deleteRevenuePlans,
    getRevenuePlansPriceDetail, manageRevenuePlanPriceActive, manageRevenuePlanPriceDeActive,
    manageRevenuePlansActive, manageRevenuePlansDeActive
} from "../../../api/revenueModelApi";
import useRevenueModelStore from "../../../zustand/revenueModelStore";
import ShowDetailComponents from "../../../components/showDetailComponents/showDetailComponents";
import React, {useEffect, useState} from "react";
import LoadingComponents from "../../../components/loading/loadingComponents";
import {toast} from "react-toastify";
import Buttons from "../../../components/globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import useRevenuePlanPriceStore from "../../../zustand/revenuePlanPriceStore";
import BackBtn from "../../../components/reviewTabsActionLayout/actionComponents/backBtn";
import EditRevenuePlanPrice from "./editRevenuePlanPrice";

const RevenuePlanPriceActionLayout = () => {
    const revenuePlaPriceId = useRevenueModelStore(state => state.revenuePlanPriceId)
    const editRevenuePlanPriceLayout = useRevenuePlanPriceStore(state => state.editRevenuePlanPriceLayout)
    const manageEditRevenuePlanPriceLayout = useRevenuePlanPriceStore(state => state.manageEditRevenuePlanPriceLayout)
    const deleteRevenuePlanPriceLayout = useRevenuePlanPriceStore(state => state.deleteRevenuePlanPriceLayout)
    const manageDeleteRevenuePlanPriceLayout = useRevenuePlanPriceStore(state => state.manageDeleteRevenuePlanPriceLayout)
    const managePlanPriceActionLayout = useRevenueModelStore(state => state.managePlanPriceActionLayout)
    const [loading, setLoading] = useState(false)
    const {
        data,
        isLoading,
        isRefetching,
        isError,
        refetch
    } = useGetFunction("getRevenuePlanPriceDetail", revenuePlaPriceId, getRevenuePlansPriceDetail)

    useEffect(() => {
        refetch()
    }, [editRevenuePlanPriceLayout]);

    if (isLoading || isRefetching) {
        return (
            <LoadingComponents title={"در حال دریافت اطلاعات"}/>
        )
    }

    if (isError) {
        return (
            toast.error("دریافت با مشکل مواجه شد!")
        )
    }

    const revenuePlanPriceInformationList = [
        {title: "وضعیت", data: data.data.revenuePlanPrices[0].isActive === 1 ? "فعال" : "غیر فعال"},
        {title: "کد ", data: data.data.revenuePlanPrices[0].revenuePlanPriceCode},
        {title: "نام", data: data.data.revenuePlanPrices[0].revenuePlanPriceName},
        {title: "قیمت", data: data.data.revenuePlanPrices[0].price},
        {title: "جایزه", data: data.data.revenuePlanPrices[0].isGift === 1 ? "فعال" : "غیر فعال"},
        {title: "اولیه", data: data.data.revenuePlanPrices[0].isInitial === 1 ? "فعال" : "غیر فعال"},
        {title: "محدوده استفاده", data: data.data.revenuePlanPrices[0].duration},
        {title: "تعداد کاربر", data: data.data.revenuePlanPrices[0].buyLimit},
    ]


    const activeFn = async () => {
        await manageRevenuePlanPriceActive(`${revenuePlaPriceId}`).catch(
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
        await manageRevenuePlanPriceDeActive(`${revenuePlaPriceId}`).catch(
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
        if (data.data.revenuePlanPrices[0].isActive === 1) {
            deActiveFn()
        } else if (data.data.revenuePlanPrices[0].isActive === 0) {
            activeFn()
        }
    }
    const manageDeletePrice = async ()=>{
        await deleteRevenuePlanPrice(revenuePlaPriceId).catch(()=>{
            return(toast.error("حذف با مشکل مواجه شد"))
        }).then(()=>{
            managePlanPriceActionLayout()
            manageDeleteRevenuePlanPriceLayout()
            return(toast.success("قیمت با موفقیت حذف شد"))
        })
    }

    if(editRevenuePlanPriceLayout){
        return (
            <div className={"w-full"}>
                <BackBtn onClick={manageEditRevenuePlanPriceLayout}/>
                <EditRevenuePlanPrice planPriceData={data.data.revenuePlanPrices[0]}/>
            </div>
        )
    }

    if(!editRevenuePlanPriceLayout){
        return (
            <div className={"w-full"}>
                <ShowDetailComponents data={revenuePlanPriceInformationList}/>
                <div className={"flex flex-row w-full gap-5 mt-5 items-center justify-center"}>
                    <Buttons onClick={manageEditRevenuePlanPriceLayout} light={true}>ویرایش</Buttons>
                    <Buttons onClick={manageDeleteRevenuePlanPriceLayout} light={true}>حذف</Buttons>
                    <Buttons onClick={manageActiveRevenueModel} light={true}>
                        {
                            data.data.revenuePlanPrices[0].isActive === 1 ?
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
                    deleteRevenuePlanPriceLayout?
                        <div className={"w-full mt-5"}>
                            <p>ایا از حذف قیمت مطمعن هستید؟</p>
                            <div className={"flex flex-row gap-5 items-center w-full justify-end"}>
                                <Buttons onClick={manageDeleteRevenuePlanPriceLayout} light={true}>انصراف</Buttons>
                                <Buttons onClick={manageDeletePrice} light={true} color={"danger"}>تایید</Buttons>
                            </div>
                        </div>
                        : ""
                }
            </div>
        )
    }
}

export default RevenuePlanPriceActionLayout;