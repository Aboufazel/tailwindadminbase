import {BaseUrl} from "./dashboardApi";
const storageData = localStorage.getItem("auth")
const userAuthData = JSON.parse(storageData);
export const addAccountMain = (data , instinct , type)=>{


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

export const getAllAccountMain = ()=>{
   return BaseUrl({
       method:'post',
       url:'/AccountMainservice/api/AccountMains/getall',
       headers:{
           "selfUserId": userAuthData.userId,
           "Authorization": userAuthData.accessToken,
           'Content-Type': 'application/json'
       },
       data:{
           "group":true,
       }
   })
}