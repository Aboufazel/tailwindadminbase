import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import DefineTabs from "../../components/defineTabs/defineTabs";
import {DefineTabsData} from "../../data/defineTabsData";

const DefineLayout = () => {
    const breadCrumbsData = [
        {id:"business" , title:"داشبورد" , link:"/main"},
        {id:"business" , title:"کدینگ حسابداری جدید" , link:"#"},
    ]
    return(
        <>
            <BreadCrumbs data={breadCrumbsData}/>

            <DefineTabs tabsData={DefineTabsData}/>
        </>
    )
}

export default DefineLayout;