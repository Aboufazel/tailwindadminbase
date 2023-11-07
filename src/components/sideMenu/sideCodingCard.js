import {useLocation, useNavigate} from "react-router-dom";
import {Tooltip} from "@material-tailwind/react";
import {Folder} from "react-iconly";

const SideCodingCard = ({data , index , manageOpenAndClose}) => {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <Tooltip content={data.accountCodingKindName}  className={manageOpenAndClose ? "bg-primary-main text-white" : "hidden"} placement="left">
            <div onClick={()=>navigate('/define')} key={data.accountCodingKindName + index}
                 className={`flex flex-row items-center
             ${manageOpenAndClose ? "justify-center" : " justify-between"}
             transition-all
             duration-150 
             cursor-pointer rounded-4px text-text-color-2
             hover:shadow shadow-primary25
             rounded-[4px]
             ${location.pathname === data.link ? "bg-primary-main text-white" : ""}
             px-[20px] py-[10px] hover:text-white hover:bg-primary-main w-full`}>
                <div className={"flex flex-row items-center gap-[16px] "}>
                    <Folder set={"bulk"}/>
                    {manageOpenAndClose ? "" : <p>{data.accountCodingKindName}</p>}
                </div>
            </div>
        </Tooltip>
    )
}

export default SideCodingCard;