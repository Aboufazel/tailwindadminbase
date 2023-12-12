import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Tooltip} from "@material-tailwind/react";
import {Folder} from "react-iconly";
import useStore from "../../zustand/store";
import {routes} from "../../data/routes";

const SideCodingCard = ({data , index , manageOpenAndClose}) => {
    const navigate = useNavigate()
    const params = useParams()
    const updateCodingDefineTitle = useStore((state) => state.updateCodingTitle);
    const updateCodingKindId = useStore(state => state.updateCodingKindId)

    return(
        <Tooltip content={data.accountCodingName}  className={manageOpenAndClose ? "bg-primary-main text-white" : "hidden"} placement="left">
            <div onClick={()=> {
                updateCodingKindId(data.accountCodingId)
                updateCodingDefineTitle(data.accountCodingName)
                navigate(`${routes.defineNoId}/${data.accountCodingId}`)
            }} key={data.accountCodingName + index}
                 className={`flex flex-row items-center
             ${manageOpenAndClose ? "justify-center" : " justify-between"}
             transition-all
             duration-150 
             cursor-pointer rounded-4px text-text-color-2
             hover:shadow shadow-primary25
             rounded-[4px]
             ${Number(params.id) === data.accountCodingId ? "bg-primary-main text-white" : ""}
             px-[20px] py-[10px] hover:text-white hover:bg-primary-main w-full`}>
                <div className={"flex flex-row items-center gap-[16px] "}>
                    <Folder set={"bulk"}/>
                    {manageOpenAndClose ? "" : <p>{data.accountCodingName}</p>}
                </div>
            </div>
        </Tooltip>
    )
}

export default SideCodingCard;