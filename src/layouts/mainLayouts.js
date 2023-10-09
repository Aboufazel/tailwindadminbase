import {Outlet} from "react-router-dom";
import AdminHeader from "../components/adminHeader/adminHeader";
import MainImg from "../assets/img/GraphicSide (1).png"
const MainLayouts = () => {

    return(
        <div className={"flex flex-row w-full h-[100vh] bg-red-500"}>
            <div className={"w-2/12 bg-white"}>side menu</div>
            <div className={"w-10/12 overflow-y-scroll bg-light-600"}>
                <div className={"sticky top-0 w-full"}>
                    <AdminHeader/>
                </div>
                <img src={MainImg} alt={"dash main elements"}/>
                <Outlet/>
            </div>
        </div>
    )
}


export default MainLayouts;