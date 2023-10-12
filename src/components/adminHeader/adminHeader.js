import AdminHeaderUserInfo from "./adminHeaderUserInfo";
import {Message, Notification} from "react-iconly";

const AdminHeader = () => {

    return(
        <div className={"flex flex-row items-center bg-white w-full px-[32px] py-[16px]"}>
            <div className={"w-1/3"}>search</div>
            <div className={"flex items-center gap-[16px] text-text-color-2 justify-end w-2/3"}>
                <Notification size={30} set={"bulk"}/>
                <Message size={30} set={"bulk"}/>
                <AdminHeaderUserInfo/>
            </div>
        </div>
    )
}

export default AdminHeader;