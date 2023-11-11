import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup, getAllCoding} from "../api/codingKind";
import {getAllAccountMain} from "../api/accountMainApi";

const useAllCodingAccount = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        refetchIntervalInBackground:true,
        queryFn:getAllCoding,
    })
}

const useAllAccountGroup = (queryKey , codingId) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllAccountGroup(codingId),
    })
}

const useAllAccountMain = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllAccountMain,
    })
}









export {
    useAllCodingAccount,
    useAllAccountGroup,
    useAllAccountMain,
}