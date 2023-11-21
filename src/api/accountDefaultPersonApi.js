import {BaseUrl} from "./dashboardApi";

export const getAllAccountDefault = ()=>{
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