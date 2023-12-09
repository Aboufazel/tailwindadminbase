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

export const deleteRevenueModel = (revenueModelId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/revenueModelService/api/RevenueModels/delete',
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

export const editRevenuePlans = (data , modelId , planId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlans/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenueModelId":Number(modelId),
            "revenuePlanId":Number(planId),
            "revenuePlanCode":Number(data.revenuePlanCode),
            "revenuePlanName":data.revenuePlanName
        },
    })
}


export const deleteRevenuePlans = (planId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/revenueModelService/api/RevenuePlans/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(planId),
        },
    })
}

export const getAllRevenuePlans = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlans/getAll',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        }
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

export const getRevenuePlansDataById = (plansId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlans/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(plansId),
        },
    })
}

export const manageRevenuePlansActive = (revenuePlanId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlans/active',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(revenuePlanId) ,
        },
    })
}

export const manageRevenuePlansDeActive = (revenuePlanId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlans/DeActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(revenuePlanId) ,
        },
    })
}


// revenue plans price api

export const addRevenuePlanPrice = (data)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlanPrices/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(data.revenuePlanId),
            "revenuePlanPriceCode":Number(data.revenuePlanPriceCode),
            "revenuePlanPriceName":data.revenuePlanPriceName,
            "price":Number(data.price),
            "duration":Number(data.duration),
            "isInitial":data.noOne === "1" ? 0 : Number(data.isInitial),
            "isGift":data.noOne === "1" ? 0 : Number(data.isGift),
            "buyLimit":Number(data.buyLimit),
        },
    })
}

export const getRevenuePlansPriceById = (revenuePlanId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlanPrices/getByRevenuePlanId',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(revenuePlanId),
        },
    })
}

export const getRevenuePlansPriceDetail = (revenuePlanPriceId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/revenueModelService/api/RevenuePlanPrices/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanPriceId":Number(revenuePlanPriceId),
        },
    })
}

export const deleteRevenuePlanPrice = (revenuePlanPriceId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/revenueModelService/api/RevenuePlanPrices/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanPriceId":Number(revenuePlanPriceId),
        },
    })
}

export const manageRevenuePlanPriceActive = (revenuePlanPriceId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlanPrices/active',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanPriceId":Number(revenuePlanPriceId) ,
        },
    })
}

export const manageRevenuePlanPriceDeActive = (revenuePlanPriceId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlanPrices/DeActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanPriceId":Number(revenuePlanPriceId) ,
        },
    })
}

export const editRevenuePlanPrice = (data , revenuePlanId , planPriceId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/revenueModelService/api/RevenuePlanPrices/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            "Content-Type":"application/json"
        },
        data:{
            "revenuePlanId":Number(revenuePlanId),
            "revenuePlanPriceId":Number(planPriceId),
            "revenuePlanPriceCode":Number(data.revenuePlanPriceCode),
            "revenuePlanPriceName":data.revenuePlanPriceName,
            "price":Number(data.price),
            "duration":Number(data.duration),
            "isInitial":data.noOne === "1" ? 0 : Number(data.isInitial),
            "isGift":data.noOne === "1" ? 0 : Number(data.isGift),
            "buyLimit":Number(data.buyLimit),
        },
    })
}

