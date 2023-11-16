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

export const getAllAccountMain = (accountGroupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
   return BaseUrl({
       method:'post',
       url:'/AccountMainservice/api/AccountMains/GetAccountMainByGroupId',
       headers:{
           "selfUserId": userAuthData.userId,
           "Authorization": userAuthData.accessToken,
           'Content-Type': 'application/json'
       },
       data:{
           "accountGroupId":accountGroupId,
           "group":true
       }
   })
}

export const getAccountMainById = (accountMainId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/AccountMainservice/api/AccountMains/GetAccountMain',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountMainId":accountMainId,
            "group":true
        }
    })
}

export const editAccountMainIsActive = (accountMainId , isActive)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/AccountMainservice/api/AccountMains/EditIsActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountMainId":accountMainId,
            "isActive":isActive,
        }
    })
}

export const deleteAccountMain = (accountMainId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/AccountMainservice/api/AccountMains/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountMainId":accountMainId,
        }
    })
}

export const editAccountMain = (mainId,data , instinct , type)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/AccountMainservice/api/AccountMains/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":data.accountGroupId,
            "accountMainId":mainId,
            "accountMainCode":data.accountMainCode,
            "accountMainName":data.accountMainName,
            "lang":"fa",
            "isActive":true,
            "instinct":instinct,
            "type":type
        }
    })
}