import AddRevenue from "./addRevenue";
import AllRevenueModels from "../../revenueLayout/allRevenueModels";
import AllRevenuePlans from "../../revenueLayout/allRevenuePlans";
import AllRevenuePlansPrice from "../../revenueLayout/allRevenuePlansPrice";

const RevenueModelTabs = ({role}) => {

    const revenueTabsView = {
        'add-revenues':<AddRevenue/>,
        'revenue-models':<AllRevenueModels/>,
        'revenue-plans':<AllRevenuePlans/>,
        'revenue-prices':<AllRevenuePlansPrice/>,
        'revenue-permission':"permission"
    }

    return(
        <div className={"w-full mt-[34px] px-[20px]"}>
            {revenueTabsView[role]}
        </div>
    )
}

export default RevenueModelTabs;