import {Spinner} from "@material-tailwind/react";
import React from "react";

const LoadingText = ({text}) => {

    return(
                <p className={"flex flex-row items-center justify-center gap-3"}>
                    <Spinner/>
                    {text}
                </p>
    )
}

export default LoadingText;