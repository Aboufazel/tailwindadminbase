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
const AdminHeaderUserInfo = ({userData}) => {
    const [, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
    })
    const navigate = useNavigate();
    const manageLogOut = ()=>{
        setAuthInfo({
            userId: "",
            accessToken: "",
        })
        navigate('/')
        toast.info("از حساب خود خارج شدید!")
    }
    const MenuRenderFunction = () =>{
        return(
            <Menu>
                <MenuHandler>
                    <img src={userIcon} alt={"admin user icon"} className={"w-[45px]"}/>
                </MenuHandler>
                <MenuList>
                    <MenuItem className="flex items-center gap-2">
                        <User set={"bulk"}/>
                        <Typography variant="small" className="font-medium">
                            {"پروفایل"}
                        </Typography>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-2">
                        <Edit set={"bulk"}/>
                        <Typography variant="small" className="font-normal">
                            {"ویرایش پروفایل"}
                        </Typography>
                    </MenuItem>
                    <hr className="my-2 border-blue-gray-50" />
                    <MenuItem onClick={manageLogOut} className="flex items-center gap-2 ">
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
        <div className={"flex flex-row w-1/3 gap-[16px] items-center"}>
            <MenuRenderFunction/>
            <p className={"text-text-color-1 text-[14px]"}>
                {"ابوفاضل عباسی خوشمکانی"}
                <span className={"block text-text-color-2 mt-1"}>
                    {"برنامه نویس"}
                </span>
            </p>
        </div>
    )
}

export default AdminHeaderUserInfo;