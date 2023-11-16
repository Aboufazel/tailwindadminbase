import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";

const AccountSpecAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)

    return(
        <div className={"relative w-full"}>
            <BackBtn onClick={manageActionLayout}/>
            <div className={"flex flex-col pt-8"}>action spec</div>
        </div>
    )
}

export default AccountSpecAction;