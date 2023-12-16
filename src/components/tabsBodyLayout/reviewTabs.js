import CodingAccountGroup from "../reviewTabsBody/codingAccountGroup";
import CodingAccountGeneral from "../reviewTabsBody/codingAccountGeneral";
import CodingAccountSubsidiary from "../reviewTabsBody/codingAccountSubsidiary";
import useReviewTabStore from "../../zustand/reviewTabStore";
import BreadCrumbs from "../breadCrumbs/breadCrumbs";

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
        'coding-account-main':<CodingAccountGeneral/>,
        'coding-account-spec':<CodingAccountSubsidiary/>,
    }

    return(
        <>
            {groupName?.length === 0 ? "" :
                <BreadCrumbs type={'button'} data={reviewTabsBreadCrumbsData}/>
            }
            {manageStepShow[stepView]}
        </>
    )
}

export default ReviewTabs