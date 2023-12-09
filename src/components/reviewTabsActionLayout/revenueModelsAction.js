import React, {useEffect, useState} from "react";
import LoadingComponents from "../loading/loadingComponents";
import BackBtn from "./actionComponents/backBtn";
import useRevenueModelStore from "../../zustand/revenueModelStore";
import {useGetFunction} from "../../hooks/coding";
import {
    deleteRevenueModel,
    getRevenueModelByIdApi,
    manageRevenueModelsActive,
    manageRevenueModelsDeActive
} from "../../api/revenueModelApi";
import {toast} from "react-toastify";
import Buttons from "../globals/Buttons";
import {Spinner} from "@material-tailwind/react";
import EditRevenueModelForm from "./actionComponents/editRevenueModelForm";
import ShowDetailComponents from "../showDetailComponents/showDetailComponents";

const RevenueModelsAction = () => {
    const [loading, setLoading] = useState(false)
    const manageRevenueActionLayout = useRevenueModelStore(state => state.manageRevenueActionLayout)
    const manageRevenueEditLayout = useRevenueModelStore(state => state.manageRevenueModelEditLayout)
    const revenueEditLayout = useRevenueModelStore(state => state.revenueModelEditLayout)
    const revenueModelId = useRevenueModelStore(state => state.revenueModelId)
    const deleteRevenueModelLayout = useRevenueModelStore(state => state.deleteRevenueModelLayout)
    const manageRevenueModelsDeleteLayout = useRevenueModelStore(state => state.manageRevenueModelsDeleteLayout)
    const {
        data: modelsData,
        isLoading,
        isRefetching,
        refetch,
        isError
    } = useGetFunction('getRevenueModelById', `${revenueModelId}`, getRevenueModelByIdApi)


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

    const manageDeleteRevenueModel = async ()=>{
        await deleteRevenueModel(`${revenueModelId}`).catch(()=>{
            return(toast.error("حذف با مشکل مواجه شد"))
        }).then(()=>{
            manageRevenueActionLayout()
            manageRevenueModelsDeleteLayout()
            return(toast.success("مدل درامدی با موفقیت حذف شد"))
        })
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
                <ShowDetailComponents data={revenueModelsInformationList}/>
                <div className={"flex flex-row w-full gap-5 mt-5 items-center justify-center"}>
                    <Buttons onClick={manageRevenueEditLayout} light={true}>ویرایش</Buttons>
                    <Buttons onClick={manageRevenueModelsDeleteLayout} light={true}>حذف</Buttons>
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
                {
                    deleteRevenueModelLayout?
                        <div className={"w-full mt-5"}>
                            <p>ایا از حذف مدل درآمدی مطمعن هستید؟</p>
                            <div className={"flex flex-row gap-5 items-center w-full justify-end"}>
                                <Buttons onClick={manageRevenueModelsDeleteLayout} light={true}>انصراف</Buttons>
                                <Buttons onClick={manageDeleteRevenueModel} light={true} color={"danger"}>تایید</Buttons>
                            </div>
                        </div>
                        : ""
                }
            </div>
        )
    }

}

export default RevenueModelsAction;