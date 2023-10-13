import {adminSideMenuData} from "../../data/adminSideMenuData";
import AdminLogo from "../globals/adminLogo/adminLogo";
import SideMenuCard from "./sideMenuCard";

const SideMenu = ({manageOpenAndClose}) => {

    return(
       <div className={"w-full pt-[32px] px-[12px]"}>
           <AdminLogo manageOpenAndClose={manageOpenAndClose}/>
           {
               adminSideMenuData.map((items , index)=>(
                   <SideMenuCard manageOpenAndClose={manageOpenAndClose} index={index} data={items}/>
               ))
           }
           {manageOpenAndClose ? "" : <p className={"absolute left-[48px] transition-all duration-1000 bottom-5 text-center text-text-color-2 text-[12px]"}>{" Develop With Aboufazel 2023 "}</p>}
       </div>
    )
}

export default SideMenu;