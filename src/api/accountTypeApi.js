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