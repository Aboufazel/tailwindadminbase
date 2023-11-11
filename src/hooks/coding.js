import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup, getAllCoding} from "../api/codingKind";

const useAllCodingAccount = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        refetchIntervalInBackground:true,
        queryFn:getAllCoding,
    })
}

const useAllAccountGroup = (queryKey) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllAccountGroup,
    })
}










export {
    useAllCodingAccount,
    useAllAccountGroup,
}