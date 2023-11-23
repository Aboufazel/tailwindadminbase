import MainImg from "../../assets/img/GraphicSide (1).png";
import ServicesBrifCard from "./servicesBrifCard";
import {useAllBusiness} from "../../hooks/businessServicesActions";
import LoadingComponents from "../loading/loadingComponents";
import {toast} from "react-toastify";

const ServicesBriflyBlock = () => {
    const {isLoading, isError, data} = useAllBusiness("business")

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
                <ServicesBrifCard data={data.data.businesses} title={"کسب و کارها"}/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
            </div>
        </div>
    )
}

export default ServicesBriflyBlock;