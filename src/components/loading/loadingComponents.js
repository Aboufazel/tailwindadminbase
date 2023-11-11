import {Spinner} from "@material-tailwind/react";

const LoadingComponents = ({title}) => {

    return(
        <div className={"flex flex-row items-center mt-3 w-full"}>
            <Spinner color={"blue"}/>
            <p className={"text-text-color-2 mr-2 font-medium"}>{title}</p>
        </div>
    )
}

export default LoadingComponents;