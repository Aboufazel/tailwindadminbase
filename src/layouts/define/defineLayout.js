import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import DefineTabs from "../../components/defineTabs/defineTabs";
import {DefineTabsData} from "../../data/defineTabsData";
import DefineTabsBody from "../../components/defineTabsBody/defineTabsBody";
import useStore from "../../zustand/store";

const DefineLayout = () => {

    const codingTitle = useStore(state=>state.codingTitle)
    const breadCrumbsData = [
        {id:"business" , title:codingTitle , link:"#"},
    ]
    const defineTabs = useStore(state => state.defineTabs)

    return(
        <>
            <BreadCrumbs data={breadCrumbsData}/>
            <DefineTabs tabsData={DefineTabsData}/>
            <DefineTabsBody role={defineTabs}/>
        </>
    )
}

export default DefineLayout;