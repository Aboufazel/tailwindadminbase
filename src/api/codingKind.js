import {BaseUrl} from "./dashboardApi";


export const addCoding = (data)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'POST',
        url:'/accountCodingKindService/api/AccountCodingKinds/Add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingKindName": data.accountCodingKindName,
            "accountCodingKindCode": data.accountCodingKindCode,
            "accountCodingKindDesc": data.accountCodingKindDesc,
            "isActive": true,
            "lang": "fa"
        }
    })
}

export const editCoding = (data , codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/accountCodingKindService/api/AccountCodingKinds/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingKindId": Number(codingId),
            "accountCodingKindName": data.accountCodingKindName,
            "accountCodingKindCode": data.accountCodingKindCode,
            "accountCodingKindDesc": data.accountCodingKindDesc,
            "isActive": true,
            "lang": "fa"
        }
    })
}

export const getAllCoding = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/accountCodingKindService/api/AccountCodingKinds/getAll',
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
        url:'/accountGroupService/api/accountGroups/GetAccountGroupCodingKindId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingKindId":codingKindId,
        }
    })
}

export const deleteCoding = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/accountCodingKindService/api/AccountCodingKinds/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data: {"accountCodingKindId": codingId}
    })
}


export const getCodingById = (codingKindId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/accountCodingKindService/api/AccountCodingKinds/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "accountCodingKindId":codingKindId,
        }
    })
}