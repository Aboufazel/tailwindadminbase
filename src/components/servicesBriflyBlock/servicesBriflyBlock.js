import MainImg from "../../assets/img/GraphicSide (1).png";
import ServicesBrifCard from "./servicesBrifCard";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";
import {Folder, TwoUsers, Work} from "react-iconly";
import {useAllCodingAccount} from "../../hooks/coding";

const ServicesBriflyBlock = () => {
    const {isLoading, isError, data} = useAllBusiness("business")
    const {data:codingdata } = useAllCodingAccount("getAllSideCoding")
    if (isLoading){
        return (<LoadingComponents title={"دریافت اصلاعات"}/> )
    }

    if (isError){
        return (toast.error('دریافت اطلاعات با مشکل مواجه شد!'))
    }

    return(
        <div className={"w-full relative mb-[80px]"}>
            <img src={MainImg} alt={"dash main elements"}/>

            <div className={"flex flex-row overflow-hidden justify-center items-center -bottom-14 w-full px-[24px] gap-[40px] absolute"}>
                <ServicesBrifCard data={data?.data.businesses} icon={<Work set={"bulk"}/>} title={"کسب و کارها"}/>
                <ServicesBrifCard data={codingdata?.data.accountCodingKinds} icon={<Folder set={"bulk"}/>} title={"کدینگ ها"}/>
                <ServicesBrifCard icon={<TwoUsers set={"bulk"}/>}/>
                <ServicesBrifCard icon={<TwoUsers set={"bulk"}/>}/>
                <ServicesBrifCard icon={<TwoUsers set={"bulk"}/>}/>
            </div>
        </div>
    )
}

export default ServicesBriflyBlock;