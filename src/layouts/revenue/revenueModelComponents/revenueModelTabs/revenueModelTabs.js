import AddRevenue from "./addRevenue";
import AllRevenueModels from "../../revenueLayout/allRevenueModels";

const RevenueModelTabs = ({role}) => {

    const revenueTabsView = {
        'add-revenues':<AddRevenue/>,
        'revenue-models':<AllRevenueModels/>,
        'revenue-plans':"plans",
        'revenue-prices':"prices",
        'revenue-permission':"permission"
    }

    return(
        <div className={"w-full mt-[34px] px-[20px]"}>
            {revenueTabsView[role]}
        </div>
    )
}

export default RevenueModelTabs;