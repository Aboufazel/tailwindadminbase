import {BaseUrl} from "./dashboardApi";

export const addAccountSpec = (data , instinct , type)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/AccountSpecservice/api/AccountSpecs/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountMainId":data.accountMainId,
            "accountSpecCode":data.accountSpecCode,
            "accountSpecName":data.accountSpecName,
            "lang":"fa",
            "instinct":instinct,
            "type":type}
    })
}