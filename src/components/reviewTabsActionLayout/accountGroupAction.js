import {ArrowLeft} from "react-iconly";
import useReviewTabStore from "../../zustand/reviewTabStore";

const AccountGroupAction = () => {
    const manageActionLayout = useReviewTabStore(state => state.manageActionLayout)
    return(
        <div className={"relative w-full"}>
            <div
                onClick={manageActionLayout}
                className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
                <p>بازگشت</p>
                <ArrowLeft set={"bulk"}/>
            </div>
            <div className={"flex flex-col pt-8"}>action form</div>
        </div>
    )
}

export default AccountGroupAction;