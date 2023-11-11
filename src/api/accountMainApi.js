import {BaseUrl} from "./dashboardApi";

export const addAccountMain = (data , instinct , type)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);

    return BaseUrl({
        method:'post',
        url:'/AccountMainservice/api/AccountMains/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":data.accountGroupId,
            "accountMainCode":data.accountMainCode,
            "accountMainName":data.accountMainName,
            "lang":"fa",
            "instinct":instinct,
            "type":type}
    })
}