import {useQuery} from "@tanstack/react-query";
import {getAllCoding} from "../api/codingKind";

const useAllCodingAccount = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        refetchIntervalInBackground:true,
        queryFn:getAllCoding,
    })
}










export {
    useAllCodingAccount,
}