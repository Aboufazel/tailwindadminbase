import {useGetFunction} from "../../../hooks/coding";
import {getAllRevenueModelNoId, getRevenuePlansByModelId} from "../../../api/revenueModelApi";
import LoadingComponents from "../../../components/loading/loadingComponents";
import {toast} from "react-toastify";
import React, {useEffect} from "react";
import useRevenueModelStore from "../../../zustand/revenueModelStore";
import {revenuePlansTableHeaderData} from "../../../data/revenuLayoutData";
import Tables from "../../../components/globals/tables/tables";
import BackBtn from "../../../components/reviewTabsActionLayout/actionComponents/backBtn";
import RevenuePlansAction from "./revenuePlansAction";

const AllRevenuePlans = () => {
    const {data , isLoading , isError} = useGetFunction('getAllRevenueModelsNoId' , "" , getAllRevenueModelNoId)
    const revenueModelId = useRevenueModelStore(state => state.revenueModelId)
    const updateRevenueModelsId = useRevenueModelStore(state => state.updateRevenueModelId)
    const {data:plansData , isError:plansError,isLoading:plansLoading ,isRefetching , refetch} = useGetFunction('getRevenuePlansWithId' , revenueModelId , getRevenuePlansByModelId)
    const revenuePlansActionLayout = useRevenueModelStore(state => state.revenuePlansActionLayout)
    const manageRevenuePlansActionLayout = useRevenueModelStore(state => state.manageRevenuePlansActionLayout)

    useEffect(() => {
        refetch()
    }, [revenuePlansActionLayout]);

    if(isLoading){
        return (<LoadingComponents title={"در حال دریافت مدل درآمدی"}/> )
    }

    if(isError){
        return (toast.error("دریافت اطلاعات با مشکل مواجه شد!"))
    }

    if (revenuePlansActionLayout){
        return (
            <div className={"w-full relative"}>
              <BackBtn onClick={manageRevenuePlansActionLayout}/>
              <RevenuePlansAction/>
            </div>
        )
    }

    if(!revenuePlansActionLayout){
        return(
            <React.Fragment>
                <div className={"grid grid-cols-12 overflow-x-auto gap-5 mt-6 w-full"}>
                    {
                        data.data.revenueModels.map((items, index) => (
                            <div key={items.revenueModelName}
                                 onClick={()=> {
                                     refetch()
                                     updateRevenueModelsId(items.revenueModelId)
                                 }}
                                 className={`col-span-3 cursor-pointer 
                             ${revenueModelId === items.revenueModelId ? 'bg-primary-light/50 border-primary-main' : 'bg-primary-extraLight  border-text-color-3'} 
                             w-full px-1 py-2 rounded-[8px] text-center border`}>
                                {items.revenueModelName}
                            </div>
                        ))
                    }
                </div>
                <div className={"flex flex-col mt-3 w-full"}>
                    {
                        (plansLoading || isRefetching) ? <LoadingComponents title={"در حال دریافت پلن های درامدی"}/>
                            : plansError ? <p className={"text-danger-600"}>مدل درآمدی انتخاب نشده است</p> :
                                <Tables data={plansData.data.revenuePlans} bodyId={"coding"} headers={revenuePlansTableHeaderData}
                                        step={'revenuePlans'}/>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default AllRevenuePlans;