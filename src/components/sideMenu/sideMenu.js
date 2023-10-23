import {adminSideMenuData} from "../../data/adminSideMenuData";
import AdminLogo from "../globals/adminLogo/adminLogo";
import SideMenuCard from "./sideMenuCard";

const SideMenu = ({manageOpenAndClose}) => {

    console.log(Object.keys(adminSideMenuData).length)

    return(
       <div className={"w-full pt-[32px] px-[12px]"}>
           <AdminLogo manageOpenAndClose={manageOpenAndClose}/>
           {
               Object.keys(adminSideMenuData).map((items , index) => (
                   <div key={"side-menu-label"+index}
                        className={`flex flex-col transition-all duration-300 
                        ${manageOpenAndClose ? `${(Object.keys(adminSideMenuData).length-1) === index ? "border-none" : "border-b border-text-color-3/30"}` : 
                            " mb-[20px]"}`}>
                       {
                           manageOpenAndClose ? "" :
                               <p className={"font-medium text-text-color-3 px-[20px] mb-[16px]"}>
                                   {items}
                               </p>
                       }
                       {
                           adminSideMenuData[items].map((menuData , index) => (
                               <SideMenuCard key={menuData.title + index} manageOpenAndClose={manageOpenAndClose} index={index} data={menuData}/>
                           ))
                       }
                   </div>
               ))
           }
           {manageOpenAndClose ? "" :
               <p className={"absolute left-[48px] transition-all duration-1000 bottom-2 text-center text-text-color-2/40 text-[12px]"}>
                   {" Develop With Aboufazel 2023 "}
                   <span className={"mt-2 block"}>
                       {"V 0.4.0"}
                   </span>
               </p>
           }
       </div>
    )
}

export default SideMenu;