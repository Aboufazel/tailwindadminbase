import {Tooltip} from "@material-tailwind/react";

const SideMenuCard = ({data , index , manageOpenAndClose}) => {

    return(
        <Tooltip content={data.title}  className={manageOpenAndClose ? "bg-primary-main text-white" : "hidden"} placement="left">
            <div key={data.id + index}
                 className={`flex flex-row items-center
             ${manageOpenAndClose ? "justify-center" : ""}
             transition-all
             duration-150 
             cursor-pointer rounded-4px text-text-color-2
             hover:shadow shadow-primary25
             rounded-[4px]
             px-[20px] py-[10px] hover:text-white hover:bg-primary-main gap-[16px] w-full`}>
                {data.icon}
                {manageOpenAndClose ? "" : <p>{data.title}</p>}
            </div>
        </Tooltip>
    )
}

export default SideMenuCard;