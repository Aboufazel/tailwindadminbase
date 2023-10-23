import {Danger} from "react-iconly";

const MobileAccess = () => {

    return(
        <div className={"flex flex-col h-[90vh] w-full items-center justify-center"}>
            <Danger set={"bulk"} size={"xlarge"} style={{marginBottom:"20px" ,color:"red"}}/>
            برای دسترسی به پنل مدیریت از pc استفاده کنید!
        </div>
    )
}

export default MobileAccess