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