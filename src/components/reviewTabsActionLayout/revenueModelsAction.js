import React, {useEffect, useState} from "react";
import LoadingComponents from "../loading/loadingComponents";
import BackBtn from "./actionComponents/backBtn";
import useRevenueModelStore from "../../zustand/revenueModelStore";
import {useGetFunction} from "../../hooks/coding";
import {
    getRevenueModelByIdApi, getRevenuePlansByModelId,
    manageRevenueModelsActive,
    manageRevenueModelsDeActive
} from "../../api/revenueModelApi";
import {toast} from "react-toastify";
import Buttons from "../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import EditRevenueModelForm from "./actionComponents/editRevenueModelForm";
import AddRevenuePlans from "../../layouts/revenue/revenueLayout/addRevenuePlans";
import RevenuePlansShowCard from "./actionComponents/revenuePlansShowCard";

const RevenueModelsAction = () => {
    const [loading, setLoading] = useState(false)
    const manageRevenueActionLayout = useRevenueModelStore(state => state.manageRevenueActionLayout)
    const manageRevenueEditLayout = useRevenueModelStore(state => state.manageRevenueModelEditLayout)
    const revenueEditLayout = useRevenueModelStore(state => state.revenueModelEditLayout)
    const revenueModelId = useRevenueModelStore(state => state.revenueModelId)

    const {
        data: modelsData,
        isLoading,
        isRefetching,
        refetch,
        isError
    } = useGetFunction('getRevenueModelById', `${revenueModelId}`, getRevenueModelByIdApi)


    const {data:plansData} = useGetFunction('getRevenuePlansById' , revenueModelId , getRevenuePlansByModelId)

    useEffect(() => {
        refetch()
    }, [revenueEditLayout]);

    if (isLoading || isRefetching) {
        return (<LoadingComponents title={"در حال دریافت اطلاعات"}/>)
    }

    if (isError) {
        return (toast.error("دریافت با مشکل مواجه شد!"))
    }

    const revenueModelsInformationList = [
        {title: "وضعیت", data: modelsData.data.revenueModels[0].isActive === 1 ? "فعال" : "غیر فعال"},
        {title: "کد مدل درآمدی", data: modelsData.data.revenueModels[0].revenueModelCode},
        {title: "نام مدل درآمدی", data: modelsData.data.revenueModels[0].revenueModelName},
        {title: "پلن مدل درآمدی", data: modelsData.data.revenueModels[0].revenueModelType},
        {title: "محدودیت حساب مالی", data: modelsData.data.revenueModels[0].fiscalYearLimit},
    ]

    const activeFn = async () => {
        await manageRevenueModelsActive(`${revenueModelId}`).catch(
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
        await manageRevenueModelsDeActive(`${revenueModelId}`).catch(
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
        if (modelsData.data.revenueModels[0].isActive === 1) {
            deActiveFn()
        } else if (modelsData.data.revenueModels[0].isActive === 0) {
            activeFn()
        }
    }

    if (revenueEditLayout){
        return (
            <div className={"relative w-full"}>
                <BackBtn onClick={() => {
                    manageRevenueEditLayout()
                }}/>
                <EditRevenueModelForm data={modelsData.data.revenueModels[0]}/>
            </div>
        )
    }


    else if(!revenueEditLayout){
        return (
            <div className={"relative w-full"}>
                <BackBtn onClick={() => {
                    manageRevenueActionLayout()
                }}/>
                <div className={"flex flex-col pt-14"}>
                    <div className={'w-full'}>
                        <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                            اطلاعات
                        </div>
                        <ul className={"mt-5 px-5"}>
                            {
                                revenueModelsInformationList.map((items, index) => (
                                    <li key={"accountType-list-info" + index}
                                        className={"flex flex-row items-center w-full justify-between mb-3"}>
                                        <p>{items?.title}</p>
                                        <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*<div className={'bg-primary-light/30 mt-5 p-1 font-medium text-[14px] w-full'}>*/}
                    {/*    پلن های درآمدی*/}
                    {/*</div>*/}
                    {/*<div className={"flex flex-col max-h-[700px] overflow-y-auto w-full"}>*/}
                    {/*    {*/}
                    {/*        plansData.data.revenuePlans.map((items , index)=>(*/}
                    {/*            <RevenuePlansShowCard key={"revenue-plans-card" + index} data={items}/>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
                <div className={"flex flex-row w-full gap-5 mt-5 items-center justify-center"}>
                    <Buttons onClick={manageRevenueEditLayout} light={true}>ویرایش</Buttons>
                    <Buttons light={true}>حذف</Buttons>
                    <Buttons onClick={manageActiveRevenueModel} light={true}>
                        {
                            modelsData.data.revenueModels[0].isActive === 1 ?
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
            </div>
        )
    }

}

export default RevenueModelsAction;