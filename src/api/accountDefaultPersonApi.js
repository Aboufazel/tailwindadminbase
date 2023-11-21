import {BaseUrl} from "./dashboardApi";

export const getAllAccountDefault = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'post',
        url: '/Personservice/api/DefaultPersonLinks/getAll',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "spec": true,
            "main": true,
            "group": true
        }
    })

}