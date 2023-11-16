import {useAllAccountSpec} from "../../../hooks/coding";
import LoadingComponents from "../../loading/loadingComponents";
import {toast} from "react-toastify";
import AllSpecLinkCard from "./allSpecLinkCard";

const NewLinkSpecAccountTypeList = () => {

    const {data , isLoading , isRefetching , isError} = useAllAccountSpec('getAllAccountSpec')

    if(isLoading || isRefetching){
        return <LoadingComponents title={'در حال دریافت تمامی حساب های معین'}/>
    }

    if (isError){
        return toast.error('دریافت با مشکل مواجه شد!')
    }



    return(
        <div className={"w-full pt-[50px] h-[500px] overflow-y-auto"}>
            {
                data.data.accountSpecs.map((items , index)=>(
                    <AllSpecLinkCard key={'account-spec-link-data' + index} data={items}/>
                ))
            }
        </div>
    )
}

export default NewLinkSpecAccountTypeList