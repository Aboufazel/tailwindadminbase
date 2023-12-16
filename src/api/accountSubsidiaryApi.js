import {BaseUrl} from "./dashboardApi";

export const addAccountSubsidiary = (data , accountNature , balanceSheet)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/AccountSubsidiaryService/api/AccountSubsidiaries/add',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGeneralId":Number(data.accountGeneralId),
            "accountSubsidiaryCode":Number(data.accountSubsidiaryCode),
            "accountSubsidiaryName":data.accountSubsidiaryName,
            "accountNature":Number(accountNature),
            "balanceSheetType":Number(balanceSheet)}
    })
}

export const getAllAccountSubsidiaryByMainId = (generalId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSubsidiaryService/api/AccountSubsidiaries/GetByGeneralId',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGeneralId":generalId,
            "main":true,
            "group":true
        }
    })

}

export const getAllAccountSubsidiary = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSubsidiaryService/api/AccountSubsidiaries/getAll',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "main":true,
            "group":true
        }
    })
}

export const editAccountSubsidiary = (subsidiaryId , data , accountNature , balanceSheet)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'put',
        url: '/AccountSubsidiaryService/api/AccountSubsidiaries/edit',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountSubsidiaryId":Number(subsidiaryId),
            "accountGeneralId":Number(data.accountGeneralId),
            "accountSubsidiaryCode":Number(data.accountSubsidiaryCode),
            "accountSubsidiaryName":data.accountSubsidiaryName,
            "accountNature":Number(accountNature),
            "balanceSheetType":Number(balanceSheet)
        }
    })
}

export const getAccountSubsidiaryById = (subsidiaryId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSubsidiaryService/api/AccountSubsidiaries/GetById',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountSubsidiaryId":subsidiaryId,
            "general":true,
            "group":true,
        }}
    )
}

export const deleteAccountSubsidiary = (subsidiaryId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
            method: 'delete',
            url: '/AccountSubsidiaryService/api/AccountSubsidiaries/delete',
            headers: {
                "selfUserId": userAuthData.userId,
                "Authorization": userAuthData.accessToken,
                'Content-Type': 'application/json'
            },
            data:{
                "accountSubsidiaryId":Number(subsidiaryId),
            }
        }
    )
}