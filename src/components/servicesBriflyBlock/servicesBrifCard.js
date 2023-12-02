const ServicesBrifCard = ({data=[] , title , icon}) => {


    return(
        <div className={"flex flex-row gap-[8px] shadow shadow-card1 items-center p-[24px] w-2/12 dark:bg-dark-900 bg-white rounded-[8px]"}>
          <div className={"flex flex-row items-center justify-center dark:text-text-color-3 p-3 text-primary-main/60 w-[50px] h-[50px] border-2 border-primary-main rounded-full"}>
              {icon}
          </div>
            <p className={"text-[14px] dark:text-white text-text-color-3"}>
                {title}
                <span className={"dark:text-text-color-3 text-text-color-1 text-[16px] mt-[8px] block"}>
                  {data.length}
                </span>
            </p>
        </div>
    )
}

export default ServicesBrifCard;