import {ShieldFail} from "react-iconly";

const AccessDenide = () => {
    return(
        <div className={"flex flex-col h-[90vh] w-full items-center justify-center"}>
            <ShieldFail set={"bulk"} size={"xlarge"} style={{marginBottom:"20px" ,color:"red"}}/>
            متاسفانه شما دسترسی مدیریت ندارید!
        </div>
    )
}

export default AccessDenide;