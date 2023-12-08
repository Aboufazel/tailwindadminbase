import {revenueModelTableHeaderData} from "../../../data/revenuLayoutData";
import Tables from "../../../components/globals/tables/tables";
import {useGetFunction} from "../../../hooks/coding";
import {getAllRevenueModelNoId} from "../../../api/revenueModelApi";
import LoadingComponents from "../../../components/loading/loadingComponents";
import {toast} from "react-toastify";
import useRevenueModelStore from "../../../zustand/revenueModelStore";
import RevenueModelsAction from "../../../components/reviewTabsActionLayout/revenueModelsAction";

const AllRevenueModels = () => {
    const actionLayout = useRevenueModelStore(state => state.revenueActionLayout)
    const {data , isLoading , isError} = useGetFunction('getAllRevenueModelsNoId' , "" , getAllRevenueModelNoId)

    if(isLoading){
        return (<LoadingComponents title={"دریافت مدل های درآمدی"}/> )
    }
    if (isError){
        return (toast.error("دریافت با مشکل موجه شد!"))
    }

    if(actionLayout){
        return (
           <RevenueModelsAction/>
        )
    }
    else if(!actionLayout){
        return(
            <Tables data={data.data.revenueModels} bodyId={"coding"} headers={revenueModelTableHeaderData}
                    step={'revenueModel'}/>
        )
    }
}

export default AllRevenueModels;