import {BaseUrl} from "./dashboardApi";

export const getAllAccountDefaultLinks = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountPersonservice/api/DefaultPersonLinks/getAll',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "link":true,
            "spec": true,
            "main": true,
            "group": true,
        }
    })

}

export const getAccountDefaultDetailLink = (accountId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountDetailService/api/AccountDetailDefaultLinks/GetByAccountDetailDefaultId',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailDefaultId": Number(accountId),
            "subsidiary": true,
            "general": true,
            "group": true
        }
    })
}

export const getAllAccountDetailDefault = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountDetailService/api/AccountDetailDefaults/GetByAccountCodingId',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingId": Number(codingId),
        }
    })
}

export const getAccountDetailDefaultById = (detailDefaultId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountDetailService/api/AccountDetailDefaults/getById',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailDefaultId": Number(detailDefaultId),
            "accountDetailType":true,
        }
    })
}

export const addAccountDetailDefaults = (data , codingId ,accountDetailTypeId )=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountDetailService/api/AccountDetailDefaults/add',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingId": Number(codingId),
            "accountDetailTypeId": Number(accountDetailTypeId),
            "accountDetailDefaultCode": Number(data.accountDetailDefaultCode),
            "accountDetailDefaultName": data.accountDetailDefaultName,
            "canDelete": data.canDelete === false ? 0 : 1,
        }
    })
}

export const editAccountDetailDefaults = (data ,
                                          accountDetailDefaultId,
                                          accountDetailTypeId ,
                                          accountCodingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'put',
        url: '/AccountDetailService/api/AccountDetailDefaults/edit',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "AccountDetailDefaultId":Number(accountDetailDefaultId),
            "accountCodingId": Number(accountCodingId),
            "accountDetailTypeId": Number(accountDetailTypeId),
            "accountDetailDefaultCode": Number(data.accountDetailDefaultCode),
            "accountDetailDefaultName": data.accountDetailDefaultName,
            "canDelete": data.canDelete === false ? 0 : 1,
        }
    })
}

export const deleteAccountDetailDefault =  (accountDetailDefaultId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'delete',
        url: '/AccountDetailService/api/AccountDetailDefaults/delete',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailDefaultId": Number(accountDetailDefaultId)
        }
    })
}

export const addNewLinkForAccountDetailDefaultSubsidiary = (defaultId , subsidiaryId , canDelete)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountDetailService/api/AccountDetailDefaultLinks/add',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailDefaultId": Number(defaultId),
            "accountSubsidiaryId": Number(subsidiaryId),
            "canDelete": Number(canDelete)
        }
    })
}

export const deleteNewLinkForAccountDetailDefaultSubsidiary = (linkId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'delete',
        url: '/AccountDetailService/api/AccountDetailDefaultLinks/delete',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountDetailDefaultLinkId": Number(linkId)
        }
    })
}