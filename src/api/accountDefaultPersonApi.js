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

export const getAllAccountPerson = (codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountPersonservice/api/DefaultPersons/GetDefaultPersonCodingKindId',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingKindId": Number(codingId),
        }
    })
}

export const getAccountPersonById = (personId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountPersonservice/api/DefaultPersons/getDefaultPerson',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "defaultPersonId": Number(personId)
        }
    })
}

export const addAccountDefaultPerson = (data , codingId ,accountTypeId )=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/AccountPersonservice/api/DefaultPersons/add',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountCodingKindId": Number(codingId),
            "accountTypeId": Number(accountTypeId),
            "defaultPersonCode": data.accountPersonCode,
            "defaultPersonName": data.accountPersonName,
            "canDelete": data.canDelete ? 0 : 1,
            "instinct": 0,
            "type": 0,
            "lang": "fa"
        }
    })
}

export const deleteAccountPerson =  (personId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'delete',
        url: '/AccountPersonservice/api/DefaultPersons/delete',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "defaultPersonId": Number(personId)
        }
    })
}