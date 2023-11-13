import CodingAccountGroup from "../reviewTabsBody/codingAccountGroup";
import CodingAccountMain from "../reviewTabsBody/codingAccountMain";
import CodingAccountSpec from "../reviewTabsBody/codingAccountSpec";
import useReviewTabStore from "../../zustand/reviewTabStore";

const ReviewTabs = () => {

    const stepView = useReviewTabStore(state => state.reviewStep)

    const manageStepShow = {
        'coding-account-group':<CodingAccountGroup/>,
        'coding-account-main':<CodingAccountMain/>,
        'coding-account-spec':<CodingAccountSpec/>,
    }

    return(
        manageStepShow[stepView]
    )
}

export default ReviewTabs