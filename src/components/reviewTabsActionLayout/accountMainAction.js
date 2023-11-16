import BackBtn from "./actionComponents/backBtn";
import useReviewTabStore from "../../zustand/reviewTabStore";

const AccountMainAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)

    return(
        <div className={"relative w-full"}>
            <BackBtn onClick={manageActionLayout}/>
            <div className={"flex flex-col pt-8"}>action main</div>
        </div>
    )
}

export default AccountMainAction