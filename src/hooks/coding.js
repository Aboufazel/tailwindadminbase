import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup, getAllCoding, getCodingById} from "../api/codingKind";
import {getAccountMainById, getAllAccountMain} from "../api/accountMainApi";
import {getAccountSpecById, getAllAccountSpec, getAllAccountSpecByMainId} from "../api/accountSpecApi";
import {
    getAccountTypeById,
    getAccountTypeCodingKind,
    getAllAccountTypeSpecByAccountTypeId
} from "../api/accountTypeApi";
import {getAccountGroupById} from "../api/accountGroupApi";
import {getAccountPersonById, getAllAccountDefaultLinks, getAllAccountPerson} from "../api/accountDefaultPersonApi";
import {getAllRevenueModel} from "../api/revenueModelApi";
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


const useGetAccountMainById = (queryKey , accountMainId) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountMainById(accountMainId)
    })
}


const useGetAccountSpecById = (queryKey , accountSpecId) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountSpecById(accountSpecId)
    })
}

const useGetCodingById = (queryKey , codingId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getCodingById(codingId)
    })
}
const useGetAllAccountPersonLinks = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAllAccountDefaultLinks()
    })
}

const useGetAllAccountPerson = (queryKey , codingId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAllAccountPerson(codingId)
    })
}

const useGetPersonById = (queryKey , personId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountPersonById(personId)
    })
}

const useGetRevenueModels = (queryKey , codingId)=>{
    return useQuery({
        queryKey:[queryKey],
        refetchIntervalInBackground:true,
        queryFn:()=>getAllRevenueModel(codingId)
    })
}
const useGetFunction = (queryKey , fnId , getFunction)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getFunction(fnId)
    })
}


export {
    useGetFunction,
    useAllCodingAccount,
    useAllAccountGroup,
    useAllAccountMain,
    useAllAccountSpecByMain,
    useAllAccountTypesByCoding,
    useAllAccountSpecByTypeId,
    useGetAccountTypeById,
    useAllAccountSpec,
    useGetAccountGroupById,
    useGetAccountMainById,
    useGetAccountSpecById,
    useGetAllAccountPersonLinks,
    useGetCodingById,
    useGetRevenueModels,
    useGetAllAccountPerson,
    useGetPersonById,
}