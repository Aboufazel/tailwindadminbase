import axios from "axios";

const BaseUrl = axios.create({
    baseURL: 'https://reqres.in/'
})

export const LoginApi = (data) =>{
    return BaseUrl.post(`api/login` , {email:data.email , password:data.password})
}

export const UserDetail = (id) =>{

    return BaseUrl.get(`/api/users/${id}`)
}



export const UserLists = () =>{
    return BaseUrl.get('/api/users?page=2')
}