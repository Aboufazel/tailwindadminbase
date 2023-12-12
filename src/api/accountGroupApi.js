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
            "accountCodingId":codingId,
            "accountGroupCode":Number(data.accountGroupCode),
            "accountGroupName":data.accountGroupName,
        }
    })
}

export const getAccountGroupById = (accountGroupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"post",
        url:'/AccountGroupService/api/accountGroups/getById',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":accountGroupId
        }
    })
}

export const editAccountGroup = (id,data , codingId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountGroupService/api/accountGroups/edit',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":Number(id),
            "accountGroupCode":Number(data.accountGroupCode),
            "accountGroupName":data.accountGroupName,
            "accountCodingId":Number(codingId),
        }
    })
}

export const editAccountGroupIsActive = (groupId , isActive)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountGroupService/api/accountGroups/editIsActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":groupId,
            "isActive":isActive
        }
    })
}

export const activeAccountGroup = (groupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountGroupService/api/accountGroups/active',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":Number(groupId),
            "isActive":1
        }
    })
}

export const deActiveAccountGroup = (groupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"put",
        url:'/AccountGroupService/api/accountGroups/deActive',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":Number(groupId),
            "isActive":0
        }
    })
}



export const deleteAccountGroup = (groupId)=>{
    const storageData = localStorage.getItem("auth")
    const userAuthData = JSON.parse(storageData);
    return BaseUrl({
        method:"delete",
        url:'/AccountGroupService/api/accountGroups/delete',
        headers:{
            "selfUserId": userAuthData.userId,
            "Authorization": userAuthData.accessToken,
            'Content-Type': 'application/json'
        },
        data:{
            "accountGroupId":groupId,
        }
    })
}