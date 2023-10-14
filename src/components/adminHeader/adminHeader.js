import React from "react";
import AdminHeaderUserInfo from "./adminHeaderUserInfo";
import {Message, Notification, Search} from "react-iconly";

const AdminHeader = () => {

    return(
        <div className={"flex flex-row items-center bg-white w-full pr-[32px] py-[16px]"}>
                <form className={"flex flex-row items-center gap-[8px] text-text-color-3 pr-[16px] py-[4px] border border-bg-2 rounded-[4px] w-1/5"}>
                <Search/>
                <input className={"w-full focus:outline-0"} placeholder={"جستجو ..."}/>
            </form>
            <div className={"flex items-center gap-[16px] text-text-color-2 justify-end w-4/5"}>
                <Notification size={30} set={"bulk"}/>
                <Message size={30} set={"bulk"}/>
                <AdminHeaderUserInfo/>
            </div>
        </div>
    )
}

export default AdminHeader;