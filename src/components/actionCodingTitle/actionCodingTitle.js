import React from "react";
import useStore from "../../zustand/store";

const ActionCodingTitle = ({title}) => {
    const codingTitle = useStore(state=>state.codingTitle);

    return(
        <div className={"flex flex-row  w-full items-center gap-[8px]"}>
            <h2 className={"flex flex-row items-center text-text-color-1 text-[18px]"}>
                {title}
                <span className={"text-primary-main font-bold mr-3"}>
                       {codingTitle}
                   </span>
            </h2>
        </div>
    )
}

export default ActionCodingTitle;