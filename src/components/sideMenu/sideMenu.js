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
       </div>
    )
}

export default SideMenu;