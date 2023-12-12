import {BaseUrl} from "./dashboardApi";


export const addCoding = (data)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'POST',
        url:'/accountCodingService/api/AccountCodings/Add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingName": data.accountCodingName,
            "accountCodingCode": data.accountCodingCode,
        }
    })
}

export const editCoding = (data , codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/accountCodingService/api/AccountCodings/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingId": Number(codingId),
            "accountCodingName": data.accountCodingName,
            "accountCodingCode": data.accountCodingCode,
        }
    })
}

export const getAllCoding = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/accountCodingService/api/AccountCodings/getAll',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
    })
}


export const getAllAccountGroup = (codingKindId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/accountGroupService/api/accountGroups/GetByAccountCodingId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingId":codingKindId,
        }
    })
}

export const deleteCoding = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/accountCodingService/api/AccountCodings/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data: {"accountCodingId": codingId}
    })
}


export const getCodingById = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/accountCodingService/api/AccountCodings/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingId":codingId,
        }
    })
}