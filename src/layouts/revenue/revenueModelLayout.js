import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import {RevenueModelBreadCrumbsData, revenueModelTableHeaderData} from "../../data/revenuLayoutData";
import Tables from "../../components/globals/tables/tables";

const RevenueModelLayout = () => {

    return(
        <>
            <BreadCrumbs data={RevenueModelBreadCrumbsData}/>
            <Tables data={[]} bodyId={"business"} headers={revenueModelTableHeaderData} step={'revenueModel'} />
        </>
    )
}

export default RevenueModelLayout;