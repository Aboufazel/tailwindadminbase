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

export const addRevenueModel = (data , codingId)=>{
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
            "accountCodingId":codingId ,
            "fiscalYearLimit":Number(data.fiscalYearLimit),
        },
    })
}