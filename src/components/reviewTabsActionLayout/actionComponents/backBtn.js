import {ArrowLeft} from "react-iconly";
import React from "react";

const BackBtn = ({...props}) => {

    return(
        <div
            {...props}
            className={`flex flex-row items-center 
                        hover:bg-primary-main hover:text-white 
                        absolute left-0
                        justify-center rounded-[5px] 
                        cursor-pointer dark:bg-dark-800 dark:text-white dark:hover:bg-primary-veryDark bg-primary-extraLight  max-w-max px-[12px] gap-3 h-[35px]`}>
            <p>بازگشت</p>
            <ArrowLeft set={"bulk"}/>
        </div>
    )
}

export default BackBtn;