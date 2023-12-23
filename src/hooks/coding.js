import {useQuery} from "@tanstack/react-query";
import {getAllAccountGroup, getAllCoding, getCodingById} from "../api/codingKind";
import {getAccountGeneralById, getAllAccountGeneral} from "../api/accountMainApi";
import {
    getAccountSubsidiaryById,
    getAllAccountSubsidiary,
    getAllAccountSubsidiaryByMainId
} from "../api/accountSubsidiaryApi";
import {
    getAccountDetailTypeByCodingId, getAccountDetailTypeById, getAllAccountDetailTypeSubsidiaryAccountDetailTypeId,
} from "../api/accountDetailTypeApi";
import {getAccountGroupById} from "../api/accountGroupApi";
import {
    getAccountDetailDefaultById,
    getAllAccountDefaultLinks,
    getAllAccountDetailDefault,
} from "../api/accountDetailDefaultsApi";
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
        queryFn:()=>getAllAccountGeneral(`${groupId}`),
    })
}


const useAllAccountSubsidiaryByMain = (queryKey , mainId)=>{
    return useQuery({
       queryKey:[queryKey],
       queryFn:()=>getAllAccountSubsidiaryByMainId(`${mainId}`)
    })
}



const useAllAccountTypesByCoding = (queryKey , codingId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountDetailTypeByCodingId(codingId)
    })
}


const useAllAccountSubsidiaryByDetailTypeId = (queryKey , typeId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAllAccountDetailTypeSubsidiaryAccountDetailTypeId(typeId)
    })
}


const useAllAccountSpec = (queryKey)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:getAllAccountSubsidiary,
    })
}

const useGetAccountTypeById = (queryKey , typeId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountDetailTypeById(typeId)
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
        queryFn:()=>getAccountGeneralById(accountMainId)
    })
}


const useGetAccountSubsidiaryById = (queryKey , accountSubsidiaryId) => {
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountSubsidiaryById(accountSubsidiaryId)
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
        queryFn:()=>getAllAccountDetailDefault(codingId)
    })
}

const useGetPersonById = (queryKey , detailDefaultId)=>{
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=>getAccountDetailDefaultById(detailDefaultId)
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
    useAllAccountSubsidiaryByMain,
    useAllAccountTypesByCoding,
    useAllAccountSubsidiaryByDetailTypeId,
    useGetAccountTypeById,
    useAllAccountSpec,
    useGetAccountGroupById,
    useGetAccountMainById,
    useGetAccountSubsidiaryById,
    useGetAllAccountPersonLinks,
    useGetCodingById,
    useGetRevenueModels,
    useGetAllAccountPerson,
    useGetPersonById,
}