import MainImg from "../../assets/img/GraphicSide (1).png";
import ServicesBrifCard from "./servicesBrifCard";

const ServicesBriflyBlock = () => {

    return(
        <div className={"w-full relative"}>
            <img src={MainImg} alt={"dash main elements"}/>

            <div className={"flex flex-row overflow-hidden justify-center items-center -bottom-14 w-full px-[24px] gap-[40px] absolute"}>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
                <ServicesBrifCard/>
            </div>
        </div>
    )
}

export default ServicesBriflyBlock;