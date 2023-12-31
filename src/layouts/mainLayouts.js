import {Outlet, useLocation} from "react-router-dom";
import AdminHeader from "../components/adminHeader/adminHeader";
import SideMenu from "../components/sideMenu/sideMenu";
import {ArrowRight} from "react-iconly";
import useStore from "../zustand/store";
import ServicesBriflyBlock from "../components/servicesBriflyBlock/servicesBriflyBlock";
import {routes} from "../data/routes";

const MainLayouts = () => {
    const sideStatus = useStore(state => state.sideMenuStatus)
    const manageSideMenu = useStore(state => state.manageOpenAndCloseSide)
    const location = useLocation()

    return (
        <div className={"flex flex-row w-full h-[100vh]"}>
            <div className={`relative ${sideStatus ? "w-1/12" : "w-2/12"} transition-all duration-300 dark:bg-dark-900  bg-white`}>
                <div
                    onClick={manageSideMenu}
                    className={`flex items-center absolute shadow shadow-primary25 cursor-pointer ${sideStatus ? "rotate-180" : ""} transition-all duration-300 top-[22px] -left-[12px] z-50 justify-center w-[30px] h-[30px] bg-primary-main font-bold text-white rounded-full`}>
                    <ArrowRight set={"light"} size={18}/>
                </div>
                <SideMenu manageOpenAndClose={sideStatus}/>
            </div>
            <div
                className={`${sideStatus ? "w-11/12" : "w-10/12"} transition-all duration-300 overflow-y-scroll dark:bg-dark-800 bg-light-600`}>
                <div className={"sticky top-0 w-full"}>
                    <AdminHeader/>
                </div>
                {
                    location.pathname === routes.main && <ServicesBriflyBlock/>
                }
                <div className={"w-full p-[20px]"}>
                    <div className={"w-full  h-full shadow-cards p-[24px] rounded-[8px] dark:bg-dark-900 bg-white"}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainLayouts;