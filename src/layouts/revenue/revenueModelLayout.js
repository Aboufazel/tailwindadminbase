import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import {RevenueModelBreadCrumbsData, revenueModelTableHeaderData} from "../../data/revenuLayoutData";
import Tables from "../../components/globals/tables/tables";
import {useGetFunction} from "../../hooks/coding";
import {getAllRevenueModel} from "../../api/revenueModelApi";
import Buttons from "../../components/globals/Buttons";
import LoadingComponents from "../../components/loading/loadingComponents";
import {toast} from "react-toastify";
import useRevenueModelStore from "../../zustand/revenueModelStore";
import BackBtn from "../../components/reviewTabsActionLayout/actionComponents/backBtn";
import AddModels from "./revenueLayout/addModels";
import useStore from "../../zustand/store";

const RevenueModelLayout = () => {
    const addRevenueLayout = useRevenueModelStore(state => state.addRevenueModelLayout)
    const codingId = useStore(state => state.codingKindId)
    const manageAddRevenueModelLayout = useRevenueModelStore(state => state.manageAddRevenueLayout)
    const {data, isLoading, isError} = useGetFunction('getAllRevenueModel', codingId, getAllRevenueModel)

    if (isLoading) {
        return (<LoadingComponents title={"درحال دریافت مدل درامدی"}/>)
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
                        <BackBtn onClick={manageAddRevenueModelLayout}/>
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

export default RevenueModelLayout;