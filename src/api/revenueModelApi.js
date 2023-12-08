import {BaseUrl} from "./dashboardApi";

export const getAllRevenueModel = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenueModels/getRevenueModelByAccountCodingCode',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
          "accountCodingId":codingId ,
        },
    })
}

export const manageRevenueModelsActive = (revenueId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenueModels/active',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(revenueId) ,
        },
    })
}

export const manageRevenueModelsDeActive = (revenueId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenueModels/DeActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(revenueId) ,
        },
    })
}

export const getRevenueModelByIdApi = (revenueId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenueModels/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":revenueId ,
        },
    })
}

export const addRevenueModel = (data)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenueModels/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelCode":data.revenueModelCode,
            "revenueModelName":data.revenueModelName,
            "revenueModelType":data.revenueModelType,
            "accountCodingId":Number(data.accountCodingId) ,
            "fiscalYearLimit":Number(data.fiscalYearLimit),
        },
    })
}

export const editRevenueModel = (data , codingId ,revenueId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenueModels/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(revenueId),
            "revenueModelCode":data.revenueModelCode,
            "revenueModelName":data.revenueModelName,
            "revenueModelType":data.revenueModelType,
            "accountCodingId":codingId ,
            "fiscalYearLimit":Number(data.fiscalYearLimit),
        },
    })
}


//revenue plans api

export const addRevenuePlans = (data)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlans/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(data.revenueModelId),
            "revenuePlanCode":Number(data.revenuePlanCode),
            "revenuePlanName":data.revenuePlanName
        },
    })
}

export const getRevenuePlansByModelId = (revenueModelId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlans/getByRevenueModelId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(revenueModelId),
        },
    })
}

export const getAllRevenueModelNoId = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenueModels/getAll',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        }
    })
}