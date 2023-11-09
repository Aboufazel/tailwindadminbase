import {BaseUrl} from "./dashboardApi";

export const addAccountGroup = (data , codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountGroupService/api/accountGroups/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupCode":data.accountGroupCode,
            "accountGroupName":data.accountGroupName,
            "accountCodingKindId":codingId,
            "lang":"fa"
        }
    })
}