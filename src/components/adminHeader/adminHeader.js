import React from "react";
import AdminHeaderUserInfo from "./adminHeaderUserInfo";
import {Message, Notification} from "react-iconly";
import ThemeSwitch from "../globals/themeSwitch";

const AdminHeader = () => {

    return(
        <div className={"flex flex-row items-center  dark:bg-dark-900  bg-white w-full pr-[32px] z-20 relative py-[16px]"}>
            <form
                className={"flex flex-row items-center gap-[8px] text-text-color-3 pr-[16px] py-[4px] rounded-[4px] w-1/5"}>
                {/*<Search/>*/}
                {/*<input className={"w-full focus:outline-0"} placeholder={"جستجو ..."}/>*/}
            </form>
            <div className={"flex items-center gap-[16px] text-text-color-2 justify-end w-4/5"}>
                <ThemeSwitch/>
                <Notification size={30} set={"bulk"}/>
                <Message size={30} set={"bulk"}/>
                <AdminHeaderUserInfo/>
            </div>
        </div>
    )
}

export default AdminHeader;