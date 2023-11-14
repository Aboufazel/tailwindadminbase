import CodingAccountGroup from "../reviewTabsBody/codingAccountGroup";
import CodingAccountMain from "../reviewTabsBody/codingAccountMain";
import CodingAccountSpec from "../reviewTabsBody/codingAccountSpec";
import useReviewTabStore from "../../zustand/reviewTabStore";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";
import {useEffect} from "react";

const ReviewTabs = () => {



    const stepView = useReviewTabStore(state => state.reviewStep)
    const groupName = useReviewTabStore(state => state.accountGroupName)
    const mainName = useReviewTabStore(state => state.accountMainName)
    const specName = useReviewTabStore(state => state.accountSpecName)
    const reviewTabsBreadCrumbsData = [
        {id: "account-group", title:groupName , link: "coding-account-group"},
        {id: "account-main", title:mainName , link: "coding-account-main"},
        {id: "account-spec", title:specName , link: "#"},
    ]



    const manageStepShow = {
        'coding-account-group':<CodingAccountGroup/>,
        'coding-account-main':<CodingAccountMain/>,
        'coding-account-spec':<CodingAccountSpec/>,
    }

    return(
        <>
            {groupName.length === 0 ? "" :
                <BreadCrumbs type={'button'} data={reviewTabsBreadCrumbsData}/>
            }
            {manageStepShow[stepView]}
        </>
    )
}

export default ReviewTabs