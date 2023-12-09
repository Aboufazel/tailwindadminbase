import {useGetFunction} from "../../../hooks/coding";
import {getAllRevenuePlans, getRevenuePlansPriceById} from "../../../api/revenueModelApi";
import LoadingComponents from "../../../components/loading/loadingComponents";
import Tables from "../../../components/globals/tables/tables";
import {revenuePlanPriceTableHeaderData} from "../../../data/revenuLayoutData";
import React, {useEffect} from "react";
import {toast} from "react-toastify";
import useRevenueModelStore from "../../../zustand/revenueModelStore";
import BackBtn from "../../../components/reviewTabsActionLayout/actionComponents/backBtn";
import RevenuePlanPriceActionLayout from "./revenuePlanPriceActionLayout";

const AllRevenuePlansPrice = () => {
    const revenuePlanId = useRevenueModelStore(state => state.revenuePlansId)
    const updateRevenuePlanId = useRevenueModelStore(state => state.updateRevenuePlansId)
    const {data , isLoading  , isError , } = useGetFunction('getAllRevenuePlansForPrices' , '' , getAllRevenuePlans)
    const {data:planPriceData , isLoading:planPriceLoading , refetch , isError:planPriceError, isRefetching} = useGetFunction('getPlanPriceByPlanId' , revenuePlanId , getRevenuePlansPriceById)
    const planPriceActionLayout = useRevenueModelStore(state => state.planPriceActionLayout)
    const managePlanPriceActionLayout = useRevenueModelStore(state => state.managePlanPriceActionLayout)

    useEffect(() => {
        refetch()
    }, [planPriceActionLayout]);

    if(isLoading){
        return (<LoadingComponents title={"در حال دریافت پلن درآمدی"}/> )
    }

    if(isError){
        return (toast.error("دریافت اطلاعات با مشکل مواجه شد!"))
    }

    if(planPriceActionLayout){
        return (
            <div className={"w-full relative"}>
                <BackBtn onClick={managePlanPriceActionLayout}/>
                <RevenuePlanPriceActionLayout/>
            </div>
        )
    }

    if(!planPriceActionLayout){
        return(
            <React.Fragment>
                <div className={"grid grid-cols-12 overflow-x-auto gap-5 mt-6 w-full"}>
                    {
                        data.data.revenuePlans.map((items, index) => (
                            <div
                                onClick={()=>{
                                    updateRevenuePlanId(items.revenuePlanId)
                                    refetch()
                                }}
                                key={items.revenuePlanName}
                                className={`col-span-3 cursor-pointer 
                             ${revenuePlanId === items.revenuePlanId ? 'bg-primary-light/50 border-primary-main' : 'bg-primary-extraLight  border-text-color-3'} 
                             w-full px-1 py-2 rounded-[8px] text-center border`}>
                                {items.revenuePlanName}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-col mt-3 w-full"}>
                    {
                        (planPriceLoading || isRefetching) ? <LoadingComponents title={"در حال دریافت قیمت ها "}/>
                            : planPriceError ? <p className={"text-danger-600"}>پلن درآمدی انتخاب نشده است</p> :
                                <Tables data={planPriceData.data.revenuePlanPrices} bodyId={"coding"} headers={revenuePlanPriceTableHeaderData}
                                        step={'revenuePlanPrice'}/>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default AllRevenuePlansPrice;