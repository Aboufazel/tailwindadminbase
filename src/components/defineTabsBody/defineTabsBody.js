import AddTabs from "../tabsBodyLayout/addTabs";
import ReviewTabs from "../tabsBodyLayout/reviewTabs";
import AccountTabs from "../tabsBodyLayout/accountTabs";
import DefaultTabs from "../tabsBodyLayout/defaultTabs";
import AccountingTabs from "../tabsBodyLayout/accountingTabs";
import RevenueModelsTab from "../tabsBodyLayout/revenueModelsTab";

const tabsView = {
    'add-account':<AddTabs/>,
    'review-account':<ReviewTabs/>,
    'account-type':<AccountTabs/>,
    'default-person':<DefaultTabs/>,
    'revenue-models':<RevenueModelsTab/>,
    'accounting-setting':<AccountingTabs/>,
}



const DefineTabsBody = ({role}) => {
    return(
        <div className={"w-full mt-[34px] px-[20px]"}>
            {tabsView[role]}
        </div>
    )
}

export default DefineTabsBody;