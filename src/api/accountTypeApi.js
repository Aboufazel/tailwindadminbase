import {BaseUrl} from "./dashboardApi";

export const addAccountType = (data , codingId , automatic , float)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountTypeService/api/AccountTypes/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{"accountCodingKindId":codingId,
            "accountTypeCode":data.accountTypeCode,
            "accountTypeName":data.accountTypeName,
            "isAutomatic":automatic === 1 ,
            "isFloat":float === 1,
            "lang":"fa"}
    })
}

export const getAccountTypeCodingKind = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountTypeService/api/AccountTypes/GetAccountTypeCodingKind',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeCodingKindId":codingId,
        }
    })
}

export const getAllAccountTypeSpecByAccountTypeId = (typeId) =>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountTypeService/api/AccountTypeSpecs/GetAllAccountTypeSpecByAccountTypeId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":typeId,
        }
    })
}

export const getAccountTypeById = (typeId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountTypeService/api/AccountTypes/GetAccountType',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":typeId,
        }
    })
}

export const editAccountType = (data , accountTypeId , accountCodingKindId , isAutomatic , isFloat , isActive)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountTypeService/api/AccountTypes/Edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":accountTypeId,
            "accountCodingKindId":accountCodingKindId,
            "accountTypeCode":data.accountTypeCode,
            "accountTypeName":data.accountTypeName,
            "isAutomatic":isAutomatic,
            "isActive":isActive,
            "isFloat":isFloat,
            "lang":"fa"}
    })
}

export const editAccountTypeIsActive = (accountTypeId , isActive)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountTypeService/api/AccountTypes/EditIsActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":accountTypeId,
            "isActive":isActive,
        }
    })
}

export const deleteAccountType = (accountTypeId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"delete",
        url:'/AccountTypeService/api/AccountTypes/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":accountTypeId,
        }
    })
}


export const editAccountTypeSpec = ()=>{}

export const deleteAccountTypeSpec = ()=>{}

export const addNewSpecForAccountType = (typeId , specId , canDelete)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountTypeService/api/AccountTypeSpecs/Add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountTypeId":typeId,
            "accountSpecId":specId,
            "lang":"fa",
            "canDelete":canDelete}
    })
}