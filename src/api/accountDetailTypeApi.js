import {BaseUrl} from "./dashboardApi";

export const addAccountDetailType = (data , codingId , automatic , float)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountDetailTypeService/api/AccountDetailTypes/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingId":Number(codingId),
            "accountDetailTypeCode":Number(data.accountDetailTypeCode),
            "accountDetailTypeName":data.accountDetailTypeName,
            "type":data.type,
            "isAutomatic":automatic,
            "isFloat":float,
        }
    })
}

export const getAccountDetailTypeByCodingId = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountDetailTypeService/api/AccountDetailTypes/GetByAccountCodingId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingId":codingId,
        }
    })
}

export const getAllAccountDetailTypeSubsidiaryAccountDetailTypeId = (typeId) =>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountDetailTypeService/api/AccountDetailTypeSubsidiaries/GetByAccountDetailTypeId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailTypeId":typeId,
            "group":true,
            "general":true,
        }
    })
}

export const getAccountDetailTypeById = (typeId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountDetailTypeService/api/AccountDetailTypes/GetById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailTypeId":typeId,
        }
    })
}

export const editAccountDetailType = (data , accountDetailTypeId , accountCodingId , isAutomatic , isFloat)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountDetailTypeService/api/AccountDetailTypes/Edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "AccountDetailTypeId":Number(accountDetailTypeId),
            "accountCodingId":Number(accountCodingId),
            "accountDetailTypeCode":Number(data.accountDetailTypeCode),
            "accountDetailTypeName":data.accountDetailTypeName,
            "type":data.type,
            "isAutomatic":isAutomatic,
            "isFloat":isFloat,
        }
    })
}


export const deleteAccountDetailType = (accountDetailTypeId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"delete",
        url:'/AccountDetailTypeService/api/AccountDetailTypes/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailTypeId":Number(accountDetailTypeId),
        }
    })
}

export const deleteAccountDetailTypeSubsidiary = (subsidiaryId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"delete",
        url:'/AccountDetailTypeService/api/AccountDetailTypeSubsidiaries/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data: {
            "accountDetailTypeSubsidiaryId": Number(subsidiaryId),
        }
    })
}

export const editAccountDetailTypeSubsidiary = (accountDetailTypeSubsidiaryId , detailTypeId , SubsidiaryId ,canDelete)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"delete",
        url:'/AccountDetailTypeService/api/AccountDetailTypeSubsidiaries/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data: {
            "accountDetailTypeSubsidiaryId": Number(accountDetailTypeSubsidiaryId),
            "accountDetailTypeId": Number(detailTypeId),
            "accountSubsidiaryId": Number(SubsidiaryId),
            "canDelete": Number(canDelete)
        }
    })
}

export const addNewSubsidiaryForAccountDetailType = (detailTypeId , subsidiaryId , canDelete)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountDetailTypeService/api/AccountDetailTypeSubsidiaries/Add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailTypeId":Number(detailTypeId),
            "accountSubsidiaryId":Number(subsidiaryId),
            "canDelete":Number(canDelete)}
    })
}