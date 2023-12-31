import axios from "axios";

export const BaseUrl = axios.create({
    baseURL: 'http://siavashma.ir'
})

const storageData = localStorage.getItem("auth")
const userAuthData = JSON.parse(storageData);

export const LoginApi = (data) =>{
    return BaseUrl({
        method:"post",
        url:`/userservice/api/users/GetByUsernamePassword`,
        headers:{
            "Content-Type":"application/json"
        },
        data:{
            "username":data.email,
            "password":data.password,
        }
    });
}

export const forgetPass = (data)=>{
   return BaseUrl ({
       method:'put',
       url:'/userservice/api/users/Forgetpassword',
       headers:{
           "selfUserId": userAuthData.userId,
           "Authorization": userAuthData.accessToken,
           'Content-Type': 'application/json'
       },
       data:{
         "userName":data.userName,
       }
   })
}

export const UserDetail = (id) =>{
    return BaseUrl.get(`/api/users/${id}`)
}



export const UserLists = () =>{
    return BaseUrl.get('/api/users?page=2')
}