import {TwoUsers} from "react-iconly";

const ServicesBrifCard = () => {

    return(
        <div className={"flex flex-row gap-[8px] shadow shadow-card1 items-center p-[24px] w-2/12 bg-white rounded-[8px]"}>
          <div className={"p-3 text-text-color-3 w-[50px] h-[50px] border-2 border-primary-main rounded-full"}>
              <TwoUsers/>
          </div>
            <p className={"text-[14px] text-text-color-3"}>
                {" مجموع کاربران "}
                <span className={"text-text-color-1 text-[16px] mt-[8px] block"}>
                  {" 154 K "}
                </span>
            </p>
        </div>
    )
}

export default ServicesBrifCard;