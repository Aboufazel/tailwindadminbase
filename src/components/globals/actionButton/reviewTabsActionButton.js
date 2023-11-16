import useReviewTabStore from "../../../zustand/reviewTabStore";

const ReviewTabsActionButton = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    return(
        <div onClick={manageActionLayout} className={"cursor-pointer text-primary-main"}>
            انجام عملیات
        </div>
    )
}

export default ReviewTabsActionButton;