import userIcon from "../../assets/img/adminUser/adminUserIcon.png"
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import {Edit, Logout, User} from "react-iconly";
import useStorage from "../../hooks/useStorage";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Storage from "../../services/storage";
import userStore from "../../zustand/userStore";
import {routes} from "../../data/routes";
const AdminHeaderUserInfo = ({userData}) => {
    const userName = userStore(state=>state.userName)
    const navigate = useNavigate();
    const storage = Storage()
    const [, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
    })
    const roleTitle ={
        4:"مدیر"
    }
    const manageLogOut = ()=>{
        setAuthInfo({
            userId: "",
            accessToken: "",
        })
        navigate(routes.login)
        toast.error("از حساب خود خارج شدید!")
    }
    const MenuRenderFunction = () =>{
        return(
            <Menu>
                <MenuHandler>
                    <img src={userIcon} alt={"admin user icon"} className={"cursor-pointer w-[45px]"}/>
                </MenuHandler>
                <MenuList>
                    <MenuItem className="flex hover:!bg-primary-main hover:!text-white items-center gap-2">
                        <User set={"bulk"}/>
                        <Typography variant="small" className="font-medium">
                            {"پروفایل"}
                        </Typography>
                    </MenuItem>
                    <MenuItem className="flex hover:!bg-warning-600 hover:!text-white  items-center gap-2">
                        <Edit set={"bulk"}/>
                        <Typography variant="small" className="font-normal">
                            {"ویرایش پروفایل"}
                        </Typography>
                    </MenuItem>
                    <hr className="my-2 border-blue-gray-50" />
                    <MenuItem onClick={manageLogOut} className="flex hover:!bg-red-500 hover:!text-white items-center gap-2 ">
                        <Logout set={"bulk"}/>
                        <Typography variant="small" className="font-normal">
                            {"خروج از حساب"}
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }


    return(
        <div className={"flex flex-row max-w-max ml-3 gap-[16px] items-center"}>
            <MenuRenderFunction/>
            <p className={"text-text-color-1 text-[14px]"}>
                {userName}
                <span className={"block text-text-color-2 mt-1"}>
                    {roleTitle[storage.role]}
                </span>
            </p>
        </div>
    )
}

export default AdminHeaderUserInfo;