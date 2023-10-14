import {Outlet} from "react-router-dom";
import AdminHeader from "../components/adminHeader/adminHeader";
import SideMenu from "../components/sideMenu/sideMenu";
import {ArrowRight} from "react-iconly";
import {useState} from "react";
import ServicesBriflyBlock from "../components/servicesBriflyBlock/servicesBriflyBlock";
const MainLayouts = () => {
const [closeSide , setCloseSide] = useState(false)


    return(
        <div className={"flex flex-row w-full h-[100vh]"}>
            <div className={`relative ${closeSide ? "w-1/12" : "w-2/12"} transition-all duration-300  bg-white`}>
                <div
                    onClick={()=>setCloseSide(!closeSide)}
                    className={`flex items-center absolute shadow shadow-primary25 cursor-pointer ${closeSide ? "rotate-180" : ""} transition-all duration-300 top-[22px] -left-[12px] z-10 justify-center w-[30px] h-[30px] bg-primary-main font-bold text-white rounded-full`}>
                    <ArrowRight set={"light"} size={18}/>
                </div>
                <SideMenu manageOpenAndClose={closeSide}/>
            </div>
            <div className={`${closeSide ? "w-11/12" : "w-10/12"} transition-all duration-300 overflow-y-scroll bg-light-600`}>
                <div className={"sticky top-0 w-full"}>
                    <AdminHeader/>
                </div>
                <div className={"w-full"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}


export default MainLayouts;