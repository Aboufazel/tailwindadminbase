import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import {RevenueModelBreadCrumbsData} from "../../data/revenuLayoutData";
import {revenueTabsData} from "../../data/defineTabsData";
import DefineTabs from "../../components/defineTabs/defineTabs";
import useStore from "../../zustand/store";
import RevenueModelTabs from "./revenueModelComponents/revenueModelTabs/revenueModelTabs";

const RevenueModelLayout = () => {
    const defineTabs = useStore(state => state.defineTabs)

    return (
        <>
            <BreadCrumbs data={RevenueModelBreadCrumbsData}/>
            <DefineTabs tabsData={revenueTabsData}/>
            <RevenueModelTabs role={defineTabs}/>
        </>
    )
}

export default RevenueModelLayout;