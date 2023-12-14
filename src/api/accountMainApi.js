import {BaseUrl} from "./dashboardApi";
export const addAccountGeneral = (data , accountNature , balanceSheet)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/AccountGeneralService/api/AccountGenerals/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":Number(data.accountGroupId),
            "accountGeneralCode":Number(data.accountGeneralCode),
            "accountGeneralName":data.accountGeneralName,
            "accountNature":Number(accountNature),
            "balanceSheetType":Number(balanceSheet)
        }
    })
}

export const getAllAccountGeneral = (accountGroupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
   return BaseUrl({
       method:'post',
       url:'/AccountGeneralService/api/AccountGenerals/GetByAccountGroupId',
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

export const getAccountGeneralById = (accountMainId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/AccountGeneralService/api/AccountGenerals/GetById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGeneralId":accountMainId,
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

export const deleteAccountGeneral = (accountGeneralId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'delete',
        url:'/AccountGeneralService/api/AccountGenerals/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGeneralId":accountGeneralId,
        }
    })
}

export const editAccountGeneral = (mainId,data , accountNature , balanceSheet)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/AccountGeneralService/api/AccountGenerals/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":Number(data.accountGroupId),
            "accountGeneralId":Number(mainId),
            "accountGeneralCode":Number(data.accountGeneralCode),
            "accountGeneralName":data.accountGeneralName,
            "accountNature":Number(accountNature),
            "balanceSheetType":Number(balanceSheet)
        }
    })
}