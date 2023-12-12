import {BaseUrl} from "./dashboardApi";

export const getAllBusiness = ()=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'post',
        url:'/BusinessService/api/businesses/getAll',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
    })
}

export const activeBusiness = (businessId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:'put',
        url:'/BusinessService/api/businesses/active',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "businessId": businessId,
            "isActive": 1,
        }
    })
}

export const deActiveBusiness = (businessId)=> {
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method: 'put',
        url: '/BusinessService/api/businesses/deActive',
        headers: {
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data: {
            "businessId": businessId,
            "isActive": 0,
        }
    })
}