import {useQuery} from "@tanstack/react-query";
import {getAllCoding} from "../api/codingKind";

const useAllCodingAccount = (key)=>{
    return useQuery({
        queryKey:[key],
        queryFn:getAllCoding,
    })
}










export {
    useAllCodingAccount,
}