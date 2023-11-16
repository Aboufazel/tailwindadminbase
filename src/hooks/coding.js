import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup, getAllCoding} from "../api/codingKind";
import {getAllAccountMain} from "../api/accountMainApi";
import {getAllAccountSpec, getAllAccountSpecByMainId} from "../api/accountSpecApi";
import {
    getAccountTypeById,
    getAccountTypeCodingKind,
    getAllAccountTypeSpecByAccountTypeId
} from "../api/accountTypeApi";
import {getAccountGroupById} from "../api/accountGroupApi";
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

const useAllAccountMain = (queryKey , groupId )=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAllAccountMain(`${groupId}`),
    })
}


const useAllAccountSpecByMain = (queryKey , mainId)=>{
    return useQuery({
       queryKey:[queryKey],
       queryFn:()=>getAllAccountSpecByMainId(`${mainId}`)
    })
}



const useAllAccountTypesByCoding = (queryKey , codingId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountTypeCodingKind(codingId)
    })
}


const useAllAccountSpecByTypeId = (queryKey , typeId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAllAccountTypeSpecByAccountTypeId(typeId)
    })
}


const useAllAccountSpec = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllAccountSpec,
    })
}

const useGetAccountTypeById = (queryKey , typeId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountTypeById(typeId)
    })
}

const useGetAccountGroupById = (queryKey , accountGroupId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountGroupById(`${accountGroupId}`),
    })
}



export {
    useAllCodingAccount,
    useAllAccountGroup,
    useAllAccountMain,
    useAllAccountSpecByMain,
    useAllAccountTypesByCoding,
    useAllAccountSpecByTypeId,
    useGetAccountTypeById,
    useAllAccountSpec,
    useGetAccountGroupById,
}