import axios from "axios";

export const BaseUrl = axios.create({
    baseURL: 'http://siavashma.ir/userservice/api/users/'
})

const storageData = localStorage.getItem("auth")
const userAuthData = JSON.parse(storageData);

export const LoginApi = (data) =>{

    return BaseUrl.get(`GetByUsernamePassword?username=${data.email}&password=${data.password}`);
}

export const forgetPass = (data)=>{
   return BaseUrl ({
       method:'put',
       url:'Forgetpassword',
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