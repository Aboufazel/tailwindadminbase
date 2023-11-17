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

export const getAllAccountSpecByMainId = (mainId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSpecservice/api/AccountSpecs/GetAccountSpecByMainId',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountMainId":mainId,
            "main":true,
            "group":true
        }
    })

}

export const getAllAccountSpec = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSpecservice/api/AccountSpecs/getAll',
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

export const editAccountSpec = (specId , data , instinct , type)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'put',
        url: '/AccountSpecservice/api/AccountSpecs/edit',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountSpecId":specId,
            "accountMainId":data.accountMainId,
            "accountSpecCode":data.accountSpecCode,
            "accountSpecName":data.accountSpecName,
            "instinct":instinct,
            "type":type,
            "isActive":true,
            "lang":"fa"}
    })
}

export const getAccountSpecById = (specId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountSpecservice/api/AccountSpecs/GetAccountSpec',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountSpecId":specId,
            "main":true,
            "group":true,
        }}
    )
}

export const editIsActiveAccountSpec = (specId , isActive)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'put',
        url: '/AccountSpecservice/api/AccountSpecs/EditIsActive',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountSpecId":specId,
            "isActive":isActive,
        }
    }
    )
}

export const deleteAccountSpec = (specId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
            method: 'delete',
            url: '/AccountSpecservice/api/AccountSpecs/delete',
            headers: {
                "selfUserId": userAuthData.userId,
                "Authorization": userAuthData.accessToken,
                'Content-Type': 'application/json'
            },
            data:{
                "accountSpecId":specId,
            }
        }
    )
}