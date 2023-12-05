import useRevenueModelStore from "../../zustand/revenueModelStore";
import useStore from "../../zustand/store";
import {useGetRevenueModels} from "../../hooks/coding";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import {RevenueModelBreadCrumbsData, revenueModelTableHeaderData} from "../../data/revenuLayoutData";
import BackBtn from "../reviewTabsActionLayout/actionComponents/backBtn";
import AddModels from "../../layouts/revenue/revenueLayout/addModels";
import Buttons from "../globals/Buttons";
import Tables from "../globals/tables/tables";

const RevenueModelsTab = () => {
    const addRevenueLayout = useRevenueModelStore(state => state.addRevenueModelLayout)
    const codingId = useStore(state => state.codingKindId)
    const manageAddRevenueModelLayout = useRevenueModelStore(state => state.manageAddRevenueLayout)
    const {data, isLoading,refetch ,isRefetching,isError} = useGetRevenueModels('getAllRevenueModel', codingId)

    if (isLoading) {
        return (<LoadingComponents title={"درحال دریافت مدل درامدی"}/>)
    }

    if (isRefetching){
        return (<LoadingComponents title={"درحال بروزرسانی مدل درامدی"}/>)
    }

    if (isError) {
        return (
            toast.error("دریافت مدل درامدی با مشکل مواجه شد!")
        )
    }

    return (
        <>
            <BreadCrumbs data={RevenueModelBreadCrumbsData}/>
            {
                addRevenueLayout ?
                    <div className={"w-full relative"}>
                        <BackBtn onClick={()=>{
                            refetch()
                            manageAddRevenueModelLayout()
                        }}/>
                        <AddModels/>
                    </div> :
                    <>
                        <div className={"flex items-center justify-end w-full"}>
                            <Buttons onClick={manageAddRevenueModelLayout}>افزودن مدل درآمدی</Buttons>
                        </div>
                        <Tables data={data.data.revenueModels} bodyId={"business"} headers={revenueModelTableHeaderData}
                                step={'revenueModel'}/>
                    </>
            }
        </>
    )
}

export default RevenueModelsTab;